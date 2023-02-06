import { Book } from "./Book"


export class BookShelf {
    books: Book[];
     
    constructor (books:Book[]) {
        this.books=books;
    }

    //addBook(book) - adds a book to the shelf
    addBook(books:Book) {
        return this.books.push(books)
    }

    //removeBook(book) - removes book from the shelf. If book doesn’t exist - print to console “No such book on that shelf”
    removeBook(books:Book){
        
        const bookIndex = this.books.indexOf(books)
        return bookIndex >=0 ? this.books.splice(bookIndex, 1) : console.log(`No such book on that shelf`)

    }

    //sellOne(title) - Gets one book of title from stock. If book stockNumber = 0 after it’s being sold - removes the book from shelf.
    sellOne(title: string){
        const bookByTitle = (this.books as any).find((item) => item.title == title)
        const bookStockNumber = bookByTitle.stockNumber
        
        if (bookByTitle.stockNumber > 0) {
            bookByTitle.stockNumber = bookStockNumber -1;

            if (bookByTitle.stockNumber == 0) {
                this.removeBook(bookByTitle);
            }

        } else {
            console.log('Book is not in the stock')
        }
    }

    //sellSome(title, quantity) - sells a particular quantity of books. If there are less books than requested - throw an error - ‘not enough books in stock’
    sellSome(title:string, quantity:number) {
        const bookByTitle = (this.books as any).find((item) => item.title == title)
        const bookStockNumber = bookByTitle.stockNumber

        if (bookByTitle.stockNumber >= quantity) {
            bookByTitle.stockNumber = bookStockNumber - quantity;

            if (bookByTitle.stockNumber == 0) {
                this.removeBook(bookByTitle);
            }
        } else {
            throw('not enough books in stock')
        }

    }    

    //reviewShelf() - print out all the books infos on the shelf
    reviewShelf() {
        const shelfInfos = this.books.map((item) => item.getBookInfo())
        console.log(shelfInfos)
    }
} 