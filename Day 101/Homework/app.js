// Classes-ის შესახებ (10 დავალება):

// 1. კლასის შექმნა და ინიციალიზაცია
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // 2. მეთოდის შექმნა და გამოძახება
    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    // 3. სტატიკური მეთოდების გამოყენება
    static compareUsers(user1, user2) {
        return user1.email === user2.email;
    }
}

// Example Usage
const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");
user1.displayInfo();
user2.displayInfo();
console.log(User.compareUsers(user1, user2));

// 4. Getters და Setters
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Price must be positive!");
        }
        this._price = value;
    }
}

// 5. მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentID}`;
    }
}

// Example Usage
const student = new Student("Charlie", 21, "S12345");
console.log(student.getDetails());

// 7. Privileged მეთოდები
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// 8. Protected თვისებები და მემკვიდრეობა
class Appliance {
    constructor(power) {
        this._power = power; // Protected property
    }
}

class WashingMachine extends Appliance {
    constructor(power, capacity) {
        super(power);
        this.capacity = capacity;
    }
}

// 9. Static თვისებები და მეთოდები
class Counter {
    static count = 0;

    static increment() {
        Counter.count += 1;
    }
}

Counter.increment();
console.log(Counter.count);

// 10. კლასების მასივი
class Book {
    constructor(title) {
        this.title = title;
    }
}

const books = [new Book("Book 1"), new Book("Book 2"), new Book("Book 3")];
books.forEach(book => console.log(book.title));

// Maps-ის შესახებ (10 დავალება):

// 1. Map-ის ინიციალიზაცია მონაცემებით
const cities = new Map([
    ["Tbilisi", 1000000],
    ["Batumi", 150000],
    ["Kutaisi", 200000]
]);

// 2. Map-ის ელემენტის განახლება
cities.set("Batumi", 160000);

// 3. Map-ის `for...of` ციკლი
const currencies = new Map([
    ["USD", "Dollar"],
    ["EUR", "Euro"],
    ["GEL", "Lari"]
]);

for (const [code, name] of currencies) {
    console.log(`${code} -> ${name}`);
}

// 4. Map-ის გაერთიანება
const prices = new Map([
    ["Apple", 2],
    ["Banana", 1]
]);

const quantities = new Map([
    ["Apple", 3],
    ["Banana", 5]
]);

const totalPrices = new Map();
prices.forEach((price, item) => {
    totalPrices.set(item, price * quantities.get(item));
});
console.log(totalPrices);

// 5. Map-ის კლონი
const countries = new Map([
    ["Georgia", "Tbilisi"],
    ["USA", "Washington"]
]);

const countriesClone = new Map(countries);

// 6. Map-ის ელემენტების დათვლა
const games = new Map([
    ["Game1", 9.5],
    ["Game2", 8.0]
]);
console.log(games.size);

// 7. Map-ის ელემენტების წაშლა
const products = new Map([
    ["Product1", 10],
    ["Product2", 15]
]);

products.clear();
console.log("All products cleared!");

// 8. Map და მასივის გარდაქმნა
const sports = new Map([
    ["Soccer", 11],
    ["Basketball", 5]
]);

const sportsArray = Array.from(sports);
console.log(sportsArray);

// 9. Map-ის ძიება მნიშვნელობებით
const animals = new Map([
    ["Lion", "Savannah"],
    ["Penguin", "Antarctica"]
]);

const result = [...animals].filter(([animal, habitat]) => habitat === "Savannah");
console.log(result.map(([animal]) => animal));

// 10. Map-ის დაგროვება Reduce-ით
const students = new Map([
    ["Alice", 85],
    ["Bob", 92]
]);

const averageScore = [...students.values()].reduce((sum, score) => sum + score, 0) / students.size;
console.log(averageScore);

// Classes და Maps გაერთიანებული (10 დავალება):

// 1. კლასი `Map`-ით და მეთოდით
class Library {
    constructor() {
        this.books = new Map();
    }

    addBook(title, author) {
        this.books.set(title, author);
    }
}

// 2. Map კლასის თვისებად
class Store {
    constructor() {
        this.products = new Map();
    }

    getPrice(product) {
        return this.products.get(product) || "Not Found";
    }
}

// 3. Map-თან მუშაობის მეთოდების შექმნა
class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(name, phone) {
        this.contacts.set(phone, name);
    }

    getContact(phone) {
        return this.contacts.get(phone) || "Not Found";
    }
}

// 4. კლასი `Map`-ის ელემენტების ჩამონათვალით
class Zoo {
    constructor() {
        this.animals = new Map();
    }

    listAnimals() {
        return [...this.animals.keys()];
    }
}

// 5. Map და მემკვიდრეობა
class Inventory {
    constructor() {
        this.items = new Map();
    }
}

class StoreInventory extends Inventory {
    getStock(item) {
        return this.items.get(item) || "Out of Stock";
    }
}

// 6. Map-ის დამუშავება კლასის მეთოდებით
class Classroom {
    constructor() {
        this.students = new Map();
    }

    addStudent(id, score) {
        this.students.set(id, score);
    }

    getAverageScore() {
        const scores = [...this.students.values()];
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    }
}

// 7. Map და კონსტრუქტორის ინიციალიზაცია
class CountryDirectory {
    constructor(countries) {
        this.countries = countries;
    }

    getCapital(country) {
        return this.countries.get(country) || "Not Found";
    }
}

// 8. Map-ის გამოყენება კლასის ინტერაქტიულობისთვის
class ShoppingCart {
    constructor() {
        this.cart = new Map();
    }

    addItem(product, quantity) {
        const currentQty = this.cart.get(product) || 0;
        this.cart.set(product, currentQty + quantity);
    }

    getTotalItems() {
        return [...this.cart.values()].reduce((sum, qty) => sum + qty, 0);
    }
}

// 9. Map-თან მუშაობა კონსტრუქტორის მეშვეობით
class RestaurantMenu {
    constructor(menu) {
        this.menu = menu;
    }

    getItemPrice(item) {
        return this.menu.get(item) || "Not Found";
    }
}

// 10. Map-ის გაერთიანება კლასში და ინფორმაციის დალაგება
class StudentGrades {
    constructor(grades) {
        this.grades = grades;
    }

    getTopStudent() {
        let topStudent = [...this.grades.entries()].reduce((max, entry) => entry[1] > max[1] ? entry : max);
        return topStudent[0];
    }
}
