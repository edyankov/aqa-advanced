// EBook class — extends Book and adds the fileFormat property

import { Book } from './Book.mjs';

export class EBook extends Book {
    // Private field for file format
    #fileFormat;

    constructor(title, author, year, fileFormat) {
        // Calling the parent constructor
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    // Getter and setter for fileFormat with validation
    get fileFormat() {
        return this.#fileFormat;
    }
    set fileFormat(value) {
        const allowedFormats = ['pdf', 'epub', 'mobi', 'fb2', 'txt'];
        if (typeof value === 'string' && allowedFormats.includes(value.toLowerCase())) {
            this.#fileFormat = value.toLowerCase();
        } else {
            console.error(`Invalid format. Allowed formats: ${allowedFormats.join(', ')}.`);
        }
    }

    // Overridden printInfo — adds format information
    printInfo() {
        console.log(
            `Title: "${this.title}", Author: ${this.author}, Year: ${this.year}, Format: ${this.#fileFormat}`
        );
    }

    // Static method — creates an EBook from an existing Book
    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            console.error('First argument must be an instance of Book.');
            return null;
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}
