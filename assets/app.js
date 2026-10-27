/* Faderpedia — aplicación de una sola página, sin compilación. */
(function () {
  'use strict';

  var LIB = window.LIBRARY || { novels: [], series: [], characters: [] };
  var ARTS = window.ARTICLES || [];
  var FACTS = window.FACTS || [];
  var LINKS = window.LINKS || [];
  var LITMIR = 'https://luisfader.github.io/litmir/';

  /* ---------- Textos de la interfaz ---------- */
  var T = {
    es: {
      tag: 'La enciclopedia del multiverso', search: 'Buscar en Faderpedia', skip: 'Saltar al contenido',
      home: 'Portada', explore: 'Explorar', universes: 'Universos', categories: 'Categorías', tools: 'Herramientas',
      library: 'Biblioteca', people: 'Índice de personajes', map: 'Mapa del multiverso', random: 'Artículo al azar', all: 'Todos los artículos',
      heroEyebrow: 'Enciclopedia en español, ruso e inglés',
      heroTitle: 'El multiverso de <em>Robert Fader</em>',
      heroText: 'Dragones serbios, fortalezas turquesa, trenes fantasma, esfinges que pasean por la Nevski y una familia mendocina que no puede morir. Todo lo que hay que saber sobre los mundos de Litmir, en un solo lugar.',
      start: 'Empezar por el multiverso', openMap: 'Ver el mapa',
      stArticles: 'artículos', stNovels: 'novelas', stLangs: 'idiomas', stPeople: 'personajes', stIll: 'ilustraciones',
      gallery: 'Galería', illustrations: 'Ilustraciones', chap: 'Cap.', wip: 'En curso', galText: 'Las ilustraciones de los capítulos de Litmir, novela por novela. Tocá una imagen para verla grande y pasar a la siguiente.', allNovels: 'Todas las novelas', seeAllIll: 'Ver todas', fromGallery: 'De la galería', close: 'Cerrar', prev: 'Anterior', next: 'Siguiente',
      featured: 'Artículo del día', prevDays: 'Días anteriores', today: 'Hoy', readMore: 'Leer el artículo', didYouKnow: '¿Sabías que…', another: 'Otros datos',
      exploreUni: 'Explora los universos', byCat: 'Por categoría', latest: 'Novelas de 2026', articlesN: 'artículos',
      contents: 'Contenido', appearsIn: 'Aparece en', seeAlso: 'Véase también', linksHere: 'Lo que enlaza aquí',
      inUniverse: 'Artículos de este universo', novelsOfUni: 'Novelas de este universo',
      notFound: 'No existe ningún artículo con ese nombre.', backHome: 'Volver a la portada',
      results: 'Resultados de búsqueda para', noResults: 'Nada encontrado. Probá con otro nombre o en el otro idioma.',
      allResults: 'Ver todos los resultados', articles: 'Artículos', novels: 'Novelas', characters: 'Personajes',
      libHead: 'Biblioteca', libText: 'Todas las novelas publicadas en Litmir, agrupadas por universo. Cada ficha enlaza con los artículos que la mencionan.',
      filterNovels: 'Filtrar por título…', allLangs: 'Todos los idiomas', standalone: 'Historias independientes',
      chapters: 'capítulos', year: 'Año', lang: 'Idioma', genre: 'Género', series: 'Universo', translations: 'Otras versiones',
      origText: 'Sinopsis en el idioma original', readSource: 'Leer la novela en Litmir', mentioned: 'Artículos que la mencionan', cast: 'Personajes',
      peopleHead: 'Índice de personajes', peopleText: 'Los casi doscientos personajes del catálogo de Litmir. Los que tienen artículo propio llevan un enlace destacado.',
      filterPeople: 'Buscar personaje…', allUnis: 'Todos', article: 'artículo',
      mapHead: 'Mapa del multiverso', mapText: 'Los universos de Fader no están aislados: personajes que cruzan de una historia a otra, nombres que se repiten y objetos que viajan. Tocá un universo para resaltar sus conexiones.',
      catHead: 'Categoría', allHead: 'Todos los artículos', allText: 'Índice alfabético de la enciclopedia.',
      footer: 'Faderpedia es una enciclopedia de lectores sobre la obra de Robert Fader. Las novelas se leen en <a href="https://luisfader.github.io/litmir/">Litmir</a>.',
      adult: 'Para adultos', orig: 'original',
      types: { universo: 'Universos', personaje: 'Personajes', criatura: 'Criaturas', lugar: 'Lugares', organizacion: 'Organizaciones', fenomeno: 'Fenómenos', artefacto: 'Artefactos', acontecimiento: 'Acontecimientos', concepto: 'Conceptos', historia: 'Referencias históricas', autor: 'Autor' },
      type1: { universo: 'Universo', personaje: 'Personaje', criatura: 'Criatura', lugar: 'Lugar', organizacion: 'Organización', fenomeno: 'Fenómeno', artefacto: 'Artefacto', acontecimiento: 'Acontecimiento', concepto: 'Concepto', historia: 'Referencia histórica', autor: 'Autor' },
      catDesc: { universo: 'Las grandes sagas y ciclos', personaje: 'Héroes, villanos y arquetipos', criatura: 'Dragones, zorros, dioses y bestias', lugar: 'Ciudades reales e imaginarias', organizacion: 'Ministerios, órdenes y federaciones', fenomeno: 'Horas, maldiciones y anomalías', artefacto: 'Máscaras, pergaminos y elixires', acontecimiento: 'Carnavales y campeonatos', concepto: 'Ideas que atraviesan todo', historia: 'Personas, lugares y hechos reales', autor: 'Quien lo escribió' }
    },
    ru: {
      tag: 'Энциклопедия мультивселенной', search: 'Поиск по Фадерпедии', skip: 'Перейти к содержанию',
      home: 'Главная', explore: 'Обзор', universes: 'Вселенные', categories: 'Категории', tools: 'Инструменты',
      library: 'Библиотека', people: 'Указатель персонажей', map: 'Карта мультивселенной', random: 'Случайная статья', all: 'Все статьи',
      heroEyebrow: 'Энциклопедия на испанском, русском и английском',
      heroTitle: 'Мультивселенная <em>Роберта Фадера</em>',
      heroText: 'Сербские драконы, бирюзовые крепости, призрачные поезда, сфинксы на Невском и мендосская семья, которая не может умереть. Всё о мирах «Литературного мира» — в одном месте.',
      start: 'Начать с мультивселенной', openMap: 'Открыть карту',
      stArticles: 'статей', stNovels: 'романов', stLangs: 'языков', stPeople: 'персонажей', stIll: 'иллюстраций',
      gallery: 'Галерея', illustrations: 'Иллюстрации', chap: 'Гл.', wip: 'Пишется', galText: 'Иллюстрации к главам «Литературного мира», роман за романом. Нажмите на картинку, чтобы увеличить её и листать дальше.', allNovels: 'Все романы', seeAllIll: 'Смотреть все', fromGallery: 'Из галереи', close: 'Закрыть', prev: 'Назад', next: 'Вперёд',
      featured: 'Статья дня', prevDays: 'В предыдущие дни', today: 'Сегодня', readMore: 'Читать статью', didYouKnow: 'Знаете ли вы, что…', another: 'Другие факты',
      exploreUni: 'Вселенные', byCat: 'По категориям', latest: 'Романы 2026 года', articlesN: 'статей',
      contents: 'Содержание', appearsIn: 'Появляется в', seeAlso: 'См. также', linksHere: 'Ссылки сюда',
      inUniverse: 'Статьи этой вселенной', novelsOfUni: 'Романы этой вселенной',
      notFound: 'Статьи с таким названием нет.', backHome: 'На главную',
      results: 'Результаты поиска по запросу', noResults: 'Ничего не найдено. Попробуйте другое имя или другой язык.',
      allResults: 'Все результаты', articles: 'Статьи', novels: 'Романы', characters: 'Персонажи',
      libHead: 'Библиотека', libText: 'Все романы, опубликованные в «Литературном мире», по вселенным. Каждая карточка ведёт к статьям, где роман упоминается.',
      filterNovels: 'Фильтр по названию…', allLangs: 'Все языки', standalone: 'Отдельные истории',
      chapters: 'глав', year: 'Год', lang: 'Язык', genre: 'Жанр', series: 'Вселенная', translations: 'Другие версии',
      origText: 'Аннотация на языке оригинала', readSource: 'Читать роман в «Литературном мире»', mentioned: 'Статьи, где упоминается', cast: 'Персонажи',
      peopleHead: 'Указатель персонажей', peopleText: 'Почти двести персонажей из каталога «Литературного мира». У тех, о ком есть статья, — выделенная ссылка.',
      filterPeople: 'Найти персонажа…', allUnis: 'Все', article: 'статья',
      mapHead: 'Карта мультивселенной', mapText: 'Вселенные Фадера не изолированы: герои переходят из истории в историю, имена повторяются, предметы путешествуют. Нажмите на вселенную, чтобы выделить её связи.',
      catHead: 'Категория', allHead: 'Все статьи', allText: 'Алфавитный указатель энциклопедии.',
      footer: 'Фадерпедия — читательская энциклопедия о творчестве Роберта Фадера. Романы читайте в <a href="https://luisfader.github.io/litmir/">«Литературном мире»</a>.',
      adult: '18+', orig: 'оригинал',
      types: { universo: 'Вселенные', personaje: 'Персонажи', criatura: 'Существа', lugar: 'Места', organizacion: 'Организации', fenomeno: 'Явления', artefacto: 'Артефакты', acontecimiento: 'События', concepto: 'Понятия', historia: 'Исторические отсылки', autor: 'Автор' },
      type1: { universo: 'Вселенная', personaje: 'Персонаж', criatura: 'Существо', lugar: 'Место', organizacion: 'Организация', fenomeno: 'Явление', artefacto: 'Артефакт', acontecimiento: 'Событие', concepto: 'Понятие', historia: 'Историческая отсылка', autor: 'Автор' },
      catDesc: { universo: 'Большие саги и циклы', personaje: 'Герои, злодеи и архетипы', criatura: 'Драконы, лисы, боги и звери', lugar: 'Реальные и вымышленные города', organizacion: 'Министерства, ордены и федерации', fenomeno: 'Часы, проклятия и аномалии', artefacto: 'Маски, пергаменты и эликсиры', acontecimiento: 'Карнавалы и чемпионаты', concepto: 'Идеи, которые проходят сквозь всё', historia: 'Реальные люди, места и события', autor: 'Тот, кто это написал' }
    },
    en: {
      tag: 'The encyclopedia of the multiverse', search: 'Search Faderpedia', skip: 'Skip to content',
      home: 'Main page', explore: 'Explore', universes: 'Universes', categories: 'Categories', tools: 'Tools',
      library: 'Library', people: 'Character index', map: 'Map of the multiverse', random: 'Random article', all: 'All articles',
      heroEyebrow: 'Encyclopedia in English, Spanish and Russian',
      heroTitle: 'The multiverse of <em>Robert Fader</em>',
      heroText: 'Serbian dragons, turquoise fortresses, ghost trains, sphinxes strolling down Nevsky Prospect and a family from Mendoza that cannot die. Everything you need to know about the worlds of Litmir, in one place.',
      start: 'Start with the multiverse', openMap: 'Open the map',
      stArticles: 'articles', stNovels: 'novels', stLangs: 'languages', stPeople: 'characters', stIll: 'illustrations',
      gallery: 'Gallery', illustrations: 'Illustrations', chap: 'Ch.', wip: 'In progress', galText: 'The chapter illustrations from Litmir, novel by novel. Tap a picture to enlarge it and browse to the next one.', allNovels: 'All novels', seeAllIll: 'See all', fromGallery: 'From the gallery', close: 'Close', prev: 'Previous', next: 'Next',
      featured: 'Article of the day', prevDays: 'Previous days', today: 'Today', readMore: 'Read the article', didYouKnow: 'Did you know…', another: 'More facts',
      exploreUni: 'Explore the universes', byCat: 'By category', latest: 'Novels of 2026', articlesN: 'articles',
      contents: 'Contents', appearsIn: 'Appears in', seeAlso: 'See also', linksHere: 'What links here',
      inUniverse: 'Articles in this universe', novelsOfUni: 'Novels in this universe',
      notFound: 'There is no article with that name.', backHome: 'Back to the main page',
      results: 'Search results for', noResults: 'Nothing found. Try another name or another language.',
      allResults: 'See all results', articles: 'Articles', novels: 'Novels', characters: 'Characters',
      libHead: 'Library', libText: 'Every novel published on Litmir, grouped by universe. Each card links to the articles that mention it.',
      filterNovels: 'Filter by title…', allLangs: 'All languages', standalone: 'Standalone stories',
      chapters: 'chapters', year: 'Year', lang: 'Language', genre: 'Genre', series: 'Universe', translations: 'Other versions',
      origText: 'Synopsis in the original language', readSource: 'Read the novel on Litmir', mentioned: 'Articles that mention it', cast: 'Characters',
      peopleHead: 'Character index', peopleText: 'Almost two hundred characters from the Litmir catalogue. Those with an article of their own have a highlighted link.',
      filterPeople: 'Find a character…', allUnis: 'All', article: 'article',
      mapHead: 'Map of the multiverse', mapText: 'Fader’s universes are not isolated: characters cross from one story to another, names repeat and objects travel. Tap a universe to highlight its connections.',
      catHead: 'Category', allHead: 'All articles', allText: 'Alphabetical index of the encyclopedia.',
      footer: 'Faderpedia is a readers’ encyclopedia about the work of Robert Fader. The novels can be read on <a href="https://luisfader.github.io/litmir/">Litmir</a>.',
      adult: 'Adults only', orig: 'original',
      types: { universo: 'Universes', personaje: 'Characters', criatura: 'Creatures', lugar: 'Places', organizacion: 'Organizations', fenomeno: 'Phenomena', artefacto: 'Artifacts', acontecimiento: 'Events', concepto: 'Concepts', historia: 'Historical references', autor: 'Author' },
      type1: { universo: 'Universe', personaje: 'Character', criatura: 'Creature', lugar: 'Place', organizacion: 'Organization', fenomeno: 'Phenomenon', artefacto: 'Artifact', acontecimiento: 'Event', concepto: 'Concept', historia: 'Historical reference', autor: 'Author' },
      catDesc: { universo: 'The great sagas and cycles', personaje: 'Heroes, villains and archetypes', criatura: 'Dragons, foxes, gods and beasts', lugar: 'Real and imaginary cities', organizacion: 'Ministries, orders and federations', fenomeno: 'Hours, curses and anomalies', artefacto: 'Masks, scrolls and elixirs', acontecimiento: 'Carnivals and championships', concepto: 'Ideas that run through everything', historia: 'Real people, places and events', autor: 'The one who wrote it' }
    }
  };
  var TYPE_ORDER = ['universo', 'personaje', 'criatura', 'lugar', 'organizacion', 'fenomeno', 'artefacto', 'acontecimiento', 'concepto', 'historia', 'autor'];
  var TYPE_ICON = { universo: '✦', personaje: '☺', criatura: '🐉', lugar: '⌖', organizacion: '⚑', fenomeno: '☄', artefacto: '⚱', acontecimiento: '⚽', concepto: '∞', historia: '⌛', autor: '✒' };

  var UNIS = {
    'hora-salvaje': { es: 'La hora salvaje', ru: 'Дикий час', en: 'The Wild Hour', series: 'ora-selvaggia' },
    'utopia': { es: 'Utopía Turquesa', ru: 'Наша Утопия', en: 'Turquoise Utopia', series: 'predchuvstvie' },
    'sinea': { es: 'Historias de Sinea', ru: 'Истории Синеи', en: 'Sinea Stories', series: 'sinea' },
    'fader': { es: 'Los Fader', ru: 'Тайна семьи Фадер', en: 'The Faders', series: 'fader' },
    'resonancia': { es: 'Resonancia del amor', ru: 'Резонанс любви', en: 'Resonance of Love' },
    'olas': { es: 'Ondas de amor', ru: 'Волны любви', en: 'Waves of Love', series: 'volny-lyubvi' },
    'venecia': { es: 'Máscara de Venecia', ru: 'Венецианская маска', en: 'The Venetian Mask', series: 'roberto-natalia' },
    'praga': { es: 'El subsuelo de Praga', ru: 'Пражское подземелье', en: 'Prague Underground', series: 'prazske-podzemi' },
    'estelar': { es: 'Romance estelar', ru: 'Звёздный роман', en: 'A Starlit Romance' },
    'multiverso': { es: 'Multiverso', ru: 'Мультивселенная', en: 'Multiverse' },
    'otros': { es: 'Historias independientes', ru: 'Отдельные истории', en: 'Standalone stories' }
  };
  var UNI_ORDER = ['hora-salvaje', 'utopia', 'sinea', 'fader', 'resonancia', 'olas', 'venecia', 'praga', 'estelar', 'otros'];
  var NOVEL_UNI_OVERRIDE = {
    'anomalnyj-chas': 'hora-salvaje', 'ora-selvaggia-venezia': 'hora-salvaje',
    'rezonans-lyubvi': 'resonancia', 'rezonans-lyubvi-3-protiv-mraka': 'resonancia',
    'tajna-semi-fader': 'fader', 'volny-lyubvi': 'olas', 'volny-lyubvi-krepost': 'olas',
    'maschera-di-venezia': 'venecia', 'venecianskaya-maska': 'venecia',
    'divlji-chas': 'hora-salvaje', 'przeczucie': 'utopia',
    'grustnyj-gorod': 'sinea', 'golos': 'sinea', 'il-treno-fantasma': 'sinea',
    'misteroj-sub-parizo': 'praga', 'do-outro-lado-do-mundo': 'otros',
    'zvezdnyj-roman': 'estelar'
  };
  var LANG_NAMES = {
    es: { es: 'español', ru: 'ruso', it: 'italiano', en: 'inglés', de: 'alemán', fr: 'francés', tr: 'turco', pt: 'portugués', cs: 'checo', pl: 'polaco', sr: 'serbio', eo: 'esperanto', isv: 'interslavo', vo: 'volapük', ia: 'interlingua', ld: 'lingwa de planeta', la: 'latín', sw: 'suajili', bg: 'búlgaro' },
    ru: { es: 'испанский', ru: 'русский', it: 'итальянский', en: 'английский', de: 'немецкий', fr: 'французский', tr: 'турецкий', pt: 'португальский', cs: 'чешский', pl: 'польский', sr: 'сербский', eo: 'эсперанто', isv: 'межславянский', vo: 'волапюк', ia: 'интерлингва', ld: 'лингва де планета', la: 'латынь', sw: 'суахили', bg: 'болгарский' },
    en: { es: 'Spanish', ru: 'Russian', it: 'Italian', en: 'English', de: 'German', fr: 'French', tr: 'Turkish', pt: 'Portuguese', cs: 'Czech', pl: 'Polish', sr: 'Serbian', eo: 'Esperanto', isv: 'Interslavic', vo: 'Volapük', ia: 'Interlingua', ld: 'Lingwa de Planeta', la: 'Latin', sw: 'Swahili', bg: 'Bulgarian' }
  };

  /* ---------- Índices ---------- */
  var byId = {};
  ARTS.forEach(function (a) { byId[a.id] = a; });
  var novelBySlug = {};
  LIB.novels.forEach(function (n) { novelBySlug[n.slug] = n; });
  var seriesById = {};
  LIB.series.forEach(function (s) { seriesById[s.id] = s; });

  var seriesToUni = {};
  Object.keys(UNIS).forEach(function (u) { if (UNIS[u].series) seriesToUni[UNIS[u].series] = u; });
  seriesToUni['luis-natalia'] = null; // serie mixta: se resuelve por novela
  var novelUni = {};
  LIB.series.forEach(function (s) {
    var u = seriesToUni[s.id];
    if (u) s.novels.forEach(function (slug) { if (!novelUni[slug]) novelUni[slug] = u; });
  });
  Object.keys(NOVEL_UNI_OVERRIDE).forEach(function (k) { novelUni[k] = NOVEL_UNI_OVERRIDE[k]; });
  LIB.novels.forEach(function (n) { if (!novelUni[n.slug]) novelUni[n.slug] = 'otros'; });

  function uniColor(u) { return 'var(--u-' + (UNIS[u] ? u : 'otros') + ')'; }

  // Enlaces entrantes
  var backlinks = {};
  ARTS.forEach(function (a) {
    ['es', 'ru', 'en'].forEach(function (l) {
      if (!a[l]) return;
      var src = (a[l].b || '') + ' ' + JSON.stringify(a[l].box || []);
      var re = /\[\[([a-z0-9-]+)/g, m;
      while ((m = re.exec(src))) {
        if (m[1] === a.id) continue;
        (backlinks[m[1]] = backlinks[m[1]] || {})[a.id] = 1;
      }
    });
  });

  // Personajes del catálogo → artículo propio (por id directo o por coincidencia)
  var CHAR_ART = {
    luis: 'luis', natasha: 'natasha', robert: 'robert', zmaj: 'zmaj', alessio: 'alessio', marcos: 'marcos', alicia: 'alicia',
    'luis-utopia': 'luis-arquitecto', 'luis-fader': 'luis-fader', 'natalia-cellist': 'natalia-violonchelista', sasha: 'sasha',
    franco: 'franco', chiara: 'chiara', 'laura-bellini': 'laura-bellini', 'roberto-venezia': 'roberto-venecia', 'marco-dandolo': 'marco-dandolo',
    kennet: 'kennet', 'oxana-utopia': 'oxana', 'sergio-fader': 'sergio', 'sergio-dikij': 'sergio', 'natalia-fader': 'natalia-fader',
    samuel: 'samuel', 'luis-rezonans': 'luis-resonancia', 'irina-ministry': 'irina-ministerio', artan: 'artan', 'agente-l': 'agente-l',
    tauran: 'tauran', vasily: 'vasili', milena: 'milena', 'natalia-rezonans': 'natalia-resonancia', 'natalia-anomalnyj': 'natalia-anomala',
    'dmitry-petrovich': 'dmitri-petrovich', 'ivan-domovoev': 'ivan-domovoev', 'kapitan-natasha': 'capitana-natasha', vladik: 'vladik', khmur: 'penumbra',
    'galina-sergeevna': 'galina-sergeevna', plyushka: 'plyushka', 'natalia-verdegrad': 'natalia-verdegrad', lis: 'zorro', ael: 'ael',
    'oksana-swan': 'oxana', 'oxana-voice': 'oxana', 'octavio-grande': 'octavio-grande', 'presidente-sinea': 'octavio-grande',
    'doktor-krein': 'doctor-crane', zver: 'bestia', 'presidente-futbol': 'fafi', 'sasha-voice': 'ael',
    laura: 'laura-estelar', luciano: 'luciano', vitka: 'vitka', 'natalia-pt': 'natalia-pt'
  };

  /* ---------- Utilidades ---------- */
  var lang = 'es';
  function t(k) { return T[lang][k]; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ё/g, 'е').replace(/й/g, 'и'); }
  function href(path) { return '#/' + lang + '/' + path; }
  function L(a) { return a[lang] || a.es; }
  function uniName(u) { return (UNIS[u] || UNIS.otros)[lang]; }
  // Plurales: «1 artículo / 2 artículos»; en ruso, «1 статья / 2 статьи / 5 статей».
  var PLURAL = {
    es: { stArticles: ['artículo', 'artículos'], articlesN: ['artículo', 'artículos'], stNovels: ['novela', 'novelas'], stLangs: ['idioma', 'idiomas'], stPeople: ['personaje', 'personajes'], stIll: ['ilustración', 'ilustraciones'], chapters: ['capítulo', 'capítulos'] },
    en: { stArticles: ['article', 'articles'], articlesN: ['article', 'articles'], stNovels: ['novel', 'novels'], stLangs: ['language', 'languages'], stPeople: ['character', 'characters'], stIll: ['illustration', 'illustrations'], chapters: ['chapter', 'chapters'] },
    ru: { stArticles: ['статья', 'статьи', 'статей'], articlesN: ['статья', 'статьи', 'статей'], stNovels: ['роман', 'романа', 'романов'], stLangs: ['язык', 'языка', 'языков'], stPeople: ['персонаж', 'персонажа', 'персонажей'], stIll: ['иллюстрация', 'иллюстрации', 'иллюстраций'], chapters: ['глава', 'главы', 'глав'] }
  };
  function plural(n, k) {
    var f = PLURAL[lang][k];
    if (!f) return t(k);
    if (lang !== 'ru') return f[n === 1 ? 0 : 1];
    var d = n % 10, h = n % 100;
    return f[d === 1 && h !== 11 ? 0 : d >= 2 && d <= 4 && (h < 12 || h > 14) ? 1 : 2];
  }
  function num(n, k) { return n + ' ' + plural(n, k); }
  function shuffle(arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  function novelTitle(n) { return n ? n.title : ''; }
  function articleImg(a) { return a.img || (a.novels && novelBySlug[a.novels[0]] && novelBySlug[a.novels[0]].cover) || 'assets/icon.svg'; }

  /* Mini‑Markdown con enlaces internos */
  function inline(s) {
    s = esc(s);
    s = s.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, function (_, id, text) {
      var a = byId[id];
      if (a) return '<a href="' + href('a/' + id) + '">' + (text || esc(L(a).t)) + '</a>';
      var n = novelBySlug[id];
      if (n) return '<a href="' + href('n/' + id) + '">' + (text || esc(n.title)) + '</a>';
      return '<span class="missing" title="—">' + (text || id) + '</span>';
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
    return s;
  }
  function slugify(s) { return norm(s).replace(/[^a-z0-9а-я]+/g, '-').replace(/^-|-$/g, ''); }
  function renderBody(src, toc) {
    // Tolera subtítulos pegados al texto: «## Título\nPárrafo» se trata como dos bloques.
    var blocks = src.trim().replace(/^(## [^\n]*)\n(?!\n)/gm, '$1\n\n').split(/\n\s*\n/);
    var out = [], first = true;
    blocks.forEach(function (b) {
      var lines = b.split('\n');
      if (/^## /.test(b)) {
        var title = b.slice(3).trim(), id = 'h-' + slugify(title);
        toc.push({ id: id, title: title });
        out.push('<h2 id="' + id + '">' + inline(title) + '</h2>');
      } else if (lines.every(function (l) { return /^- /.test(l); })) {
        out.push('<ul>' + lines.map(function (l) { return '<li>' + inline(l.slice(2)) + '</li>'; }).join('') + '</ul>');
      } else if (lines.every(function (l) { return /^> ?/.test(l); })) {
        out.push('<blockquote><p>' + lines.map(function (l) { return inline(l.replace(/^> ?/, '')); }).join('<br>') + '</p></blockquote>');
      } else {
        out.push('<p' + (first ? ' class="lead"' : '') + '>' + lines.map(inline).join('<br>') + '</p>');
      }
      first = false;
    });
    return out.join('\n');
  }

  /* ---------- Componentes ---------- */
  function bookCard(n, small) {
    if (!n) return '';
    var u = novelUni[n.slug];
    var cover = n.cover ? '<img loading="lazy" src="' + n.cover + '" alt="">' : '<div class="gen" style="--uc:' + uniColor(u) + '">' + esc(n.title) + '</div>';
    return '<a class="book" href="' + href('n/' + n.slug) + '">' +
      '<div class="cover">' + cover + (n.adult ? '<span class="badge-18">18+</span>' : '') + (n.wip ? '<span class="badge-wip">' + t('wip') + '</span>' : '') + '<span class="lang-tag">' + n.lang.toUpperCase() + '</span></div>' +
      '<span class="b-title">' + esc(n.title) + '</span>' +
      (small ? '' : '<span class="b-sub">' + esc(LANG_NAMES[lang][n.lang] || n.lang) + (n.year ? ' · ' + n.year : '') + '</span>') +
      '</a>';
  }
  function articleCard(a) {
    var l = L(a);
    return '<a class="a-card" href="' + href('a/' + a.id) + '">' +
      '<img loading="lazy" src="' + articleImg(a) + '" alt="">' +
      '<span><span class="a-type"><span class="dot" style="background:' + uniColor(a.uni) + '"></span>' + esc(t('type1')[a.type] || a.type) + ' · ' + esc(uniName(a.uni)) + '</span>' +
      '<b>' + esc(l.t) + '</b><p>' + esc(l.s) + '</p></span></a>';
  }
  function uniChip(u) {
    var a = byId[u];
    var inner = '<span class="dot" style="background:' + uniColor(u) + '"></span>' + esc(uniName(u));
    return a ? '<a class="chip" href="' + href('a/' + u) + '">' + inner + '</a>' : '<span class="chip">' + inner + '</span>';
  }

  /* ---------- Ilustraciones ---------- */
  var ALL_ILL = [];
  LIB.novels.forEach(function (n) { (n.ill || []).forEach(function (it) { ALL_ILL.push({ src: it.src, ch: it.ch, chTitle: it.chTitle, slug: n.slug }); }); });
  // Hasta «max» ilustraciones repartidas entre varias novelas, de forma estable.
  function illOf(slugs, max) {
    var lists = slugs.map(function (s) { return ALL_ILL.filter(function (x) { return x.slug === s; }); }).filter(function (l) { return l.length; });
    var out = [], i = 0;
    while (out.length < max && lists.some(function (l) { return l.length > i; })) {
      lists.forEach(function (l) {
        if (out.length >= max || i >= l.length) return;
        var step = Math.max(1, Math.floor(l.length / Math.ceil(max / lists.length)));
        var k = i * step;
        if (k < l.length) out.push(l[k]);
      });
      i++;
      if (i > 60) break;
    }
    return out;
  }
  var GAL = [];
  function illCap(it) { return t('chap') + ' ' + it.ch + (it.chTitle ? ' · ' + it.chTitle : ''); }
  function galleryHTML(items) {
    var base = GAL.length;
    GAL = GAL.concat(items);
    return '<div class="gallery">' + items.map(function (it, i) {
      return '<button type="button" class="g-item" data-g="' + (base + i) + '" aria-label="' + esc(novelBySlug[it.slug].title + ' — ' + illCap(it)) + '"><img loading="lazy" src="' + it.src + '" alt=""><span class="g-cap">' + esc(illCap(it)) + '</span></button>';
    }).join('') + '</div>';
  }
  // Ficha: la imagen principal y, si el artículo tiene a.gal, más retratos en miniatura; todas se abren en el visor.
  function ibImages(a, l) {
    var srcs = [articleImg(a)].concat(a.gal || []);
    if (srcs.length === 1) return '<div class="ib-img"><img src="' + srcs[0] + '" alt=""></div>';
    var base = GAL.length;
    GAL = GAL.concat(srcs.map(function (src) { return { src: src, cap: l.t }; }));
    return '<div class="ib-img"><button type="button" class="ib-open" data-g="' + base + '"><img src="' + srcs[0] + '" alt=""></button></div>' +
      '<div class="ib-thumbs">' + srcs.map(function (src, i) { return '<button type="button" class="ib-open' + (i ? '' : ' on') + '" data-g="' + (base + i) + '"><img loading="lazy" src="' + src + '" alt=""></button>'; }).join('') + '</div>';
  }
  var lb = null, lbIdx = 0, lbTouch = null;
  function lbShow(i) {
    if (!GAL.length) return;
    lbIdx = (i + GAL.length) % GAL.length;
    var it = GAL[lbIdx], n = it.slug && novelBySlug[it.slug];
    lb.querySelector('img').src = it.src;
    lb.querySelector('.lb-cap').innerHTML = (n ? '<a href="' + href('n/' + it.slug) + '">' + esc(n.title) + '</a> · ' + esc(illCap(it)) : esc(it.cap || '')) + ' <span class="muted">' + (lbIdx + 1) + ' / ' + GAL.length + '</span>';
  }
  function lbOpen(i) {
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.setAttribute('role', 'dialog');
      lb.setAttribute('aria-modal', 'true');
      lb.innerHTML = '<button type="button" class="lb-btn lb-close" aria-label="">✕</button><button type="button" class="lb-btn lb-prev" aria-label="">‹</button><figure><img alt=""><figcaption class="lb-cap"></figcaption></figure><button type="button" class="lb-btn lb-next" aria-label="">›</button>';
      document.body.appendChild(lb);
      lb.addEventListener('click', function (e) {
        if (e.target.closest('.lb-prev')) lbShow(lbIdx - 1);
        else if (e.target.closest('.lb-next')) lbShow(lbIdx + 1);
        else if (e.target.closest('.lb-close') || e.target === lb) lbClose();
        else if (e.target.closest('.lb-cap a')) lbClose();
      });
      lb.addEventListener('touchstart', function (e) { lbTouch = e.touches[0].clientX; }, { passive: true });
      lb.addEventListener('touchend', function (e) {
        if (lbTouch == null) return;
        var dx = e.changedTouches[0].clientX - lbTouch; lbTouch = null;
        if (Math.abs(dx) > 50) lbShow(lbIdx + (dx < 0 ? 1 : -1));
      });
    }
    lb.querySelector('.lb-close').setAttribute('aria-label', t('close'));
    lb.querySelector('.lb-prev').setAttribute('aria-label', t('prev'));
    lb.querySelector('.lb-next').setAttribute('aria-label', t('next'));
    lb.hidden = false;
    document.body.classList.add('lb-open');
    lbShow(i);
    lb.querySelector('.lb-close').focus();
  }
  function lbClose() { if (lb) { lb.hidden = true; document.body.classList.remove('lb-open'); } }
  document.addEventListener('keydown', function (e) {
    if (!lb || lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
    else if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.g-item, .ib-open');
    if (b) lbOpen(+b.getAttribute('data-g'));
  });

  /* ---------- Barra lateral ---------- */
  function renderSidebar(route) {
    var counts = {};
    ARTS.forEach(function (a) { counts[a.type] = (counts[a.type] || 0) + 1; });
    var h = [];
    function item(path, icon, label, extra) {
      var on = route === path ? ' class="on"' : '';
      h.push('<a' + on + ' href="' + href(path) + '"><span class="nav-ico">' + icon + '</span>' + esc(label) + (extra || '') + '</a>');
    }
    h.push('<h4>' + t('explore') + '</h4>');
    item('', '⌂', t('home'));
    item('a/multiverso', '∞', { es: 'Multiverso Fader', ru: 'Мультивселенная', en: 'Fader Multiverse' }[lang]);
    item('mapa', '◎', t('map'));
    item('biblioteca', '❒', t('library'), '<span class="count">' + LIB.novels.length + '</span>');
    item('personajes', '☺', t('people'), '<span class="count">' + LIB.characters.length + '</span>');
    item('galeria', '▦', t('gallery'), '<span class="count">' + ALL_ILL.length + '</span>');
    item('azar', '⚄', t('random'));
    h.push('<h4>' + t('universes') + '</h4>');
    UNI_ORDER.forEach(function (u) {
      if (!byId[u]) return;
      var on = route === 'a/' + u ? ' class="on"' : '';
      h.push('<a' + on + ' href="' + href('a/' + u) + '"><span class="dot" style="background:' + uniColor(u) + '"></span>' + esc(uniName(u)) + '</a>');
    });
    h.push('<h4>' + t('categories') + '</h4>');
    TYPE_ORDER.forEach(function (k) {
      if (!counts[k]) return;
      item('cat/' + k, TYPE_ICON[k], t('types')[k], '<span class="count">' + counts[k] + '</span>');
    });
    item('todos', '≡', t('all'), '<span class="count">' + ARTS.length + '</span>');
    document.getElementById('sidebar').innerHTML = h.join('');
  }

  /* Artículo del día: un orden mezclado fijo (igual para todos los lectores) que recorre todos los artículos antes de repetir. */
  function dayNumber(d) { return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000); }
  var DAY_ORDER = null;
  function articleOfDay(day) {
    if (!DAY_ORDER) {
      var ids = ARTS.map(function (a) { return a.id; }).sort();
      var seed = 20261026;
      var rnd = function () { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
      for (var i = ids.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var x = ids[i]; ids[i] = ids[j]; ids[j] = x; }
      DAY_ORDER = ids;
    }
    if (!DAY_ORDER.length) return null;
    return byId[DAY_ORDER[((day % DAY_ORDER.length) + DAY_ORDER.length) % DAY_ORDER.length]];
  }
  function excerpt(b) {
    var p = (b || '').split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(function (x) { return x && !/^(#|-|>|\d+\.)/.test(x); })[0] || '';
    p = p.replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\*+/g, '').replace(/\s+/g, ' ');
    return p.length > 340 ? p.slice(0, 340).replace(/\s+\S*$/, '') + '…' : p;
  }

  /* ---------- Vistas ---------- */
  function viewHome() {
    var langs = {};
    LIB.novels.forEach(function (n) { langs[n.lang] = 1; });
    var day = dayNumber(new Date());
    var feat = articleOfDay(day);
    var h = [];
    var stats = [[ARTS.length, 'stArticles'], [LIB.novels.length, 'stNovels'], [Object.keys(langs).length, 'stLangs'], [LIB.characters.length, 'stPeople'], [ALL_ILL.length, 'stIll']];
    h.push('<section class="intro fade-in"><h1>' + t('heroTitle') + '</h1><p class="intro-stats">' +
      stats.map(function (x) { return '<span><b>' + x[0] + '</b> ' + plural(x[0], x[1]) + '</span>'; }).join('<i>·</i>') + '</p></section>');

    h.push('<div class="home-grid">');
    if (feat) {
      var fl = L(feat);
      var dateStr = new Date().toLocaleDateString({ es: 'es-ES', ru: 'ru-RU', en: 'en-GB' }[lang], { day: 'numeric', month: 'long' });
      var prev = [1, 2, 3].map(function (k) { return articleOfDay(day - k); }).filter(function (a) { return a && a !== feat; });
      h.push('<article class="card" style="--uc:' + uniColor(feat.uni) + '"><h3>★ ' + t('featured') + ' <span class="feat-date">' + esc(dateStr) + '</span></h3>' +
        '<div class="featured"><a href="' + href('a/' + feat.id) + '"><img src="' + articleImg(feat) + '" alt=""></a><div>' +
        '<div class="feat-tags"><span class="feat-uni">' + esc(UNIS[feat.uni] ? UNIS[feat.uni][lang] : '') + '</span></div>' +
        '<h2><a href="' + href('a/' + feat.id) + '">' + esc(fl.t) + '</a></h2><p>' + esc(fl.s) + '</p>' +
        (excerpt(fl.b) ? '<p class="feat-excerpt">' + esc(excerpt(fl.b)) + '</p>' : '') +
        '<a class="btn btn-primary feat-btn" href="' + href('a/' + feat.id) + '">' + t('readMore') + ' →</a></div></div>' +
        (prev.length ? '<div class="feat-prev"><span>' + t('prevDays') + ':</span> ' + prev.map(function (a) { return '<a href="' + href('a/' + a.id) + '">' + esc(L(a).t) + '</a>'; }).join(' · ') + '</div>' : '') +
        '</article>');
    }
    h.push('<aside class="card"><h3>✦ ' + t('didYouKnow') + '<button class="reroll" id="reroll">↻ ' + t('another') + '</button></h3><ul class="facts" id="facts"></ul></aside>');
    h.push('</div>');

    h.push('<h2 class="section-title">' + t('exploreUni') + '</h2><div class="uni-grid">');
    UNI_ORDER.forEach(function (u) {
      var a = byId[u];
      if (!a) return;
      var n = ARTS.filter(function (x) { return x.uni === u; }).length;
      var nn = LIB.novels.filter(function (x) { return novelUni[x.slug] === u; }).length;
      h.push('<a class="uni-card" style="--uc:' + uniColor(u) + '" href="' + href('a/' + u) + '"><img loading="lazy" src="' + articleImg(a) + '" alt=""><div class="u-body"><h4>' + esc(L(a).t) + '</h4><p>' + esc(L(a).s) + '</p><div class="u-meta">' + num(n, 'articlesN') + ' · ' + num(nn, 'stNovels') + '</div></div></a>');
    });
    h.push('</div>');

    if (ALL_ILL.length) {
      h.push('<h2 class="section-title">' + t('fromGallery') + ' <small><a href="' + href('galeria') + '">' + t('gallery') + ' →</a></small></h2>' + galleryHTML(shuffle(ALL_ILL).slice(0, 10)).replace('class="gallery"', 'class="gallery strip"'));
    }

    h.push('<h2 class="section-title">' + t('byCat') + '</h2><div class="cat-strip">');
    TYPE_ORDER.forEach(function (k) {
      var c = ARTS.filter(function (a) { return a.type === k; }).length;
      if (!c) return;
      h.push('<a class="cat-tile" href="' + href('cat/' + k) + '"><span class="ico">' + TYPE_ICON[k] + '</span><b>' + esc(t('types')[k]) + ' · ' + c + '</b><span>' + esc(t('catDesc')[k]) + '</span></a>');
    });
    h.push('</div>');

    var recent = LIB.novels.filter(function (n) { return n.year === 2026 && n.cover && (n.lang === 'es' || n.lang === 'ru' || n.lang === 'en'); });
    if (recent.length) {
      h.push('<h2 class="section-title">' + t('latest') + ' <small><a href="' + href('biblioteca') + '">' + t('library') + ' →</a></small></h2><div class="shelf">' + recent.map(function (n) { return bookCard(n); }).join('') + '</div>');
    }
    setMain(h.join(''));
    renderFacts();
    document.getElementById('reroll').addEventListener('click', renderFacts);
  }
  function renderFacts() {
    var box = document.getElementById('facts');
    if (!box) return;
    box.innerHTML = shuffle(FACTS).slice(0, 4).map(function (f) { return '<li>…' + inline(f[lang] || f.es) + '</li>'; }).join('');
  }

  function viewArticle(id) {
    var a = byId[id];
    if (!a) return viewNotFound();
    var l = L(a), toc = [];
    var body = renderBody(l.b || '', toc);
    var h = [];
    h.push('<div class="crumbs"><a href="' + href('') + '">Faderpedia</a> › <a href="' + href('cat/' + a.type) + '">' + esc(t('types')[a.type]) + '</a>' + (a.uni !== 'multiverso' && a.uni !== a.id ? ' › <a href="' + href('a/' + a.uni) + '">' + esc(uniName(a.uni)) + '</a>' : '') + '</div>');
    h.push('<header class="article-head"><h1>' + esc(l.t) + '</h1><div class="tags"><span class="chip">' + TYPE_ICON[a.type] + ' ' + esc(t('type1')[a.type]) + '</span>' + uniChip(a.uni) + '</div></header>');
    h.push('<div class="article fade-in"><div class="prose">');
    if (toc.length >= 3) {
      h.push('<nav class="toc"><b>' + t('contents') + '</b><ol>' + toc.map(function (x) { return '<li><a href="#' + x.id + '" data-anchor="' + x.id + '">' + inline(x.title) + '</a></li>'; }).join('') + '</ol></nav>');
    }
    h.push(body);
    h.push('</div>');

    // Ficha
    var rows = (l.box || []).map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + inline(r[1]) + '</td></tr>'; }).join('');
    h.push('<aside class="infobox" style="--uc:' + uniColor(a.uni) + '"><div class="ib-title">' + esc(l.t) + '</div>' +
      ibImages(a, l) +
      '<table><tbody><tr><th>' + t('series') + '</th><td>' + (byId[a.uni] && a.uni !== a.id ? '<a href="' + href('a/' + a.uni) + '">' + esc(uniName(a.uni)) + '</a>' : esc(uniName(a.uni))) + '</td></tr>' + rows + '</tbody></table></aside>');
    h.push('</div>');

    // Después del cuerpo
    h.push('<div class="after">');
    if (a.type === 'universo') {
      var inU = ARTS.filter(function (x) { return x.uni === a.id && x.id !== a.id; });
      if (inU.length) h.push('<section><h3>' + t('inUniverse') + '</h3><div class="a-grid">' + inU.map(articleCard).join('') + '</div></section>');
      var nov = LIB.novels.filter(function (n) { return novelUni[n.slug] === a.id || (a.novels || []).indexOf(n.slug) >= 0; });
      if (nov.length) h.push('<section><h3>' + t('novelsOfUni') + '</h3><div class="book-grid">' + nov.map(function (n) { return bookCard(n); }).join('') + '</div></section>');
    } else if (a.novels && a.novels.length) {
      h.push('<section><h3>' + t('appearsIn') + '</h3><div class="book-grid">' + a.novels.map(function (s) { return bookCard(novelBySlug[s]); }).join('') + '</div></section>');
    }
    var illSlugs = a.type === 'universo' ? LIB.novels.filter(function (n) { return novelUni[n.slug] === a.id || (a.novels || []).indexOf(n.slug) >= 0; }).map(function (n) { return n.slug; }) : (a.novels || []);
    var aIll = illOf(illSlugs, a.type === 'universo' ? 12 : 8);
    if (aIll.length) {
      var oneNovel = illSlugs.filter(function (s) { return (novelBySlug[s] && novelBySlug[s].ill || []).length; });
      h.push('<section><h3>' + t('illustrations') + (oneNovel.length === 1 ? ' <small><a href="' + href('n/' + oneNovel[0]) + '">' + t('seeAllIll') + ' →</a></small>' : ' <small><a href="' + href('galeria') + '">' + t('gallery') + ' →</a></small>') + '</h3>' + galleryHTML(aIll) + '</section>');
    }
    if (a.see && a.see.length) {
      h.push('<section><h3>' + t('seeAlso') + '</h3><div class="a-grid">' + a.see.filter(function (s) { return byId[s]; }).map(function (s) { return articleCard(byId[s]); }).join('') + '</div></section>');
    }
    var bl = Object.keys(backlinks[a.id] || {}).filter(function (x) { return byId[x]; });
    if (bl.length) {
      bl.sort(function (x, y) { return L(byId[x]).t.localeCompare(L(byId[y]).t, lang); });
      h.push('<section><h3>' + t('linksHere') + ' <small class="muted">(' + bl.length + ')</small></h3><div class="chip-row">' + bl.map(function (x) { return '<a class="chip" href="' + href('a/' + x) + '"><span class="dot" style="background:' + uniColor(byId[x].uni) + '"></span>' + esc(L(byId[x]).t) + '</a>'; }).join('') + '</div></section>');
    }
    h.push('</div>');
    setMain(h.join(''), l.t);
  }

  function viewCategory(type) {
    var list = ARTS.filter(function (a) { return a.type === type; });
    if (!list.length) return viewNotFound();
    list.sort(function (x, y) { return L(x).t.localeCompare(L(y).t, lang); });
    var groups = {};
    list.forEach(function (a) { (groups[a.uni] = groups[a.uni] || []).push(a); });
    var h = ['<div class="crumbs"><a href="' + href('') + '">Faderpedia</a> › ' + t('catHead') + '</div>',
      '<header class="page-head"><h1>' + TYPE_ICON[type] + ' ' + esc(t('types')[type]) + '</h1><p>' + esc(t('catDesc')[type]) + ' · ' + num(list.length, 'articlesN') + '</p></header>'];
    var order = ['multiverso'].concat(UNI_ORDER);
    if (list.length > 6) {
      order.forEach(function (u) {
        if (!groups[u]) return;
        h.push('<div class="series-block"><h2><span class="dot" style="background:' + uniColor(u) + '"></span>' + esc(uniName(u)) + '</h2><div class="a-grid">' + groups[u].map(articleCard).join('') + '</div></div>');
      });
    } else {
      h.push('<div class="a-grid">' + list.map(articleCard).join('') + '</div>');
    }
    setMain(h.join(''), t('types')[type]);
  }

  function viewAll() {
    var list = ARTS.slice().sort(function (x, y) { return L(x).t.localeCompare(L(y).t, lang); });
    var groups = {}, letters = [];
    list.forEach(function (a) {
      var c = L(a).t.charAt(0).toUpperCase();
      if (!groups[c]) { groups[c] = []; letters.push(c); }
      groups[c].push(a);
    });
    var h = ['<header class="page-head"><h1>' + t('allHead') + '</h1><p>' + t('allText') + ' ' + num(list.length, 'articlesN') + '.</p></header>',
      '<div class="chip-row" style="margin-bottom:24px">' + letters.map(function (c) { return '<a class="chip" href="#L-' + encodeURIComponent(c) + '" data-anchor="L-' + encodeURIComponent(c) + '">' + c + '</a>'; }).join('') + '</div>'];
    letters.forEach(function (c) {
      h.push('<div class="series-block" id="L-' + encodeURIComponent(c) + '"><h2>' + c + '</h2><div class="a-grid">' + groups[c].map(articleCard).join('') + '</div></div>');
    });
    setMain(h.join(''), t('allHead'));
  }

  function viewLibrary() {
    var langsAvail = {};
    LIB.novels.forEach(function (n) { langsAvail[n.lang] = (langsAvail[n.lang] || 0) + 1; });
    var savedLang = store('fp:libLang') || '';
    var h = ['<header class="page-head"><h1>❒ ' + t('libHead') + '</h1><p>' + t('libText') + '</p></header>',
      '<div class="filters"><input id="libQ" type="search" placeholder="' + t('filterNovels') + '"><select id="libLang"><option value="">' + t('allLangs') + '</option>' +
      Object.keys(langsAvail).sort(function (a, b) { return langsAvail[b] - langsAvail[a]; }).map(function (k) { return '<option value="' + k + '"' + (k === savedLang ? ' selected' : '') + '>' + esc(LANG_NAMES[lang][k] || k) + ' (' + langsAvail[k] + ')</option>'; }).join('') +
      '</select></div><div id="libOut"></div>'];
    setMain(h.join(''), t('libHead'));
    var q = document.getElementById('libQ'), sel = document.getElementById('libLang');
    function draw() {
      var nq = norm(q.value), lg = sel.value, out = [];
      store('fp:libLang', lg);
      UNI_ORDER.forEach(function (u) {
        var list = LIB.novels.filter(function (n) {
          return novelUni[n.slug] === u && (!lg || n.lang === lg) && (!nq || norm(n.title + ' ' + n.slug + ' ' + (n.genre || '')).indexOf(nq) >= 0);
        });
        if (!list.length) return;
        var a = byId[u];
        out.push('<div class="series-block"><h2><span class="dot" style="background:' + uniColor(u) + '"></span>' + (a ? '<a href="' + href('a/' + u) + '">' + esc(uniName(u)) + '</a>' : esc(uniName(u))) + '</h2><p>' + num(list.length, 'stNovels') + '</p><div class="book-grid">' + list.map(function (n) { return bookCard(n); }).join('') + '</div></div>');
      });
      document.getElementById('libOut').innerHTML = out.join('') || '<div class="empty">' + t('noResults') + '</div>';
    }
    q.addEventListener('input', draw);
    sel.addEventListener('change', draw);
    draw();
  }

  function viewNovel(slug) {
    var n = novelBySlug[slug];
    if (!n) return viewNotFound();
    var u = novelUni[slug];
    var h = ['<div class="crumbs"><a href="' + href('') + '">Faderpedia</a> › <a href="' + href('biblioteca') + '">' + t('library') + '</a> › ' + esc(uniName(u)) + '</div>'];
    h.push('<div class="novel fade-in"><div><div class="n-cover">' + (n.cover ? '<img src="' + n.cover + '" alt="">' : '<div class="book"><div class="cover"><div class="gen" style="--uc:' + uniColor(u) + '">' + esc(n.title) + '</div></div></div>') + '</div></div><div>');
    h.push('<div class="eyebrow">' + esc(LANG_NAMES[lang][n.lang] || n.lang) + (n.year ? ' · ' + n.year : '') + '</div><h1>' + esc(n.title) + '</h1>');
    h.push('<div class="meta">' + uniChip(u) + (n.genre ? '<span class="chip">' + esc(n.genre) + '</span>' : '') + '<span class="chip">' + num(n.chapters, 'chapters') + '</span>' + (n.wip ? '<span class="chip"><span class="badge-wip">' + t('wip') + '</span></span>' : '') + (n.adult ? '<span class="chip"><span class="badge-18">18+</span> ' + t('adult') + '</span>' : '') + '</div>');
    var tr0 = (window.SINOPSIS || {})[slug] || {};
    var own = n.lang === lang ? n.desc : tr0[lang];
    if (own) h.push('<div class="desc" lang="' + lang + '">' + esc(own) + '</div>');
    if (n.desc && n.lang !== lang) {
      var origLabel = t('origText') + ' (' + esc(LANG_NAMES[lang][n.lang] || n.lang) + ')';
      if (own) h.push('<details class="orig"><summary>' + origLabel + '</summary><div class="desc" lang="' + n.lang + '">' + esc(n.desc) + '</div></details>');
      else h.push('<div class="orig-note">' + origLabel + '</div><div class="desc" lang="' + n.lang + '">' + esc(n.desc) + '</div>');
    }
    h.push('<p style="margin-top:22px"><a class="chip" href="' + LITMIR + '?lang=' + lang + '#/' + encodeURIComponent(slug) + '" target="_blank" rel="noopener">↗ ' + t('readSource') + '</a></p>');
    var tr = n.translations || {};
    var trKeys = Object.keys(tr).filter(function (k) { return novelBySlug[tr[k]]; });
    if (trKeys.length) {
      h.push('<h3 class="section-title" style="font-size:20px;margin-top:28px">' + t('translations') + '</h3><div class="chip-row">' + trKeys.map(function (k) { return '<a class="chip" href="' + href('n/' + tr[k]) + '"><b>' + k.toUpperCase() + '</b> ' + esc(novelBySlug[tr[k]].title) + '</a>'; }).join('') + '</div>');
    }
    h.push('</div></div>');
    var nIll = ALL_ILL.filter(function (x) { return x.slug === slug; });
    if (nIll.length) h.push('<h2 class="section-title">' + t('illustrations') + ' <small>' + nIll.length + '</small></h2>' + galleryHTML(nIll));
    var arts = ARTS.filter(function (a) { return (a.novels || []).indexOf(slug) >= 0; });
    if (arts.length) h.push('<h2 class="section-title">' + t('mentioned') + '</h2><div class="a-grid">' + arts.map(articleCard).join('') + '</div>');
    var cast = LIB.characters.filter(function (c) { return c.novels.indexOf(slug) >= 0; });
    if (cast.length) h.push('<h2 class="section-title">' + t('cast') + ' <small>' + cast.length + '</small></h2><div class="people">' + cast.map(personCard).join('') + '</div>');
    setMain(h.join(''), n.title);
  }

  function viewGallery(only) {
    var withIll = LIB.novels.filter(function (n) { return (n.ill || []).length; });
    withIll.sort(function (a, b) { return b.ill.length - a.ill.length; });
    var h = ['<header class="page-head"><h1>▦ ' + t('gallery') + '</h1><p>' + t('galText') + ' ' + num(ALL_ILL.length, 'stIll') + '.</p></header>',
      '<div class="filters"><select id="galSel"><option value="">' + t('allNovels') + '</option>' + withIll.map(function (n) { return '<option value="' + n.slug + '"' + (n.slug === only ? ' selected' : '') + '>' + esc(n.title) + ' (' + n.ill.length + ')</option>'; }).join('') + '</select></div><div id="galOut"></div>'];
    setMain(h.join(''), t('gallery'));
    var sel = document.getElementById('galSel');
    function draw() {
      GAL = [];
      var list = sel.value ? withIll.filter(function (n) { return n.slug === sel.value; }) : withIll;
      document.getElementById('galOut').innerHTML = list.map(function (n) {
        var items = ALL_ILL.filter(function (x) { return x.slug === n.slug; });
        return '<div class="series-block"><h2><span class="dot" style="background:' + uniColor(novelUni[n.slug]) + '"></span><a href="' + href('n/' + n.slug) + '">' + esc(n.title) + '</a></h2><p>' + esc(uniName(novelUni[n.slug])) + ' · ' + num(items.length, 'stIll') + '</p>' + galleryHTML(items) + '</div>';
      }).join('');
    }
    sel.addEventListener('change', draw);
    draw();
  }

  function charUni(c) {
    var counts = {};
    c.novels.forEach(function (s) { var u = novelUni[s]; if (u) counts[u] = (counts[u] || 0) + 1; });
    var best = 'otros', max = 0;
    Object.keys(counts).forEach(function (u) { if (counts[u] > max) { max = counts[u]; best = u; } });
    return best;
  }
  function personCard(c) {
    var loc = c[lang] || null;
    var base = c.name.replace(/\s*\(.*\)$/, '').split(' / ');
    var name = loc && loc.name ? loc.name : (lang === 'ru' && base[1] ? base[1] : base[0]);
    var desc = loc && loc.description ? loc.description : (lang !== 'ru' && c.es && c.es.description) || c.role;
    var art = CHAR_ART[c.id] && byId[CHAR_ART[c.id]] ? CHAR_ART[c.id] : null;
    var u = charUni(c);
    var tag = loc && loc.tag !== undefined ? (loc.tag ? [0, loc.tag] : null) : c.name.match(/\(([^)]+)\)$/);
    return '<div class="person" style="--uc:' + uniColor(u) + '"><b>' + (art ? '<a href="' + href('a/' + art) + '">' + esc(name) + '</a>' : esc(name)) + '</b>' +
      (tag ? ' <span class="muted" style="font-size:12.5px">· ' + esc(tag[1]) + '</span>' : '') +
      (art ? '<a class="p-art" href="' + href('a/' + art) + '">→ ' + t('article') + '</a>' : '') +
      '<p>' + esc(desc) + '</p><div class="p-novels">' + c.novels.slice(0, 6).map(function (s) { var n = novelBySlug[s]; return n ? '<a href="' + href('n/' + s) + '">' + esc(n.title) + '</a>' : ''; }).join('') + (c.novels.length > 6 ? '<span class="muted">+' + (c.novels.length - 6) + '</span>' : '') + '</div></div>';
  }

  function viewPeople() {
    var h = ['<header class="page-head"><h1>☺ ' + t('peopleHead') + '</h1><p>' + t('peopleText') + '</p></header>',
      '<div class="filters"><input id="pQ" type="search" placeholder="' + t('filterPeople') + '"></div><div class="seg" id="pSeg" style="margin:-10px 0 22px"></div><div id="pOut"></div>'];
    setMain(h.join(''), t('peopleHead'));
    var current = '';
    var seg = document.getElementById('pSeg');
    seg.innerHTML = ['<button data-u="" aria-pressed="true">' + t('allUnis') + '</button>'].concat(UNI_ORDER.map(function (u) { return '<button data-u="' + u + '" aria-pressed="false"><span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + uniColor(u) + ';margin-right:6px"></span>' + esc(uniName(u)) + '</button>'; })).join('');
    var q = document.getElementById('pQ');
    function draw() {
      var nq = norm(q.value);
      var list = LIB.characters.filter(function (c) {
        if (current && charUni(c) !== current) return false;
        if (!nq) return true;
        var hay = c.name + ' ' + c.role + ' ' + (c.es ? c.es.name + ' ' + c.es.description : '') + ' ' + (c.ru ? c.ru.name + ' ' + c.ru.description : '') + ' ' + (c.en ? c.en.name + ' ' + c.en.description : '');
        return norm(hay).indexOf(nq) >= 0;
      });
      list.sort(function (a, b) { return (CHAR_ART[b.id] ? 1 : 0) - (CHAR_ART[a.id] ? 1 : 0); });
      document.getElementById('pOut').innerHTML = list.length ? '<div class="people">' + list.map(personCard).join('') + '</div>' : '<div class="empty">' + t('noResults') + '</div>';
    }
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      current = b.getAttribute('data-u');
      [].forEach.call(seg.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      draw();
    });
    q.addEventListener('input', draw);
    draw();
  }

  function viewMap() {
    var nodes = UNI_ORDER.filter(function (u) { return byId[u]; });
    var W = 900, H = 640, cx = W / 2, cy = H / 2 + 6, R = 238;
    var pos = {};
    pos.multiverso = { x: cx, y: cy };
    nodes.forEach(function (u, i) {
      var ang = -Math.PI / 2 + i * 2 * Math.PI / nodes.length;
      pos[u] = { x: cx + R * 1.25 * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });
    var svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('mapHead')) + '">'];
    nodes.forEach(function (u) { svg.push('<line class="edge hub" x1="' + cx + '" y1="' + cy + '" x2="' + pos[u].x + '" y2="' + pos[u].y + '" stroke-dasharray="3 6"/>'); });
    LINKS.forEach(function (lk, i) {
      var a = pos[lk[0]], b = pos[lk[1]];
      if (!a || !b) return;
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      var qx = mx + (cx - mx) * 0.35, qy = my + (cy - my) * 0.35;
      svg.push('<path class="edge link" data-i="' + i + '" data-a="' + lk[0] + '" data-b="' + lk[1] + '" d="M' + a.x + ' ' + a.y + ' Q' + qx + ' ' + qy + ' ' + b.x + ' ' + b.y + '"/>');
    });
    function node(u, r, sub) {
      var p = pos[u], a = byId[u];
      var cnt = ARTS.filter(function (x) { return x.uni === u; }).length;
      return '<g class="node" data-u="' + u + '" tabindex="0"><circle class="halo" cx="' + p.x + '" cy="' + p.y + '" r="' + (r + 12) + '" fill="' + uniColor(u) + '"/>' +
        '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '" fill="' + uniColor(u) + '"/>' +
        '<text x="' + p.x + '" y="' + (p.y + r + 22) + '">' + esc(a ? L(a).t.replace(/\s*\(.*\)$/, '') : uniName(u)) + '</text>' +
        '<text class="sub" x="' + p.x + '" y="' + (p.y + r + 38) + '">' + (sub || num(cnt, 'articlesN')) + '</text></g>';
    }
    svg.push(node('multiverso', 30, esc(lang === 'ru' ? 'Роберт Фадер' : 'Robert Fader')));
    nodes.forEach(function (u) { svg.push(node(u, 20)); });
    svg.push('</svg>');
    var list = LINKS.map(function (lk, i) {
      return '<li data-i="' + i + '"><div class="pair"><span class="dot" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + uniColor(lk[0]) + '"></span><a href="' + href('a/' + lk[0]) + '">' + esc(uniName(lk[0])) + '</a> ↔ <span class="dot" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + uniColor(lk[1]) + '"></span><a href="' + href('a/' + lk[1]) + '">' + esc(uniName(lk[1])) + '</a></div><span class="muted">' + esc(lk[2][lang] || lk[2].es) + '</span></li>';
    }).join('');
    setMain('<header class="page-head"><h1>◎ ' + t('mapHead') + '</h1><p>' + t('mapText') + '</p></header><div class="map-wrap fade-in">' + svg.join('') + '</div><ul class="links-list">' + list + '</ul>', t('mapHead'));

    var root = document.querySelector('.map-wrap');
    var lis = document.querySelectorAll('.links-list li');
    function highlight(u, idx) {
      root.querySelectorAll('.edge.link').forEach(function (e) {
        var on = (u && (e.getAttribute('data-a') === u || e.getAttribute('data-b') === u)) || (idx != null && e.getAttribute('data-i') === String(idx));
        e.classList.toggle('on', !!on);
      });
      root.querySelectorAll('.node').forEach(function (n) { n.classList.toggle('on', n.getAttribute('data-u') === u); });
      lis.forEach(function (li) {
        var lk = LINKS[+li.getAttribute('data-i')];
        li.classList.toggle('on', (u && (lk[0] === u || lk[1] === u)) || String(idx) === li.getAttribute('data-i'));
      });
    }
    root.addEventListener('click', function (e) {
      var g = e.target.closest('.node');
      if (!g) return;
      var u = g.getAttribute('data-u');
      if (g.classList.contains('on')) location.hash = href('a/' + u); else highlight(u);
    });
    root.addEventListener('keydown', function (e) {
      var g = e.target.closest('.node');
      if (g && e.key === 'Enter') location.hash = href('a/' + g.getAttribute('data-u'));
    });
    root.querySelectorAll('.node').forEach(function (g) {
      g.addEventListener('mouseenter', function () { highlight(g.getAttribute('data-u')); });
      g.addEventListener('focus', function () { highlight(g.getAttribute('data-u')); });
    });
    lis.forEach(function (li) { li.addEventListener('mouseenter', function () { highlight(null, li.getAttribute('data-i')); }); });
  }

  /* ---------- Búsqueda ---------- */
  var INDEX = null;
  function buildIndex() {
    INDEX = [];
    ARTS.forEach(function (a) {
      INDEX.push({ kind: 'a', id: a.id, keys: norm(a.es.t + ' | ' + a.ru.t + ' | ' + (a.en ? a.en.t : '') + ' | ' + a.id), body: norm(a.es.s + ' ' + a.ru.s + ' ' + (a.en ? a.en.s : '')), a: a });
    });
    LIB.novels.forEach(function (n) {
      INDEX.push({ kind: 'n', id: n.slug, keys: norm(n.title + ' | ' + n.slug), body: norm(n.genre || ''), n: n });
    });
    LIB.characters.forEach(function (c) {
      INDEX.push({ kind: 'c', id: c.id, keys: norm(c.name + ' | ' + (c.es ? c.es.name : '') + ' | ' + (c.ru ? c.ru.name : '') + ' | ' + (c.en ? c.en.name : '')), body: norm(c.role + ' ' + (c.es ? c.es.description : '') + ' ' + (c.ru ? c.ru.description : '') + ' ' + (c.en ? c.en.description : '')), c: c });
    });
  }
  function search(q) {
    if (!INDEX) buildIndex();
    var nq = norm(q).trim();
    if (!nq) return [];
    var words = nq.split(/\s+/);
    var res = [];
    INDEX.forEach(function (it) {
      var score = 0;
      if (it.keys.indexOf(nq) === 0) score += 100;
      else if (it.keys.indexOf(nq) >= 0) score += 60;
      words.forEach(function (w) {
        if (it.keys.indexOf(w) >= 0) score += 12;
        else if (it.body.indexOf(w) >= 0) score += 4;
        else score -= 30;
      });
      if (score > 0) {
        if (it.kind === 'a') score += 15;
        if (it.kind === 'c' && CHAR_ART[it.id]) score -= 10;
        res.push({ it: it, score: score });
      }
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.map(function (r) { return r.it; });
  }
  function resultRow(it) {
    if (it.kind === 'a') {
      var l = L(it.a);
      return { href: href('a/' + it.id), img: articleImg(it.a), title: l.t, sub: t('type1')[it.a.type] + ' · ' + uniName(it.a.uni) };
    }
    if (it.kind === 'n') {
      return { href: href('n/' + it.id), img: it.n.cover || 'assets/icon.svg', title: it.n.title, sub: t('novels').replace(/s$/, '').replace(/ы$/, '') + ' · ' + (LANG_NAMES[lang][it.n.lang] || it.n.lang) + (it.n.year ? ' · ' + it.n.year : '') };
    }
    var c = it.c, loc = c[lang];
    var art = CHAR_ART[c.id];
    return { href: art ? href('a/' + art) : href('personajes') + '?q=' + encodeURIComponent(c.id), img: 'assets/icon.svg', title: (loc && loc.name) || c.name, sub: (loc && loc.description) || c.role };
  }
  function viewSearch(q) {
    var res = search(q);
    var groups = { a: [], n: [], c: [] };
    res.forEach(function (it) { groups[it.kind].push(it); });
    var h = ['<header class="page-head"><h1>' + t('results') + ' «' + esc(q) + '»</h1></header>'];
    if (!res.length) h.push('<div class="empty">' + t('noResults') + '</div>');
    if (groups.a.length) h.push('<h2 class="section-title">' + t('articles') + ' <small>' + groups.a.length + '</small></h2><div class="a-grid">' + groups.a.map(function (it) { return articleCard(it.a); }).join('') + '</div>');
    if (groups.n.length) h.push('<h2 class="section-title">' + t('novels') + ' <small>' + groups.n.length + '</small></h2><div class="book-grid">' + groups.n.map(function (it) { return bookCard(it.n); }).join('') + '</div>');
    if (groups.c.length) h.push('<h2 class="section-title">' + t('characters') + ' <small>' + groups.c.length + '</small></h2><div class="people">' + groups.c.slice(0, 60).map(function (it) { return personCard(it.c); }).join('') + '</div>');
    setMain(h.join(''), q);
  }

  var sIn = document.getElementById('searchInput'), sBox = document.getElementById('suggest'), sSel = -1;
  function drawSuggest() {
    var q = sIn.value;
    var res = search(q).slice(0, 8);
    sSel = -1;
    if (!q.trim()) { sBox.hidden = true; return; }
    sBox.innerHTML = res.map(function (it) {
      var r = resultRow(it);
      return '<a href="' + r.href + '"><img class="s-thumb" src="' + r.img + '" alt=""><span class="s-main"><span class="s-title">' + esc(r.title) + '</span><span class="s-sub">' + esc(r.sub) + '</span></span></a>';
    }).join('') + '<a class="s-all" href="' + href('buscar/' + encodeURIComponent(q)) + '">' + t('allResults') + ' →</a>';
    sBox.hidden = false;
  }
  sIn.addEventListener('input', drawSuggest);
  sIn.addEventListener('focus', function () { if (sIn.value) drawSuggest(); });
  sIn.addEventListener('keydown', function (e) {
    var items = sBox.querySelectorAll('a');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!items.length) return;
      sSel = (sSel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(function (x, i) { x.classList.toggle('on', i === sSel); });
    } else if (e.key === 'Escape') { sBox.hidden = true; sIn.blur(); }
  });
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var items = sBox.querySelectorAll('a');
    if (sSel >= 0 && items[sSel]) location.hash = items[sSel].getAttribute('href');
    else if (sIn.value.trim()) location.hash = href('buscar/' + encodeURIComponent(sIn.value.trim()));
    sBox.hidden = true;
    sIn.blur();
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.search')) sBox.hidden = true; });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') { e.preventDefault(); sIn.focus(); }
  });

  /* ---------- Otras vistas ---------- */
  function viewNotFound() {
    setMain('<div class="empty" style="margin-top:40px"><p style="font:700 28px var(--display);margin:0 0 8px">404</p><p>' + t('notFound') + '</p><p><a href="' + href('') + '">' + t('backHome') + '</a></p></div>');
  }

  function setMain(html, title) {
    lbClose();
    var m = document.getElementById('main');
    m.innerHTML = html;
    document.title = (title ? title + ' — ' : '') + 'Faderpedia';
  }

  /* ---------- Enrutador ---------- */
  function applyChrome() {
    document.documentElement.lang = lang;
    document.getElementById('brand').setAttribute('href', href(''));
    document.getElementById('brandTag').textContent = t('tag');
    sIn.placeholder = t('search');
    document.querySelector('.skip').textContent = t('skip');
    document.querySelectorAll('.lang-switch button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    document.getElementById('foot').innerHTML = '<p>' + t('footer') + '</p><p>Faderpedia · ' + num(ARTS.length, 'stArticles') + ' · ES / RU / EN</p>';
  }

  var lastRoute = null;
  function route() {
    var raw = location.hash.replace(/^#\/?/, '');
    var anchor = null;
    var m = raw.match(/^(es|ru|en)\/?(.*)$/);
    if (!m) {
      // Ancla dentro de la página actual
      if (raw && lastRoute !== null && document.getElementById(raw)) { document.getElementById(raw).scrollIntoView({ behavior: 'smooth' }); return; }
      var nav = (navigator.language || '').toLowerCase().slice(0, 2);
      var pref = store('fp:lang') || (nav === 'ru' || nav === 'en' ? nav : 'es');
      location.replace('#/' + pref + '/' + raw);
      return;
    }
    lang = m[1];
    store('fp:lang', lang);
    var path = decodeURIComponent(m[2] || '').replace(/\/$/, '');
    var qi = path.indexOf('?');
    var query = '';
    if (qi >= 0) { query = path.slice(qi + 1); path = path.slice(0, qi); }
    applyChrome();
    GAL = [];
    document.body.classList.remove('nav-open');
    document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');

    var parts = path.split('/');
    var sideKey = path;
    if (path === '' ) viewHome();
    else if (parts[0] === 'a') viewArticle(parts[1]);
    else if (parts[0] === 'n') viewNovel(parts[1]);
    else if (parts[0] === 'cat') viewCategory(parts[1]);
    else if (path === 'biblioteca') viewLibrary();
    else if (path === 'personajes') { viewPeople(); var pq = query.match(/q=([^&]+)/); if (pq) { var inp = document.getElementById('pQ'); var c = LIB.characters.filter(function (x) { return x.id === decodeURIComponent(pq[1]); })[0]; inp.value = c ? ((c[lang] && c[lang].name) || c.name.replace(/\s*\(.*\)$/, '')) : decodeURIComponent(pq[1]); inp.dispatchEvent(new Event('input')); } }
    else if (path === 'mapa') viewMap();
    else if (path === 'galeria') { var gq = query.match(/n=([^&]+)/); viewGallery(gq ? decodeURIComponent(gq[1]) : ''); }
    else if (path === 'todos') viewAll();
    else if (parts[0] === 'buscar') viewSearch(parts.slice(1).join('/'));
    else if (path === 'azar') { var r = ARTS[Math.floor(Math.random() * ARTS.length)]; location.replace(href('a/' + r.id)); return; }
    else viewNotFound();
    renderSidebar(sideKey);
    if (lastRoute !== m[0]) window.scrollTo(0, 0);
    lastRoute = m[0];
  }

  // Anclas internas (índice, letras) sin romper el enrutador
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-anchor]');
    if (!a) return;
    e.preventDefault();
    var el = document.getElementById(a.getAttribute('data-anchor')) || document.getElementById(decodeURIComponent(a.getAttribute('data-anchor')));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      var nl = b.getAttribute('data-lang');
      var rest = location.hash.replace(/^#\/(es|ru|en)\/?/, '');
      location.hash = '#/' + nl + '/' + rest;
    });
  });
  document.getElementById('themeBtn').addEventListener('click', function () {
    var root = document.documentElement;
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('fp:theme', next);
  });
  document.getElementById('menuBtn').addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.getElementById('scrim').addEventListener('click', function () { document.body.classList.remove('nav-open'); });

  // La altura real de la cabecera cambia en móvil (buscador en dos filas): se mide en vez de suponerla.
  var topbar = document.querySelector('.topbar');
  function syncTop() { document.documentElement.style.setProperty('--top', Math.round(topbar.getBoundingClientRect().height) + 'px'); }
  syncTop();
  window.addEventListener('resize', syncTop);
  if (window.ResizeObserver) new ResizeObserver(syncTop).observe(topbar);

  window.addEventListener('hashchange', route);
  route();
})();
