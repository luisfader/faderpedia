# Faderpedia

La enciclopedia del multiverso de Robert Fader, en **español** y **ruso**: los universos, personajes, lugares, organizaciones, fenómenos y artefactos de las novelas publicadas en [Litmir](https://github.com/luisfader/litmir).

Энциклопедия мультивселенной Роберта Фадера на **испанском** и **русском** языках.

## Qué tiene

- **184 artículos en español, ruso e inglés** (incluidos los conceptos y las referencias históricas) con ficha, índice, «véase también» y «lo que enlaza aquí» calculado automáticamente.
- **Portadas de universos**: La hora salvaje, Utopía Turquesa, Historias de Sinea, Los Fader, Resonancia del amor, Ondas de amor, Máscara de Venecia, El subsuelo de Praga y Romance estelar.
- **Biblioteca** con las 81 novelas del catálogo de Litmir, filtrable por idioma, con sinopsis, versiones en otros idiomas y personajes.
- **Índice de personajes** con los 313 personajes del catálogo.
- **Mapa del multiverso** con los cruces entre universos.
- **Galería** con las 509 ilustraciones de los capítulos de Litmir, visor a pantalla completa y ilustraciones en cada ficha y artículo.
- Búsqueda instantánea (tecla `/`), tema claro/oscuro, adaptado a móvil.

## Estructura

```
index.html              el sitio completo (no necesita compilación)
assets/                 estilos, lógica e icono
data/a-*.js             los artículos, escritos a mano (ES + RU)
data/a-novedades.js     artículos nuevos y ampliaciones (addTo) de octubre de 2026
data/a-novedades-2.js   novedades de finales de octubre: Argenta, final de Praga, retratos nuevos
data/en/                la versión en inglés (EN() por artículo, ENadd() para ampliaciones)
data/library.js         novelas y personajes, generado desde litmir
data/sinopsis.js        sinopsis traducidas al español y al ruso
img/                    portadas, retratos e ilustraciones de capítulos (img/ill/), reducidos a webp
tools/build_library.py  regenera data/library.js e img/ desde una copia de litmir
tools/check.js          comprueba enlaces internos y referencias
```

## Añadir o editar un artículo

Cada artículo es una llamada `A({...})` en uno de los archivos `data/a-*.js`:

```js
A({
  id: 'zmaj', type: 'criatura', uni: 'hora-salvaje', img: 'img/covers/la-savo-de-zmaj.webp',
  novels: ['dikij-chas'],            // slugs del catálogo de litmir
  see: ['natasha', 'luis'],          // otros artículos
  es: { t: 'Título', s: 'Resumen', box: [['Campo', 'Valor']], b: `Cuerpo` },
  ru: { t: 'Заголовок', s: 'Кратко', box: [['Поле', 'Значение']], b: `Текст` }
});
```

Tipos: `universo`, `personaje`, `criatura`, `lugar`, `organizacion`, `fenomeno`, `artefacto`, `acontecimiento`, `concepto`, `historia` (referencias históricas reales), `autor`.

Formato del cuerpo: párrafos separados por una línea en blanco, `## Título`, listas con `- `, citas con `> `, `**negrita**`, `*cursiva*` y enlaces internos `[[id]]` o `[[id|texto]]` (el id puede ser un artículo o el slug de una novela).

Después de editar:

```
node tools/check.js
```

## Sinopsis en español y ruso

Cada ficha de novela muestra la sinopsis en el idioma de la página. La original viene de litmir; las traducciones están en `data/sinopsis.js` (`slug: { es: '…', ru: '…' }`). Al añadir una novela nueva, agregá ahí su traducción.

## Actualizar la biblioteca

Cuando litmir tenga novelas o personajes nuevos:

```
python3 tools/build_library.py ../litmir
```

El script también copia y reduce las ilustraciones de los capítulos a `img/ill/<novela>/` y aplica las correcciones de nombres pendientes en litmir (por ejemplo «Olas de amor» → «Ondas de amor»). Las novelas marcadas como `wip` en litmir aparecen con la etiqueta «En curso».

## Ver el sitio en local

```
python3 -m http.server
```

y abrir `http://localhost:8000`. Para publicarlo, basta con activar GitHub Pages sobre la raíz del repositorio.
