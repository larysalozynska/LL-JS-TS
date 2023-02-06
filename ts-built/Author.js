var Author = /** @class */ (function () {
    function Author(name, age, shortBio) {
        this.name = name;
        this.age = age;
        this.shortBio = shortBio;
    }
    Author.prototype.getName = function () {
        return this.name;
    };
    return Author;
}());
var autor1 = new Author('David', 40, 'bio');
console.log(autor1.getName());
