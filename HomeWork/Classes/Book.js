"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, price, stochNumber) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.stockNumber = stochNumber;
    }
    //getBookInfo - logs title, author’s name and price to the console
    Book.prototype.getBookInfo = function () {
        return "Title: ".concat(this.title, "\nAuthor: ").concat(this.author.getName(), "\nPrice: ").concat(this.price, "\n");
    };
    Book.prototype.getPrice = function () {
        return this.price;
    };
    Book.prototype.getStock = function () {
        return this.stockNumber;
    };
    return Book;
}());
exports.Book = Book;
