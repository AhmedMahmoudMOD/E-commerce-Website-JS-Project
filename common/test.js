class User {
    static prevID =0;
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
class Customer extends User {
    constructor(userData) {
        super(userData);
        this.OrderHistory = [];
        this.WishList = [];
    }
}

class Seller extends User {
    constructor(userData) {
        super(userData);
        this.Products = [];
        this.Orders = [];
    }
}

class Admin extends User {
    constructor(userData) {
        super(userData);
    }

    // You can add specific admin-related methods or properties here if needed
}

function getRandomArrayValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomUsers() {
    const users = [];
    const usedEmails = new Set();
    const usedUsernames = new Set();
    const usedPasswords = new Set();

    const streetNames = ["Oak", "Maple", "Pine", "Cedar", "Elm", "Birch", "Willow", "Cherry", "Aspen", "Sycamore"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Miami", "Seattle", "Denver", "Boston"];
    const states = ["NY", "CA", "IL", "TX", "AZ", "FL", "WA", "CO", "MA", "PA"];
    const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "Brazil", "India", "China"];

    const usernames = ["john_doe", "jane_smith", "user123", "seller1", "customerA", "alpha_user", "beta_seller", "gamma_customer", "delta_user", "epsilon_seller"];
    const firstNames = ["John", "Jane", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry"];
    const lastNames = ["Doe", "Smith", "Johnson", "Williams", "Brown", "Lee", "Miller", "Jones", "Taylor", "Clark"];
    const passwords = ["pass123", "securePass", "password123", "userPass", "sellerPass", "adminPass", "masterPass", "secretPass", "passphrase123", "qwerty123"];

    // Create Admin
    const adminUser = new Admin({
        UserType : "admin",
        UserName: "admin",
        Email: "admin@example.com",
        Password: "adminpassword",
        FirstName: "Admin",
        LastName: "User",
        PhoneNumber: "1234567890",
        Location: {
            street: getRandomArrayValue(streetNames),
            city: getRandomArrayValue(cities),
            state: getRandomArrayValue(states),
            country: getRandomArrayValue(countries),
            zipCode: "12345",
        },
    });

    users.push(adminUser);
    usedEmails.add("admin@example.com");
    usedUsernames.add("admin");
    usedPasswords.add("adminpassword");

    // Create Sellers (2nd and 3rd objects)
    for (let i = 1; i <= 2; i++) {
        let randomEmail, randomUsername, randomPassword;

        do {
            randomEmail = `seller${i}@example.com`;
        } while (usedEmails.has(randomEmail));
        usedEmails.add(randomEmail);

        do {
            randomUsername = getRandomArrayValue(usernames);
        } while (usedUsernames.has(randomUsername));
        usedUsernames.add(randomUsername);

        do {
            randomPassword = getRandomArrayValue(passwords);
        } while (usedPasswords.has(randomPassword));
        usedPasswords.add(randomPassword);

        const randomSeller = new Seller({
            UserType : "seller",
            UserName: randomUsername,
            Email: randomEmail,
            Password: randomPassword,
            FirstName: getRandomArrayValue(firstNames),
            LastName: getRandomArrayValue(lastNames),
            PhoneNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
            Location: {
                street: getRandomArrayValue(streetNames),
                city: getRandomArrayValue(cities),
                state: getRandomArrayValue(states),
                country: getRandomArrayValue(countries),
                zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
            },
        });

        users.push(randomSeller);
    }

    // Create Customers (rest of the objects)
    for (let i = 1; i <= 7; i++) {
        let randomEmail, randomUsername, randomPassword;

        do {
            randomEmail = `customer${i}@example.com`;
        } while (usedEmails.has(randomEmail));
        usedEmails.add(randomEmail);

        do {
            randomUsername = getRandomArrayValue(usernames);
        } while (usedUsernames.has(randomUsername));
        usedUsernames.add(randomUsername);

        do {
            randomPassword = getRandomArrayValue(passwords);
        } while (usedPasswords.has(randomPassword));
        usedPasswords.add(randomPassword);

        const randomCustomer = new Customer({
            UserType : "customer",
            UserName: randomUsername,
            Email: randomEmail,
            Password: randomPassword,
            FirstName: getRandomArrayValue(firstNames),
            LastName: getRandomArrayValue(lastNames),
            PhoneNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
            Location: {
                street: getRandomArrayValue(streetNames),
                city: getRandomArrayValue(cities),
                state: getRandomArrayValue(states),
                country: getRandomArrayValue(countries),
                zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
            },
        });

        users.push(randomCustomer);
    }

    return users;
}

// Usage
const generatedUsers = generateRandomUsers();
console.log(generatedUsers);
