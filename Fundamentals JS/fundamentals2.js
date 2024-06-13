// NOTE Question 6: 

const westley = {
    name: 'Westley',
    numFingers: 5
}

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase: (person) => { 
        if (person.numFingers != 6) {
           return 'Nice to meet you.'  
        }
        else {
            return 'You killed my father. Prepare to die.'
        }
    }
}

inigo.greeting(westley)
inigo.greeting(rugen)
console.log(" ")

// NOTE Question 7: The following object represents a basketball game and keeps track of the score as the
// game progresses.

const basketballGame = {
    score: 0,
    numFouls: 0,
    basket() {
        this.score += 2;
        return this;
    },
    freeThrow() {
        this.score++;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foulCnt() {
        this.numFouls ++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score+' with '+this.numFouls+' fouls.');
        return this;
    },
    fullTime() {
        console.log('Fulltime score is '+this.score+' with '+this.numFouls+' fouls.');
    }
}

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foulCnt().halfTime().basket().foulCnt().fullTime();
console.log(" ")

// NOTE Question 8: The object below represents a single city.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const perth = {
    name: 'Perth',
    population: 1_314_000,
    state: 'WA',
    founded: '17 February 1798',
    timezone: 'Australia/Perth'
}

cityFinder = (cityName) => {
    for (let key in cityName) { // iterates over each property in the phone object
        console.log('property: '+key); // prints each object property name (key) in turn
        console.log('value: '+cityName[key]); // prints each object value in turn
    }
}

cityFinder(sydney);
console.log(" ")
cityFinder(perth);
console.log(" ")

// NOTE Question 9: Use the following variables to understand how JavaScript stores objects by reference.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let dog2 = dog1;
dog2 = "Ringo";

let cat2 = cat1;
cat2.name = 'Snowy';

let moreSports = teamSports;
moreSports.push('Soccer', 'Football', 'AFL');

console.log(moreSports);
console.log(dog2);
console.log(cat2);
console.log('');

// NOTE Question 10: The following constructor function creates a new Person object with the given 'name' and
// 'age' values.

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        if (this.age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }

}

const sibling1 = new PersonClass('John', 17);
const sibling2 = new PersonClass('Angel', 20);
const sibling3 = new PersonClass('Gabby', 18);

console.log(`${sibling1.name} can drive: ${sibling1.canDrive()}`);
console.log(`${sibling2.name} can drive: ${sibling2.canDrive()}`);
console.log(`${sibling3.name} can drive: ${sibling3.canDrive()}`);