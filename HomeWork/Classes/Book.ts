import { Author } from "./Author";

export class Book {
    title:string;
    author: Author;
    price:number;
    stockNumber: number;

    constructor (title:string, author:Author, price:number, stochNumber:number ) {
        this.title=title;
        this.author=author;
        this.price=price;
        this.stockNumber=stochNumber;
    
    }

    //getBookInfo - logs title, author’s name and price to the console
    getBookInfo () {
        return `Title: ${this.title}\nAuthor: ${this.author.getName()}\nPrice: ${this.price}\n`
    }

    getPrice (){
        return this.price;
    }

    getStock () {
        return this.stockNumber;
    }
}
