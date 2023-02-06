
export class Author {
    name:string;
    age:number;
    shortBio:string;

    constructor (name:string, age:number, shortBio:string) {
        this.name = name;
        this.age = age;
        this.shortBio = shortBio;
    }

    getName () {
        return this.name;
    }

    getAge () {
        return this.age;
    }

    getFullPersonalInfo () {
        return this.shortBio
    }
}
