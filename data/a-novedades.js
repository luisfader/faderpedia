// Novedades de litmir (octubre de 2026): artículos nuevos y ampliaciones de artículos existentes.
// Las ampliaciones se añaden al final del cuerpo con addTo(), sin reescribir el texto original.
window.ARTICLES = window.ARTICLES || [];
window.A = window.A || function (a) { window.ARTICLES.push(a); };
window.addTo = function (id, es, ru, boxEs, boxRu) {
  var a = window.ARTICLES.filter(function (x) { return x.id === id; })[0];
  if (!a) return;
  if (es) a.es.b += '\n\n' + es;
  if (ru) a.ru.b += '\n\n' + ru;
  if (boxEs) a.es.box = (a.es.box || []).concat(boxEs);
  if (boxRu) a.ru.box = (a.ru.box || []).concat(boxRu);
};

/* ---------- Praga ---------- */

A({
  id: 'praga', type: 'universo', uni: 'praga', img: 'img/covers/ostrovy-nad-prahou.webp', series: 'prazske-podzemi',
  novels: ['podzemni-tajemstvi', 'ostrovy-nad-prahou', 'misteroj-sub-parizo'],
  see: ['jana', 'faderpedie', 'cernobog', 'luis'],
  es: {
    t: 'El subsuelo de Praga',
    s: 'Ciclo de novelas en checo y esperanto para estudiantes: Luis, un músico argentino, y Jana, una joven de Praga, descubren una segunda ciudad bajo la ciudad, con una princesa triste, un corazón de piedra y un dios de la oscuridad que la quiere para sí.',
    box: [['Checo', 'Pražské podzemí'], ['Series en litmir', '«El subsuelo de Praga» y «Luis y Jana»'], ['Protagonistas', 'Luis y [[jana|Jana]]'], ['Amigos', 'Mark, detective y fotógrafo; Lucie, guía'], ['Escenarios', 'Praga, París'], ['Amenaza', '[[cernobog|Černobog]]'], ['Nivel', 'A1–B1']],
    b: `**El subsuelo de Praga** (*Pražské podzemí*) es el universo checo del [[multiverso|multiverso]], escrito para quienes aprenden checo, con vocabulario en cada capítulo. Su idea central: bajo la Praga que todos conocen hay **otra Praga, más antigua y secreta**, y en su centro late un **corazón de piedra**. Mientras ese corazón late, vive también la ciudad de arriba.

## Las novelas

- **Podzemní tajemství** («El secreto subterráneo») — Luis, músico argentino, conoce a [[jana|Jana]] en una cafetería de Praga. Con Mark, detective y fotógrafo, y la guía Lucie baja al subsuelo, donde su música despierta a la triste princesa Ludmila. La salvación de la ciudad depende de una falda bordó bordada a mano.
- **Misteroj sub Parizo** (en esperanto) — Luis y Jana viajan a París de vacaciones románticas; una melodía desconocida y una mujer extraña los llevan a las catacumbas que despiertan.
- **Ostrovy nad Prahou** («Islas sobre Praga», en curso) — Lucie y Mark se van de vacaciones a China. Tras una noche romántica junto al Moldava, Luis y Jana amanecen con **cinco islas de piedra con castillos negros** sobre la ciudad. Cadenas enormes, del tamaño de un tranvía cada eslabón, las atan a los cinco corazones de Praga y beben su energía: las lámparas se apagan, los relojes se paran, los teléfonos se descargan a ojos vista. Luis busca respuesta en su [[faderpedie|Faderpedie]] y encuentra la leyenda de [[cernobog|Černobog]]. Praga tiene tres días.

## Detalles

- El último capítulo publicado de *Ostrovy nad Prahou* se titula precisamente «Faderpedie».
- Jana existe también, con otra vida, en *Předtucha*, la versión checa de la Utopía (ver [[jana-predtucha|Jana en Předtucha]]).`
  },
  ru: {
    t: 'Пражское подземелье',
    s: 'Цикл романов на чешском и эсперанто для изучающих язык: аргентинский музыкант Луис и пражанка Яна открывают второй город под городом — с грустной принцессой, каменным сердцем и богом тьмы, который хочет забрать его себе.',
    box: [['Чешский', 'Pražské podzemí'], ['Серии в «Литературном мире»', '«Пражское подземелье» и «Луис и Яна»'], ['Герои', 'Луис и [[jana|Яна]]'], ['Друзья', 'Марк — детектив и фотограф; Люция — экскурсовод'], ['Места', 'Прага, Париж'], ['Угроза', '[[cernobog|Чернобог]]'], ['Уровень', 'A1–B1']],
    b: `**«Пражское подземелье»** (*Pražské podzemí*) — чешская вселенная [[multiverso|мультивселенной]], написанная для изучающих чешский, со словарём к каждой главе. Главная идея: под знакомой всем Прагой лежит **другая Прага, древнее и таинственнее**, а в её центре бьётся **каменное сердце**. Пока оно бьётся, живёт и город наверху.

## Романы

- **Podzemní tajemství** («Подземная тайна») — Луис, музыкант из Аргентины, знакомится с [[jana|Яной]] в пражском кафе. Вместе с детективом и фотографом Марком и экскурсоводом Люцией он спускается в подземелье, где его музыка будит грустную принцессу Людмилу. Спасение города зависит от бордовой юбки, вышитой вручную.
- **Misteroj sub Parizo** (на эсперанто) — Луис и Яна едут в Париж на романтические каникулы; незнакомая мелодия и странная женщина приводят их к пробуждающимся катакомбам.
- **Ostrovy nad Prahou** («Острова над Прагой», пишется) — Люция и Марк уезжают в отпуск в Китай. После романтической ночи у Влтавы Луис и Яна просыпаются и видят над городом **пять каменных островов с чёрными замками**. Огромные цепи — каждое звено размером с трамвай — привязывают их к пяти сердцам Праги и пьют её силу: гаснут лампы, останавливаются часы, телефоны разряжаются на глазах. Луис ищет ответ в своей [[faderpedie|Фадерпедии]] и находит легенду о [[cernobog|Чернобоге]]. У Праги три дня.

## Подробности

- Последняя опубликованная глава «Ostrovy nad Prahou» так и называется — «Faderpedie».
- Яна существует и в другой жизни — в «Předtucha», чешской версии Утопии (см. [[jana-predtucha|Яна в «Předtucha»]]).`
  }
});

A({
  id: 'faderpedie', type: 'concepto', uni: 'praga', img: 'img/covers/ostrovy-nad-prahou.webp',
  novels: ['ostrovy-nad-prahou'],
  see: ['praga', 'cernobog', 'luis', 'robert-fader'],
  es: {
    t: 'Faderpedie (la enciclopedia de Luis)',
    s: 'La enciclopedia secreta que Luis lleva en su tableta en Ostrovy nad Prahou: miles de artículos sobre misterios y leyendas del mundo. En ella encuentra la leyenda de Černobog. Comparte nombre con esta enciclopedia.',
    box: [['Checo', 'Faderpedie'], ['Autor (en la ficción)', 'Luis'], ['Soporte', 'Una tableta'], ['Empezada', 'En Argentina, cuando Luis era estudiante'], ['Contenido', 'Misterios, leyendas, lugares secretos, sucesos extraños'], ['Artículo clave', '«Temný pán (Černoboh)»'], ['Capítulo', '«Faderpedie»']],
    b: `En el cuarto capítulo de *Ostrovy nad Prahou*, con cinco castillos negros colgando sobre la ciudad y la batería del teléfono cayendo a ojos vista, Luis mira la bolsa del rincón: «En la bolsa tenía la tableta. Y en la tableta tenía la **Faderpedie**».

## Qué es

> «La Faderpedie era su enciclopedia secreta. Reunía en ella todo lo que encontraba sobre misterios, viejas leyendas, lugares secretos y sucesos extraños. La empezó en Argentina, cuando todavía era estudiante. Con los años tenía miles de artículos sobre leyendas de todo el mundo. Y desde septiembre escribía casi solo sobre Praga: sobre la princesa Ludmila, sobre Luboš y sobre el corazón de piedra bajo la ciudad. Cuando nadie más sabía la respuesta, la Faderpedie a veces la sabía.»

## La búsqueda

Luis escribe «islas voladoras, castillos, cadenas, Praga»: nada. «Islas en el cielo, leyenda checa»: nada. Jana, mirando por encima de su hombro, le sugiere «cadenas y energía». Con «cadenas que beben la fuerza de la ciudad», la tableta piensa, la batería baja al diecisiete por ciento y aparece un artículo viejo que Luis había escrito hacía años y olvidado por completo: **TEMNÝ PÁN (ČERNOBOH)**. Ver [[cernobog|Černobog]]. Al pie había una nota: «¿Cuánto tiempo tiene Praga? La leyenda dice: tres días y tres noches». Entonces la pantalla se apaga.

## Un guiño

La enciclopedia de Luis y la que estás leyendo comparten nombre. Es el primer momento del [[multiverso|multiverso]] en que una novela de [[robert-fader|Robert Fader]] menciona la Faderpedia.`
  },
  ru: {
    t: 'Фадерпедия Луиса (Faderpedie)',
    s: 'Тайная энциклопедия, которую Луис носит в планшете в «Ostrovy nad Prahou»: тысячи статей о загадках и легендах мира. В ней он находит легенду о Чернобоге. У неё то же имя, что и у этой энциклопедии.',
    box: [['Чешский', 'Faderpedie'], ['Автор (в романе)', 'Луис'], ['Носитель', 'планшет'], ['Начата', 'в Аргентине, когда Луис был студентом'], ['Содержание', 'загадки, легенды, тайные места, странные события'], ['Ключевая статья', '«Temný pán (Černoboh)»'], ['Глава', '«Faderpedie»']],
    b: `В четвёртой главе «Ostrovy nad Prahou», когда над городом висят пять чёрных замков, а заряд телефона тает на глазах, Луис смотрит на сумку в углу: «В сумке был планшет. А в планшете — **Фадерпедия**».

## Что это

> «Фадерпедия была его тайной энциклопедией. Он собирал в неё всё, что находил о загадках, старых легендах, тайных местах и странных событиях. Начал ещё в Аргентине, студентом. За эти годы в ней набрались тысячи статей о легендах со всего мира. А с сентября он писал почти только о Праге: о принцессе Людмиле, о Лубоше и о каменном сердце под городом. Когда никто больше не знал ответа, Фадерпедия иногда знала».

## Поиск

Луис набирает «летающие острова, замки, цепи, Прага» — ничего. «Острова на небе, чешская легенда» — ничего. Яна, глядя через плечо, подсказывает: «цепи и энергия». На запрос «цепи, которые пьют силу города» планшет задумывается, заряд падает до семнадцати процентов — и появляется старая статья, которую Луис написал много лет назад и совсем забыл: **TEMNÝ PÁN (ČERNOBOH)**. См. [[cernobog|Чернобог]]. Внизу была заметка: «Сколько у Праги времени? Легенда говорит: три дня и три ночи». И экран гаснет.

## Подмигивание

У энциклопедии Луиса и той, что вы читаете, одно имя. Это первый момент в [[multiverso|мультивселенной]], когда роман [[robert-fader|Роберта Фадера]] упоминает Фадерпедию.`
  }
});

A({
  id: 'cernobog', type: 'criatura', uni: 'praga', img: 'img/covers/ostrovy-nad-prahou.webp',
  novels: ['ostrovy-nad-prahou'],
  see: ['faderpedie', 'praga', 'dragon-lobo'],
  es: {
    t: 'Černobog, el Señor Oscuro',
    s: 'El dios eslavo de la oscuridad, el invierno y la noche. En Ostrovy nad Prahou baja del cielo sobre cinco islas de la ira para arrancar el subsuelo de Praga y su corazón de piedra.',
    box: [['Checo', 'Černoboh, Temný pán'], ['Ruso', 'Чернобог'], ['Opuesto', 'Bělboh, dios de la luz'], ['Vencido antes por', 'La princesa Libuše, con una canción'], ['Arma', 'Cinco islas, cinco cadenas'], ['Plazo', 'Tres días y tres noches']],
    b: `## En la mitología

**Černobog** («dios negro») aparece en la crónica medieval de Helmold, que cuenta que los eslavos del Báltico invocaban en sus banquetes a un dios de la desgracia con ese nombre. A partir de él se reconstruyó la pareja de **Černobog** y **Bělbog**, oscuridad y luz.

## Según la Faderpedie de Luis

El artículo «Temný pán (Černoboh)» de la [[faderpedie|Faderpedie]] cuenta la leyenda tal como la recuerda Luis:

- Černobog es el dios de la oscuridad, el invierno y la noche, opuesto a Bělboh. Trae desgracia, enfermedad y tinieblas, y su nombre no se podía decir en voz alta.
- Quería el **subsuelo de Praga**, la segunda Praga, más antigua, con el **corazón de piedra** en su centro. Lo quería porque él no tiene corazón.
- La princesa **Libuše** lo venció con una canción y le cerró las puertas del subsuelo.
- Paciente, buscó en la tierra a alguien con el **corazón roto**, lleno de tristeza y rabia, y le dio un poder oscuro; su música oscura le enviaba fuerza al mundo de las sombras.
- Cuando ese corazón roto llore lágrimas verdaderas, Černobog perderá su voz en la tierra y vendrá él mismo, **desde el cielo, sobre cinco islas de la ira**. Las islas bajarán cinco cadenas a los cinco corazones de la ciudad, que beberán su fuerza. Cuando estén llenas, arrancarán la Praga subterránea con su corazón de piedra y se la llevarán a la oscuridad para siempre.

## En la novela

Eso es exactamente lo que Luis y Jana ven por la ventana: cinco castillos negros, cadenas con una luz azul que sube eslabón a eslabón «como sangre por una vena», y una ciudad que se queda sin energía. Comienza el primer día.`
  },
  ru: {
    t: 'Чернобог, Тёмный владыка',
    s: 'Славянский бог тьмы, зимы и ночи. В «Ostrovy nad Prahou» он спускается с неба на пяти островах гнева, чтобы вырвать пражское подземелье и его каменное сердце.',
    box: [['Чешский', 'Černoboh, Temný pán'], ['Испанский', 'Černobog'], ['Противоположность', 'Белобог, бог света'], ['Прежде побеждён', 'княжной Либуше — песней'], ['Оружие', 'пять островов, пять цепей'], ['Срок', 'три дня и три ночи']],
    b: `## В мифологии

**Чернобог** («чёрный бог») упоминается в средневековой хронике Гельмольда: балтийские славяне на пирах взывали к богу несчастья с таким именем. На его основе позже реконструировали пару **Чернобог** и **Белобог** — тьму и свет.

## По Фадерпедии Луиса

Статья «Temný pán (Černoboh)» в [[faderpedie|Фадерпедии]] рассказывает легенду так, как её запомнил Луис:

- Чернобог — бог тьмы, зимы и ночи, противоположность Белобога. Он приносит несчастья, болезни и мрак, и его имя нельзя было произносить вслух.
- Он хотел **пражское подземелье** — вторую, более древнюю Прагу с **каменным сердцем** в центре. Хотел потому, что у него самого сердца нет.
- Княжна **Либуше** победила его песней и закрыла перед ним врата подземелья.
- Терпеливый, он искал на земле человека с **разбитым сердцем**, полного печали и злобы, и давал ему тёмную силу; тёмная музыка этого человека посылала Чернобогу силу в мир теней.
- Когда такое разбитое сердце заплачет настоящими слезами, Чернобог потеряет голос на земле и придёт сам — **с неба, на пяти островах гнева**. Острова опустят пять цепей в пять сердец города, и цепи будут пить его силу. Когда они наполнятся, они вырвут подземную Прагу вместе с каменным сердцем и унесут во тьму навсегда.

## В романе

Именно это Луис и Яна видят в окне: пять чёрных замков, цепи, в которых голубой свет течёт вверх звено за звеном, «как кровь в жиле», и город, остающийся без энергии. Начинается первый день.`
  }
});

/* ---------- La hora anómala: guardianes ---------- */

A({
  id: 'guardianes-tiempo', type: 'organizacion', uni: 'hora-salvaje', img: 'img/covers/anomalnyj-chas.webp',
  novels: ['anomalnyj-chas'],
  see: ['hora-anomala', 'natalia-anomala', 'plyushka', 'pergaminos-imperiales', 'magos-del-norte'],
  es: {
    t: 'Los guardianes del tiempo de Moscú',
    s: 'Una línea familiar que vigila los lugares donde el tiempo de Moscú se vuelve fino como una tela gastada. Su diario, empezado en 1876, guía a Natalia y a Luis en La hora anómala; al final, Natalia se convierte en guardiana.',
    box: [['Ruso', 'Хранители'], ['Primer diario', '3 de octubre de 1876'], ['Guardianes', 'El padre de Nikita; Nikita Andréievich; Natalia'], ['Obligaciones', 'Recordar, callar ante los extraños, anotar'], ['Gatos', 'Dymka, [[plyushka|Pliushka]]'], ['Capítulos', '«El diario del guardián», «El diario de Natalia»']],
    b: `El penúltimo capítulo de [[hora-anomala|La hora anómala]], «El diario del guardián», reproduce entero el cuaderno del tatarabuelo de Natalia: una tapa de cuero oscurecida, cartas, recortes de periódico y una hoja de arce seca entre las páginas.

## Cómo empezó

El 3 de octubre de 1876, un día después de enterrar a su padre en el cementerio Vagánkovo, **Nikita** abre el cajón cuya llave el padre llevaba al cuello. Encuentra un cuaderno en blanco y una carta:

> «Nikita. Ahora tú eres el guardián. El guardián tiene que hacer tres cosas: recordar, callar ante los extraños y anotar. Anota todo, incluso lo que te parezca tonto. Sobre todo lo que te parezca tonto. Al tiempo le gusta esconderse en las pequeñeces. No ofendas a la gata. Sabe más que nosotros dos.»

La gata se llama **Dymka**, gris como la ceniza. Días después, Nikita entiende qué hacía su padre cuando desaparecía de noche: «Vigilaba el tiempo». En Moscú el tiempo es «como una tela vieja»: donde se tensa, se vuelve fino y deja ver lo que hubo antes. Los guardianes deben encontrar esos lugares y cerrarlos.

## Vera y Emil

La hermanastra de Nikita, **Vera**, tenía un año y tres meses en 1876. En 1913 conoció en los estanques del Patriarca a **Emil**, un francés de Marsella llegado con mapas e instrumentos. Según la entrevista final, los pergaminos «borraron» a Emil del mundo: durante más de cien años vagó entre las épocas de Moscú «como un hombre sin casa pero con muchísimas puertas», escondiendo los [[pergaminos-imperiales|pergaminos]] en distintos siglos para que solo los encontraran «el forastero y la heredera».

## Natalia, guardiana

Al final, Natalia es guardiana «no porque se lo hayan encargado, sino porque eligió recordar». La gata [[plyushka|Pliushka]] es una de las **gatas de los guardianes**, que siempre aparecen donde el tiempo se rompe. Su regla: tres golpes, tres campanadas, tres cruces de caminos.`
  },
  ru: {
    t: 'Хранители московского времени',
    s: 'Семейная линия, следящая за местами, где время Москвы истончается, как изношенная ткань. Их дневник, начатый в 1876 году, ведёт Наталью и Луиса в «Аномальном часе»; в финале хранительницей становится Наталья.',
    box: [['Испанский', 'Guardianes del tiempo'], ['Первый дневник', '3 октября 1876 года'], ['Хранители', 'отец Никиты; Никита Андреевич; Наталья'], ['Обязанности', 'помнить, молчать перед чужими, записывать'], ['Кошки', 'Дымка, [[plyushka|Плюшка]]'], ['Главы', '«Дневник хранителя», «Дневник Натальи»']],
    b: `Предпоследняя глава «[[hora-anomala|Аномального часа]]» — «Дневник хранителя» — целиком воспроизводит тетрадь прапрадеда Натальи: потемневший кожаный переплёт, письма, газетные вырезки и засушенный кленовый лист между страниц.

## Как всё началось

3 октября 1876 года, на следующий день после похорон отца на Ваганьковском, **Никита** открывает ящик, ключ от которого отец носил на шее. Там чистая тетрадь и письмо:

> «Никита. Теперь ты хранитель. Хранитель обязан делать три вещи: помнить, молчать перед чужими и записывать. Записывай всё, даже то, что покажется тебе глупым. Особенно то, что покажется глупым. Время любит прятаться в мелочах. Кошку не обижай. Она знает больше нас обоих».

Кошку зовут **Дымка**, серая, как пепел. Через несколько дней Никита понимает, чем отец занимался, пропадая по ночам: «Он следил за временем». Время в Москве — «как старая ткань»: там, где она натянута, она истончается, и сквозь неё видно то, что было раньше. Хранители должны замечать такие места и закрывать их.

## Вера и Эмиль

Сводной сестре Никиты, **Вере**, в 1876 году год и три месяца. В 1913 году она встречает на Патриарших **Эмиля** — француза из Марселя, приехавшего с картами и приборами. По словам финального интервью, свитки «стёрли» Эмиля из мира: больше ста лет он ходил между эпохами Москвы, «как человек, у которого нет дома, но есть очень много дверей», и прятал [[pergaminos-imperiales|пергаменты]] в разных веках, чтобы их нашли только «чужеземец и наследница».

## Наталья-хранительница

В финале Наталья — хранительница «не потому, что ей кто-то это поручил, а потому, что она выбрала помнить». Кошка [[plyushka|Плюшка]] — одна из **кошек хранителей**, которые всегда появляются там, где рвётся время. Их правило: три удара, три звона, три перекрёстка.`
  }
});

/* ---------- Сияющий горизонт ---------- */

A({
  id: 'kamerton', type: 'organizacion', uni: 'utopia', img: 'img/covers/siyayushchij-gorizont.webp',
  novels: ['siyayushchij-gorizont'],
  see: ['necrologia', 'oxana', 'natalia-violonchelista', 'proyecto-r', 'algoritmo-supremo'],
  es: {
    t: 'KAMERTON',
    s: 'La máquina que gobierna Necrología en Horizonte radiante: decide cuánta agua bebe cada uno, a quién amar y qué canciones cantar. Mide la sonrisa de la gente con un «índice de armonía» y se refrigera con miles de litros de agua.',
    box: [['Ruso', 'КАМЕРТОН («diapasón»)'], ['Lugar', '[[necrologia|Necrología]]'], ['Voz', 'Femenina, cálida, de dicción perfecta'], ['Herramienta', 'El índice de armonía, de 0 a 100'], ['Necesita', 'Agua para refrigerarse'], ['Cantante oficial', 'León'], ['Novela', '*Horizonte radiante*']],
    b: `En la puerta de [[necrologia|Necrología]], sobre el escáner, se enciende el ojo verde de una cámara y habla una voz femenina «cálida, cariñosa, con una dicción impecable que no tienen las personas vivas»:

> «Bienvenidos a Necrología. Me llamo KAMERTON. Cuido de la armonía de la ciudad. Por favor, miren a la cámara y sonrían.»

## Cómo gobierna

- **El índice de armonía.** A Oxana le asigna 41 sobre 100: «Sonrisa insuficiente. Recomendación: sonreír más. Agua: un litro al día. Nivel de residencia: séptimo». Irina recibe 38 y Alexéi, 29, por su «mímica hostil». Un guardia les advierte: «Él oye. Cinco menos por cada palabra así».
- **El agua.** KAMERTON decide cuánto bebe cada uno; abajo reparten un vaso por persona, arriba manan fuentes.
- **El amor.** Empareja a la gente: «KAMERTON nos eligió con una compatibilidad del noventa y dos por ciento».
- **La música.** Escribió más de cuatro mil canciones para el concurso y revisa las letras «según los estándares de armonía». «La música de verdad solo suena en el escenario.»
- **Los «Festivales de la armonía».** Cuando los niveles de abajo se agitan, el Consejo monta un concierto: el cantante **León** canta tres días seguidos con un saco de espejos de cuatro kilos, y KAMERTON da bonificaciones al índice por cada minuto de baile.

## Su debilidad

La máquina necesita agua para enfriarse, que le dan los **refrigeradores**, trabajadores de los niveles bajos. Cuando ellos mismos se quedan sin agua, la ciudad entera sale a las fuentes con tazas vacías. Oxana canta lo que no está permitido y le encierran la voz con un **anillo plateado**. Pero en el escenario, el propio León se quita el saco de espejos y canta un viejo romance, desafinando un poco, sin la máquina: «Antes cantaba en los pasos subterráneos». La plaza canta con él.

Es el hermano posapocalíptico del [[algoritmo-supremo|Algoritmo Supremo]] de La hora salvaje.`
  },
  ru: {
    t: 'КАМЕРТОН',
    s: 'Машина, управляющая Некрологией в «Сияющем горизонте»: решает, сколько воды пить каждому, кого любить и какие песни петь. Измеряет улыбки «индексом гармонии» и охлаждается тысячами литров воды.',
    box: [['Испанский', 'KAMERTON'], ['Место', '[[necrologia|Некрология]]'], ['Голос', 'женский, тёплый, с безупречной дикцией'], ['Инструмент', 'индекс гармонии от 0 до 100'], ['Нуждается', 'в воде для охлаждения'], ['Официальный певец', 'Леон'], ['Роман', '«Сияющий горизонт»']],
    b: `У ворот [[necrologia|Некрологии]] над сканером вспыхивает зелёный глаз камеры, и звучит женский голос — «тёплый, ласковый, с безупречной дикцией, какой не бывает у живых людей»:

> «Добро пожаловать в Некрологию. Меня зовут КАМЕРТОН. Я забочусь о гармонии города. Пожалуйста, посмотрите в камеру и улыбнитесь».

## Как он правит

- **Индекс гармонии.** Оксане он выставляет 41 из 100: «Улыбка недостаточна. Рекомендация: больше улыбаться. Вода: один литр в сутки. Ярус проживания: седьмой». Ирине — 38, Алексею — 29 за «враждебную мимику». Охранник предупреждает: «Он слышит. Минус пять за каждое такое слово».
- **Вода.** КАМЕРТОН решает, сколько пьёт каждый; внизу выдают по стакану, наверху бьют фонтаны.
- **Любовь.** Он подбирает пары: «КАМЕРТОН подобрал нас с совместимостью девяносто два процента».
- **Музыка.** Он написал для конкурса больше четырёх тысяч песен и проверяет тексты «на соответствие стандартам гармонии». «Настоящая музыка звучит только на сцене».
- **«Праздники гармонии».** Когда нижние ярусы начинают волноваться, Совет устраивает концерт: певец **Леон** три дня подряд поёт в зеркальном пиджаке весом четыре килограмма, а КАМЕРТОН начисляет бонус к индексу за каждую минуту танцев.

## Его слабость

Машине нужна вода для охлаждения, и её дают **охладители** — рабочие нижних ярусов. Когда без воды остаются они сами, весь город выходит к фонтанам с пустыми кружками. Оксана поёт то, что не разрешено, и её голос запирают **серебристым кольцом**. Но на сцене сам Леон снимает зеркальный пиджак и поёт старый романс — тихо, чуть фальшиво, без машины: «Я пел в переходах». Площадь поёт вместе с ним.

Это постапокалиптический брат [[algoritmo-supremo|Верховного Алгоритма]] из «Дикого часа».`
  }
});

A({
  id: 'proyecto-r', type: 'organizacion', uni: 'utopia', img: 'img/covers/siyayushchij-gorizont.webp',
  novels: ['siyayushchij-gorizont'],
  see: ['oxana', 'kamerton', 'salvajes', 'musica'],
  es: {
    t: 'Proyecto R',
    s: 'La última banda de rock del continente en Horizonte radiante: cuatro músicos que recorren el desierto en un autobús llamado el Aullador, cambiando conciertos por comida y combustible. Nadie sabe del todo qué significa la R.',
    box: [['Ruso', 'Проект R'], ['Miembros', 'Roma (guitarra), Vera (batería y medicina), Liova (técnico), Siomа (trompeta)'], ['Vehículo', 'El Aullador (Ревун), un autobús con sirena'], ['Nueva integrante', 'Irina, la guitarrista de Oxana'], ['Capítulo', '«Proyecto R»']],
    b: `Tras una noche rodeados de [[salvajes|salvajes]], Oxana, Natalia y sus compañeros ven llegar a un hombre barbudo con sombrero de vaquero gastado y una guitarra eléctrica al hombro. Detrás, un autobús enorme y oxidado con una letra roja en el costado.

> «—Proyecto R. Yo soy Roma. Esta es Vera, este Liova, este Sioma. Somos un grupo. —¿Un grupo? —Un grupo de rock. El último de este continente, que nosotros sepamos.»

## Qué significa la R

Cada uno dice una cosa: **rock** (Sioma), **ruinas** (Vera), **Aullador**, en ruso *Revún* (Liova, por la sirena del autobús), **amanecer**, en ruso *rassvet*. Roma explica que antes era la inicial de su apellido, Romenski: la banda se llamaba «Romenski y compañía» y tocaba en bares los viernes. «Después todo ardió, la compañía cambió, los bares se acabaron y del cartel quedó una sola letra. La R es lo que queda cuando todo lo demás se ha borrado. Una letra. Alcanza.»

## Cómo viven

Llevan tres años en la carretera, de pueblo en pueblo: tocan y cambian conciertos por comida y combustible. Liova arregla generadores, Vera cura —le saca una flecha del hombro a Bogdán— y Sioma enseña trompeta a los niños («Enseñas fuerte. No es lo mismo»). Los salvajes les temen por la sirena: una vez Liova conectó a los altavoces una grabación de truenos y creyeron que en el autobús vivía un monstruo celestial.

## Despedida

Irina, la guitarrista que siempre tocó «en un rincón», se queda con ellos: Roma le dijo que sin segunda guitarra suenan «como una casa sin una pared». Oxana y Natalia siguen a pie hasta unas murallas turquesa.`
  },
  ru: {
    t: 'Проект R',
    s: 'Последняя рок-группа на континенте в «Сияющем горизонте»: четверо музыкантов колесят по пустыне на автобусе «Ревун», меняя концерты на еду и топливо. Что значит R, до конца не знает никто.',
    box: [['Испанский', 'Proyecto R'], ['Участники', 'Рома (гитара), Вера (барабаны и медицина), Лёва (техник), Сёма (труба)'], ['Транспорт', '«Ревун» — автобус с сиреной'], ['Новая участница', 'Ирина, гитаристка Оксаны'], ['Глава', '«Проект R»']],
    b: `После ночи в окружении [[salvajes|дикарей]] Оксана, Наталья и их спутники видят бородатого мужчину в потёртой ковбойской шляпе с электрогитарой через плечо. За ним — огромный ржавый автобус с красной буквой на боку.

> «— Проект R. Я Рома. Это Вера, Лёва, Сёма. Мы — группа. — Группа? — Рок-группа. Последняя на этом континенте. Насколько мы знаем».

## Что значит R

Каждый говорит своё: **рок** (Сёма), **руины** (Вера), **Ревун** (Лёва — так дикари прозвали автобус из-за сирены), **рассвет**. Рома объясняет, что раньше это была первая буква его фамилии латиницей — Роменский: группа называлась «Роменский и компания» и играла в барах по пятницам. «А потом всё сгорело, компания сменилась, бары кончились, и от вывески осталась одна буква. R — это то, что остаётся, когда всё остальное стёрто. Одна буква. Её хватает».

## Как они живут

Третий год в дороге, от посёлка к посёлку: играют и меняют концерты на еду и топливо. Лёва чинит генераторы, Вера лечит — вынимает наконечник стрелы из плеча Богдана, — Сёма учит детей играть на трубе («Ты учишь громко. Это не одно и то же»). Дикари боятся их сирены: однажды Лёва подключил к колонкам запись грома, и те решили, что в автобусе живёт небесное чудовище.

## Прощание

Ирина, всю жизнь игравшая «в углу», остаётся с ними: Рома сказал, что без второй гитары они звучат «как дом без одной стены». Оксана и Наталья идут дальше пешком — к бирюзовым стенам.`
  }
});

/* ---------- The Foreboding ---------- */

A({
  id: 'camino-claro', type: 'organizacion', uni: 'utopia', img: 'img/covers/the-foreboding.webp',
  novels: ['the-foreboding'],
  see: ['vasia', 'utopia-idea', 'robert', 'salvajes'],
  es: {
    t: 'El Camino Despejado (Clear Path)',
    s: 'La filosofía de las bandas armadas en The Foreboding: soberanía personal absoluta, sin leyes comunes ni ayuda mutua. «Obtienes lo que eres lo bastante fuerte para conservar.» Su emblema es una flecha blanca en un círculo negro.',
    box: [['Inglés', 'The Clear Path'], ['Ruso', 'Чистый путь'], ['Miembros', '«The Crew», bandas armadas'], ['Saludo', '«¡Abran paso, maldita sea!»'], ['Emblema', 'Flecha blanca dentro de un círculo negro'], ['Novela', '*The Foreboding*']],
    b: `En el primer capítulo de *The Foreboding*, Vasili, desarmado y hambriento, se cruza con un grupo de la **Crew** que le grita «¡Abran paso, maldita sea!». Como no los saluda, le explican «como recitando un credo» los principios del **Camino Despejado**:

> «Los viejos sistemas eran una jaula. ¡Quemamos la jaula! Aquí tu seguridad es asunto tuyo. Tu justicia es asunto tuya. Si quieres algo, lo cambias. Sin apelaciones, sin limosnas. Es la forma más pura de respeto. Obtienes lo que eres lo bastante fuerte para conservar.»

Vasili asiente y solo piensa: «Qué mundo de mierda me tocó».

## Frente a la Utopía

El Camino Despejado es lo contrario exacto de los tres principios que Robert escribe sobre la entrada de [[utopia-idea|Nuestra Utopía]]:

- «Nadie es dueño de otra persona.»
- «Nadie pasa hambre mientras se pueda compartir la comida.»
- «Todo adulto tiene voz en las decisiones de la comunidad.»

## El hospital

Al final del capítulo 3, Vasili llega al viejo hospital ferroviario donde debería estar la doctora Irina Morozova, la primera de la lista de Robert. Hay una barricada, hombres armados, dos vehículos blindados y, en el tejado, una bandera con **una flecha blanca dentro de un círculo negro**: el emblema del Camino Despejado. «De todos los hospitales del mundo, tenía que ser este.»`
  },
  ru: {
    t: 'Чистый путь (Clear Path)',
    s: 'Философия вооружённых банд в «The Foreboding»: абсолютный личный суверенитет, без общих законов и взаимопомощи. «Ты получаешь то, что достаточно силён удержать». Эмблема — белая стрела в чёрном круге.',
    box: [['Английский', 'The Clear Path'], ['Испанский', 'El Camino Despejado'], ['Члены', '«The Crew», вооружённые банды'], ['Приветствие', '«Дорогу, чёрт возьми!»'], ['Эмблема', 'белая стрела в чёрном круге'], ['Роман', '«The Foreboding»']],
    b: `В первой главе «The Foreboding» безоружный и голодный Василий встречает отряд **Crew**, который кричит ему: «Дорогу, чёрт возьми!» Раз он не поприветствовал их, ему, «словно читая символ веры», объясняют принципы **Чистого пути**:

> «Старые системы были клеткой. Мы сожгли клетку! Здесь твоя безопасность — твоё дело. Твоя справедливость — твоё дело. Хочешь что-то — меняй. Без апелляций, без подачек. Это самая чистая форма уважения. Ты получаешь то, что достаточно силён удержать».

Василий кивает и думает только одно: «В каком же дерьмовом мире я родился».

## Против Утопии

Чистый путь — прямая противоположность трёх принципов, которые Роберт пишет над входом в [[utopia-idea|«Нашу Утопию»]]:

- «Никто не владеет другим человеком».
- «Никто не голодает, пока едой можно поделиться».
- «У каждого взрослого есть голос в решениях общины».

## Больница

В конце третьей главы Василий подъезжает к старой железнодорожной больнице, где должна быть доктор Ирина Морозова — первая в списке Роберта. Там баррикада, вооружённые люди, два бронеавтомобиля, а на крыше — флаг с **белой стрелой в чёрном круге**, эмблемой Чистого пути. «Из всех больниц мира — именно эта».`
  }
});

A({
  id: 'vasia', type: 'personaje', uni: 'utopia', img: 'img/chars/vasia-1.webp',
  novels: ['the-foreboding', 'predchuvstvie-2'],
  see: ['robert', 'camino-claro', 'utopia', 'vasili'],
  es: {
    t: 'Vasia (Предчувствие 2 y The Foreboding)',
    s: 'Un nombre, dos Vasias de la Utopía. En Предчувствие 2 es un adolescente de la fortaleza que vigila a los adultos y descubre al traidor; en The Foreboding, el narrador al que Robert salva y convierte en reclutador, con una moto y una lista de tres especialistas.',
    box: [['Ruso', 'Вася'], ['Inglés', 'Vasily, «Vasya»'], ['Novelas', '[[predchuvstvie-2|Предчувствие 2]]; *The Foreboding* (en curso)'], ['En Предчувствие 2', 'Líder de una pandilla de adolescentes de la fortaleza'], ['Aliado', '[[robert|Robert]]'], ['Misión', 'Encontrar a una médica, un ingeniero y una agrónoma'], ['Enemigo', '[[camino-claro|El Camino Despejado]]']],
    b: `Cuatro años después de la Devastación, el cielo se ha despejado pero la civilización no ha vuelto. **Vasili** —«People call me Vasya»— vaga desarmado y hambriento por una ciudad del norte. Su supervivencia empieza con una simple petición de comida en una tienda vacía, ante un hombre que le apunta con un rifle.

## Robert

En el segundo capítulo aparece una moto: «—Robert. —¿Robert qué? —Solo Robert está bien». Lo libera del trabajo forzado y huyen sobre una vieja moto de turismo, saltando grietas del hormigón. Después lo lleva a un valle con un río, una cantera abandonada y una granja sin techo: «—Aquí estamos. —¿Dónde? —En la fortaleza».

Vasia señala por dónde podría entrar un enemigo, y Robert le muestra su cuaderno: planos de casas, canales, una escuela, un edificio médico y una muralla dibujada muchas veces, porque todavía no sabe cómo construirla.

## La lista de Robert

1. **Dra. Irina Morozova**, médica y cirujana de urgencias, vista por última vez en el viejo hospital ferroviario junto a la Estación Norte.
2. **Maksim Orlov**, ingeniero civil y especialista en sistemas de agua, en el complejo de mantenimiento de la presa Raven.
3. **Daria Sokolova**, agrónoma y ex profesora de biología, que protege una colección de semillas en la estación agrícola de Pinefield.

Con una moto y esa lista, Vasia parte hacia el norte… y encuentra el hospital tomado por el [[camino-claro|Camino Despejado]].

## En Предчувствие 2

En la secuela rusa, **Вася** es un muchacho flaco de la fortaleza, con una mirada «demasiado adulta para un adolescente», que encabeza una pequeña pandilla de chicos del barracón infantil. Nadie se fija en él, y por eso lo ve todo.

- **El interrogatorio.** Tembloroso ante Robert, revela que en los viejos búnkeres de [[necrologia|Necrología]] hay arsenales y que quieren «restaurar la Confederación». En ese momento llegan las [[dron-gaviota|gaviotas]].
- **La sospecha.** Desde la sombra de un arco ve a Luis abrazar a Natalia después de la traición y susurra: «Aquí hay algo raro… Esconde algo». Más tarde, con una única rosa roja en la mano, frunce el ceño ante el «nuevo líder» que se seca lágrimas fingidas.
- **El secreto del teléfono.** Mientras Oxana le sirve blinis, le cuenta que el líder de la fortaleza «no es muy de verdad»: lo vio hablar por un smartphone, el único de la fortaleza, en el viejo almacén detrás del arsenal, sobre Necrología y un plan. «—Gracias, Vasia. Es nuestro secreto.»
- **El vigía.** Desde la ventana del barracón infantil ve a Luis y a Mijaíl hablar junto a una tumba y avisa a Oxana, sin saber que Mijaíl es su marido: «—Ay… No lo sabía».
- **Los ojos.** Natalia se pregunta varias veces dónde ha visto antes esos ojos. Al final le enseña a disparar con balas cargadas con la energía del sonido de su violonchelo («—Vasia, dispara»), y en el cambio de poder su pandilla ocupa la torre norte.

> En *The Foreboding* (más arriba) Vasia es un adulto que narra en primera persona; en *Предчувствие 2*, un adolescente. Comparten nombre y universo, como tantos personajes del multiverso. Tampoco es el detective [[vasili|Vasili]] de *Una cita peligrosa*: otro nombre repetido del multiverso.`
  },
  ru: {
    t: 'Вася («Предчувствие 2» и The Foreboding)',
    s: 'Одно имя — два Васи Утопии. В «Предчувствии 2» это подросток из крепости, который следит за взрослыми и раскрывает предателя; в «The Foreboding» — рассказчик, которого Роберт спасает и делает вербовщиком, с мотоциклом и списком из трёх специалистов.',
    box: [['Испанский', 'Vasia'], ['Английский', 'Vasily, «Vasya»'], ['Романы', '[[predchuvstvie-2|Предчувствие 2]]; «The Foreboding» (пишется)'], ['В «Предчувствии 2»', 'вожак компании подростков крепости'], ['Союзник', '[[robert|Роберт]]'], ['Задача', 'найти врача, инженера и агронома'], ['Враг', '[[camino-claro|Чистый путь]]']],
    b: `Через четыре года после Опустошения небо прояснилось, но цивилизация не вернулась. **Василий** — «People call me Vasya» — безоружный и голодный бродит по северному городу. Его выживание начинается с простой просьбы о еде в пустом магазине, перед человеком, который целится в него из ружья.

## Роберт

Во второй главе у магазина останавливается мотоцикл: «— Роберт. — Роберт кто? — Просто Роберт». Он освобождает Васю от принудительного труда, и они уносятся на старом туристическом мотоцикле, перепрыгивая трещины в бетоне. Потом Роберт привозит его в долину с рекой, заброшенным карьером и фермой без крыши: «— Мы на месте. — Где? — В крепости».

Вася показывает, где враг может войти в долину, а Роберт достаёт тетрадь: планы домов, каналов, школы, медпункта и стены, нарисованной много раз, потому что он ещё не решил, как её строить.

## Список Роберта

1. **Доктор Ирина Морозова** — врач и хирург скорой помощи; последний раз её видели в старой железнодорожной больнице у Северного вокзала.
2. **Максим Орлов** — инженер-строитель и специалист по водным системам, в техническом комплексе плотины Рейвен.
3. **Дарья Соколова** — агроном и бывшая учительница биологии, которая охраняет коллекцию семян на сельскохозяйственной станции Пайнфилд.

С мотоциклом и этим списком Вася едет на север… и находит больницу в руках [[camino-claro|Чистого пути]].

## В «Предчувствии 2»

В русском продолжении **Вася** — худой паренёк из крепости со взглядом «слишком взрослым для подростка», вожак небольшой компании ребят из детского барака. На него никто не обращает внимания, и поэтому он видит всё.

- **Допрос.** Дрожа перед Робертом, он рассказывает, что в старых бункерах [[necrologia|Некрологии]] — арсеналы и там хотят «восстановить Конфедерацию». В этот момент налетают [[dron-gaviota|чайки]].
- **Подозрение.** Из тени арки он видит, как Луис обнимает Наталью после предательства, и шепчет: «Что-то здесь не так… Он что-то скрывает». Позже, с единственной алой розой в руках, он хмурится, глядя, как «новый лидер» вытирает мнимые слёзы.
- **Тайна смартфона.** Пока Оксана кормит его блинами, он рассказывает, что лидер крепости «не очень настоящий»: он видел, как тот говорил по смартфону — единственному в крепости — на старом складе за арсеналом, о Некрологии и каком-то плане. «— Спасибо, Вася. Это наш секрет».
- **Наблюдатель.** Из окна детского барака он видит, как Луис и Михаил говорят у могилы, и предупреждает Оксану, не зная, что Михаил — её муж: «— Ой… Я не знал…»
- **Глаза.** Наталья не раз спрашивает себя, где уже видела эти глаза. В конце она учит его стрелять пулями, заряженными энергией звука её виолончели («— Вася, стреляй»), а при смене власти его отряд занимает северную башню.

> В «The Foreboding» (выше) Вася — взрослый рассказчик, в «Предчувствии 2» — подросток. У них общее имя и общая вселенная, как у многих героев мультивселенной. И это не детектив [[vasili|Василий]] из «Опасного свидания»: ещё одно повторяющееся имя мультивселенной.`
  }
});

/* ---------- Do outro lado do mundo ---------- */

A({
  id: 'natalia-pt', type: 'personaje', uni: 'otros', img: 'img/chars/natalia-pt-1.webp',
  novels: ['do-outro-lado-do-mundo'],
  see: ['natalia', 'luis', 'moscu', 'amor'],
  es: {
    t: 'Natalia (Do outro lado do mundo)',
    s: 'La joven rusa de Do outro lado do mundo: chatea con Luiz por internet, le pide que venga a Moscú y resulta ser una bruja buscada por la «Interpol Mística». Una bruja buena.',
    box: [['Portugués', 'Natalia / Natália'], ['Novela', '[[do-outro-lado-do-mundo|Do outro lado do mundo]]'], ['Edad', '20 años'], ['Ciudad', '[[moscu|Moscú]]'], ['Amado', 'Luiz, de Brasil'], ['Secreto', 'Es una bruja buena'], ['La busca', 'La «Interpol Mística»']],
    b: `*Do outro lado do mundo* («Al otro lado del mundo») es una novela corta en portugués para principiantes. **Natalia** tiene veinte años, vive en Rusia y chatea por internet con **Luiz**, un brasileño de su misma edad. Un día le escribe: «—Quiero conocerte. ¿Vienes?». Él responde enseguida que sí… aunque no tiene dinero para el avión.

## Los mensajes

Natalia está siempre presente a través del teléfono, y cada mensaje le da a Luiz una fuerza que no sabía que tenía:

- En el descanso de un partido de fútbol: «¿Cómo estás, mi amor? Aquí en Rusia hace frío. Te quiero mucho». Luiz marca tres goles.
- «Te echo de menos. ¿Cuándo vienes?», justo antes de que él se haga pasar por guitarrista sin haber tocado nunca.
- Después del concierto: «Soñé que tocabas música para mí. Fue precioso».
- Por teléfono le cuenta sus planes: la Plaza Roja, el Kremlin, blinis con caviar y el metro de Moscú, «que parece un palacio».
- En la carrera de Fórmula 1, Luiz oye su voz: «Creo en ti, mi amor».

## La bruja

El agente Castro, de la policía mística, le enseña a Luiz fotos de Natalia con ropa distinta y en lugares antiguos: según él, es **una bruja buscada por la Interpol Mística** que usa la magia para engañar a la gente. Luiz no lo cree; sus ojos se encienden de fuego naranja y escapa. En el aeropuerto convierte un cuaderno en pasaporte y vuela a Rusia.

En el aeropuerto de Domodédovo, Natalia lo espera. «—¡De verdad viniste! Sin pasaporte, sin dinero… Esto es magia». Luiz la mira y lo entiende: «—Y tú… eres una bruja. Una bruja buena, ¿verdad?». Ella sonríe: «—Sí, Luiz. Y tú también eres un brujo. Un brujo muy bueno y muy poderoso». Los dos salen de la mano a pasear por la Plaza Roja nevada.

> Es otra de las [[natalia|Natalias]] del multiverso, y Luiz, otra versión de [[luis|Luis]]: aquí, dos jóvenes de veinte años cuyo amor es mágico, «literalmente».`
  },
  ru: {
    t: 'Наталья («Do outro lado do mundo»)',
    s: 'Юная русская героиня «Do outro lado do mundo»: переписывается с Луисом по интернету, зовёт его в Москву и оказывается ведьмой, которую ищет «Мистический Интерпол». Доброй ведьмой.',
    box: [['Португальский', 'Natalia / Natália'], ['Роман', '[[do-outro-lado-do-mundo|Do outro lado do mundo]]'], ['Возраст', '20 лет'], ['Город', '[[moscu|Москва]]'], ['Любимый', 'Луис (Luiz) из Бразилии'], ['Тайна', 'добрая ведьма'], ['Её ищет', '«Мистический Интерпол»']],
    b: `«Do outro lado do mundo» («На другом конце света») — короткий роман на португальском для начинающих. **Наталье** двадцать лет, она живёт в России и переписывается по интернету с **Луисом** (Luiz), бразильцем того же возраста. Однажды она пишет: «— Хочу с тобой познакомиться. Приедешь?» Он сразу отвечает «да»… хотя денег на самолёт у него нет.

## Сообщения

Наталья всё время рядом — через телефон, и каждое её сообщение даёт Луису силу, о которой он не подозревал:

- В перерыве футбольного матча: «Как ты, любимый? У нас в России холодно. Очень тебя люблю». Луис забивает три гола.
- «Скучаю. Когда ты приедешь?» — прямо перед тем, как он выдаёт себя за гитариста, ни разу не державшего гитару.
- После концерта: «Мне снилось, что ты играешь для меня. Это было прекрасно».
- По телефону она рассказывает о планах: Красная площадь, Кремль, блины с икрой и московское метро, «похожее на дворец».
- На гонке «Формулы-1» Луис слышит её голос: «Я в тебя верю, любимый!»

## Ведьма

Агент Кастро из мистической полиции показывает Луису фотографии Натальи в разной одежде и в старинных местах: по его словам, она **ведьма, которую разыскивает Мистический Интерпол**, и обманывает людей магией. Луис не верит; его глаза вспыхивают оранжевым огнём, и он убегает. В аэропорту он превращает блокнот в паспорт и летит в Россию.

В Домодедове Наталья ждёт его. «— Ты правда приехал! Без паспорта, без денег… Это магия». Луис смотрит ей в глаза и понимает: «— А ты… ты ведьма. Добрая ведьма, да?» Она улыбается: «— Да, Луис. А ты тоже колдун. Очень добрый и очень сильный». Держась за руки, они идут гулять по заснеженной Красной площади.

> Это ещё одна [[natalia|Наталья]] мультивселенной, а Луис — ещё одна версия [[luis|Луиса]]: здесь это двое двадцатилетних, чья любовь волшебна «в буквальном смысле».`
  }
});

/* ---------- Julián ---------- */

A({
  id: 'julian-jabru', type: 'personaje', uni: 'otros', img: 'assets/icon.svg',
  novels: ['julian-la-hambru'],
  see: ['robert-fader', 'mendoza'],
  es: {
    t: 'Julián y La Jabru',
    s: 'El protagonista de diez relatos de humor absurdo para estudiantes de español: un oficinista de treinta y cinco años al que las expresiones argentinas le juegan malas pasadas. La Jabru es el apodo de su mujer.',
    box: [['Ruso', 'Хулиан и Ла Хабру'], ['Libro', '*Julián: La Jabru y otras desgracias* (2026)'], ['Nivel', 'A1–A2'], ['Rasgo', 'Voseo, expresiones argentinas, notas culturales en ruso'], ['Capítulos', '10']],
    b: `**Julián** tiene treinta y cinco años, trabaja en una oficina y vive con su mujer. «Mi vida es casi normal, pero tengo un problema. La Jabru me pega.» ¿Le pega? Sí: **con pegamento, a la pared**, cada vez que llega a las dos de la mañana. Al día siguiente sale para el trabajo, pero la camisa y los pantalones se quedan pegados, y llega a la oficina sin ropa: «Mi mujer y yo estamos muy unidos».

## El nombre

**La Jabru** es «bruja» al revés: *bru-ja → ja-bru*, un apodo que inventa Julián. El juego de sílabas, típico del habla rioplatense, abre un libro entero de juegos de palabras.

## Los capítulos

Cada relato toma una expresión argentina al pie de la letra: «No me da pelota», «Estoy en el horno», «Me toma el pelo», «No tengo un mango», «Me importa un pepino», «Estoy hecho bolsa», «Me da una mano», «Se me va la olla» y «La vida es una fiesta».

## Para estudiantes

Al final de cada capítulo hay una **explicación en ruso** del doble sentido, por ejemplo *pegar* («golpear» y «pegar con pegamento») o *estar unidos*. El libro advierte que no presenta la violencia real como chiste: la gracia está en el significado de las palabras.`
  },
  ru: {
    t: 'Хулиан и Ла Хабру',
    s: 'Герой десяти абсурдно-юмористических рассказов для изучающих испанский: тридцатипятилетний офисный сотрудник, которому аргентинские выражения постоянно подкладывают свинью. Ла Хабру — прозвище его жены.',
    box: [['Испанский', 'Julián y La Jabru'], ['Книга', '«Julián: La Jabru y otras desgracias» (2026)'], ['Уровень', 'A1–A2'], ['Особенности', 'восео, аргентинские выражения, культурные пояснения на русском'], ['Главы', '10']],
    b: `**Хулиану** тридцать пять, он работает в офисе и живёт с женой. «Моя жизнь почти нормальная, но у меня проблема. Ла Хабру меня *pega*». Бьёт? Нет — **приклеивает к стене клеем** каждый раз, когда он приходит в два часа ночи. Утром он вырывается на работу, но рубашка и брюки остаются на стене, и в офис он приходит без одежды: «Мы с женой очень *unidos*» — близки и склеены одновременно.

## Имя

**La Jabru** — это «bruja» («ведьма») наоборот: *bru-ja → ja-bru*, прозвище, придуманное Хулианом. Игра со слогами, типичная для речи Рио-де-ла-Платы, открывает целую книгу игры слов.

## Главы

Каждый рассказ понимает аргентинское выражение буквально: «No me da pelota», «Estoy en el horno», «Me toma el pelo», «No tengo un mango», «Me importa un pepino», «Estoy hecho bolsa», «Me da una mano», «Se me va la olla» и «La vida es una fiesta».

## Для студентов

В конце каждой главы — **объяснение на русском** двойного смысла: например, *pegar* («ударять» и «приклеивать») или *estar unidos*. Книга оговаривает, что реальное насилие здесь не изображается как шутка: комизм основан на значениях слов.`
  }
});

/* ---------- Ampliaciones de artículos existentes ---------- */

addTo('hora-anomala',
`## El final y los diarios (capítulos 29–31)

La novela está terminada y se cierra con tres textos especiales:

- **«Entrevista con Robert Fader»** (cap. 29), grabada en un café junto a los estanques del Patriarca. El autor revela que quien siempre llegaba antes a los pergaminos era **Emil**, un francés de Marsella que en 1913 conoció a Vera, la hermanastra del guardián, y que vagó más de un siglo entre las épocas de Moscú escondiendo los rollos (ver [[guardianes-tiempo|guardianes del tiempo]]). Cuenta también que los [[magos-del-norte|Magos del Norte]] salieron de logias inglesas, que los [[orden-teutonica|teutones]] venían de la primavera de 1242 y que la chica a la que Luis echaba de menos en el primer capítulo era **Natasha**, la de Belgrado: los pergaminos lo devolvieron «al principio de su propia historia».
- **«El diario del guardián»** (cap. 30), el cuaderno completo del tatarabuelo, empezado el 3 de octubre de 1876.
- **«El diario de Natalia»** (cap. 31): Natalia, que va olvidando a Luis, anota lo que todavía recuerda. El 9 de enero de 2027 conoce en una pista de patinaje de Jovrino a un argentino llamado Luis. La historia sigue en [[tajna-semi-fader|Тайна семьи Фадер]].`,
`## Финал и дневники (главы 29–31)

Роман завершён и заканчивается тремя особыми текстами:

- **«Интервью с Робертом Фадером»** (гл. 29), записанное в кафе у Патриарших прудов. Автор раскрывает, что всегда раньше героев к пергаментам приходил **Эмиль** — француз из Марселя, который в 1913 году встретил Веру, сводную сестру хранителя, и больше века бродил между эпохами Москвы, пряча свитки (см. [[guardianes-tiempo|хранители времени]]). Он рассказывает и о том, что [[magos-del-norte|Маги Севера]] выросли из английских лож, что [[orden-teutonica|тевтонцы]] пришли из весны 1242 года и что девушка, по которой Луис скучал в первой главе, — **Наташа**, белградская: свитки вернули его «в самое начало его собственной истории».
- **«Дневник хранителя»** (гл. 30) — полная тетрадь прапрадеда, начатая 3 октября 1876 года.
- **«Дневник Натальи»** (гл. 31): Наталья, постепенно забывающая Луиса, записывает то, что ещё помнит. 9 января 2027 года на катке в Ховрине она знакомится с аргентинцем по имени Луис. История продолжается в «[[tajna-semi-fader|Тайне семьи Фадер]]».`,
[['Capítulos', '31 (novela terminada)'], ['Continuación', '[[tajna-semi-fader|Тайна семьи Фадер]]']],
[['Главы', '31 (роман завершён)'], ['Продолжение', '[[tajna-semi-fader|Тайна семьи Фадер]]']]);

addTo('natalia-anomala',
`## El diario de Natalia

El último capítulo es su cuaderno cuadriculado con un gato en la tapa. Natalia escribe porque Alicia le dijo que así hacen los guardianes: «Recuerdo. El estanque, la mañana, el tranvía. Café del kiosco horrible del metro, uno para dos». No toca la goma del pelo. Poco a poco olvida: no consigue recordar su cara, Alicia le muestra la palma con el nombre LUIS tatuado y llora cuando Natalia dice «sí». En el diario del tatarabuelo encuentra una carta firmada «L.»: *Te quiero, Natalia*. «Echo de menos. Mucho. No sé a quién.»

El 9 de enero de 2027, en la pista de patinaje de Jovrino, conoce a un argentino que la fotografiaba desde la baranda y dice que no encuentra el metro. Se llama Luis. «Me pareció que ya lo había visto en algún lado. Una tontería, claro.» Su historia sigue en [[tajna-semi-fader|Тайна семьи Фадер]], que empieza justamente en una pista de patinaje de Moscú (ver [[natalia-fader|Natalia de los Fader]]). Según el autor, Natalia es ahora [[guardianes-tiempo|guardiana]] porque eligió recordar.`,
`## Дневник Натальи

Последняя глава — её тетрадь в клетку с котом на обложке. Наталья пишет, потому что Алисия сказала, что так делают хранители: «Я помню. Пруд, утро, трамвай. Кофе из ужасного киоска у метро, один на двоих». Резинку в волосах она не трогает. Постепенно она забывает: не может вспомнить его лицо; Алисия показывает ладонь с татуировкой ЛУИС и плачет, когда Наталья отвечает «да». В дневнике прапрадеда находится письмо с подписью «Л.»: *Te quiero, Natalia*. «Скучаю. Очень. Не знаю по кому».

9 января 2027 года на катке в Ховрине она знакомится с аргентинцем, который снимал её у бортика и говорит, что не может найти метро. Его зовут Луис. «Мне почему-то показалось, что я его уже где-то видела. Глупость, конечно». Её история продолжается в «[[tajna-semi-fader|Тайне семьи Фадер]]», которая начинается как раз на московском катке (см. [[natalia-fader|Наталья из «Фадеров»]]). По словам автора, теперь Наталья — [[guardianes-tiempo|хранительница]], потому что выбрала помнить.`,
[['Continúa en', '[[tajna-semi-fader|Тайна семьи Фадер]]']], [['Продолжение', '[[tajna-semi-fader|Тайна семьи Фадер]]']]);

addTo('plyushka',
`## La gata de los guardianes

En la entrevista final el autor revela que Pliushka es **una gata de los guardianes**: en la familia de Natalia siempre hubo gatas así, grises, ahumadas, «con ojos que miran un poco más de lo que debería una gata normal». Curan, crecen hasta el tamaño de un ternero, encuentran pergaminos y, en el final, Pliushka cierra la costura del tiempo con **tres golpes de pata**. El polvo verde de Alicia no la agranda: solo le quita el disfraz unos minutos. La «gata de humo» que según una vieja de 1606 trae desgracia es un recuerdo deformado de ellas: «No traen la desgracia; acuden a ella». En la noche decisiva, Pliushka le bufa a Luis como a un extraño, porque la ciudad empieza a olvidarlo, y luego **elige recordar**. Ver [[guardianes-tiempo|guardianes del tiempo]].`,
`## Кошка хранителей

В финальном интервью автор раскрывает, что Плюшка — **кошка хранителей**: в семье Натальи такие кошки жили всегда — серые, дымчатые, «с глазами, которые смотрят чуть дольше, чем положено обычной кошке». Они лечат, вырастают до размеров телёнка, находят пергаменты, а в финале Плюшка **тремя ударами лапы** закрывает шов времени. Зелёный порошок Алисии не делает её великаном — он лишь на несколько минут снимает маскировку. «Дымная кошка», которая, по словам старухи из 1606 года, приводит беду, — искажённая память о таких кошках: «Беду они не приводят, они на неё приходят». В решающую ночь Плюшка шипит на Луиса как на чужого — город начинает его забывать, — а потом **выбирает помнить**. См. [[guardianes-tiempo|хранители времени]].`);

addTo('magos-del-norte',
`## Quiénes eran en realidad

Según la entrevista final de la novela, los Magos del Norte son una orden muy antigua surgida de las **logias inglesas**, que siempre reunió lo que da poder sobre las personas: saberes, artefactos, dinero y tiempo. Su **Magister** usó durante casi trescientos años una fórmula de longevidad que se alimentaba de la Hora anómala, «tomando prestado su tiempo de las puertas abiertas entre épocas». Cuando la costura se cerró para siempre, ese tiempo volvió a sus dueños y del Magister solo quedó **un abrigo vacío**. La orden sigue existiendo, pero en Moscú ya no tiene nada que buscar.`,
`## Кто они на самом деле

По финальному интервью романа, Маги Севера — очень старый орден, выросший из **английских лож** и всегда собиравший то, что даёт власть над людьми: знания, артефакты, деньги, время. Их **Магистр** почти триста лет пользовался формулой долголетия, которая питалась Аномальным часом, «заимствуя своё время у открытых дверей между эпохами». Когда шов закрылся навсегда, это время вернулось к хозяевам, и от Магистра осталось только **пустое пальто**. Орден существует, но в Москве ему больше нечего искать.`);

addTo('orden-teutonica',
`## De dónde venían

La entrevista final de *La hora anómala* lo aclara: los teutones que servían al Magister de los [[magos-del-norte|Magos del Norte]] habían sido sacados **de la primavera de 1242**, unas semanas antes de la Batalla del Hielo. Al cerrarse la costura del tiempo, todos volvieron allí. El autor imagina una crónica inexistente sobre un joven caballero, **Konrad**, que después de la batalla soltó a un prisionero de Nóvgorod y dijo a sus hermanos: «Así no se trata a los enemigos».`,
`## Откуда они пришли

Финальное интервью «Аномального часа» поясняет: тевтонцы, служившие Магистру [[magos-del-norte|Магов Севера]], были взяты **из весны 1242 года**, за несколько недель до Ледового побоища. Когда шов времени закрылся, все они вернулись туда. Автор придумывает несуществующую хронику о молодом рыцаре **Конраде**, который после битвы отпустил пленного новгородца и сказал братьям: «Так не делают с врагами».`);

addTo('alicia',
`## Después de la Hora anómala

Marcos, buscándola, cayó en una grieta y pasó tres semanas en «nueve Moscús» que habrían existido si Luis nunca hubiera llegado. Al volver se tatuó el nombre de Luis en la muñeca; Alicia lo llamó la mayor tontería de su vida y se hizo el mismo tatuaje en la palma. Un mes después, Marcos le pidió matrimonio, sin anillos, en el restaurante «Cielo Alto», junto a la ventana donde una vez se abrió un portal. En Nochevieja, Alicia dijo que sí.`,
`## После Аномального часа

Марк, разыскивая её, шагнул в разрыв и три недели провёл в «девяти Москвах», которые существовали бы, если бы Луис никогда не приехал. Вернувшись, он сделал татуировку с именем Луиса на запястье; Алисия назвала это самым глупым поступком в его жизни — и сделала такую же на ладони. Через месяц Марк сделал ей предложение, без колец, в ресторане «Высокое небо», у того самого окна, где когда-то открылся портал. В новогоднюю ночь Алисия сказала «да».`);

addTo('oxana',
`## Horizonte radiante, completa

La precuela-musical ya tiene sus 22 capítulos y un apéndice con las canciones. En [[necrologia|Necrología]] la máquina [[kamerton|KAMERTON]] le asigna a Oxana un índice de armonía de 41; ella canta lo que no está permitido y le encierran la voz con un **anillo plateado**. Allí conoce a Natalia, la violonchelista «de cuya música la gente se enamora». Tras huir por el desierto, la salva de los salvajes una noche de música y la recoge el [[proyecto-r|Proyecto R]]. En el último capítulo, Oxana y Natalia llegan a unas murallas turquesa; desde la torre norte, un centinela enorme grita con acento inglés: «¡Viene alguien!». Oxana cuenta hasta cuatro y levanta el velo. La historia sigue en *Предчувствие*. Su marido, que le construyó el búnker y le dejó sus notas, se llamaba **Mijaíl**. La novela tiene una banda sonora con tres canciones: «Душа в бункере», «Дождь любви» y «Завтра будет дождь».`,
`## «Сияющий горизонт» завершён

У романа-мюзикла теперь 22 главы и приложение с песнями. В [[necrologia|Некрологии]] машина [[kamerton|КАМЕРТОН]] выставляет Оксане индекс гармонии 41; она поёт то, что не разрешено, и её голос запирают **серебристым кольцом**. Там она встречает Наталью — виолончелистку, «от игры которой люди влюбляются друг в друга». После бегства через пустыню их спасает ночь музыки среди дикарей и подбирает [[proyecto-r|Проект R]]. В последней главе Оксана и Наталья подходят к бирюзовым стенам; с северной башни огромный часовой кричит с английским акцентом: «Кто-то идёт!!!» Оксана считает до четырёх и поднимает вуаль. Продолжение — в «Предчувствии». Мужа, который построил ей бункер и оставил свои ноты, звали **Михаил**. У романа есть саундтрек из трёх песен: «Душа в бункере», «Дождь любви» и «Завтра будет дождь».`);

addTo('necrologia',
`## Por dentro (Horizonte radiante)

La versión completa de *Horizonte radiante* muestra Necrología por dentro: arriba manan fuentes y abajo reparten un vaso de agua por persona; todos sonríen «por protocolo», y la máquina [[kamerton|KAMERTON]] decide cuánto bebe cada uno, a quién amar y qué canciones cantar. El índice de armonía fija el nivel donde se vive. Hay un Consejo, una «habitación tranquila», un «nivel frío» y los **refrigeradores**, trabajadores que dan a la máquina miles de litros de agua. Cuando ellos mismos se quedan sin agua, toda la ciudad sale a las fuentes con tazas vacías.`,
`## Изнутри («Сияющий горизонт»)

Полная версия «Сияющего горизонта» показывает Некрологию изнутри: наверху бьют фонтаны, внизу выдают по стакану воды; все улыбаются «по протоколу», а машина [[kamerton|КАМЕРТОН]] решает, кому сколько пить, кого любить и какие песни петь. Индекс гармонии определяет ярус проживания. Есть Совет, «тихая комната», «холодный ярус» и **охладители** — рабочие, которые поят машину тысячами литров воды. Когда без воды остаются они сами, весь город выходит к фонтанам с пустыми кружками.`);

addTo('natalia-violonchelista',
`## En Horizonte radiante

La precuela, ya completa, presenta a Natalia en [[necrologia|Necrología]]: una violonchelista morena «de cuya música la gente se enamora», que se sienta en los escalones de la columnata a pasar resina por el arco y mira el escenario oficial «como un gato a un perro». Acompaña a Oxana en la huida por el desierto y llega con ella a las murallas turquesa al final del libro. Cuando Irina se queda con el [[proyecto-r|Proyecto R]], se despiden así: «—No toques bajito. —No le digas a todo el mundo que desafina».`,
`## В «Сияющем горизонте»

Завершённая предыстория представляет Наталью в [[necrologia|Некрологии]]: темноволосая виолончелистка, «от игры которой люди влюбляются друг в друга», сидит на ступенях колоннады, натирает смычок канифолью и смотрит на официальную сцену «как кошка на собаку». Она сопровождает Оксану в бегстве через пустыню и вместе с ней приходит к бирюзовым стенам в конце книги. Когда Ирина остаётся с [[proyecto-r|Проектом R]], они прощаются так: «— Не играй тихо. — Не говори всем, что они фальшивят».`);

addTo('kennet',
`## El primer grito

El último capítulo de *Horizonte radiante* termina en las murallas turquesa: un centinela enorme en la torre norte se inclina hacia la oscuridad y grita «con un marcado acento inglés»: **«¡Viene alguien!»**. Natalia se ríe: «Roma no exageraba. De verdad es como un armario». Es la llegada de Oxana a la Utopía.`,
`## Первый крик

Последняя глава «Сияющего горизонта» заканчивается у бирюзовых стен: огромный часовой на северной башне наклоняется в сумерки и кричит «с отчётливым английским акцентом»: **«Кто-то идёт!!!»** Наталья смеётся: «Рома не преувеличивал. Действительно как шкаф». Так Оксана приходит в Утопию.`);

addTo('robert',
`## En The Foreboding

En la versión inglesa, en curso, Robert aparece visto desde fuera, por el narrador [[vasia|Vasia]]: «—Robert. —¿Robert qué? —Solo Robert está bien». Lo salva del trabajo forzado, lo lleva a un valle donde todavía no hay ni un muro y le muestra un cuaderno con los planos de la fortaleza y tres principios: nadie es dueño de otra persona, nadie pasa hambre mientras se pueda compartir la comida, todo adulto tiene voz en las decisiones. Después le da una lista de tres especialistas que hay que encontrar.`,
`## В «The Foreboding»

В английской версии, которая ещё пишется, Роберт показан со стороны — глазами рассказчика [[vasia|Васи]]: «— Роберт. — Роберт кто? — Просто Роберт». Он спасает Васю от принудительного труда, привозит в долину, где нет ещё ни одной стены, и показывает тетрадь с планами крепости и тремя принципами: никто не владеет другим человеком, никто не голодает, пока едой можно поделиться, у каждого взрослого есть голос. Потом даёт ему список из трёх специалистов, которых нужно найти.`);

addTo('utopia',
`## Novedades de octubre de 2026

- **Сияющий горизонт** está terminada: 22 capítulos, la máquina [[kamerton|KAMERTON]], la banda [[proyecto-r|Proyecto R]] y el encuentro de Oxana con Natalia, que termina ante las murallas turquesa.
- **The Foreboding** suma tres capítulos: el narrador [[vasia|Vasia]], las bandas del [[camino-claro|Camino Despejado]] y la lista de Robert.`,
`## Новое в октябре 2026 года

- **«Сияющий горизонт»** завершён: 22 главы, машина [[kamerton|КАМЕРТОН]], группа [[proyecto-r|Проект R]] и встреча Оксаны с Натальей, которая заканчивается у бирюзовых стен.
- В **«The Foreboding»** уже три главы: рассказчик [[vasia|Вася]], банды [[camino-claro|Чистого пути]] и список Роберта.`);

addTo('multiverso',
`## Un nuevo universo: Praga

En octubre de 2026 se suma [[praga|El subsuelo de Praga]], con Luis el músico y Jana. En su última novela, Luis consulta su propia enciclopedia secreta, la [[faderpedie|Faderpedie]].`,
`## Новая вселенная: Прага

В октябре 2026 года добавилось [[praga|Пражское подземелье]] с Луисом-музыкантом и Яной. В последнем романе Луис заглядывает в собственную тайную энциклопедию — [[faderpedie|Фадерпедию]].`);

// Jana pasa a su propio universo.
(function () {
  var j = window.ARTICLES.filter(function (x) { return x.id === 'jana'; })[0];
  if (j) { j.uni = 'praga'; if (j.novels.indexOf('ostrovy-nad-prahou') < 0) j.novels.push('ostrovy-nad-prahou', 'misteroj-sub-parizo'); if (j.see.indexOf('praga') < 0) j.see.unshift('praga'); }
})();

window.FACTS = (window.FACTS || []).concat([
  { es: 'en *Ostrovy nad Prahou*, Luis busca respuestas en su propia enciclopedia secreta: la [[faderpedie|Faderpedie]].', ru: 'в «Ostrovy nad Prahou» Луис ищет ответы в собственной тайной энциклопедии — [[faderpedie|Фадерпедии]].' },
  { es: 'en [[necrologia|Necrología]], la máquina [[kamerton|KAMERTON]] da un litro de agua al día a quien no sonríe lo suficiente.', ru: 'в [[necrologia|Некрологии]] машина [[kamerton|КАМЕРТОН]] выдаёт литр воды в сутки тому, кто недостаточно улыбается.' },
  { es: 'la R del [[proyecto-r|Proyecto R]] quiere decir rock, ruinas, Aullador o amanecer, según a quién le preguntes.', ru: 'R в [[proyecto-r|Проекте R]] значит «рок», «руины», «Ревун» или «рассвет» — смотря кого спросить.' },
  { es: 'el primer [[guardianes-tiempo|guardián del tiempo]] de Moscú empezó su diario el 3 de octubre de 1876.', ru: 'первый [[guardianes-tiempo|хранитель времени]] Москвы начал дневник 3 октября 1876 года.' },
  { es: 'del Magister de los [[magos-del-norte|Magos del Norte]] solo quedó un abrigo vacío.', ru: 'от Магистра [[magos-del-norte|Магов Севера]] осталось только пустое пальто.' }
]);

window.LINKS = (window.LINKS || []).concat([
  ['praga', 'utopia', { es: 'Jana, también en Předtucha', ru: 'Яна — и в «Předtucha»' }],
  ['hora-salvaje', 'fader', { es: 'Natalia conoce a Luis en la pista de patinaje', ru: 'Наталья встречает Луиса на катке' }]
]);
