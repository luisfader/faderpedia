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
    if os.path.exists(out):
        return True
    try:
        im = Image.open(path).convert('RGB')
        h = round(im.height * width / im.width)
        im.resize((width, h), Image.LANCZOS).save(out, 'WEBP', quality=78)
        return True
    except Exception as e:
        print('skip', path, e)
        return False

novels = []
for n in cat['novels']:
    cover = None
    c = n.get('cover')
    if c and os.path.exists(os.path.join(src, c)):
        out = os.path.join(root, 'img/covers', n['slug'] + '.webp')
        if thumb(os.path.join(src, c), out, 360):
            cover = 'img/covers/' + n['slug'] + '.webp'
    novels.append({
        'slug': n['slug'], 'lang': n['lang'], 'title': n['title'],
        'genre': n.get('genre'), 'year': n.get('year'), 'adult': bool(n.get('adult')),
        'desc': n.get('description', ''), 'chapters': len(n.get('chapters', [])),
        'translations': n.get('translations', {}), 'cover': cover,
    })

people = []
for ch in chars['characters']:
    L = ch.get('localizations', {})
    people.append({
        'id': ch['id'], 'name': ch['name'], 'role': ch.get('role', ''),
        'novels': ch.get('novels', []),
        'es': L.get('es'), 'ru': L.get('ru'),
    })

imgdir = os.path.join(src, 'characters/img')
for f in sorted(os.listdir(imgdir)) if os.path.isdir(imgdir) else []:
    thumb(os.path.join(imgdir, f), os.path.join(root, 'img/chars', os.path.splitext(f)[0] + '.webp'), 480)

data = {'novels': novels, 'series': cat.get('series', []), 'characters': people}
with open(os.path.join(root, 'data/library.js'), 'w', encoding='utf-8') as fh:
    fh.write('// Generado por tools/build_library.py a partir de litmir. No editar a mano.\n')
    fh.write('window.LIBRARY = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(novels), 'novelas,', len(people), 'personajes')
