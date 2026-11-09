/* ---------- La Corazonada 2: El Refugio ---------- */
window.SINOPSIS = window.SINOPSIS || {};
window.SINOPSIS['la-corazonada-2'] = Object.assign(window.SINOPSIS['la-corazonada-2'] || {}, {
  en: `Luis no longer wants to live in Robert's shadow. On an abandoned dam in the Black Canyon he builds his own fortress, El Refugio, and marries Natalia, the doctor. But he is still in love with Natalia, the cellist.
When envoys of the Central Power arrive with an ultimatum, Luis signs a treaty that changes everything: the doctor flees to the Turquoise Utopia, the two Natalias face each other in a duel, and a surprise attack drags him into the most desperate decision of his life. And just when peace seems to have come, a new power appears on the horizon.`
});
window.SINOPSIS['ti-amo-in-silenzio'] = Object.assign(window.SINOPSIS['ti-amo-in-silenzio'] || {}, {
  en: `A journalist knocks on the door of Fabrizio Orsini, a comic-book artist of almost fifty, in a house full of portraits of the same woman. For the first time in twenty-nine years Fabrizio agrees to tell the truth about what he did as a boy. It all began in the summer of 1997, in Sinea, when he saw Lucia ride into the square on a red motorbike: to get her attention he learned to ride, to make the perfect coffee, to fix engines. But beneath the city someone was preparing a terrible plan…
A novel for B1 learners of Italian, reaching B2 in the last chapters, with glossed words, a vocabulary list for every chapter and interactive exercises.`
});

EN('el-refugio', {
  t: 'El Refugio',
  s: 'The fortress Luis builds on an abandoned dam in the Black Canyon so he can stop living in Robert\'s shadow.',
  box: [['Founder', '[[luis-arquitecto|Luis]]'], ['Location', 'A dam in the Black Canyon, north of Viktoria'], ['Population', 'About 1,300 people'], ['Defence', 'Tadeo'], ['Power', 'The dam\'s turbines, run by Mirna'], ['Alliances', 'The Lake Pact with the Turquoise Republic']],
  b: `**El Refugio** ("The Refuge") is [[luis-arquitecto|Luis]]'s fortress in *[[la-corazonada-2|La Corazonada 2: El Refugio]]*. Luis builds it on an abandoned dam in the Black Canyon: the walls are the dam itself and the turbines light the whole settlement. In the yard of his house stands a dead plum tree that blossoms again at the end of the novel.

## Its people

- **Tadeo**, a former slave of the savages, head of defence.
- **Mirna**, a hydraulic engineer who controls the floodgates, and with them the electricity.
- **Carmela**, a nurse at the hospital, who adopts little Tomás.
- **El Polaco**, the mechanic.

## History

At first all goes well: Luis marries Natalia, the doctor. Then envoys of the [[prepotencia-central|Central Power]], Edward Haskell and Colonel Brandt, arrive with an ultimatum: join the **Federation of Republics for Freedom** or see the fortress razed. Luis signs alone at three in the morning, and Major Kessler stations a garrison on the dam.

After Luis's failed attempt to take Viktoria, Mirna closes the floodgates and cuts the federal troops' power. Luis renounces the Federation in front of the whole Refuge and promises that decisions will be put to a vote. He then signs the **Lake Pact** with [[robert|Robert]]: a free alliance between the two communities, with no foreign powers.

At the end an envoy in a white coat arrives from the **Eastern Power** with a thirty-day deadline.`
});

ENadd('luis-arquitecto',
`## La Corazonada 2: El Refugio

In *[[la-corazonada-2|La Corazonada 2: El Refugio]]* Luis leaves the Turquoise Republic and builds his own fortress, [[el-refugio|El Refugio]], to compete with [[robert|Robert]]. He marries Natalia, the doctor, but is still in love with [[natalia-violonchelista|Natalia the cellist]]. He signs the Federation treaty alone, before dawn, and the doctor leaves him. During a surprise attack he tries to take Viktoria through drainage tunnels he designed himself, is wounded and takes the cellist hostage. At a desert gas station he confesses he loves her, and the doctor saves his life operating by flashlight.

In the end he renounces the Federation, apologises to Robert and accepts the two Natalias' eight conditions: they decide to share their lives with him. "Never again at three in the morning."`,
[['In La Corazonada 2', 'Founder of [[el-refugio|El Refugio]]']]);

ENadd('natalia-violonchelista',
`## La Corazonada 2: El Refugio

In *[[la-corazonada-2|La Corazonada 2: El Refugio]]* her violin breaks in battle and Dima finds her a **cello** in Viktoria's ruined conservatory. Every Sunday at half past six she plays a melody four minutes and twelve seconds long. When she learns that [[robert|Robert]] spent the night with his ex-wife, she challenges Natalia the doctor to a duel: sabres, to first blood, at dawn by the lake. A surprise attack interrupts it and [[luis-arquitecto|Luis]] takes her hostage; she chooses to help him escape. In the end the two Natalias make a pact and share their lives with Luis, and at the concert on the dam she finally names her melody: *El Refugio*.`);

ENadd('fortaleza-turquesa',
`## La Corazonada 2

In *[[la-corazonada-2|La Corazonada 2: El Refugio]]* the fortress has become the **Turquoise Republic**, with Viktoria as its capital. It survives a Federation drone attack and finally signs the **Lake Pact** with Luis's [[el-refugio|El Refugio]], on the shore where the two Natalias' duel was to take place.`);

(function () {
  var EN_CH = {
    'tadeo': { name: 'Tadeo', tag: 'La Corazonada 2', description: 'A former slave of the savages and head of El Refugio\'s defence. Loyal to Luis, but never blind.' },
    'mirna': { name: 'Mirna', tag: 'La Corazonada 2', description: 'El Refugio\'s hydraulic engineer. She controls the dam\'s floodgates, and with them everyone\'s electricity.' },
    'carmela': { name: 'Carmela', tag: 'La Corazonada 2', description: 'A nurse at El Refugio\'s hospital and adoptive mother of little Tomás.' },
    'el-polaco': { name: 'El Polaco', tag: 'La Corazonada 2', description: 'El Refugio\'s mechanic: if it has an engine or wires, he fixes it.' },
    'kessler': { name: 'Major Kessler', tag: 'La Corazonada 2', description: 'Commander of the Federation garrison at El Refugio.' },
    'edward-haskell': { name: 'Edward Haskell', tag: 'La Corazonada 2', description: 'Envoy of the Central Power who forces on Luis the treaty of the Federation of Republics for Freedom.' },
    'emisario-oriente': { name: 'The Envoy', tag: 'La Corazonada 2', description: 'A man in a white coat with a soft voice who arrives on behalf of the Eastern Power with a thirty-day ultimatum.' }
  };
  (window.LIBRARY || { characters: [] }).characters.forEach(function (c) { if (EN_CH[c.id]) c.en = EN_CH[c.id]; });
})();
