// Book class — base class for a book

export class Book {
    // Private fields — declared with # before the constructor
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        // Assignment through setters — so validation works immediately
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getters and setters for title
    get title() {
        return this.#title;
    }
    set title(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this.#title = value;
        } else {
            console.error('Invalid title. It must be a non-empty string.');
        }
    }

    // Getters and setters for author
    get author() {
        return this.#author;
    }
    set author(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this.#author = value;
        } else {
            console.error('Invalid author. It must be a non-empty string.');
        }
    }

    // Getters and setters for year
    get year() {
        return this.#year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === 'number' && value > 0 && value <= currentYear) {
            this.#year = value;
        } else {
            console.error(`Invalid year. It must be a number between 1 and ${currentYear}.`);
        }
    }

    // Method for displaying book information
    printInfo() {
        console.log(`Title: "${this.#title}", Author: ${this.#author}, Year: ${this.#year}`);
    }

    // Static method — finds the oldest book in the array
    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            console.error('Argument must be a non-empty array of books.');
            return null;
        }
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}
