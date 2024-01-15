let products = [
  {
    productId: 1,
    name: "Watch 1",
    brand: "Swatch",
    price: 200,
    rating: 2,
    category: "Men",
    discount: 0.2,
    stock: 1,
    description: "This is A Description of Watch 1",
    sellerID: 2,
    addedDate: "2023-08-20T10:10:14.532Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 2,
    name: "Watch 2",
    brand: "Casio",
    price: 1100,
    rating: 2,
    category: "Women",
    discount: 0.1,
    stock: 30,
    description: "This is A Description of Watch 2",
    sellerID: 2,
    addedDate: "2023-05-06T00:23:37.212Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 3,
    name: "Watch 3",
    brand: "Tissot",
    price: 1700,
    rating: 3,
    category: "Women",
    discount: 0.2,
    stock: 3,
    description: "This is A Description of Watch 3",
    sellerID: 1,
    addedDate: "2023-11-23T10:06:07.965Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 40,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 22,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 4,
    name: "Watch 4",
    brand: "Tommy Hilfiger",
    price: 500,
    rating: 3,
    category: "Men",
    discount: 0.2,
    stock: 10,
    description: "This is A Description of Watch 4",
    sellerID: 2,
    addedDate: "2023-01-13T19:28:54.656Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 5,
    name: "Watch 5",
    brand: "Tommy Hilfiger",
    price: 600,
    rating: 4,
    category: "Women",
    discount: 0,
    stock: 1,
    description: "This is A Description of Watch 5",
    sellerID: 1,
    addedDate: "2023-09-27T17:14:42.210Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Gold",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 6,
    name: "Watch 6",
    brand: "Swatch",
    price: 1700,
    rating: 5,
    category: "Men",
    discount: 0,
    stock: 1,
    description: "This is A Description of Watch 6",
    sellerID: 1,
    addedDate: "2023-09-15T14:47:18.868Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 7,
    name: "Watch 7",
    brand: "Lacoste",
    price: 450,
    rating: 3,
    category: "Women",
    discount: 0.2,
    stock: 10,
    description: "This is A Description of Watch 7",
    sellerID: 2,
    addedDate: "2023-10-27T15:54:28.678Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Gold",
      caseDiameter: 38,
      glass: "Acrylic",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 22,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 8,
    name: "Watch 8",
    brand: "Swatch",
    price: 1000,
    rating: 5,
    category: "Women",
    discount: 0.1,
    stock: 6,
    description: "This is A Description of Watch 8",
    sellerID: 2,
    addedDate: "2023-01-05T19:02:39.237Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 9,
    name: "Watch 9",
    brand: "Tommy Hilfiger",
    price: 750,
    rating: 1,
    category: "Women",
    discount: 0.1,
    stock: 3,
    description: "This is A Description of Watch 9",
    sellerID: 2,
    addedDate: "2023-08-20T23:42:46.132Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 10,
    name: "Watch 10",
    brand: "Swatch",
    price: 750,
    rating: 5,
    category: "Women",
    discount: 0,
    stock: 17,
    description: "This is A Description of Watch 10",
    sellerID: 2,
    addedDate: "2023-05-27T11:10:06.857Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 11,
    name: "Watch 11",
    brand: "Swatch",
    price: 250,
    rating: 4,
    category: "Women",
    discount: 0,
    stock: 30,
    description: "This is A Description of Watch 11",
    sellerID: 2,
    addedDate: "2023-02-25T17:21:53.703Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Gold",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 12,
    name: "Watch 12",
    brand: "Tommy Hilfiger",
    price: 1250,
    rating: 1,
    category: "Men",
    discount: 0.2,
    stock: 20,
    description: "This is A Description of Watch 12",
    sellerID: 2,
    addedDate: "2023-01-29T09:18:25.138Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 40,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 13,
    name: "Watch 13",
    brand: "Lacoste",
    price: 1250,
    rating: 2,
    category: "Men",
    discount: 0.2,
    stock: 5,
    description: "This is A Description of Watch 13",
    sellerID: 1,
    addedDate: "2023-03-16T19:56:17.552Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 42,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Leather",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 14,
    name: "Watch 14",
    brand: "Tommy Hilfiger",
    price: 450,
    rating: 2,
    category: "Men",
    discount: 0,
    stock: 3,
    description: "This is A Description of Watch 14",
    sellerID: 2,
    addedDate: "2023-08-11T22:46:18.051Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "100m",
      strapMaterial: "Leather",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 15,
    name: "Watch 15",
    brand: "Tissot",
    price: 1250,
    rating: 2,
    category: "Women",
    discount: 0.1,
    stock: 17,
    description: "This is A Description of Watch 15",
    sellerID: 2,
    addedDate: "2023-06-04T01:23:51.130Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Sapphire",
      waterResistance: "50m",
      strapMaterial: "Leather",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 16,
    name: "Watch 16",
    brand: "Tissot",
    price: 1250,
    rating: 3,
    category: "Women",
    discount: 0.2,
    stock: 5,
    description: "This is A Description of Watch 16",
    sellerID: 1,
    addedDate: "2023-03-23T03:20:42.952Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 17,
    name: "Watch 17",
    brand: "Tommy Hilfiger",
    price: 750,
    rating: 3,
    category: "Women",
    discount: 0,
    stock: 20,
    description: "This is A Description of Watch 17",
    sellerID: 2,
    addedDate: "2023-01-19T23:15:31.121Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Gold",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 18,
    name: "Watch 18",
    brand: "Tissot",
    price: 1100,
    rating: 5,
    category: "Women",
    discount: 0,
    stock: 0,
    description: "This is A Description of Watch 18",
    sellerID: 1,
    addedDate: "2023-03-17T09:16:50.551Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 19,
    name: "Watch 19",
    brand: "Lacoste",
    price: 1100,
    rating: 3,
    category: "Men",
    discount: 0.2,
    stock: 5,
    description: "This is A Description of Watch 19",
    sellerID: 1,
    addedDate: "2023-08-17T01:45:07.994Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Stainless Steel",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 22,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 20,
    name: "Watch 20",
    brand: "Lacoste",
    price: 600,
    rating: 3,
    category: "Women",
    discount: 0.1,
    stock: 0,
    description: "This is A Description of Watch 20",
    sellerID: 2,
    addedDate: "2023-09-29T03:21:28.098Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 21,
    name: "Watch 21",
    brand: "Lacoste",
    price: 500,
    rating: 5,
    category: "Men",
    discount: 0,
    stock: 10,
    description: "This is A Description of Watch 21",
    sellerID: 2,
    addedDate: "2023-08-14T11:27:54.239Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 42,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 22,
    name: "Watch 22",
    brand: "Tissot",
    price: 1000,
    rating: 5,
    category: "Men",
    discount: 0.2,
    stock: 20,
    description: "This is A Description of Watch 22",
    sellerID: 1,
    addedDate: "2024-01-07T23:32:52.131Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Leather",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 23,
    name: "Watch 23",
    brand: "Casio",
    price: 450,
    rating: 4,
    category: "Men",
    discount: 0,
    stock: 1,
    description: "This is A Description of Watch 23",
    sellerID: 2,
    addedDate: "2023-03-10T17:16:37.306Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 24,
    name: "Watch 24",
    brand: "Tommy Hilfiger",
    price: 750,
    rating: 4,
    category: "Women",
    discount: 0.2,
    stock: 6,
    description: "This is A Description of Watch 24",
    sellerID: 1,
    addedDate: "2024-01-03T07:48:53.530Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Gold",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "50m",
      strapMaterial: "Rubber",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 25,
    name: "Watch 25",
    brand: "Tommy Hilfiger",
    price: 5000,
    rating: 2,
    category: "Women",
    discount: 0,
    stock: 20,
    description: "This is A Description of Watch 25",
    sellerID: 1,
    addedDate: "2023-04-21T01:28:11.251Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "30m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 26,
    name: "Watch 26",
    brand: "Tissot",
    price: 5000,
    rating: 1,
    category: "Women",
    discount: 0.1,
    stock: 30,
    description: "This is A Description of Watch 26",
    sellerID: 2,
    addedDate: "2023-06-23T05:22:52.098Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 27,
    name: "Watch 27",
    brand: "Tissot",
    price: 1700,
    rating: 1,
    category: "Men",
    discount: 0.1,
    stock: 0,
    description: "This is A Description of Watch 27",
    sellerID: 1,
    addedDate: "2023-07-16T19:23:01.072Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 28,
    name: "Watch 28",
    brand: "Casio",
    price: 200,
    rating: 3,
    category: "Women",
    discount: 0.1,
    stock: 2,
    description: "This is A Description of Watch 28",
    sellerID: 1,
    addedDate: "2023-08-07T10:24:28.907Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Leather",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 29,
    name: "Watch 29",
    brand: "Tissot",
    price: 250,
    rating: 2,
    category: "Men",
    discount: 0.1,
    stock: 3,
    description: "This is A Description of Watch 29",
    sellerID: 2,
    addedDate: "2023-04-29T19:31:08.996Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Leather",
      strapWidth: 20,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 30,
    name: "Watch 30",
    brand: "Tissot",
    price: 1100,
    rating: 4,
    category: "Men",
    discount: 0.1,
    stock: 1,
    description: "This is A Description of Watch 30",
    sellerID: 1,
    addedDate: "2023-09-02T15:18:50.788Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 31,
    name: "Watch 31",
    brand: "Casio",
    price: 450,
    rating: 5,
    category: "Men",
    discount: 0.2,
    stock: 2,
    description: "This is A Description of Watch 31",
    sellerID: 2,
    addedDate: "2023-09-20T01:55:57.791Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Gold",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 32,
    name: "Watch 32",
    brand: "Tommy Hilfiger",
    price: 900,
    rating: 2,
    category: "Women",
    discount: 0.2,
    stock: 10,
    description: "This is A Description of Watch 32",
    sellerID: 2,
    addedDate: "2023-05-17T18:22:25.382Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 33,
    name: "Watch 33",
    brand: "Tommy Hilfiger",
    price: 450,
    rating: 1,
    category: "Men",
    discount: 0.1,
    stock: 17,
    description: "This is A Description of Watch 33",
    sellerID: 1,
    addedDate: "2023-12-24T20:11:55.182Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 34,
    name: "Watch 34",
    brand: "Tissot",
    price: 5000,
    rating: 3,
    category: "Women",
    discount: 0.1,
    stock: 6,
    description: "This is A Description of Watch 34",
    sellerID: 1,
    addedDate: "2023-08-21T10:18:04.430Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Gold",
      caseDiameter: 40,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 35,
    name: "Watch 35",
    brand: "Casio",
    price: 900,
    rating: 2,
    category: "Women",
    discount: 0.2,
    stock: 0,
    description: "This is A Description of Watch 35",
    sellerID: 2,
    addedDate: "2023-12-27T07:58:55.590Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 40,
      glass: "Mineral",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 36,
    name: "Watch 36",
    brand: "Tommy Hilfiger",
    price: 500,
    rating: 4,
    category: "Men",
    discount: 0,
    stock: 2,
    description: "This is A Description of Watch 36",
    sellerID: 2,
    addedDate: "2023-03-27T16:18:30.015Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 37,
    name: "Watch 37",
    brand: "Swatch",
    price: 5000,
    rating: 4,
    category: "Men",
    discount: 0,
    stock: 30,
    description: "This is A Description of Watch 37",
    sellerID: 1,
    addedDate: "2023-02-10T06:20:06.654Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Acrylic",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 38,
    name: "Watch 38",
    brand: "Casio",
    price: 450,
    rating: 1,
    category: "Women",
    discount: 0.1,
    stock: 30,
    description: "This is A Description of Watch 38",
    sellerID: 1,
    addedDate: "2023-09-28T08:36:44.977Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 39,
    name: "Watch 39",
    brand: "Lacoste",
    price: 2000,
    rating: 5,
    category: "Men",
    discount: 0,
    stock: 6,
    description: "This is A Description of Watch 39",
    sellerID: 2,
    addedDate: "2023-04-09T05:28:04.804Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "50m",
      strapMaterial: "Leather",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 40,
    name: "Watch 40",
    brand: "Casio",
    price: 1700,
    rating: 2,
    category: "Men",
    discount: 0.1,
    stock: 1,
    description: "This is A Description of Watch 40",
    sellerID: 1,
    addedDate: "2023-12-26T01:26:32.314Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 42,
      glass: "Acrylic",
      waterResistance: "100m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 41,
    name: "Watch 41",
    brand: "Casio",
    price: 250,
    rating: 5,
    category: "Women",
    discount: 0.2,
    stock: 5,
    description: "This is A Description of Watch 41",
    sellerID: 2,
    addedDate: "2023-04-08T13:33:45.343Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Brown"
    },
    images: []
  },
  {
    productId: 42,
    name: "Watch 42",
    brand: "Tommy Hilfiger",
    price: 1250,
    rating: 2,
    category: "Men",
    discount: 0.1,
    stock: 10,
    description: "This is A Description of Watch 42",
    sellerID: 1,
    addedDate: "2023-09-02T21:40:19.957Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 20,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 43,
    name: "Watch 43",
    brand: "Swatch",
    price: 250,
    rating: 3,
    category: "Women",
    discount: 0,
    stock: 10,
    description: "This is A Description of Watch 43",
    sellerID: 1,
    addedDate: "2023-03-01T16:55:21.457Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 44,
    name: "Watch 44",
    brand: "Swatch",
    price: 500,
    rating: 4,
    category: "Women",
    discount: 0,
    stock: 30,
    description: "This is A Description of Watch 44",
    sellerID: 1,
    addedDate: "2023-02-10T20:29:36.160Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Acrylic",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Black"
    },
    images: []
  },
  {
    productId: 45,
    name: "Watch 45",
    brand: "Tommy Hilfiger",
    price: 450,
    rating: 3,
    category: "Women",
    discount: 0,
    stock: 0,
    description: "This is A Description of Watch 45",
    sellerID: 1,
    addedDate: "2023-12-15T16:26:32.202Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Titanium",
      caseDiameter: 40,
      glass: "Mineral",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 46,
    name: "Watch 46",
    brand: "Lacoste",
    price: 250,
    rating: 3,
    category: "Men",
    discount: 0,
    stock: 1,
    description: "This is A Description of Watch 46",
    sellerID: 2,
    addedDate: "2023-10-10T17:43:09.050Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Stainless Steel",
      caseDiameter: 40,
      glass: "Sapphire",
      waterResistance: "30m",
      strapMaterial: "Leather",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 47,
    name: "Watch 47",
    brand: "Tommy Hilfiger",
    price: 5000,
    rating: 3,
    category: "Women",
    discount: 0.1,
    stock: 5,
    description: "This is A Description of Watch 47",
    sellerID: 2,
    addedDate: "2023-03-09T12:15:52.749Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Stainless Steel",
      caseDiameter: 42,
      glass: "Sapphire",
      waterResistance: "100m",
      strapMaterial: "Rubber",
      strapWidth: 22,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 48,
    name: "Watch 48",
    brand: "Swatch",
    price: 1000,
    rating: 5,
    category: "Men",
    discount: 0.1,
    stock: 10,
    description: "This is A Description of Watch 48",
    sellerID: 1,
    addedDate: "2023-06-17T02:16:57.281Z",
    specifications: {
      movement: "Quartz",
      caseMaterial: "Gold",
      caseDiameter: 42,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 20,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 49,
    name: "Watch 49",
    brand: "Casio",
    price: 1000,
    rating: 3,
    category: "Women",
    discount: 0,
    stock: 2,
    description: "This is A Description of Watch 49",
    sellerID: 1,
    addedDate: "2023-07-15T15:28:59.887Z",
    specifications: {
      movement: "Mechanical",
      caseMaterial: "Gold",
      caseDiameter: 38,
      glass: "Mineral",
      waterResistance: "30m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  },
  {
    productId: 50,
    name: "Watch 50",
    brand: "Swatch",
    price: 200,
    rating: 5,
    category: "Men",
    discount: 0,
    stock: 6,
    description: "This is A Description of Watch 50",
    sellerID: 1,
    addedDate: "2023-11-18T18:43:39.100Z",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Titanium",
      caseDiameter: 38,
      glass: "Sapphire",
      waterResistance: "50m",
      strapMaterial: "Metal",
      strapWidth: 18,
      strapColor: "Silver"
    },
    images: []
  }
]

  let links = [
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SO27B100_1200x.jpg?v=1665667752",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SO27B100_5000x.jpg?v=1665667752",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SO27B100_5000x.jpg?v=1665667752",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SO27B100_5000x.jpg?v=1665667752",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SO27B100_5000x.jpg?v=1665667752"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/F-91wm-9adf_1200x.jpg?v=1634567773",
      Image_URL1: "https://egywatch.com/cdn/shop/products/F-91wm-9adf_5000x.jpg?v=1634567773",
      Image_URL2: "https://egywatch.com/cdn/shop/products/F-91wm-9adf_5000x.jpg?v=1634567773",
      Image_URL3: "https://egywatch.com/cdn/shop/products/F-91wm-9adf_5000x.jpg?v=1634567773",
      Image_URL4: "https://egywatch.com/cdn/shop/products/F-91wm-9adf_5000x.jpg?v=1634567773"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_1200x.jpg?v=1634563260",
      Image_URL1: "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_5000x.jpg?v=1634563260",
      Image_URL2: "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_5000x.jpg?v=1634563260",
      Image_URL3: "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_5000x.jpg?v=1634563260",
      Image_URL4: "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_5000x.jpg?v=1634563260"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/files/YVS410G_1200x.jpg?v=1694510181",
      Image_URL1: "https://egywatch.com/cdn/shop/files/YVS410G_5000x.jpg?v=1694510181",
      Image_URL2: "https://egywatch.com/cdn/shop/files/YVS410G_5000x.jpg?v=1694510181",
      Image_URL3: "https://egywatch.com/cdn/shop/files/YVS410G_5000x.jpg?v=1694510181",
      Image_URL4: "https://egywatch.com/cdn/shop/files/YVS410G_5000x.jpg?v=1694510181"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_1200x.jpg?v=1654592760",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_5000x.jpg?v=1654592760",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_5000x.jpg?v=1654592760",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_5000x.jpg?v=1654592760",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_5000x.jpg?v=1654592760"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_1200x.jpg?v=1628602832",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_5000x.jpg?v=1628602832",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_5000x.jpg?v=1628602832",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_5000x.jpg?v=1628602832",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_5000x.jpg?v=1628602832"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T137.410.11.041_1200x.jpg?v=1638273269",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T137.410.11.041_5000x.jpg?v=1638273269",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T137.410.11.041_5000x.jpg?v=1638273269",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T137.410.11.041_5000x.jpg?v=1638273269",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T137.410.11.041_5000x.jpg?v=1638273269"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/F-91WS-7DF_1200x.jpg?v=1638607524",
      Image_URL1: "https://egywatch.com/cdn/shop/products/F-91WS-7DF_5000x.jpg?v=1638607524",
      Image_URL2: "https://egywatch.com/cdn/shop/products/F-91WS-7DF_5000x.jpg?v=1638607524",
      Image_URL3: "https://egywatch.com/cdn/shop/products/F-91WS-7DF_5000x.jpg?v=1638607524",
      Image_URL4: "https://egywatch.com/cdn/shop/products/F-91WS-7DF_5000x.jpg?v=1638607524"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SB02B400_1200x.jpg?v=1665582254",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SB02B400_5000x.jpg?v=1665582254",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SB02B400_5000x.jpg?v=1665582254",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SB02B400_5000x.jpg?v=1665582254",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SB02B400_5000x.jpg?v=1665582254"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T137.410.11.091_1200x.jpg?v=1663146985",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T137.410.11.091_5000x.jpg?v=1663146985",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T137.410.11.091_5000x.jpg?v=1663146985",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T137.410.11.091_5000x.jpg?v=1663146985",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T137.410.11.091_5000x.jpg?v=1663146985"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_1200x.jpg?v=1630635216",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_5000x.jpg?v=1630635216",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_5000x.jpg?v=1630635216",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_5000x.jpg?v=1630635216",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_5000x.jpg?v=1630635216"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/172.0025_1200x.jpg?v=1658830431",
      Image_URL1: "https://egywatch.com/cdn/shop/products/172.0025_5000x.jpg?v=1658830431",
      Image_URL2: "https://egywatch.com/cdn/shop/products/172.0025_5000x.jpg?v=1658830431",
      Image_URL3: "https://egywatch.com/cdn/shop/products/172.0025_5000x.jpg?v=1658830431",
      Image_URL4: "https://egywatch.com/cdn/shop/products/172.0025_5000x.jpg?v=1658830431"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/2011156_1200x.jpg?v=1643447544",
      Image_URL1: "https://egywatch.com/cdn/shop/products/2011156_5000x.jpg?v=1643447544",
      Image_URL2: "https://egywatch.com/cdn/shop/products/2011156_5000x.jpg?v=1643447544",
      Image_URL3: "https://egywatch.com/cdn/shop/products/2011156_5000x.jpg?v=1643447544",
      Image_URL4: "https://egywatch.com/cdn/shop/products/2011156_5000x.jpg?v=1643447544"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T137.410.11.031_1200x.jpg?v=1638270585",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T137.410.11.031_5000x.jpg?v=1638270585",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T137.410.11.031_5000x.jpg?v=1638270585",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T137.410.11.031_5000x.jpg?v=1638270585",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T137.410.11.031_5000x.jpg?v=1638270585"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T116.617.22.041_1200x.jpg?v=1637660241",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T116.617.22.041_5000x.jpg?v=1637660241",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T116.617.22.041_5000x.jpg?v=1637660241",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T116.617.22.041_5000x.jpg?v=1637660241",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T116.617.22.041_5000x.jpg?v=1637660241"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/GA-AE-2000W-1BVDF-2_1200x.jpg?v=1625575132",
      Image_URL1: "https://egywatch.com/cdn/shop/products/GA-AE-2000W-1BVDF-2_5000x.jpg?v=1625575132",
      Image_URL2: "https://egywatch.com/cdn/shop/products/GA-AE-2000W-1BVDF-2_5000x.jpg?v=1625575132",
      Image_URL3: "https://egywatch.com/cdn/shop/products/GA-AE-2000W-1BVDF-2_5000x.jpg?v=1625575132",
      Image_URL4: "https://egywatch.com/cdn/shop/products/GA-AE-2000W-1BVDF-2_5000x.jpg?v=1625575132"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_1200x.jpg?v=1654504460",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_5000x.jpg?v=1654504460",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_5000x.jpg?v=1654504460",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_5000x.jpg?v=1654504460",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_5000x.jpg?v=1654504460"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_1200x.jpg?v=1637749877",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_5000x.jpg?v=1637749877",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_5000x.jpg?v=1637749877",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_5000x.jpg?v=1637749877",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_5000x.jpg?v=1637749877"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_1200x.jpg?v=1628604063",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_5000x.jpg?v=1628604063",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_5000x.jpg?v=1628604063",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_5000x.jpg?v=1628604063",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_5000x.jpg?v=1628604063"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/YVS441GC_1200x.jpg?v=1636451060",
      Image_URL1: "https://egywatch.com/cdn/shop/products/YVS441GC_5000x.jpg?v=1636451060",
      Image_URL2: "https://egywatch.com/cdn/shop/products/YVS441GC_5000x.jpg?v=1636451060",
      Image_URL3: "https://egywatch.com/cdn/shop/products/YVS441GC_5000x.jpg?v=1636451060",
      Image_URL4: "https://egywatch.com/cdn/shop/products/YVS441GC_5000x.jpg?v=1636451060"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SO27E100_1200x.jpg?v=1665836935",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SO27E100_5000x.jpg?v=1665836935",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SO27E100_5000x.jpg?v=1665836935",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SO27E100_5000x.jpg?v=1665836935",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SO27E100_5000x.jpg?v=1665836935"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/YVS454_1200x.jpg?v=1664023462",
      Image_URL1: "https://egywatch.com/cdn/shop/products/YVS454_5000x.jpg?v=1664023462",
      Image_URL2: "https://egywatch.com/cdn/shop/products/YVS454_5000x.jpg?v=1664023462",
      Image_URL3: "https://egywatch.com/cdn/shop/products/YVS454_5000x.jpg?v=1664023462",
      Image_URL4: "https://egywatch.com/cdn/shop/products/YVS454_5000x.jpg?v=1664023462"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_1200x.jpg?v=1695464618",
      Image_URL1: "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_5000x.jpg?v=1695464618",
      Image_URL2: "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_5000x.jpg?v=1695464618",
      Image_URL3: "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_5000x.jpg?v=1695464618",
      Image_URL4: "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_5000x.jpg?v=1695464618"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/171.0.423_1200x.jpg?v=1649151006",
      Image_URL1: "https://egywatch.com/cdn/shop/products/171.0.423_5000x.jpg?v=1649151006",
      Image_URL2: "https://egywatch.com/cdn/shop/products/171.0.423_5000x.jpg?v=1649151006",
      Image_URL3: "https://egywatch.com/cdn/shop/products/171.0.423_5000x.jpg?v=1649151006",
      Image_URL4: "https://egywatch.com/cdn/shop/products/171.0.423_5000x.jpg?v=1649151006"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/2011146_1200x.jpg?v=1648645506",
      Image_URL1: "https://egywatch.com/cdn/shop/products/2011146_5000x.jpg?v=1648645506",
      Image_URL2: "https://egywatch.com/cdn/shop/products/2011146_5000x.jpg?v=1648645506",
      Image_URL3: "https://egywatch.com/cdn/shop/products/2011146_5000x.jpg?v=1648645506",
      Image_URL4: "https://egywatch.com/cdn/shop/products/2011146_5000x.jpg?v=1648645506"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_1200x.jpg?v=1638950338",
      Image_URL1: "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_5000x.jpg?v=1638950338",
      Image_URL2: "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_5000x.jpg?v=1638950338",
      Image_URL3: "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_5000x.jpg?v=1638950338",
      Image_URL4: "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_5000x.jpg?v=1638950338"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/171.0.450_1200x.jpg?v=1630143997",
      Image_URL1: "https://egywatch.com/cdn/shop/products/171.0.450_5000x.jpg?v=1630143997",
      Image_URL2: "https://egywatch.com/cdn/shop/products/171.0.450_5000x.jpg?v=1630143997",
      Image_URL3: "https://egywatch.com/cdn/shop/products/171.0.450_5000x.jpg?v=1630143997",
      Image_URL4: "https://egywatch.com/cdn/shop/products/171.0.450_5000x.jpg?v=1630143997"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_1200x.jpg?v=1628606576",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_5000x.jpg?v=1628606576",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_5000x.jpg?v=1628606576",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_5000x.jpg?v=1628606576",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_5000x.jpg?v=1628606576"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_1200x.jpg?v=1652536931",
      Image_URL1: "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_5000x.jpg?v=1652536931",
      Image_URL2: "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_5000x.jpg?v=1652536931",
      Image_URL3: "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_5000x.jpg?v=1652536931",
      Image_URL4: "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_5000x.jpg?v=1652536931"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_1200x.jpg?v=1637657053",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_5000x.jpg?v=1637657053",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_5000x.jpg?v=1637657053",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_5000x.jpg?v=1637657053",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_5000x.jpg?v=1637657053"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_1200x.jpg?v=1624886717",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_5000x.jpg?v=1624886717",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_5000x.jpg?v=1624886717",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_5000x.jpg?v=1624886717",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_5000x.jpg?v=1624886717"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_1200x.jpg?v=1639568974",
      Image_URL1: "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_5000x.jpg?v=1639568974",
      Image_URL2: "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_5000x.jpg?v=1639568974",
      Image_URL3: "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_5000x.jpg?v=1639568974",
      Image_URL4: "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_5000x.jpg?v=1639568974"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_1200x.jpg?v=1695281414",
      Image_URL1: "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_5000x.jpg?v=1695281414",
      Image_URL2: "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_5000x.jpg?v=1695281414",
      Image_URL3: "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_5000x.jpg?v=1695281414",
      Image_URL4: "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_5000x.jpg?v=1695281414"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_1200x.jpg?v=1654765499",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_5000x.jpg?v=1654765499",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_5000x.jpg?v=1654765499",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_5000x.jpg?v=1654765499",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_5000x.jpg?v=1654765499"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_1200x.jpg?v=1654500907",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_5000x.jpg?v=1654500907",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_5000x.jpg?v=1654500907",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_5000x.jpg?v=1654500907",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_5000x.jpg?v=1654500907"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_1200x.jpg?v=1654499909",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_5000x.jpg?v=1654499909",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_5000x.jpg?v=1654499909",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_5000x.jpg?v=1654499909",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_5000x.jpg?v=1654499909"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/HB151.3912_1200x.jpg?v=1648453964",
      Image_URL1: "https://egywatch.com/cdn/shop/products/HB151.3912_5000x.jpg?v=1648453964",
      Image_URL2: "https://egywatch.com/cdn/shop/products/HB151.3912_5000x.jpg?v=1648453964",
      Image_URL3: "https://egywatch.com/cdn/shop/products/HB151.3912_5000x.jpg?v=1648453964",
      Image_URL4: "https://egywatch.com/cdn/shop/products/HB151.3912_5000x.jpg?v=1648453964"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T137.410.11.051_1200x.jpg?v=1638279255",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T137.410.11.051_5000x.jpg?v=1638279255",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T137.410.11.051_5000x.jpg?v=1638279255",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T137.410.11.051_5000x.jpg?v=1638279255",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T137.410.11.051_5000x.jpg?v=1638279255"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SUOZ329_1200x.jpg?v=1636366630",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SUOZ329_5000x.jpg?v=1636366630",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SUOZ329_5000x.jpg?v=1636366630",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SUOZ329_5000x.jpg?v=1636366630",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SUOZ329_5000x.jpg?v=1636366630"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SO32B106_1200x.jpg?v=1636204048",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SO32B106_5000x.jpg?v=1636204048",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SO32B106_5000x.jpg?v=1636204048",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SO32B106_5000x.jpg?v=1636204048",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SO32B106_5000x.jpg?v=1636204048"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SO28Z101_1200x.jpg?v=1636190627",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SO28Z101_5000x.jpg?v=1636190627",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SO28Z101_5000x.jpg?v=1636190627",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SO28Z101_5000x.jpg?v=1636190627",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SO28Z101_5000x.jpg?v=1636190627"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_1200x.png?v=1634636969",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_5000x.png?v=1634636969",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_5000x.png?v=1634636969",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_5000x.png?v=1634636969",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_5000x.png?v=1634636969"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_1200x.jpg?v=1634635114",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_5000x.jpg?v=1634635114",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_5000x.jpg?v=1634635114",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_5000x.jpg?v=1634635114",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_5000x.jpg?v=1634635114"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SB02M400_1200x.jpg?v=1628677347",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SB02M400_5000x.jpg?v=1628677347",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SB02M400_5000x.jpg?v=1628677347",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SB02M400_5000x.jpg?v=1628677347",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SB02M400_5000x.jpg?v=1628677347"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_1200x.jpg?v=1628673947",
      Image_URL1: "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_5000x.jpg?v=1628673947",
      Image_URL2: "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_5000x.jpg?v=1628673947",
      Image_URL3: "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_5000x.jpg?v=1628673947",
      Image_URL4: "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_5000x.jpg?v=1628673947"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/GA-W-218H-1AVDF_1200x.jpg?v=1625756845",
      Image_URL1: "https://egywatch.com/cdn/shop/products/GA-W-218H-1AVDF_5000x.jpg?v=1625756845",
      Image_URL2: "https://egywatch.com/cdn/shop/products/GA-W-218H-1AVDF_5000x.jpg?v=1625756845",
      Image_URL3: "https://egywatch.com/cdn/shop/products/GA-W-218H-1AVDF_5000x.jpg?v=1625756845",
      Image_URL4: "https://egywatch.com/cdn/shop/products/GA-W-218H-1AVDF_5000x.jpg?v=1625756845"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_1200x.jpg?v=1638354880",
      Image_URL1: "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_5000x.jpg?v=1638354880",
      Image_URL2: "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_5000x.jpg?v=1638354880",
      Image_URL3: "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_5000x.jpg?v=1638354880",
      Image_URL4: "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_5000x.jpg?v=1638354880"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/SO27N100_1200x.jpg?v=1675777178",
      Image_URL1: "https://egywatch.com/cdn/shop/products/SO27N100_5000x.jpg?v=1675777178",
      Image_URL2: "https://egywatch.com/cdn/shop/products/SO27N100_5000x.jpg?v=1675777178",
      Image_URL3: "https://egywatch.com/cdn/shop/products/SO27N100_5000x.jpg?v=1675777178",
      Image_URL4: "https://egywatch.com/cdn/shop/products/SO27N100_5000x.jpg?v=1675777178"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/T116.617.11.057.01_1200x.jpg?v=1637657691",
      Image_URL1: "https://egywatch.com/cdn/shop/products/T116.617.11.057.01_5000x.jpg?v=1637657691",
      Image_URL2: "https://egywatch.com/cdn/shop/products/T116.617.11.057.01_5000x.jpg?v=1637657691",
      Image_URL3: "https://egywatch.com/cdn/shop/products/T116.617.11.057.01_5000x.jpg?v=1637657691",
      Image_URL4: "https://egywatch.com/cdn/shop/products/T116.617.11.057.01_5000x.jpg?v=1637657691"
    },
    {
      Image_URL: "https://egywatch.com/cdn/shop/products/GE709_1200x.jpg?v=1661602980",
      Image_URL1: "https://egywatch.com/cdn/shop/products/GE709_5000x.jpg?v=1661602980",
      Image_URL2: "https://egywatch.com/cdn/shop/products/GE709_5000x.jpg?v=1661602980",
      Image_URL3: "https://egywatch.com/cdn/shop/products/GE709_5000x.jpg?v=1661602980",
      Image_URL4: "https://egywatch.com/cdn/shop/products/GE709_5000x.jpg?v=1661602980"
    }
  ]

  products.forEach((product, index) => {
    for (let i = 0; i < Object.keys(links[index]).length; i++) {
        if(i==0){
            product.images.push(links[index][`Image_URL`]);
            continue;
        }
        product.images.push(links[index][`Image_URL${i}`]);
    }
});


  console.log(products);
