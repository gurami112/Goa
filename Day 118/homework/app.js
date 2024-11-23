class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }

    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}


class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);
        this.author = author;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} by ${this.author}, ${this.genre}, published in ${this.year}.`;
    }
}

class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `${this.title}, Issue ${this.issueNumber}, published in ${this.year}.`;
    }
}

const book1 = new Book('The Great Gatsby', 1925, 'F. Scott Fitzgerald', 'Novel');
const magazine1 = new Magazine('National Geographic', 2021, 5);

console.log(book1.getSummary());
book1.borrowItem();
book1.borrowItem(); 
book1.returnItem();
book1.borrowItem(); 

console.log(magazine1.getSummary());
magazine1.borrowItem();
magazine1.returnItem();