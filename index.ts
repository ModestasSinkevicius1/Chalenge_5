import randColor from './utilities/random_color.js';

let message: string = "Hello TS";
console.log(message);

//Variables

let surname: string = 'John';
let age: number = 30;

let full: string = surname + " " + age;

console.log(full);

//Arrays

let names : string[] = ['Josh', 'Jimmy', 'James', 'Joohny', null];

console.log(...names);

//Objects

let book:{
    ISBN: string;
    author: string;
    name: string;
    published: Date;
}

book = {
    ISBN: '1241422121BQ',
    author: 'Bill Gates',
    name: 'How to use Windows',
    published: new Date('2012-09-20'),
}

const dateMonth: string = book.published.getMonth().toString();
const dateDay: string = book.published.getDate().toString();

const date: string = `${book.published.getFullYear()}-${dateMonth.padStart(2, '0')}-${dateDay.padStart(2, '0')}`;
console.log(`${book.name} | ${book.author} | ${book.ISBN} | ${date}`);

//Function

let countLetters : (name: string) => number;

countLetters = function(name: string){
    return name.length;
}

console.log(countLetters('fsljeljewljegwjewlewejwlwejw'));

console.log(randColor());

const l : number | string = 1;

console.log(typeof(l));





