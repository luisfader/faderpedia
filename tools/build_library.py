#!/usr/bin/env python3
"""Regenera data/library.js e img/ a partir de una copia local de litmir.

Uso: python3 tools/build_library.py ../litmir
"""
import json, sys, os
from PIL import Image

src = sys.argv[1] if len(sys.argv) > 1 else '../litmir'
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

cat = json.load(open(os.path.join(src, 'novels/catalog.json'), encoding='utf-8'))
chars = json.load(open(os.path.join(src, 'characters/catalog.json'), encoding='utf-8'))

def thumb(path, out, width):
    # Se regenera solo si la imagen original cambió de tamaño o es más nueva.
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(path):
        return True
    try:
        im = Image.open(path).convert('RGB')
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(out, 'WEBP', quality=76)
        return True
    except Exception as e:
        print('skip', path, e)
        return False

import re
IMG_RE = re.compile(r'!\[([^\]]*)\]\(([^)\s]+)\)')

def illustrations(n):
    """Ilustraciones propias de cada capítulo (no portadas), en orden de lectura."""
    out, seen = [], set()
    base = 'novels/' + n['slug'] + '/'
    for i, ch in enumerate(n.get('chapters', [])):
        f = os.path.join(src, base, ch.get('file', ''))
        if not os.path.isfile(f):
            continue
        for alt, path in IMG_RE.findall(open(f, encoding='utf-8').read()):
            name = os.path.basename(path)
            if not path.startswith(base) or name.startswith('cover') or path in seen:
                continue
            if not os.path.isfile(os.path.join(src, path)):
                continue
            seen.add(path)
            rel = path[len(base):].replace('/', '-')
            stem = os.path.splitext(rel)[0]
            out_rel = 'img/ill/' + n['slug'] + '/' + stem + '.webp'
            os.makedirs(os.path.join(root, 'img/ill', n['slug']), exist_ok=True)
            if thumb(os.path.join(src, path), os.path.join(root, out_rel), 640):
                out.append({'src': out_rel, 'ch': i + 1, 'chTitle': ch.get('title', ''), 'alt': alt})
    return out

# Correcciones de nombres que todavía no están en el catálogo de litmir.
RENAME = [('Olas de amor', 'Ondas de amor')]
def fix(s):
    if isinstance(s, str):
        for a, b in RENAME:
            s = s.replace(a, b)
    return s

novels = []
for n in cat['novels']:
    cover = None
    c = n.get('cover')
    if c and os.path.exists(os.path.join(src, c)):
        out = os.path.join(root, 'img/covers', n['slug'] + '.webp')
        if thumb(os.path.join(src, c), out, 360):
            cover = 'img/covers/' + n['slug'] + '.webp'
    novels.append({
        'slug': n['slug'], 'lang': n['lang'], 'title': fix(n['title']),
        'genre': n.get('genre'), 'year': n.get('year'), 'adult': bool(n.get('adult')),
        'desc': fix(n.get('description', '')), 'chapters': len(n.get('chapters', [])),
        'translations': n.get('translations', {}), 'cover': cover,
        'wip': bool(n.get('wip')), 'ill': illustrations(n),
    })

people = []
for ch in chars['characters']:
    L = ch.get('localizations', {})
    people.append({
        'id': ch['id'], 'name': ch['name'], 'role': ch.get('role', ''),
        'novels': ch.get('novels', []),
        'es': L.get('es'), 'ru': L.get('ru'), 'en': L.get('en'),
    })

imgdir = os.path.join(src, 'characters/img')
for f in sorted(os.listdir(imgdir)) if os.path.isdir(imgdir) else []:
    thumb(os.path.join(imgdir, f), os.path.join(root, 'img/chars', os.path.splitext(f)[0] + '.webp'), 480)

for s in cat.get('series', []):
    s['name'] = {k: fix(v) for k, v in s.get('name', {}).items()}
for c in people:
    c['name'], c['role'] = fix(c['name']), fix(c['role'])

data = {'novels': novels, 'series': cat.get('series', []), 'characters': people}
with open(os.path.join(root, 'data/library.js'), 'w', encoding='utf-8') as fh:
    fh.write('// Generado por tools/build_library.py a partir de litmir. No editar a mano.\n')
    fh.write('window.LIBRARY = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(novels), 'novelas,', len(people), 'personajes,', sum(len(n['ill']) for n in novels), 'ilustraciones')
