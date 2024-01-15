class User {
    static prevID =10;
    constructor(userData) {
        this.id = ++User.prevID;
        this.userType = userData.userType || "";
        this.userName = userData.userName || "";
        this.email = userData.email || "";
        this.password = userData.password || "";
        this.firstName = userData.firstName || "";
        this.lastName = userData.lastName || "";
        this.phoneNumber = userData.phoneNumber || "";
        this.location = {
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
            this.orderHistory=[];
            this.wishList=[];

    }
}

class Seller extends User {
    constructor(userData){
        super(userData);
        this.products=[];
        this.orders=[];
    }
}

class Admin extends User{
    constructor(userData){super(userData);}
}

class Product {
    static prevID = 0;

    constructor(productData) {
        this.productId = ++Product.prevID;
        this.name = productData.name || "";
        this.brand = productData.brand || "";
        this.rating = productData.rating || 0;
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
        this.id=++Order.prevID;
        this.productID;
        this.sellerID;
        this.price;
        this.quantity;
        this.status;
    }
}
