// Referencias históricas: personas, lugares y acontecimientos reales que aparecen en las novelas.
// Cada artículo separa lo que ocurrió en la realidad de lo que cuenta la ficción.
window.ARTICLES = window.ARTICLES || [];
window.A = window.A || function (a) { window.ARTICLES.push(a); };

/* ---------- Argentina y Mendoza ---------- */

A({
  id: 'rasputin', type: 'historia', uni: 'fader', img: 'img/covers/operacion-londres.webp',
  novels: ['operacion-londres', 'anomalnyj-chas'],
  see: ['hidromiel', 'maldicion-fader', 'luis-fader'],
  es: {
    t: 'Grigori Rasputín',
    s: 'El stárets siberiano que fascinó a la familia imperial rusa y fue asesinado en 1916. En Operación Londres, un agente británico le roba esa misma noche el frasco que podría deshacer la maldición de los Fader.',
    box: [['Ruso', 'Григорий Распутин'], ['Vida', '1869 – diciembre de 1916'], ['Lugar de la muerte', 'Palacio Yusúpov, Petrogrado'], ['Novela', '*Operación Londres*'], ['Objeto ligado', 'El frasco de [[hidromiel|hidromiel]]']],
    b: `**Grigori Yefímovich Rasputín** fue un campesino siberiano convertido en *stárets*, un asceta errante con fama de santo y curandero. Se ganó la confianza de la zarina Alejandra porque parecía aliviar la hemofilia del zarevich Alexéi. Su influencia en la corte escandalizó a la aristocracia, y en diciembre de 1916 un grupo de conspiradores lo mató en el palacio Yusúpov, a orillas del río Moika.

## En la historia

- Los conjurados fueron el príncipe **Félix Yusúpov**, el gran duque **Dmitri Pávlovich** y el diputado de la Duma **Vladímir Purishkévich**.
- Lo atrajeron de noche con el pretexto de conocer a Irina, la esposa de Yusúpov.
- Desde hace décadas circula la hipótesis de que un agente británico estuvo presente esa noche.

## En las novelas

*Operación Londres* abre con dos «Introducciones» históricas: el dormitorio del zarevich enfermo y la sala del sótano del palacio Yusúpov, en diciembre de 1916. La novela toma la hipótesis británica y la convierte en ficción: un agente llamado **Alistair Thorne** registra el cuerpo de Rasputín en la orilla helada y se lleva «un pequeño frasco de vidrio, de color ámbar oscuro, casi meloso». Desde entonces el secreto «pertenecía a la Corona británica». Un siglo después, Luis Fader, inmortal por la [[maldicion-fader|maldición]], busca ese frasco para volver a ser mortal. El último capítulo se titula «Las cenizas del stárets».

En *La hora anómala*, Natalia llama al astrólogo Bomelio «un Rasputín del siglo XVI» (ver [[ivan-terrible|Iván el Terrible]]).

> Thorne, Lucy y el frasco son invención de la novela.`
  },
  ru: {
    t: 'Григорий Распутин',
    s: 'Сибирский старец, очаровавший императорскую семью и убитый в 1916 году. В «Операции «Лондон»» британский агент той же ночью крадёт у него флакон, который может снять проклятие Фадеров.',
    box: [['Испанский', 'Grigori Rasputín'], ['Годы жизни', '1869 — декабрь 1916'], ['Место гибели', 'Юсуповский дворец, Петроград'], ['Роман', '«Операция «Лондон»»'], ['Связанный предмет', 'флакон [[hidromiel|медовухи]]']],
    b: `**Григорий Ефимович Распутин** — сибирский крестьянин, ставший *старцем*, странствующим аскетом со славой святого и целителя. Он завоевал доверие императрицы Александры, потому что, казалось, облегчал гемофилию цесаревича Алексея. Его влияние при дворе возмущало аристократию, и в декабре 1916 года заговорщики убили его в Юсуповском дворце на Мойке.

## В истории

- Заговорщики: князь **Феликс Юсупов**, великий князь **Дмитрий Павлович** и депутат Думы **Владимир Пуришкевич**.
- Его заманили ночью под предлогом знакомства с Ириной, женой Юсупова.
- Уже много десятилетий существует версия, что в ту ночь там был британский агент.

## В романах

«Операция «Лондон»» открывается двумя историческими «Введениями»: спальня больного цесаревича и подвальный зал Юсуповского дворца в декабре 1916 года. Роман берёт британскую версию и превращает её в вымысел: агент по имени **Алистер Торн** обыскивает тело Распутина на обледеневшем берегу и уносит «маленький стеклянный флакон тёмно-янтарного, почти медового цвета». С тех пор тайна «принадлежала британской короне». Век спустя Луис Фадер, бессмертный из-за [[maldicion-fader|проклятия]], ищет этот флакон, чтобы снова стать смертным. Последняя глава называется «Прах старца».

В «Аномальном часе» Наталья называет астролога Бомелия «Распутиным XVI века» (см. [[ivan-terrible|Иван Грозный]]).

> Торн, Люси и флакон — вымысел романа.`
  }
});

A({
  id: 'julio-roca', type: 'historia', uni: 'fader', img: 'img/covers/el-misterio-de-los-fader.webp',
  novels: ['el-misterio-de-los-fader'],
  see: ['maldicion-fader', 'karl-fader', 'pueblos-originarios', 'hidromiel'],
  es: {
    t: 'Julio Argentino Roca y la Campaña del Desierto',
    s: 'El general y dos veces presidente argentino que dirigió la llamada Conquista del Desierto contra los pueblos indígenas. En El misterio de los Fader, Roca chantajea a Karl Fader para obtener hidromiel, y la masacre origina la maldición familiar.',
    box: [['Ruso', 'Хулио Архентино Рока и «Завоевание пустыни»'], ['Vida', '1843–1914'], ['Presidencias', '1880–1886 y 1898–1904'], ['Campaña', '1878–1885, contra mapuches, ranqueles, tehuelches y otros pueblos'], ['Novela', '*El misterio de los Fader*']],
    b: `**Julio Argentino Roca** fue militar y presidente de la Argentina en dos mandatos. Su nombre está unido a la **Conquista del Desierto** (1878–1885), las campañas militares que ocuparon la Pampa y la Patagonia y provocaron la muerte, el desplazamiento y la reducción a servidumbre de miles de indígenas. Hoy es una de las figuras más discutidas de la historia argentina, y sus monumentos son objeto de protestas.

## En la novela

- **El chantaje.** Según [[karl-fader|Karl Fader]], un francés reveló su secreto a Roca, «que me chantajeó, obligándome a producir grandes cantidades de [[hidromiel|hidromiel]] para él. Lo usó para fortalecer a sus soldados y llevar a cabo la Campaña del Desierto, aniquilando a los pueblos originarios».
- **La maldición.** Un niño mapuche, testigo de la masacre, maldice a Karl con la vida eterna: es el origen de la [[maldicion-fader|maldición de los Fader]].
- **El presente.** En el capítulo «La Plaza de las Sombras» hay una protesta contra la construcción de un monumento a Roca, con carteles de «Roca genocida». La habla María Silvana Roca, presentada como su tataranieta, que después lidera a los guerreros del chamán Lautaro en el anfiteatro.

> El hidromiel y el pacto con Karl son ficción; la campaña y la polémica, no.`
  },
  ru: {
    t: 'Хулио Архентино Рока и «Завоевание пустыни»',
    s: 'Генерал и дважды президент Аргентины, руководивший так называемым «Завоеванием пустыни» против коренных народов. В «Тайне семьи Фадер» Рока шантажом добывает у Карла Фадера медовуху, а резня становится источником семейного проклятия.',
    box: [['Испанский', 'Julio Argentino Roca'], ['Годы жизни', '1843–1914'], ['Президентство', '1880–1886 и 1898–1904'], ['Кампания', '1878–1885, против мапуче, ранкелей, теуэльче и других народов'], ['Роман', '«Тайна семьи Фадер»']],
    b: `**Хулио Архентино Рока** — военный и дважды президент Аргентины. Его имя связано с **«Завоеванием пустыни»** (1878–1885) — военными кампаниями, в ходе которых были заняты Пампа и Патагония, а тысячи представителей коренных народов погибли, были изгнаны или обращены в подневольный труд. Сегодня это одна из самых спорных фигур аргентинской истории, а его памятники становятся местом протестов.

## В романе

- **Шантаж.** По словам [[karl-fader|Карла Фадера]], один француз выдал его тайну Роке, «и тот шантажом заставил меня производить для него огромное количество [[hidromiel|медовухи]]. Он использовал её, чтобы укрепить солдат и провести „Завоевание пустыни“, уничтожая коренные народы».
- **Проклятие.** Мальчик-мапуче, свидетель резни, проклинает Карла вечной жизнью — так начинается [[maldicion-fader|проклятие Фадеров]].
- **Наши дни.** В главе «Площадь теней» люди протестуют против строительства памятника Роке с плакатами «Рока — геноцид». Выступает Мария Сильвана Рока, представленная как его праправнучка; позже она возглавит воинов шамана Лаутаро в амфитеатре.

> Медовуха и сделка с Карлом — вымысел; кампания и споры вокруг неё — нет.`
  }
});

A({
  id: 'pueblos-originarios', type: 'historia', uni: 'fader', img: 'img/covers/el-misterio-de-los-fader.webp',
  novels: ['el-misterio-de-los-fader', 'dikij-chas-karnaval-razdora'],
  see: ['julio-roca', 'maldicion-fader', 'malon'],
  es: {
    t: 'Huarpes y mapuches',
    s: 'Dos pueblos originarios del sur de América. Los huarpes habitaban Cuyo, la región de Mendoza; los mapuches, el centro-sur de Chile y la Patagonia. En El misterio de los Fader la diferencia se convierte en un grito de batalla.',
    box: [['Ruso', 'Уарпе и мапуче'], ['Huarpes', 'Cuyo: Mendoza, San Juan, San Luis'], ['Mapuches', 'Araucanía chilena, Pampa y Patagonia argentinas'], ['Novelas', '*El misterio de los Fader*; *El carnaval de la discordia* (el [[malon|Malón]])']],
    b: `## En la historia

- Los **huarpes** son el pueblo originario de Cuyo, la región donde está Mendoza. Construyeron sistemas de riego que los españoles heredaron y que están en el origen de las acequias mendocinas.
- Los **mapuches** vivían a ambos lados de la cordillera, sobre todo en el centro-sur de Chile y, desde el siglo XVIII, también en la Pampa y la Patagonia argentinas. Fueron uno de los blancos principales de la [[julio-roca|Conquista del Desierto]].

## En El misterio de los Fader

- La [[maldicion-fader|maldición]] la lanza un niño mapuche que presenció una masacre.
- En la batalla del anfiteatro Frank Romero Day, el chamán Lautaro dirige a «guerreros mapuches» con un cetro de hidromiel. Luis improvisa una frase épica «con la poca información que tenía sobre los pueblos originarios»: **«¡Mendoza es huarpe! ¡No es mapuche!»**.
- Una líder con «orgullo huarpe» llega con la hinchada de Huracán Las Heras; la novela también muestra a «supuestos huarpes» manipulados por el villano Adolfo.

## En La hora salvaje

El [[malon|Malón]] que invoca Luis lleva el nombre de los ataques masivos de jinetes indígenas en la frontera argentina; la propia novela lo aclara en una nota.`
  },
  ru: {
    t: 'Уарпе и мапуче',
    s: 'Два коренных народа юга Америки. Уарпе населяли Куйо — область Мендосы; мапуче — центр и юг Чили и Патагонию. В «Тайне семьи Фадер» разница между ними становится боевым кличем.',
    box: [['Испанский', 'Huarpes y mapuches'], ['Уарпе', 'Куйо: Мендоса, Сан-Хуан, Сан-Луис'], ['Мапуче', 'чилийская Араукания, аргентинские Пампа и Патагония'], ['Романы', '«Тайна семьи Фадер»; «Карнавал раздора» ([[malon|Малон]])']],
    b: `## В истории

- **Уарпе** — коренной народ Куйо, области, где находится Мендоса. Они создали оросительные системы, которые унаследовали испанцы и из которых выросли мендосские арыки.
- **Мапуче** жили по обе стороны Анд, прежде всего в центре и на юге Чили, а с XVIII века — и в аргентинских Пампе и Патагонии. Они были одной из главных целей [[julio-roca|«Завоевания пустыни»]].

## В «Тайне семьи Фадер»

- [[maldicion-fader|Проклятие]] накладывает мальчик-мапуче, видевший резню.
- В битве в амфитеатре Франка Ромеро Дея шаман Лаутаро ведёт «воинов-мапуче» с помощью скипетра с медовухой. Луис выкрикивает эпическую фразу, сочинённую «с тем немногим, что он знал о коренных народах»: **«Мендоса — уарпе! А не мапуче!»**
- Предводительница с «гордостью уарпе» приводит фанатов «Уракан Лас-Эрас»; роман показывает и «так называемых уарпе», которыми манипулирует злодей Адольфо.

## В «Диком часе»

[[malon|Малон]], которого призывает Луис, назван по массовым набегам индейских всадников на аргентинской границе — сам роман поясняет это в сноске.`
  }
});

A({
  id: 'fernando-fader', type: 'historia', uni: 'fader', img: 'img/covers/operacion-londres.webp',
  novels: ['el-misterio-de-los-fader', 'operacion-londres'],
  see: ['usina-cacheuta', 'robert-fader', 'luis-fader', 'mendoza'],
  es: {
    t: 'Fernando Fader',
    s: 'Pintor argentino nacido en Burdeos, gran paisajista de Mendoza y Córdoba. El autor de Faderpedia lo cita como inspiración, y en Operación Londres sus cuadros esconden secretos.',
    box: [['Ruso', 'Фернандо Фадер'], ['Vida', '1882, Burdeos – 1935, Córdoba'], ['Padre', 'El ingeniero Carlos Fader'], ['Museo', 'Casa de Fader / Museo Emiliano Guiñazú, Luján de Cuyo'], ['Frase', '«Soy mendocino por elección»'], ['Cuadro en la novela', '*La Mañana Triste*']],
    b: `**Fernando Fader** fue uno de los grandes pintores argentinos de principios del siglo XX. Nació en Burdeos, se formó en Múnich y vivió en Mendoza, donde pintó la vida rural y los paisajes cuyanos; la enfermedad lo llevó después a las sierras de Córdoba, donde murió en 1935. Su casa de Mayor Drummond, en Luján de Cuyo, con murales pintados por él, es hoy el **Museo Emiliano Guiñazú – Casa de Fader**.

## Para el autor

En el prólogo de [[fader|El misterio de los Fader]], el autor cuenta que el ingeniero Carlos Fader y su hijo Fernando lo inspiraron «a soñar, a ver el mundo con amplitud y a creer en lo imposible», y cita la frase del pintor: **«Yo soy mendocino por elección»**. Por eso, dice, eligió llevar el apellido.

## En las novelas

- En *El misterio de los Fader*, Natalia descubre que «Fernando Fader, el famoso pintor, era parte de su familia», y un capítulo se titula «El secreto en los cuadros de Fader».
- *Operación Londres* tiene escenas en la casa y taller del pintor: Fernando, con veintiún años, ante el lienzo en blanco; el nacimiento de ***La Mañana Triste***, un cuadro que «parecía emitir su propia luz tenue»; y su muerte, «rodeado por las telas y los paisajes que había elegido».
- Al final, dos cuadros de Fernando Fader se exhiben de manera permanente en el Museo Emiliano Guiñazú.

> *La Mañana Triste* y el papel de los cuadros en la trama pertenecen a la novela.`
  },
  ru: {
    t: 'Фернандо Фадер',
    s: 'Аргентинский художник, родившийся в Бордо, великий пейзажист Мендосы и Кордовы. Автор называет его своим вдохновением, а в «Операции «Лондон»» его картины хранят тайны.',
    box: [['Испанский', 'Fernando Fader'], ['Годы жизни', '1882, Бордо — 1935, Кордова'], ['Отец', 'инженер Карлос Фадер'], ['Музей', 'Дом Фадера / Музей Эмилиано Гиньясу, Лухан-де-Куйо'], ['Фраза', '«Я мендосинец по выбору»'], ['Картина в романе', '«Грустное утро»']],
    b: `**Фернандо Фадер** — один из крупнейших аргентинских художников начала XX века. Родился в Бордо, учился в Мюнхене и жил в Мендосе, где писал сельскую жизнь и пейзажи Куйо; болезнь затем привела его в горы Кордовы, где он умер в 1935 году. Его дом в Майор-Драммонде (Лухан-де-Куйо) с его же настенными росписями сегодня стал **Музеем Эмилиано Гиньясу — Домом Фадера**.

## Для автора

В прологе к «[[fader|Тайне семьи Фадер]]» автор рассказывает, что инженер Карлос Фадер и его сын Фернандо вдохновили его «мечтать, смотреть на мир широко и верить в невозможное», и приводит слова художника: **«Я мендосинец по выбору»**. Поэтому, говорит он, он и выбрал носить эту фамилию.

## В романах

- В «Тайне семьи Фадер» Наталья узнаёт, что «знаменитый художник Фернандо Фадер был частью семьи», а одна из глав называется «Тайна картин Фадера».
- В «Операции «Лондон»» есть сцены в доме и мастерской художника: двадцатиоднолетний Фернандо перед чистым холстом; рождение картины **«Грустное утро»** (*La Mañana Triste*), которая «будто излучала собственный тихий свет»; и его смерть «среди холстов и пейзажей, которые он выбрал».
- В финале две картины Фернандо Фадера навсегда выставляются в Музее Эмилиано Гиньясу.

> «Грустное утро» и роль картин в сюжете принадлежат роману.`
  }
});

A({
  id: 'usina-cacheuta', type: 'historia', uni: 'fader', img: 'img/covers/el-misterio-de-los-fader.webp',
  novels: ['el-misterio-de-los-fader'],
  see: ['fernando-fader', 'mendoza', 'karl-fader'],
  es: {
    t: 'Cacheuta: la usina y el aluvión de 1934',
    s: 'Cacheuta, en la montaña mendocina, tuvo una central hidroeléctrica pionera, ligada en la novela al ingeniero Carlos Fader, y fue arrasada por el aluvión del 10 de enero de 1934. En El misterio de los Fader sus ruinas esconden tesoros y cadáveres.',
    box: [['Ruso', 'Качеута: электростанция и сель 1934 года'], ['Lugar', 'Cacheuta, Luján de Cuyo, [[mendoza|Mendoza]]'], ['Río', 'Río Mendoza'], ['Aluvión', '10 de enero de 1934'], ['Capítulo', '«Las sombras de Cacheuta»']],
    b: `## En la historia

Cacheuta es una localidad del valle del río Mendoza, famosa por sus termas. A principios del siglo XX se aprovechó allí el desnivel del río para generar electricidad, y el ingeniero **Carlos Fader**, padre del pintor [[fernando-fader|Fernando Fader]], fue uno de los impulsores de la electrificación de Mendoza. El **10 de enero de 1934**, un aluvión provocado por el deshielo y las lluvias arrasó el valle y destruyó instalaciones, el hotel termal y el ferrocarril.

## En la novela

- Sergio recuerda que Carlos Fader «hizo muchos proyectos magníficos, como la usina eléctrica de Cacheuta».
- El capítulo «Las sombras de Cacheuta» transcurre en las ruinas del antiguo complejo, que la novela describe como «la primera usina hidroeléctrica de Argentina», con un desnivel de 45 metros, «una maravilla de la ingeniería» hasta que el aluvión de 1934 «arrasó con todo».
- Entre los restos aparecen cuadros de paisajes europeos, platería, candelabros deformados por el agua y documentos técnicos con el sello de Carlos Fader. Karl, el antepasado inmortal, había trabajado allí como ingeniero antes del aluvión.

> Las fechas y cifras de la usina se citan como las da la novela; el tesoro escondido es ficción.`
  },
  ru: {
    t: 'Качеута: электростанция и сель 1934 года',
    s: 'В Качеуте, в горах Мендосы, работала одна из первых гидроэлектростанций, в романе связанная с инженером Карлосом Фадером; 10 января 1934 года её уничтожил сель. В «Тайне семьи Фадер» её руины хранят сокровища и мертвецов.',
    box: [['Испанский', 'Cacheuta: la usina y el aluvión'], ['Место', 'Качеута, Лухан-де-Куйо, [[mendoza|Мендоса]]'], ['Река', 'Мендоса'], ['Сель', '10 января 1934 года'], ['Глава', '«Тени Качеуты»']],
    b: `## В истории

Качеута — посёлок в долине реки Мендоса, известный термальными источниками. В начале XX века перепад реки здесь использовали для выработки электричества, а инженер **Карлос Фадер**, отец художника [[fernando-fader|Фернандо Фадера]], был одним из инициаторов электрификации Мендосы. **10 января 1934 года** сель, вызванный таянием снегов и ливнями, прошёл по долине и разрушил сооружения, термальный отель и железную дорогу.

## В романе

- Серхио вспоминает, что Карлос Фадер «осуществил много прекрасных проектов, например электростанцию в Качеуте».
- Глава «Тени Качеуты» происходит в руинах старого комплекса, который роман называет «первой гидроэлектростанцией Аргентины» с перепадом в 45 метров — «чудом инженерной мысли», пока сель 1934 года «не смёл всё».
- Среди обломков находят европейские пейзажи, серебро, канделябры, искорёженные водой, и технические документы с печатью Карлоса Фадера. Карл, бессмертный предок, работал здесь инженером до селя.

> Даты и цифры станции приводятся так, как их даёт роман; спрятанное сокровище — вымысел.`
  }
});

A({
  id: 'malvinas', type: 'historia', uni: 'fader', img: 'img/covers/operacion-londres.webp',
  novels: ['operacion-londres'],
  see: ['luis-fader', 'rasputin'],
  es: {
    t: 'Guerra de Malvinas',
    s: 'La guerra de 1982 entre la Argentina y el Reino Unido por las islas del Atlántico Sur. Operación Londres empieza con su recuerdo, diez años después, en la casa de Luis niño.',
    box: [['Ruso', 'Фолклендская (Мальвинская) война'], ['Fechas', '2 de abril – 14 de junio de 1982'], ['Duración', '74 días'], ['Gobierno argentino', 'La dictadura militar'], ['Escena', 'Las Heras, Mendoza, 2 de abril de 1992']],
    b: `## En la historia

El **2 de abril de 1982** la dictadura militar argentina ocupó las islas Malvinas, administradas por el Reino Unido. Londres envió una fuerza de tareas y la guerra terminó con la rendición argentina el **14 de junio**, tras 74 días. Murieron cientos de soldados, muchos de ellos conscriptos de dieciocho años. La derrota precipitó el fin de la dictadura.

## En la novela

*Operación Londres* abre en Las Heras, Mendoza, el 2 de abril de 1992. La madre de Luis mira la televisión: «¿Sabías que hoy se cumplen diez años desde que recuperamos las islas?». Le explica que los militares «mandaron a esos pibes a una batalla imposible», convencidos de que Estados Unidos los apoyaría.

El niño mira las imágenes de soldados británicos izando la Union Jack y piensa: «Yo no quiero ser soldado». Esa escena explica la desconfianza de Luis hacia la obediencia ciega y su relación conflictiva con el mundo anglosajón, el mismo al que tendrá que viajar, ya adulto, para recuperar el frasco de [[rasputin|Rasputín]].`
  },
  ru: {
    t: 'Мальвинская (Фолклендская) война',
    s: 'Война 1982 года между Аргентиной и Великобританией за острова в Южной Атлантике. «Операция «Лондон»» начинается с воспоминания о ней — десять лет спустя, в доме маленького Луиса.',
    box: [['Испанский', 'Guerra de Malvinas'], ['Даты', '2 апреля — 14 июня 1982 года'], ['Длительность', '74 дня'], ['Власть в Аргентине', 'военная диктатура'], ['Сцена', 'Лас-Эрас, Мендоса, 2 апреля 1992 года']],
    b: `## В истории

**2 апреля 1982 года** аргентинская военная диктатура заняла Мальвинские (Фолклендские) острова, которыми управляла Великобритания. Лондон отправил оперативное соединение, и война закончилась капитуляцией Аргентины **14 июня**, через 74 дня. Погибли сотни солдат, многие из них — восемнадцатилетние призывники. Поражение ускорило падение диктатуры.

## В романе

«Операция «Лондон»» начинается в Лас-Эрас, Мендоса, 2 апреля 1992 года. Мама Луиса смотрит телевизор: «Знаешь, что сегодня десять лет с тех пор, как мы вернули острова?» Она объясняет, что военные «отправили этих ребят в невозможную битву», уверенные, что США их поддержат.

Мальчик смотрит кадры, где британские солдаты поднимают «Юнион Джек», и думает: «Я не хочу быть солдатом». Эта сцена объясняет недоверие Луиса к слепому подчинению и его непростые отношения с англосаксонским миром — тем самым, куда ему, уже взрослому, придётся отправиться за флаконом [[rasputin|Распутина]].`
  }
});

A({
  id: 'anfiteatro-romero-day', type: 'historia', uni: 'fader', img: 'img/covers/tajna-semi-fader.webp',
  novels: ['el-misterio-de-los-fader'],
  see: ['vendimia', 'mendoza', 'pueblos-originarios'],
  es: {
    t: 'Teatro Griego Frank Romero Day',
    s: 'El gran anfiteatro al aire libre del Parque General San Martín de Mendoza, escenario central de la Fiesta de la Vendimia. En El misterio de los Fader es el lugar de la batalla final.',
    box: [['Ruso', 'Амфитеатр Франка Ромеро Дея'], ['Lugar', 'Parque General San Martín, [[mendoza|Mendoza]]'], ['Uso', 'Acto central de la [[vendimia|Vendimia]]'], ['Capítulo', '«La batalla en el anfiteatro»']],
    b: `## En la realidad

El **Teatro Griego Frank Romero Day** es un anfiteatro al aire libre construido en el Parque General San Martín, al pie del cerro de la Gloria. Desde mediados del siglo XX acoge el acto central de la [[vendimia|Fiesta Nacional de la Vendimia]], con miles de espectadores en sus gradas.

## En la novela

El autor lo considera la escena más importante de *El misterio de los Fader*: «Allí los dos combaten contra fuerzas del mal, aunque ni siquiera están completamente seguros de qué son esas fuerzas». En la batalla se mezclan:

- los guerreros del chamán Lautaro y su cetro de hidromiel;
- Karl Fader, inmortal pero cansado, y Sergio, que se toma un trago de hidromiel y se siente «Asterix»;
- Natalia inmovilizando a María Silvana;
- la hinchada de Huracán Las Heras alentando a Luis «como si fuera un héroe de fútbol».

Al terminar, Luis queda inmortal.`
  },
  ru: {
    t: 'Амфитеатр Франка Ромеро Дея',
    s: 'Большой открытый амфитеатр в парке Хенераль-Сан-Мартин в Мендосе, главная сцена праздника Вендимии. В «Тайне семьи Фадер» здесь происходит финальная битва.',
    box: [['Испанский', 'Teatro Griego Frank Romero Day'], ['Место', 'парк Хенераль-Сан-Мартин, [[mendoza|Мендоса]]'], ['Назначение', 'главное действо [[vendimia|Вендимии]]'], ['Глава', '«Битва в амфитеатре»']],
    b: `## В действительности

**«Греческий театр» Франка Ромеро Дея** — открытый амфитеатр в парке Хенераль-Сан-Мартин у подножия холма Глории. С середины XX века здесь проходит главное представление [[vendimia|Национального праздника Вендимии]], и на его трибунах собираются тысячи зрителей.

## В романе

Автор считает эту сцену самой важной в «Тайне семьи Фадер»: «Там они вдвоём сражаются с силами зла, хотя даже не до конца уверены, что это за силы». В битве смешиваются:

- воины шамана Лаутаро и его скипетр с медовухой;
- Карл Фадер, бессмертный, но уставший, и Серхио, который глотает медовуху и чувствует себя «Астериксом»;
- Наталья, обездвиживающая Марию Сильвану;
- фанаты «Уракан Лас-Эрас», болеющие за Луиса, «как за футбольного героя».

После битвы Луис становится бессмертным.`
  }
});

A({
  id: 'plaza-espana-mendoza', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/dikij-chas-2.webp',
  novels: ['dikij-chas-2'],
  see: ['mendoza', 'espiritus-montanas'],
  es: {
    t: 'Plaza España de Mendoza y Cristóbal Colón',
    s: 'Una de las cuatro plazas que rodean la plaza Independencia de Mendoza, famosa por sus azulejos españoles. En La hora salvaje 2, una pieza escondida en el ojo de Colón y un discurso contra los conquistadores encienden la trama.',
    box: [['Ruso', 'Площадь Испании в Мендосе'], ['Lugar', 'Centro de [[mendoza|Mendoza]]'], ['Rasgo', 'Bancos y murales de azulejos'], ['Capítulo', '«Plaza España y el discurso de fuego»']],
    b: `## En la realidad

Tras el terremoto de 1861, Mendoza se reconstruyó alrededor de la plaza Independencia y de cuatro plazas satélite: Chile, San Martín, Italia y **España**. La plaza España está decorada con azulejos sevillanos, con escenas y un mural sobre la historia compartida de España y América.

## En La hora salvaje 2

En el capítulo «Plaza España y el discurso de fuego», Natasha se acerca a la gran pared donde está representado **Cristóbal Colón**. Lo que buscan está «justo en el ojo de Colón»: un villano aprovecha la distracción para subir, sacar el azulejo y esconderlo. En la misma escena alguien proclama que reemplazará el monumento por otro «a los pueblos que sufrieron las conquistas de Colón, Pizarro y Cortés».

> El azulejo escondido es ficción.`
  },
  ru: {
    t: 'Площадь Испании в Мендосе и Христофор Колумб',
    s: 'Одна из четырёх площадей вокруг площади Независимости в Мендосе, знаменитая испанскими изразцами. В «Диком часе 2» деталь, спрятанная в глазу Колумба, и речь против конкистадоров запускают сюжет.',
    box: [['Испанский', 'Plaza España'], ['Место', 'центр [[mendoza|Мендосы]]'], ['Особенность', 'скамьи и панно из азулежу'], ['Глава', '«Площадь Испании и огненная речь»']],
    b: `## В действительности

После землетрясения 1861 года Мендосу отстроили вокруг площади Независимости и четырёх площадей-спутников: Чили, Сан-Мартин, Италии и **Испании**. Площадь Испании украшена севильскими изразцами (азулежу) со сценами и панно об общей истории Испании и Америки.

## В «Диком часе 2»

В главе «Площадь Испании и огненная речь» Наташа подходит к большой стене, где изображён **Христофор Колумб**. То, что ищут герои, находится «прямо в глазу Колумба»: злодей, пользуясь суматохой, поднимается к стене, вынимает изразец и прячет его. В той же сцене кто-то обещает заменить памятник другим — «народам, которые пострадали от завоеваний Колумба, Писарро, Кортеса».

> Спрятанный изразец — вымысел.`
  }
});

/* ---------- Rusia ---------- */

A({
  id: 'ivan-terrible', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'pergaminos-imperiales', 'rasputin'],
  es: {
    t: 'Iván el Terrible y Eliseo Bomelio',
    s: 'El primer zar de Rusia y su médico y astrólogo extranjero. La Hora anómala lleva a Luis, Natalia y Alicia al Moscú de Iván IV, donde se cruzan con Bomelio, «el Rasputín del siglo XVI».',
    box: [['Ruso', 'Иван Грозный и Елисей Бомелий'], ['Iván IV', '1530–1584; zar desde 1547'], ['Bomelio', 'Médico, astrólogo y alquimista de la corte; murió en 1579'], ['Novela', '*La hora anómala*']],
    b: `## En la historia

- **Iván IV**, llamado el Terrible (*Грозный*, «temible»), fue el primer gran príncipe de Moscú coronado como zar. Su reinado combinó conquistas y reformas con el terror de la *opríchnina*.
- **Eliseo Bomelio** (Elisei Bomeli) fue un médico y astrólogo de origen neerlandés que sirvió en la corte de Iván. Tenía fama de envenenador y hechicero. Acusado de traición, murió tras ser torturado en 1579.

## En La hora anómala

Durante una de las manifestaciones de la [[hora-anomala|Hora anómala]], los protagonistas pasan «al Moscú de los tiempos de Iván el Terrible». El diario del tatarabuelo habla de viejas leyendas sobre libros y manuscritos escondidos bajo la ciudad en tiempos de «uno de los zares más temibles».

Allí aparece en persona Bomelio: «Médico extranjero, astrólogo, alquimista, consejero en la corte de Iván el Terrible…». Natalia lo resume así: «¿O sea que es algo así como un Rasputín del siglo XVI?». Tras una persecución de streltsí por medio Kremlin, descubren que alguien se llevó el pergamino antes que ellos.`
  },
  ru: {
    t: 'Иван Грозный и Елисей Бомелий',
    s: 'Первый русский царь и его иноземный лекарь-астролог. Аномальный час переносит Луиса, Наталью и Алисию в Москву Ивана IV, где они встречают Бомелия — «Распутина XVI века».',
    box: [['Испанский', 'Iván el Terrible y Eliseo Bomelio'], ['Иван IV', '1530–1584; царь с 1547 года'], ['Бомелий', 'придворный лекарь, астролог и алхимик; умер в 1579 году'], ['Роман', '«Аномальный час»']],
    b: `## В истории

- **Иван IV Грозный** — первый великий князь Московский, венчанный на царство. Его правление соединило завоевания и реформы с террором опричнины.
- **Елисей Бомелий** — лекарь и астролог голландского происхождения при дворе Ивана. Слыл отравителем и чародеем. Обвинённый в измене, умер после пыток в 1579 году.

## В «Аномальном часе»

Во время одного из проявлений [[hora-anomala|Аномального часа]] герои попадают «в Москву времён Ивана Грозного». Дневник прапрадеда упоминает старые московские предания о книгах и рукописях, спрятанных под городом во времена «одного из самых грозных русских царей».

Там появляется сам Бомелий: «Иностранный врач, астролог, алхимик, советник при дворе Ивана Грозного…» Наталья подытоживает: «То есть это что-то вроде Распутина шестнадцатого века?» После погони стрельцов через пол-Кремля оказывается, что свиток кто-то забрал до них.`
  }
});

A({
  id: 'falso-dimitri', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'ivan-terrible', 'pedro-tsikler'],
  es: {
    t: 'El Falso Dimitri y la Época de la Turbulencia',
    s: 'El impostor que reinó en Moscú en 1605–1606 haciéndose pasar por el hijo muerto de Iván el Terrible. Es una de las épocas por las que se dispersaron los Pergaminos Imperiales.',
    box: [['Ruso', 'Лжедмитрий и Смутное время'], ['Época', 'Smuta, 1598–1613'], ['Reinado', '1605–1606'], ['Novela', '*La hora anómala*']],
    b: `## En la historia

Tras la muerte del último zar de la dinastía Rúrikovich, Rusia vivió la **Época de la Turbulencia** (*Смутное время*, 1598–1613): hambre, guerras civiles e intervención polaca y sueca. En 1605 un joven que decía ser **Dimitri**, el hijo menor de Iván el Terrible muerto en Úglich, entró en Moscú con apoyo polaco y fue coronado. Lo mataron en 1606. Después aparecieron otros impostores con el mismo nombre.

## En La hora anómala

La sinopsis lo cita entre las épocas por las que se dispersaron los [[pergaminos-imperiales|pergaminos]], «desde los tiempos de Iván el Terrible y el Falso Dimitri hasta la retirada de Napoleón». Una de las pistas del diario conduce a esa época: «—El Falso Dimitri. —La Época de la Turbulencia». Más tarde, la novela habla de «la Moscú del Tiempo de la Turbulencia» para distinguirla de la de 1812.`
  },
  ru: {
    t: 'Лжедмитрий и Смутное время',
    s: 'Самозванец, царствовавший в Москве в 1605–1606 годах под именем погибшего сына Ивана Грозного. Это одна из эпох, по которым рассеялись Имперские пергаменты.',
    box: [['Испанский', 'El Falso Dimitri'], ['Эпоха', 'Смута, 1598–1613'], ['Правление', '1605–1606'], ['Роман', '«Аномальный час»']],
    b: `## В истории

После пресечения династии Рюриковичей Россия пережила **Смутное время** (1598–1613): голод, гражданские войны, польскую и шведскую интервенцию. В 1605 году молодой человек, называвший себя **Дмитрием**, младшим сыном Ивана Грозного, погибшим в Угличе, вошёл в Москву при поддержке поляков и был венчан на царство. В 1606 году его убили. Позже появились и другие самозванцы под тем же именем.

## В «Аномальном часе»

Аннотация называет его среди эпох, по которым рассеялись [[pergaminos-imperiales|пергаменты]], — «от времён Ивана Грозного и Лжедмитрия до отступления Наполеона». Одна из подсказок дневника ведёт именно туда: «— Лжедмитрий. — Смутное время». Позже роман говорит о «Москве Смутного времени», чтобы отличить её от Москвы 1812 года.`
  }
});

A({
  id: 'pedro-tsikler', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'pergaminos-imperiales'],
  es: {
    t: 'Pedro el Grande y la conspiración de Tsíkler (1697)',
    s: 'En 1697 el coronel de streltsí Iván Tsíkler conspiró para matar al joven zar Pedro I provocando un incendio. La Hora anómala lleva a los héroes a su casa justo antes de que Pedro aparezca en persona.',
    box: [['Ruso', 'Пётр I и заговор Циклера'], ['Año', '1697'], ['Conspirador', 'Iván Yelíseievich Tsíkler, coronel de streltsí'], ['Plan', 'Un incendio y el asesinato del zar en medio del caos'], ['Novela', '*La hora anómala*']],
    b: `## En la historia

**Iván Tsíkler** fue un oficial de los streltsí que apoyó a la regente **Sofía** y luego se pasó al bando del joven **Pedro I**. Resentido por no recibir lo que esperaba, en 1697 organizó una conspiración para matar al zar; el plan fue denunciado, Pedro acudió en persona a detener a los conjurados y Tsíkler fue ejecutado. Poco después Pedro partió en su Gran Embajada a Europa.

## En La hora anómala

El diario del tatarabuelo deja un acertijo:

> «Busca al que sirvió a dos amos y traicionó a los dos. Estuvo con los streltsí, apoyó a Sofía y después se inclinó ante Pedro. Ahora le prepara fuego al zar. El segundo [pergamino] está en su poder hasta que el propio soberano entre en su casa.»

Natalia lo resuelve: **Tsíkler**. La tableta del [[sur-mistico|Sur Místico]] muestra su ficha histórica: «En 1697 organizó una conspiración contra el zar. Los conjurados pensaban provocar un incendio y matar a Pedro en medio del alboroto». Luis se da cuenta: «Estamos en la Moscú de Pedro el Grande, antes incluso de Petersburgo». Tienen poco tiempo: hasta que el zar llegue en persona a la casa del conspirador.`
  },
  ru: {
    t: 'Пётр I и заговор Циклера (1697)',
    s: 'В 1697 году стрелецкий подполковник Иван Циклер составил заговор, чтобы убить молодого царя Петра I, устроив пожар. Аномальный час приводит героев в его дом незадолго до появления самого Петра.',
    box: [['Испанский', 'Pedro el Grande y Tsíkler'], ['Год', '1697'], ['Заговорщик', 'Иван Елисеевич Циклер, стрелецкий подполковник'], ['План', 'пожар и убийство царя в суматохе'], ['Роман', '«Аномальный час»']],
    b: `## В истории

**Иван Циклер** — стрелецкий офицер, поддерживавший царевну **Софью**, а затем перешедший на сторону молодого **Петра I**. Обиженный тем, что не получил ожидаемого, в 1697 году он составил заговор против царя; заговор раскрыли, Пётр лично явился арестовать заговорщиков, и Циклера казнили. Вскоре после этого Пётр отправился с Великим посольством в Европу.

## В «Аномальном часе»

Дневник прапрадеда оставляет загадку:

> «Ищи того, кто служил двум хозяевам и обоих предал. Он был со стрельцами, стоял за Софьей, потом поклонился Петру. Теперь он готовит царю огонь. Второй хранится у него, пока сам государь не войдёт в его дом».

Наталья разгадывает: **Циклер**. Планшет [[sur-mistico|«Мистического Юга»]] показывает архивную карточку: «В 1697 году организовал заговор против царя. Заговорщики собирались устроить пожар и убить Петра во время суматохи». Луис понимает: «Значит, мы оказались в Москве Петра Великого ещё до Петербурга». Времени мало — до того, как сам царь войдёт в дом заговорщика.`
  }
});

A({
  id: 'guerra-1812', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'pergaminos-imperiales', 'plyushka'],
  es: {
    t: 'Napoleón en Moscú (1812)',
    s: 'En septiembre de 1812 el ejército de Napoleón entró en Moscú y semanas después emprendió una retirada desastrosa. En La hora anómala, los héroes roban cuatro pergaminos de un convoy francés en plena retirada.',
    box: [['Ruso', 'Наполеон в Москве (1812)'], ['Guerra', 'Guerra Patria de 1812'], ['Ocupación de Moscú', 'Septiembre–octubre de 1812'], ['Museo', 'Museo de la Guerra Patria de 1812, Moscú'], ['Capítulo', '«Recuerdo del año doce»']],
    b: `## En la historia

En junio de 1812 la Grande Armée de Napoleón invadió Rusia. Tras la batalla de Borodinó, el ejército ruso de Kutúzov abandonó Moscú, y Napoleón entró en una ciudad casi vacía que enseguida ardió. En octubre comenzó la retirada, entre el frío, el hambre y los ataques rusos; de los cientos de miles de soldados que entraron, regresaron muy pocos. En Rusia se la llama **Guerra Patria de 1812**.

## En La hora anómala

La pista del diario dice: «El recuerdo del año doce guarda la siguiente huella». Los héroes van al **Museo de la Guerra Patria de 1812**, junto a la Plaza Roja, y se detienen ante una vitrina de documentos de la época… hasta que la Hora anómala los traslada: «Estamos en 1812».

Ya no es la Moscú de la Turbulencia, sino la de la guerra, con las tropas francesas cerca. Entre cañonazos, caballos asustados y una persecución, se llevan cuatro pergaminos de un convoy francés con ayuda de la gata [[plyushka|Pliushka]]. De vuelta en el presente, Moscú les parece «casi indecentemente normal». El capítulo siguiente se titula «El emperador, la gata y un plan muy malo».`
  },
  ru: {
    t: 'Наполеон в Москве (1812)',
    s: 'В сентябре 1812 года армия Наполеона вошла в Москву, а через несколько недель начала гибельное отступление. В «Аномальном часе» герои похищают четыре пергамента из французского обоза во время отступления.',
    box: [['Испанский', 'Napoleón en Moscú'], ['Война', 'Отечественная война 1812 года'], ['Оккупация Москвы', 'сентябрь—октябрь 1812 года'], ['Музей', 'Музей Отечественной войны 1812 года, Москва'], ['Глава', '«Память двенадцатого года»']],
    b: `## В истории

В июне 1812 года Великая армия Наполеона вторглась в Россию. После Бородинского сражения русская армия Кутузова оставила Москву, и Наполеон вошёл в почти пустой город, который вскоре охватил пожар. В октябре началось отступление — холод, голод, нападения русских; из сотен тысяч солдат вернулись немногие.

## В «Аномальном часе»

Подсказка дневника гласит: «Память Двенадцатого года хранит следующий след». Герои идут в **Музей Отечественной войны 1812 года** у Красной площади и останавливаются у витрины со старыми документами… пока Аномальный час не переносит их: «Мы в 1812 году».

Это уже не Москва Смутного времени, а Москва войны, где французские войска совсем рядом. Среди пушечной канонады, перепуганных лошадей и погони они уносят четыре пергамента из французского обоза — с помощью кошки [[plyushka|Плюшки]]. Вернувшись в настоящее, они находят Москву «почти неприлично нормальной». Следующая глава называется «Император, кошка и один очень плохой план».`
  }
});

A({
  id: 'revolucion-1917', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'marcos', 'multiverso'],
  es: {
    t: 'La Revolución de 1917',
    s: 'El año en que cayó el Imperio ruso y llegaron al poder los bolcheviques. En La hora anómala es una de las épocas de los pergaminos y, en una de las «otras Moscús», el acontecimiento que nunca ocurrió.',
    box: [['Ruso', 'Революция 1917 года'], ['Febrero', 'Abdicación de Nicolás II'], ['Octubre', 'Toma del poder por los bolcheviques'], ['Novela', '*La hora anómala*']],
    b: `## En la historia

En **febrero de 1917** una revolución en Petrogrado obligó a abdicar al zar Nicolás II y puso fin a tres siglos de los Románov. En **octubre** los bolcheviques tomaron el poder, y poco después estalló la guerra civil. Unos meses antes, en diciembre de 1916, había sido asesinado [[rasputin|Rasputín]].

## En La hora anómala

- La sinopsis menciona «el turbulento 1917» como último de los períodos por los que se dispersaron los [[pergaminos-imperiales|pergaminos]].
- En el capítulo «Otras Moscús», el detective [[marcos|Marcos]] cuenta que fue arrojado a Moscús paralelas: «En una Moscú nunca hubo revolución, y sobre el Kremlin todavía ondeaban las banderas imperiales». En otra, los estanques del Patriarca habían sido rellenados y en su lugar había un centro comercial. En ninguna existía la Hora anómala.

Es uno de los pasajes donde el [[multiverso|multiverso]] de Fader juega abiertamente con la historia alternativa.`
  },
  ru: {
    t: 'Революция 1917 года',
    s: 'Год падения Российской империи и прихода к власти большевиков. В «Аномальном часе» это одна из эпох пергаментов, а в одной из «других Москв» — событие, которого так и не случилось.',
    box: [['Испанский', 'La Revolución de 1917'], ['Февраль', 'отречение Николая II'], ['Октябрь', 'захват власти большевиками'], ['Роман', '«Аномальный час»']],
    b: `## В истории

В **феврале 1917 года** революция в Петрограде вынудила Николая II отречься от престола и положила конец трёхсотлетнему правлению Романовых. В **октябре** власть захватили большевики, вскоре началась гражданская война. За несколько месяцев до этого, в декабре 1916 года, был убит [[rasputin|Распутин]].

## В «Аномальном часе»

- Аннотация называет «бурный 1917 год» последним из периодов, по которым рассеялись [[pergaminos-imperiales|пергаменты]].
- В главе «Другие Москвы» детектив [[marcos|Марк]] рассказывает, как его выбрасывало в параллельные Москвы: «В одной Москве никогда не было революции, и над Кремлём до сих пор висели имперские флаги». В другой Патриаршие пруды засыпали, и на их месте стоял торговый центр. Ни в одной не было Аномального часа.

Это один из эпизодов, где [[multiverso|мультивселенная]] Фадера открыто играет с альтернативной историей.`
  }
});

A({
  id: 'orden-teutonica', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'magos-del-norte'],
  es: {
    t: 'La Orden Teutónica',
    s: 'La orden militar alemana de la Edad Media que combatió en el Báltico y contra Nóvgorod. En La hora anómala, caballeros de capa blanca con la cruz negra recorren el Moscú actual persiguiendo los pergaminos.',
    box: [['Ruso', 'Тевтонский орден'], ['Fundación', '1190, Acre'], ['Batalla célebre en Rusia', 'Batalla del Hielo, 1242, contra Alejandro Nevski'], ['Novela', '*La hora anómala*'], ['Capítulo', '«El rugido teutón»']],
    b: `## En la historia

La **Orden de los Caballeros Teutónicos** nació en Tierra Santa a finales del siglo XII y se trasladó luego al Báltico, donde creó un Estado propio en Prusia y Livonia. Su choque más famoso con el mundo ruso fue la **Batalla del Hielo** (1242), en el lago Peipus, donde el príncipe Alejandro Nevski derrotó a los caballeros de la rama livonia. Sus miembros vestían manto blanco con cruz negra. Nunca llegaron a Moscú.

## En La hora anómala

Por eso su aparición es tan inquietante. Ya en los primeros capítulos, «los cinco llevaban capas blancas con las cruces negras de la Orden Teutónica» y desaparecen entre las calles nocturnas de Moscú. Los fallos temporales que preceden a la [[hora-anomala|Hora anómala]] traen «caballeros por las calles», y los teutones se convierten en perseguidores de los pergaminos: en el capítulo «El rugido teutón» llegan en motos hasta la librería donde se esconden los héroes y echan la puerta abajo.

> Su presencia en el Moscú moderno es invención de la novela.`
  },
  ru: {
    t: 'Тевтонский орден',
    s: 'Средневековый германский военный орден, воевавший в Прибалтике и против Новгорода. В «Аномальном часе» рыцари в белых плащах с чёрным крестом бродят по современной Москве в погоне за пергаментами.',
    box: [['Испанский', 'La Orden Teutónica'], ['Основан', '1190, Акра'], ['Знаменитая битва на Руси', 'Ледовое побоище, 1242, против Александра Невского'], ['Роман', '«Аномальный час»'], ['Глава', '«Тевтонский рёв»']],
    b: `## В истории

**Тевтонский орден** возник в Святой земле в конце XII века, а затем перебрался в Прибалтику, где создал собственное государство в Пруссии и Ливонии. Его самое известное столкновение с Русью — **Ледовое побоище** (1242) на Чудском озере, где князь Александр Невский разбил рыцарей ливонской ветви ордена. Рыцари носили белый плащ с чёрным крестом. До Москвы они никогда не доходили.

## В «Аномальном часе»

Поэтому их появление так тревожит. Уже в первых главах «все пятеро носили белые плащи с чёрными крестами Тевтонского ордена» и исчезали среди вечерних московских улиц. Временные сбои перед [[hora-anomala|Аномальным часом]] приносят «рыцарей на улицах», и тевтонцы становятся охотниками за пергаментами: в главе «Тевтонский рёв» они подъезжают на мотоциклах к книжному магазину, где прячутся герои, и выбивают дверь.

> Их присутствие в современной Москве — вымысел романа.`
  }
});

A({
  id: 'pushkin-gogol', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'sur-mistico', 'moscu'],
  es: {
    t: 'Los monumentos a Pushkin y Gógol',
    s: 'Dos de los monumentos literarios más conocidos de Moscú. En el capítulo «Entre Pushkin y Gógol» de La hora anómala, Luis tiende un cable de campo entre ambos para activar algo en la red de la ciudad.',
    box: [['Ruso', 'Памятники Пушкину и Гоголю'], ['Pushkin', 'Plaza Pushkin (Tverskaya); obra de Opekushin, 1880'], ['Gógol', 'Bulevares de Moscú'], ['Capítulo', '«Entre Pushkin y Gógol»']],
    b: `## En la realidad

- El **monumento a Alexandr Pushkin**, obra de Alexandr Opekushin, se inauguró en 1880 en el bulevar Tverskói y hoy está en la plaza Pushkin, uno de los puntos de encuentro más famosos de Moscú.
- **Nikolái Gógol** tiene dos monumentos célebres en los bulevares: el Gógol sentado y melancólico de Nikolái Andréiev (1909) y el Gógol de pie de 1952.

## En La hora anómala

En el capítulo «Entre Pushkin y Gógol», la pista apunta a los dos escritores: «Porque el monumento a Pushkin está en la plaza Pushkin, y el monumento a Gógol, en el bulevar». Empiezan por Pushkin; cuando llegan a Gógol, Luis saca el segundo conector del «cable de campo» del [[sur-mistico|Sur Místico]]. A lo lejos, hacia la plaza Pushkin, se enciende una fina línea blanca que recorre el cable y alcanza el segundo punto en una fracción de segundo.

La novela usa así el mapa literario real de [[moscu|Moscú]] como un circuito mágico.`
  },
  ru: {
    t: 'Памятники Пушкину и Гоголю',
    s: 'Два самых известных литературных памятника Москвы. В главе «Между Пушкиным и Гоголем» «Аномального часа» Луис протягивает между ними полевой кабель, чтобы что-то активировать в сети города.',
    box: [['Испанский', 'Monumentos a Pushkin y Gógol'], ['Пушкин', 'Пушкинская площадь; работа Опекушина, 1880'], ['Гоголь', 'московские бульвары'], ['Глава', '«Между Пушкиным и Гоголем»']],
    b: `## В действительности

- **Памятник Александру Пушкину** работы Александра Опекушина открыт в 1880 году на Тверском бульваре и сегодня стоит на Пушкинской площади — одном из самых известных мест встреч в Москве.
- У **Николая Гоголя** на бульварах два знаменитых памятника: сидящий, задумчивый Гоголь Николая Андреева (1909) и стоящий Гоголь 1952 года.

## В «Аномальном часе»

В главе «Между Пушкиным и Гоголем» подсказка указывает на двух писателей: «Потому что памятник Пушкину стоит на Пушкинской площади, а памятник Гоголю — на бульваре». Они начинают с Пушкина; дойдя до Гоголя, Луис достаёт второй разъём «полевого кабеля» [[sur-mistico|«Мистического Юга»]]. Вдалеке, в направлении Пушкинской площади, вспыхивает тонкая белая линия, пробегает по кабелю и за долю секунды достигает второй точки.

Так роман превращает реальную литературную карту [[moscu|Москвы]] в магическую цепь.`
  }
});

A({
  id: 'esfinges-atlantes', type: 'historia', uni: 'resonancia', img: 'img/covers/rezonans-lyubvi.webp',
  novels: ['rezonans-lyubvi'],
  see: ['san-petersburgo', 'memoria-arquitectonica', 'casa-singer'],
  es: {
    t: 'Esfinges, atlantes y grifos de San Petersburgo',
    s: 'Tres conjuntos escultóricos reales de San Petersburgo que en Resonancia del amor cobran vida: las esfinges egipcias de la isla Vasílievski, los atlantes del Nuevo Hermitage y los grifos del puente del Banco.',
    box: [['Ruso', 'Сфинксы, атланты и грифоны Петербурга'], ['Esfinges', 'Muelle Universitétskaya, isla Vasílievski; traídas de Egipto en 1832'], ['Atlantes', 'Pórtico del Nuevo Hermitage, calle Millónnaya'], ['Grifos', 'Puente del Banco, canal Griboiédov (1826)'], ['Novela', '*Resonancia del amor*']],
    b: `## En la realidad

- **Las esfinges** del muelle Universitétskaya son egipcias auténticas, de más de tres mil años, con el rostro del faraón Amenhotep III. Llegaron a San Petersburgo en 1832.
- **Los atlantes** son diez figuras de granito que sostienen el pórtico del Nuevo Hermitage, en la calle Millónnaya, a pocos pasos de la plaza del Palacio. Tocarles el pie trae suerte, según la tradición local.
- **Los grifos** de alas doradas custodian el pequeño puente del Banco sobre el canal Griboiédov desde 1826.

## En Resonancia del amor

- Los testigos aseguran que en la isla Vasílievski «una enorme esfinge de piedra avanzaba por el muelle»; otra aparece en la calle Millónnaya.
- «Por el muelle caminaban dos atlantes»: en la novela empiezan a cobrar peaje por el paso hacia la plaza del Palacio («Doscientos rublos por lo imposible»).
- Luis explica a Natalia que «no nos enseñan obligatoriamente los grifos petersburgueses» ante los cuatro del puente del Banco, que «parecían custodiar el paso sobre el canal». Más tarde, los héroes vuelan a lomos de grifos entre las islas del [[archipielago-memoria|archipiélago de la memoria]].`
  },
  ru: {
    t: 'Сфинксы, атланты и грифоны Петербурга',
    s: 'Три настоящих скульптурных ансамбля Петербурга, которые оживают в «Резонансе любви»: египетские сфинксы на Васильевском острове, атланты Нового Эрмитажа и грифоны Банковского моста.',
    box: [['Испанский', 'Esfinges, atlantes y grifos'], ['Сфинксы', 'Университетская набережная, Васильевский остров; привезены из Египта в 1832 году'], ['Атланты', 'портик Нового Эрмитажа, Миллионная улица'], ['Грифоны', 'Банковский мост, канал Грибоедова (1826)'], ['Роман', '«Резонанс любви»']],
    b: `## В действительности

- **Сфинксы** на Университетской набережной — подлинные египетские, им больше трёх тысяч лет, у них лицо фараона Аменхотепа III. В Петербург их привезли в 1832 году.
- **Атланты** — десять гранитных фигур, поддерживающих портик Нового Эрмитажа на Миллионной улице, в двух шагах от Дворцовой площади. По местной примете, если потереть им палец ноги, будет удача.
- **Грифоны** с золотыми крыльями охраняют маленький Банковский мост через канал Грибоедова с 1826 года.

## В «Резонансе любви»

- Очевидцы утверждают, что на Васильевском острове «огромный каменный сфинкс двигался по набережной»; другой появляется на Миллионной.
- «По набережной шли два атланта»: в романе они начинают брать плату за проход к Дворцовой площади («Двести рублей за невозможное»).
- Луис признаётся Наталье, что «петербургским грифонам нас в обязательном порядке не обучают», глядя на четырёх грифонов Банковского моста, которые «будто охраняли переход через канал». Позже герои летят на грифонах между островами [[archipielago-memoria|архипелага памяти]].`
  }
});

A({
  id: 'casa-singer', type: 'historia', uni: 'resonancia', img: 'img/covers/rezonans-lyubvi.webp',
  novels: ['rezonans-lyubvi'],
  see: ['archipielago-memoria', 'dmitri-petrovich', 'san-petersburgo'],
  es: {
    t: 'Casa Singer (Dom Knigi)',
    s: 'El edificio modernista de la compañía Singer en la avenida Nevski, coronado por una cúpula de cristal con un globo. En Resonancia del amor es el centro de la red con la que Dmitri Petróvich quiere controlar la ciudad.',
    box: [['Ruso', 'Дом Зингера (Дом книги)'], ['Dirección', 'Avenida Nevski 28, San Petersburgo'], ['Construcción', '1902–1904, arquitecto Pável Siuzor'], ['Uso posterior', 'La gran librería Dom Knigi («Casa del Libro»)'], ['Novela', '*Resonancia del amor*']],
    b: `## En la realidad

La **Casa Singer** fue construida a principios del siglo XX como sede rusa de la compañía estadounidense de máquinas de coser. Su torre termina en una cúpula de cristal con un globo, frente a la catedral de Kazán. Durante gran parte del siglo XX albergó **Dom Knigi**, la «Casa del Libro», la librería más famosa de la ciudad.

## En Resonancia del amor

En el cuartel del Servicio, Dmitri Petróvich señala el mapa: «La Casa Singer. La casa de la compañía Singer. Después estuvo allí la Casa del Libro… La Casa Singer es la que mejor sirve para esto». Al final queda claro para qué: alrededor de su **cúpula de cristal** gira el nudo dorado del [[archipielago-memoria|archipiélago de la memoria]], y hacia ella se tienden los hilos que unen los museos arrancados del suelo. Un edificio dedicado a los libros, la memoria escrita de la ciudad, se convierte en el corazón de la trama.`
  },
  ru: {
    t: 'Дом Зингера (Дом книги)',
    s: 'Модерновое здание компании «Зингер» на Невском проспекте со стеклянным куполом и глобусом. В «Резонансе любви» это центр сети, с помощью которой Дмитрий Петрович хочет управлять городом.',
    box: [['Испанский', 'Casa Singer'], ['Адрес', 'Невский проспект, 28, Санкт-Петербург'], ['Постройка', '1902–1904, архитектор Павел Сюзор'], ['Позже', 'Дом книги'], ['Роман', '«Резонанс любви»']],
    b: `## В действительности

**Дом Зингера** построен в начале XX века как российская штаб-квартира американской компании швейных машин. Его башню венчает стеклянный купол с глобусом, напротив Казанского собора. Большую часть XX века в нём располагался **Дом книги** — самый известный книжный магазин города.

## В «Резонансе любви»

В штабе службы Дмитрий Петрович показывает на карту: «Дом Зингера. Дом компании „Зингер“. Позже там был Дом книги… Дом Зингера подходит для этого лучше всего». В финале становится ясно, для чего: над его **стеклянным куполом** вращается золотой узел [[archipielago-memoria|архипелага памяти]], и к нему тянутся нити, связывающие вырванные из земли музеи. Здание, посвящённое книгам — письменной памяти города, — становится сердцем сюжета.`
  }
});

A({
  id: 'rostov-yaroslavl', type: 'historia', uni: 'resonancia', img: 'img/covers/rezonans-lyubvi-3-protiv-mraka.webp',
  novels: ['rezonans-lyubvi-3-protiv-mraka', 'rezonans-lyubvi'],
  see: ['penumbra', 'espada-kladenets', 'galina-sergeevna', 'memoria-arquitectonica'],
  es: {
    t: 'Rostov Veliki, Yaroslavl y las cartas de corteza de abedul',
    s: 'Dos ciudades del Anillo de Oro ruso y un tipo de documento medieval real. En Contra la oscuridad, una muralla antigua de Rostov guarda una carta en corteza de abedul que lleva a la espada de Yaroslavl.',
    box: [['Ruso', 'Ростов Великий, Ярославль, берестяные грамоты'], ['Rostov Veliki', 'Una de las ciudades más antiguas de Rusia; kremlin del siglo XVII'], ['Yaroslavl', 'Ciudad a orillas del Volga'], ['Bereste', 'Cartas medievales escritas sobre corteza de abedul'], ['Novela', '*Contra la oscuridad*']],
    b: `## En la realidad

- **Rostov Veliki** («Rostov la Grande») es una de las ciudades más antiguas de Rusia, junto al lago Nero. Su kremlin del siglo XVII, con murallas, torres e iglesias, es uno de los conjuntos más bellos del **Anillo de Oro**.
- **Yaroslavl**, a orillas del Volga, es otra ciudad histórica del mismo itinerario.
- Las **cartas de corteza de abedul** (*берестяные грамоты*) son mensajes medievales grabados sobre corteza. Desde 1951 se han encontrado más de mil, sobre todo en Nóvgorod: cartas comerciales, notas familiares, incluso ejercicios escolares de un niño.

## En las novelas

- En *Contra la oscuridad*, la ruta de los héroes sigue el Anillo de Oro: Moscú → **Rostov Veliki**, con «el acertijo de la muralla antigua y la carta en corteza de abedul» («evidentemente no un objeto auténtico del museo, sino parte de un viejo escondite preparado por alguien que sabía de la Penumbra») → **Yaroslavl**, con la [[espada-kladenets|espada]] y la persecución hasta el Volga → regreso a Rostov.
- El dossier de la novela distingue lo real («Moscú, Rostov Veliki, Yaroslavl, el Volga y sus monumentos existen de verdad») de lo inventado (la Penumbra, el cristal, la espada mágica y el escondite).
- En *Resonancia del amor*, [[galina-sergeevna|Galina Serguéievna]], la resonante que habla con las esculturas, es de Rostov Veliki.`
  },
  ru: {
    t: 'Ростов Великий, Ярославль и берестяные грамоты',
    s: 'Два города Золотого кольца и настоящий тип средневекового документа. В «Против мрака» древняя стена Ростова хранит берестяную грамоту, ведущую к мечу Ярославля.',
    box: [['Испанский', 'Rostov Veliki y Yaroslavl'], ['Ростов Великий', 'один из древнейших городов России; кремль XVII века'], ['Ярославль', 'город на Волге'], ['Берестяные грамоты', 'средневековые письма на бересте'], ['Роман', '«Против мрака»']],
    b: `## В действительности

- **Ростов Великий** — один из древнейших городов России, на озере Неро. Его кремль XVII века со стенами, башнями и церквями — один из красивейших ансамблей **Золотого кольца**.
- **Ярославль** на Волге — ещё один исторический город этого маршрута.
- **Берестяные грамоты** — средневековые записи, процарапанные на бересте. С 1951 года их найдено больше тысячи, прежде всего в Новгороде: торговые письма, семейные записки, даже ученические упражнения мальчика.

## В романах

- В «Против мрака» маршрут героев идёт по Золотому кольцу: Москва → **Ростов Великий** с «загадкой древней стены и берестяной грамотой» («явно не подлинный музейный экспонат, а часть старого тайника, подготовленного кем-то, кто знал о Хмури») → **Ярославль** с [[espada-kladenets|мечом]] и погоней к Волге → возвращение в Ростов.
- Досье романа разделяет реальное («Москва, Ростов Великий, Ярославль, Волга и их исторические памятники существуют на самом деле») и вымышленное (Хмурь, кристалл, волшебный меч, тайник).
- В «Резонансе любви» [[galina-sergeevna|Галина Сергеевна]], резонант, разговаривающая со скульптурами, — из Ростова Великого.`
  }
});

A({
  id: 'chaikovski', type: 'historia', uni: 'multiverso', img: 'img/covers/severnaya-lyubov.webp',
  novels: [],
  see: ['robert-fader', 'musica', 'moscu'],
  es: {
    t: 'Piotr Chaikovski y El cascanueces',
    s: 'El compositor ruso cuya música llevó al autor de niño a imaginar Rusia. Según el propio Robert Fader, sin la suite de El cascanueces su historia con Rusia, y con ella buena parte del multiverso, no habría empezado.',
    box: [['Ruso', 'Пётр Чайковский'], ['Vida', '1840–1893'], ['Obra citada', '*El cascanueces* (1892)'], ['Fuente', 'Entrevista con el autor en el blog de Litmir']],
    b: `## En la historia

**Piotr Ilich Chaikovski** es uno de los compositores rusos más universales: *El lago de los cisnes*, *La bella durmiente*, sus sinfonías y conciertos. ***El cascanueces***, estrenado en San Petersburgo en 1892, se basa en un cuento de E. T. A. Hoffmann y se ha convertido en la música de la Navidad para medio mundo.

## Para el autor

En una entrevista en ruso, [[robert-fader|Robert Fader]] cuenta que su relación con Rusia empezó así: de niño, su madre le regaló una revista de música clásica con un disco de Chaikovski, y la suite de *El cascanueces* le hizo imaginar el invierno ruso, «mágico, romántico y hermoso». Aclara que sabe que la historia del cascanueces viene de la literatura alemana, pero que fue la música del compositor ruso la que creó esa imagen.

## En el multiverso

La huella se nota: el invierno nevado de Moscú en *El misterio de los Fader* y *La gran conspiración*, la Ustiug helada de *Los cisnes enamorados*, los cisnes de cristal y el papel central de la [[musica|música]] en casi todos los universos.`
  },
  ru: {
    t: 'Пётр Чайковский и «Щелкунчик»',
    s: 'Русский композитор, чья музыка заставила маленького автора представить себе Россию. По словам самого Роберта Фадера, без сюиты из «Щелкунчика» его история с Россией — а с ней и большая часть мультивселенной — не началась бы.',
    box: [['Испанский', 'Piotr Chaikovski'], ['Годы жизни', '1840–1893'], ['Произведение', '«Щелкунчик» (1892)'], ['Источник', 'интервью с автором в блоге «Литературного мира»']],
    b: `## В истории

**Пётр Ильич Чайковский** — один из самых известных в мире русских композиторов: «Лебединое озеро», «Спящая красавица», симфонии и концерты. **«Щелкунчик»**, впервые поставленный в Петербурге в 1892 году, основан на сказке Э. Т. А. Гофмана и стал рождественской музыкой для половины мира.

## Для автора

В интервью [[robert-fader|Роберт Фадер]] рассказывает, что его отношения с Россией начались так: в детстве мама подарила ему журнал о классической музыке с диском Чайковского, и сюита из «Щелкунчика» помогла ему представить русскую зиму — «волшебную, романтическую и прекрасную». Он оговаривается, что знает: история Щелкунчика связана с немецкой литературой, — но именно музыка русского композитора создала для него этот образ.

## В мультивселенной

След заметен: заснеженная Москва в «Тайне семьи Фадер» и «La gran conspiración», ледяной Устюг во «Влюблённых лебедях», хрустальные лебеди и центральная роль [[musica|музыки]] почти во всех вселенных.`
  }
});

/* ---------- Serbia ---------- */

A({
  id: 'kalemegdan-nebojsa', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/divlji-chas.webp',
  novels: ['dikij-chas', 'divlji-chas', 'anomalnyj-chas', 'la-savo-de-zmaj', 'divlji-chas-7'],
  see: ['belgrado', 'la-hora-salvaje', 'artan', 'vuk-grgurevic'],
  es: {
    t: 'Fortaleza de Kalemegdan y torre Nebojša',
    s: 'La fortaleza de Belgrado sobre la confluencia del Sava y el Danubio, y su torre medieval junto al río. En La hora salvaje la torre es la guarida de los conspiradores y Kalemegdan, el lugar donde empiezan y terminan las historias.',
    box: [['Ruso', 'Калемегдан и башня Небойша'], ['Lugar', '[[belgrado|Belgrado]]'], ['Nebojša', 'Torre de defensa del siglo XV junto al Danubio'], ['Nombre', '*Nebojša*: «no temas»'], ['Novelas', '*La hora salvaje*, *La hora anómala*, *El rescate de Zmaj*, *La hora salvaje 7*']],
    b: `## En la historia

- **Kalemegdan** es el nombre del parque que rodea la **fortaleza de Belgrado**, levantada sobre el promontorio donde el Sava desemboca en el Danubio. Romanos, bizantinos, serbios, húngaros, otomanos y austríacos la disputaron durante siglos; fue escenario de batallas como el sitio de 1456.
- La **torre Nebojša** («no temas») se construyó en el siglo XV junto al Danubio para proteger el puerto. Los otomanos la usaron como prisión; en ella murió en 1798 el poeta y revolucionario griego Rigas Feraios. Hoy es museo.
- La fortaleza también está ligada al **Primer Levantamiento Serbio** (1804–1813) de Karađorđe, que liberó Belgrado de los otomanos durante unos años.

## En las novelas

- **La torre Nebojša** es la base de la conspiración de [[artan|Artan]], Sofía y John: sus muros «parecían absorber no solo el frío, sino también las decisiones ajenas tomadas allí antes».
- **Kalemegdan** da título a un capítulo («Kalemegdan, el primer lugar»). Allí despierta Luis al final de [[hora-anomala|La hora anómala]], con los dos ríos a sus pies; desde sus murallas empieza *El rescate de Zmaj*; y desde ellas ven Luis y Natasha un dirigible fantasma sobre Nuevo Belgrado en *La hora salvaje 7*.
- En *La hora salvaje 7* aparece un objeto que, según dicen, «se forjó en tiempos del Primer Levantamiento Serbio, por un maestro que trabajaba para el mismísimo Karađorđe».`
  },
  ru: {
    t: 'Крепость Калемегдан и башня Небойша',
    s: 'Белградская крепость над слиянием Савы и Дуная и её средневековая башня у реки. В «Диком часе» башня — логово заговорщиков, а Калемегдан — место, где истории начинаются и заканчиваются.',
    box: [['Испанский', 'Kalemegdan y Nebojša'], ['Место', '[[belgrado|Белград]]'], ['Небойша', 'оборонительная башня XV века у Дуная'], ['Название', '«Небойша» — «не бойся»'], ['Романы', '«Дикий час», «Аномальный час», «Спасение Змая», «Дикий час 7»']],
    b: `## В истории

- **Калемегдан** — парк вокруг **Белградской крепости**, стоящей на мысу, где Сава впадает в Дунай. Римляне, византийцы, сербы, венгры, османы и австрийцы веками боролись за неё; здесь шли сражения вроде осады 1456 года.
- **Башня Небойша** («не бойся») построена в XV веке у Дуная для защиты порта. Османы использовали её как тюрьму; в ней в 1798 году погиб греческий поэт и революционер Ригас Фереос. Сегодня это музей.
- Крепость связана и с **Первым сербским восстанием** (1804–1813) Карагеоргия, на несколько лет освободившим Белград от османов.

## В романах

- **Башня Небойша** — штаб заговора [[artan|Артана]], Софии и Джона: её стены «будто впитывали не только холод, но и чужие решения, принятые здесь раньше».
- **Калемегдан** даёт название главе («Калемегдан — первое место»). Здесь просыпается Луис в финале «[[hora-anomala|Аномального часа]]», глядя на две реки; со стен крепости начинается «Спасение Змая»; отсюда Луис и Наташа видят призрачный дирижабль над Новым Белградом в «Диком часе 7».
- В «Диком часе 7» появляется предмет, который, по преданию, «выкован во время Первого сербского восстания мастером, работавшим на самого Карагеоргия».`
  }
});

A({
  id: 'vuk-grgurevic', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/la-savo-de-zmaj.webp',
  novels: ['dikij-chas', 'divlji-chas'],
  see: ['dragon-lobo', 'zmaj', 'kalemegdan-nebojsa'],
  es: {
    t: 'Vuk Grgurević, el Zmaj Ognjeni Vuk histórico',
    s: 'Déspota serbio del siglo XV, guerrero al servicio de Hungría contra los otomanos, que la poesía épica convirtió en Zmaj Ognjeni Vuk, el «Dragón-Lobo de Fuego». De esa leyenda nace Zmaj, el dragón de La hora salvaje.',
    box: [['Ruso', 'Вук Гргуревич (Змей Огненный Волк)'], ['Serbio', 'Вук Гргуревић Бранковић'], ['Murió', '1485'], ['Título', 'Déspota de Serbia (al servicio del rey Matías Corvino)'], ['En la épica', 'Змај Огњени Вук'], ['En las novelas', '[[zmaj|Zmaj]]']],
    b: `## En la historia

**Vuk Grgurević**, de la dinastía Branković, fue un noble serbio que, tras la caída del Estado serbio bajo los otomanos, sirvió al rey Matías Corvino de Hungría, que le dio el título de déspota de Serbia. Combatió durante años contra los turcos y murió en 1485. Su valentía lo convirtió en héroe de la poesía popular, donde aparece como **Zmaj Ognjeni Vuk**, «el Dragón-Lobo de Fuego»: hijo de un dragón, nacido con marcas de lobo y de fuego.

## En La hora salvaje

La saga toma la figura legendaria, no la histórica. El libro de leyendas que Natasha le roba a Sofía dice que, cuando el mundo entra en la Hora salvaje, solo hay una forma de detener la destrucción: «invocar a la criatura antigua, el Dragón-Lobo de Fuego». El ser que despierta es [[zmaj|Zmaj]], que se define como «la voluntad de Serbia que tomó forma cuando las palabras ya no servían». Ver [[dragon-lobo|Dragón-Lobo de Fuego]].`
  },
  ru: {
    t: 'Вук Гргуревич — исторический Змей Огненный Волк',
    s: 'Сербский деспот XV века, воевавший на стороне Венгрии против османов, которого народный эпос превратил в Змея Огненного Волка. Из этой легенды рождается Змай, дракон «Дикого часа».',
    box: [['Испанский', 'Vuk Grgurević'], ['Сербский', 'Вук Гргуревић Бранковић'], ['Умер', '1485'], ['Титул', 'деспот Сербии (на службе у короля Матьяша Корвина)'], ['В эпосе', 'Змај Огњени Вук'], ['В романах', '[[zmaj|Змай]]']],
    b: `## В истории

**Вук Гргуревич** из династии Бранковичей — сербский вельможа, который после падения Сербского государства служил венгерскому королю Матьяшу Корвину и получил от него титул деспота Сербии. Он много лет сражался с турками и умер в 1485 году. Храбрость сделала его героем народных песен, где он стал **Змаем Огненным Волком**: сыном дракона, родившимся с волчьими и огненными знаками.

## В «Диком часе»

Сага берёт легендарный образ, а не исторический. Книга легенд, которую Наташа крадёт у Софии, говорит: когда мир входит в Дикий час, остановить разрушение можно только «призывом древнего существа — Змея Огненного Волка». Просыпается [[zmaj|Змай]], который называет себя «волей Сербии, принявшей форму, когда слова больше не помогали». См. [[dragon-lobo|Змей Огненный Волк]].`
  }
});

/* ---------- Italia, Polonia, fútbol ---------- */

A({
  id: 'dandolo', type: 'historia', uni: 'venecia', img: 'img/chars/marco-dandolo-1.webp',
  novels: ['venecianskaya-maska', 'maschera-di-venezia'],
  see: ['marco-dandolo', 'mascara-venecia', 'orden-veneciana'],
  es: {
    t: 'Los Dandolo y los dux de Venecia',
    s: 'Una de las grandes familias de la República de Venecia, que dio cuatro dux. En Máscara de Venecia, su heredero ficticio Marco Dandolo reclama la Máscara como nieto del «último dux».',
    box: [['Ruso', 'Дандоло и венецианские дожи'], ['Dux más célebre', 'Enrico Dandolo (dux 1192–1205), Cuarta Cruzada'], ['Último dux real', 'Ludovico Manin, 1797'], ['Personaje ficticio', '[[marco-dandolo|Marco Dandolo]]']],
    b: `## En la historia

El **dux** fue el jefe de Estado de la República de Venecia durante más de mil años, hasta que Napoleón la puso fin en 1797; el último fue Ludovico Manin. Los **Dandolo** dieron cuatro dux, entre ellos **Enrico Dandolo**, que, anciano y casi ciego, dirigió la flota veneciana en la Cuarta Cruzada y el saqueo de Constantinopla en 1204.

## En Máscara de Venecia

En la sala secreta de la Orden, un joven anuncia: «Soy Marco Dandolo», y la sala contiene el aliento. Se presenta como nieto del último dux, pero no del histórico: en la versión italiana dice que su abuelo fue «el último dux antes de que las aguas se tragaran la verdadera Venecia». La novela inventa así una historia secreta de la ciudad, con una Venecia sumergida, y une a ella un apellido real para darle peso. Con un medallón de oro, [[marco-dandolo|Marco]] exige la [[mascara-venecia|Máscara]] por derecho de sangre.`
  },
  ru: {
    t: 'Дандоло и венецианские дожи',
    s: 'Один из великих родов Венецианской республики, давший четырёх дожей. В «Венецианской маске» вымышленный наследник Марко Дандоло требует Маску как внук «последнего дожа».',
    box: [['Испанский', 'Los Dandolo'], ['Самый известный дож', 'Энрико Дандоло (1192–1205), Четвёртый крестовый поход'], ['Последний настоящий дож', 'Лудовико Манин, 1797'], ['Вымышленный персонаж', '[[marco-dandolo|Марко Дандоло]]']],
    b: `## В истории

**Дож** более тысячи лет был главой Венецианской республики, пока в 1797 году её не упразднил Наполеон; последним дожем был Лудовико Манин. Род **Дандоло** дал четырёх дожей, среди них **Энрико Дандоло**, который, глубоким стариком и почти слепым, возглавил венецианский флот в Четвёртом крестовом походе и разграблении Константинополя в 1204 году.

## В «Венецианской маске»

В тайном зале Ордена молодой человек объявляет: «Я — Марко Дандоло», — и зал замирает. Он называет себя внуком последнего дожа, но не исторического: в итальянской версии он говорит, что его дед был «последним дожем до того, как воды поглотили настоящую Венецию». Роман придумывает тайную историю города с затонувшей Венецией и привязывает к ней настоящую фамилию, чтобы придать ей вес. С золотым медальоном [[marco-dandolo|Марко]] требует [[mascara-venecia|Маску]] по праву крови.`
  }
});

A({
  id: 'botticelli', type: 'historia', uni: 'otros', img: 'img/covers/ladro-di-cuori.webp',
  novels: ['pokhititel-serdec', 'ladro-di-cuori', 'ladro-di-cuori-2', 'la-nevicata-rosa'],
  see: ['alessio', 'laura-bellini'],
  es: {
    t: 'Sandro Botticelli',
    s: 'El pintor del Renacimiento florentino, autor de La primavera y El nacimiento de Venus. En Ladrón de corazones, un cuadro desconocido atribuido a él, «El Verano», es el botín que une a Alessio y Laura… y los pone en la mira de Interpol.',
    box: [['Ruso', 'Сандро Боттичелли'], ['Vida', 'c. 1445–1510, Florencia'], ['Obras reales', '*La primavera*, *El nacimiento de Venus* (Galería Uffizi)'], ['Obra ficticia', '«El Verano»'], ['Novelas', '*Ladrón de corazones* 1 y 2']],
    b: `## En la historia

**Sandro Botticelli** fue uno de los pintores más importantes del Renacimiento en Florencia, protegido por los Médici. Sus obras más famosas, *La primavera* y *El nacimiento de Venus*, están en la **Galería Uffizi**. Tras siglos de olvido, fue redescubierto en el siglo XIX y hoy es uno de los artistas más reconocibles del mundo.

## En las novelas

- En *Ladrón de corazones*, Sofia Ricci, amiga de Laura Bellini, posee **«El Verano»**, un cuadro atribuido a Botticelli. Alessio se pregunta por qué una obra así es desconocida para el gran público; si de verdad fuera de Botticelli, «su precio sería casi imposible de expresar en cifras normales».
- En *Ladrón de corazones 2*, Alessio y Claudia viven en Málaga con nombres nuevos, lejos de un periódico con el titular: «Desaparecida una obra maestra de Botticelli: Interpol busca a los sospechosos».
- *La nieve rosa*, también en Florencia, mezcla arte y misterio con el director de los Uffizi y una secta que quiere robar los colores del mundo.

> «El Verano» no existe: es una invención de la novela.`
  },
  ru: {
    t: 'Сандро Боттичелли',
    s: 'Художник флорентийского Возрождения, автор «Весны» и «Рождения Венеры». В «Похитителе сердец» неизвестная картина, приписываемая ему, — «Лето» — становится добычей, которая связывает Алессио и Лауру… и привлекает к ним Интерпол.',
    box: [['Испанский', 'Sandro Botticelli'], ['Годы жизни', 'ок. 1445–1510, Флоренция'], ['Настоящие работы', '«Весна», «Рождение Венеры» (галерея Уффици)'], ['Вымышленная работа', '«Лето»'], ['Романы', '«Похититель сердец» 1 и 2']],
    b: `## В истории

**Сандро Боттичелли** — один из важнейших художников флорентийского Возрождения, работавший под покровительством Медичи. Его самые известные картины — «Весна» и «Рождение Венеры» — хранятся в **галерее Уффици**. После веков забвения его заново открыли в XIX веке, и сегодня он один из самых узнаваемых художников мира.

## В романах

- В «Похитителе сердец» София Риччи, подруга Лауры Беллини, владеет картиной **«Лето»**, приписываемой Боттичелли. Алессио спрашивает себя, почему такая работа неизвестна широкой публике: если картина действительно принадлежит Боттичелли, «её цену почти невозможно выразить обычными цифрами».
- В «Ladro di cuori 2» Алессио и Клаудия живут в Малаге под новыми именами, подальше от газеты с заголовком: «Пропал шедевр Боттичелли: Интерпол ищет подозреваемых».
- «La Nevicata Rosa», тоже во Флоренции, соединяет искусство и тайну: директор Уффици и секта, которая хочет украсть у мира его цвета.

> «Лета» не существует — это вымысел романа.`
  }
});

A({
  id: 'museos-vaticanos', type: 'historia', uni: 'otros', img: 'img/covers/antonio-e-il-segreto-di-roma.webp',
  novels: ['antonio-e-il-segreto-di-roma', 'lux-pacis'],
  see: ['marcos', 'alicia'],
  es: {
    t: 'Los Museos Vaticanos',
    s: 'Uno de los museos más visitados del mundo, con la Capilla Sixtina de Miguel Ángel. En Antonio y el secreto de Roma desaparece de allí el Cáliz de Oro de los Papas; en Lux Pacis, una reliquia del Vaticano separa a Marcus y Alicia.',
    box: [['Ruso', 'Музеи Ватикана'], ['Lugar', 'Ciudad del Vaticano, Roma'], ['Obra célebre', 'Capilla Sixtina (Miguel Ángel)'], ['Objeto ficticio', 'El Cáliz de Oro de los Papas'], ['Novelas', '*Antonio e il segreto di Roma*, *Lux Pacis*']],
    b: `## En la realidad

Los **Museos Vaticanos** reúnen las colecciones de arte de los papas, iniciadas a principios del siglo XVI. Su recorrido termina en la **Capilla Sixtina**, con la bóveda y el *Juicio Final* de **Miguel Ángel**. Reciben millones de visitantes al año.

## En las novelas

- En *Antonio e il segreto di Roma*, el pizzero de Trastevere Antonio entra por primera vez en los Museos Vaticanos y conoce a Larissa, una joven rusa culta. Para conquistarla le promete contarle «todos los secretos de Roma». Al día siguiente desaparece el **Cáliz de Oro de los Papas** y la policía lo busca a él; su primo Paolo es vigilante del museo y su amiga Sofía, guía. Los amigos lo despiden con una broma: «¡Buena suerte, Casanova!».
- En *Lux Pacis* (en latín), el investigador Marcus estudia el robo de una reliquia preciosa del Vaticano y descubre que la ladrona es Alicia, la mujer a la que ama.

> El Cáliz de Oro y las reliquias robadas son invenciones de las novelas.`
  },
  ru: {
    t: 'Музеи Ватикана',
    s: 'Один из самых посещаемых музеев мира с Сикстинской капеллой Микеланджело. В «Антонио и тайне Рима» оттуда исчезает Золотая чаша пап; в «Lux Pacis» реликвия из Ватикана разлучает Маркуса и Алисию.',
    box: [['Испанский', 'Museos Vaticanos'], ['Место', 'Ватикан, Рим'], ['Известная работа', 'Сикстинская капелла (Микеланджело)'], ['Вымышленный предмет', 'Золотая чаша пап'], ['Романы', '«Antonio e il segreto di Roma», «Lux Pacis»']],
    b: `## В действительности

**Музеи Ватикана** объединяют художественные собрания пап, начатые в начале XVI века. Маршрут заканчивается в **Сикстинской капелле** с плафоном и «Страшным судом» **Микеланджело**. Каждый год их посещают миллионы людей.

## В романах

- В «Antonio e il segreto di Roma» пиццайоло из Трастевере Антонио впервые попадает в Музеи Ватикана и знакомится с Ларисой, образованной русской девушкой. Чтобы покорить её, он обещает рассказать ей «все тайны Рима». На следующий день исчезает **Золотая чаша пап**, и полиция ищет именно его; его двоюродный брат Паоло — охранник музея, а подруга София — экскурсовод. Друзья провожают его шуткой: «Удачи, Казанова!»
- В «Lux Pacis» (на латыни) следователь Маркус расследует кражу драгоценной реликвии в Ватикане и узнаёт, что воровка — Алисия, женщина, которую он любит.

> Золотая чаша и украденные реликвии — вымысел романов.`
  }
});

A({
  id: 'maradona', type: 'historia', uni: 'hora-salvaje', img: 'img/covers/epicheskij-match.webp',
  novels: ['epicheskij-match'],
  see: ['seleccion-humanidad', 'epic-match', 'fafi'],
  es: {
    t: 'Diego Maradona',
    s: 'El futbolista argentino campeón del mundo en 1986. En El partido épico, en el capítulo «Todos quieren ser Diego», todos los jugadores de la Selección de la Humanidad quieren ser Maradona a la vez.',
    box: [['Ruso', 'Диего Марадона'], ['Vida', '1960–2020'], ['Hito', 'Campeón del mundo en México 1986'], ['Capítulo', '«Все хотят быть Диего» («Todos quieren ser Diego»)']],
    b: `## En la historia

**Diego Armando Maradona**, nacido en Villa Fiorito, fue capitán de la Argentina campeona del mundo en **México 1986**, donde marcó contra Inglaterra la «mano de Dios» y el «gol del siglo». Fue ídolo en Boca Juniors y en el Nápoles. Para muchos argentinos es más que un futbolista.

## En El partido épico

Cuando nace la [[seleccion-humanidad|Selección de la Humanidad]], el quinto capítulo, «Todos quieren ser Diego», convierte el mito en comedia: los jugadores gritan uno tras otro «¡Maradona!». Alguien advierte que, si todo el equipo juega como Maradona, «no vamos a tener una selección, sino una cola para entrar en una leyenda personal». Otro anuncia que está «dispuesto a ser Maradona el primero».

La escena resume el espíritu del libro: un equipo que solo funciona si cada uno deja de querer ser el héroe.`
  },
  ru: {
    t: 'Диего Марадона',
    s: 'Аргентинский футболист, чемпион мира 1986 года. В «Эпическом матче», в главе «Все хотят быть Диего», все игроки сборной Человечества одновременно хотят быть Марадоной.',
    box: [['Испанский', 'Diego Maradona'], ['Годы жизни', '1960–2020'], ['Главное достижение', 'чемпион мира в Мексике, 1986'], ['Глава', '«Все хотят быть Диего»']],
    b: `## В истории

**Диего Армандо Марадона** из Вилья-Фьорито был капитаном сборной Аргентины, ставшей чемпионом мира в **Мексике в 1986 году**, где в матче с Англией забил «рукой Бога» и «гол века». Кумир «Боки Хуниорс» и «Наполи». Для многих аргентинцев он больше чем футболист.

## В «Эпическом матче»

Когда рождается [[seleccion-humanidad|сборная Человечества]], пятая глава — «Все хотят быть Диего» — превращает миф в комедию: игроки один за другим кричат «Марадона!». Кто-то предупреждает: если вся команда будет играть как Марадона, «у нас получится не сборная, а очередь в личную легенду». Другой объявляет, что «готов быть Марадоной первым».

Сцена выражает дух книги: команда работает, только если каждый перестаёт хотеть быть героем.`
  }
});

A({
  id: 'levantamiento-varsovia', type: 'historia', uni: 'otros', img: 'img/covers/przeczucie.webp',
  novels: ['cien-bazyliszka'],
  see: ['multiverso'],
  es: {
    t: 'Varsovia: la Sirenita, el Levantamiento de 1944 y el Palacio de Stalin',
    s: 'Tres huellas reales de la historia de Varsovia que sostienen el misterio de La sombra del basilisco: la estatua de la Sirenita, el Levantamiento de agosto de 1944 y el Palacio de la Cultura, «regalo de Stalin».',
    box: [['Ruso', 'Варшава: Русалочка, восстание 1944 года и дворец Сталина'], ['Sirenita', 'Estatua de la plaza del Mercado de la Ciudad Vieja'], ['Levantamiento', '1 de agosto – 2 de octubre de 1944'], ['Palacio', 'Palacio de la Cultura y la Ciencia, 1955'], ['Leyenda', 'El basilisco de Varsovia'], ['Novela', '*Cień Bazyliszka*']],
    b: `## En la historia

- **La Sirenita** (*Syrenka*) es el símbolo de Varsovia; su estatua de bronce del siglo XIX preside la plaza del Mercado de la Ciudad Vieja.
- **El Levantamiento de Varsovia** comenzó el 1 de agosto de 1944: el Ejército Nacional polaco se alzó contra la ocupación alemana. Tras 63 días de combates, la ciudad fue arrasada y decenas de miles de personas murieron.
- **El Palacio de la Cultura y la Ciencia**, terminado en 1955, fue un «regalo» de la Unión Soviética de Stalin al pueblo polaco y sigue dominando el horizonte de la ciudad.
- Según una leyenda local, un **basilisco** que mataba con la mirada vivía en un sótano del casco antiguo.

## En La sombra del basilisco

Un fotógrafo de Nueva York y una periodista de Cracovia llegan a Varsovia para hacer un reportaje sobre leyendas polacas. Esa misma noche **desaparece la Sirenita**, y en el pedestal vacío alguien dibuja un basilisco con tiza: «No lo mires a los ojos». Un hombre de sombrero negro, un sótano lleno de espejos y **una foto de agosto de 1944** («Ella estuvo en el Levantamiento de Varsovia») los llevan a la historia de la familia de Zosia. El Palacio aparece con su apodo: «Un regalo de Stalin».`
  },
  ru: {
    t: 'Варшава: Русалочка, восстание 1944 года и дворец Сталина',
    s: 'Три настоящих следа истории Варшавы, на которых держится тайна «Тени василиска»: статуя Русалочки, восстание августа 1944 года и Дворец культуры — «подарок Сталина».',
    box: [['Испанский', 'Varsovia: Syrenka, 1944'], ['Русалочка', 'статуя на Рыночной площади Старого города'], ['Восстание', '1 августа — 2 октября 1944 года'], ['Дворец', 'Дворец культуры и науки, 1955'], ['Легенда', 'варшавский василиск'], ['Роман', '«Cień Bazyliszka»']],
    b: `## В истории

- **Русалочка** (*Syrenka*) — символ Варшавы; её бронзовая статуя XIX века стоит на Рыночной площади Старого города.
- **Варшавское восстание** началось 1 августа 1944 года: Армия Крайова поднялась против немецкой оккупации. После 63 дней боёв город был разрушен, погибли десятки тысяч людей.
- **Дворец культуры и науки**, достроенный в 1955 году, был «подарком» сталинского Советского Союза польскому народу и до сих пор доминирует над городом.
- По местной легенде, в подвале Старого города жил **василиск**, убивавший взглядом.

## В «Тени василиска»

Фотограф из Нью-Йорка и журналистка из Кракова приезжают в Варшаву снимать репортаж о польских легендах. В ту же ночь **исчезает Русалочка**, а на пустом постаменте кто-то рисует мелом василиска: «Не смотри ему в глаза». Мужчина в чёрной шляпе, подвал, полный зеркал, и **фотография августа 1944 года** («Она была в Варшавском восстании») ведут их в историю семьи Зоси. Дворец появляется под своим прозвищем: «Подарок Сталина».`
  }
});
