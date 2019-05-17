const seals = [
  {
    id: 1,
    name: 'Тюлень монах',
    image: '../assets/images/seal-13.jpg',
    about: 'Этот вид тюленя является, пожалуй, самым теплолюбивым среди тюленей, так как холодным арктическим и антарктическим холодам предпочитает теплые воды Средиземноморья, Гавайских и Карибских островов, где собственно обитает. Также в отличие от других тюленей имеет хорошо развитый задний отдел нижней челюсти. Длина тела тюленя монаха составляет 2-3 метре при весе 250 кг. Имеет серо-коричневую окраску и светлое брюхо, через что получил второе название – белобрюхий тюлень', 
    place: 'Черноморское побережье'
  },
  {
    id: 2,
    name: 'Морской слон',
    image: '../assets/images/seal-14.jpg',
    about: 'Как можно догадаться по названия морской слон является самым большим видом тюленей, его длина может достигать до 6,5 метра при весе в 2,5 тонн. Также некоторое свойство со слонами придает не только большие размеры, но и наличие хотообразного носа у самцов морского слона. В зависимости от ареала обитания морские слоны делятся на два подвида: северный морской слон обитает на побережье Северной Америки, и южный морской слон обитает в Антарктиде.', 
    place: 'побережье Северной Америки'
  },
  {
    id: 3,
    name: 'Тюлень Росса',
    image: '../assets/images/seal-15.jpg',
    about: 'Названный на честь английского исследователя Джеймса Росса. Это сравнительно маленький антарктический тюлень, ну как маленький, длина его тела составляет около 2 метров при весе в 200 кг. Имеет очень толстую в складках шею, в которую вполне может спрятать свою голову. Малоизучен, поскольку обитает в труднодоступных районах Антарктиды.', 
    place: 'Антарктика'
  },
  {
    id: 4,
    name: 'Тюлень крабоед',
    image: '../assets/images/seal-16.jpg',
    about: 'Тюлень крабоед, названый так за свое гастрономическое пристрастие к крабам, является также самым многочисленным тюленем в мире – по разным оценкам его численность составляет от 7 до 40 миллиона особей. Имеет средние как для тюленей размеры – длина тела – 2,2-2,6 метра, вес – 200-300 кг, длинную узкую морду.', 
    place: 'Антарктида'
  },
  {
    id: 5,
    name: 'Морской леопард',
    image: '../assets/images/seal-17.jpg',
    about: 'Назван так благодаря своей пятнистой шкуре и хищному поведению, среди тюленей этот вид считается самым опасным и агрессивным. В частности морские леопарды не брезгуют нападать на более мелких тюленей других видов, но излюбленным их лакомством являются пингвины.', 
    place: 'Антарктида'
  },
  {
    id: 6,
    name: 'Тюлень Уэдделла',
    image: '../assets/images/seal-18.jpg',
    about: 'Назван так на честь еще одного англичанина — британского мореплавателя сера Джеймса Уэдделла бывшего командующим исследовательской экспедиции в море Уэдделла, в ходе которой этот вид тюленя впервые был открыт европейцами. Среди других тюленей тюлень Уэдделла выделяется своими недюжинными способностями к нырянию и нахождению под водой – в то время как многие другие тюлени в морской пучине могут находиться не более 10 минут, этот тюлень может плавать целый час. ', 
    place: 'Антарктида'
  },
  {
    id: 7,
    name: 'Тюлень хохлач',
    image: '../assets/images/seal-19.jpg',
    about: 'В отличие от своих собратьев, описанных выше, этот тюлень обитает в Арктике, в основном на побережье Северной Америки, Гренландии. От других тюленей отличается своей пятнистой окраской.', 
    place: 'Гренладия'
  },
  {
    id: 8,
    name: 'Обыкновенный тюлень',
    image: '../assets/images/seal-20.jpg',
    about: 'Этот вид тюленей, представленный четырьмя подвидами (в зависимости от мест их обитания) обитает по всему северному арктическому полушарию: на берегах Северной Америки, Скандинавии, в северной части России. Некоторые подвиды обыкновенного тюленя из-за их браконьерского промысла находятся под угрозой исчезновения.', 
    place: 'Берега Северной Америки'
  },
  {
    id: 9,
    name: 'Длинномордый тюлень',
    image: '../assets/images/seal-21.jpg',
    about: 'Длинномордый тюлень назван так благодаря своей длиной, как даже для тюленей, морде. Длина тела длинномордого тюленя составляет 2,5 метра при весе до 300 кг. ', 
    place: 'Обитает в Северной Атлантике: на побережье Гренландии, Скандинавии и Исландии.'
  },
  {
    id: 10,
    name: 'Длинномордый тюлень',
    image: '../assets/images/seal-22.jpg',
    about: 'Длинномордый тюлень назван так благодаря своей длиной, как даже для тюленей, морде. Длина тела длинномордого тюленя составляет 2,5 метра при весе до 300 кг. ', 
    place: 'Обитает в Северной Атлантике: на побережье Гренландии, Скандинавии и Исландии.'
  },
  {
    id: 11,
    name: 'Гренландский тюлень',
    image: '../assets/images/seal-23.jpg',
    about: 'Еще один из северных тюленей, проживающий собственно на побережье Гренландии. От других видов тюленей отличаются характерной окраской: только у них есть серебристо-серая шерсть, черная голова, а также черная подковообразная линия, которая тянется от плеч по обоим бокам', 
    place: 'Гренладия'
  },
  {
    id: 12,
    name: 'Полосатый тюлень',
    image: '../assets/images/seal-24.jpg',
    about: 'От других тюленей отличается своей необычной полосатой окраской из белых и черных цветов. Обитает в Беренговом, Охотском и Чукотском море. Длина тела полосатого тюленя составляет 150-190 см, вес – 70-90 кг.', 
    place: 'Обитает в Беренговом, Охотском и Чукотском море.'
  },
  {
    id: 13,
    name: 'Нерпа',
    image: '../assets/images/seal-1.jpg',
    about: 'Нерпа является самым маленьким видом тюленя, длина тела ее в среднем составляет 1,5 метра при весе до 100 кг. Но это в среднем, самая маленькая среди подвидов нерп – ладожская нерпа, обитающая собственно в ладожском озере имеет длину тела не более 135 см при весе в 40 кг. В целом нерпы обитают в холодных и умеренных водах Тихого, Атлантического и Северно-ледовитого океанов, а также в больших озерах и внутренних морях.', 
    place: 'Атлантический и Северно-ледовитый океан'
  }
]

module.exports = {
  seals: seals,
  // facts: facts
}