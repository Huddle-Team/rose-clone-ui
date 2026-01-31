export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  quantity: number;
  color: string;
  type: string;
  shape: string;
  occasion: string[];
  composition: string;
  description: string;
  badges: string[];
  deliveryTime: string;
  purchases24h: number;
  stemLength: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Букет из 25 красных роз Эквадор",
    slug: "buket-25-krasnyh-roz-ekvador",
    price: 4990,
    oldPrice: 5990,
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 156,
    quantity: 25,
    color: "Красный",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["День рождения", "Юбилей", "Романтика"],
    composition: "25 красных роз сорта Freedom 50см, упаковка в фетр, атласная лента",
    description: "Роскошный букет из 25 эквадорских роз премиум класса. Крупные бутоны насыщенного красного цвета станут идеальным подарком для особого случая.",
    badges: ["Хит", "Крупный бутон"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 44,
    stemLength: 50,
    inStock: true
  },
  {
    id: "2",
    name: "Букет из 51 розовой розы",
    slug: "buket-51-rozovaya-roza",
    price: 8990,
    oldPrice: 10990,
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
    ],
    rating: 5.0,
    reviewCount: 89,
    quantity: 51,
    color: "Розовый",
    type: "Эквадор",
    shape: "Круглый",
    occasion: ["Свадьба", "День рождения", "8 марта"],
    composition: "51 розовая роза сорта Pink O'Hara 60см, крафт-бумага, атласная лента",
    description: "Нежный букет из 51 розовой розы в стильной упаковке. Идеален для признания в любви или поздравления с важным событием.",
    badges: ["Новинка"],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 28,
    stemLength: 60,
    inStock: true
  },
  {
    id: "3",
    name: "101 красная роза в корзине",
    slug: "101-krasnaya-roza-korzina",
    price: 15990,
    images: [
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 234,
    quantity: 101,
    color: "Красный",
    type: "Эквадор",
    shape: "Корзина",
    occasion: ["Предложение", "Юбилей", "Романтика"],
    composition: "101 красная роза сорта Explorer 70см, плетёная корзина, оазис, декор",
    description: "Грандиозный букет из 101 красной розы в элегантной корзине. Незабываемый подарок для самых важных моментов жизни.",
    badges: ["Хит", "Премиум"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 12,
    stemLength: 70,
    inStock: true
  },
  {
    id: "4",
    name: "Букет из 9 белых роз",
    slug: "buket-9-belyh-roz",
    price: 1990,
    images: [
      "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?w=600&h=600&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 67,
    quantity: 9,
    color: "Белый",
    type: "Кения",
    shape: "Классический",
    occasion: ["Извинение", "Благодарность", "Просто так"],
    composition: "9 белых роз сорта Avalanche 40см, крафт-бумага, атласная лента",
    description: "Элегантный букет из 9 белых роз. Символ чистоты и искренности, идеален для любого повода.",
    badges: [],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 56,
    stemLength: 40,
    inStock: true
  },
  {
    id: "5",
    name: "Букет из 15 кремовых роз",
    slug: "buket-15-kremovyh-roz",
    price: 2990,
    oldPrice: 3490,
    images: [
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 45,
    quantity: 15,
    color: "Кремовый",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["День рождения", "Свадьба", "8 марта"],
    composition: "15 кремовых роз сорта Talea 50см, упаковка в органзу, атласная лента",
    description: "Нежный букет из 15 кремовых роз с тонким ароматом. Универсальный подарок для любого торжества.",
    badges: ["Крупный бутон"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 33,
    stemLength: 50,
    inStock: true
  },
  {
    id: "6",
    name: "Пионовидные розы Дэвида Остина",
    slug: "pionovidnye-rozy-devida-ostina",
    price: 6990,
    images: [
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop"
    ],
    rating: 5.0,
    reviewCount: 178,
    quantity: 15,
    color: "Розовый",
    type: "Франция",
    shape: "Пионовидный",
    occasion: ["Свадьба", "День рождения", "Романтика"],
    composition: "15 пионовидных роз David Austin 50см, шляпная коробка, атласная лента",
    description: "Эксклюзивный букет из пионовидных роз Дэвида Остина с невероятным ароматом. Мечта каждой женщины.",
    badges: ["Хит", "Новинка", "Премиум"],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 67,
    stemLength: 50,
    inStock: true
  },
  {
    id: "7",
    name: "Букет из 21 жёлтой розы",
    slug: "buket-21-zheltoy-rozy",
    price: 3490,
    images: [
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 34,
    quantity: 21,
    color: "Жёлтый",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["Дружба", "Благодарность", "Выздоровление"],
    composition: "21 жёлтая роза сорта High Yellow 50см, крафт-бумага, атласная лента",
    description: "Солнечный букет из 21 жёлтой розы. Символ дружбы и радости, поднимет настроение в любой день.",
    badges: [],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 19,
    stemLength: 50,
    inStock: true
  },
  {
    id: "8",
    name: "Сердце из 51 красной розы",
    slug: "serdce-51-krasnaya-roza",
    price: 11990,
    oldPrice: 13990,
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 123,
    quantity: 51,
    color: "Красный",
    type: "Эквадор",
    shape: "Сердце",
    occasion: ["14 февраля", "Предложение", "Романтика"],
    composition: "51 красная роза сорта Freedom 60см, коробка-сердце, оазис, атласная лента",
    description: "Романтичное сердце из 51 красной розы в элегантной коробке. Идеальный способ признаться в любви.",
    badges: ["Хит", "Крупный бутон"],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 38,
    stemLength: 60,
    inStock: true
  },
  {
    id: "9",
    name: "Букет из 7 алых роз",
    slug: "buket-7-alyh-roz",
    price: 1490,
    images: [
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 89,
    quantity: 7,
    color: "Красный",
    type: "Кения",
    shape: "Классический",
    occasion: ["Просто так", "Свидание", "Романтика"],
    composition: "7 алых роз сорта Red Naomi 40см, фетровая упаковка, атласная лента",
    description: "Компактный букет из 7 алых роз. Отличный вариант для первого свидания или небольшого знака внимания.",
    badges: [],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 78,
    stemLength: 40,
    inStock: true
  },
  {
    id: "10",
    name: "Микс из 35 разноцветных роз",
    slug: "miks-35-raznocvetnyh-roz",
    price: 5490,
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 67,
    quantity: 35,
    color: "Микс",
    type: "Эквадор",
    shape: "Круглый",
    occasion: ["День рождения", "8 марта", "Юбилей"],
    composition: "35 роз разных оттенков 50см, крафт-бумага, атласная лента",
    description: "Яркий микс из 35 разноцветных роз. Настоящий праздник красок и ароматов в одном букете.",
    badges: ["Новинка"],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 25,
    stemLength: 50,
    inStock: true
  },
  {
    id: "11",
    name: "Букет из 25 персиковых роз",
    slug: "buket-25-persikovyh-roz",
    price: 4290,
    images: [
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&h=600&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 52,
    quantity: 25,
    color: "Персиковый",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["День рождения", "Благодарность", "8 марта"],
    composition: "25 персиковых роз сорта Tiffany 50см, органза, атласная лента",
    description: "Нежный букет из 25 персиковых роз с тонким ароматом. Символ признательности и теплых чувств.",
    badges: ["Крупный бутон"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 31,
    stemLength: 50,
    inStock: true
  },
  {
    id: "12",
    name: "Букет из 75 красных роз",
    slug: "buket-75-krasnyh-roz",
    price: 12990,
    oldPrice: 14990,
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 98,
    quantity: 75,
    color: "Красный",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["Юбилей", "Предложение", "Романтика"],
    composition: "75 красных роз сорта Freedom 60см, премиум упаковка, атласная лента",
    description: "Впечатляющий букет из 75 красных роз. Грандиозный подарок для незабываемых моментов.",
    badges: ["Хит", "Премиум"],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 15,
    stemLength: 60,
    inStock: true
  },
  {
    id: "13",
    name: "Розы в шляпной коробке",
    slug: "rozy-v-shlyapnoy-korobke",
    price: 3990,
    images: [
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 145,
    quantity: 19,
    color: "Розовый",
    type: "Эквадор",
    shape: "Коробка",
    occasion: ["День рождения", "8 марта", "Романтика"],
    composition: "19 розовых роз 45см, шляпная коробка, оазис, атласная лента",
    description: "Стильная композиция из 19 розовых роз в элегантной шляпной коробке. Современный и модный подарок.",
    badges: ["Хит"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 52,
    stemLength: 45,
    inStock: true
  },
  {
    id: "14",
    name: "Букет из 11 бордовых роз",
    slug: "buket-11-bordovyh-roz",
    price: 2290,
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 38,
    quantity: 11,
    color: "Бордовый",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["Романтика", "Юбилей", "Благодарность"],
    composition: "11 бордовых роз сорта Black Magic 50см, крафт-бумага, атласная лента",
    description: "Элегантный букет из 11 бордовых роз с глубоким насыщенным цветом. Символ страсти и восхищения.",
    badges: [],
    deliveryTime: "Доставка за 2 часа",
    purchases24h: 22,
    stemLength: 50,
    inStock: true
  },
  {
    id: "15",
    name: "Гигантский букет из 151 розы",
    slug: "gigantskiy-buket-151-roza",
    price: 22990,
    images: [
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
    ],
    rating: 5.0,
    reviewCount: 56,
    quantity: 151,
    color: "Красный",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["Предложение", "Юбилей", "Романтика"],
    composition: "151 красная роза сорта Explorer 70см, премиум упаковка, атласный бант",
    description: "Грандиозный букет из 151 красной розы. Незабываемое впечатление для самых важных событий в жизни.",
    badges: ["Премиум", "VIP"],
    deliveryTime: "Индивидуальная доставка",
    purchases24h: 5,
    stemLength: 70,
    inStock: true
  },
  {
    id: "16",
    name: "Букет из 31 лавандовой розы",
    slug: "buket-31-lavandovoy-rozy",
    price: 5990,
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 73,
    quantity: 31,
    color: "Лавандовый",
    type: "Эквадор",
    shape: "Классический",
    occasion: ["День рождения", "8 марта", "Романтика"],
    composition: "31 лавандовая роза сорта Ocean Song 55см, фетр, атласная лента",
    description: "Необычный букет из 31 лавандовой розы редкого оттенка. Для тех, кто ценит изысканность и оригинальность.",
    badges: ["Новинка", "Редкий цвет"],
    deliveryTime: "Бесплатная доставка сегодня",
    purchases24h: 18,
    stemLength: 55,
    inStock: true
  }
];

export const filterOptions = {
  quantities: [7, 9, 11, 15, 21, 25, 31, 35, 51, 75, 101, 151],
  colors: ["Красный", "Розовый", "Белый", "Кремовый", "Жёлтый", "Персиковый", "Бордовый", "Лавандовый", "Микс"],
  types: ["Эквадор", "Кения", "Франция"],
  shapes: ["Классический", "Круглый", "Пионовидный", "Коробка", "Корзина", "Сердце"],
  occasions: ["День рождения", "Свадьба", "Юбилей", "8 марта", "14 февраля", "Предложение", "Романтика", "Благодарность", "Просто так"],
  priceRange: { min: 1490, max: 22990 }
};

export const quickFilters = [
  { label: "101 роза", type: "quantity", value: 101 },
  { label: "Красные", type: "color", value: "Красный" },
  { label: "Пионовидные", type: "shape", value: "Пионовидный" },
  { label: "В коробке", type: "shape", value: "Коробка" },
  { label: "Эквадор", type: "type", value: "Эквадор" },
  { label: "Премиум", type: "badge", value: "Премиум" },
];
