"use strict";
exports.__esModule = true;
exports.BookShelf = void 0;
var BookShelf = /** @class */ (function () {
    function BookShelf(books) {
        this.books = books;
    }
    //addBook(book) - adds a book to the shelf
    BookShelf.prototype.addBook = function (books) {
        return this.books.push(books);
    };
    //removeBook(book) - removes book from the shelf. If book doesn’t exist - print to console “No such book on that shelf”
    BookShelf.prototype.removeBook = function (books) {
        var bookIndex = this.books.indexOf(books);
        return bookIndex >= 0 ? this.books.splice(bookIndex, 1) : console.log("No such book on that shelf");
    };
    //sellOne(title) - Gets one book of title from stock. If book stockNumber = 0 after it’s being sold - removes the book from shelf.
    BookShelf.prototype.sellOne = function (title) {
        var bookByTitle = this.books.find(function (item) { return item.title == title; });
        var bookStockNumber = bookByTitle.stockNumber;
        if (bookByTitle.stockNumber > 0) {
            bookByTitle.stockNumber = bookStockNumber - 1;
            if (bookByTitle.stockNumber == 0) {
                this.removeBook(bookByTitle);
            }
        }
        else {
            console.log('Book is not in the stock');
        }
    };
    //sellSome(title, quantity) - sells a particular quantity of books. If there are less books than requested - throw an error - ‘not enough books in stock’
    BookShelf.prototype.sellSome = function (title, quantity) {
        var bookByTitle = this.books.find(function (item) { return item.title == title; });
        var bookStockNumber = bookByTitle.stockNumber;
        if (bookByTitle.stockNumber >= quantity) {
            bookByTitle.stockNumber = bookStockNumber - quantity;
            if (bookByTitle.stockNumber == 0) {
                this.removeBook(bookByTitle);
            }
        }
        else {
            throw ('not enough books in stock');
        }
    };
    //reviewShelf() - print out all the books infos on the shelf
    BookShelf.prototype.reviewShelf = function () {
        var shelfInfos = this.books.map(function (item) { return item.getBookInfo(); });
        console.log(shelfInfos);
    };
    return BookShelf;
}());
exports.BookShelf = BookShelf;
