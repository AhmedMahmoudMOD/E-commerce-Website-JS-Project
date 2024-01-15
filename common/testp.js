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
        this.addedDate = productData.addedDate||"";
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

function getRandomValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateRandomDate() {
    const start = new Date(2023, 0, 1); // Start date (January 1, 2022)
    const end = new Date(); // Current date

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
}

function generateRandomProducts() {
    const watchValues = {
        brand: ["Tissot", "Casio", "Swatch","Lacoste","Tommy Hilfiger" /* Add more brands */],
        price: [200, 450,600,900,1250,250,500,1000,1700,2000,5000,1100,750 /* Add more prices */],
        category: ["Men", "Women"],
        rating : [1,2,3,4,5],
        discount: [0.0, 0.1, 0.2, /* Add more discounts */],
        stock: [10, 20, 30,5,3,1,0,17,2,6 /* Add more stock values */],
        sellerID: [1, 2],
        specifications: {
            movement: ["Quartz", "Automatic", "Mechanical", /* Add more movements */],
            caseMaterial: ["Stainless Steel", "Gold", "Titanium", /* Add more case materials */],
            caseDiameter: [38, 40, 42, /* Add more case diameters */],
            glass: ["Sapphire", "Mineral", "Acrylic", /* Add more glass types */],
            waterResistance: ["30m", "50m", "100m", /* Add more water resistances */],
            strapMaterial: ["Leather", "Metal", "Rubber", /* Add more strap materials */],
            strapWidth: [18, 20, 22, /* Add more strap widths */],
            strapColor: ["Black", "Brown", "Silver", /* Add more strap colors */]
        }
    };

    const products = [];

    for (let i = 0; i < 50; i++) {
        const productData = {
            name: `Watch ${i+1}`,
            brand: getRandomValue(watchValues.brand),
            price: getRandomValue(watchValues.price),
            rating : getRandomValue(watchValues.rating),
            category: getRandomValue(watchValues.category),
            discount: getRandomValue(watchValues.discount),
            stock: getRandomValue(watchValues.stock),
            description: `This is A Description of Watch ${i+1}`,
            sellerID: getRandomValue(watchValues.sellerID),
            addedDate : generateRandomDate(),
            specifications: {
                movement: getRandomValue(watchValues.specifications.movement),
                caseMaterial: getRandomValue(watchValues.specifications.caseMaterial),
                caseDiameter: getRandomValue(watchValues.specifications.caseDiameter),
                glass: getRandomValue(watchValues.specifications.glass),
                waterResistance: getRandomValue(watchValues.specifications.waterResistance),
                strapMaterial: getRandomValue(watchValues.specifications.strapMaterial),
                strapWidth: getRandomValue(watchValues.specifications.strapWidth),
                strapColor: getRandomValue(watchValues.specifications.strapColor)
            }
        };

        const product = new Product(productData);
        products.push(product);
    }

    return products;
}

// Rest of the code remains the same

// Generate 50 random watch products
const randomProducts = generateRandomProducts();
console.log(randomProducts);
