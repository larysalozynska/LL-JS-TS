"use strict";
exports.__esModule = true;
exports.Author = void 0;
var Author = /** @class */ (function () {
    function Author(name, age, shortBio) {
        this.name = name;
        this.age = age;
        this.shortBio = shortBio;
    }
    Author.prototype.getName = function () {
        return this.name;
    };
    Author.prototype.getAge = function () {
        return this.age;
    };
    Author.prototype.getFullPersonalInfo = function () {
        return this.shortBio;
    };
    return Author;
}());
exports.Author = Author;
