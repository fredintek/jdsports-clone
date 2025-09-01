export type DataContentType = {
  title: string;
  links: string[];
};

export type DataType = {
  type: "featured" | "normal";
  image?: string;
  content?: DataContentType;
};

export const menData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Shoes",
      links: [
        "New In",
        "Sneakers",
        "Slides & Sandals",
        "Boots",
        "Running",
        "All Shoes",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Clothing",
      links: [
        "New In",
        "T-shirts",
        "Shorts",
        "Swimwear",
        "Football Jerseys",
        "Track Pants & Τracksuits",
        "Jeans & Cargo Pants",
        "Hoodies & Sweatshirts",
        "Track Tops",
        "Jackets",
        "All Clothing",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Top Brands",
      links: [
        "Nike",
        "Hoodrich",
        "adidas",
        "Jordan",
        "McKenzie",
        "The North Face",
        "New Balance",
        "All brands",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Edits",
      links: ["2 T-shirts for 40€", "2 McKenzie T-shirts for 25€"],
    },
  },
  {
    type: "featured",
    image: "/images/men-featured.jpg",
  },
];

export const savingsData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Sale",
      links: [],
    },
  },
  {
    type: "normal",
    content: {
      title: "Outlet",
      links: [],
    },
  },
  {
    type: "normal",
    content: {
      title: "Smart Buys",
      links: [],
    },
  },
  {
    type: "normal",
    content: {
      title: "All Savings",
      links: [],
    },
  },
  {
    type: "featured",
    image: "/images/savings-img.jpg",
  },
];

export const womenData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Shoes",
      links: [
        "New In",
        "Sneakers",
        "Slides & Sandals",
        "Boots",
        "Running",
        "All Shoes",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Clothing",
      links: [
        "New In",
        "T-shirts & Tank Tops",
        "Shorts",
        "Swimwear",
        "Leggings",
        "Sports Bras",
        "Track Pants",
        "Jeans & Cargo Pants",
        "Sweatshirts & Hoodies",
        "Track Tops",
        "Jackets",
        "All Clothing",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Top Brands",
      links: [
        "Nike",
        "adidas",
        "New Balance",
        "Crocs",
        "Jordan",
        "Hoodrich",
        "UGG",
        "The North Face",
        "Pink Soda Sport",
        "Converse",
        "All brands",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Shop All Women's",
      links: [],
    },
  },
  {
    type: "featured",
    image: "/images/women-featured.jpg",
  },
];

export const kidsData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Shoes",
      links: [
        "Infants | No. 19-27",
        "Kids | No. 28-35",
        "Teens | No. 36-40",
        "New In",
        "Sneakers",
        "Slides & Sandals",
        "Boots",
        "Sport Shoes",
        "All Shoes",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Clothing",
      links: [
        "New In",
        "T-shirts",
        "Shorts",
        "Swimwear",
        "Trackpants & Tracksuits",
        "Leggings",
        "Sweatshirts",
        "Jackets",
        "All Clothing",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Top Brands",
      links: [
        "Nike",
        "adidas",
        "Jordan",
        "Hoodrich",
        "The North Face",
        "Converse",
        "Under Armour",
        "All Brands",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Shop All Kid's",
      links: [],
    },
  },
  {
    type: "featured",
    image: "/images/kids-featured.jpg",
  },
];

export const accessoriesData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Men",
      links: [
        "Bags & Backpacks",
        "Caps & Beanies",
        "Socks",
        "Shoe Care",
        "All Men's Accessories",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Women",
      links: [
        "Bags & Backpacks",
        "Caps & Beanies",
        "Socks",
        "All Women's Accessories",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Top Brands",
      links: [
        "New Era",
        "Nike",
        "adidas",
        "Hoodrich",
        "Jordan",
        "Crep Protect",
        "All Brands",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "All Accessories",
      links: [],
    },
  },
  {
    type: "featured",
    image: "/images/accessories-featured.jpg",
  },
];

export const collectionsData: DataType[] = [
  {
    type: "normal",
    content: {
      title: "Nike",
      links: [
        "Nike Shox TL",
        "Nike Dunk",
        "Nike P-6000",
        "Nike Victori One",
        "Nike Tech Fleece",
        "Nike Vomero 5",
        "Nike Cortez",
        "Nike Vapormax",
        "Nike Pro",
        "Nike Kawa",
        "Nike Blazer",
        "Nike React Vision",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Nike Air",
      links: [
        "Nike Air Force 1",
        "Nike Air Max",
        "Nike Air Max 95",
        "Nike Air Max Dn8",
        "Nike Air Max Dn",
        "Nike Air Max TL 2.5",
        "Nike Air Max 90",
        "Nike Air Max 270",
        "Nike Air Max Pulse",
        "Nike Air Max 1",
        "Nike Air More Uptempo",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Adidas",
      links: [
        "adidas EVO SL",
        "adidas Samba",
        "adidas Campus 00s",
        "adidas Spezial",
        "adidas Gazelle",
        "adidas SL 72",
        "adidas Adilette",
        "adidas Ozweego",
        "adidas ZX",
        "adidas Superstar",
        "adidas Adicolor",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "New Balance",
      links: [
        "New Balance 530",
        "New Balance 9060",
        "New Balance 740",
        "New Balance 1000",
        "New Balance 327",
        "New Balance 550",
        "New Balance 1906R",
      ],
    },
  },
  {
    type: "featured",
    image: "/images/collections-featured.jpg",
  },
  {
    type: "normal",
    content: {
      title: "Jordan",
      links: ["Air Jordan 1", "Jordan Diamond"],
    },
  },
  {
    type: "normal",
    content: {
      title: "Crocs",
      links: [
        "Crocs Classic Clog",
        "Crocs Mega Crush",
        "Crocs Bae Clog",
        "Crocs Bubble Crush Clog",
      ],
    },
  },
  {
    type: "normal",
    content: {
      title: "Birkenstock",
      links: ["Birkenstock Arizona", "Birkenstock Boston"],
    },
  },
  {
    type: "normal",
    content: {
      title: "Puma",
      links: ["PUMA Mostro", "PUMA Palermo"],
    },
  },
  {
    type: "normal",
    content: {
      title: "Converse",
      links: [
        "Converse All Star",
        "Converse Chuck Taylor",
        "Converse All Star Δίπατα",
        "Converse All Star High Tops",
      ],
    },
  },
];

export const onlyAtJdData = [
  {
    img: "/images/only-1.jpg",
    title: "Men's",
  },
  {
    img: "/images/only-2.jpg",
    title: "Women's",
  },
  {
    img: "/images/only-3.jpg",
    title: "Kid's",
  },
];

export const newInData = [
  {
    img: "/images/men-featured.jpg",
    title: "Men",
  },
  {
    img: "/images/women-featured.jpg",
    title: "Women",
  },
  {
    img: "/images/kids-featured.jpg",
    title: "Kids",
  },
  {
    img: "/images/newin-featured.jpg",
    title: "Accessories",
  },
];

export const brandsData = [
  {
    img: "/images/adidas-logo.jpg",
    title: "Adidas",
  },
  {
    img: "/images/columbia-logo.jpg",
    title: "Columbia",
  },
  {
    img: "/images/daily-szn-logo.jpg",
    title: "Daily SZN",
  },
  {
    img: "/images/hoka-logo.jpg",
    title: "Hoka",
  },
  {
    img: "/images/lacoste-logo.jpg",
    title: "Lacoste",
  },
  {
    img: "/images/nb-logo.jpg",
    title: "New Balance",
  },
  {
    img: "/images/on-logo.jpg",
    title: "On",
  },
  {
    img: "/images/reebook-logo.jpg",
    title: "Reebook",
  },
  {
    img: "/images/timberland-logo.jpg",
    title: "Timberland",
  },
  {
    img: "/images/under-armour-logo.jpg",
    title: "Under Armour",
  },
  {
    img: "/images/asics-logo.jpg",
    title: "ASICS",
  },
  {
    img: "/images/converse-logo.jpg",
    title: "Converse",
  },
  {
    img: "/images/ea7-logo.jpg",
    title: "EA7 Emporio Armani",
  },
  {
    img: "/images/hoodrich-logo.jpg",
    title: "Hoodrich",
  },
  {
    img: "/images/levi-logo.jpg",
    title: "Levi's",
  },
  {
    img: "/images/new-era-logo.jpg",
    title: "New Era",
  },
  {
    img: "/images/pink-soda-sport-logo.jpg",
    title: "Pink Soda Sport",
  },
  {
    img: "/images/salomon-logo.jpg",
    title: "Salomon",
  },
  {
    img: "/images/nf-logo.jpg",
    title: "The North Face",
  },
  {
    img: "/images/unlike-humans-logo.jpg",
    title: "Unlike Humans",
  },
  {
    img: "/images/birkenstock-logo.jpg",
    title: "Birkenstock",
  },
  {
    img: "/images/crocs-logo.jpg",
    title: "Crocs",
  },
  {
    img: "/images/fila-logo.jpg",
    title: "FILA",
  },
  {
    img: "/images/jordan-logo.jpg",
    title: "Jordan",
  },
  {
    img: "/images/mckenzie-logo.jpg",
    title: "McKenzie",
  },
  {
    img: "/images/nike-logo.jpg",
    title: "Nike",
  },
  {
    img: "/images/puma-logo.jpg",
    title: "PUMA",
  },
  {
    img: "/images/supply-demand-logo.jpg",
    title: "Supply & Demand",
  },
  {
    img: "/images/ugg-logo.jpg",
    title: "UGG",
  },
  {
    img: "/images/vans-logo.jpg",
    title: "Vans",
  },
];
