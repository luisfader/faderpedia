// Novedades de litmir de fines de octubre y principios de noviembre de 2026:
// «La reina de la Vendimia» (cap. 11–23), «Карнавал раздора» (cap. 15–27), «Предчувствие 2.3»,
// «Ladro di cuori 3», «La gran conspiración» (cap. 3–10), «El tango más triste» y la traducción checa «Královna vinobraní».
// Artículos nuevos con A() y ampliaciones con addTo() (definida en a-novedades.js).
window.ARTICLES = window.ARTICLES || [];
window.A = window.A || function (a) { window.ARTICLES.push(a); };

// Traducción checa de «La reina de la Vendimia»: misma historia, mismas sinopsis (la española y la rusa se definen en a-reina-vendimia.js).
window.SINOPSIS = window.SINOPSIS || {};
window.SINOPSIS['kralovna-vinobrani'] = Object.assign(window.SINOPSIS['kralovna-vinobrani'] || {}, {
  es: (window.SINOPSIS['la-reina-de-la-vendimia'] || {}).es,
  ru: (window.SINOPSIS['la-reina-de-la-vendimia'] || {}).ru
});

/* ---------- La reina de la Vendimia: artículos nuevos ---------- */

A({
  id: 'mulanima', type: 'criatura', uni: 'praga', img: 'img/covers/la-reina-de-la-vendimia.webp',
  novels: ['la-reina-de-la-vendimia', 'kralovna-vinobrani'],
  see: ['jana', 'hunuc-huar', 'isla-volcan', 'lagrimas-xumuc', 'mendoza'],
  es: {
    t: 'La Mulánima',
    s: 'Ser de la mitología huarpe con crines de fuego, despertado bajo las ruinas de San Francisco: paraliza el Teatro Griego durante once minutos hasta que Jana le canta una canción de cuna checa.',
    box: [['Ruso', 'Муланима'], ['Origen', 'Mitología huarpe'], ['Despertada por', 'La gente de la [[isla-volcan|isla del volcán]], con dieciocho vinos y una piedra sagrada'], ['Domada por', '[[jana|Jana]], cantando *Halí belí*'], ['Promesa', '«Cuando me llames, vendré»'], ['Función', 'Abre el camino hasta [[hunuc-huar|Hunuc Huar]]']],
    b: `La **Mulánima** es la criatura que sale del piso del Teatro Griego en *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*. Durante once minutos, cuarenta mil personas se quedan inmóviles, con los ojos rojos «como muñecas», mientras las viñas de la provincia se secan. La única que se levanta es la reina rubia de la Capital, [[jana|Jana]] disfrazada de Yanina: camina hasta el escenario, le apoya la mano en el hocico y le canta *Halí belí*, una canción de cuna checa. *Los Andes* titula al día siguiente: «La reina que domó a la bestia».

## La llave

En la [[isla-volcan|isla del volcán]] explican por qué la despertaron. «No para comernos las uvas»: las uvas eran una prueba, para ver «si la llave giraba». En la leyenda, cuando Hunuc subió a hablar con su madre la montaña, alguien le abría el sendero en la tierra. La Mulánima es ese sirviente, la única que conoce el camino hasta el corazón del Aconcagua, donde duerme [[hunuc-huar|Hunuc Huar]].

Esa noche, frente al teatro lleno, la Mulánima le promete algo a Jana con una voz que se oye detrás de los ojos: **«Cuando me llames, vendré»**. Por eso la isla ya no quiere vencer a la reina, sino llevársela.

## Debajo del rojo

Jana ve en sus ojos, por debajo del rojo, un brillo dorado: la rabia y el vino se los metieron otros. El mismo dorado reaparece después, atrapado bajo la ceniza, en las [[lagrimas-xumuc|lágrimas de Xumuc]].`
  },
  ru: {
    t: 'Муланима',
    s: 'Существо из мифологии уарпе с огненной гривой, разбуженное под руинами Сан-Франсиско: на одиннадцать минут парализует Греческий театр, пока Яна не поёт ей чешскую колыбельную.',
    box: [['Испанский', 'La Mulánima'], ['Происхождение', 'Мифология уарпе'], ['Разбудили', 'Люди с [[isla-volcan|острова с вулканом]] — восемнадцатью винами и священным камнем'], ['Укротила', '[[jana|Яна]], спев *Halí belí*'], ['Обещание', '«Когда позовёшь — я приду»'], ['Роль', 'Открывает путь к [[hunuc-huar|Хунук Хуару]]']],
    b: `**Муланима** — существо, которое выходит из-под сцены Греческого театра в «[[la-reina-de-la-vendimia|La reina de la Vendimia]]». Одиннадцать минут сорок тысяч человек сидят неподвижно, с красными глазами, «как куклы», а виноградники провинции сохнут. Встаёт только светловолосая королева от Столицы — [[jana|Яна]] под именем Янины: она идёт к сцене, кладёт ладонь на морду чудовища и поёт *Halí belí*, чешскую колыбельную. Наутро газета *Los Andes* пишет: «Королева, которая укротила зверя».

## Ключ

На [[isla-volcan|острове с вулканом]] объясняют, зачем её разбудили. «Не для того, чтобы съесть виноград»: виноград был проверкой — «повернётся ли ключ». В легенде, когда Хунук поднимался поговорить с матерью-горой, кто-то открывал ему тропу на земле. Муланима и есть эта служанка, единственная, кто знает дорогу к сердцу Аконкагуа, где спит [[hunuc-huar|Хунук Хуар]].

В ту ночь, перед полным театром, Муланима обещает Яне голосом, который слышен «за глазами»: **«Когда позовёшь — я приду»**. Поэтому остров больше не хочет победить королеву — он хочет её забрать.

## Под красным

Под красным огнём в её глазах Яна видит золото: ярость и вино в неё влили другие. То же золото потом проглядывает из-под пепла у [[lagrimas-xumuc|слёз Шумука]].`
  }
});

A({
  id: 'hunuc-huar', type: 'criatura', uni: 'praga', img: 'img/covers/la-reina-de-la-vendimia.webp',
  novels: ['la-reina-de-la-vendimia'],
  see: ['mulanima', 'isla-volcan', 'lagrimas-xumuc', 'mendoza', 'pueblos-originarios', 'olguina'],
  es: {
    t: 'Hunuc Huar',
    s: 'El dios huarpe de los cerros, que duerme dentro del Aconcagua y guarda el agua de Cuyo: quien lo despierte y lo controle, controla los ríos de medio continente.',
    box: [['Ruso', 'Хунук Хуар'], ['Morada', 'Dentro del Aconcagua'], ['Dominio', 'Los cerros y el agua: deshielo, glaciares, los ríos Mendoza, Tunuyán, Diamante y Atuel'], ['Duerme desde', 'Hace cuatrocientos años'], ['Camino', 'Solo lo abre la [[mulanima|Mulánima]]'], ['Lo buscan', 'La [[isla-volcan|isla del volcán]]']],
    b: `**Hunuc Huar** es la amenaza de fondo de *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*. La mujer del anillo negro se lo explica a Valdés en la [[isla-volcan|isla del volcán]], señalando el Aconcagua: para los huarpes no era una montaña, sino una madre, «la madre de Hunuc, el hijo del sol, el que bajó al valle a buscar compañía y fundó un pueblo». Y Hunuc Huar «no es una leyenda: duerme ahí, dentro de esa montaña, desde que se murió el último huarpe que sabía llamarlo».

## El agua

«Los cerros son el agua.» Toda el agua de Cuyo baja de esas montañas, y sin ella Mendoza, San Juan y medio Chile serían un desierto. Quien despierte a Hunuc Huar y lo controle «no necesita ejércitos: puede abrir o cerrar ríos, secar ciudades enteras o inundarlas». A un dios no se llega por la puerta principal: hay que ir por el camino que abre su sirviente, la [[mulanima|Mulánima]], o por las quebradas viejas donde vive [[olguina|Olguina]], que solo conoce un guía de Potrerillos.

## Despertar con sed

Según [[natasha|Nátasha]], la isla quiere que Hunuc Huar despierte con sed, y que la primera mano que le dé de beber sea la suya. Para eso usa las [[lagrimas-xumuc|lágrimas de Xumuc]]: el lago de Potrerillos baja un metro en cinco días y las acequias de Mendoza empiezan a correr al revés.

> La novela se inspira en la mitología huarpe (véase [[pueblos-originarios|Huarpes y mapuches]]); el papel de Hunuc Huar en la trama es invención del autor.`
  },
  ru: {
    t: 'Хунук Хуар',
    s: 'Бог гор у народа уарпе, спящий внутри Аконкагуа и хранящий воду Куйо: кто разбудит его и подчинит, тот получит реки полконтинента.',
    box: [['Испанский', 'Hunuc Huar'], ['Обитель', 'Внутри Аконкагуа'], ['Власть', 'Горы и вода: таяние снегов, ледники, реки Мендоса, Тунуян, Диаманте и Атуэль'], ['Спит', 'Уже четыреста лет'], ['Путь', 'Открывает только [[mulanima|Муланима]]'], ['Его ищут', '[[isla-volcan|Остров с вулканом]]']],
    b: `**Хунук Хуар** — главная скрытая угроза «[[la-reina-de-la-vendimia|La reina de la Vendimia]]». Женщина с чёрным перстнем объясняет это Вальдесу на [[isla-volcan|острове с вулканом]], указывая на Аконкагуа: для уарпе это была не гора, а мать — «мать Хунука, сына солнца, который спустился в долину искать себе общество и основал народ». И Хунук Хуар «не легенда: он спит там, внутри этой горы, с тех пор как умер последний уарпе, умевший его позвать».

## Вода

«Горы — это вода». Вся вода Куйо стекает с этих вершин, и без неё Мендоса, Сан-Хуан и пол-Чили стали бы пустыней. Тот, кто разбудит Хунук Хуара и подчинит его, «не нуждается в армиях: он может открывать и закрывать реки, высушивать или затапливать целые города». К богу не входят через парадную дверь — только по тропе, которую открывает его служанка [[mulanima|Муланима]], или по старым ущельям, где живёт [[olguina|Ольгина]] и куда дорогу знает лишь один проводник из Потрерильоса.

## Проснуться от жажды

По словам [[natasha|Наташи]], остров хочет, чтобы Хунук Хуар проснулся от жажды и чтобы первой ему дала напиться их рука. Для этого им служат [[lagrimas-xumuc|слёзы Шумука]]: озеро Потрерильос за пять дней опускается на метр, а арыки Мендосы начинают течь вспять.

> Роман опирается на мифологию уарпе (см. [[pueblos-originarios|Уарпе и мапуче]]); роль Хунук Хуара в сюжете придумана автором.`
  }
});

A({
  id: 'lagrimas-xumuc', type: 'criatura', uni: 'praga', img: 'img/covers/la-reina-de-la-vendimia.webp',
  novels: ['la-reina-de-la-vendimia'],
  see: ['hunuc-huar', 'mulanima', 'natasha', 'jana', 'falda-jana'],
  es: {
    t: 'Las lágrimas de Xumuc',
    s: 'Criaturitas negras como la ceniza, de ojos de brasa, que nadan contra la corriente por las acequias de Mendoza llevando el agua hacia la cordillera.',
    box: [['Ruso', 'Слёзы Шумука'], ['Xumuc', 'El sol, para los huarpes'], ['Antes', 'Doradas: cuidaban el agua de las lagunas de Guanacache'], ['Ahora', 'Cubiertas con la ceniza del volcán de la isla'], ['Hacen', 'Llevan el agua a [[hunuc-huar|Hunuc Huar]]: las acequias corren al revés'], ['Les teme', 'A la [[falda-jana|falda de Jana]] y a [[natasha|Nátasha]]']],
    b: `El sábado del Carrusel, mientras cuarenta mil personas gritan «¡Ya-ni-na!» en la avenida San Martín, el agua de las acequias se detiene y empieza a correr hacia el oeste, cuesta arriba. Con ella nadan cientos de criaturas largas como un brazo, negras como la ceniza de un fogón, con patitas cortas, manitos de dedos casi humanos y dos puntitos rojos en la cabeza. Una trepa al carruaje de [[jana|Jana]] y le sisea una palabra: *Camino*. La [[falda-jana|falda bordó]] se enciende bajo el vestido blanco y la criatura cae chillando al agua.

## La leyenda

Las explica [[natasha|Nátasha]] desde su carruaje negro: cuando Hunuc y Huar rompieron su promesa, Xumuc, el sol, los castigó, y después se arrepintió y lloró tanto que con sus lágrimas se hicieron las lagunas de Guanacache, en Lavalle. Lo que no cuenta la leyenda, «porque solo lo saben las abuelas de las lagunas», es que algunas lágrimas se volvieron chiquitas, despiertas y doradas, y cuidaban el agua: por eso los laguneros decían que la laguna llamaba a la lluvia.

## La ceniza

La gente de la [[isla-volcan|isla]] les echó encima la ceniza de su volcán, «igual que a la Mulánima le metieron vino y rabia». Ahora no cuidan el agua: la llevan hacia la montaña, una gota por vez, para que [[hunuc-huar|Hunuc Huar]] despierte con sed. Jana entiende que no hay que pelear contra ellas, sino quitarles la ceniza. «Las lágrimas reconocen lo que se cosió con amor», le dice Nátasha.`
  },
  ru: {
    t: 'Слёзы Шумука',
    s: 'Маленькие существа, чёрные, как пепел, с глазами-углями: плывут против течения по арыкам Мендосы и уносят воду к Кордильерам.',
    box: [['Испанский', 'Las lágrimas de Xumuc'], ['Шумук', 'Солнце у народа уарпе'], ['Раньше', 'Золотые: берегли воду лагун Гуанакаче'], ['Теперь', 'Покрыты пеплом вулкана с острова'], ['Делают', 'Несут воду к [[hunuc-huar|Хунук Хуару]]: арыки текут вспять'], ['Боятся', '[[falda-jana|Юбки Яны]] и [[natasha|Наташи]]']],
    b: `В субботу Карусели, когда сорок тысяч человек кричат «Я-ни-на!» на проспекте Сан-Мартин, вода в арыках останавливается и течёт на запад, в гору. В ней плывут сотни существ длиной в руку, чёрных, как пепел костра, с короткими лапками, почти человеческими пальчиками и двумя красными точками на голове. Одно из них забирается на карету [[jana|Яны]] и шипит слово: *Путь*. Под белым платьем вспыхивает [[falda-jana|бордовая юбка]], и существо с визгом падает в воду.

## Легенда

Объясняет их [[natasha|Наташа]] со своей чёрной кареты: когда Хунук и Хуар нарушили обещание, солнце Шумук их наказало, а потом раскаялось и плакало так долго, что из его слёз появились лагуны Гуанакаче в Лавалье. Чего легенда не рассказывает, «потому что это знают только бабушки с лагун», — некоторые слёзы стали маленькими, живыми и золотыми и берегли воду; поэтому жители лагун говорили, что лагуна зовёт дождь.

## Пепел

Люди с [[isla-volcan|острова]] засыпали их пеплом своего вулкана, «как Муланиме влили вино и ярость». Теперь они не берегут воду, а уносят её к горе, по капле, чтобы [[hunuc-huar|Хунук Хуар]] проснулся от жажды. Яна понимает: с ними нужно не сражаться, а снять с них пепел. «Слёзы узнают то, что сшито с любовью», — говорит ей Наташа.`
  }
});

A({
  id: 'isla-volcan', type: 'lugar', uni: 'praga', img: 'img/covers/la-reina-de-la-vendimia.webp',
  novels: ['la-reina-de-la-vendimia'],
  see: ['hunuc-huar', 'mulanima', 'cinco-pragas', 'belgrado', 'sur-mistico', 'luis'],
  es: {
    t: 'La isla del volcán',
    s: 'Una isla flotante con un volcán y torres de vidrio oscuro, suspendida sobre los Andes como «una montaña al revés»: desde allí la Señora del anillo negro quiere despertar a Hunuc Huar.',
    box: [['Ruso', 'Остров с вулканом'], ['Ubicación', 'Sobre la cordillera, frente al Aconcagua'], ['La Señora', 'Mujer sin rostro con un anillo de piedra negra que no refleja nada'], ['Valdés', 'El hombre del traje blanco'], ['Rosales', 'El hombre del poncho oscuro con guardas rojas'], ['Objetivo', '[[hunuc-huar|Hunuc Huar]] y el agua de los Andes']],
    b: `En la **isla del volcán** «nunca es de noche del todo»: el cráter ilumina de rojo las laderas de roca negra y las torres de vidrio oscuro. Desde los ventanales de la gran sala se ven las cumbres de los Andes y, muy lejos, las luces de Mendoza. Desde abajo, cuando alguien llega a verla, parece una sombra con forma de **montaña al revés**.

## Los de la isla

- **Valdés**, el hombre del traje blanco, pregunta «¿por qué Mendoza?».
- **Rosales**, el hombre del poncho oscuro con guardas rojas, despertó a la [[mulanima|Mulánima]] con dieciocho vinos y una piedra sagrada en la cripta de las ruinas de San Francisco. Encabeza el intento de secuestrar a [[jana|Jana]] en el Valle de Uco, en plena tormenta de zonda; [[luis|Luis]] lo deja con la nariz hinchada y un ojo morado.
- **La Señora**, la mujer del anillo negro, nunca muestra la cara. Ya oyó *Halí belí* una vez, «en otra ciudad, bajo otra tierra. En Praga». Ordena que no lastimen a la reina, y tampoco a Luis: «A él lo quiero yo».

## La Señora en los informes

Antonio Ferrer, del [[sur-mistico|Sur Místico]], le muestra a Luis dos fotos: una mujer alta de abrigo negro en el Puente de Carlos, en la segunda noche de las [[cinco-pragas|islas sobre Praga]], y la misma figura en una esquina de [[belgrado|Belgrado]], mirando hacia arriba la noche en que Luis fue gigante. El Sur Místico no sabe cómo se llama. En sus informes la llaman *la Señora* y solo sabe tres cosas: aparece donde hay algo antiguo durmiendo debajo de una ciudad, nunca da la cara y «siempre aparece donde estás vos». [[natasha|Nátasha]], al oír lo del anillo, se queda quieta: «Conocí a alguien así. Hace mucho».`
  },
  ru: {
    t: 'Остров с вулканом',
    s: 'Летающий остров с вулканом и башнями из тёмного стекла, висящий над Андами, как «перевёрнутая гора»: отсюда Госпожа с чёрным перстнем хочет разбудить Хунук Хуара.',
    box: [['Испанский', 'La isla del volcán'], ['Где', 'Над Кордильерами, напротив Аконкагуа'], ['Госпожа', 'Женщина без лица с перстнем из чёрного камня, который ничего не отражает'], ['Вальдес', 'Человек в белом костюме'], ['Росалес', 'Человек в тёмном пончо с красной каймой'], ['Цель', '[[hunuc-huar|Хунук Хуар]] и вода Анд']],
    b: `На **острове с вулканом** «никогда не бывает полной ночи»: кратер освещает красным склоны из чёрного камня и башни из тёмного стекла. Из окон большого зала видны вершины Анд и далеко внизу огни Мендосы. Снизу, если его удаётся разглядеть, остров похож на тень в форме **перевёрнутой горы**.

## Люди острова

- **Вальдес**, человек в белом костюме, всё спрашивает: «Почему Мендоса?»
- **Росалес**, человек в тёмном пончо с красной каймой, разбудил [[mulanima|Муланиму]] восемнадцатью винами и священным камнем в крипте под руинами Сан-Франсиско. Он же пытается похитить [[jana|Яну]] в долине Уко во время ветра сонда; [[luis|Луис]] оставляет ему распухший нос и синяк под глазом.
- **Госпожа**, женщина с чёрным перстнем, никогда не показывает лица. *Halí belí* она уже слышала однажды — «в другом городе, под другой землёй. В Праге». Она приказывает не причинять вреда ни королеве, ни Луису: «Он — мой».

## Госпожа в отчётах

Антонио Феррер из [[sur-mistico|Мистического Юга]] показывает Луису две фотографии: высокая женщина в чёрном пальто на Карловом мосту во вторую ночь [[cinco-pragas|островов над Прагой]] и та же фигура на углу в [[belgrado|Белграде]], глядящая вверх в ночь, когда Луис был великаном. Её имени никто не знает; в отчётах её называют *Госпожой*. Известно лишь три вещи: она появляется там, где под городом спит что-то древнее, никогда не показывает лица и «всегда появляется там, где ты». [[natasha|Наташа]], услышав про перстень, замирает: «Я знала кое-кого такого. Давно».`
  }
});

A({
  id: 'rodrigo', type: 'personaje', uni: 'praga', img: 'img/ill/la-reina-de-la-vendimia/img-19-1.webp',
  novels: ['la-reina-de-la-vendimia'],
  see: ['luis', 'natasha', 'sergio', 'olguina', 'hunuc-huar'],
  es: {
    t: 'Rodrigo Fader',
    s: 'El hermano menor de Luis, guía de montaña en Potrerillos, que lleva tres años sin bajar de los cerros y aparece en Chacras con una novia serbia: Nátasha.',
    box: [['Ruso', 'Родриго'], ['Familia', 'Hijo de [[sergio|Sergio]] y [[olguina|Olguina]]; hermano menor de [[luis|Luis]]'], ['Oficio', 'Guía de montaña, refugio de Potrerillos'], ['Edad', 'Unos treinta años'], ['Pareja', '[[natasha|Nátasha]], desde hace dieciocho días'], ['Vehículo', 'Una Toyota doble cabina color arena'], ['Lo que no sabe', 'Que Nátasha fue la mujer de su hermano']],
    b: `**Rodrigo** llega a la finca de Chacras de Coria sin avisar, en una Toyota vieja con cuerdas de escalar y bastones de trekking en la caja y una calcomanía de *Guías de Montaña — Potrerillos*. Es más alto y más flaco que Luis, con el pelo largo atado en una cola de caballo, barba desprolija, una campera de jean celeste y botas blancas de polvo, pero tiene la misma frente, los mismos ojos y la misma forma de pararse. Se presenta solo: «¡El hermano lindo!».

## Los hermanos Fader

Por Rodrigo se sabe que [[luis|Luis]] tiene **tres hermanos**: Roberto, que vive en Venecia; Emilio, naturalista en la península Valdés, que «cuenta pingüinos» y manda una postal por año; y Rodrigo, el menor, que vive en la montaña y lleva tres años sin bajar, «sin tele, sin diario, sin nada».

## Nátasha

Cuenta, feliz, cómo la conoció: una noche de tormenta de piedra golpearon la puerta del refugio y era ella, sola, con un tobillo torcido y una mochila enorme, buscando un guía para subir a las quebradas viejas, al puesto de su madre [[olguina|Olguina]]. Le vendó el tobillo, le hizo un té de jarilla y pasaron cuatro días encerrados contándose cuentos: ella de dragones serbios, él de la Mulánima. Olguina, al verla, la abrazó «como si la conociera de toda la vida».

Rodrigo no sabe nada de la Vendimia anterior, ni del dragón, ni de que [[natasha|Nátasha]] fue la mujer de Luis. Ella se lo pide a los dos, a Luis y a [[sergio|Sergio]]: «No lo quiero lastimar». El tobillo no estaba torcido: el [[sur-mistico|Sur Místico]] necesitaba al único guía que conoce el camino hacia [[hunuc-huar|Hunuc Huar]]. Pero, según ella, al cuarto día de tormenta ya no estaba trabajando: «Con Rodrigo no hay guerra. Hay paz».`
  },
  ru: {
    t: 'Родриго Фадер',
    s: 'Младший брат Луиса, горный проводник из Потрерильоса, который три года не спускался с гор и вдруг приезжает в Чакрас с сербской невестой — Наташей.',
    box: [['Испанский', 'Rodrigo'], ['Семья', 'Сын [[sergio|Серхио]] и [[olguina|Ольгины]]; младший брат [[luis|Луиса]]'], ['Занятие', 'Горный проводник, приют в Потрерильосе'], ['Возраст', 'Около тридцати'], ['Пара', '[[natasha|Наташа]] — уже восемнадцать дней'], ['Машина', 'Песочная «Тойота» с двойной кабиной'], ['Чего не знает', 'Что Наташа была женой его брата']],
    b: `**Родриго** без предупреждения подъезжает к поместью в Чакрас-де-Кория на старой «Тойоте» с альпинистскими верёвками и треккинговыми палками в кузове и выцветшей наклейкой *Guías de Montaña — Potrerillos*. Он выше и худее Луиса, с длинными волосами в хвосте, неряшливой бородой, в голубой джинсовой куртке и белых от пыли ботинках, но лоб, глаза и манера стоять — те же. Представляется сам: «Красивый брат!»

## Братья Фадер

Из-за Родриго выясняется, что у [[luis|Луиса]] **три брата**: Роберто живёт в Венеции; Эмилио — натуралист на полуострове Вальдес, «считает пингвинов» и раз в год присылает открытку; а Родриго, младший, живёт в горах и уже три года не спускался — «ни телевизора, ни газет, ничего».

## Наташа

Он счастливо рассказывает, как они познакомились: в ночь каменной бури в дверь приюта постучала она — одна, с подвёрнутой лодыжкой и огромным рюкзаком, в поисках проводника к старым ущельям, к стоянке его матери [[olguina|Ольгины]]. Он перевязал ей ногу, заварил чай из харильи, и четыре дня они просидели взаперти, рассказывая сказки: она — сербские про драконов, он — про Муланиму. Ольгина, увидев её, обняла «будто знала всю жизнь».

Родриго ничего не знает ни о прошлой Вендимии, ни о драконе, ни о том, что [[natasha|Наташа]] была женой Луиса. Она просит об этом обоих — Луиса и [[sergio|Серхио]]: «Я не хочу причинить ему боль». Лодыжка не была подвёрнута: [[sur-mistico|Мистическому Югу]] нужен был единственный проводник, знающий путь к [[hunuc-huar|Хунук Хуару]]. Но, по её словам, на четвёртый день бури она уже не работала: «С Родриго нет войны. Есть покой».`
  }
});

A({
  id: 'olguina', type: 'personaje', uni: 'hora-salvaje', img: 'img/covers/dikij-chas-2.webp',
  novels: ['dikij-chas-2', 'la-reina-de-la-vendimia', 'la-hora-salvaje-tango'],
  see: ['luis', 'sergio', 'natasha', 'rodrigo', 'espiritus-montanas'],
  es: {
    t: 'Olguina',
    s: 'La madre de Luis: una bruja del sur que vivió años en las quebradas de la cordillera, con una maldición encima, hasta que Natasha le tendió la mano.',
    box: [['Ruso', 'Ольгина'], ['Hijos', '[[luis|Luis]] y [[rodrigo|Rodrigo]]'], ['Esposo', '[[sergio|Sergio]]'], ['Aspecto', 'Pelo blanco plateado, cara sorprendentemente joven'], ['Maldición', 'Para tener a Luis aceptó vivir poseída por un demonio: las condiciones de las brujas del sur'], ['Liberada por', '[[natasha|Natasha]]: «Tome la mía»'], ['Vive', 'En un puesto de las quebradas viejas']],
    b: `**Olguina** aparece por primera vez en *[[dikij-chas-2|Los espíritus de las montañas]]*, en el capítulo «La mano que libera». Desde la niebla de una quebrada, una voz le habla a Luis de [[natasha|Natasha]]: «Hermosa, fuerte, sabia, con el alma limpia… y también bruja». Luis le cuenta entonces a Natasha la verdad: su madre tuvo dos opciones, dar a luz y vivir poseída por un demonio, o no tenerlo y vivir una vida normal. «Esas eran las condiciones de las brujas del sur». Se escondía en la montaña, el único lugar donde el demonio no podía dominarla del todo.

## La mano que libera

La maldición se rompía de una sola forma: tocar la mano de una bruja que amara a su hijo. Olguina no se lo había dicho nunca a Luis («No quería que buscaras una bruja por cálculo. Eso no es amor»). Cuando sale de la niebla, Natasha le tiende la mano: «Tome la mía». Siente una fuerza antigua, la misma de su abuela y la que desvió las bombas en Belgrado, y las sombras con garras salen del cuerpo de Olguina y se deshacen al sol.

## En La reina de la Vendimia

[[sergio|Sergio]] le confiesa a Luis que la había dado por perdida y que se volvió a casar, con Mónica. Olguina no quiso bajar: «su lugar era la montaña». Vive en un puesto de las quebradas al que solo sube su hijo menor, [[rodrigo|Rodrigo]], y «sabe todo, siempre»: abraza a Nátasha sin decir una palabra y le cuenta que los espíritus de los cerros están inquietos desde julio. Luis, cuando sopla el viento de las quebradas, siente que lo saluda.

> En *El tango más triste*, otra versión del multiverso, Olguina vive con Sergio y se ríe en la cocina mientras los hombres de toda la Argentina lloran.`
  },
  ru: {
    t: 'Ольгина',
    s: 'Мать Луиса — южная ведьма, которая много лет жила в ущельях Кордильер с проклятием, пока Наташа не протянула ей руку.',
    box: [['Испанский', 'Olguina'], ['Дети', '[[luis|Луис]] и [[rodrigo|Родриго]]'], ['Муж', '[[sergio|Серхио]]'], ['Внешность', 'Серебристо-седые волосы, удивительно молодое лицо'], ['Проклятие', 'Чтобы родить Луиса, согласилась жить одержимой демоном — таковы условия ведьм юга'], ['Освободила', '[[natasha|Наташа]]: «Возьмите мою»'], ['Живёт', 'На стоянке в старых ущельях']],
    b: `**Ольгина** впервые появляется в «[[dikij-chas-2|Духах гор]]», в главе «Рука, которая освобождает». Из тумана ущелья голос говорит Луису о [[natasha|Наташе]]: «Красивая… сильная… мудрая… с чистой душой… И ещё… ведьма». Тогда Луис рассказывает Наташе правду: у его матери было два выбора — родить его и жить одержимой демоном или не рожать и прожить обычную жизнь. «Таковы были условия ведьм юга». Она пряталась в горах — единственном месте, где демон не мог полностью ею овладеть.

## Рука, которая освобождает

Снять проклятие можно было лишь одним способом — коснуться руки ведьмы, которая любит её сына. Ольгина никогда не говорила об этом Луису: «Я не хотела, чтобы ты искал ведьму по расчёту. Это не любовь». Когда она выходит из тумана, Наташа протягивает руку: «Возьмите мою». Она чувствует древнюю силу — ту же, что была у её бабушки, ту, что отклоняла бомбы в Белграде, — и тени с когтями вырываются из тела Ольгины и рассыпаются на горном солнце.

## В «La reina de la Vendimia»

[[sergio|Серхио]] признаётся Луису, что когда-то считал её потерянной и женился снова, на Монике. Ольгина не захотела спускаться: «её место — гора». Она живёт на стоянке в ущельях, куда поднимается только младший сын, [[rodrigo|Родриго]], и «всегда всё знает»: молча обнимает Наташу и рассказывает, что духи гор неспокойны с июля. Когда дует ветер с ущелий, Луису кажется, что мать передаёт ему привет.

> В «El tango más triste», другой версии мультивселенной, Ольгина живёт с Серхио и смеётся на кухне, пока мужчины всей Аргентины плачут.`
  }
});

/* ---------- La reina de la Vendimia: ampliaciones ---------- */

addTo('jana',
`## Clara, la cava y las ruinas (cap. 11–18)

- **La llamada.** Luis encuentra un hilo bordó y la llama por video; Jana atiende en el baño de Mirta con una toalla en la cabeza para esconder el pelo rubio. Él le pregunta dónde está su falda. Está colgada detrás de la puerta.
- **La coronación.** En la Bodega La Rural la coronan reina de la Ciudad. Luis la saca a bailar una cueca y le susurra «¿Quién sos?»; ella contesta «Yanina, de Bariloche», pero se delata con una frase: «Es una canción checa. La sabe cualquier checo del mundo».
- **El zonda.** En el Valle de Uco, seis hombres de la [[isla-volcan|isla del volcán]] intentan llevársela. Luis pelea y la esconde en una cava. Allí casi la besa, y se detiene: «Tengo a alguien. En Praga. La amo». Jana llora de felicidad: «Me es fiel incluso conmigo».
- **Clara Montenegro**, periodista de Noticiero 9, descubre la verdad con el video de la propuesta en el Puente de Carlos y la saluda en la peluquería: «Hola, Jana». No la delata. A cambio pide la verdad y la primera entrevista.
- **Las ruinas de San Francisco.** Jana lo cita a las nueve, con la falda bordó por fuera por primera vez. «Jana», dice Luis, y no es una pregunta. Se cuentan todo y pasan la noche en el hotel de la Plaza Independencia. Antes, escondida entre las viñas, lo había oído decirle a su padre: «A Nátasha la quise como se quiere al fuego. A Jana la quiero como se quiere a una casa».

## Nátasha y el Carrusel (cap. 19–23)

En Chacras, Jana conoce a [[natasha|Nátasha]], que llega del brazo de [[rodrigo|Rodrigo]], el hermano menor de Luis. Nátasha mira la falda: «Las cosas que hacen las mamás brillan distinto». Julieta Arancibia, reina de Godoy Cruz y su rival, se convierte en su primera amiga en Mendoza («Soy la reina de Godoy Cruz. Cuidar a la de Capital es mi trabajo») y desfila con ella en el Carrusel: los diarios lo llaman «la alianza de las rivales». En la avenida San Martín, la falda la defiende de las [[lagrimas-xumuc|lágrimas de Xumuc]], que nadan al revés por las acequias, y Nátasha le dice lo que la isla busca: «El camino, Jana, sos vos».`,
`## Клара, винный погреб и руины (гл. 11–18)

- **Звонок.** Луис находит бордовую нитку и звонит ей по видео; Яна отвечает из ванной у Мирты, с полотенцем на голове, чтобы спрятать светлые волосы. Он спрашивает, где её юбка. Юбка висит за дверью.
- **Коронация.** В Бодеге Ла-Рураль её коронуют королевой Города. Луис приглашает её на куэку и шепчет: «Кто ты?» Она отвечает: «Янина, из Барилоче», но выдаёт себя одной фразой: «Это чешская песня. Её знает любой чех на свете».
- **Сонда.** В долине Уко шестеро людей с [[isla-volcan|острова с вулканом]] пытаются её увезти. Луис дерётся и прячет её в винном погребе. Там он почти целует её и останавливается: «У меня есть любимая. В Праге». Яна плачет от счастья: «Он верен мне даже со мной».
- **Клара Монтенегро**, журналистка «Новостей 9», узнаёт правду по видео с предложением на Карловом мосту и здоровается с ней в парикмахерской: «Привет, Яна». Она её не выдаёт — в обмен на правду и первое интервью.
- **Руины Сан-Франсиско.** Яна назначает ему встречу в девять — впервые бордовая юбка надета поверх всего. «Яна», — говорит Луис, и это не вопрос. Они рассказывают друг другу всё и проводят ночь в отеле на площади Независимости. Перед этим, спрятавшись в винограднике, она слышала, как он говорит отцу: «Наташу я любил, как любят огонь. Яну я люблю, как любят дом».

## Наташа и Карусель (гл. 19–23)

В Чакрасе Яна знакомится с [[natasha|Наташей]], которая приезжает под руку с [[rodrigo|Родриго]], младшим братом Луиса. Наташа смотрит на юбку: «То, что делают мамы, светится по-другому». Хулиета Арансибия, королева Годой-Круса и её соперница, становится её первой подругой в Мендосе («Беречь королеву Столицы — моя работа») и едет с ней в одной карете на Карусели; газеты называют это «союзом соперниц». На проспекте Сан-Мартин юбка защищает её от [[lagrimas-xumuc|слёз Шумука]], плывущих по арыкам вспять, и Наташа говорит ей, что ищет остров: «Путь, Яна, — это ты».`,
[['Amiga en Mendoza', 'Julieta Arancibia, reina de Godoy Cruz'], ['Aliada', 'Clara Montenegro, Noticiero 9']],
[['Подруга в Мендосе', 'Хулиета Арансибия, королева Годой-Круса'], ['Союзница', 'Клара Монтенегро, «Новости 9»']]);

addTo('luis',
`## La reina de la Vendimia

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*, Luis vuelve a Chacras de Coria por una misión del [[sur-mistico|Sur Místico]] y vive con [[jana|Jana]] en Praga. La novela completa su biografía: es **pintor y músico** y da clases de idiomas; fue gigante en Belgrado («la única vez que lo eligió él») y estuvo casado con [[natasha|Nátasha]] en una ceremonia simbólica, al aire libre, sin altar y sin cura. Su madre es [[olguina|Olguina]] y tiene tres hermanos: Roberto, en Venecia; Emilio, en la península Valdés; y [[rodrigo|Rodrigo]], guía en Potrerillos, que aparece con Nátasha como novia. A su padre le dice que terminó «sin odio» y que no le va a contar por qué: «Es de ella también». Y en el escalón de la galería rompe la cadena de silencios: «Basta de secretos. Lo que yo sé, lo sabés vos».

## El carnaval de la discordia, continuación

En los capítulos 15–27 de *Карнавал раздора*, el rey fantasma de al-Ándalus le abre una herida de sable en la plaza de Colón; Natasha lo salva a golpes de cono de tránsito y una doctora pelirroja le cura la herida con tres gotas del elixir de un tal Karl («una vida por persona»). Con la tiza del centauro dibuja sobre los adoquines al oso de la Puerta del Sol y lo despierta. Pero ante el monumento a Cervantes el rey le pregunta qué le dio España a él, un argentino, y Luis no encuentra respuesta: el **[[rey-al-andalus|rey]]** lo hechiza y la discordia entra en Madrid a través de él. Zmaj se lo lleva al templo de Debod, Natasha lo devuelve con un beso, y al amanecer Luis ya sabe qué contestarle al rey.`,
`## «La reina de la Vendimia»

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» Луис возвращается в Чакрас-де-Кория по заданию [[sur-mistico|Мистического Юга]] и живёт с [[jana|Яной]] в Праге. Роман дополняет его биографию: он **художник и музыкант**, преподаёт языки; в Белграде был великаном («единственный раз, когда он выбрал это сам») и был женат на [[natasha|Наташе]] — символическая церемония под открытым небом, без алтаря и без священника. Его мать — [[olguina|Ольгина]], а братьев у него трое: Роберто в Венеции, Эмилио на полуострове Вальдес и [[rodrigo|Родриго]], проводник из Потрерильоса, который приезжает с Наташей как со своей невестой. Отцу Луис говорит, что всё закончилось «без ненависти», и почему — не расскажет: «Это и её история». А на ступеньке галереи он разрывает цепочку молчания: «Хватит секретов. Что знаю я — знаешь и ты».

## «Карнавал раздора», продолжение

В главах 15–27 «Карнавала раздора» призрачный король аль-Андалуса ранит его саблей на площади Колумба; Наташа спасает его ударами дорожного конуса, а рыжая врач заживляет рану тремя каплями эликсира некоего Карла («одна жизнь на человека»). Мелом кентавра он рисует на брусчатке медведя с Пуэрта-дель-Соль и будит его. Но у памятника Сервантесу король спрашивает его, аргентинца, что дала ему Испания, и Луис не находит ответа: **[[rey-al-andalus|король]]** зачаровывает его, и раздор входит в Мадрид через него. Змай уносит его к храму Дебод, Наташа возвращает его поцелуем, и на рассвете Луис уже знает, что ответить королю.`,
[['Madre', '[[olguina|Olguina]]'], ['Hermanos', 'Roberto, Emilio, [[rodrigo|Rodrigo]]']],
[['Мать', '[[olguina|Ольгина]]'], ['Братья', 'Роберто, Эмилио, [[rodrigo|Родриго]]']]);

addTo('natasha',
`## En La reina de la Vendimia

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]* se escribe **Nátasha**. Es de Belgrado: morocha, de ojos verdes «como las hojas de parra a contraluz», con una cicatriz chiquita en el nudillo y un acento que lo pronuncia todo «como si estuviera enojada». Mendoza la recuerda: el año anterior fue **reina de Las Heras** (reemplazó a la reina del departamento a último momento) y **virreina nacional**, detrás de Nastia. Subió con Luis a las quebradas y liberó a su madre, [[olguina|Olguina]]; con [[zmaj|Zmaj]] bajó en la plaza de Las Heras los cóndores con chips; y la noche de las chispas rosadas la ciudad amaneció arreglada.

Ahora llega a Chacras del brazo de [[rodrigo|Rodrigo]], el hermano menor de Luis, y finge no conocerlo: «Rodrigo no sabe nada». Trabaja para el [[sur-mistico|Sur Místico]], que la llamó desde Madrid porque solo ella habló con los espíritus de esos cerros: «Vos sos el que está abajo. Yo soy la que va arriba». En el Carrusel desfila en un carruaje negro con la banda gastada de reina de Las Heras, y la avenida entera grita «¡Ná-ta-sha!». Las [[lagrimas-xumuc|lágrimas de Xumuc]] retroceden al verla. Termina silbando, y desde el Aconcagua le contesta un rugido: Zmaj.

## Furia serbia en Madrid

En la continuación de *El carnaval de la discordia*, Natasha echa de la plaza de Colón al rey fantasma a golpes de cono de tránsito («¡No te atrevas a tocar a mi hombre!»); reza bajo un mosaico del metro y los espíritus ya no pueden entrar en la estación; despierta a los domovói y kikímoras escondidos en los armarios de Madrid; desde el capó de un Seat 600 levanta a los madrileños con un megáfono («¡Un poco de furia y fuerza eslava, madrileños!»), y llama a Zmaj, que estaba de vacaciones con su amiga y llega con un sombrero de paja y un collar de caracoles.`,
`## В «La reina de la Vendimia»

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» её имя пишется **Nátasha**. Она из Белграда: брюнетка с зелёными глазами, «как листья винограда на просвет», с маленьким шрамом на костяшке пальца и акцентом, с которым всё звучит «так, будто она сердится». Мендоса её помнит: в прошлом году она была **королевой Лас-Эраса** (в последний момент заменила королеву департамента) и **национальной вице-королевой** после Насти. Она поднималась с Луисом в ущелья и освободила его мать [[olguina|Ольгину]]; со [[zmaj|Змаем]] посадила на площади Лас-Эраса кондоров с чипами; а после ночи розовых искр город проснулся починенным.

Теперь она приезжает в Чакрас под руку с [[rodrigo|Родриго]], младшим братом Луиса, и делает вид, что не знает его: «Родриго ничего не знает». Она работает на [[sur-mistico|Мистический Юг]], который вызвал её из Мадрида, потому что только она говорила с духами этих гор: «Ты — тот, кто внизу. Я — та, кто идёт наверх». На Карусели она едет в чёрной карете с потёртой лентой королевы Лас-Эраса, и весь проспект кричит «На-та-ша!». [[lagrimas-xumuc|Слёзы Шумука]], увидев её, отступают. В конце она свистит — и с Аконкагуа ей отвечает рёв: Змай.

## Сербская ярость в Мадриде

В продолжении «Карнавала раздора» Наташа выгоняет призрачного короля с площади Колумба ударами дорожного конуса («Не смей! Трогать! Моего! Мужчину!»), молится под мозаикой метро — и духи больше не могут войти на станцию, будит домовых и кикимор, спрятанных по мадридским шкафам, с капота «Сеата-600» поднимает мадридцев мегафоном («Немного славянской ярости и силы, мадридцы!») и зовёт Змая, который был в отпуске у подруги и прилетает в соломенной шляпе и ожерелье из ракушек.`,
[['En La reina de la Vendimia', 'Reina de Las Heras y virreina nacional del año anterior; novia de [[rodrigo|Rodrigo]]']],
[['В «La reina de la Vendimia»', 'Королева Лас-Эраса и национальная вице-королева прошлого года; невеста [[rodrigo|Родриго]]']]);

addTo('sergio',
`## En La reina de la Vendimia

En la galería de Chacras, con el mate, Sergio es la memoria de la familia. Le dice a Luis que los Fader «ven con el corazón antes que con los ojos», y a sus setenta y dos años descubre a [[jana|Jana]] escondida entre las viñas por la sombra del sombrero de Mirta. Recuerda la Vendimia anterior: el Gordini que les regaló Irina («Vos no me prestás la Gacela, yo no te presto el Gordini»), el granizo que paró Nastia, el dragón sobre Las Heras («en la tele decían *dron gigante con forma de dragón*») y las chispas rosadas («esta Vendimia se superó con los efectos especiales»). Y le agradece a Nátasha lo más importante: le devolvió a [[olguina|Olguina]], a la que él había dado por perdida antes de volver a casarse con Mónica.

Cuando aparece su hijo menor, [[rodrigo|Rodrigo]], con Nátasha de novia, Sergio entiende todo «como entienden los viejos» y la cubre: «¡Que todo Mendoza la conoce, inútil! ¡Fue reina de la Vendimia de Las Heras!». En el asado hace un chiste que nadie festeja: sus hijos no pudieron con las argentinas y se trajeron «eslavas a casa», así que es «un suegro afortunado».`,
`## В «La reina de la Vendimia»

На галерее в Чакрасе, с мате в руках, Серхио — память семьи. Он говорит Луису, что Фадеры «видят сердцем раньше, чем глазами», и в свои семьдесят два замечает [[jana|Яну]], спрятавшуюся среди лоз, по тени соломенной шляпы Мирты. Он вспоминает прошлую Вендимию: «Гордини», который им подарила Ирина («Ты мне не даёшь „Газель“ — я тебе не даю „Гордини“»), град, который остановила Настя, дракона над Лас-Эрасом («по телевизору говорили: *гигантский дрон в форме дракона*») и розовые искры («в эту Вендимию со спецэффектами перестарались»). И благодарит Наташу за самое главное: она вернула ему [[olguina|Ольгину]], которую он считал потерянной, прежде чем женился на Монике.

Когда появляется младший сын, [[rodrigo|Родриго]], с Наташей в качестве невесты, Серхио понимает всё, «как понимают старики», и прикрывает её: «Да её вся Мендоса знает, бестолочь! Она была королевой Вендимии Лас-Эраса!» За асадо он шутит так, что никто не смеётся: сыновья не справились с аргентинками и привезли домой «славянок», так что он «счастливый свёкор».`,
[['Primera esposa', '[[olguina|Olguina]]'], ['Hijos', '[[luis|Luis]], Roberto, Emilio y [[rodrigo|Rodrigo]]']],
[['Первая жена', '[[olguina|Ольгина]]'], ['Сыновья', '[[luis|Луис]], Роберто, Эмилио и [[rodrigo|Родриго]]']]);

addTo('mendoza',
`## Hunuc Huar y el agua

En los capítulos siguientes la amenaza ya no está debajo de la ciudad sino encima: la [[isla-volcan|isla del volcán]], suspendida sobre la cordillera, quiere despertar a [[hunuc-huar|Hunuc Huar]] dentro del Aconcagua y quedarse con el agua de los Andes. El lago de Potrerillos baja un metro en cinco días y, el sábado del Carrusel, las acequias de la avenida San Martín corren al revés, llenas de [[lagrimas-xumuc|lágrimas de Xumuc]]. La novela recorre la Bodega La Rural de Maipú, el Valle de Uco con viento zonda, la peluquería de Mirta en la calle Arístides Villanueva, el Cerro de la Gloria, las sopaipillas de Doña Chela en Godoy Cruz y el embalse turquesa de Potrerillos. En ese universo Mendoza es una república: la gobierna la presidenta Irina, que tomó el poder «durante una siesta, sin un tiro».`,
`## Хунук Хуар и вода

В следующих главах угроза уже не под городом, а над ним: [[isla-volcan|остров с вулканом]], висящий над Кордильерами, хочет разбудить [[hunuc-huar|Хунук Хуара]] внутри Аконкагуа и забрать воду Анд. Озеро Потрерильос за пять дней опускается на метр, а в субботу Карусели арыки проспекта Сан-Мартин текут вспять, полные [[lagrimas-xumuc|слёз Шумука]]. Роман проводит читателя по Бодеге Ла-Рураль в Майпу, долине Уко под ветром сонда, парикмахерской Мирты на улице Аристидес-Вильянуэва, холму Славы, сопаипильям доньи Челы в Годой-Крусе и бирюзовому водохранилищу Потрерильос. В этой вселенной Мендоса — республика: ею правит президент Ирина, взявшая власть «во время сиесты, без единого выстрела».`);

addTo('vendimia',
`## La reina de la Vendimia

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]* la fiesta se cuenta desde dentro: la Cabalgata en sulky, la gala de coronación de la Ciudad en la Bodega La Rural, con vals con el intendente y cueca con pañuelos; la Vía Blanca de las Reinas el viernes; el Carrusel el sábado por la mañana por la avenida San Martín, con gauchos, carros de bueyes y murgas; y el Acto Central en el Teatro Griego, donde se elige a la Reina Nacional. La presidenta Irina se niega a suspenderla: «en su república la Vendimia no se suspende por nada, y menos por miedo». Como homenaje desfilan las soberanas del año anterior: **Nastia**, la Reina Nacional, «la Reina de las Nieves», que le manda a Luis un copo de nieve a veintiocho grados, y **Nátasha Petrović**, reina de Las Heras y virreina nacional, «Nátasha Primera».`,
`## «La reina de la Vendimia»

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» праздник показан изнутри: Кавалькада на двуколках, гала-коронация королевы Города в Бодеге Ла-Рураль с вальсом с мэром и куэкой с платками; Белый путь королев в пятницу; Карусель в субботу утром по проспекту Сан-Мартин — гаучо, повозки с волами, мурги; и Центральный акт в Греческом театре, где выбирают Национальную королеву. Президент Ирина отказывается его переносить: «в её республике Вендимию не отменяют ни из-за чего, тем более из-за страха». В честь прошлого года на Карусели едут прежние королевы: **Настя**, Национальная королева, «Снежная королева», которая посылает Луису снежинку при двадцати восьми градусах, и **Наташа Петрович**, королева Лас-Эраса и национальная вице-королева, «Наташа Первая».`,
[['Reinas (La reina de la Vendimia)', 'Nastia, Reina Nacional saliente; Nátasha, virreina; Yanina ([[jana|Jana]]), reina de la Ciudad; Julieta Arancibia, Godoy Cruz']],
[['Королевы («La reina de la Vendimia»)', 'Настя — уходящая Национальная королева; Наташа — вице-королева; Янина ([[jana|Яна]]) — королева Города; Хулиета Арансибия — Годой-Крус']]);

addTo('sur-mistico',
`## Antonio Ferrer

En *L’ora selvaggia a Venezia* y en *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*, el jefe de Luis es **Antonio Ferrer**, coordinador del sector europeo, que lo dirige todo desde una oficina en Madrid. En Belgrado Luis nunca lo vio en persona: solo conocía su voz por teléfono y la foto del gigante firmada «A. F.». En Mendoza Ferrer arma «dos equipos que no saben uno del otro, por seguridad»: Luis, abajo, en la ciudad; [[natasha|Nátasha]], arriba, en la montaña. «Eso no lo calculé», admite cuando los dos se cruzan en un asado. Guarda en sus informes las fotos de la mujer del anillo negro, *la Señora* (véase [[isla-volcan|la isla del volcán]]). En *La hora anómala* el jefe de Luis se llamaba Dante Ferrer.`,
`## Антонио Феррер

В «L’ora selvaggia a Venezia» и «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» начальник Луиса — **Антонио Феррер**, координатор европейского сектора, который руководит всем из кабинета в Мадриде. В Белграде Луис ни разу не видел его вживую: знал только голос по телефону и фотографию великана с подписью «А. Ф.». В Мендосе Феррер создаёт «две группы, которые не знают друг о друге, — ради безопасности»: Луис внизу, в городе, [[natasha|Наташа]] наверху, в горах. «Этого я не рассчитал», — признаёт он, когда они сталкиваются за асадо. В его отчётах хранятся фотографии женщины с чёрным перстнем — *Госпожи* (см. [[isla-volcan|остров с вулканом]]). В «Аномальном часе» начальника Луиса звали Данте Феррер.`);

addTo('irina-ministerio',
`## Presidenta de la República de Mendoza

En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]*, después de *Los espíritus de las montañas*, Irina tomó el poder en Mendoza «durante una siesta, sin un tiro, mientras la provincia dormía», e hizo izar la bandera de la **República de Mendoza**. Desde el palco del Carrusel manda a buscar a Luis por medio de Marina, con su tableta, y Katarina, que lo abraza sin pedir permiso. Es ella quien le regaló a Luis y Natasha el viejo Gordini de colección, y quien se niega a suspender la Vendimia: «en su república no se suspende por nada, y menos por miedo». Nastia, la Reina Nacional, es «la rusa de Irina».`,
`## Президент Республики Мендоса

В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]», после «Духов гор», Ирина взяла власть в Мендосе «во время сиесты, без единого выстрела, пока провинция спала», и подняла флаг **Республики Мендоса**. С трибуны Карусели она посылает за Луисом Марину с её планшетом и Катарину, которая обнимает его без спроса. Это она подарила Луису и Наташе старый коллекционный «Гордини» и отказывается отменять Вендимию: «в её республике её не отменяют ни из-за чего, тем более из-за страха». Настя, Национальная королева, — «русская Ирины».`,
[['Cargo (La reina de la Vendimia)', 'Presidenta de la República de Mendoza']],
[['Должность («La reina de la Vendimia»)', 'Президент Республики Мендоса']]);

addTo('zmaj',
`## Vacaciones interrumpidas

En la continuación de *El carnaval de la discordia*, Zmaj está de vacaciones con su amiga: Natasha misma lo dejó ir. Cuando ella lo llama desde la plaza de España («Sé que tenés vacaciones… pero necesito ayuda»), llega desde el sudeste con un sombrero de paja en un cuerno, un collar de caracoles y olor a protector solar. Quema a los espíritus y a los demonios sin rozar a los cocineros ni a las señoras de los paraguas, se lleva a Luis en la garra al templo de Debod y, para no ver nada, se tapa con un ala junto con media noche. En *[[la-reina-de-la-vendimia|La reina de la Vendimia]]* contesta con un rugido desde el Aconcagua al silbido de Nátasha.`,
`## Прерванный отпуск

В продолжении «Карнавала раздора» Змай в отпуске у подруги: Наташа сама его отпустила. Когда она зовёт его с площади Испании («Я знаю, что у тебя отпуск… Но мне нужна помощь»), он прилетает с юго-востока с соломенной пляжной шляпой на роге, ожерельем из ракушек и запахом солнцезащитного крема. Он сжигает духов и демонов, не задев ни поваров, ни сеньор с зонтиками, уносит Луиса в когтях к храму Дебод и деликатно прикрывает крылом себя и полнеба. В «[[la-reina-de-la-vendimia|La reina de la Vendimia]]» он рёвом с Аконкагуа отвечает на свист Наташи.`);

/* ---------- El carnaval de la discordia (cap. 15–27) ---------- */

A({
  id: 'rey-al-andalus', type: 'personaje', uni: 'hora-salvaje', img: 'img/covers/dikij-chas-karnaval-razdora.webp',
  novels: ['dikij-chas-karnaval-razdora'],
  see: ['karnaval', 'luis', 'natasha', 'madrid', 'tauran', 'agente-l'],
  es: {
    t: 'El rey fantasma de al-Ándalus',
    s: 'Un rey de corona plateada sobre un caballo blanco que vuelve a Madrid después de mil años: no recuerda su nombre, pero sí la ofensa, y se alimenta de la discordia.',
    box: [['Ruso', 'Призрачный король'], ['Qué es', '«La memoria de quien perdió esta tierra»'], ['Ejército', 'Jinetes blancos con albornoces y escudos redondos'], ['Fuerza', 'La discordia y, después, la indiferencia'], ['Pregunta', '«¿Qué te dio España?»'], ['Enemigos', '[[natasha|Natasha]] y su cono de tránsito, el oso de la Puerta del Sol, [[zmaj|Zmaj]]']],
    b: `Según el [[agente-l|Agente L]], las luces de la noche del [[karnaval|carnaval]] fueron llaves: cada una abrió una puerta en la memoria histórica de Madrid, «todo lo que España vivió y prefirió olvidar». El **rey** es la memoria del que perdió esa tierra, un señor de al-Ándalus: no recuerda su nombre, pero recuerda la ofensa, y cree que vuelve a casa. Madrid fue fundada en el siglo IX como la fortaleza de **Mayrit**.

## La discordia

El rey se hace más fuerte con cada pelea, cada grito, cada «¿y vos quién sos?». La doctora pelirroja lo confirma en el metro: cuando alguien discute, la luz de la estación parpadea. Pero Natasha descubre otra cosa desde la plaza de España: la discordia solo abre la puerta; al rey lo alimenta la gente que mira desde los balcones con el teléfono en la mano y espera que otro lo arregle.

## La pregunta

En la plaza de Colón hiere a [[luis|Luis]] con su sable; Natasha lo echa a golpes de cono. Ante el monumento a Cervantes ya no pelea: pregunta. «¿Por qué defendés España? No sos español.» Le recuerda a Luis el oro de los templos y la plata de Potosí, y al Gauchito Gil, el santo de su abuela: «¿Qué te dio España?». Luis no sabe qué contestar y se queda a su lado, con un brillo blanco en los ojos. Ni los demonios del sótano de la historia, sacados de debajo de los adoquines con el conjuro del abuelo de Mariano Ferreira, logran despertarlo. Lo consigue Natasha en el templo de Debod. Al amanecer, el rey sigue esperando en la plaza, y Luis ya tiene la respuesta.`
  },
  ru: {
    t: 'Призрачный король аль-Андалуса',
    s: 'Король в серебряной короне на белом коне, вернувшийся в Мадрид через тысячу лет: имени своего не помнит, но помнит обиду и питается раздором.',
    box: [['Испанский', 'El rey fantasma'], ['Кто он', '«Память о том, кто когда-то потерял эту землю»'], ['Армия', 'Белые всадники в бурнусах с круглыми щитами'], ['Сила', 'Раздор, а потом — равнодушие'], ['Вопрос', '«Что тебе дала Испания?»'], ['Враги', '[[natasha|Наташа]] с дорожным конусом, медведь с Пуэрта-дель-Соль, [[zmaj|Змай]]']],
    b: `По словам [[agente-l|агента Л]], огни в ночь [[karnaval|карнавала]] были ключами: каждый открыл дверь в историческую память Мадрида — «всё, что Испания пережила и о чём предпочла забыть». **Король** — память о том, кто когда-то потерял эту землю, о властителе аль-Андалуса: имени он не помнит, но помнит обиду и думает, что возвращается домой. Мадрид был основан в IX веке как крепость **Маджрит**.

## Раздор

Король сильнее с каждой ссорой, каждым криком, каждым «а ты кто такой?». Рыжая врач подтверждает это в метро: когда кто-то спорит, свет на станции мигает. Но Наташа на площади Испании понимает больше: раздор лишь открывает дверь, а кормят короля люди на балконах, которые снимают всё на телефон и ждут, что исправит кто-то другой.

## Вопрос

На площади Колумба он ранит [[luis|Луиса]] саблей; Наташа прогоняет его ударами конуса. У памятника Сервантесу он уже не дерётся, а спрашивает: «Почему ты защищаешь Испанию? Ты ведь не испанец». Он напоминает Луису о золоте храмов, о серебре Потоси и о Гаучито Хиле, святом его бабушки: «Что тебе дала Испания?» Луис не находит ответа и остаётся рядом с ним, с белым светом в глазах. Даже демоны из подвала, вызванные заклинанием деда Мариано Феррейры, не могут его разбудить. Это удаётся Наташе у храма Дебод. На рассвете король всё ещё ждёт на площади, а у Луиса уже есть ответ.`
  }
});

A({
  id: 'oso-madrono', type: 'criatura', uni: 'hora-salvaje', img: 'img/covers/dikij-chas-karnaval-razdora.webp',
  novels: ['dikij-chas-karnaval-razdora'],
  see: ['karnaval', 'madrid', 'natasha', 'luis', 'rey-al-andalus'],
  es: {
    t: 'El Oso y el Madroño (el Amo)',
    s: 'La estatua de bronce de la Puerta del Sol, despertada por un dibujo de Luis y por los espíritus eslavos que Natasha llama desde los armarios de Madrid.',
    box: [['Ruso', 'Медведь и земляничное дерево, Хозяин'], ['Lugar', 'Puerta del Sol, [[madrid|Madrid]]'], ['Lo despierta', 'El dibujo en tiza de [[luis|Luis]] y el talismán de madera de [[natasha|Natasha]]'], ['Jinetes', 'Domovói, kikímoras, un leshi con su maceta de ficus, un bánnik y un polevik de Riazán']],
    b: `En la **Estación Mítica**, a la que lleva el tren sin horario de Marcos y [[alicia|Alicia]], tres viejitos barbudos, con musgo en la barba, le explican a [[natasha|Natasha]] que donde va un eslavo van «los nuestros»: los domovói viajan en maletas, en botas de fieltro y en frascos de mermelada. Madrid está llena de ellos, dormidos en armarios, sótanos e iglesias viejas, llegados con emigrantes rusos, serbios, polacos y búlgaros. Para que sigan a alguien a la guerra necesitan un **Amo**: «A nosotros al oso no se lo llama por su nombre. Se lo llama el Amo».

## El despertar

En la Puerta del Sol, mientras los espíritus del [[rey-al-andalus|rey]] cierran el cerco, Natasha llama a los espíritus «a casa» con el osito de madera que le regalaron en la Estación Mítica. [[luis|Luis]] mira la estatua como mira cuando va a pintar —«¿Estás cansado, no? Estirándote, estirándote…»— y la dibuja sobre los adoquines con la tiza del centauro, ya no estirándose hacia el madroño sino lista para saltar. El bronce se agrieta, el madroño se llena de frutos de verdad y el oso crece hasta el segundo piso de la Casa de Correos. Los relojes dan doce campanadas, como en Nochevieja.

Cubierto de domovói, kikímoras y un leshi con su maceta de ficus entre las orejas, el Amo baja por Alcalá y empuja al ejército blanco por la Gran Vía, mientras el [[agente-l|Agente L]] dispara desde el edificio Metrópolis balas frotadas con sal: «La sal contra los malos espíritus. La plaza, total, se llama Sol».`
  },
  ru: {
    t: 'Медведь и земляничное дерево (Хозяин)',
    s: 'Бронзовая статуя с Пуэрта-дель-Соль, которую будят рисунок Луиса и славянские духи, призванные Наташей из мадридских шкафов.',
    box: [['Испанский', 'El Oso y el Madroño'], ['Где', 'Пуэрта-дель-Соль, [[madrid|Мадрид]]'], ['Разбудили', 'Рисунок мелом [[luis|Луиса]] и деревянный оберег [[natasha|Наташи]]'], ['Наездники', 'Домовые, кикиморы, леший с кадкой фикуса, банник и полевик из-под Рязани']],
    b: `На **Мифической станции**, куда их привозит поезд без расписания Марка и [[alicia|Алисии]], трое старичков с мхом в бородах объясняют [[natasha|Наташе]]: где славянин — там и «наши». Домовые едут в чемоданах, в валенках, в банках с вареньем. Мадрид полон ими: они спят по шкафам, подвалам и старым церквям, приехав с русскими, сербскими, польскими и болгарскими эмигрантами. Чтобы они пошли за кем-то на войну, им нужен **Хозяин**: «У нас медведя по имени не зовут. Зовут Хозяином».

## Пробуждение

На Пуэрта-дель-Соль, пока духи [[rey-al-andalus|короля]] сжимают кольцо, Наташа зовёт духов «домой», прижимая к груди деревянного медвежонка с Мифической станции. [[luis|Луис]] смотрит на статую так, как смотрит перед тем, как рисовать («Ты устал, да? Тянешься, тянешься…»), и рисует её на брусчатке мелом кентавра — уже не тянущейся к ягодам, а готовой к прыжку. Бронза трескается, на земляничном дереве вспыхивают настоящие ягоды, и медведь вырастает до второго этажа Дома почты. Часы бьют двенадцать раз, как в новогоднюю ночь.

Облепленный домовыми, кикиморами и лешим с кадкой фикуса между ушей, Хозяин идёт по Алькала и гонит белую армию по Гран-Виа, а [[agente-l|агент Л]] стреляет с крыши «Метрополиса» пулями, натёртыми солью: «Соль против нечисти. И площадь у вас так и называется».`
  }
});

addTo('karnaval',
`## Capítulos 15–27

Eslava furia · Fortaleza bajo Madrid · La Pelirroja · El elixir de Karl · Un tren sin horario · La Estación Mítica · El oso y el madroño · ¿Qué te dio España? · Una mirada ajena · La maleta de Ferreira · ¡Madrid, levántate! · Zmaj volvió de vacaciones · El templo de Debod

## La batalla de Madrid

- **El [[rey-al-andalus|rey fantasma]]** de al-Ándalus, con su ejército de jinetes blancos, hiere a Luis en la plaza de Colón. Natasha lo echa a golpes de cono de tránsito.
- **La estación Colón** se vuelve fortaleza: Natasha reza bajo un mosaico y los espíritus ya no pueden entrar.
- **La Pelirroja**, una doctora rusa sin nombre («El nombre es un lujo»), cose a Luis y le pone tres gotas del elixir que el [[agente-l|Agente L]] recibió de «un tal Karl»: funciona una sola vez por persona.
- **El tren fantasma** de Marcos y [[alicia|Alicia]] los lleva a la Estación Mítica, donde los seres de los mitos siguen discutiendo un partido que nunca empezó.
- **El [[oso-madrono|Oso y el Madroño]]** despierta en la Puerta del Sol con los espíritus eslavos de Madrid sobre el lomo.
- **La maleta de Ferreira**: el conjuro de su abuelo saca de debajo de los adoquines a cien demonios con bigotitos y medallas que bailan flamenco a paso de desfile y espantan al ejército del rey: «Madrid se pone en orden».
- **¡Madrid, levántate!** Desde el capó de un Seat 600, Natasha despierta a los vecinos con un megáfono. Bajan cocineros con sartenes, mozos con bandejas y la modista con sus tijeras: «¡Que nos lo ha dicho la de Belgrado!».
- **[[zmaj|Zmaj]]** vuelve de vacaciones y se lleva a Luis, hechizado, al templo de Debod. Allí Natasha lo trae de vuelta con un beso, y él le devuelve su crucecita de plata: «Vuelvo. Junto conmigo».

La novela sigue en curso.`,
`## Главы 15–27

Славянская ярость · Крепость под Мадридом · Рыжая · Эликсир Карла · Поезд без расписания · Мифическая станция · Медведь и земляничное дерево · Что тебе дала Испания? · Чужой взгляд · Чемодан Феррейры · Мадрид, вставай! · Змай вернулся из отпуска · Храм Дебод

## Битва за Мадрид

- **[[rey-al-andalus|Призрачный король]]** аль-Андалуса с армией белых всадников ранит Луиса на площади Колумба. Наташа прогоняет его ударами дорожного конуса.
- **Станция «Колон»** становится крепостью: Наташа молится под мозаикой, и духи больше не могут войти.
- **Рыжая**, русская врач без имени («Имя — это роскошь»), зашивает Луиса и капает на рану три капли эликсира, который [[agente-l|агент Л]] получил от «некоего Карла»: он действует один раз на одного человека.
- **Призрачный поезд** Марка и [[alicia|Алисии]] привозит их на Мифическую станцию, где существа из мифов до сих пор спорят о матче, который так и не начался.
- **[[oso-madrono|Медведь и земляничное дерево]]** просыпается на Пуэрта-дель-Соль, а на его спине едут славянские духи Мадрида.
- **Чемодан Феррейры**: заклинание его деда выпускает из-под брусчатки сотню демонов с тонкими усиками и медалями, которые танцуют фламенко строевым шагом и обращают армию короля в бегство: «Мадрид приводит себя в порядок».
- **Мадрид, вставай!** С капота «Сеата-600» Наташа будит жителей мегафоном. Вниз спускаются повара со сковородками, официанты с подносами и портниха с ножницами: «Вперёд! Нам это сама белградка сказала!»
- **[[zmaj|Змай]]** возвращается из отпуска и уносит зачарованного Луиса к храму Дебод. Там Наташа возвращает его поцелуем, а он отдаёт ей серебряный крестик: «Возвращаю. Вместе с собой».

Роман ещё пишется.`,
[['Antagonista (cap. 15–27)', '[[rey-al-andalus|El rey fantasma de al-Ándalus]]'], ['Aliados (cap. 15–27)', 'La Pelirroja, Marcos y Alicia, el [[oso-madrono|Oso de la Puerta del Sol]], [[zmaj|Zmaj]]']],
[['Противник (гл. 15–27)', '[[rey-al-andalus|Призрачный король аль-Андалуса]]'], ['Союзники (гл. 15–27)', 'Рыжая, Марк и Алисия, [[oso-madrono|медведь с Пуэрта-дель-Соль]], [[zmaj|Змай]]']]);

addTo('alicia',
`## En Madrid

En *El carnaval de la discordia*, Alicia y [[marcos|Marcos]] llegan a la estación Colón del metro de Madrid en el [[tren-fantasma|tren fantasma]], que ya no tiene recorrido ni horario: «Lo maneja él solo. Nosotros solo tratamos de no estorbarle mientras intenta matarnos». Alicia lleva un mapa de papel con líneas que se mueven y decide las paradas «discutiéndolas con el mapa». Los lleva a la Estación Mítica (Marcos no quiere volver a ver al centauro) y le regala a Luis la tiza con la que el centauro dibujaba sus arcos: «El mapa dijo: “Agarrá lo que está tirado sin uso”». En las ilustraciones nuevas de *El tren fantasma* tiene el pelo negro, recogido en una trenza.`,
`## В Мадриде

В «Карнавале раздора» Алисия и [[marcos|Марк]] приезжают на станцию мадридского метро «Колон» на [[tren-fantasma|призрачном поезде]], у которого больше нет ни маршрута, ни расписания: «Ведёт он сам. Мы просто стараемся не мешать ему нас убить». У Алисии бумажная карта с ползающими линиями, и остановки она решает «вместе с картой». Она везёт всех на Мифическую станцию (Марк не хочет снова видеть кентавра) и дарит Луису мел, которым кентавр рисовал свои ворота: «Карта сказала: „Возьми то, что лежит без дела“». На новых иллюстрациях к «El tren fantasma» у неё чёрные волосы, заплетённые в косу.`);

/* ---------- Предчувствие 2.3 ---------- */

A({
  id: 'herederas', type: 'organizacion', uni: 'utopia', img: 'img/covers/predchuvstvie-2-3.webp',
  novels: ['predchuvstvie-2-3'],
  see: ['fortaleza-turquesa', 'sasha', 'oxana', 'natalia-violonchelista', 'utopia'],
  es: {
    t: 'Las Herederas de la Segunda Potencia',
    s: 'El ejército de mujeres de la Segunda Potencia, que sale del mar con tanques-robot de seis patas y quiere que Nuestra Utopía se declare de su lado.',
    box: [['Ruso', '«Наследницы» Второй Державы'], ['Base', 'Un submarino; luego Nueva Misión'], ['Armas', 'Tanques-robot negros con escudos invisibles; armas de nueva generación'], ['Jefa', 'Ekaterina, la rubia que mató a Mijaíl'], ['Interrogadoras', 'Alisa, de la cicatriz, y Sofía, de anteojos'], ['Su secreto', 'Saben más que nadie sobre el efecto de la radiación en las mujeres']],
    b: `En *[[predchuvstvie-2-3|Предчувствие 2.3]]*, una voz de mujer habla por la radio desde un submarino: «Queridos habitantes de Nuestra Utopía, los vamos a proteger». A cambio quieren que la fortaleza le diga al mundo que comparte los valores de la Segunda Potencia. [[sasha|Sasha]] contesta que no, que es su victoria, y esa misma noche salen del mar los **tanques-robot**: negros mate, sin orugas, con seis patas articuladas «de araña», que toman Nueva Misión y avanzan sobre la [[fortaleza-turquesa|fortaleza]].

## Las Herederas

Natalia lo entiende mirando una lluvia de estrellas: el invierno nuclear despertó poderes solo en las mujeres, y por eso el ejército de la Segunda Potencia está hecho de mujeres. Clara lo explica después: la capa de partículas de la estratosfera interactúa con el cromosoma X.

## Derrota

El escudo de los tanques puede cortarse: lo demuestra Mijaíl, el marido de [[oxana|Oxana]], con la espada cargada por Sasha, y paga con su vida. Ni un misil mejorado consigue atravesar el escudo granate de la fortaleza. Las utopistas toman un tanque disfrazadas con uniformes de Herederas, Oxana levanta los demás con la guitarra y Rita le arranca a Ekaterina de un disparo el control del arsenal nuclear. Cuando llega un nuevo submarino, se lo queda una mujer pelirroja con bata blanca y ojos de hielo turquesa: «Estos territorios son suyos. A mí no me hacen falta».`
  },
  ru: {
    t: '«Наследницы» Второй Державы',
    s: 'Женская армия Второй Державы, которая выходит из моря на шестиногих танках-роботах и хочет, чтобы Наша Утопия объявила себя на её стороне.',
    box: [['Испанский', 'Las Herederas'], ['База', 'Подлодка, затем Новая Миссия'], ['Оружие', 'Чёрные танки-роботы с невидимыми щитами; оружие нового поколения'], ['Командир', 'Екатерина — блондинка, убившая Михаила'], ['Допрашивают', 'Алиса со шрамом и София в очках'], ['Их тайна', 'Знают больше всех о том, как радиация действует на женщин']],
    b: `В «[[predchuvstvie-2-3|Предчувствии 2.3]]» женский голос говорит по рации с подлодки: «Уважаемые жители Нашей Утопии. Мы вас защитим». Взамен крепость должна сообщить миру, что разделяет ценности Второй Державы. [[sasha|Саша]] отвечает: «Нет! Это НАША победа!» — и той же ночью из моря выходят **танки-роботы**: матово-чёрные, без гусениц, на шести гибких «паучьих» конечностях. Они занимают Новую Миссию и идут на [[fortaleza-turquesa|крепость]].

## «Наследницы»

Наталья понимает это, глядя на звездопад: ядерная зима пробудила силы только у женщин, поэтому и армия Второй Державы состоит из женщин. Клара потом объясняет: слой частиц в стратосфере взаимодействует с Х-хромосомой.

## Поражение

Щит танка можно разрезать — это доказывает Михаил, муж [[oxana|Оксаны]], мечом, заряженным силой Саши, и платит за это жизнью. Даже улучшенная ракета не может пробить гранатовый щит крепости. Утопистки захватывают танк, переодевшись в форму «Наследниц», Оксана гитарой поднимает в воздух остальные машины, а Рита выстрелом выбивает из руки Екатерины пульт ядерного арсенала. Когда всплывает новая подлодка, её забирает рыжая женщина в белом халате с глазами цвета бирюзового льда: «Эти территории — ваши. Мне они не нужны».`
  }
});

addTo('sasha',
`## Предчувствие 2.3

En la tercera temporada, Sasha se desmaya en la tribuna y de su palma sale un **rayo granate** que golpea la muralla. Desde entonces la piedra de la [[fortaleza-turquesa|fortaleza]] tiene vetas granates que laten como venas: su poder carga la espada de Mijaíl, que corta el escudo de un tanque de las [[herederas|Herederas]], y protege la fortaleza vacía cuando los utopistas huyen por el túnel número 6. Sasha descubre que está ligada a la propia fortaleza: cada vez que la atacan, a ella le duele el pecho. En la batalla de Nueva Misión sostiene el escudo granate del tanque robado: «No van a pasar». Al final acaricia las paredes y siente su pulso.`,
`## «Предчувствие 2.3»

В третьем сезоне Саша падает в обморок у трибуны, и из её ладони вырывается **гранатовый луч**, ударяющий в стену. С тех пор в камне [[fortaleza-turquesa|крепости]] пульсируют гранатовые прожилки, как сосуды: её сила заряжает меч Михаила, который разрезает щит танка [[herederas|«Наследниц»]], и защищает опустевшую крепость, когда утописты уходят по туннелю №6. Саша понимает, что связана с самой крепостью: каждый раз, когда её атакуют, у Саши болит сердце. В битве за Новую Миссию она держит гранатовый щит угнанного танка: «Они не пробьются». В конце она гладит стены и чувствует их пульс.`,
[['Poder (2.3)', 'Rayo y escudo granates']],
[['Сила (2.3)', 'Гранатовый луч и щит']]);

addTo('oxana',
`## Предчувствие 2.3

En la Utopía, Oxana dio un golpe y ocupó el lugar de Natalia, y ahora la acompaña al desierto a desenterrar la tumba vacía de Luis. Su marido, **Mijaíl**, entiende por fin que la ama y se queda en las murallas la noche de la evacuación: «¡Oxana, no me recuerdes como un cobarde!». Muere cortando con la espada de Sasha el escudo de un tanque de las [[herederas|Herederas]]. Su poder es **dorado como la miel**: en el campamento de refugiados se pelea con Natalia a golpes de energía, y en Nueva Misión levanta los tanques enemigos tocando rock con la guitarra. Se ve en secreto con [[luis-arquitecto|Luis]], que la besa como «consuelo». Al final, ella y Natalia empatan en las elecciones de la fortaleza: falta abrir el último sobre.`,
`## «Предчувствие 2.3»

В Утопии Оксана устроила переворот и заняла место Натальи, а теперь едет с ней в пустыню раскапывать пустую могилу Луиса. Её муж **Михаил** наконец понимает, что любит её, и в ночь эвакуации остаётся у стен: «Оксана! Запомни меня не трусом!» Он погибает, разрезав мечом Саши щит танка [[herederas|«Наследниц»]]. Её сила — **медовая, золотистая**: в лагере беженцев она бьётся с Натальей волнами энергии, а в Новой Миссии поднимает вражеские танки, играя рок на гитаре. Она тайно встречается с [[luis-arquitecto|Луисом]], который целует её «как утешение». В финале она и Наталья набирают поровну голосов на выборах крепости — осталось вскрыть последний конверт.`,
[['Esposo (Utopía)', 'Mijaíl, muerto en *Предчувствие 2.3*']],
[['Муж (Утопия)', 'Михаил, погиб в «Предчувствии 2.3»']]);

addTo('luis-arquitecto',
`## Предчувствие 2.3

Natalia desentierra su tumba en el desierto y la encuentra vacía: solo queda su teléfono, con el mapa de evacuación por los túneles hacia el este. Luis estaba vivo. Había fingido su muerte y vigila a los utopistas en el campamento de refugiados de las montañas, «su tierra natal», disfrazado de vagabundo, con una nota en el bolsillo de Natalia: *«Todavía te amo»*. Se ve con [[oxana|Oxana]] y la besa. Su exmujer Lisa, prisionera de las [[herederas|Herederas]], cuenta que tienen un hijo: Vasia. Al final Luis lleva en brazos a Natalia herida hasta el monumento a Robert y le vuelve a confesar su amor; ella le dice que nunca lo amará y que se vaya «para siempre». Se va volando y termina tomando malbec en algún lugar lejano, mientras Oxana lo llama: «Me prometiste estar conmigo».`,
`## «Предчувствие 2.3»

Наталья раскапывает его могилу в пустыне и находит её пустой: остался только телефон с картой эвакуации по туннелям на восток. Луис жив. Он инсценировал свою смерть и следит за утопистами в лагере беженцев среди гор — на «своей родной земле», одетый как бродяга; в кармане у Натальи оказывается его записка: *«Todavía te amo»*. Он встречается с [[oxana|Оксаной]] и целует её. Его бывшая жена Лиза, пленница [[herederas|«Наследниц»]], рассказывает, что у них есть сын — Вася. В финале Луис приносит раненую Наталью к памятнику Роберту и снова признаётся ей в любви; она отвечает, что никогда его не полюбит, и велит исчезнуть «навсегда». Он улетает и пьёт мальбек где-то далеко, когда Оксана звонит ему: «Ты обещал быть со мной».`,
[['Hijo', 'Vasia (con Lisa), en *Предчувствие 2.3*']],
[['Сын', 'Вася (от Лизы), в «Предчувствии 2.3»']]);

addTo('natalia-violonchelista',
`## Предчувствие 2.3

En la tercera temporada, Natalia desentierra la tumba de Luis y no encuentra nada. Toca el violonchelo como arma (sus golpes dejan grietas turquesa congeladas en el aire), recibe en el campamento de refugiados la ovación de quienes la vieron derribar aviones en directo, y se reconcilia con su hermana Rita. Robert vuelve como fantasma y, desde que Sasha golpeó la fortaleza, puede tocarla: «Me sentís porque yo te enseñé a sentir». Al final, ella y [[oxana|Oxana]] empatan en las elecciones de la fortaleza.`,
`## «Предчувствие 2.3»

В третьем сезоне Наталья раскапывает могилу Луиса и ничего не находит. Виолончель становится её оружием (после её ударов в воздухе остаются застывшие бирюзовые трещины), в лагере беженцев её встречают овацией люди, видевшие в прямом эфире, как она сбивала самолёты, и она мирится с сестрой Ритой. Роберт возвращается призраком и после удара Саши по крепости может к ней прикасаться: «Ты меня чувствуешь, потому что я тебя этому научил». В финале она и [[oxana|Оксана]] набирают поровну голосов на выборах крепости.`);

addTo('fortaleza-turquesa',
`## El escudo granate

En *[[predchuvstvie-2-3|Предчувствие 2.3]]* los habitantes de Nuestra Utopía abandonan la fortaleza por el túnel número 6 ante los tanques de las [[herederas|Herederas]], pero la fortaleza no cae: el rayo de [[sasha|Sasha]] la envolvió en una red granate que hace rebotar los disparos y hasta un misil mejorado. Los utopistas la recuperan y terminan la temporada eligiendo nueva gobernante.`,
`## Гранатовый щит

В «[[predchuvstvie-2-3|Предчувствии 2.3]]» жители Нашей Утопии уходят из крепости по туннелю №6 от танков [[herederas|«Наследниц»]], но крепость не падает: луч [[sasha|Саши]] окутал её гранатовой сетью, от которой отскакивают снаряды и даже улучшенная ракета. Утописты возвращают её и заканчивают сезон выборами новой правительницы.`);

/* ---------- Ladro di cuori 3 ---------- */

addTo('alessio',
`## Ladro di cuori 3

En *[[ladro-di-cuori-3|Ladro di cuori 3]]*, Alessio y Laura viven en una granja de la provincia de Buenos Aires, entre gallinas, cabras, tomates y un perro llamado Tango, tras vender en secreto el violín de oro de Don Salvatore. Una revista de joyas le habla de los **Corazones de Diamante**, robados en Amberes, y la pista lleva a Mendoza. En un Torino viejo viajan a Luján de Cuyo, a casa de **Adriana**, la prima pintora de Laura. En la **Casa de Fader** de Mayor Drummond, Alessio espía de noche entre los cipreses al restaurador Don Sergio y lo cree el ladrón «El Fantasma»; en realidad el Fantasma es **Ignacio**, el hermano menor de Adriana, que esconde los diamantes en los marcos de los cuadros de su hermana para mandarlos a Burdeos. En el laberinto de cipreses Ignacio le ofrece el diamante rosa, de siete millones de euros: «Era un ladrón. Ahora soy solo un hombre que tiene que plantar tomates». Enrico, de Interpol, que los había usado en Málaga, no recuerda en su informe «los nombres de los dos turistas italianos». Al volver a la granja llega una postal de Venecia: «Venezia ha bisogno di un ladro di cuori. M.». Alessio la guarda en el bolsillo: «Publicidad».

La edición es para estudiantes de italiano: cada capítulo trae vocabulario italiano-ruso y ejercicios, y al final el lector vota si quiere un cuarto libro.`,
`## «Ladro di cuori 3»

В «[[ladro-di-cuori-3|Ladro di cuori 3]]» Алессио и Лаура живут на ферме в провинции Буэнос-Айрес — куры, козы, помидоры и пёс по кличке Танго, — тайно продав золотую скрипку дона Сальваторе. Журнал о драгоценностях рассказывает ему о **Бриллиантовых сердцах**, украденных в Антверпене, и след ведёт в Мендосу. На старом «Торино» они едут в Лухан-де-Куйо к **Адриане**, кузине Лауры, художнице. В **Доме Фадера** в Майор-Драммонде Алессио ночью следит среди кипарисов за реставратором доном Серхио и принимает его за вора по прозвищу «Призрак»; на самом деле Призрак — **Игнасио**, младший брат Адрианы, который прячет бриллианты в рамах картин сестры, чтобы отправить их в Бордо. В кипарисовом лабиринте Игнасио предлагает ему розовый бриллиант за семь миллионов евро: «Я был вором. Теперь я просто человек, которому надо сажать помидоры». Энрико из Интерпола, который использовал их в Малаге, «не помнит» в отчёте «имён двух итальянских туристов». Когда они возвращаются на ферму, приходит открытка из Венеции: «Venezia ha bisogno di un ladro di cuori. M.». Алессио кладёт её в карман: «Реклама».

Издание — для изучающих итальянский: в каждой главе итальянско-русский словарик и упражнения, а в конце читатель голосует за четвёртую книгу.`,
[['Granja', 'Provincia de Buenos Aires (*Ladro di cuori 3*)']],
[['Ферма', 'Провинция Буэнос-Айрес («Ladro di cuori 3»)']]);

addTo('laura-bellini',
`## Ladro di cuori 3

En *[[ladro-di-cuori-3|Ladro di cuori 3]]* Laura viaja a Mendoza para conocer a su familia argentina: su prima **Adriana**, pintora de una serie de corazones, y los cuatro hermanos de esta. Es ella quien obliga a Alessio a dejar de mentir, quien llama a Enrico de Interpol («Nos usó, es verdad. Pero es honesto. Y nos debe un favor») y quien detiene a Ignacio en el laberinto de cipreses con un rastrillo levantado como una espada: «Ni lo intentes». En la galería de la granja canta *Volver*, una canción sobre el regreso.`,
`## «Ladro di cuori 3»

В «[[ladro-di-cuori-3|Ladro di cuori 3]]» Лаура едет в Мендосу знакомиться со своей аргентинской роднёй: кузиной **Адрианой**, художницей, автором серии «сердец», и её четырьмя братьями и сёстрами. Это она заставляет Алессио перестать врать, звонит Энрико из Интерпола («Он нас использовал, это правда. Но он честный. И должен нам услугу») и останавливает Игнасио в кипарисовом лабиринте садовыми граблями, поднятыми как меч: «Даже не пытайся». На веранде фермы она поёт *Volver* — песню о возвращении.`);

addTo('fernando-fader',
`## En Ladro di cuori 3

*[[ladro-di-cuori-3|Ladro di cuori 3]]* transcurre en buena parte en la **Casa de Fader** de Mayor Drummond: el parque a la francesa con cipreses recortados en laberinto, las estatuas blancas, la galería de murales y la piscina vacía con las garzas pintadas por Fernando en las paredes. Allí se esconde Alessio para sorprender al Fantasma, y en ese laberinto termina la persecución. Don Sergio, el restaurador de ochenta años que conoce la casa «con los ojos cerrados», dona su parte de la recompensa para restaurar la piscina y los murales («Fernando estaría contento») y le regala a Laura una biografía del pintor: «Él también, al final, eligió el campo, la luz y las cabras».`,
`## В «Ladro di cuori 3»

Действие «[[ladro-di-cuori-3|Ladro di cuori 3]]» во многом происходит в **Доме Фадера** в Майор-Драммонде: французский парк с кипарисами, подстриженными в лабиринт, белые статуи, галерея фресок и пустой бассейн с цаплями, которых Фернандо нарисовал на стенах. Там Алессио прячется, чтобы застать Призрака, и в этом лабиринте заканчивается погоня. Дон Серхио, восьмидесятилетний реставратор, который знает дом «с закрытыми глазами», отдаёт свою часть награды на реставрацию бассейна и фресок («Фернандо был бы доволен») и дарит Лауре биографию художника: «Он ведь тоже в конце концов выбрал деревню, свет и коз».`,
[['Novela (2026)', '[[ladro-di-cuori-3|Ladro di cuori 3]]']],
[['Роман (2026)', '[[ladro-di-cuori-3|Ladro di cuori 3]]']]);

addTo('robert-fader',
`## Un guiño en Ladro di cuori 3

En *[[ladro-di-cuori-3|Ladro di cuori 3]]*, Don Sergio, el viejo restaurador de la Casa de Fader, cuenta que su hijo «escribe novelas, vive en Rusia, entre la nieve», y que cada domingo le cuenta por teléfono una historia de Mendoza «y él la pone en sus libros». Al final lo llama: «Escuchá, Roberto, esta semana tengo una historia para vos. Una historia verdadera». Y le promete a Alessio y Laura que su hijo «va a cambiar los nombres».`,
`## Отсылка в «Ladro di cuori 3»

В «[[ladro-di-cuori-3|Ladro di cuori 3]]» дон Серхио, старый реставратор из Дома Фадера, рассказывает, что его сын «пишет романы, живёт в России, среди снега», и каждое воскресенье по телефону отец рассказывает ему историю из Мендосы, «а он вставляет её в свои книги». В конце он звонит ему: «Слушай, Роберто, на этой неделе у меня для тебя история. Настоящая». И обещает Алессио и Лауре, что сын «поменяет имена».`);

/* ---------- La gran conspiración (cap. 3–10) ---------- */

addTo('natalia',
`## La gran conspiración

En *[[la-gran-conspiracion|La gran conspiración]]* (para adultos, en curso), Natalia es una **cardióloga moscovita pelirroja** a la que ya casi nada sorprende, hasta que el mismo día le escriben dos argentinos: Luis, un artista que quiere dibujar su retrato, y Roberto, un seductor de aplicación de citas. Elige a Luis. Pero cada vez que están juntos de verdad, el planeta responde: temblores, apagones, auroras. Una agencia secreta dirigida por la **comandante Ingrid Valk**, que desenvuelve caramelos de menta, deduce que «no es ella sola, ni él solo: son ellos dos», y recluta a Roberto con una pulsera que vibra cuando ellos se abrazan. Natalia y Luis huyen en tren al norte, a la casa de su abuela en Carelia, donde los recibe el viejo Matvéi Ilich y una aurora boreal ilumina el lago; después a Petrozavodsk. En el capítulo 10, Valk le ordena a Roberto que al mediodía no dispare al aire, sino a matar, y Roberto, por primera vez, no sabe de qué lado está.`,
`## «La gran conspiración»

В «[[la-gran-conspiracion|La gran conspiración]]» (для взрослых, пишется) Наталья — **рыжеволосая кардиолог из Москвы**, которую уже почти ничто не удивляет, пока в один день ей не пишут двое аргентинцев: Луис, художник, который хочет нарисовать её портрет, и Роберто, соблазнитель из приложения знакомств. Она выбирает Луиса. Но каждый раз, когда они по-настоящему вместе, планета отвечает: землетрясения, отключения света, полярные сияния. Секретное ведомство **командира Ингрид Вальк**, разворачивающей мятные леденцы, приходит к выводу: «Дело не в ней одной и не в нём одном — дело в них двоих» — и вербует Роберто, надев на него браслет, который вибрирует, когда они обнимаются. Наталья и Луис бегут на поезде на север, в дом её бабушки в Карелии, где их встречает старый Матвей Ильич, а над озером встаёт северное сияние; потом — в Петрозаводск. В десятой главе Вальк приказывает Роберто в полдень стрелять не в воздух, а на поражение, и Роберто впервые не знает, на чьей он стороне.`);

/* ---------- El tango más triste ---------- */

addTo('hora-salvaje',
`## El tango más triste

*[[la-hora-salvaje-tango|La hora salvaje: El tango más triste]]* es una aventura en castellano. Una noche de septiembre, en el balcón de Belgrado, Luis y Nátasha reciben una llamada de Sergio desde Buenos Aires: llora porque perdió River, y no es el único. Hace dos semanas que los hombres de toda la Argentina lloran por cualquier cosa, mientras las mujeres se ríen. «Esto no es tristeza, *ljubavi*», dice Nátasha. «Es una firma.» La pareja vuela a Buenos Aires, donde los esperan un cetro misterioso, una Casa Rosada custodiada por extranjeros, monstruos de leyenda como Nahuelito, estatuas que se mueven… y el tango que Luis, en once años juntos, nunca se animó a bailar con ella. Los capítulos 2 a 23 se leen con contraseña.`,
`## «El tango más triste»

«[[la-hora-salvaje-tango|La hora salvaje: El tango más triste]]» — приключение на испанском. Сентябрьским вечером на белградском балконе Луису и Наташе звонит из Буэнос-Айреса Серхио: он плачет, потому что проиграл «Ривер», и он не один. Уже две недели мужчины по всей Аргентине плачут из-за любой мелочи, а женщины смеются. «Это не грусть, *ljubavi*, — говорит Наташа. — Это подпись». Они летят в Буэнос-Айрес, где их ждут таинственный скипетр, Каса-Росада под охраной иностранцев, чудовища из легенд вроде Науэлито, движущиеся статуи… и танго, которое Луис за одиннадцать лет так и не решился с ней станцевать. Главы 2–23 открываются паролем.`);

/* ---------- Enlaces del mapa del multiverso ---------- */

window.LINKS = (window.LINKS || []).concat([
  ['rodrigo', 'natasha', { es: 'novios en La reina de la Vendimia', ru: 'пара в «La reina de la Vendimia»', en: 'a couple in La reina de la Vendimia' }],
  ['olguina', 'natasha', { es: 'Natasha le rompe la maldición', ru: 'Наташа снимает с неё проклятие', en: 'Natasha breaks her curse' }],
  ['mulanima', 'jana', { es: '«Cuando me llames, vendré»', ru: '«Когда позовёшь — я приду»', en: '"When you call me, I will come"' }]
]);
