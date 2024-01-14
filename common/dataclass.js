class User {
    static prevID =10;
    constructor(userData) {
        this.ID = ++User.prevID;
        this.UserType = userData.UserType || "";
        this.UserName = userData.UserName || "";
        this.Email = userData.Email || "";
        this.Password = userData.Password || "";
        this.FirstName = userData.FirstName || "";
        this.LastName = userData.LastName || "";
        this.PhoneNumber = userData.PhoneNumber || "";
        this.Location = {
            street: userData.Location.street || "",
            city: userData.Location.city || "",
            state: userData.Location.state || "",
            country: userData.Location.country || "",
            zipCode: userData.Location.zipCode || "",
        };
    }    
}

class Costumer extends User{
        constructor(userData){
            super(userData);
            this.OrderHistory=[];
            this.WishList=[];

    }
}

class Seller extends User {
    constructor(userData){
        super(userData);
        this.Products=[];
        this.Orders=[];
    }
}

class Admin extends user{
    constructor(userData){super(userData);}
}

class Product {
    static prevID = 0;

    constructor(productData) {
        this.productId = ++Product.prevID;
        this.name = productData.name || "";
        this.brand = productData.brand || "";
        this.price = productData.price || 0;
        this.category = productData.category || "";
        this.discount = productData.discount || 0;
        this.stock = productData.stock || 0;
        this.description = productData.description || "";
        this.sellerID = productData.sellerID || "";
        this.addedDate = productData.sellerID || "";
        this.specifications = {
            movement: productData.specifications?.movement || "",
            caseMaterial: productData.specifications?.caseMaterial || "",
            caseDiameter: productData.specifications?.caseDiameter || 0,
            glass: productData.specifications?.glass || "",
            waterResistance: productData.specifications?.waterResistance || "",
            strapMaterial: productData.specifications?.strapMaterial || "",
            strapWidth: productData.specifications?.strapWidth || 0,
            strapColor: productData.specifications?.strapColor || ""
        };
        this.images = [];
    }
}

class Order {
    static prevID=0;
    constructor(){
        this.ID=++Order.prevID;
        this.ProductID;
        this.sellerID;
        this.Price;
        this.Quantity;
    }
}


const exampleUserData = {
    UserType: "Regular",
    UserName: "example_username",
    Email: "example@example.com",
    Password: "example_password",
    FirstName: "John",
    LastName: "Doe",
    PhoneNumber: "1234567890",
    Location: {
        street: "123 Main St",
        city: "Example City",
        state: "Example State",
        country: "Example Country",
        zipCode: "12345",
    }
};
