// NOTE Question 6

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const shapes = ['circle', 'square', 'triangle','rectangle', 'octogon']

function unique(duplicatesArray) {
    const uniqueItems = [];

    duplicatesArray.forEach((element) => {
        if (!uniqueItems.includes(element)) {
            uniqueItems.push(element);
        }
    });

    return uniqueItems;
}

console.log(unique(colours)); 
console.log(unique(testScores)) 
console.log(unique(shapes)) 
console.log('');

// NOTE Question 7

const booksList = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];  

function getBookTitle(bookId) {
    let bookFinder = booksList.find(book => book.id == bookId);
    return bookFinder.title;
}

function getOldBooks() {
    let result = booksList.filter(book => book.year < 1950);
    return result;
}

function addGenre() {
    let result = booksList.map(book => book.genre = 'Classic');
    return result;
}

function getTitles(authorInitial) {
    return booksList
    .filter((book) => book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
    .map((book) => book.title);
}

function lastestBook() {
    let lastestYear = 1800;

    booksList.forEach((book) => {
        if (book.year > lastestYear) {
            lastestYear = book.year;
        }
    });

    return booksList.find((book) => book.year == lastestYear)
}

// console.log(getBookTitle(1));
// console.log(getBookTitle(2));
// console.log(getOldBooks());
addGenre();
// console.log(booksList);
console.log(getTitles('a'));
// console.log(lastestBook());
console.log('');

// NOTE Question 8:

const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([ 
    ['David', '04332277'],
    ['Elizabeth', '04776622'],
    ['Fred', '04373737']
])

phoneBookABC.set('Caroline', '0455812941');

function printPhoneBook(contacts) {
    for (let entry of contacts) {
    console.log(entry)
    }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]) );

console.log([...phoneBook.keys()]);
console.log('');

// NOTE Question 9:

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let total = 0;

    for (let [employee, salary] of Object.entries(salaries)) {
        total += salary;
    }
    // console.log(total.toString().length)
    return total;
} 

function topEarner(salaries) {
  let topSalary = 0;
  let topEarner = "";

  for (let employee in salaries) {
    if (salaries[employee] > topSalary) {
      topSalary = salaries[employee];
      topEarner = employee;
    }
  }
  return topEarner;
}

console.log(`$${sumSalaries(salaries)}`);
console.log(`${topEarner(salaries)} has earned the most of all the others!`);
console.log('');

// NOTE Question 10:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());

console.log(today.getHours() + ' hours have passed so far today');
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today');
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + ' seconds have passed today');

const birthday = new Date('1999-12-09');
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
console.log(`I am ${years} years, ${months} months and ${days} days old`);

function daysInBetween(date1, date2) {
    let diff = date1 - date2;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let differenceDays = Math.floor(diff / millisecondsPerDay);
    return Math.abs(differenceDays);
}

console.log(`Days between my birthday and today: ${daysInBetween(new Date('1999-12-09'), new Date('2024-05-26'))} days`);