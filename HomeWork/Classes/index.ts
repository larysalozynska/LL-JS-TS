import { Author } from "./Author";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

const autor1 = new Author('David', 40, 'bio')
const autor2 = new Author('Jon', 30, 'bio');
const autor3 = new Author('Mary', 50, 'bio');


const book1 = new Book('Title1', autor1 , 35, 3)
const book2 = new Book('Title2', autor2 , 40, 1)
const book3 = new Book('Title3', autor3 , 60, 2)
const book4 = new Book('Title4', autor3 , 50, 1)

//book1.getBookInfo();

const booksShelf = new BookShelf ([book1, book2, book4])
//booksShelf.addBook(book3)
//booksShelf.removeBook(book2)
//booksShelf.sellSome('Title1', 3)
//booksShelf.sellOne('Title4');
//console.log(booksShelf)
//booksShelf.reviewShelf()