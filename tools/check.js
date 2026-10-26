// Comprueba enlaces internos, novelas y referencias de los artículos.
// Uso: node tools/check.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
// Los mismos datos que carga index.html, en el mismo orden.
[...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1])
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));
const W = ctx.window, ids = new Set(), novels = new Set(W.LIBRARY.novels.map(n => n.slug));
let bad = 0;
const err = m => { bad++; console.log('✗', m); };
W.ARTICLES.forEach(a => { if (ids.has(a.id)) err('id duplicado ' + a.id); ids.add(a.id); });
W.ARTICLES.forEach(a => {
  ['es', 'ru', 'en'].forEach(l => {
    if (!a[l] || !a[l].t || !a[l].s || !a[l].b) err(a.id + ': falta ' + l);
    const src = (a[l].b || '') + JSON.stringify(a[l].box || []);
    for (const m of src.matchAll(/\[\[([a-z0-9-]+)/g)) if (!ids.has(m[1]) && !novels.has(m[1])) err(a.id + '/' + l + ': enlace roto ' + m[1]);
  });
  (a.novels || []).forEach(s => novels.has(s) || err(a.id + ': novela inexistente ' + s));
  (a.see || []).forEach(s => ids.has(s) || err(a.id + ': see inexistente ' + s));
  if (a.img && !fs.existsSync(path.join(root, a.img))) err(a.id + ': imagen inexistente ' + a.img);
});
(W.FACTS || []).forEach(f => ['es', 'ru', 'en'].forEach(l => { if (!f[l]) return err('fact sin ' + l + ': ' + f.es.slice(0, 40)); for (const m of f[l].matchAll(/\[\[([a-z0-9-]+)/g)) if (!ids.has(m[1])) err('fact: ' + m[1]); }));
(W.LINKS || []).forEach(k => { [k[0], k[1]].forEach(u => ids.has(u) || err('link: ' + u)); if (!k[2].en) err('link sin en: ' + k[0] + '-' + k[1]); });
novels.forEach(s => { const n = W.LIBRARY.novels.find(x => x.slug === s); if (n.lang !== 'en' && !((W.SINOPSIS || {})[s] || {}).en) err('sinopsis sin en: ' + s); });
W.LIBRARY.characters.forEach(c => c.en || err('personaje sin en: ' + c.id));
console.log(W.ARTICLES.length + ' artículos, ' + novels.size + ' novelas, ' + bad + ' errores');
process.exit(bad ? 1 : 0);
