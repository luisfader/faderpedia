// English: novel synopses, "Did you know" facts and the map's links.
// Novels written in English already have their own synopsis in the catalogue.
(function () {
  var S = window.SINOPSIS = window.SINOPSIS || {};
  var EN_SYN = {
    'argenta': `4085 BC. Under the pink sky of a living Mars, Ivan and Maria find glowing crystals beyond the walls of Argenta, in the Forbidden Desert. Earth, 2026. Laura and Luciano pick up an old book about Mars, and soon their world begins to crack: underground tremors, Elondar Maskvell, a billionaire obsessed with Mars, and a passage that joins two eras. A novel about two worlds, about love, and about how every story is real.`,
    'meteoritnyj-dozhd': `Elena is forty and has been married for more than twenty years to Felipe, a hard, domineering colonel. One evening in Sinea, under the roar of a meteor shower, a young stranger pulls her into a shop and saves her. His name is Luciano, he is a foreigner and he seems somehow connected to the meteorites. And Felipe has just been ordered to find and neutralise "the outsider".`,
    'la-roma-soto-tera': `Rome, 1 March 2026. Roberto, Natalia, Alessio and Laura reach the heart of the Eternal City with the Venetian Mask. After the Venetian Lodge, the Consortium Umbrarum now awaits them, hiding its secrets beneath the stones of Rome: catacombs, fountains and stairways full of mysteries.
The sequel to "Maschera di Venezia", written in Venetian.`,
    'dikij-chas': `Belgrade is a city with a secret.
Beneath its streets and ancient walls hide forces better left unspoken.
Luis, a solitary artist and traveller, comes to Serbia to draw cities and learn the language. A chance meeting with Natasha (a local woman with a strong character and a complicated past) drags him into a dangerous game where ancient legends, conspirators and spy intrigue intertwine.
Little by little, a personal story turns into a fight for the city and for themselves.
They will have to choose between freedom and responsibility, fear and trust, running away and love.
The novel combines urban fantasy, mythology, spy thriller, detective intrigue and a story of feelings born in the middle of chaos.
Sometimes the city chooses you.
And then there is no turning back.`,
    'dikij-chas-2': `Mendoza, land of sunshine and good wine.
It was always so.
But now a strange language is spoken there: Russian mixed with Spanish.
The old vineyards keep new rituals.
Local traditions intertwine with Russian culture as if it had always been so.
Luis and Natasha arrive in Mendoza without suspecting that reality has already cracked.
Something is waking up in the mountains.
Deep in the Andes, an event awaited for far too long is ripening.
Soon the truth will come out, dangerous and inevitable.
And when the spirits of the mountains speak,
no one will be able to pretend not to hear.`,
    'dikij-chas-karnaval-razdora': `Madrid sinks into a strange madness after mysterious lights appear on carnival night. People lose their minds, chaos takes over the streets and nobody knows the cause.
Luis and Natasha come to Spain to investigate the anomaly. They will have to discover who is behind this madness, why Spain is the target and how to stop the threat before the carnival turns into a full-blown catastrophe.`,
    'pokhititel-serdec': `Alessio is used to thinking that everything has its price: a painting, a secret, someone else's trust. He knows how to get in where he is not invited and disappear before the owners notice the loss. But a carefully thought-out plan leads him to a woman who recognizes a lie all too well and is not at all afraid of criminals.
In a world of locked villas, old canvases and dangerous deals, feelings become another form of deception. Now Alessio will have to work out what he is really trying to steal: someone else's treasure, his own freedom or a heart that was never meant to be his.`,
    'rezonans-lyubvi': `A strange magic envelops Saint Petersburg. The city, used to fogs, winds and secrets, suddenly begins to live by new and impossible laws: the monuments come to life, the ancient sphinxes stroll freely along Nevsky Prospect and the mighty Atlantes start charging for passage to Palace Square.
What is happening to Petersburg? Who broke the balance between the ordinary world and what must stay hidden?
A group of agents of celestial affairs arrives in the city. Their task is to eliminate the anomaly before Petersburg becomes a place where living legends, old secrets and human feelings mix into a dangerous chaos. But from the start it is clear that nothing will go to plan.
One of the special agents was only supposed to carry out his mission, avoid attention and sort out what was happening in the city. But a chance meeting with a Muscovite who has come to Saint Petersburg for a few days' rest will turn everything upside down.
Now not only the city will be in danger, but the very order of the invisible world. And the strange resonance that arises between two people may be Petersburg's salvation and the beginning of a love that will burst out amid chaos, secrets and living legends, drawing them ever closer to each other.`,
    'rezonans-lyubvi-3-protiv-mraka': `After their adventures in Petersburg, Luis and Natalia dream of a few quiet days in Moscow. But in an instant the sun disappears, machines fall silent and an inexplicable fear grips people. The traces of an ancient artifact lead the heroes from Red Square to Rostov Veliky and Yaroslavl, where the former agent Vladik is trying to subdue the mysterious Gloom (Khmur).
They will have to uncover the secret of the black crystal, recover the legendary sword and meet the lord of the Volga. What will win: power built on fear, or the strength of trust?
Expanded and revised edition: 8 chapters, a dossier of characters and events, interactive comprehension exercises and a glossary with translations.`,
    'vlyublennye-lebedi': `The famous singer Oxana flees fame and a broken heart to snowy Ustyug. But Stepan, the local healer she rejected, turns her into a glass swan. A tale of love, forgiveness and miracle in the middle of the Russian winter.`,
    'zvezdnyj-roman': `Laura comes to a quiet village to hide from her past for a while, but a falling star changes everything. Out of the forest comes Luciano, a handsome stranger linked to vanished Atlantis and to an ancient power that Laura herself awakens. Now they must pass between two worlds, learn the secret of their own origins and decide whether love can be the force that saves not only them, but the Earth.`,
    'epicheskij-match': `The world is playing its football Championship: a grandiose spectacle of profit and artificial enthusiasm. Millions of people see a party, but Natasha sees something else: a shiny screen hiding hypocrisy.
A kitchen argument changes everything. Luis, inspired by Natasha's burning fury and thirst for justice, proposes a crazy idea: to take part in the championship. But not as a national team. They will create a new team: Team Humanity.
When Natasha challenges the tournament's organizers, it becomes clear that it is not mere footballers who must take the field, but representatives of the people who want to play with all their soul.
The winner of this match will receive neither a cup nor glory. Something much bigger is at stake: the right to change the world's future.
"The Epic Match" is a satirical, adventurous and heroic story about football, love and hope. About how even the craziest game can be the beginning of true freedom.`,
    'anomalnyj-chas': `A chance meeting at the Patriarch's Ponds joins two lives. He comes to Moscow to find the Imperial Scrolls, which can stop the "Anomalous Hour", a mysterious phenomenon during which the city moves for a few minutes into other eras.
She knows more about the scrolls than it seems: her great-great-grandfather was supposed to gather and protect them. But the documents ended up scattered across different periods of Russian history, from the times of Ivan the Terrible and False Dmitry to Napoleon's retreat and turbulent 1917.
Now they must travel through Moscow's past, find the scrolls before the others who are looking for them and understand why their meeting was the beginning of the Anomalous Hour.`,
    'predchuvstvie': `After a global catastrophe, the world lies in ruins. Robert rides an old motorbike through the destroyed streets, believing that somewhere there are still people willing to build a new world.
So "Our Utopia" is born, a fortress where the survivors try to live without fear or greed. But the savages at the gates, the intrigues within the walls and the tangled feelings between Robert, the cellist Natalia and the architect Luis put the dream in danger.`,
    'predchuvstvie-2': `"Our Utopia" held out, but the world around it is still in ruins.
Robert and Natalia are finally together, Luis is building the fortress's new walls and strange seagull drones fly over the desert. Beyond the horizon Necrology is gaining strength, a city ruled by money, fear and cold calculation.
War, betrayals and the struggle for power tear the fortress apart from within. Oaths are broken, friends become enemies and Natalia has a double it is better never to know about.
Who will hold the Utopia together when its defenders start disappearing one after another?`,
    'siyayushchij-gorizont': `After the nuclear catastrophe, the world fell silent. Oxana lives in the bunker her husband built for her and sings to concrete walls covered in his sheet music and sketches.
A contest on a stage among the ruins gives her a ticket to Necrology, the underground city where fountains flow at the top and down below people are handed one glass of water. There everyone smiles by protocol, and a machine called KAMERTON decides how much each person drinks, whom to love and which songs to sing.
Oxana sings what is not allowed, and they lock up her voice with a silver ring. But when the coolers, who give the machine thousands of litres of water, run out of water themselves, the whole city goes out to the fountains with empty cups. There Oxana meets Natalia, a dark-haired cellist whose music people fall in love with.
"Radiant Horizon" is a musical novel with Oxana's songs and the prequel to "Предчувствие".`,
    'opasnoe-svidanie': `Vasili is a detective used to keeping cold-blooded and alone. He receives a strange and dangerous assignment: to find a mysterious thief who stole millions. She has no name and no face, only barely perceptible traces that lead to a series of enigmatic dates.
To follow her trail he enters a risky game and agrees to meet different women. Each one is a mystery. Each one could be her.
As he sinks little by little into this world of deceit, passion and illusion, the detective begins to lose control. Where is the line between truth and the game? Will he manage to catch her… before he becomes the victim himself?`,
    'severnaya-lyubov': `Sometimes fate begins with a single note. One night Roman hears a melody that changes his life. It comes from a dream: cold, beautiful and sad. He tries to forget it, but the music comes back again and again, as if calling him north.
Meanwhile, far away from him, lives Sofía, a young woman whose life is also tied to that mysterious melody. When their paths cross, they will discover that music can bind hearts more strongly than time and distance. But every melody has its shadow… and sometimes love demands more courage than it seems.
"Northern Love" is a story about fate, music and feelings that cannot be silenced.`,
    'tajna-semi-fader': `A freezing day at a Moscow ice rink. Luis gives Natalia incredible news: he has got rich, though he won't say how, and a journey around the world awaits them. But he wants to start it in Mendoza, the land of sunshine, mountains and wine at the foot of the Andes where he spent his childhood.
There, among vineyards and old family stories, the past of the Fader family is waiting for them, and a secret that has waited too long for its moment.
A story of love, family secrets and a great journey.`,
    'grustnyj-gorod': `In the city of Sinea laughing is forbidden.
Franco, a former employee of the Ministry of Feelings, has almost resigned himself to his world being grey forever.
Until one day, in the metro, he meets her.
Chiara smiles.
Among hundreds of dull faces, her smile seems impossible: warm, daring and too alive. One look, one brief gesture, and Franco understands that this girl can change more than just his life.
Soon the chance meeting turns into a dangerous adventure. Secret meetings, chases, forbidden feelings and an unusual weapon that fires… laughter.
But what will happen if people remember again how to be happy?
And what will Franco do if, beside Chiara, it becomes harder and harder to hide not only his smile, but his own heart?
"The Sad City" is a romantic dystopia about a love that begins with a look, about laughter as a form of resistance and about a girl who can bring light back where it has long been forbidden.`,
    'prizrachnyj-poezd': `Sinea is a city of fogs, of silence and of unspoken wishes.
At night the Ghost Train appears here, a train with no route or timetable that carries off people nobody seems to be waiting for any more.
Marcos is a detective used to controlling everything: the streets, the facts, other people's secrets. But the disappearance of Alicia, the woman he loved too much, destroys the usual order. In recent months she talked more and more about freedom, and he about security. Now there is a void between them full of guilt, questions and fear.
Investigating the mystery of the Ghost Train, Marcos gradually realizes that the train does not take just anyone.
To find Alicia he will have to face not only urban legends, but his own shadow.
Because sometimes the most dangerous monsters do not live in the fog, but inside us.`,
    'volny-lyubvi': `In the city of Sinea everything begins with a meeting.
The warm light of a small café, a quiet conversation, a look in which there is already something familiar… as if this moment had been awaited for a long time.
And suddenly the world grows wider.
Time stops.
From a simple drawing a fox appears, and reality reveals its secret, almost magical side.
The city fills with a new breath, and with it comes a feeling that cannot be explained in words: only lived.
They will have to walk that road together, discovering in themselves a light that can change everything.
It is a story about love that arrives on time.
About a closeness in which you recognize yourself.
And about the miracle that begins when two hearts meet.
Sometimes a single look is enough for everything to change.
Sometimes a single touch is enough for a new life to begin.`,
    'volny-lyubvi-krepost': `Luis goes to see Natalia: for the first time at her home, in quiet, ancient Verdegrad. Walks through green streets, the legend of an ancient fortress and a music that plays at night promise happy days.
But the fortress in the gloom awakens. The city fills with signs, with shadows of the past and with a melody able not only to heal, but to enslave. When Luis is taken prisoner and Verdegrad loses its heart, Natalia and her friends will have to prove that the waves of love are stronger than any darkness.
Illustrated edition: the sequel to the novel "Waves of Love".`,
    'golos': `The city of Sinea is cut off from the world in a single night. No sirens, no warnings, no protection. From the depths of the old legends come shadows: leshies and twisted spirits that feed on people's fear and life.
Sasha, a thirty-five-year-old woman tired of ordinary life, hears a voice calling her to the sea. Oxana, her friend, who does not believe in mysticism, is dragged into a flight she cannot escape. Dima, a student trapped in the besieged city, receives a strange message.
Dolphins. An ancient rift beneath the city. "The Event". And a choice on which depends not only the fate of Sinea, but the boundary between light and darkness.
"The Voice" is a dark urban fantasy novel about the power of choice and the hope that comes from the depths of the water. A story about people who were not meant to become heroes, but did.`,
    'sny-i-zver': `One rainy October evening, in "The Corner of Sighs" café, the illustrator Lusiana sits down at the table of the architecture student Celestio. A conversation about the subconscious (a "huge cellar" where dreams, fears and the most intimate desires are kept) brings them closer, and that same night each dreams of the other.
But Doctor Crane's drone is already flying over the city of Sinea: a scientist who dreams of extracting people's subconscious and harnessing its energy. When the Beast is born from the stolen dreams, Lusiana and Celestio will have to face what they carry inside.
At the end of the novel: questions for readers and a psychological test: are you Lusiana or Celestio?`,
    'venecianskaya-maska': `Venice hides its darkest secret in its own waters: a lost city and a mask of unlimited power. As an uncomfortable truth threatens to surface, dark forces conspire to bury it forever.
The battle for the heart of Venice begins.
An archaeologist, a woman with mysterious intentions and a group of unpredictable friends are dragged into a dangerous hunt that soon becomes a fight for survival.
Where the legend disappears, the adventure begins.`,
    'la-citta-triste': `In the city of Sinea the new president bans smiles. Franco and Chiara decide to give people back their happiness. A novel for A1 learners of Italian, with exercises after each chapter.`,
    'il-treno-fantasma': `Marco is a sad detective: he is looking for the ghost train that carries people off, and with them his girlfriend Alice. A novel for learners of Italian, with vocabulary, grammar and exercises.`,
    'la-nevicata-rosa': `Carlotta and Lorenzo see each other for the first time in a small café in Florence, after months of digital letters. Then pink snow begins to fall over Florence, and with it come a murder, secrets hidden behind paintings and a sect that wants to steal the world's colours.`,
    'maschera-di-venezia': `Venice, 20 February 2025. On a Carnival night, a fleeing man clutches a small object wrapped in a dark cloth. From that moment, among alleys, masks and ancient secrets, nothing will ever be the same again.`,
    'ora-selvaggia-venezia': `Venice, a city of masks and ancient secrets, hides in its depths a terrible machine created by dark forces. Little by little it takes over people's minds, strips them of their soul, will and humanity, and turns them into empty shells, without the fire of life.
When a desperate call for help arrives, the protagonists set off for Venice to prevent the catastrophe. But along with the global threat a hard personal test awaits them: a woman who awakens in the heroine a burning, almost primordial jealousy.
Armed with a magic Rubik's cube and a notebook with which he conjures ancient mythological creatures, the hero goes into battle against the most dangerous machine in history. His companion is ready to do anything to prove her power over him.
If the machine is not destroyed, civilization will lose its soul forever and sink into darkness.`,
    'ladro-di-cuori': `Alessio lives in Florence, loves art and is always looking for a new adventure. One day he reads an article about Laura Bellini, a rich collector, and gets a dangerous idea: to break into her villa in the hills and steal a small painting.
The plan seems simple. But that night it will be Laura who decides how his adventure continues.
Illustrated edition for learners of Italian: each chapter has an Italian–Russian glossary and eight activities; at the end there is the complete Russian translation and the answers.`,
    'ladro-di-cuori-2': `Alessio and Claudia live in Málaga under new names, Marcos and Laura, far from the Botticelli theft that put them in Interpol's sights. But one evening, on the seafront, a man in a black suit starts following them with his eyes.`,
    'la-macchina-dei-sogni': `Irina is a psychologist in Bologna. Rational, alone, she does not believe in magic. But a patient tells her about a terrible dream, the four horsemen of the apocalypse, and that same night she dreams the same thing.
Then, one rainy evening, Pietro knocks at her door: a shy researcher with a broken umbrella and a machine for entering dreams. Among living chessboards, a ruined Bologna and a king with a crown of thorns who wants to return from the world of the dead, Irina discovers that she is the key between two worlds and that love can also be born where nightmares live.
A novel in Italian at A2 level, with cultural notes, grammar and exercises at the end.`,
    'presentimento': `After the global catastrophe, the world is a desert of ruins and silence. Robert rides his old motorbike through the destroyed streets, convinced that somewhere there are still people willing to build a new world.
So "Our Utopia" is born, a fortress where the survivors try to live without fear or greed. But the savages at the gates, the betrayals within the walls and the intertwined feelings put the dream in danger.`,
    'la-squadra-invincibile': `Fabio is the goalkeeper of the Lions, one of the best teams in the city. But when the girls of the Eagles challenge them and beat them 5–1, his pride is shattered: he has to discover their secret.
Infiltrated sisters, girlfriends who switch teams, trap kisses and a mysterious hacker turn the rivalry into an ever more dangerous game… until something much bigger appears behind the matches.
A novel in Italian that starts simple and grows chapter by chapter.`,
    'antonio-e-il-segreto-di-roma': `Antonio goes into the Vatican Museums for the first time and meets Larissa, a beautiful, cultured Russian girl. To win her over he promises to tell her "all the secrets of Rome". But the next day the Golden Chalice of the Popes disappears from the museum, and the police come looking for him in particular.
A novel for A1–A2 learners: each chapter has an Italian–Russian glossary, true-or-false exercises and Duolingo-style activities; the answers are at the end.`,
    'do-outro-lado-do-mundo': `Luiz is 20 and has promised to meet Natalia, who lives on the other side of the world. With no money for the ticket, he accepts any challenge to keep his promise. With vocabulary and exercises.`,
    'podzemni-tajemstvi': `The burgundy skirt that saved Prague.
Luis is an Argentine musician. In a Prague café he meets Jana and, with Mark, a detective and photographer, and the guide Lucie, he ventures into Prague's underground. There his music awakens the sad Princess Ludmila… A reader for A1–A2 level, with vocabulary in every chapter.`,
    'la-voix': `A group of dolphins mysteriously disappears from the Sinea park. That night Sasha, a tired office worker, dreams of a silver dolphin trying to tell her something.
It was only a dream… or so she thinks. Soon a voice from the sea drags her, together with her friend Oxana, into a secret struggle against a dark force that threatens the whole city.`,
    'col-gulu': `Three years have passed since the Great Catastrophe. Robert rides his old twentieth-century motorcycle through the burning silence of the desert, looking for people who are still alive.
His path crosses Rosa's in a rebel camp. Together they try to raise a fortress with turquoise walls, a utopia with its own rules; but the savages, the catapults and betrayals from within threaten the dream.`,
    '27-ocak': `On a cold winter's day in Sinea, the musician Mateo helps Rosa pick up the apples she dropped in the park. They are both forty and were born on the same day: 27 January 1985.
That night green and golden meteors fall from the sky. Mateo and Rosa go looking for a meteorite stone, but the police, masked strangers and the mysterious Guardians of the Shadow drag them into a completely different adventure.
Are two people born on the same day the chosen ones who carry the energy of the universe? The dark forces are also looking for the answer to that question.`,
    'lluvia-de-meteoritos': `Elena is forty and has been married for more than twenty years to Felipe, a domineering man. One afternoon in Sinea, an unexpected meeting with a young stranger begins to change her life, while a meteor shower is gathering in the sky.`,
    'el-misterio-de-los-fader': `A secret surrounds the family. The ancestors are there, but they cannot be seen. A curse stalks the Faders.
Luis and Natalia travel from Moscow to Mendoza and will solve the great mystery. A potion, a tragic story and a pinch of humour make this tale an entertaining and captivating adventure.`,
    'operacion-londres': `Luis can no longer die, and Natalia knows that time runs only for her. The only hope of reversing the Fader curse is an old flask lost since the days of Rasputin.
The trail leads from Moscow to London: stolen paintings, an unbreakable monk, a pact signed more than a century ago and the mysterious Thorne family. Amid the London fog, ambushes and brushstrokes that hide secrets, Luis and Natalia will have to recover what belongs to them before it is too late.
Illustrated edition. The sequel to "The Fader Mystery".`,
    'el-tren-fantasma': `Marcos, a detective in the city of Sinea, is looking for his girlfriend Alicia, who has been missing for a week. Every clue leads to the ghost train, which appears at night and carries people off.
On board await impossible carriages, zombies singing out of tune, an inflexible judge and monkeys with chainsaws: a mystery comedy where fears become absurd.
The Spanish starts very simple and grows chapter by chapter, ideal for reading practice.`,
    'la-ciudad-secreta': `Martín, a Spanish teacher, meets Marina in the park, a blonde, blue-eyed woman reading a book about ancient cities. Soon she tells him the truth: she comes from a secret city hidden beneath the mountains.
When some men who only want gold discover the entrance, Martín and the inhabitants of the Secret City must decide how to protect their home.
A short novel in easy Spanish for A1–A2 learners. Each chapter has vocabulary with Russian translation, comprehension, grammar and vocabulary exercises, and questions for discussion. At the end: a grammar summary, glossary and answers.`,
    'la-corazonada': `After two years of nuclear winter, the radiation fades and Robert finally leaves his bunker. He rides his old motorcycle through a ruined world, convinced that somewhere there are still people willing to start again.
So the Turquoise Utopia is born, a fortress where the survivors try to live without fear or greed. But the savages, Central Arrogance and the crossed feelings among its inhabitants put the dream in danger.`,
    'anomalia': `One hot afternoon in Mendoza, Julieta is stood up by an app date, while loudspeakers announce a strange "magnetic anomaly" that nobody takes seriously.
In a small workshop she meets Mauro, a craftsman who gives her a wooden fox he carved himself. From that moment, time and space stop behaving as they should, and Julieta is swept into a crazy adventure across Argentina, with portals, patrols and a talking fox.`,
    'la-chica-del-retrato': `Tatiana is twenty-five, works in a sports shop in Sinea and shares her photos on social media. One morning the police knock at her door: someone has attacked a bank's website and left a portrait of her on the screen.
The attacks multiply, the city goes dark and a mysterious voice claims to be in love with "the girl in the portrait". With the help of the agent Laura Rivera, Tatiana will have to find out who is behind it… even if the truth is closer than she imagines.`,
    'el-impostor': `A novel about love, rings and something more.
One Sunday in Sinea, Leonardo proposes to Sofía… and she says no, because her horoscope tells her to. The same ring box passes from hand to hand and from refusal to refusal, while the city suffers a strange epidemic of "noes".
To win back love, three unlucky men sign up for the workshop of Andrés Cortés, the famous "relationship expert"… without knowing that something much bigger is hiding behind it all.`,
    'las-coordenadas-del-amor': `Alejandro is an archaeologist searching the forest for a lost city that almost nobody believes is real. With Lucía, an expert in maps, young Matías and a guide who thinks only of gold, he finds a strange compass: instead of N, S, E and W, it has the letters E, S, C, R.
An old map, a phrase in Old Slavonic and the door of a temple lead them to a world of snow, magic matryoshkas, a mysterious guardian and a three-headed dragon… in search of what all human beings long for.`,
    'la-gran-conspiracion': `Natalia, a Moscow cardiologist whom almost nothing surprises any more, receives on the same day two unexpected messages from two Argentines: Luis, an artist who wants to draw her portrait, and Roberto, a charmer she meets on a dating app.
Two men, two dates in the same week and a snowy Moscow seen from above. Between curiosity and desire, Natalia begins to suspect that so much coincidence may not be chance.`,
    'divlji-chas': `Luis is a tourist in Belgrade. On Knez Mihailova street he is run over by an electric scooter ridden by Natasha. She wants to show him her city, and Belgrade hides secrets nobody talks about.`,
    'divlji-chas-7': `The old forests of the Slavic lands begin to blacken, and from the cracks in the bark oozes a thick black resin, more like blood than sap. Natasha Petrović feels the forest's sobbing in her own chest.
Ghost airships that only sensitive souls can see appear in the sky, and the earth beneath them falls sick. To save Serbia, Natasha and Luis Fader will have to plant a magic vine from Mendoza around Belgrade, wake Zmaj and face an old enemy who has returned in modern form.`,
    'la-antausento': `After the apocalypse, the world is a desert of ruins. Robert rides his old motorcycle through the silence, sure that somewhere a trace of civilization still remains.
The sound of a cello leads him to Natalia, and together they begin to build a utopia for the survivors, with its own languages, rules and dreams. But freedom needs a home, and a home needs defending.`,
    'la-savo-de-zmaj': `A quiet afternoon on the walls of Kalemegdan ends with a phone call: Zmaj, the family dragon, is a prisoner in Prague.
Luis and Natasha Fader have less than two days. On the night train a deserter with a secret is waiting for them; in Prague, a bookseller with a map of seven stars; and beneath the city, a crystal that was never built to provide energy.
It was built to keep something locked up.`,
    'predcutje': `The nuclear winter is over. Robert rides an old motorbike through a dead city, believing that somewhere there are still people willing to raise a new world.
So the utopia is born: a fortress where the survivors want to live without fear or greed. But the savages at the gates, the conspiracies within the walls and the tangled feelings put the dream in danger.`,
    'vorahnung': `Robert meets Natalia, a doctor, and they fall in love. Then the war begins and separates them. For two years Robert searches for his wife, without success.
From despair a dream is born: a turquoise fortress, "Our Utopia". But outside, in the desert, the savages are waiting, and Robert has to choose between the past and the present.`,
    'divlji-chas-52': `Belgrade is sick with screens. The Supreme Algorithm comes down from Silicon Valley to empty souls. Luis and Natasha, together with Zmaj, fight a brutal battle against the empire of social media until they reduce it to ashes.`,
    'divlji-chas-malbec': `The spirits of the mountains awaken in Mendoza. Luis and Natasha defend the vineyards and true love from the shadows of the west. An epic ending without children: just the two of them, the land and victory.`,
    'fot-latik': `Robert and Natalia build a free castle in a Europe at war. Catholics and Protestants fight in the war. The castle is a hope for life.`,
    'predosecaj': `After the collapse of civilization, Robert tries to raise the Utopia, a refuge where people can live with dignity again. With Luis, Natasha, Sasha and other survivors, he faces attacks, betrayals and a dangerous force that threatens to destroy their new world.
A novel about freedom, love, jealousy, responsibility and the price of hope. When the last battle comes, not everyone will see the new dawn.`,
    'reve-turquoise': `The world switched off on a Tuesday. Three years later, Camille, a former IT security expert, dreams of a fortress with turquoise walls where at last one can live in safety. She meets Robert, a wounded architect, and love is reborn among the ruins.
But the savages burn everything in their path. At the bottom of a lost valley, the Turquoise Dream takes shape: a refuge faithful to Camille's humanism. Until the day Jenny knocks at the door.`,
    'le-presentimento': `After the nuclear apocalypse, Robert looks for survivors to build Our Utopia, a turquoise fortress founded on humanist ideals. He meets Katerina, a Russian woman he falls in love with. But the arrival of Natalia, a cellist, and the threat of the savages will put his love and the community's future to the test.`,
    'predtucha': `After the nuclear catastrophe, Luis and Jana try to bring hope back to the Czech lands following the humanist ideas of Robert, the founder of Our Utopia. When Lucie, who still loves Luis, returns, personal passions intertwine with the struggle for the Czech castles.
The savages burn Our Utopia, a traitor sits by its fire and Robert, who still wears his dead wife's ring around his neck, cannot open his heart. Then six thousand savages arrive under the banner of the white wolf. And behind them, the tanks of the Central Power. A novel about a love that cannot be divided and about a city that turns no one away.`,
    'ostrovy-nad-prahou': `Lucie and Mark go on holiday to China, and Luis and Jana are left alone in Prague. After a romantic night by the Vltava comes a morning no one expected: five stone islands with black castles hang over the city. Huge chains tie them to Prague's five hearts and drink the city's strength. Luis looks for the answer in his Faderpedie and finds an old legend about Černobog, the Dark Lord, who wants Prague's underground and its heart of stone. Prague has only three days.
The sequel to "Podzemní tajemství". A reader for A2–B1 level.`,
    'mundo-turquesa': `Robert leaves the shelter after two years of nuclear winter and founds a community built on solidarity in a turquoise fortress. Love, survival and a threatened future.`,
    'misteroj-sub-parizo': `After their adventure in Prague's underground, the Argentine musician Luis and the Czech Jana travel to Paris for a romantic holiday. But an unknown melody and a strange woman lead them into the mystery of the awakening catacombs. A standalone sequel to "Podzemní tajemství".`,
    'premonision-ldp': `Two years after the war began, Natalia, a cellist, protects her three brothers in an underground shelter. Before the catastrophe, a strange foreboding saved her from a missile that destroyed the conservatory. Now, looking for food, she finds a book called "Our Utopia". That book will change her family's fate. An original story in Lingwa de Planeta, in the parallel worlds of the Turquoise Fortress.`,
    'cien-bazyliszka': `November, Warsaw. Mark Russo, a photographer from New York, and Zofia Kamińska, a journalist from Kraków, come to the capital to do a report on Polish legends. That same night the Mermaid, the city's symbol, disappears from the Old Town Market Square. On the empty pedestal someone draws a basilisk in chalk and writes: "Don't look it in the eyes."
A mysterious man in a black hat, a cellar full of mirrors and an old photo from 1944 lead them ever deeper into the history of Warsaw, and into the history of Zosia's family. And between one clue and the next, something is born that neither of them expected.
A novel for learners of Polish (A2–B1), with vocabulary in Spanish and English.`,
    'przeczucie': `After two years of nuclear winter, Robert leaves the bunker and rides an old motorbike through the ruins of Wielogród, a city of old houses, cobbled streets and a large market square. In a destroyed concert hall he hears a cello, and meets Natalia.
Together, by a lake in the Silver Mountains, they find the ruins of the Turkish Castle and paint its walls turquoise. So Our Utopia is born, a place without fear and without greed. But Samuel's Savages hear the music over the water. To defend the fortress, Robert and Natalia invite others: Sasha, María and Dima.
And when war seems inevitable, fire falls from the sky, and nobody understands why. Until the Central Power speaks over the radio.`,
    'lux-pacis': `Marcus, an honest investigator, looks into the theft of a precious relic in the Vatican. Alicia, the woman he loves, is always with him. But a terrible truth emerges: Alicia herself took the relic. Marcus must choose between duty and love. They both flee and grow rich, but the lie takes away their peace.`,
    'ngome-ya-watu-huru': `After living alone for two years in an underground shelter, Deng comes out and discovers that gangs of hunters are capturing Africans and turning them into slaves. He crosses Central Africa looking for allies to build a safe refuge. When the hunters shoot out the wheel of his motorbike, Nyal, a woman with a sword, saves him. Together they begin to build the Turquoise Fortress, a place where no one will be another's property.`,
    'zagadachniyat-vazdushen-korab': `One morning Elena sees a grey flying ship in the sky that nobody else notices. Soon afterwards she begins to dream of a man wearing the mask of an ancient Slavic god. The ships keep people's dreams, and someone is stealing them. A short novel in easy Bulgarian for beginners.`,
    'julian-la-hambru': `La Jabru is "bruja" (witch) with its syllables reversed: bru-ja → ja-bru. Julián has an almost normal life, but words keep playing tricks on him. Ten short stories in the present tense, with absurd humour, Argentine expressions, voseo and cultural explanations in Russian at the end of each chapter.`
  };
  EN_SYN['dikij-chas-venecianskoe-koldovstvo'] = EN_SYN['ora-selvaggia-venezia'];
  Object.keys(EN_SYN).forEach(function (slug) { (S[slug] = S[slug] || {}).en = EN_SYN[slug]; });

  // "Did you know" facts and map links, matched by their Spanish text.
  var EN_FACTS = {
    'el dragón [[zmaj|Zmaj]] concedió una entrevista al final de *La hora salvaje* y declaró: «No me someto. Reconozco».': 'the dragon [[zmaj|Zmaj]] gave an interview at the end of *The Wild Hour* and declared: "I do not submit. I recognize."',
    'en [[sinea-ciudad|Sinea]] hubo una época en la que sonreír se castigaba con multa.': 'there was a time in [[sinea-ciudad|Sinea]] when smiling was punished with a fine.',
    'los atlantes de [[san-petersburgo|San Petersburgo]] llegaron a cobrar peaje para pasar a la plaza del Palacio.': 'the Atlantes of [[san-petersburgo|Saint Petersburg]] once charged a toll for passage to Palace Square.',
    '[[la-hora-salvaje|la Hora salvaje]] ocurre una vez cada mil años, y [[hora-anomala|la Hora anómala]], una vez por siglo.': '[[la-hora-salvaje|the Wild Hour]] happens once every thousand years, and [[hora-anomala|the Anomalous Hour]] once a century.',
    'la [[utopia|Utopía Turquesa]] existe en 19 novelas y 17 idiomas, incluidos el volapük y la lingwa de planeta.': 'the [[utopia|Turquoise Utopia]] exists in 19 novels and 17 languages, including Volapük and Lingwa de Planeta.',
    'el juez [[casimiro-condena|Casimiro Condena]] se convierte en gorila cuando se enoja… y en rata cuando lo descubren.': 'Judge [[casimiro-condena|Casimiro Condena]] turns into a gorilla when he gets angry… and into a rat when he is found out.',
    'la gata [[plyushka|Pliushka]] sabe hacer de navegador y duerme tranquila en medio de cualquier aventura.': 'the cat [[plyushka|Plyushka]] can act as a navigator and sleeps peacefully in the middle of any adventure.',
    'la [[seleccion-humanidad|Selección de la Humanidad]] perdió la final… y aun así cambió el mundo.': '[[seleccion-humanidad|Team Humanity]] lost the final… and still changed the world.',
    'según [[karl-fader|Karl Fader]], el apellido se remonta a Reinbold Vader, canónigo de Colonia en el siglo XII.': 'according to [[karl-fader|Karl Fader]], the surname goes back to Reinbold Vader, a canon of Cologne in the twelfth century.',
    'la [[penumbra|Penumbra]] se debilita con música: la clave fue un viejo armonio.': 'the [[penumbra|Gloom]] is weakened by music: the key was an old harmonium.',
    'el [[zorro|Zorro]] de *Ondas de amor* nació de un dibujo y siempre conoce el camino.': 'the [[zorro|Fox]] of *Waves of Love* was born from a drawing and always knows the way.',
    'el [[agente-l|Agente L]] detuvo a un dios toro tocando la guitarra.': '[[agente-l|Agent L]] stopped a bull god by playing the guitar.',
    'Luis llegó a Belgrado desde Moscú sin saberlo: al final de [[hora-anomala|La hora anómala]] cerró los ojos en una época y los abrió en Kalemegdan.': 'Luis came to Belgrade from Moscow without knowing it: at the end of [[hora-anomala|The Anomalous Hour]] he closed his eyes in one era and opened them in Kalemegdan.',
    'en [[necrologia|Necrología]], cuanto más pobre eres, más profundo vives.': 'in [[necrologia|Necrology]], the poorer you are, the deeper you live.',
    'el [[risatomat|Risatomat]] de Geppetto es, por fuera, una simple regadera de jardín.': 'Geppetto\'s [[risatomat|Risatomat]] looks, from the outside, like a simple garden watering can.',
    'según la televisión veneciana, el [[mativirus|Mativirus]] se contagia compartiendo mate, bailando tango y comiendo Nutella.': 'according to Venetian television, the [[mativirus|Mativirus]] is spread by sharing mate, dancing the tango and eating Nutella.',
    'la aguja de la [[brujula-escr|brújula E-S-C-R]] apunta siempre a la C, de Corazón.': 'the needle of the [[brujula-escr|E-S-C-R compass]] always points to C, for Corazón: the Heart.',
    'el [[algoritmo-supremo|Algoritmo Supremo]] tiene un rostro hecho de notificaciones, pero no tiene ojos.': 'the [[algoritmo-supremo|Supreme Algorithm]] has a face made of notifications, but no eyes.',
    'Luis salvó la Vendimia resolviendo un [[cubo-rubik|cubo de Rubik]] «no por colores».': 'Luis saved the Vendimia by solving a [[cubo-rubik|Rubik\'s cube]] "not by colours".',
    'el villano de *Resonancia del amor* quería convertir la memoria de San Petersburgo en un [[archipielago-memoria|archipiélago]].': 'the villain of *Resonance of Love* wanted to turn Saint Petersburg\'s memory into an [[archipielago-memoria|archipelago]].',
    '«Presentimiento» es también el título de una pieza para violonchelo: [[corazonada|la de Natalia]].': '"Presentiment" is also the title of a piece for cello: [[corazonada|Natalia\'s]].',
    'en *Ostrovy nad Prahou*, Luis busca respuestas en su propia enciclopedia secreta: la [[faderpedie|Faderpedie]].': 'in *Ostrovy nad Prahou*, Luis looks for answers in his own secret encyclopedia: the [[faderpedie|Faderpedie]].',
    'en [[necrologia|Necrología]], la máquina [[kamerton|KAMERTON]] da un litro de agua al día a quien no sonríe lo suficiente.': 'in [[necrologia|Necrology]], the [[kamerton|KAMERTON]] machine gives one litre of water a day to anyone who does not smile enough.',
    'la R del [[proyecto-r|Proyecto R]] quiere decir rock, ruinas, Aullador o amanecer, según a quién le preguntes.': 'the R in [[proyecto-r|Project R]] stands for rock, ruins, the Howler or dawn, depending on whom you ask.',
    'el primer [[guardianes-tiempo|guardián del tiempo]] de Moscú empezó su diario el 3 de octubre de 1876.': 'Moscow\'s first [[guardianes-tiempo|guardian of time]] began his diary on 3 October 1876.',
    'del Magister de los [[magos-del-norte|Magos del Norte]] solo quedó un abrigo vacío.': 'all that was left of the Magister of the [[magos-del-norte|Magi of the North]] was an empty coat.',
    'en [[estelar|Romance estelar]], [[luciano|Luciano]] no sangra: de su herida brota luz dorada.': 'in [[estelar|A Starlit Romance]], [[luciano|Luciano]] does not bleed: golden light pours from his wound.',
    'el dibujo de la muñeca de [[laura-estelar|Laura]] parece un mapa de estrellas, pero es el código de su linaje atlante.': 'the pattern on [[laura-estelar|Laura]]\'s wrist looks like a star map, but it is the code of her Atlantean lineage.',
    'el [[corazon-del-mundo|Corazón del mundo]] está guardado por un ser de luz que parece a la vez pájaro y raya.': 'the [[corazon-del-mundo|Heart of the World]] is guarded by a being of light that looks like both a bird and a ray.'
  };
  (window.FACTS || []).forEach(function (f) { if (EN_FACTS[f.es]) f.en = EN_FACTS[f.es]; });

  var EN_LINKS = {
    'Agente L en Madrid': 'Agent L in Madrid',
    'Franco, Alicia y Vasili en la Selección': 'Franco, Alicia and Vasili in Team Humanity',
    'Roberto pide ayuda a Luis': 'Roberto asks Luis for help',
    'Las uvas mágicas de Mendoza': 'The magic grapes of Mendoza',
    'El café donde nace el Zorro': 'The café where the Fox is born',
    'Alessio y Laura en el tren': 'Alessio and Laura on the train',
    'Luis Fader, otro Luis': 'Luis Fader, another Luis',
    'Luis, Natalia, Sasha: los mismos nombres': 'Luis, Natalia, Sasha: the same names',
    'Oxana, la voz que canta': 'Oxana, the voice that sings',
    'Jana, también en Předtucha': 'Jana, also in Předtucha',
    'Natalia conoce a Luis en la pista de patinaje': 'Natalia meets Luis at the ice rink'
  };
  (window.LINKS || []).forEach(function (k) { if (EN_LINKS[k[2].es]) k[2].en = EN_LINKS[k[2].es]; });
})();
