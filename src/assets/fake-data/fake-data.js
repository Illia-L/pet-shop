export function isServerError(text) {
  if (text === '5server@error.com') return true;

  return false;
}

export function isEmailRegistered(text) {
  if (text === 'registered@email.com') return true;

  return false;
}

export function isResetTokenValid(text) {
  if (text === 'valid-token') return 'success';
  if (text === 'invalid-token') return 'fail';
}

export const categories = [
  {
    id: 1,
    title: 'Повідці, шлеї',
    description:
      'Вибір надійних повідців та шлей для прогулянок з вашим улюбленцем.',
  },
  {
    id: 2,
    title: 'Рулетки',
    description: 'Рулетки для контролю над вихованцем під час прогулянок.',
  },
  {
    id: 3,
    title: 'Нашийники',
    description: 'Міцні та стильні нашийники для собак і котів.',
  },
  {
    id: 4,
    title: 'Намордники',
    description:
      'Безпечні намордники для комфортних прогулянок у громадських місцях.',
  },
  {
    id: 5,
    title: 'Сумки для ласощів і контейнери',
    description:
      'Зручні сумки для ласощів та герметичні контейнери для зберігання їжі.',
  },
  {
    id: 6,
    title: 'Адресники та брелоки',
    description:
      'Ідентифікаційні адресники та декоративні брелоки для ваших улюбленців.',
  },
  {
    id: 7,
    title: 'Іграшки',
    description:
      'Різноманітні іграшки для розваг та активності вашого вихованця.',
  },
  {
    id: 8,
    title: 'Переноски і сумки',
    description:
      'Зручні переноски та стильні сумки для подорожей із домашнім улюбленцем.',
  },
  {
    id: 9,
    title: 'Лежанки і будиночки',
    description: 'Комфортні лежанки та затишні будиночки для собак і котів.',
  },
  {
    id: 10,
    title: 'Аксесуари для авто',
    description: 'Корисні аксесуари для перевезення вихованців в автомобілі.',
  },
  {
    id: 11,
    title: 'Одяг та Взуття',
    description: 'Модний одяг і зручне взуття для собак і котів.',
  },
  {
    id: 12,
    title: 'Когтеточки',
    description:
      'Практичні когтеточки для збереження меблів і догляду за кігтями.',
  },
];

export const products = [
  {
    id: 1,
    title: 'Повідок з нейлону 1.5м',
    description: 'Міцний нейлоновий повідок довжиною 1.5 м для прогулянок.',
    categoryId: 1,
    image: '/img/products/1.jpg',
    price: 250,
  },
  {
    id: 2,
    title: "Шлея з м'якою підкладкою",
    description:
      "Комфортна шлея з м'якою підкладкою для зручності вашого улюбленця.",
    categoryId: 1,
    image: '/img/products/2.jpg',
    price: 450,
  },
  {
    id: 3,
    title: 'Розсувний повідок 3м',
    description: 'Розсувний повідок довжиною 3 м для додаткового простору.',
    categoryId: 1,
    image: '/img/products/3.jpeg',
    price: 350,
  },
  {
    id: 4,
    title: 'Шкіряний повідок 2м',
    description:
      'Стильний шкіряний повідок довжиною 2 м для елегантних прогулянок.',
    categoryId: 1,
    image: '/img/products/4.jpg',
    price: 700,
  },
  {
    id: 5,
    title: 'Світловідбиваючий повідок',
    description:
      'Повідок з світловідбиваючими елементами для прогулянок у темний час.',
    categoryId: 1,
    image: '/img/products/5.jpg',
    price: 300,
  },
  {
    id: 6,
    title: 'Шлея для активних прогулянок',
    description: 'Легка та зручна шлея для активних прогулянок та тренувань.',
    categoryId: 1,
    image: '/img/products/6.jpg',
    price: 500,
  },
  {
    id: 7,
    title: 'Рулетка з нейлону 5м',
    description:
      'Міцна нейлонова рулетка довжиною 5 м для комфортних прогулянок.',
    categoryId: 2,
    image: '/img/products/7.webp',
    price: 450,
  },
  {
    id: 8,
    title: 'Рулетка для собак до 20кг',
    description:
      'Зручна рулетка для собак середніх порід, витримує вагу до 20 кг.',
    categoryId: 2,
    image: '/img/products/8.webp',
    price: 520,
  },
  {
    id: 9,
    title: 'Рулетка для малих порід 3м',
    description: 'Легка та компактна рулетка для маленьких собак довжиною 3 м.',
    categoryId: 2,
    image: '/img/products/9.png',
    price: 350,
  },
  {
    id: 10,
    title: 'Автоматична рулетка 7м',
    description: 'Надійна рулетка з автоматичним механізмом, довжиною 7 м.',
    categoryId: 2,
    image: '/img/products/10.jpg',
    price: 620,
  },
  {
    id: 11,
    title: 'Рулетка з підсвіткою',
    description:
      'Сучасна рулетка з підсвіткою для безпечних вечірніх прогулянок.',
    categoryId: 2,
    image: '/img/products/11.webp',
    price: 680,
  },
  {
    id: 12,
    title: 'Нашийник з еко-шкіри',
    description: 'Зручний та стильний нашийник з еко-шкіри для середніх собак.',
    categoryId: 3,
    image: '/img/products/12.jpg',
    price: 300,
  },
  {
    id: 13,
    title: 'Нашийник зі світловідбивачем з натуральної шкіри',
    description:
      'Нашийник з вбудованим світловідбивачем для безпеки у темний час.',
    categoryId: 3,
    image: '/img/products/13.jpg',
    price: 420,
  },
  {
    id: 14,
    title: 'Нашийник для малих порід',
    description:
      'Компактний нашийник для собак малих порід, виготовлений з якісного матеріалу.',
    categoryId: 3,
    image: '/img/products/14.png',
    price: 280,
  },
  {
    id: 15,
    title: 'Нашийник з металевою пряжкою',
    description: 'Міцний нашийник з металевою пряжкою для надійної фіксації.',
    categoryId: 3,
    image: '/img/products/15.webp',
    price: 350,
  },
  {
    id: 16,
    title: "Нашийник з м'якою підкладкою",
    description:
      "Комфортний нашийник з м'якою підкладкою, ідеальний для тривалих прогулянок.",
    categoryId: 3,
    image: '/img/products/16.jpg',
    price: 400,
  },
  {
    id: 17,
    title: 'Нашийник з ідентифікаційним жетоном',
    description:
      'Практичний нашийник з вбудованим жетоном для контактної інформації.',
    categoryId: 3,
    image: '/img/products/17.avif',
    price: 500,
  },
  {
    id: 18,
    title: 'Намордник для малих порід',
    description: 'Легкий та зручний намордник для собак малих порід.',
    categoryId: 4,
    image: '/img/products/18.webp',
    price: 250,
  },
  {
    id: 19,
    title: 'Металевий намордник',
    description: 'Міцний металевий намордник для середніх та великих собак.',
    categoryId: 4,
    image: '/img/products/19.jpg',
    price: 400,
  },
  {
    id: 20,
    title: 'Намордник з сіткою',
    description: 'Практичний намордник з дихаючою сіткою для комфорту собаки.',
    categoryId: 4,
    image: '/img/products/20.jpg',
    price: 320,
  },
  {
    id: 21,
    title: 'Намордник з нейлону',
    description: "М'який нейлоновий намордник для коротких прогулянок.",
    categoryId: 4,
    image: '/img/products/21.jpg',
    price: 200,
  },
  {
    id: 22,
    title: 'Регульований намордник',
    description:
      'Регульований намордник, що підходить для собак різних розмірів.',
    categoryId: 4,
    image: '/img/products/22.jpg',
    price: 300,
  },
  {
    id: 23,
    title: 'Намордник для собак із короткою мордою',
    description:
      'Спеціальний намордник для собак із короткою мордою, забезпечує комфорт і безпеку.',
    categoryId: 4,
    image: '/img/products/23.jpg',
    price: 450,
  },
  {
    id: 24,
    title: 'Сумка для ласощів на пояс',
    description:
      'Зручна сумка для ласощів з кріпленням на пояс, ідеальна для тренувань.',
    categoryId: 5,
    image: '/img/products/24.webp',
    price: 320,
  },
  {
    id: 25,
    title: 'Контейнер для корму 2л',
    description:
      "Компактний контейнер для зберігання сухого корму об'ємом 2 літри.",
    categoryId: 5,
    image: '/img/products/25.jpg',
    price: 450,
  },
  {
    id: 26,
    title: 'Сумка з кишенями для ласощів',
    description:
      'Практична сумка з декількома відділеннями для ласощів та аксесуарів.',
    categoryId: 5,
    image: '/img/products/26.webp',
    price: 370,
  },
  {
    id: 27,
    title: 'Складний контейнер для корму',
    description: 'Зручний складний контейнер для подорожей, економить місце.',
    categoryId: 5,
    image: '/img/products/27.webp',
    price: 290,
  },
  {
    id: 28,
    title: 'Контейнер для вологого корму',
    description:
      'Контейнер для зручного зберігання вологого корму, герметичний.',
    categoryId: 5,
    image: '/img/products/28.avif',
    price: 410,
  },
  {
    id: 29,
    title: 'Сумка-диспенсер для ласощів',
    description:
      'Сумка-диспенсер з легким доступом до ласощів, зручна у використанні.',
    categoryId: 5,
    image: '/img/products/29.webp',
    price: 340,
  },
  {
    id: 30,
    title: 'Велика сумка для ласощів',
    description:
      'Містка сумка для зберігання ласощів, підходить для довгих тренувань.',
    categoryId: 5,
    image: '/img/products/30.jpeg',
    price: 500,
  },
  {
    id: 31,
    title: 'Адресник з гравіюванням',
    description:
      'Металевий адресник з можливістю гравіювання контактної інформації.',
    categoryId: 6,
    image: '/img/products/31.webp',
    price: 200,
  },
  {
    id: 32,
    title: 'Брелок-адресник у формі кісточки',
    description: 'Симпатичний адресник у формі кісточки для собак.',
    categoryId: 6,
    image: '/img/products/32.webp',
    price: 250,
  },
  {
    id: 33,
    title: 'Світлодіодний брелок',
    description: 'Брелок з вбудованим світлодіодом для зручності у темний час.',
    categoryId: 6,
    image: '/img/products/33.webp',
    price: 300,
  },
  {
    id: 34,
    title: 'Адресник із QR-кодом',
    description:
      'Сучасний адресник з QR-кодом для сканування контактних даних.',
    categoryId: 6,
    image: '/img/products/34.jpg',
    price: 350,
  },
  {
    id: 35,
    title: 'Брелок із дзвіночком',
    description:
      'Практичний брелок із дзвіночком, що допомагає знайти улюбленця.',
    categoryId: 6,
    image: '/img/products/35.webp',
    price: 180,
  },
  {
    id: 36,
    title: "Дерев'яний адресник ручної роботи",
    description: "Унікальний дерев'яний адресник, виготовлений вручну.",
    categoryId: 6,
    image: '/img/products/36.jpg',
    price: 400,
  },
  {
    id: 37,
    title: 'Адресник з нержавіючої сталі',
    description:
      'Міцний адресник з нержавіючої сталі для довговічного використання.',
    categoryId: 6,
    image: '/img/products/37.webp',
    price: 300,
  },
  {
    id: 38,
    title: 'Брелок у вигляді лапки',
    description:
      'Креативний брелок у формі лапки, доступний у різних кольорах.',
    categoryId: 6,
    image: '/img/products/38.jpg',
    price: 220,
  },
  {
    id: 39,
    title: 'Брелок із дзеркальною поверхнею',
    description:
      'Стильний брелок із дзеркальною поверхнею, що відображає світло.',
    categoryId: 6,
    image: '/img/products/39.jpg',
    price: 280,
  },
  {
    id: 40,
    title: 'Брелок для подвійного ідентифікатора',
    description: 'Брелок з двома окремими секціями для різної інформації.',
    categoryId: 6,
    image: '/img/products/40.jpg',
    price: 350,
  },
  {
    id: 41,
    title: 'Адресник у формі серця',
    description: 'Адресник у вигляді серця, ідеальний для милих улюбленців.',
    categoryId: 6,
    image: '/img/products/41.webp',
    price: 250,
  },
  {
    id: 42,
    title: 'Брелок із персоналізацією',
    description: 'Брелок, що дозволяє персоналізувати інформацію на ньому.',
    categoryId: 6,
    image: '/img/products/42.jpg',
    price: 320,
  },
];
