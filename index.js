"use strict";
exports.__esModule = true;
var random_color_js_1 = require("./utilities/random_color.js");
var message = "Hello TS";
console.log(message);
//Variables
var surname = 'John';
var age = 30;
var full = surname + " " + age;
console.log(full);
//Arrays
var names = ['Josh', 'Jimmy', 'James', 'Joohny', null];
console.log.apply(console, names);
//Objects
var book;
book = {
    ISBN: '1241422121BQ',
    author: 'Bill Gates',
    name: 'How to use Windows',
    published: new Date('2012-09-20')
};
var dateMonth = book.published.getMonth().toString();
var dateDay = book.published.getDate().toString();
var date = "".concat(book.published.getFullYear(), "-").concat(dateMonth.padStart(2, '0'), "-").concat(dateDay.padStart(2, '0'));
console.log("".concat(book.name, " | ").concat(book.author, " | ").concat(book.ISBN, " | ").concat(date));
//Function
var countLetters;
countLetters = function (name) {
    return name.length;
};
console.log(countLetters('fsljeljewljegwjewlewejwlwejw'));
console.log((0, random_color_js_1["default"])());
var l = 1;
console.log(typeof (l));
