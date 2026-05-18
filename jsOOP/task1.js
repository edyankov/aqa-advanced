// task1.mjs — demonstration of Book and EBook classes

import { Book } from './Book.mjs';
import { EBook } from './EBook.mjs';

// 1. Create several Book instances and call printInfo
const book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954);
const book2 = new Book('Forest Song', 'Lesya Ukrainka', 1911);
const book3 = new Book('Shadows of Forgotten Ancestors', 'Mykhailo Kotsiubynsky', 1911);

console.log('--- Physical books ---');
book1.printInfo();
book2.printInfo();
book3.printInfo();

// 2. Create an EBook instance and call its printInfo
const ebook1 = new EBook('Clean Code', 'Robert C. Martin', 2008, 'pdf');

console.log('\n--- E-Book ---');
ebook1.printInfo();

// 3. Demonstrating getters and setters
console.log('\n--- Getters and setters ---');
console.log('ebook1 title via getter:', ebook1.title);

// Setter in action
ebook1.year = 2010;
console.log('Updated ebook1 year:', ebook1.year);

// Validation check — passing invalid value
console.log('Trying to assign a string as year:');
ebook1.year = 'not a number';   // Will print an error to console
console.log('Year unchanged:', ebook1.year);

// 4. Static method getOldestBook (accepts array of both classes)
console.log('\n--- Oldest book ---');
const allBooks = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(allBooks);
console.log('Oldest book:');
oldestBook.printInfo();

// 5. Static method EBook.fromBook — create EBook from Book
console.log('\n--- Creating EBook from Book ---');
const ebook2 = EBook.fromBook(book2, 'epub');
ebook2.printInfo();

// instanceof check
console.log('\n--- instanceof check ---');
console.log('ebook1 instanceof EBook:', ebook1 instanceof EBook);  // true
console.log('ebook1 instanceof Book:', ebook1 instanceof Book);    // true (because of inheritance)
console.log('book1 instanceof EBook:', book1 instanceof EBook);    // false