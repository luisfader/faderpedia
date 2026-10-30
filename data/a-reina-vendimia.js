// «La reina de la Vendimia» (en curso): sinopsis y enlaces desde Praga, Jana y Mendoza.

window.SINOPSIS = window.SINOPSIS || {};
window.SINOPSIS['la-reina-de-la-vendimia'] = Object.assign(window.SINOPSIS['la-reina-de-la-vendimia'] || {}, {
  es: `Luis tiene que viajar a Mendoza por una misión del Sur Místico, pero no se anima a contarle la verdad a Jana: le dice que va a visitar a su padre. Entre sus cosas, Jana encuentra una foto imposible: Luis, gigante, en medio de Belgrado. Decidida a descubrir su secreto, cruza medio mundo, se tiñe de rubio y se convierte en Yanina, la misteriosa reina de la Vendimia de la Capital.
Mientras Mendoza celebra la cosecha, bajo las ruinas de la ciudad colonial alguien despierta a un ser de la mitología huarpe. Y la única que puede hablarle es una reina que nadie conoce.
Continuación de «Ostrovy nad Prahou».`,
  ru: `Луису нужно лететь в Мендосу по заданию Мистического Юга, но он не решается сказать Яне правду и говорит, что едет навестить отца. Среди его вещей Яна находит невозможную фотографию: Луис-великан посреди Белграда. Решив раскрыть его тайну, она пересекает полмира, перекрашивается в блондинку и становится Яниной — таинственной королевой Вендимии от Столицы.
Пока Мендоса празднует сбор урожая, под руинами колониального города кто-то пробуждает существо из мифологии уарпе. И говорить с ним может только королева, которую никто не знает.
Продолжение романа «Ostrovy nad Prahou».`
});

(function () {
  function addNovel(id, slug) {
    var a = (window.ARTICLES || []).filter(function (x) { return x.id === id; })[0];
    if (a && (a.novels || (a.novels = [])).indexOf(slug) < 0) a.novels.push(slug);
  }
  ['praga', 'jana', 'mendoza'].forEach(function (id) { addNovel(id, 'la-reina-de-la-vendimia'); });
})();

addTo('jana',
`## La reina de la Vendimia

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]* (en curso), Luis viaja a Mendoza por una misión del [[sur-mistico|Sur Místico]] y le dice a Jana que va a visitar a su padre. Ella encuentra en su cuaderno una foto imposible —Luis, gigante, en medio de Belgrado—, cruza medio mundo, se tiñe de rubio en la peluquería de Mirta y se anota como **Yanina**, reina de la Vendimia de la Capital. En el Teatro Griego Frank Romero Day se planta frente a la **Mulánima**, un ser de la mitología huarpe con crines de fuego, y el diario *Los Andes* titula: «La reina que domó a la bestia».`,
`## Королева Вендимии

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» (пишется) Луис летит в Мендосу по заданию [[sur-mistico|Мистического Юга]] и говорит Яне, что едет к отцу. Она находит в его тетради невозможную фотографию — Луис-великан посреди Белграда, — пересекает полмира, перекрашивается в блондинку в парикмахерской Мирты и записывается как **Янина**, королева Вендимии от Столицы. В Греческом театре Франка Ромеро Дая она встаёт перед **Муланимой**, существом из мифологии уарпе с огненной гривой, и газета «Лос Андес» выходит с заголовком «Королева, укротившая чудовище».`,
[['Alias', 'Yanina, reina de la Vendimia de la Capital']],
[['Псевдоним', 'Янина, королева Вендимии от Столицы']]);

addTo('mendoza',
`## La reina de la Vendimia

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*, bajo el Área Fundacional y las ruinas de San Francisco hay «otra Mendoza», y allí despierta la Mulánima, un ser de la mitología huarpe. [[jana|Jana]], disfrazada de la reina Yanina, la enfrenta en el Teatro Griego.`,
`## Королева Вендимии

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» под Площадью основания и руинами Сан-Франсиско лежит «другая Мендоса», и там пробуждается Муланима — существо из мифологии уарпе. [[jana|Яна]] под видом королевы Янины встречает её в Греческом театре.`);
