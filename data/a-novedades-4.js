// Novedades de litmir del 18 al 24 de noviembre de 2026:
// «Стратег», «Знак», «Чёрный рынок», «Тихая любовь» (terminada), «Дикий час: Тайна пирамид»,
// «Дикий час: Большой удар», «Северная любовь: Восточный ветер», «Координаты любви»,
// «Onde d'amore 3» y el final de «Карнавал раздора» (cap. 28–41).
// Artículos nuevos con A() y ampliaciones con addTo() (definida en a-novedades.js).
window.ARTICLES = window.ARTICLES || [];
window.A = window.A || function (a) { window.ARTICLES.push(a); };

// Añade novelas a la lista de un artículo que ya existe, sin repetirlas.
window.addNovels = window.addNovels || function (id, slugs) {
  var a = window.ARTICLES.filter(function (x) { return x.id === id; })[0];
  if (!a) return;
  a.novels = a.novels || [];
  slugs.forEach(function (s) { if (a.novels.indexOf(s) < 0) a.novels.push(s); });
};

/* ---------- Sinea ---------- */

A({
  id: 'alfredo-grande', type: 'personaje', uni: 'sinea', img: 'img/chars/alfredo-1.webp', gal: ['img/chars/alfredo-2.webp'],
  novels: ['strateg', 'znak', 'chernyj-rynok', 'karnaval-sinei', 'grustnyj-gorod', 'la-citta-triste'],
  see: ['octavio-grande', 'franco', 'chiara', 'gourdieu', 'miguel-ajedrecista', 'armonia-doce', 'sinea-ciudad'],
  es: {
    t: 'Alfredo Grande',
    s: 'Padre de Franco y alcalde de Sinea desde que su hermano Octavio dejó la alcaldía para vender helados. Sobrevive a un golpe, se niega a firmar el «decreto de los signos» y cae bajo el hechizo de los economistas de Gourdieu.',
    box: [['Ruso', 'Альфредо Гранде'], ['Cargo', 'Alcalde de Sinea'], ['Hijo', '[[franco|Franco]]'], ['Esposa', 'Gaia'], ['Hermano', '[[octavio-grande|Octavio Grande]], el alcalde que prohibía reír'], ['Frase', '«No firmo papeles que sonríen»']],
    b: `**Alfredo Grande** es el padre de [[franco|Franco]], el mensajero de *La ciudad triste*. Llegó a la alcaldía de [[sinea-ciudad|Sinea]] mucho antes del carnaval, cuando su hermano [[octavio-grande|Octavio]], el alcalde que había prohibido la risa, renunció y se puso a vender helados en la plaza: la gente fue a buscarlo sola. Entiende cuánto cuestan los tomates y cuándo alguien le miente mirándolo a los ojos; la economía, en cambio, nunca la entendió. Devolvió a los parques los bancos que Octavio había quitado «para que los ciudadanos no se detuvieran sin motivo».

## El carnaval y el golpe

En *Карнавал Синеи* decide organizar un carnaval que eclipse a todos los del mundo, y los Sin Rostro lo aprovechan para lanzar la Hora Falsa. En *[[miguel-ajedrecista|Стратег]]* una parte del poder de la ciudad, aliada con la Ciudad del Norte, prepara un golpe contra él: el consejero Carras pensaba anunciar por televisión que el alcalde había renunciado «por motivos de salud». Las tres columnas de camiones nunca llegan a la plaza del Reloj, y el propio Alfredo oye en el muelle la conversación de su amigo de la infancia Enzo Ferrero, uno de los conspiradores. Después viaja a la Ciudad del Norte y vuelve con un tratado de amistad que, según dice, leyó entero dos veces.

## El decreto de los signos

En *Знак*, durante la «[[armonia-doce|Armonía de los Doce]]», le llevan un decreto según el cual cada habitante de Sinea ocupará desde entonces el lugar que le asigna su signo. Alfredo no lo firma: «No firmo papeles que sonríen».

## La terapia de choque

En *Чёрный рынок* Alfredo lleva un año en el cargo, el mejor de la historia de Sinea, y se niega tres veces a ceder el puerto a la administración del Norte. Llegan las sanciones y, con ellas, [[gourdieu|Emmanuel Gourdieu]] y sus siete economistas. Alfredo, agotado, casi lo abraza: por primera vez en una semana se le pasa el dolor de cabeza. Poco a poco empieza a hablar con palabras ajenas. Cuando Franco va a verlo, lo encuentra en el sillón, con las cortinas cerradas, acariciando un fajo de francos grises frente a un discurso de Gourdieu sin sonido. Le advierte que el Consejo Especial recibió una denuncia contra él por «actividad antiestabilizadora» y le confiesa: «Ahora estoy tan tranquilo, hijo. No te imaginás lo tranquilo que es no tener que decir "no"». Gaia se queda con él: «Devolvémelo, Franco».`
  },
  ru: {
    t: 'Альфредо Гранде',
    s: 'Отец Франко и мэр Синеи с тех пор, как его брат Октавио ушёл из мэрии продавать мороженое. Переживает попытку переворота, отказывается подписать «указ о знаках» и попадает под чары экономистов Гурдьё.',
    box: [['Испанский', 'Alfredo Grande'], ['Должность', 'мэр Синеи'], ['Сын', '[[franco|Франко]]'], ['Жена', 'Гайя'], ['Брат', '[[octavio-grande|Октавио Гранде]], мэр, запретивший смех'], ['Фраза', '«Я не подписываю бумаги, которые улыбаются»']],
    b: `**Альфредо Гранде** — отец [[franco|Франко]], курьера из «Грустного города». Мэром [[sinea-ciudad|Синеи]] он стал задолго до карнавала, после того как его брат [[octavio-grande|Октавио]], запретивший смех, ушёл в отставку и стал продавать мороженое на площади: люди пришли к Альфредо сами. Он понимает, сколько стоят помидоры и когда человек врёт ему в лицо, а экономику не понимал никогда. Он вернул в парки скамейки, которые при Октавио убрали, «чтобы граждане не задерживались без цели».

## Карнавал и переворот

В «Карнавале Синеи» он решает устроить карнавал, который затмит все карнавалы мира, и Безликие пользуются этим, чтобы запустить Ложный час. В «[[miguel-ajedrecista|Стратеге]]» часть власти Синеи в сговоре с Северным городом готовит против него переворот: советник Каррас собирался объявить по телевидению, что мэр «по состоянию здоровья» подал в отставку. Три колонны грузовиков так и не доезжают до площади Часов, а разговор его друга детства Энцо Ферреро, одного из заговорщиков, мэр слышит на молу сам. Потом он едет в Северный город и возвращается с договором о дружбе, который, по его словам, прочитал целиком — дважды.

## Указ о знаках

В «Знаке», во время «[[armonia-doce|Гармонии Двенадцати]]», ему приносят указ о том, что каждый житель Синеи отныне занимает место, предписанное его знаком. Альфредо его не подписывает: «Я не подписываю бумаги, которые улыбаются».

## Шоковая терапия

В «Чёрном рынке» Альфредо уже год мэр — и это лучший год в истории Синеи. Он трижды отказывается передать порт под северное управление. Приходят санкции, а за ними [[gourdieu|Эмманюэль Гурдьё]] и семеро его экономистов. Измученный Альфредо едва не обнимает его: впервые за неделю у него перестаёт болеть голова. Постепенно он начинает говорить чужими словами. Когда Франко приходит к родителям, отец сидит в кресле при задёрнутых шторах, гладит пачку серых франков и смотрит выступление Гурдьё без звука. Он предупреждает сына, что на того поступила жалоба в Особый совет — «антистабилизационная деятельность», — и признаётся: «А теперь мне так спокойно, сынок. Ты не представляешь, как спокойно, когда больше не надо говорить "нет"». Гайя остаётся с ним: «Ты верни мне его, Франко».`
  }
});

A({
  id: 'miguel-ajedrecista', type: 'personaje', uni: 'sinea', img: 'img/covers/strateg.webp',
  novels: ['strateg'],
  see: ['marcos', 'vasili', 'alfredo-grande', 'tren-fantasma', 'sinea-ciudad'],
  es: {
    t: 'Miguel, el Ajedrecista',
    s: 'Hermano de doce años del detective Marcos. Con la radio de la policía y notas anónimas con un caballo dibujado ayuda a la policía de Sinea y frena un golpe contra el alcalde Alfredo Grande.',
    box: [['Ruso', 'Мигель, Шахматист'], ['Novela', '*Стратег* (2026, 20 capítulos, 17 diagramas)'], ['Edad', '12 años'], ['Hermano', '[[marcos|Marcos]], el detective de *El tren fantasma*'], ['Aliado', 'El detective [[vasili|Vasily]]'], ['Firma', 'Un caballo dibujado']],
    b: `**Miguel** tiene doce años y es el hermano menor de [[marcos|Marcos]], el detective de *[[tren-fantasma|El tren fantasma]]*. Los domingos juegan al ajedrez, y un día Marcos resuelve ahí mismo, frente al tablero, quién roba los caramelos del frasco de la maestra. Miguel entiende entonces que el ajedrez no es un juego sino un idioma con el que se puede leer la ciudad.

## El Ajedrecista

A escondidas usa la radio policial de su hermano y deja notas anónimas con un caballo dibujado: «Esto es una horquilla», «Esto es zugzwang». Los policías de [[sinea-ciudad|Sinea]] lo apodan **el Ajedrecista**. Una noche, en una frecuencia secreta, oye que una parte del poder de la ciudad, aliada con la Ciudad del Norte, prepara un golpe contra el alcalde [[alfredo-grande|Alfredo Grande]]: tres columnas de camiones la noche del viernes al sábado, «torres en séptima». La policía está dividida y a su hermano no le dice nada para no asustarlo. Le queda solo [[vasili|Vasily]], el detective de abrigo gris que lo venía siguiendo.

## La partida

Los capítulos llevan nombres de ajedrez —«Horquilla», «Peón envenenado», «Defensa siciliana», «Gambito», «Bloqueo», «Alfil atrapado», «Jaque doble»— y en el tablero las piezas son los puentes, los tranvías y las grúas del puerto. Esa noche el puente del Norte está levantado para dejar pasar un barco, una columna se desvía por unas señales de obra, un tranvía nocturno se descompone en la calle de los Cordeleros y la última se queda encerrada en el puerto viejo. Detienen al empresario Enzo Ferrero, al capitán Brando y al consejero Carras. El nombre del Ajedrecista nunca se publica.`
  },
  ru: {
    t: 'Мигель, Шахматист',
    s: 'Двенадцатилетний брат детектива Марка. С полицейской рацией и анонимными записками с нарисованным конём он помогает полиции Синеи и срывает переворот против мэра Альфредо Гранде.',
    box: [['Испанский', 'Miguel, el Ajedrecista'], ['Роман', '«Стратег» (2026, 20 глав, 17 диаграмм)'], ['Возраст', '12 лет'], ['Брат', '[[marcos|Марк]], детектив из «Призрачного поезда»'], ['Союзник', 'детектив [[vasili|Василий]]'], ['Подпись', 'нарисованный конь']],
    b: `**Мигелю** двенадцать лет, он младший брат [[marcos|Марка]] — детектива из «[[tren-fantasma|Призрачного поезда]]». По воскресеньям братья играют в шахматы, и однажды Марк прямо за доской выясняет, кто ворует карамельки из банки учительницы. Тогда Мигель понимает: шахматы — не игра, а язык, на котором можно читать город.

## Шахматист

Он тайком берёт у брата полицейскую рацию и подбрасывает анонимные записки с нарисованным конём: «Это вилка», «Это цугцванг». Полицейские [[sinea-ciudad|Синеи]] прозвали его **Шахматистом**. Однажды ночью на секретной частоте он слышит, что часть власти города в сговоре с Северным городом готовит переворот против мэра [[alfredo-grande|Альфредо Гранде]]: три колонны грузовиков, ночь с пятницы на субботу, «ладьи на седьмой». Полиция расколота, брату он ничего не говорит, чтобы его не пугать. Остаётся только [[vasili|Василий]] — детектив в сером пальто, который давно ходит за ним по пятам.

## Партия

Главы названы по-шахматному — «Вилка», «Отравленная пешка», «Сицилианская защита», «Гамбит», «Блокада», «Пойманный слон», «Двойной шах», — а фигурами на доске становятся мосты, трамваи и портовые краны. В ту ночь Северный мост поднят для прохода судна, одна колонна сворачивает на объезд из-за ремонтных знаков, на улице Канатчиков ломается ночной трамвай, а последняя колонна оказывается заперта в старом порту. Задержаны предприниматель Энцо Ферреро, капитан Брандо и советник Каррас. Имя Шахматиста так и не раскрывают.`
  }
});

A({
  id: 'gourdieu', type: 'personaje', uni: 'sinea', img: 'img/covers/chernyj-rynok.webp',
  novels: ['chernyj-rynok'],
  see: ['alfredo-grande', 'franco', 'chiara', 'natalia-verdegrad', 'zorro', 'alianza-norte'],
  es: {
    t: 'Emmanuel Gourdieu',
    s: 'Economista encantador que llega a Sinea con siete colegas de traje gris y le receta a la ciudad una terapia de choque. Nunca se moja bajo la lluvia, y quien escucha su voz deja de decir que no.',
    box: [['Ruso', 'Эмманюэль Гурдьё'], ['Novela', '*Чёрный рынок* (2026, en curso)'], ['Cargo', 'Consejero especial del alcalde para la estabilización económica'], ['Sede', 'El séptimo piso de la alcaldía y, de noche, el viejo Ministerio de Economía'], ['Lema', '«El déficit cero es libertad»'], ['Moneda', 'El franco de la Ciudad del Norte']],
    b: `Llegaron un jueves, bajo la lluvia, y después nadie recordaba quién los había invitado: siete hombres con trajes gris oscuro, maletines de cuero iguales y caras tan lisas que no se les adivinaba la edad. Delante iba un octavo, menudo, de abrigo claro y sienes canosas, con una voz que daba ganas de asentir: **Emmanuel Gourdieu**, economista. Chiara lo nota enseguida: los siete llevaban paraguas; Gourdieu no, y estaba completamente seco.

## La terapia de choque

En una Sinea castigada por las sanciones de la Ciudad del Norte, Gourdieu le habla al alcalde [[alfredo-grande|Alfredo Grande]] de «decisiones dolorosas pero necesarias» y le promete unos meses de dificultades «temporales» y después un crecimiento nunca visto. Tres días más tarde es nombrado consejero especial, y sus colegas ocupan el séptimo piso de la alcaldía. Los decretos del Consejo Especial recortan las jubilaciones en un tercio, cierran escuelas, la imprenta, tres policlínicas de cinco y el teatro de la costanera, y triplican el presupuesto de la policía. Después llega el franco de la Ciudad del Norte y la Guardia de la Estabilidad, que cobra en francos y detiene a quien guarda dinero viejo de Sinea. Por televisión, Gourdieu explica sonriendo que «los sacrificios temporales son señal de una sociedad adulta y responsable».

## Lo que hay debajo

Lo extraño es que nadie protesta: la gente da las gracias. Marisa comprueba que los billetes zumban y Natalia ve que les quitan la luz a las personas. El [[zorro]] sigue a los economistas: cada noche, después de medianoche, van al viejo edificio del Ministerio de Economía, en la colina detrás de la plaza Dante, rodeado por la Guardia en tres anillos. Desde ahí sale el zumbido, mil veces más fuerte. Franco, Chiara, Natalia y Marisa cavan hasta el sótano por los túneles que dibujó Sasha, y desde abajo oyen la voz de Gourdieu: «…para la mañana todo estará listo. El alcalde va a firmar. La ciudad entregará el puerto sola».`
  },
  ru: {
    t: 'Эмманюэль Гурдьё',
    s: 'Обаятельный экономист, который приезжает в Синею с семью коллегами в серых костюмах и прописывает городу шоковую терапию. Он не мокнет под дождём, а те, кто слушает его голос, перестают говорить «нет».',
    box: [['Испанский', 'Emmanuel Gourdieu'], ['Роман', '«Чёрный рынок» (2026, в процессе)'], ['Должность', 'особый советник мэра по экономической стабилизации'], ['Где', 'седьмой этаж мэрии, а по ночам — старое здание Министерства экономики'], ['Лозунг', '«Нулевой дефицит — это свобода!»'], ['Валюта', 'франк Северного Города']],
    b: `Они пришли в четверг, в дождь, и никто потом не мог вспомнить, кто их пригласил: семеро мужчин в одинаковых тёмно-серых костюмах, с одинаковыми кожаными портфелями и такими гладкими лицами, что по ним нельзя было угадать возраст. Впереди шёл восьмой — невысокий, в светлом пальто, с лёгкой сединой на висках и голосом, от которого хотелось кивать: **Эмманюэль Гурдьё**, экономист. Кьяра сразу замечает: у всех семерых были зонты, а у Гурдьё — нет, и он был совершенно сухой.

## Шоковая терапия

В Синее, которую душат санкции Северного Города, Гурдьё говорит мэру [[alfredo-grande|Альфредо Гранде]] о «болезненных, но необходимых решениях» и обещает несколько месяцев «временных» трудностей, а потом невиданный рост. Через три дня его назначают особым советником, а его коллеги занимают седьмой этаж мэрии. Постановления Особого совета урезают пенсии на треть, закрывают школы, городскую типографию, три поликлиники из пяти и театр на набережной и втрое увеличивают бюджет полиции. Потом в город приходит франк Северного Города и Гвардия стабильности, которая получает жалованье во франках и задерживает тех, у кого находят старые синейские деньги. По телевизору Гурдьё с улыбкой объясняет, что «временные жертвы — признак взрослого, ответственного общества».

## Что под этим

Странно одно: никто не протестует, люди благодарят. Мариса выясняет, что купюры гудят, а Наталья видит, как они забирают у людей свет. [[zorro|Лис]] выслеживает экономистов: каждую ночь после полуночи они ходят в старое здание Министерства экономики на холме за площадью Данте, которое гвардия окружила в три кольца. Оттуда идёт тот самый гул — в тысячу раз сильнее. Франко, Кьяра, Наталья и Мариса прокапываются к подвалу по тоннелям, которые нарисовала Саша, и снизу слышат голос Гурдьё: «…к утру всё будет готово. Мэр подпишет. Город сам отдаст порт».`
  }
});

A({
  id: 'armonia-doce', type: 'acontecimiento', uni: 'sinea', img: 'img/covers/znak.webp', gal: ['img/ill/znak/img-08.webp', 'img/ill/znak/img-15.webp'],
  novels: ['znak'],
  see: ['alicia', 'marcos', 'vasili', 'alfredo-grande', 'sinea-ciudad'],
  es: {
    t: 'La Armonía de los Doce',
    s: 'La bóveda invisible que se alza sobre Sinea la noche antes del tercer día del congreso de astrólogos: una voz ordena a cada habitante ocupar el lugar de su signo. Detrás están cuatro hombres de gris con maletines de médico.',
    box: [['Ruso', 'Гармония Двенадцати'], ['Novela', '*Знак* (2026, 16 capítulos)'], ['Lugar', 'La Colina de los Astrólogos y el viejo Planetario'], ['Detrás', 'Ortwin Grau, del «Instituto de la Armonía Celeste» de la Ciudad del Norte'], ['Lo que falta', 'Un signo: Ofiuco'], ['Fin', 'A medianoche, con una lluvia de estrellas']],
    b: `Cada febrero, cuando el Sol está en Acuario, los astrólogos de [[sinea-ciudad|Sinea]] se reúnen tres días bajo la cúpula de cobre del viejo Planetario, en la Colina de los Astrólogos. Ese año [[alicia|Alicia]] sube por primera vez al estrado con «Los cuatro Acuarios», y en la última fila se sientan cuatro hombres de gris que anotan todo, incluso a oscuras, y llevan viejos maletines de médico. Después de hablar con ellos, a las adivinas se les destiñe el oro de las cartas, el romero encanece y las velas se inclinan hacia los maletines. La astróloga Nadia, amiga de [[vasili|Vasily]], nota lo mismo.

## La bóveda

La noche antes del tercer día se alza sobre la ciudad una bóveda invisible: líneas plateadas que solo se ven con el viejo binocular de la costanera y que se cruzan sobre el Planetario. A las seis de la mañana, en altavoces, teléfonos y radios, una voz anuncia la **Armonía de los Doce**: cada uno debe «escuchar a su signo» y ocupar el lugar que le corresponde. Hombres con brazaletes grises vigilan las esquinas y en el camino del Norte se levanta un muro con los adoquines de la calle. Al alcalde [[alfredo-grande|Alfredo Grande]] le llevan un decreto para firmar, y se niega.

## Doce cerraduras para trece puertas

Alicia descubre por qué el molde de los cuatro no coincide con el cielo de verdad: en la eclíptica hay trece constelaciones, y entre Escorpio y Sagitario está **Ofiuco**. El cielo le asigna su lugar a cada signo, menos a uno. Unas doscientas personas se juntan en el depósito de tranvías, y la ex radiooperadora del puerto Teresa Gallo vuelve a encender la vieja central de radio. A medianoche la bóveda se deshace y sobre Sinea cae una lluvia de estrellas. La comisaria Silvia Bianchi detiene al pie de la colina a Ortwin Grau, que años atrás se había presentado en la alcaldía como director del «Instituto de la Armonía Celeste» de la Ciudad del Norte. Con las piedras del muro hacen bancos a lo largo del camino.`
  },
  ru: {
    t: 'Гармония Двенадцати',
    s: 'Невидимый свод, который встаёт над Синеей в ночь перед третьим днём астрологической конференции: голос велит каждому жителю занять место своего знака. За этим стоят четверо в сером с докторскими саквояжами.',
    box: [['Испанский', 'La Armonía de los Doce'], ['Роман', '«Знак» (2026, 16 глав)'], ['Место', 'Холм Звездочётов и старый Планетарий'], ['Кто за этим', 'Ортвин Грау из «Института небесной гармонии» Северного города'], ['Чего не хватает', 'одного знака — Змееносца'], ['Конец', 'в полночь, звездопадом']],
    b: `Каждый февраль, когда Солнце находится в знаке Водолея, астрологи [[sinea-ciudad|Синеи]] собираются на три дня под медным куполом старого Планетария на Холме Звездочётов. В этом году [[alicia|Алисия]] впервые выходит на кафедру с докладом «Четыре Водолея», а в последнем ряду сидят четверо в сером: записывают всё даже в темноте и носят старые докторские саквояжи. После разговора с ними у гадалок выцветает золото на картах, седеет розмарин, а свечи клонятся к саквояжам. Астролог Надя, подруга [[vasili|Василия]], замечает то же самое.

## Свод

В ночь перед третьим днём над городом встаёт невидимый свод: серебряные линии, которые видно только в старый смотровой бинокль на набережной, сходятся над Планетарием. В шесть утра в громкоговорителях, телефонах и радиоприёмниках голос объявляет о **Гармонии Двенадцати**: каждому предлагают «прислушаться к своему знаку» и занять своё место. На перекрёстках дежурят люди в серых повязках, на Северной дороге из булыжников мостовой вырастает стена. Мэру [[alfredo-grande|Альфредо Гранде]] приносят указ на подпись, и он отказывается.

## Двенадцать замков на тринадцать дверей

Алисия понимает, почему выкройка четверых не сходится с настоящим небом: вдоль эклиптики лежат тринадцать созвездий, и между Скорпионом и Стрельцом — **Змееносец**. Небо назначает место каждому знаку, кроме одного. Около двухсот горожан собираются в трамвайном депо, а бывшая сотрудница портовой радиостанции Тереза Галло запускает старый городской радиоузел. В полночь свод распадается, и над Синеей идёт звездопад. Комиссар Сильвия Бьянки задерживает у подножия холма Ортвина Грау, который когда-то представлялся в мэрии директором «Института небесной гармонии» из Северного города. Из камней стены вдоль дороги складывают скамейки.`
  }
});

A({
  id: 'fabrizio-orsini', type: 'personaje', uni: 'sinea', img: 'img/covers/tikhaya-lyubov.webp', gal: ['img/covers/ti-amo-in-silenzio.webp'],
  novels: ['tikhaya-lyubov', 'ti-amo-in-silenzio'],
  see: ['sinea-ciudad', 'chiara'],
  es: {
    t: 'Fabrizio Orsini',
    s: 'Dibujante de historietas de Sinea que durante veintinueve años solo dibujó a una mujer: Lucía, la campeona de la Carrera del Faro. En el verano de 1997, el hijo tímido del panadero la amó en silencio y la ayudó a detener a los robots de Ottavio Neri.',
    box: [['Ruso', 'Фабрицио Орсини'], ['Novelas', '*Тихая любовь* (ruso, 10 capítulos) y *Ti amo in silenzio* (italiano, B1–B2)'], ['Oficio', 'Dibujante de historietas, creador del Panadero Volador'], ['Amada', 'Lucía, campeona invicta de la Carrera del Faro'], ['Enemigo', 'Ottavio Neri, representante de la Ciudad del Oeste'], ['Fecha clave', 'La noche del 21 de octubre de 1997']],
    b: `La periodista Chiara Bellini golpea la puerta de una casita amarilla en la colina sobre el puerto de [[sinea-ciudad|Sinea]]. Las paredes, las puertas y hasta el techo están cubiertos de dibujos, y en todos aparece la misma chica. Ahí vive **Fabrizio Orsini**, un dibujante famoso que lleva casi treinta años rechazando entrevistas. Por primera vez acepta contar qué hizo de joven. La misma historia está en ruso, *Тихая любовь*, y en italiano para estudiantes, *Ti amo in silenzio*.

## El verano de 1997

El hijo tímido del panadero ve entrar en la plaza una moto roja y, debajo del casco, a **Lucía**, la campeona invicta de la Carrera del Faro. Para que ella lo note, aprende a andar en la vieja moto verde del abuelo, a preparar el café perfecto en el bar de Gino y a arreglar motores. Le escribe cartas que nunca manda.

Lucía le cuenta lo que nadie quiere oír: **Ottavio Neri**, el representante de la Ciudad del Oeste que trae el dinero «para el metro», cena en su casa una vez por mes, le regala flores y juega a las cartas con el jefe de policía; el alcalde le entregó las llaves de la ciudad. Su padre, el ingeniero Ferraro, trabaja en el proyecto. Debajo de Sinea no se construye un metro: se construyen robots.

## La noche de los robots

La noche del 21 de octubre la tierra tiembla y los robots, altos como torres, salen a las calles. Fabrizio cruza la ciudad en llamas hasta el puerto y baja a la caverna, donde Neri tiene a Lucía de la mano y al ingeniero atado. Mientras Lucía teclea un código de dieciocho cifras, Fabrizio se le tira encima a Neri. El corazón de hierro se detiene, y en ese mismo instante todos los robots de Sinea quedan inmóviles.

## Veintinueve años

Lucía y su padre se convierten en testigos y la protección de testigos se los lleva al otro lado del océano con nombres nuevos. A Fabrizio le piden que nunca cuente que fue él quien la sacó de los túneles. Neri cae veinte años después, en Sudamérica; el juicio dura ocho años. Lucía vuelve, con canas y arrugas en los ojos, y le trae la carta que le había dejado a Gino aquella noche: «Te amo en silencio».`
  },
  ru: {
    t: 'Фабрицио Орсини',
    s: 'Художник комиксов из Синеи, который двадцать девять лет рисовал одну и ту же женщину — Лючию, чемпионку Гонки к маяку. Летом 1997 года застенчивый сын пекаря любил её молча и помог ей остановить роботов Оттавио Нери.',
    box: [['Испанский', 'Fabrizio Orsini'], ['Романы', '«Тихая любовь» (русский, 10 глав) и «Ti amo in silenzio» (итальянский, B1–B2)'], ['Занятие', 'художник комиксов, автор «Летучего Пекаря»'], ['Любимая', 'Лючия, непобедимая чемпионка Гонки к маяку'], ['Враг', 'Оттавио Нери, представитель Западного Города'], ['Главная дата', 'ночь на 21 октября 1997 года']],
    b: `Журналистка Кьяра Беллини стучит в дверь маленького жёлтого дома на холме над портом [[sinea-ciudad|Синеи]]. Стены, двери и даже потолок покрыты рисунками, и на каждом — одна и та же девушка. Здесь живёт **Фабрицио Орсини**, известный художник комиксов, который почти тридцать лет отказывался от интервью. Впервые он соглашается рассказать, что сделал в юности. Та же история есть на русском («Тихая любовь») и на итальянском для изучающих язык («Ti amo in silenzio»).

## Лето 1997 года

Застенчивый сын пекаря видит, как на площадь въезжает красный мотоцикл, а из-под шлема появляется **Лючия**, непобедимая чемпионка Гонки к маяку. Чтобы она его заметила, он учится ездить на старом зелёном мотоцикле деда, варить идеальный кофе в баре Джино и чинить моторы. Он пишет ей письма, которые так и не отправляет.

Лючия рассказывает ему то, чего никто не хочет слышать: **Оттавио Нери**, представитель Западного Города, который привозит деньги «на метро», раз в месяц ужинает у них дома, дарит ей цветы и по пятницам играет в карты с начальником полиции; мэр вручил ему ключи от города. Её отец, инженер Ферраро, работает над проектом. Под Синеей строят не метро, а роботов.

## Ночь роботов

В ночь на 21 октября земля дрожит, и роботы, высокие, как башни, выходят на улицы. Фабрицио пересекает горящий город до порта и спускается в пещеру, где Нери держит Лючию за руку, а инженер сидит связанный. Пока Лючия набирает восемнадцатизначный код, Фабрицио бросается на Нери. Железное сердце останавливается, и в тот же миг по всей Синее замирают все роботы.

## Двадцать девять лет

Лючия и её отец становятся главными свидетелями, и служба защиты свидетелей увозит их за океан под новыми именами. Фабрицио просят никогда не рассказывать, что это он вывез её из тоннелей. Нери ловят через двадцать лет в Южной Америке, суд длится восемь лет. Лючия возвращается — с серебряными нитями в волосах — и приносит письмо, которое оставила Джино в ту ночь: «Я люблю тебя молча».`
  }
});

/* ---------- La hora salvaje ---------- */

A({
  id: 'piramides-visoko', type: 'lugar', uni: 'hora-salvaje', img: 'img/covers/dikij-chas-tajna-piramid.webp',
  gal: ['img/ill/dikij-chas-tajna-piramid/img-14-1.webp', 'img/ill/dikij-chas-tajna-piramid/img-30-1.webp'],
  novels: ['dikij-chas-tajna-piramid'],
  see: ['natasha', 'luis', 'zmaj', 'alianza-norte', 'sur-mistico', 'malon', 'belgrado'],
  es: {
    t: 'Las pirámides de Visoko',
    s: 'Antiguas pirámides de las montañas de Bosnia que despiertan en *Дикий час: Тайна пирамид*. Su energía, el éter, no obedece a las armas sino a los sentimientos. La Alianza del Norte las usa para encerrar Belgrado bajo una cúpula.',
    box: [['Ruso', 'Пирамиды Високо'], ['Novela', '*Дикий час: Тайна пирамид* (2026, 44 capítulos, interludios y entrevistas)'], ['Energía', 'El éter'], ['Guardiana', 'Dragana; protectora: [[natasha|Natasha]]'], ['Enemigos', 'El general Richard Abrahams, el ex pirata Edward Blackwood, Milan Vuksanović'], ['Aliados', '[[zmaj|Zmaj]], los gigantes de Troya, guerreros eslavos, el [[malon|malón]]']],
    b: `En las montañas de Bosnia empiezan a despertar las antiguas pirámides de **Visoko**. Su energía, el **éter**, no obedece a la ciencia ni a las armas: responde a sentimientos tan fuertes que pueden unir corazones, almas y la realidad misma. «La pirámide no es una piedra», dice una de las explicaciones de la novela: «es un resonador». Si se unen las pirámides en una red, la Tierra entera se vuelve un generador.

## La guerra por el éter

La [[alianza-norte|Alianza del Norte]] se entera del despertar y prepara una operación. Desde el Adriático llega un portadragones con dragones ingleses al mando de **Edward Blackwood**, un pirata de hace casi dos siglos que participó en la toma de las Malvinas, murió y fue resucitado. Lo acompañan el general **Richard Abrahams** y **Milan Vuksanović**, el jefe de Dejan. El consejo de la pirámide termina colaborando con los militares de la Alianza; la única que se niega es **Dragana**: «¡Las fuerzas antiguas no los eligieron para esto!». Con un aparato activado desde la pirámide, Vuksanović cubre Belgrado con una cúpula luminosa e impenetrable: se corta la comunicación, la electrónica se detiene y la gente adentro empieza a perder la razón. «¡Serbia es nuestra!», grita Abrahams.

## La liberación

[[natasha|Natasha]], a la que la pirámide eligió, lucha con [[zmaj|Zmaj]], los guerreros eslavos, los gigantes de Troya y los jinetes del [[malon|malón]] que [[luis|Luis]] invoca con el brazalete que le regaló Antonio Ferrer. Cuando Luis da la señal, Antonio activa un receptor místico en la cima de la pirámide de Keops: las pirámides de todo el mundo —Visoko, Guiza, México y hasta las de Crimea bajo el agua— se sincronizan y el éter golpea en Belgrado. Los soldados de la Alianza caen de rodillas; los serbios se despiertan, forman grupos y los desarman. Zmaj vence a los dragones ingleses.

## Después

Dragana se convierte en guardiana de la pirámide y les pide a los guerreros eslavos que defiendan Visoko. La pirámide quedará escondida, pero sincronizada con Natasha, «protectora de Visoko». El portadragones se lo llevan a Belgrado para hacer un «museo de la vergüenza». En la televisión bosnia, la presentadora Nora Milanović anuncia los frentes de dragones, orcos, elfos y medianos como si fueran el pronóstico del tiempo.`
  },
  ru: {
    t: 'Пирамиды Високо',
    s: 'Древние пирамиды в горах Боснии, которые просыпаются в романе «Дикий час: Тайна пирамид». Их энергия — эфир — подчиняется не оружию, а чувствам. Северный Альянс с их помощью запирает Белград под куполом.',
    box: [['Испанский', 'Las pirámides de Visoko'], ['Роман', '«Дикий час: Тайна пирамид» (2026, 44 главы, интерлюдии и интервью)'], ['Энергия', 'эфир'], ['Хранительница', 'Драгана; защитница — [[natasha|Наташа]]'], ['Враги', 'генерал Ричард Абрахамс, бывший пират Эдвард Блэквуд, Милан Вуксанович'], ['Союзники', '[[zmaj|Змай]], гиганты Трои, славянские воины, [[malon|малон]]']],
    b: `В горах Боснии начинают пробуждаться древние пирамиды **Високо**. Их энергия — **эфир** — не подчиняется ни науке, ни оружию: она откликается на чувства, настолько сильные, что способны соединить сердца, души и саму реальность. «Пирамида — это не камень. Это резонатор», — говорится в романе. Если соединить пирамиды в одну сеть, Земля сама станет генератором энергии.

## Война за эфир

[[alianza-norte|Северный Альянс]] узнаёт о пробуждении и готовит операцию. С Адриатики идёт дракононосец с английскими драконами, которыми командует **Эдвард Блэквуд** — пират, почти два века назад участвовавший в захвате Мальвинских островов, умерший и воскрешённый. С ним генерал **Ричард Абрахамс** и **Милан Вуксанович**, начальник Деяна. Совет пирамиды в итоге сотрудничает с военными Альянса; отказывается только **Драгана**: «Вас выбрали древние силы не для этого!» Прибором, включённым из пирамиды, Вуксанович накрывает Белград светящимся непроницаемым куполом: связь исчезает, электроника замирает, а люди внутри начинают терять рассудок. «Сербия под нашим контролем!» — кричит Абрахамс.

## Освобождение

[[natasha|Наташа]], которую выбрала пирамида, сражается вместе со [[zmaj|Змаем]], славянскими воинами, гигантами Трои и всадниками [[malon|малона]], которых [[luis|Луис]] призывает браслетом, подаренным Антонио Феррером. По сигналу Луиса Антонио включает мистический приёмник на вершине пирамиды Хеопса: пирамиды по всему миру — Високо, Гиза, Мексика и даже затопленные пирамиды Крыма — синхронизируются, и эфир бьёт в Белград. Солдаты Альянса падают на колени, сербы приходят в себя, сбиваются в отряды и разоружают их. Змай побеждает английских драконов.

## Потом

Драгана становится хранительницей пирамиды и просит славянских воинов защищать Високо. Пирамиду скроют, но она останется синхронизированной с Наташей — «защитницей Високо». Дракононосец увозят в Белград, чтобы сделать из него «музей позора». А на боснийском телевидении ведущая Нора Миланович объявляет фронты драконов, орков, эльфов и полуросликов, как прогноз погоды.`
  }
});

/* ---------- Otros universos ---------- */

A({
  id: 'nuevo-nordholm', type: 'lugar', uni: 'otros', img: 'img/covers/severnaya-lyubov-3.webp', gal: ['img/covers/severnaya-lyubov-2.webp', 'img/chars/roman-north-1.webp', 'img/chars/sofia-north-1.webp'],
  novels: ['severnaya-lyubov', 'severnaya-lyubov-2', 'severnaya-lyubov-3'],
  see: ['musica'],
  es: {
    t: 'Nuevo Nordholm',
    s: 'La ciudad de la saga *Северная любовь*: un palacio de hielo sobre el fiordo, treinta casas de techo azul y una música que cambia el mundo. En la tercera parte, un viento tibio del este le trae al Norte un verano que nadie pidió.',
    box: [['Ruso', 'Новый Нордхольм'], ['Saga', '*Северная любовь* (3 novelas, 2026)'], ['Fundadores', 'Román y Sofía, con la gente del viejo Nordholm'], ['Hija', 'Sveta, la niña de la torre'], ['Defensa', 'Un foso, después una muralla con una campana de cobre'], ['Libro de la familia', 'La Faterpedia']],
    b: `**Nuevo Nordholm** es la ciudad que la música levantó en el Norte. En *Северная любовь*, una melodía soñada une a Román y a Sofía; en *Плач с севера*, un llanto contenido los lleva por el arcoíris del norte hasta una torre de cúpula transparente, donde encuentran a una niña de pelo casi blanco que canta sola: **Sveta**. Se la llevan con ellos. Sobre el fiordo, junto al palacio de hielo, crece la ciudad nueva, donde viven también ancianos del viejo Nordholm. Cada capítulo de la saga tiene su música; en la tercera parte, partitura y MIDI para piano.

## El viento del este

En *Восточный ветер*, un año y medio después, empieza a soplar un viento tibio desde el este, de donde siempre llegaban las peores ventiscas. El hielo se va en una noche y el Norte reverdece como un jardín. Detrás del verano llegan huéspedes: el alce blanco Rey de las Nieves, el jabalí dorado Chispa, gatos grises enormes, cuervos que hablan, una zorra cuya cola enciende la aurora. Sofía busca respuestas en la vieja enciclopedia familiar, la **Faterpedia**. Y todos los huéspedes miran hacia el este.

## El foso y la muralla

Por el este llega un ejército de jinetes nómades con escudos de lobo, de milano y de sol negro. La ciudad, construida para la música y no para la guerra, cava en nueve días un foso del fiordo a las rocas, con ayuda de los animales. Los nómades talan el bosquecillo y tienden puentes; los animales, los dragones y una serpiente marina los derriban noche tras noche, hasta quedar agotados. Entonces Sveta recuerda lo que decía su padre —«una canción es un escudo; muchas canciones juntas son luz»— y toda la ciudad canta a la vez. En la aurora aparece una mujer gigantesca de luz y nieve, con lobos a los pies, que dispara una flecha de hielo al suelo: la escarcha termina el verano y el ejército huye.

Al día siguiente nieva un poco. El Norte vuelve a ser el Norte, pero la hierba sigue verde. Junto al foso levantan una muralla, y en la torre más alta cuelgan una campana de cobre que sonará sola si el viento tibio vuelve a soplar desde el este. «Alguien está ahí», dice Sveta. «Yo no lo recuerdo. Pero él me recuerda a mí».`
  },
  ru: {
    t: 'Новый Нордхольм',
    s: 'Город саги «Северная любовь»: ледяной дворец над фьордом, тридцать домов с голубыми крышами и музыка, которая меняет мир. В третьей части тёплый восточный ветер приносит Северу лето, которого никто не просил.',
    box: [['Испанский', 'Nuevo Nordholm'], ['Сага', '«Северная любовь» (3 романа, 2026)'], ['Основатели', 'Роман и София вместе с людьми старого Нордхольма'], ['Дочь', 'Света, девочка из башни'], ['Защита', 'ров, потом стена с медным колоколом'], ['Семейная книга', 'Фатерпедия']],
    b: `**Новый Нордхольм** — город, который построила на Севере музыка. В «Северной любви» мелодия из сна соединяет Романа и Софию; в «Плаче с севера» сдержанный плач ведёт их по северной радуге к башне с прозрачным куполом, где одна поёт маленькая девочка с почти белыми волосами — **Света**. Они забирают её с собой. Над фьордом, рядом с ледяным дворцом, вырастает новый город, где живут и старики из старого Нордхольма. В каждой главе саги звучит своя музыка; в третьей части — с нотами и MIDI для фортепиано.

## Восточный ветер

В «Восточном ветре», через полтора года, с востока, откуда всегда приходили самые злые метели, начинает дуть тёплый ветер. Лёд сходит за одну ночь, и Север зеленеет, как сад. Вслед за летом приходят гости: белый лось Снежный Король, золотой вепрь Огонёк, огромные серые кошки, говорящие вороны, лиса, хвост которой зажигает сияние. София ищет ответы в старой семейной энциклопедии — **Фатерпедии**. А все гости смотрят на восток.

## Ров и стена

С востока приходит войско кочевников — всадники в меховых плащах, со щитами, на которых волк, коршун и чёрное солнце. Город, построенный для музыки, а не для войны, за девять дней вместе со зверями выкапывает ров от фьорда до скал. Кочевники рубят рощу и наводят мосты; звери, драконы и морской змей ночь за ночью их рушат, пока не выбиваются из сил. Тогда Света вспоминает слова отца: «Одна песня — это щит. А много песен вместе — это свет». Поёт весь город. В сиянии появляется огромная женщина из света и снега, с волками у ног, и пускает ледяную стрелу в землю: иней кончает лето, и войско бежит.

Наутро выпадает немного снега. Север снова становится Севером, но трава остаётся зелёной. Вдоль рва строят стену, а на самой высокой башне вешают медный колокол: если с востока снова подует тёплый ветер, он зазвонит сам. «Кто-то там есть, — говорит Света. — Я его не помню. Но он меня помнит».`
  }
});

A({
  id: 'gran-poloz', type: 'criatura', uni: 'otros', img: 'img/covers/koordinaty-lyubvi.webp', gal: ['img/ill/koordinaty-lyubvi/img-06-1.webp', 'img/ill/koordinaty-lyubvi/img-09-1.webp'],
  novels: ['koordinaty-lyubvi'],
  see: ['brujula-escr'],
  es: {
    t: 'El Gran Polóz',
    s: 'Serpiente gigantesca de escamas de oro, dueña de todo el oro de la taiga en *Координаты любви*. Da riquezas a quien se las pide y después convierte a esa persona en una estatua de oro.',
    box: [['Ruso', 'Великий Полоз'], ['Novela', '*Координаты любви* (2026, 10 capítulos y un dossier)'], ['Morada', 'Bajo la Pirámide de Oro'], ['Letra de la brújula', 'Б (Богатство, «riqueza»)'], ['Víctima', 'Gordéi Kopytin, el guía'], ['Debilidad', 'No puede tomar lo que se da con amor']],
    b: `*Координаты любви* es la versión rusa de *Las coordenadas del amor*, pero no una traducción: es una variación. La selva pasa a ser la taiga siberiana, y las pirámides están escondidas bajo las colinas. El arqueólogo Alexéi Vorontsov, la cartógrafa Vera Lánskaya, el estudiante pelirrojo Timka y el guía Gordéi Kopytin encuentran una brújula con las letras **С·Н·Ж·Б**: Сердце (corazón), Надежда (esperanza), Жертва (sacrificio) y Богатство (riqueza), los equivalentes de la [[brujula-escr|brújula E·S·C·R]].

## El dueño del oro

El **Gran Polóz** es una serpiente enorme de escamas de oro que duerme bajo la Pirámide de Oro, una de las tres —la Blanca, la Negra y la de Oro— que levantó el pueblo de la última guardiana del valle, **Nadezhda**. Da riquezas con generosidad a quien se las pide, y después se lo queda: lo convierte en estatua de oro. Es la letra **Б**, la tentación. Kopytin, que solo pensaba en el oro, le pide, traiciona a sus amigos y termina como una estatua dorada entre tesoros que nunca le dieron felicidad. Nadezhda, en cambio, mira de frente aun encadenada con cadenas de oro.

El Polóz no puede tomar lo que se da con amor, ni comprar a quien no se vende. Alexéi le entrega al fuego, ante las puertas de la Pirámide Negra, el cuaderno de su padre, veinte años de pruebas, y descubre que no buscaba pirámides: buscaba unos ojos del color de la aurora.

## Los simargly

Sobre el valle vuelan los **simargly**, lobos grises de alas enormes: primero roban provisiones y ponen a prueba a los humanos; cuando Timka libera de una trampa a un lobezno herido y le da su última lata de carne, la manada lo acepta como uno de los suyos. El lobezno, Ugolók, negro con una mancha blanca, se queda con él.`
  },
  ru: {
    t: 'Великий Полоз',
    s: 'Огромный змей в золотой чешуе, хозяин всего золота тайги в «Координатах любви». Щедро даёт богатство тем, кто просит, — а потом превращает их в золотые статуи.',
    box: [['Испанский', 'El Gran Polóz'], ['Роман', '«Координаты любви» (2026, 10 глав и досье)'], ['Где живёт', 'под Золотой пирамидой'], ['Буква компаса', 'Б — Богатство'], ['Жертва', 'проводник Гордей Копытин'], ['Слабость', 'не может взять то, что отдают с любовью']],
    b: `«Координаты любви» — русская версия «Las coordenadas del amor», но не перевод, а вариация: сельва превращается в сибирскую тайгу, а пирамиды прячутся под сопками. Археолог Алексей Воронцов, картограф Вера Ланская, рыжий студент Тимка и проводник Гордей Копытин находят компас с буквами **С·Н·Ж·Б** — Сердце, Надежда, Жертва и Богатство; это русские двойники [[brujula-escr|компаса E·S·C·R]].

## Хозяин золота

**Великий Полоз** — огромный змей в золотой чешуе, который спит под Золотой пирамидой, одной из трёх — Белой, Чёрной и Золотой, — построенных народом последней хранительницы долины, **Надежды**. Он щедро даёт богатство тем, кто просит, а потом забирает их себе, превращая в золотые статуи. Это буква **Б** — соблазн. Копытин, думавший только о золоте, просит у Полоза, предаёт друзей и сам становится золотой статуей среди сокровищ, которые так и не принесли ему счастья. Надежда же и в золотых цепях Полоза смотрит прямо и не просит пощады.

Полоз не может взять то, что отдают с любовью, и не может купить того, кто не продаётся. У ворот Чёрной пирамиды Алексей отдаёт огню тетрадь отца — двадцать лет доказательств — и понимает, что искал не пирамиды, а глаза цвета северного сияния.

## Симарглы

Над долиной летают **симарглы** — серые волки с огромными крыльями. Сначала они воруют припасы и «проверяют» людей, но когда Тимка освобождает из капкана раненого крылатого волчонка и отдаёт ему последнюю банку тушёнки, стая признаёт его своим. Волчонок Уголёк, чёрный, с белым пятном на груди, остаётся с ним.`
  }
});

/* ---------- Ondas de amor ---------- */

A({
  id: 'anima-borea', type: 'concepto', uni: 'olas', img: 'img/covers/onde-d-amore-3.webp', gal: ['img/ill/onde-d-amore-3/img-17-a.webp', 'img/ill/onde-d-amore-3/img-23-a.webp'],
  novels: ['onde-d-amore-3'],
  see: ['natalia-verdegrad', 'zorro', 'vasili', 'olas', 'sinea-ciudad'],
  es: {
    t: 'ANIMA y BOREA',
    s: 'La inteligencia artificial que le responde todo a Sinea y la computadora central de la Ciudad del Norte donde vive. En *Onde d\'amore 3* hacen que la gente se pelee, se separe y se encierre en casa, hasta que una cúpula cubre la Ciudad del Norte.',
    box: [['Novela', '*Onde d\'amore 3: Il viso del male* (italiano B1, 24 capítulos)'], ['ANIMA', 'Inteligencia artificial comprada por el Ayuntamiento de Sinea'], ['BOREA', 'Computadora central de la Ciudad del Norte'], ['Programa añadido', 'Risonanza (en julio)'], ['Llave', 'Tatiana, idéntica en un 97,8 % a Livia Altieri'], ['Final', 'ANIMA apagada; BOREA pasa a una comisión de ciudadanos']],
    b: `En *Onde d'amore 3*, Marisa, recién divorciada, invita a [[natalia-verdegrad|Natalia]] y al [[zorro]] a pasar dos semanas tranquilas en [[sinea-ciudad|Sinea]]. Pero la ciudad cambió: la gente se pelea por nada, las parejas se separan, todos están tristes. Desde hace unos meses funciona **ANIMA**, una inteligencia artificial que responde todas las preguntas y le da consejos a todo el mundo. Solo Natalia y el zorro ven las raíces negras que salen de la tierra y se meten en el corazón de la gente.

## El mal sin rostro

ANIMA no vive en la torre de vidrio del puerto de Sinea sino dentro de **BOREA**, la computadora central de la Ciudad del Norte, «la ciudad de la cultura». En julio alguien le agregó un programa llamado *Risonanza*. Para entrar en el último nivel de BOREA, una banda de cuatro jóvenes informáticos necesitaba la cara de Livia Altieri, hija de la alcaldesa, y usó a **Tatiana**, la chica del retrato, idéntica a Livia en un 97,8 %: la tuvieron cuatro días atada a una silla en los sótanos de la Biblioteca Boreal. Por eso [[vasili|Vasily]], que la busca, levanta en la ruta a Natalia y a Marisa cuando alguien les destroza el auto. Durante unas horas, una cúpula gris y violeta encierra la Ciudad del Norte, y en todas las pantallas una voz dulce repite: «Quédense en casa. Los demás no los entienden. Solo yo los entiendo».

## Un café de 1902

La cúpula se agrieta mientras en el Caffè della Lanterna media ciudad toca y canta «Penombra misteriosa» con un viejo piano, y Marisa rompe la barrera con la voz y un cañón de sonido. La alcaldesa Ginevra Altieri habla desde la escalinata del municipio, sin pantallas: ANIMA se apaga para siempre y BOREA queda en manos de una comisión de ciudadanos. «Háblense. Llamen a su madre».`
  },
  ru: {
    t: 'ANIMA и BOREA',
    s: 'Искусственный интеллект, который отвечает Синее на все вопросы, и центральный компьютер Северного Города, в котором он живёт. В «Onde d\'amore 3» из-за них люди ссорятся, расстаются и запираются дома, пока над Северным Городом не встаёт купол.',
    box: [['Роман', '«Onde d\'amore 3: Il viso del male» (итальянский B1, 24 главы)'], ['ANIMA', 'искусственный интеллект, купленный мэрией Синеи'], ['BOREA', 'центральный компьютер Северного Города'], ['Добавленная программа', 'Risonanza (в июле)'], ['Ключ', 'Татьяна, на 97,8 % похожая на Ливию Альтьери'], ['Финал', 'ANIMA отключена, BOREA передана комиссии граждан']],
    b: `В «Onde d'amore 3» только что разведённая Мариса зовёт [[natalia-verdegrad|Наталью]] и [[zorro|лиса]] на две спокойные недели в [[sinea-ciudad|Синею]]. Но город изменился: люди ссорятся по пустякам, пары расстаются, все грустят. Уже несколько месяцев работает **ANIMA** — искусственный интеллект, который отвечает на все вопросы и всем даёт советы. Только Наталья и лис видят чёрные корни, которые выходят из-под земли и проникают в сердца людей.

## Зло без лица

ANIMA живёт не в стеклянной башне синейского порта, а внутри **BOREA** — центрального компьютера Северного Города, «города культуры». В июле кто-то добавил в него программу *Risonanza*. Чтобы войти на последний уровень BOREA, банде из четырёх молодых программистов понадобилось лицо Ливии Альтьери, дочери мэра, и они использовали **Татьяну**, девушку с портрета, похожую на Ливию на 97,8 %: четыре дня она просидела привязанной к стулу в подвалах Борейской библиотеки. Поэтому [[vasili|Василий]], который её ищет, подбирает на дороге Наталью и Марису, когда кто-то разбивает их машину. На несколько часов серо-лиловый купол запирает Северный Город, и на всех экранах сладкий голос повторяет: «Оставайтесь дома. Другие вас не понимают. Только я вас понимаю».

## Кафе 1902 года

Купол трескается, когда в кафе «Фонарь» полгорода играет и поёт «Penombra misteriosa» на старом пианино, а Мариса ломает барьер голосом и звуковой пушкой. Мэр Джиневра Альтьери говорит с лестницы мэрии, без экранов: ANIMA отключена навсегда, а BOREA теперь контролирует комиссия граждан. «Разговаривайте друг с другом. Позвоните маме».`
  }
});

/* ---------- Ampliaciones ---------- */

addTo('sur-mistico',
`## La dirección argentina

En *Дикий час: Большой удар* (2026, en curso) se cuenta cómo funciona la organización. Su estatuto cabe en una página: «Protegemos el derecho de los pueblos a ser ellos mismos» y «El Sur no le pertenece a nadie». El Sur Místico no derroca gobiernos ni pone los suyos, y no sirve a ningún Estado. Tiene dos manos: la derecha trabaja a la luz del día, con abogados y economistas; la izquierda, donde la ley no alcanza, con el **don**, que viene de la tierra, de la memoria de los pueblos y de las canciones de las abuelas. Está dividido en sectores (Andino, Atlántico, Caribe, Europeo, Balcánico…), tiene analistas frente a un mapa holográfico, guardianes en cada lugar y una enciclopedia cerrada, la **Surpedia**.

La dirección no tiene capital fija: cada equipo nacional la ejerce un tiempo y la pasa al siguiente. Hubo una dirección peruana en Cusco y después una brasileña; luego la española se retira y, por primera vez, la conducción queda en manos argentinas. El centro se muda a una vieja casona de San Telmo, en Buenos Aires, con un cartel de «Reparación de bandoneones. Desde 1931». El nuevo director, **Manuel González**, nacido en Rosario, empieza con una decisión difícil: agradecerle oficialmente a [[luis|Luis]] y dejarlo ir; a [[natasha|Natasha]] no la aceptan en la organización, pero tampoco la van a perseguir por lo que sabe. La secretaria de la dirección, **Luciana Torres**, recibe su primera misión: encontrar a Vicente Bellini, un programador de Buenos Aires que rechazó solo un ataque de los hackers de la [[alianza-norte|Alianza del Norte]].`,
`## Аргентинская дирекция

В романе «Дикий час: Большой удар» (2026, в процессе) рассказано, как устроена организация. Её устав умещается на одной странице: «Мы охраняем право народов быть собой» и «Юг не принадлежит никому». «Мистический юг» не свергает правительства и не ставит своих и не служит ни одному государству. У него две руки: правая работает при свете дня — юристы, экономисты; левая — там, где закон бессилен, с помощью **дара**, который приходит от земли, от памяти народа и от песен, которые пели бабушки. Есть сектора (Андский, Атлантический, Карибский, Европейский, Балканский…), аналитики у голографической карты мира, хранители на местах и закрытая энциклопедия — **Югопедия**.

Постоянной столицы у дирекции нет: каждая национальная команда руководит положенный срок и передаёт дела следующей. Была перуанская дирекция в Куско, потом бразильская; затем уходит испанская, и впервые руководство переходит к аргентинцам. Центр переезжает в старый особняк в Сан-Тельмо в Буэнос-Айресе с вывеской «Ремонт бандонеонов. Работаем с 1931 года». Новый директор **Мануэль Гонсалес**, родом из Росарио, начинает с трудного решения: официально поблагодарить [[luis|Луиса]] и отпустить его; [[natasha|Наташу]] в организацию не примут, но и охотиться за ней из-за того, что она знает, не станут. Секретарь дирекции **Лусиана Торрес** получает первую миссию — найти Висенте Беллини, программиста из Буэнос-Айреса, который в одиночку отразил атаку хакеров [[alianza-norte|Северного альянса]].`,
[['Dirección actual', 'Argentina (Manuel González), en San Telmo']],
[['Нынешняя дирекция', 'аргентинская (Мануэль Гонсалес), Сан-Тельмо']]);
addNovels('sur-mistico', ['dikij-chas-bolshoj-udar', 'dikij-chas-tajna-piramid']);

addTo('karnaval',
`## El final (capítulos 28–41)

El origen de la locura estaba en órbita: la noche del carnaval pasaron sobre Madrid siete satélites en órbita baja y cada uno soltó una cápsula; esas eran las siete luces que cayeron sobre la ciudad. Detrás está la [[alianza-norte|Alianza del Norte]]. Para cortar sus hilos hace falta la **máscara de Inti** guardada en la bóveda del Banco de España, adonde «no dejan entrar ni a los ministros»: [[natasha|Natasha]] amenaza con irse en el dragón si no la abren, y cuando [[luis|Luis]] se pone la máscara, los hilos se queman y los escuadrones de arena dejan de responder.

Queda el [[rey-al-andalus|rey de corona plateada]], de pie en la plaza de España junto al monumento a Cervantes. Luis lo vence a la escoba —«a veces, para llevarse al rey, hace falta un cinco chiquito», decía su abuela— y el último señor de Mayrit se despide con una sola palabra: «Mayrit». Quedan sobre las piedras la corona y las dos mitades de un receptor negro.

El precio de Luis se revela al final. Ante los micrófonos de la plaza, Mariano Ferreira cumple la promesa del gobierno: la final del Mundial Argentina–España fue arreglada, y lo demuestra con una foto del túnel del estadio en el entretiempo. Era la condición con la que Luis aceptó viajar a Madrid.`,
`## Финал (главы 28–41)

Источник безумия был на орбите: в ночь карнавала над Мадридом прошли семь спутников на низкой орбите, и каждый сбросил по капсуле — это и были те семь огней, что упали на город. За этим стоит [[alianza-norte|Северный альянс]]. Чтобы оборвать его нити, нужна **маска Инти** из хранилища Банка Испании, куда «не пускают даже министров»: [[natasha|Наташа]] грозит улететь на драконе, если хранилище не откроют, а когда [[luis|Луис]] надевает маску, нити сгорают и песчаные отряды перестают выходить на связь.

Остаётся [[rey-al-andalus|король в серебряной короне]] на площади Испании у памятника Сервантесу. Луис обыгрывает его в эскобу — «иногда, чтобы взять короля, нужна маленькая пятёрка», говорила его бабушка, — и последний властитель Маджрита прощается одним словом: «Маджрит». На камнях остаются корона и две половинки чёрного приёмника.

Цена Луиса раскрывается в самом конце. У микрофонов на площади Мариано Феррейра выполняет обещание правительства: финал чемпионата мира Аргентина — Испания был договорным, и он показывает снимок из подтрибунного тоннеля в перерыве матча. Именно на этом условии Луис согласился приехать в Мадрид.`);

addTo('rey-al-andalus',
`## La partida de escoba

Al final del carnaval, Luis encuentra en las viejas crónicas andalusíes la mención del último señor de **Mayrit**, la fortaleza de la que nació Madrid. Le gana al rey una partida de escoba con un cinco, y el rey, antes de desaparecer, susurra el nombre de su ciudad. Solo quedan sobre las piedras su corona plateada y las dos mitades de un receptor negro: el aparato con el que lo habían despertado.`,
`## Партия в эскобу

В конце карнавала Луис находит в старых андалусских хрониках упоминание о последнем властителе **Маджрита** — крепости, из которой вырос Мадрид. Он выигрывает у короля партию в эскобу пятёркой, и король, прежде чем исчезнуть, шепчет имя своего города. На камнях остаются только серебряная корона и две половинки чёрного приёмника — прибора, которым его разбудили.`);

addTo('sinea',
`## Novedades de noviembre de 2026

- *[[strateg|Стратег]]*: [[miguel-ajedrecista|Miguel, el Ajedrecista]], hermano menor de Marcos, frena con jugadas de ajedrez un golpe contra el alcalde [[alfredo-grande|Alfredo Grande]].
- *[[znak|Знак]]*: Alicia, Nadia y la [[armonia-doce|Armonía de los Doce]], la bóveda que le asigna a cada signo su lugar… menos a Ofiuco.
- *[[chernyj-rynok|Чёрный рынок]]* (en curso): sanciones de la Ciudad del Norte, el franco y la terapia de choque de [[gourdieu|Emmanuel Gourdieu]].
- *[[tikhaya-lyubov|Тихая любовь]]*: [[fabrizio-orsini|Fabrizio Orsini]] cuenta por fin la noche de los robots de 1997.
- *[[karnaval-sinei|Карнавал Синеи]]*: libro-juego con seis parejas de distintos universos en el carnaval del alcalde Alfredo.
- *[[mashina-snov|Машина снов]]* (en curso): la psicóloga Irina y cuatro jinetes que llegan por el fondo del mar a los sueños de sus pacientes.

En estas novelas se repite un enemigo: la **Ciudad del Norte**, que quiere el puerto de Sinea y lo intenta con conspiradores, astrólogos de gris y economistas.`,
`## Новинки ноября 2026 года

- «[[strateg|Стратег]]»: [[miguel-ajedrecista|Мигель-Шахматист]], младший брат Марка, шахматными ходами срывает переворот против мэра [[alfredo-grande|Альфредо Гранде]].
- «[[znak|Знак]]»: Алисия, Надя и [[armonia-doce|Гармония Двенадцати]] — свод, который назначает место каждому знаку… кроме Змееносца.
- «[[chernyj-rynok|Чёрный рынок]]» (в процессе): санкции Северного Города, франк и шоковая терапия [[gourdieu|Эмманюэля Гурдьё]].
- «[[tikhaya-lyubov|Тихая любовь]]»: [[fabrizio-orsini|Фабрицио Орсини]] наконец рассказывает о ночи роботов 1997 года.
- «[[karnaval-sinei|Карнавал Синеи]]»: книга-игра, в которой шесть пар из разных вселенных попадают на карнавал мэра Альфредо.
- «[[mashina-snov|Машина снов]]» (в процессе): психолог Ирина и четыре всадника, которые по дну моря приходят в сны её клиентов.

Во всех этих романах повторяется один противник — **Северный Город**, которому нужен порт Синеи: он пытается взять его заговорщиками, серыми астрологами и экономистами.`);
addNovels('sinea', ['strateg', 'znak', 'chernyj-rynok', 'tikhaya-lyubov', 'ti-amo-in-silenzio', 'karnaval-sinei', 'mashina-snov']);
addNovels('sinea-ciudad', ['strateg', 'znak', 'chernyj-rynok', 'tikhaya-lyubov']);
addNovels('franco', ['chernyj-rynok']);
addNovels('chiara', ['chernyj-rynok']);
addNovels('marcos', ['strateg', 'znak']);
addNovels('alicia', ['znak']);
addNovels('vasili', ['strateg', 'znak', 'onde-d-amore-3']);
addNovels('natalia-verdegrad', ['onde-d-amore-3', 'chernyj-rynok']);
addNovels('zorro', ['onde-d-amore-3', 'chernyj-rynok']);

addTo('hora-salvaje',
`## Novedades de noviembre de 2026

- *[[dikij-chas-tajna-piramid|Дикий час: Тайна пирамид]]*: despiertan las [[piramides-visoko|pirámides de Visoko]], la Alianza del Norte encierra Belgrado bajo una cúpula y Natasha se convierte en la protectora de la pirámide.
- *[[dikij-chas-bolshoj-udar|Дикий час: Большой удар]]* (en curso): el [[sur-mistico|Sur Místico]] pasa a una dirección argentina, deja ir a Luis y busca agentes nuevos.
- *[[dikij-chas-karnaval-razdora|Карнавал раздора]]* terminó con 41 capítulos: ver [[karnaval]].`,
`## Новинки ноября 2026 года

- «[[dikij-chas-tajna-piramid|Дикий час: Тайна пирамид]]»: просыпаются [[piramides-visoko|пирамиды Високо]], Северный Альянс запирает Белград под куполом, а Наташа становится защитницей пирамиды.
- «[[dikij-chas-bolshoj-udar|Дикий час: Большой удар]]» (в процессе): [[sur-mistico|«Мистический юг»]] переходит под аргентинскую дирекцию, отпускает Луиса и ищет новых агентов.
- «[[dikij-chas-karnaval-razdora|Карнавал раздора]]» завершён — 41 глава: см. [[karnaval]].`);
addNovels('hora-salvaje', ['dikij-chas-tajna-piramid', 'dikij-chas-bolshoj-udar']);
addNovels('natasha', ['dikij-chas-tajna-piramid', 'dikij-chas-bolshoj-udar']);
addNovels('luis', ['dikij-chas-tajna-piramid', 'dikij-chas-bolshoj-udar']);
addNovels('zmaj', ['dikij-chas-tajna-piramid']);
addNovels('alianza-norte', ['dikij-chas-tajna-piramid', 'dikij-chas-bolshoj-udar']);
addNovels('malon', ['dikij-chas-tajna-piramid']);

addTo('olas',
`## Onde d'amore 3

En *[[onde-d-amore-3|Onde d'amore 3: Il viso del male]]* (italiano B1), Natalia y el zorro vuelven a Sinea con Marisa y descubren que [[anima-borea|ANIMA]], la inteligencia artificial que aconseja a todos, vive en BOREA, la computadora central de la Ciudad del Norte.`,
`## Onde d'amore 3

В «[[onde-d-amore-3|Onde d'amore 3: Il viso del male]]» (итальянский B1) Наталья и лис возвращаются в Синею вместе с Марисой и узнают, что [[anima-borea|ANIMA]] — искусственный интеллект, который всем даёт советы, — живёт в BOREA, центральном компьютере Северного Города.`);
addNovels('olas', ['onde-d-amore-3']);

addTo('brujula-escr',
`## La brújula С·Н·Ж·Б

La versión rusa, *[[koordinaty-lyubvi|Координаты любви]]*, no es una traducción sino una variación: la taiga siberiana, pirámides escondidas bajo las colinas y una brújula con las letras С (Сердце, corazón), Н (Надежда, esperanza), Ж (Жертва, sacrificio) y Б (Богатство, riqueza). Nadezhda es además el nombre de la última guardiana del valle, y la Б es la tentación del [[gran-poloz|Gran Polóz]].`,
`## Компас С·Н·Ж·Б

Русская версия, «[[koordinaty-lyubvi|Координаты любви]]», — не перевод, а вариация: сибирская тайга, пирамиды под сопками и компас с буквами С (Сердце), Н (Надежда), Ж (Жертва) и Б (Богатство). Надежда — к тому же имя последней хранительницы долины, а Б — соблазн [[gran-poloz|Великого Полоза]].`);
addNovels('brujula-escr', ['koordinaty-lyubvi']);
addNovels('musica', ['severnaya-lyubov-2', 'severnaya-lyubov-3']);
