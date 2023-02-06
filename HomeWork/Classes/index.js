"use strict";
exports.__esModule = true;
var Author_1 = require("./Author");
var Book_1 = require("./Book");
var BookShelf_1 = require("./BookShelf");
var autor1 = new Author_1.Author('David', 40, 'bio');
var autor2 = new Author_1.Author('Jon', 30, 'bio');
var autor3 = new Author_1.Author('Mary', 50, 'bio');
var book1 = new Book_1.Book('Title1', autor1, 35, 3);
var book2 = new Book_1.Book('Title2', autor2, 40, 1);
var book3 = new Book_1.Book('Title3', autor3, 60, 2);
var book4 = new Book_1.Book('Title4', autor3, 50, 1);
//book1.getBookInfo();
var booksShelf = new BookShelf_1.BookShelf([book1, book2]);
//booksShelf.addBook(book3)
//booksShelf.removeBook(book2)
//booksShelf.sellOne('Title1');
//booksShelf.sellSome('Title1', 1)
//console.log(booksShelf)
booksShelf.reviewShelf();
