let users = [
  {
    id: 'U1',
    userType: "admin",
    userName: "admin",
    email: "admin@example.com",
    password: "adminpassword",
    firstName: "Ahmed",
    lastName: "Mahmoud",
    phoneNumber: "1234567890",
    location: {
      street: "Willow",
      city: "Los Angeles",
      state: "AZ",
      country: "Australia",
      zipCode: "12345",
    },
    cart: []
  },
  {
    id: 'U2',
    userType: "seller",
    userName: "alpha_user",
    email: "seller1@example.com",
    password: "secretPass",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "9786386705",
    location: {
      street: "Willow",
      city: "Seattle",
      state: "AZ",
      country: "UK",
      zipCode: "70734",
    },
    products: [],
    orders: [],
    cart: []
  },
  {
    id: 'U3',
    userType: "seller",
    userName: "john_doe",
    email: "seller2@example.com",
    password: "password123",
    firstName: "Frank",
    lastName: "Doe",
    phoneNumber: "9007849974",
    location: {
      street: "Pine",
      city: "San Francisco",
      state: "AZ",
      country: "France",
      zipCode: "13564",
    },
    products: [],
    orders: [],
    cart: []
  },
  {
    id: 'U4',
    userType: "customer",
    userName: "gamma_customer",
    email: "customer1@example.com",
    password: "qwerty123",
    firstName: "Grace",
    lastName: "Brown",
    phoneNumber: "4497460887",
    location: {
      street: "Maple",
      city: "Houston",
      state: "MA",
      country: "China",
      zipCode: "18746",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U5',
    userType: "customer",
    userName: "jane_smith",
    email: "customer2@example.com",
    password: "sellerPass",
    firstName: "Jane",
    lastName: "Williams",
    phoneNumber: "3800221970",
    location: {
      street: "Elm",
      city: "Phoenix",
      state: "FL",
      country: "India",
      zipCode: "18289",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U6',
    userType: "customer",
    userName: "customerA",
    email: "customer3@example.com",
    password: "passphrase123",
    firstName: "Henry",
    lastName: "Smith",
    phoneNumber: "2453616519",
    location: {
      street: "Birch",
      city: "Los Angeles",
      state: "MA",
      country: "China",
      zipCode: "95668",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U7',
    userType: "customer",
    userName: "beta_seller",
    email: "customer4@example.com",
    password: "adminPass",
    firstName: "Charlie",
    lastName: "Doe",
    phoneNumber: "4448668569",
    location: {
      street: "Birch",
      city: "Los Angeles",
      state: "NY",
      country: "France",
      zipCode: "68235",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U8',
    userType: "customer",
    userName: "delta_user",
    email: "customer5@example.com",
    password: "masterPass",
    firstName: "John",
    lastName: "Miller",
    phoneNumber: "2380698770",
    location: {
      street: "Birch",
      city: "Houston",
      state: "FL",
      country: "India",
      zipCode: "25019",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U9',
    userType: "customer",
    userName: "seller1",
    email: "customer6@example.com",
    password: "pass123",
    firstName: "Frank",
    lastName: "Doe",
    phoneNumber: "5021403485",
    location: {
      street: "Cherry",
      city: "New York",
      state: "IL",
      country: "Germany",
      zipCode: "38545",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  },
  {
    id: 'U10',
    userType: "customer",
    userName: "epsilon_seller",
    email: "customer7@example.com",
    password: "securePass",
    firstName: "Bob",
    lastName: "Johnson",
    phoneNumber: "1110439535",
    location: {
      street: "Cedar",
      city: "New York",
      state: "AZ",
      country: "China",
      zipCode: "94802",
    },
    orderHistory: [],
    wishList: [],
    cart: []
  }
];
let products = [
    {
      productId: "P1",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO27B100_2048x.jpg?v=1665667752",
        "https://egywatch.com/cdn/shop/products/SO27B100-1_2048x.jpg?v=1665667752",
        "https://egywatch.com/cdn/shop/products/SO27B100-2_2048x.jpg?v=1665667751",
        "https://egywatch.com/cdn/shop/products/SO27B100-4_2048x.jpg?v=1665667765",
        "https://egywatch.com/cdn/shop/products/SO27B100-3_2048x.jpg?v=1665667765"
      ]
    },
    {
      productId: "P2",
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
      images: [
        "https://egywatch.com/cdn/shop/products/F-91wm-9adf_2048x.jpg?v=1634567773",
        "https://egywatch.com/cdn/shop/products/F-91wm-9adf-2_2048x.jpg?v=1634567774",
        "https://egywatch.com/cdn/shop/products/F-91wm-9adf-1_2048x.jpg?v=1634567774",
        "https://egywatch.com/cdn/shop/products/F-91wm-9adf-3_2048x.jpg?v=1634567774"
      ]
    },
    {
      productId: "P3",
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
      images: [
        "https://egywatch.com/cdn/shop/products/F-91WM-7ADF_2048x.jpg?v=1634563260",
        "https://egywatch.com/cdn/shop/products/F-91WM-7ADF-1_2048x.jpg?v=1634563259",
        "https://egywatch.com/cdn/shop/products/F-91WM-7ADF-2_2048x.jpg?v=1634563259"
      ]
    },
    {
      productId: "P4",
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
      images: [
        "https://egywatch.com/cdn/shop/files/YVS410G_2048x.jpg?v=1694510181",
        "https://egywatch.com/cdn/shop/files/YVS410G-1_2048x.jpg?v=1694510509",
        "https://egywatch.com/cdn/shop/files/YVS410G-2_2048x.jpg?v=1694510509",
        "https://egywatch.com/cdn/shop/files/YVS410G-5_2048x.jpg?v=1694510509",
        "https://egywatch.com/cdn/shop/files/YVS410G-3_2048x.jpg?v=1694510505",
        "https://egywatch.com/cdn/shop/files/YVS410G-4_2048x.jpg?v=1694510505"
      ]
    },
    {
      productId: "P5",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF_2048x.jpg?v=1654592760",
        "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF-4_2048x.jpg?v=1654592759",
        "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF-2_2048x.jpg?v=1654592760",
        "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF-3_2048x.jpg?v=1654592759",
        "https://egywatch.com/cdn/shop/products/MTP-V002D-1BUDF-1_2048x.jpg?v=1654592760"
      ]
    },
    {
      productId: "P6",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF_2048x.jpg?v=1628602832",
        "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF-1_2048x.jpg?v=1628602832",
        "https://egywatch.com/cdn/shop/products/MTP-1374D-1AVDF-2_2048x.jpg?v=1628602832"
      ]
    },
    {
      productId: "P7",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T137.410.11.041_2048x.jpg?v=1638273269",
        "https://egywatch.com/cdn/shop/products/T137.410.11.041-2_2048x.jpg?v=1638273269",
        "https://egywatch.com/cdn/shop/products/T137.410.11.041-1_2048x.jpg?v=1638273269"
      ]
    },
    {
      productId: "P8",
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
      images: [
        "https://egywatch.com/cdn/shop/products/F-91WS-7DF_2048x.jpg?v=1638607524",
        "https://egywatch.com/cdn/shop/products/F-91WS-7DF-1_2048x.jpg?v=1638607525",
        "https://egywatch.com/cdn/shop/products/F-91WS-7DF-2_2048x.jpg?v=1638607524"
      ]
    },
    {
      productId: "P9",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SB02B400_2048x.jpg?v=1665582254",
        "https://egywatch.com/cdn/shop/products/SB02B400-4_2048x.jpg?v=1665582260",
        "https://egywatch.com/cdn/shop/products/SB02B400-3_2048x.jpg?v=1665582260",
        "https://egywatch.com/cdn/shop/products/SB02B400-5_2048x.jpg?v=1665582260",
        "https://egywatch.com/cdn/shop/products/SB02B400-1_2048x.jpg?v=1665582260",
        "https://egywatch.com/cdn/shop/products/SB02B400-2_2048x.jpg?v=1665582260"
      ]
    },
    {
      productId: "P10",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T137.410.11.091_2048x.jpg?v=1663146985",
        "https://egywatch.com/cdn/shop/products/T137.410.11.091-2_2048x.jpg?v=1663146985",
        "https://egywatch.com/cdn/shop/products/T137.410.11.091-4_2048x.jpg?v=1663146985",
        "https://egywatch.com/cdn/shop/products/T137.410.11.091-1_2048x.jpg?v=1663146986",
        "https://egywatch.com/cdn/shop/products/T137.410.11.091-3_2048x.jpg?v=1663147193"
      ]
    },
    {
      productId: "P11",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T125.617.17.051.01_2048x.jpg?v=1630635216",
        "https://egywatch.com/cdn/shop/products/T125.617.17.051.01-2_2048x.jpg?v=1630635216",
        "https://egywatch.com/cdn/shop/products/T125.617.17.051.01-3_2048x.jpg?v=1630635216",
        "https://egywatch.com/cdn/shop/products/T125.617.17.051.01-1_2048x.jpg?v=1630635216"
      ]
    },
    {
      productId: "P12",
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
      images: [
        "https://egywatch.com/cdn/shop/products/172.0025_2048x.jpg?v=1658830431",
        "https://egywatch.com/cdn/shop/products/172.0025-1_2048x.jpg?v=1658830431",
        "https://egywatch.com/cdn/shop/products/172.0025-2_2048x.jpg?v=1658830431"
      ]
    },
    {
      productId: "P13",
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
      images: [
        "https://egywatch.com/cdn/shop/products/2011156_2048x.jpg?v=1643447544",
        "https://egywatch.com/cdn/shop/products/2011156-1_2048x.jpg?v=1643447544",
        "https://egywatch.com/cdn/shop/products/2011156-2_2048x.jpg?v=1643447544",
        "https://egywatch.com/cdn/shop/products/2011156-3_2048x.jpg?v=1643447544"
      ]
    },
    {
      productId: "P14",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T137.410.11.031_2048x.jpg?v=1638270585",
        "https://egywatch.com/cdn/shop/products/T137.410.11.031-1_2048x.jpg?v=1638270585",
        "https://egywatch.com/cdn/shop/products/T137.410.11.031-3_2048x.jpg?v=1638270584",
        "https://egywatch.com/cdn/shop/products/T137.410.11.031-4_2048x.jpg?v=1638270584",
        "https://egywatch.com/cdn/shop/products/T137.410.11.031-2_2048x.jpg?v=1638270585"
      ]
    },
    {
      productId: "P15",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T116.617.22.041_2048x.jpg?v=1637660241",
        "https://egywatch.com/cdn/shop/products/T116.617.22.041-2_2048x.jpg?v=1637660245",
        "https://egywatch.com/cdn/shop/products/T116.617.22.041-3_2048x.jpg?v=1637660245",
        "https://egywatch.com/cdn/shop/products/T116.617.22.041-1_2048x.jpg?v=1637660241"
      ]
    },
    {
      productId: "P16",
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
      images: [
        "https://egywatch.com/cdn/shop/products/179.1940_2048x.jpg?v=1649508803",
        "https://egywatch.com/cdn/shop/products/179.1819-1_5000x.jpg?v=1659445129",
        "https://egywatch.com/cdn/shop/products/179.1940-3_2048x.jpg?v=1649508803",
        "https://egywatch.com/cdn/shop/products/179.1940-2_2048x.jpg?v=1649508802"
      ]
    },
    {
      productId: "P17",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF_2048x.jpg?v=1654504460",
        "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF-5_2048x.jpg?v=1654504461",
        "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF-2_2048x.jpg?v=1654504461",
        "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF-1_2048x.jpg?v=1654504460",
        "https://egywatch.com/cdn/shop/products/MTP-1303D-7AVDF-4_2048x.jpg?v=1654504460"
      ]
    },
    {
      productId: "P18",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01_2048x.jpg?v=1637749877",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-2_2048x.jpg?v=1637750149",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-1_2048x.jpg?v=1637750149",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-3_2048x.jpg?v=1637750149",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-6_2048x.jpg?v=1637750149",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-5_2048x.jpg?v=1637750149",
        "https://egywatch.com/cdn/shop/products/T120.417.11.091.01-4_2048x.jpg?v=1637750149"
      ]
    },
    {
      productId: "P19",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF_2048x.jpg?v=1628604063",
        "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF-1_2048x.jpg?v=1628604064",
        "https://egywatch.com/cdn/shop/products/MTP-1374D-2AVDF-3_2048x.jpg?v=1628604064"
      ]
    },
    {
      productId: "P20",
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
      images: [
        "https://egywatch.com/cdn/shop/products/YVS441GC_2048x.jpg?v=1636451060",
        "https://egywatch.com/cdn/shop/products/YVS441GC-1_2048x.jpg?v=1636451060",
        "https://egywatch.com/cdn/shop/products/YVS441GC-3_2048x.jpg?v=1636451060"
      ]
    },
    {
      productId: "P21",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO27E100_2048x.jpg?v=1665836935",
        "https://egywatch.com/cdn/shop/products/SO27E100-2_2048x.jpg?v=1665836939",
        "https://egywatch.com/cdn/shop/products/SO27E100-3_2048x.jpg?v=1665836939",
        "https://egywatch.com/cdn/shop/products/SO27E100-1_2048x.jpg?v=1665836939",
        "https://egywatch.com/cdn/shop/products/SO27E100-4_2048x.jpg?v=1665836936"
      ]
    },
    {
      productId: "P22",
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
      images: [
        "https://egywatch.com/cdn/shop/products/YVS454_2048x.jpg?v=1664023462",
        "https://egywatch.com/cdn/shop/products/YVS454-3_2048x.jpg?v=1664023474",
        "https://egywatch.com/cdn/shop/products/YVS454-4_2048x.jpg?v=1664023474",
        "https://egywatch.com/cdn/shop/products/YVS454-1_2048x.jpg?v=1664023474",
        "https://egywatch.com/cdn/shop/products/YVS454-2_2048x.jpg?v=1664023474"
      ]
    },
    {
      productId: "P23",
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
      images: [
        "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF_2048x.jpg?v=1695464618",
        "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF-2_2048x.jpg?v=1695464618",
        "https://egywatch.com/cdn/shop/files/LTP-VT01GL-2BUDF-1_2048x.jpg?v=1695464618"
      ]
    },
    {
      productId: "P24",
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
      images: [
        "https://egywatch.com/cdn/shop/products/171.0.423_2048x.jpg?v=1649151006",
        "https://egywatch.com/cdn/shop/products/171.0.423-1_2048x.jpg?v=1649151006",
        "https://egywatch.com/cdn/shop/products/171.0.423-2_2048x.jpg?v=1649151006",
        "https://egywatch.com/cdn/shop/products/171.0.423-3_2048x.jpg?v=1649151007"
      ]
    },
    {
      productId: "P25",
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
      images: [
        "https://egywatch.com/cdn/shop/products/2011146_2048x.jpg?v=1648645506",
        "https://egywatch.com/cdn/shop/products/2011146-1_2048x.jpg?v=1648645506",
        "https://egywatch.com/cdn/shop/products/2011146-2_2048x.jpg?v=1648645507",
        "https://egywatch.com/cdn/shop/products/2011146-3_2_2048x.jpg?v=1648645506",
        "https://egywatch.com/cdn/shop/products/2011146-3_2048x.jpg?v=1648645507"
      ]
    },
    {
      productId: "P26",
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
      images: [
        "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF_2048x.jpg?v=1638950338",
        "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF-3_2048x.jpg?v=1638950340",
        "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF-2_2048x.jpg?v=1638950338",
        "https://egywatch.com/cdn/shop/products/AEQ-100W-1BVDF-1_2048x.jpg?v=1638950340"
      ]
    },
    {
      productId: "P27",
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
      images: [
        "https://egywatch.com/cdn/shop/products/171.0.450_2048x.jpg?v=1630143997",
        "https://egywatch.com/cdn/shop/products/171.0.450-1_2048x.jpg?v=1630143998",
        "https://egywatch.com/cdn/shop/products/171.0.450-2_2048x.jpg?v=1630143998",
        "https://egywatch.com/cdn/shop/products/171.0.450-3_2048x.jpg?v=1630143998"
      ]
    },
    {
      productId: "P28",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF_2048x.jpg?v=1628606576",
        "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF-1_2048x.jpg?v=1628606577",
        "https://egywatch.com/cdn/shop/products/MTP-1374L-1AVDF-2_2048x.jpg?v=1628606577"
      ]
    },
    {
      productId: "P29",
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
      images: [
        "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR_2048x.jpg?v=1652536931",
        "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR-1_2048x.jpg?v=1652536930",
        "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR-2_2048x.jpg?v=1652536930",
        "https://egywatch.com/cdn/shop/products/GM-110G-1A9DR-3_2048x.jpg?v=1652536930"
      ]
    },
    {
      productId: "P30",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-1_2048x.jpg?v=1637657053",
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-3_2048x.jpg?v=1637657075",
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01_2048x.jpg?v=1637657075",
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-2_2048x.jpg?v=1637657075",
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-4_2048x.jpg?v=1637657073",
        "https://egywatch.com/cdn/shop/products/T116.617.11.047.01-5_2048x.jpg?v=1637657073"
      ]
    },
    {
      productId: "P31",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-01_2048x.jpg?v=1624886717",
        "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-02_2048x.jpg?v=1624886717",
        "https://egywatch.com/cdn/shop/products/T111.417.37.441.04-03_2048x.jpg?v=1624886717"
      ]
    },
    {
      productId: "P32",
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
      images: [
        "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF_2048x.jpg?v=1639568974",
        "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF-1_2048x.jpg?v=1639568977",
        "https://egywatch.com/cdn/shop/products/HDC-700-3A3VDF-2_2048x.jpg?v=1639568977"
      ]
    },
    {
      productId: "P33",
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
      images: [
        "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF_2048x.jpg?v=1695281414",
        "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF-1_2048x.jpg?v=1695281413",
        "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF-2_2048x.jpg?v=1695281414",
        "https://egywatch.com/cdn/shop/files/MTP-V005L-7BUDF-3_2048x.jpg?v=1695281413"
      ]
    },
    {
      productId: "P34",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF_2048x.jpg?v=1654765499",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF-1_2048x.jpg?v=1654765499",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF-2_2048x.jpg?v=1654765499",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1A2VDF-3_2048x.jpg?v=1654765499"
      ]
    },
    {
      productId: "P35",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF_2048x.jpg?v=1654500907",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF-3_2048x.jpg?v=1654500907",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF-1_2048x.jpg?v=1654500907",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A2VDF-2_2048x.jpg?v=1654500907"
      ]
    },
    {
      productId: "P36",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF_2048x.jpg?v=1654499909",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF-3_2048x.jpg?v=1654499909",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF-1_2048x.jpg?v=1654499909",
        "https://egywatch.com/cdn/shop/products/MTP-1302D-1A1VDF-2_2048x.jpg?v=1654499909"
      ]
    },
    {
      productId: "P37",
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
      images: [
        "https://egywatch.com/cdn/shop/products/HB151.3912_2048x.jpg?v=1648453964",
        "https://egywatch.com/cdn/shop/products/HB151.3912-1_2048x.jpg?v=1648453964",
        "https://egywatch.com/cdn/shop/products/HB151.3912-2_2048x.jpg?v=1648453964",
        "https://egywatch.com/cdn/shop/products/HB151.3912-3_2048x.jpg?v=1648453964"
      ]
    },
    {
      productId: "P38",
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
      images: [
        "https://egywatch.com/cdn/shop/products/T137.410.11.051_2048x.jpg?v=1638279255",
        "https://egywatch.com/cdn/shop/products/T137.410.11.051-2_2048x.jpg?v=1638279256",
        "https://egywatch.com/cdn/shop/products/T137.410.11.051-1_2048x.jpg?v=1638279256"
      ]
    },
    {
      productId: "P39",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SUOZ329_2048x.jpg?v=1636366630",
        "https://egywatch.com/cdn/shop/products/SUOZ329-2_2048x.jpg?v=1636366630",
        "https://egywatch.com/cdn/shop/products/SUOZ329-1_2048x.jpg?v=1636366630"
      ]
    },
    {
      productId: "P40",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO32B106_2048x.jpg?v=1636204048",
        "https://egywatch.com/cdn/shop/products/S032B106-2_2048x.jpg?v=1648719794",
        "https://egywatch.com/cdn/shop/products/SO32B106-1_2048x.jpg?v=1648719794",
        "https://egywatch.com/cdn/shop/products/SO32B106-2_2048x.jpg?v=1648719794",
        "https://egywatch.com/cdn/shop/products/SO32B106-3_2048x.jpg?v=1648719794",
        "https://egywatch.com/cdn/shop/products/SO32B106-4_2048x.jpg?v=1648719794",
        "https://egywatch.com/cdn/shop/products/S032B106-1_2048x.jpg?v=1648719794"
      ]
    },
    {
      productId: "P41",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO28Z101_2048x.jpg?v=1636190627",
        "https://egywatch.com/cdn/shop/products/SO28Z101-2_2048x.jpg?v=1636190628",
        "https://egywatch.com/cdn/shop/products/SO28Z101-3_2048x.jpg?v=1636190627"
      ]
    },
    {
      productId: "P42",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF_2048x.png?v=1634636969",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF-2_2048x.jpg?v=1634636969",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF-1_2048x.png?v=1634636969",
        "https://egywatch.com/cdn/shop/products/MWA-100H-1AVDF-3_2048x.jpg?v=1634636969"
      ]
    },
    {
      productId: "P43",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF_2048x.jpg?v=1634635114",
        "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF-1_2048x.jpg?v=1634635114",
        "https://egywatch.com/cdn/shop/products/MTP-1314D-7AVDF-2_2048x.jpg?v=1634635114"
      ]
    },
    {
      productId: "P44",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SB02M400_2048x.jpg?v=1628677347",
        "https://egywatch.com/cdn/shop/products/SB02M400-1_2048x.jpg?v=1628677347",
        "https://egywatch.com/cdn/shop/products/SB02M400-2_2048x.jpg?v=1628677347",
        "https://egywatch.com/cdn/shop/products/SB02M400-3_2048x.jpg?v=1628677347"
      ]
    },
    {
      productId: "P45",
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
      images: [
        "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF_2048x.jpg?v=1628673947",
        "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF-1_2048x.jpg?v=1628673989",
        "https://egywatch.com/cdn/shop/products/MTP-1375L-1AVDF-2_2048x.jpg?v=1628673989"
      ]
    },
    {
      productId: "P46",
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
      images: [
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR-1_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/Casio_GA-2100-1A1DR_4___33158.1617062305_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR-2_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/Untitled_b2a09cbb-ed92-4bd9-8c14-3d182030a8eb_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/70413945_2463617747006623_8074200459604131840_n_2048x.jpg?v=1638354880"
      ]
    },
    {
      productId: "P47",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO27N100_2048x.jpg?v=1675777178",
        "https://egywatch.com/cdn/shop/products/SO27N100-3_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-1_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-2_2048x.jpg?v=1675777180"
      ]
    },
    {
      productId: "P48",
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
      images: [
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR-1_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/Casio_GA-2100-1A1DR_4___33158.1617062305_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/GA-2100-1A1DR-2_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/Untitled_b2a09cbb-ed92-4bd9-8c14-3d182030a8eb_2048x.jpg?v=1638354880",
        "https://egywatch.com/cdn/shop/products/70413945_2463617747006623_8074200459604131840_n_2048x.jpg?v=1638354880"
      ]
    },
    {
      productId: "P49",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO27N100_2048x.jpg?v=1675777178",
        "https://egywatch.com/cdn/shop/products/SO27N100-3_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-1_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-2_2048x.jpg?v=1675777180"
      ]
    },
    {
      productId: "P50",
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
      images: [
        "https://egywatch.com/cdn/shop/products/SO27N100_2048x.jpg?v=1675777178",
        "https://egywatch.com/cdn/shop/products/SO27N100-3_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-1_2048x.jpg?v=1675777180",
        "https://egywatch.com/cdn/shop/products/SO27N100-2_2048x.jpg?v=1675777180"
      ]
    }
  ];

let orders = [];
let ordersHistory =[];

let currentUser = {
  id: 'U4',
  userType: "customer",
  userName: "gamma_customer",
  email: "customer1@example.com",
  password: "qwerty123",
  firstName: "Grace",
  lastName: "Brown",
  phoneNumber: "4497460887",
  location: {
    street: "Maple",
    city: "Houston",
    state: "MA",
    country: "China",
    zipCode: "18746",
  },
  orderHistory: [],
  wishList: [],
  cart: []
};
let cart = [];
export {users,orders,products,ordersHistory,currentUser,cart};