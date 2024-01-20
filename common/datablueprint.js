// Customer BluePrint //

c={
    id: 'C7',
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
    orderHistory: [], // array of order ids
    wishList: [], // array of product ids
    cart : [{
      Pid,
      Quantity}] // array of objects
  }

  // Seller Blue Print//
  s={
    id: 'S2',
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
    products: [], // Array of Products ID
    orders: [], // Array Of Orders ID
    
  }

  // Admin Blue Print //

  A={
    id: 'A1',
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
  }

  // Orders Blue Print //
  let Orders = [{
    orderID,
    sellerID,
    customerID,
    placeDate,
    orderStatus,
    deliverDate,
    products : [{ id , quantity , price
    }] ,

  }];

  // Orders History Blue Print //
  let ordersHistory = [{
    orderID : 1,

}]