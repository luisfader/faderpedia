// English translations, batch 13: Argenta, the ending of Ostrovy nad Prahou, Venice in Venetian and in Russian.

// Appends English text (and infobox rows) to an article that already has its English version.
window.ENadd = function (id, b, box) {
  var a = window.ARTICLES.filter(function (x) { return x.id === id; })[0];
  if (!a || !a.en) { if (window.console) console.warn('ENadd: no article ' + id); return; }
  if (b) a.en.b += '\n\n' + b;
  if (box) a.en.box = (a.en.box || []).concat(box);
};

EN('argenta', {
  t: 'Argenta',
  s: 'A city on a living Mars in 4085 BC, and the title of the second novel about Laura and Luciano: under a pink sky, Ivan and Maria find crystals in the Forbidden Desert that open a passage between two worlds and two eras.',
  box: [['Russian', 'Аргента'], ['Novel', '[[argenta|Аргента]] (in progress, 10 chapters)'], ['Series', 'Laura and Luciano, after [[zvezdnyj-roman|Звёздный роман]]'], ['Time', '4085 BC and 2026'], ['Inhabitants', 'Ivan, Maria and her father Pyotr'], ['Threat', '[[maskvell|Elondar Maskvell]]'], ['Artifact', '[[cristales-argenta|The desert crystals]]']],
  b: `In 4085 BC Mars was not the silent desert that future astronomers would see, but a calm, living world under a **pink** sky, in the light of an endless evening. Small, carefully built cities stood among its valleys, and one of the most beautiful was **Argenta**, named after the pale stone of its buildings: silvery by day, warm as moonlight in the evening.

## The city

- **Transparent domes** over the houses, and slender towers like crystals stretched towards the sky.
- **Canals** of clear water reflecting the pink sky, little bridges and gardens of trees with silver leaves.
- Squares with fountains where music plays in the evening and people stroll without hurrying. Love, the novel says, was considered as natural there as water or light.
- To the north, beyond the gates, lies the **Forbidden Desert**, which the elders hardly ever mention.

Many people are leaving for Earth, where the atmosphere is denser and crops grow faster. Not Maria: "This is my world," she tells Ivan on a terrace, and decides to stay.

## Two couples, two eras

The novel alternates between Argenta and Earth in 2026. There [[laura-estelar|Laura]] and [[luciano|Luciano]], after everything they went through in *A Starlit Romance*, are sorting their library of books about [[atlantida|Atlantis]] and find an old one: "Mars, Planet and God of War. Love and Betrayal". Luciano tells Laura that every story is real; what matters is how you live it.

Ivan and Maria go out into the desert, find the [[cristales-argenta|crystals]] and take them to Pyotr, Maria's father, who weeps when he sees them: they are what he has worked for all his life. That night he sets up the passage machine, the two young people walk into the light and vanish. At the same time, on Earth, [[maskvell|Elondar Maskvell]] gathers rare minerals that begin to glow, an earthquake shakes Laura and Luciano's city, and the couple suddenly appear in a room in Argenta, in front of Pyotr and his wife… with the same faces as Ivan and Maria.

## What we know

- According to a legend Pyotr believes is true, humans were not born on Mars: they came from **Europa**, Jupiter's moon, fleeing a force that destroyed worlds.
- In the latest published chapter Luciano realises that the passage does not only join places: Mars is not just another world, **it is another time**.
- Ivan and Maria, meanwhile, land in Maskvell's laboratory, speaking a language nobody understands.`
});

EN('maskvell', {
  t: 'Elondar Maskvell',
  s: 'A tycoon famous all over the planet and obsessed with Mars. In an underground laboratory he assembles rare minerals that glow like crystals, and when Ivan and Maria step out of his portal, he has them taken away.',
  box: [['Russian', 'Элондар Масквелл'], ['Novel', '[[argenta|Аргента]]'], ['Appearance', 'Heavy-set, with thin fair hair and a cold stare'], ['Obsession', 'Mars'], ['Assistant', 'George'], ['Base', 'A secret underground laboratory']],
  b: `His name is known to many people on Earth: **Elondar Maskvell**, a heavy-set man with thin fair hair and an attentive, cold stare, with one idea in his head: **Mars**.

## The laboratory

In a huge underground complex, among metal walls and screens of pale blue light, his scientists lay out on a table minerals brought from deserts, mountains and ocean depths. Arranged in a certain order they form a structure resembling [[cristales-argenta|crystals]], which begins to glow and give off a strange energy. "Very soon my old obsession with Mars will finally be satisfied," he tells his assistant George.

## On Earth

[[laura-estelar|Laura]] cannot stand him: she calls him "an idiot with a big mouth" who insults people and shows off his money, and who talks about Mars in every interview. When an earthquake shakes the city, all the comments online are about him, and Laura is convinced it is no coincidence.

## Ivan and Maria

The air in the laboratory tears open, and out of the portal come **Ivan and Maria**, from [[argenta|Argenta]]. They speak a soft, strange language that nobody understands. Maskvell walks around them, studying them like a discovery, and orders them taken away: "We will find a way to talk. And when we do, you will tell me everything."`
});

EN('cristales-argenta', {
  t: 'The desert crystals',
  s: 'Long, smooth crystals, as if carved from ice, with a line of blue light inside, which Ivan and Maria find in the Forbidden Desert of Mars. Placed in Pyotr\'s machine, they open a passage between worlds… and between eras.',
  box: [['Russian', 'кристаллы'], ['Novel', '[[argenta|Аргента]]'], ['Found by', 'Ivan and Maria, in the Forbidden Desert'], ['Appearance', 'Transparent, with a line of blue energy and unknown signs'], ['Function', 'Anomaly generators: they join worlds and times'], ['Earth copy', '[[maskvell|Maskvell]]\'s structure of minerals']],
  b: `They stick out of the red sand beyond the gates of [[argenta|Argenta]]: a transparent object, long and smooth, as if carved from ice, and others just like it nearby. Inside runs a faint **blue** line, as if energy were slowly flowing. When Ivan runs his hand over one, a soft light comes on and for a moment **unknown signs** appear, like an ancient script. Old legends said that in the desert one could find crystals from ancient times, holding the knowledge of vanished generations.

## Pyotr's machine

Pyotr, Maria's father, recognises them at once. That night he prepares a device of a smooth, pale material, something between stone and metal, with a central hollow surrounded by **rings that turn by themselves**. He places the crystals one by one, "as if the system itself suggested the order", and in the centre a circle of light opens onto a blue sky and green trees: another world. Ivan and Maria walk in hand in hand; Maria's mother bursts in shouting, the energy loses its balance and the passage closes.

## What they are

- According to the legend, without them humans could never have come from Europa, Jupiter's moon: they are a **technology for passing between worlds**.
- Pyotr calls them **anomaly generators**, able to join worlds that would normally never touch.
- Luciano suspects something more: they move people not only in space but **in time**. And if they join destinies, perhaps they let something follow.

On Earth, [[maskvell|Maskvell]] achieves something similar with rare minerals. His structure gives off radiation and finally opens a portal in his laboratory: Ivan and Maria come out of it.`
});

EN('cinco-pragas', {
  t: 'The five Pragues',
  s: 'Beneath Prague there are five Pragues, one under another like five rings on water: the deeper, the older and the quieter. In the fifth beats the city\'s heart of stone.',
  box: [['Czech', 'Pět Prah'], ['Novel', '[[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Source', 'The prophecy embroidered on [[falda-jana|Jana\'s skirt]]'], ['Guardians', '[[kovar|The permoníci]]'], ['At the bottom', '[[corazon-praga|The heart of Prague]]']],
  b: `The first row of golden letters on [[falda-jana|Jana's skirt]], read by [[kovar|Kovář]] in Glagolitic, says it like this: "Beneath Prague there are five Pragues. One under another, like five circles on water, like five rings in a tree. The deeper, the older. The older, the quieter. And in the fifth, the deepest, where the sun has never shone, beats a heart of stone." Kovář has a map on leather with the five concentric circles and, in the middle, a small heart.

## The five levels

1. **The Prague of cellars and wells.** The closest to the sun and the fullest of life: an old brewery cellar as big as a church, with barrels the size of little houses. Here live the *sklepníci* (brewers, alchemists' apprentices, people who hid from the war and never came back up), the *hospodáříčci* (a little house spirit under every old house, named after it), the small *vodníci* of the wells, the *bludičky* (little lights that lead lost people home) and the cellar cats.
2. **The lost streets.** Romanesque Prague of eight hundred years ago, left below when the city was raised three metres to escape the Vltava's floods. Transparent shadows live the same happy Tuesday over and over, and a night market sells everything people up above have lost: keys, odd gloves, letters that never arrived, memories in little bottles. Here waits [[caballero-hierro|the iron knight]].
3. **The river beneath the river.** The Vltava's "older sister", black and smooth, with blind fish and glowing fungi. A ferryman who used to be a *vodník* carries travellers across, and in the **rusalka pool** you must not sing unless you know the right song.
4. **The hall of the sleepers.** Thousands of the knights of Blaník sleep on their horses, covered in dust and cobwebs, beside a horn of white bone that sounds by itself. They will wake "when things are at their worst".
5. **The heart.** An underground valley of limestone trees and streams that flow without a sound, with cave paintings, hundreds of handprints and a figure of Libuše. The silence is so absolute that even a clap makes no noise, and here beats [[corazon-praga|the heart of Prague]].

## How to get down

Every gate asks for something different: some open with a hammer, others with courtesy (the gate to the second Prague, only with Jana's "please") and others with a song. The fifth can only be reached by a staircase that winds around one of the chains, and the steps vanish under the feet of anyone the underground will not let through.`
});

EN('corazon-praga', {
  t: 'The heart of Prague',
  s: 'A heart of reddish-grey stone with veins of gold, as big as a house, beating in the fifth Prague. The five chains of the black islands drink its strength; Jana holds it in her hands, the size of an apple, and brings it back to life with her own heart.',
  box: [['Czech', 'kamenné srdce'], ['Novels', '[[podzemni-tajemstvi|Podzemní tajemství]], [[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Place', 'The fifth of [[cinco-pragas|the five Pragues]]'], ['Material', 'Reddish-grey stone with veins of gold'], ['Enemy', '[[cernobog|Černoboh]]'], ['Rule', '"A heart is not returned with hands. A heart is returned with the heart"']],
  b: `Luis first hears it with his hands, pressed against the stone wall of the Vltava embankment: a slow, regular tremor, *boom… boom… boom…*, so deep that the ear cannot catch it and only the body feels it. It is weak and irregular, "like a very tired heart", and it has exactly the rhythm of the dark part of the melody Luis has been unable to finish for two nights. The islands' chains are not drinking only electricity: **they are drinking the heart of Prague**. And if it stops, the Prague above will be left empty, "like a body without a heart".

## At the bottom of the world

In the fifth Prague, in a valley of stone trees, the heart has been set in the rock since the beginning of the world: **reddish-grey, with veins of gold**, as big as a house. You can see it breathe: it swells and the veins light up; it shrinks and they go out. The five chains end in it, driven in like hooks, and through them the turquoise light rises towards the lamp in the castle above Petřín.

## The trap

[[lindsey-vanessa|Lindsey]] convinces Jana that the islands are an ark that will carry the heart to safety. At midnight, when the chains are full, the heart comes loose from the rock and, under Jana's hands, shrinks "like a balloon going down" until it fits in her palms, the size of an apple. All that remains is to put it into the false lantern. But as she touches it Jana sees again her mother sewing by the window, the rose on Charles Bridge, the door on Kampa… and from above, in a silence where nothing sounds, Kamínek's lullaby reaches her.

## The fifth note

Jana lays it in the hollow in the rock, but it does not grow: "a heart is not returned with hands". Then she presses Luis's frozen hand to her chest: the fifth note, the deepest, the one he was missing, is there. They make love beside the heart, on her spread coat and her glowing skirt, and the heart grows with every beat of theirs until it gives a blow heard in all five Pragues: the stone trees blossom, the knights salute with their swords, the rusalkas sing, the candles in the cellars flare up and, above, every light in the city comes on. The chains crumble, and [[cernobog|Černoboh]], with no way left, falls to the place where there is nothing at all.`
});

EN('falda-jana', {
  t: 'Jana\'s skirt',
  s: 'The embroidered burgundy skirt Jana\'s mother sewed for a whole year, "for you, when you are grown up: one day it will lead you". In September it hid musical notes; in Ostrovy nad Prahou it reveals a prophecy of Libuše in golden letters.',
  box: [['Czech', 'bordó sukně'], ['Novels', '[[podzemni-tajemstvi|Podzemní tajemství]], [[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Owner', '[[jana|Jana]]'], ['Embroidery', 'Tulips, cornflowers, ears of wheat, little birds and a heart'], ['Secret', 'Five rings of Glagolitic letters'], ['Sign', 'A red tulip that glows when Jana listens to her heart']],
  b: `It is the skirt [[jana|Jana]] danced in on Charles Bridge in September, the morning they won. Her mother sewed it by the window, summer and winter, for a year, and when Jana asked who it was for, she smiled: "This skirt is for you, for when you are grown up. One day it will lead you." All her life Jana thought the skirt would lead *her*.

## What it hides

- In *Podzemní tajemství*, the black line near the hem turned out to be **a musical score**.
- In [[ostrovy-nad-prahou|Ostrovy nad Prahou]], the underground music awakens very fine **golden stitches**, invisible until then, which light up with every note. They form **five rings** around the skirt, with letters in **Glagolitic**, the oldest Slavic script, in which Princess Libuše's prophecies were written down. "The skirt is a book, girl," says [[kovar|Kovář]]. "And this music has opened it."
- The first ring describes [[cinco-pragas|the five Pragues]] and their inhabitants. Below the fifth, another line says that when the Dark One comes on the islands of wrath, the underground will be led by neither prince nor princess but by "the one who wears this skirt", and that all the Pragues must obey her. The permoníci take off their hoods before her.

## The tulip

A red tulip by the hip is the thermometer of Jana's heart: it lights up when she trusts Luis and goes out while the false lantern whispers to her. At the bottom of the fifth Prague, when she finally chooses Luis, the whole embroidery lights up like a garden when the sun comes out, and Jana reads the last ring by herself: "A heart is not returned with hands. A heart is returned with the heart." A year later the tulip still sometimes glows at night while she sleeps, "as if she were dreaming something nice", and the black cat sleeps on the skirt when it hangs over the chair.`
});

EN('kovar', {
  t: 'Kovář and the permoníci',
  s: 'The permoníci are the mine spirits of the Czech mountains, guardians of the gates between the five Pragues. Kovář, the oldest in Prague, with a white beard down to the ground, first puts Luis and Jana to sleep as intruders and then follows Jana as his mistress.',
  box: [['Czech', 'permoníci; Kovář ("Smith")'], ['Novel', '[[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Appearance', 'The size of a ten-year-old child, grey beards, pointed hoods, leather aprons'], ['Tools', 'Little hammers and miners\' lanterns'], ['Pact', 'With Princess Libuše: the sun above for people, the darkness below for them'], ['The youngest', 'Kamínek ("Pebble")']],
  b: `Jana's grandmother used to tell her about them: spirits of the mountains and mines who guard treasure underground. They are as tall as a ten-year-old child, with grey beards down to the waist, big noses, small eyes shining "like wet pebbles", pointed hoods and the leather aprons of old miners. When Luis and Jana go down underground, the eldest blows into his copper lantern, a golden dust smelling of honey, poppy and summer meadow puts them to sleep, and they wake in a cave of stalactites, before a stone throne.

## Kovář

"I am **Kovář**, the oldest of the permoníci of Prague." His voice is deep, like a stone rolling down a mountain. Before Prague existed there were rocks, and the permoníci were with them: "stones are our flesh, the veins of gold and silver our blood". Libuše made a pact with them: people would have the sun above; they would have the darkness below, to guard it. For a century they did not show themselves, because Princess Ludmila had given them her word never to hand over the heart of stone. When Ludmila left, they declared: "The underground is ours now."

But Jana's skirt changes everything. Kovář reads the embroidered prophecy in Glagolitic, takes off his hood and gives her **the lantern of the first Prague**, with a little white star inside. "The underground is ours. But we are hers."

## Obedience and shame

Kovář carries out Jana's orders even when he disagrees: he ties up Luis, but leaves the knot loose enough to undo with his teeth and secretly slips his notebook into his pocket. When the bewitched Jana tells him "I don't want to hear your opinions any more", he climbs back to the first Prague in shame and leads Lucie, Mark and Vanessa through **galleries** no human had ever crossed. In the end he forgives her: Lucie's grandmother brought him bread and salt every year on Saint Barbara's day.

## Kamínek

The youngest, with a beard only down to his knees, stays behind with an injured leg in the hall of the sleepers. There Luis teaches him the lullaby *Halí belí, koťátka malí*. When all seems lost, the smallest and most frightened of them all starts singing in his thin, off-key voice, and the knights wake up. Since then he has been the only permoník who sings. Kovář grumbles that permoníci carve, they don't sing, but when Kamínek sings, he puts down his hammer and listens.`
});

EN('caballero-hierro', {
  t: 'The iron knight',
  s: 'The iron man from the legend of Platnéřská Street: a knight who, believing a lie, killed his fiancée Kateřina and cursed himself. He has stood motionless in the second Prague for seven hundred years, waiting for a girl who will speak to him without fear.',
  box: [['Czech', 'Železný rytíř'], ['Novel', '[[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Place', 'A courtyard in the lost streets, [[cinco-pragas|the second Prague]]'], ['Beloved', 'Kateřina'], ['Curse', 'Turned to iron; once every hundred years he may speak'], ['Gift', 'The second note, Kateřina\'s song']],
  b: `Up above, on Platnéřská Street, a house bears the statue of an iron man that tourists photograph. But that, says [[kovar|Kovář]], is only his shadow: the knight himself is below, in a courtyard of [[cinco-pragas|the lost streets]], rusty, with moss on his shoulders, and from his iron chest comes a clear, pure note, as if someone were singing inside.

## The legend

He was a young knight, rich, brave and in love. His fiancée was a good girl; they were to marry in spring. Someone whispered a single small lie to him: that she was deceiving him. He believed it, went to her at night in anger and killed her. In the morning he learned she had been faithful to the end. He cursed himself, turned to iron, and once every hundred years he may speak: if a girl with a pure heart spoke to him without fear, he could go free. In seven hundred years none came.

## Jana

Jana stands before him, trembling: "My name is Jana. I'm not afraid of you." It is a lie, but she says it anyway and touches his gauntlet. The tulip on [[falda-jana|her skirt]] lights up, the rust falls like autumn leaves and the visor opens on a young, pale face full of tears. His advice is the core of the novel: they will whisper to her that the one she loves will betray her, and it will sound reasonable. "A lie that sounds like a lie kills nobody. The one that kills is the one that sounds like the truth." He touches her heart and her forehead: "Your head will tell you what is reasonable. Your heart will tell you what is true. I listened to my head, and look what is left of me."

To Luis he gives the note from his chest, which was not his heart but **Kateřina's song**, the one she sang walking by the Vltava: the note flies out like a bird and stays in the notebook in old brown ink. Then he stands guard at the gate to the third Prague and, when he later meets Mark, asks him to give Jana back not her reason, but her heart.

## Free

All winter Jana goes down once a week to see him and talks about the weather, books, Luis and Kateřina. The iron softens, and one April day in his place stands a young man in an ordinary shirt: "Seven hundred years, and one conversation a week was enough." The niche on Platnéřská is left empty and the police investigate the "theft" for three months without result. Sitting on a bench on Kampa, the young man gives Luis the ring with a little red stone he once bought for Kateřina and never had the chance to give her.`
});

EN('lindsey-vanessa', {
  t: 'Lindsey and Vanessa',
  s: 'Twin violinists who for a hundred years played Princess Ludmila\'s dark music. Once free, Vanessa is happy playing in the street; the resentful Lindsey allies herself with Černoboh\'s raven and deceives Jana with a false lantern. In the end they play together.',
  box: [['Czech', 'Lindsey a Vanessa'], ['Novels', '[[podzemni-tajemstvi|Podzemní tajemství]], [[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Appearance', 'Identical: black hair, dark eyes, long violinist\'s fingers'], ['Difference', 'Mirror twins: Lindsey is left-handed'], ['Ally', '[[vran|Vran]] (Lindsey\'s)'], ['Song', '*Ach synku, synku*, in two voices']],
  b: `They are twins: the same black hair, the same dark eyes, the same long fingers. Not even Ludmila could tell them apart; for a hundred years she just called them "girls". In September, when the princess left with Prince Luboš on the dragon, she left them two violins on the castle steps and one sentence: "You are free."

## Two ways of being free

**Vanessa** laughed with happiness. She began playing in the Malá Strana square: Bach in the morning, folk songs in the afternoon, tangos whenever she felt like it. **Lindsey** played too, but "as if she were punishing someone". A hundred years of bleeding fingers for someone else's sorrow, and that someone got love, a prince and the whole world.

## Lindsey's plan

Lindsey joins [[vran|Vran]], herald of [[cernobog|Černoboh]], and comes home with a small black feather in her hair and fingertips glowing turquoise. She locks her sister in and devises the plan Vran himself never could: not to fight Jana, whom the skirt protects, but her fear that Luis will move on as he always has. Disguised as a **black-haired rusalka**, she retrieves the lantern that falls into the pool and hands Jana an identical copy holding a drop of light from the chains. Through it she whispers to her all night, until Jana looks at Luis like a stranger, and she pulls the bone-handled lever so that all five chains tighten just as he sings. In the fifth Prague she presents herself as an ally and explains that the islands are an ark to save the heart.

## Vanessa

A *hospodáříček* lets her out with a little brass key, and Vanessa waits all night at the station for Lucie and Mark. Mark recognises her from a detail in his September photos: the sisters are **mirror twins**, and Lindsey holds the bow in her left hand. In the rusalka pool, Vanessa plays the rusalkas their true song, the one about the girls who once walked into the Vltava and never came back, and the rusalkas weep and carry the boat on their current.

## In two voices

In the hall of the sleepers, Lindsey comes down the stairs playing dark music and the ravens attack. Vanessa answers with the tango from the square and then with *Ach synku, synku*, the song the whole of Prague is singing that night and that the two of them once played together one summer, but she leaves the second voice empty, like an open door. "Lindsey, please." When Vran screams at her to play, Lindsey answers with his own favourite phrase: "I don't want to hear your opinions any more", and plays the second voice. Then she unravels with her fingers the turquoise chain binding Luis; her fingers have not glowed since. A year later the twins play in the Malá Strana square, end every evening with *Ach synku* in two voices, and Lindsey sometimes smiles at the corner of her mouth.`
});

EN('vran', {
  t: 'Vran',
  s: 'Černoboh\'s raven herald: a tall, thin man in a black coat that shines like feathers, with an almost beak-like nose and a red glint in his eyes. His ravens spied on Luis and Jana all September; he keeps the real lantern "just in case".',
  box: [['Czech', 'Vran ("Raven")'], ['Novel', '[[ostrovy-nad-prahou|Ostrovy nad Prahou]]'], ['Master', '[[cernobog|Černoboh]]'], ['Ally', '[[lindsey-vanessa|Lindsey]]'], ['Sign', 'A red dot in the ravens\' eyes'], ['Weakness', 'He keeps anything valuable in his coat pocket']],
  b: `He comes in through a closed window with a rush of great wings: tall, thin, in a long black coat that shines like plumage, his black hair combed back and a narrow, sharp face with a long nose that looks like a beak. His eyes are dark, but when he turns towards the candle they flash red. "I am only a messenger."

## Černoboh's eyes

Vran is the **herald of [[cernobog|Černoboh]]**, and his ravens are his eyes. Mark discovers it in Beijing, going through his photos: a raven on the wing of a plane at the airport, with a red pixel in its eye, staring straight into the lens; and others in the September photos, on the shoulder of the statue of Saint John of Nepomuk, on the roofs of Old Town Square, on a lamp in Malá Strana. "All September someone was watching us, and I photographed it and didn't see it." The black cellar cat brings Jana a raven's feather with a turquoise gleam at its tip.

## The messenger

He scorns [[lindsey-vanessa|Lindsey]]'s failed plans but applauds the lantern: "Finally, a good plan." Lindsey gives him everything valuable to keep "just in case", and in the inside pocket of his coat he carries Jana's real lantern, its white star fading. In the hall of the sleepers he binds Luis with a burning turquoise chain and assures him that, when it is all over, he will throw the lantern into the Vltava, where it is deepest.

## The fall

When Mark shouts "he's got the lantern in his coat!", the black cat leaps from the pillar with the horn and tears the pocket open, and Mark catches the lantern an inch above the stones. Vran turns into a raven as big as a horse, but when Kamínek sings and the thousand knights awake, he shrinks into an ordinary raven, with no red light in his eyes, and flees croaking into the dark. In the epilogue an ordinary raven watches the proposal on Charles Bridge, caws sleepily, without malice, and flies off over the Vltava.`
});

/* ---------- Extensions ---------- */

(function () {
  var p = window.ARTICLES.filter(function (x) { return x.id === 'praga'; })[0];
  if (!p || !p.en) return;
  p.en.b = p.en.b.replace('("Islands over Prague", in progress)', '("Islands over Prague", finished)').replace('The latest published chapter of *Ostrovy nad Prahou* is called', 'The fourth chapter of *Ostrovy nad Prahou* is called');
})();

ENadd('praga',
`## The ending of Ostrovy nad Prahou

The novel is finished: 30 chapters and an epilogue, "A year from now, in this same place". For three days the islands drink the city's light, water and warmth; [[jana|Jana]] and Luis descend through [[cinco-pragas|the five Pragues]] while underground Prague helps the Prague above: the *hospodáříčci* hold up the foundations, the *vodníci* open the forgotten fountains, the *sklepníci* hand out candles and the *bludičky* lead lost children home.

- **The permoníci** recognise Jana as their mistress thanks to the prophecy on [[falda-jana|her skirt]], and [[kovar|Kovář]] gives her the lantern of the first Prague.
- **Luis looks for five notes**, one on each level. He gets them from the underground, from the [[caballero-hierro|iron knight]], from the rusalkas and from the horn in the hall of the sleepers. The fifth "is not in Prague: it is in a person".
- **The false lantern.** [[lindsey-vanessa|Lindsey]], disguised as a rusalka, swaps Jana's lantern, and Jana begins to distrust Luis, forbids him to make music and leaves him tied up in the hall of the sleepers.
- **Lucie and Mark** come back from Beijing via Vienna, walk into the city along the railway tracks and, with Vanessa and Kovář, arrive in time through the permoníci's galleries. Mark spots [[vran|Vran]] in his photos and works out where the real lantern is hidden.
- **The night of singing.** As the islands come down and faceless shadows pour out of the castles, an old violinist on Charles Bridge starts *Ach synku, synku* and the whole city sings with candles in their hands. Below, Kamínek sings, the knights awake, and Luis climbs down the frozen chain to Jana. She chooses the lantern that is warm "like Mum's hand", and together they bring [[corazon-praga|the heart of Prague]] back to life. [[cernobog|Černoboh]] falls and the city lights up.

## A year later

Lucie and Mark finally travel to China; the twins play together in Malá Strana; the knight is free; Kamínek is the only permoník who sings. On Charles Bridge, by Saint John of Nepomuk, Luis confesses what he wished for a year earlier, a reason to stay, and proposes to Jana with Kateřina's ring. The tulip on the skirt lights up: "Yes, yes, yes."`,
[['Novels', '*Podzemní tajemství*, *Ostrovy nad Prahou* (finished, 31 chapters), *Misteroj sub Parizo*'], ['Enemies', '[[vran|Vran]] and [[lindsey-vanessa|Lindsey]]']]);

ENadd('jana',
`## The one who wears the skirt

In [[ostrovy-nad-prahou|Ostrovy nad Prahou]] Jana stops walking behind Luis. The golden letters on [[falda-jana|her skirt]] name her the guide of the whole underground, and the girl who that morning broke all the eggs on her way to buy rolls organises the first Prague to help the city above and opens the gate to the second with a "please". Deceived by the false lantern, she even ties Luis up; but in the end she chooses her heart over her head, as [[caballero-hierro|the iron knight]] advised, and with him saves [[corazon-praga|the heart of Prague]]. A year later, on Charles Bridge, Luis asks her to marry him.`,
[['Fiancé', 'Luis, the musician']]);

ENadd('cernobog',
`## The defeat

At eleven at night on the third day, the islands come down, the castles open and faceless shadows come out and descend the chains, slowed by the singing of the whole city. Černoboh comes neither as a man nor as an animal, but as **darkness and cold**: a black light that does not shine but swallows, putting out everything on its way down the chain. In the fifth Prague he asks for the heart in a voice without anger, only winter: "Give it to me, daughter, and you will be able to sleep." When [[jana|Jana]] and Luis bring the [[corazon-praga|heart]] back to life, the chains he came by crumble like sand, and with no road and no voice he falls deep below the fifth Prague, to the place where there is nothing at all.`);

ENadd('estelar',
`## The sequel: Argenta

Laura and Luciano now have their own series on Litmir. The second novel, [[argenta|Аргента]] (in progress), finds them on Earth in 2026, among books about Atlantis, while on the living Mars of 4085 BC Ivan and Maria find the [[cristales-argenta|desert crystals]]. An earthquake linked to the tycoon [[maskvell|Elondar Maskvell]] and a passage between eras end up taking Laura and Luciano to Argenta, where everyone mistakes them for Ivan and Maria.`,
[['Series', 'Laura and Luciano'], ['Sequel', '[[argenta|Аргента]]']]);

ENadd('laura-estelar',
`## In Argenta

In [[argenta|Аргента]], Laura lives with Luciano in a flat that looks like a small library. One night she sees the sky turn pink and then black, and falls asleep reading the very book about Mars she did not want to read. She cannot stand [[maskvell|Maskvell]] and is the first to suspect that the earthquake is no accident. In the end she turns up in Argenta with Maria's face.`);

ENadd('luciano',
`## In Argenta

In [[argenta|Аргента]], Luciano sorts his collection of books about Atlantis and tells Laura that every story is real; what matters is how you live it. When they appear in Argenta with the faces of Ivan and Maria, he is the one who senses that [[cristales-argenta|the crystals]] have moved them not only in space, but also in time.`);

ENadd('venecia',
`## News: Rome underground and the Russian version

- **Maschera de Venessia: La Roma soto tera** (in progress, written in **Venetian**). On 1 March 2026, Roberto, Natalia, Alessio and Laura arrive at Termini station with the [[mascara-venecia|Venetian Mask]] in a leather bag. After the Venetian Lodge, they now face the **Consortium Umbrarum**, its secret and more powerful heir, which hides its secrets beneath the stones of Rome: catacombs under the Vatican, fountains and stairways. In the hotel by the Pantheon, [[alessio|Alessio]] confesses a secret, and in a square Maria, the violinist from *Ladro di cuori 2*, reappears, poor and with a bitter resentment in her eyes.
- **Дикий час: Венецианское колдовство**: the finished Russian version, in 36 chapters, of *L’ora selvaggia a Venezia*, Luis and Natasha's Venetian adventure.`,
[['In Venetian', '[[la-roma-soto-tera|La Roma soto tera]]']]);

ENadd('alessio',
`## "Actually… I'm Roman"

In [[la-roma-soto-tera|La Roma soto tera]], climbing the stairs of the hotel by the Pantheon, Alessio confesses his great secret to Laura: he is not Neapolitan but **Roman**. The grandmother in Posillipo, the dialect and the passion for *sfogliatella* were a professional cover: a Neapolitan art thief is a likeable cliché; a Roman one is serious business. Laura does not forgive him that easily. In the square they are stopped by Maria, the violinist from Málaga who helped them steal the Golden Violin, and Alessio, without his actor's tone, hugs her anxiously.`);

ENadd('sinea',
`## News: Meteor Shower in Russian

**Метеоритный дождь** (in progress, 14 chapters) is the Russian version of *Lluvia de meteoritos*: Elena, married for more than twenty years to Colonel Felipe, is saved in Sinea by Luciano, a young foreigner linked to the meteorites, just as Felipe is ordered to catch "the outsider".`);
