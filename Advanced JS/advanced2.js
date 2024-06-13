// NOTE Question 5:

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

// car.description();

// setTimeout(() => {
//   car.description();
//   },200,);

// car = {...car, year: 1954};

// let boundCar = car.description.bind(car);

// setTimeout(boundCar, 400); 

// car = {...car, year: 1977};


// NOTE Question 6: Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

function multiply(a, b) {
  console.log(a * b);
}

Function.prototype.delay = function(ms) {
  let delayfunc = this;
  return function(arg1, arg2) {
    setTimeout(delayfunc, ms, arg1, arg2);
  }
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// NOTE Question 7: Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Person.prototype.toString = function personToString() {
  return `This is ${this.name} they are a ${this.age} year old, ${this.gender}.`;
};

Student.prototype.toString = function studentToString() {
  return `This is ${this.name} they are a ${this.age} year old, ${this.gender}. Who attends: ${this.cohort} Cohort.`;
};

const person1 = new Person("James Brown", 73, "male");
const person2 = new Person("Natalie Brown", 32, "female");

const student1 = new Student("Troy Baker", 24, "male", "Senior High School");
const student2 = new Student("Luka Tulio", 21, "male", "Freshman High School");

// console.log("person1: " + person1 + "\nperson2: " + person2); //prints person1: [object Object]
// console.log("student1: " + student1 + "\nstudent2: " + student2); //prints person1: [object Object]

// NOTE Question 8: The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision ? precision : 1000;
  }

  precisionStart() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime) {
      super(prefix);
      this.wakeupTime = wakeupTime ? wakeupTime : '06:00'
    }

    checkDisplay() {
      const now = new Date();
      const wakeupHours = this.wakeupTime.substring(0, 2);
      const wakeupMins = this.wakeupTime.substring(3);
  
      if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
        console.log('Wake Up!');
        this.stop();
  
      } else {
        this.display();
      }
    }
  
    wakeupStart() {
      this.checkDisplay();
      this.timer = setInterval(() => this.checkDisplay(), 800);
    }
}

// const myClock = new DigitalClock('Current Local Time:');
// myClock.start();

// const myPrecisionClock = new PrecisionClock('Current Local Time:', 2000);
// myPrecisionClock.precisionStart();

// const myAlarmClock = new AlarmClock('Current Local Time:', '15:05');
// myAlarmClock.wakeupStart();

// NOTE - Question 9:

function randomDelay() {
  let randTime = Math.floor(Math.random() * 20);

  return new Promise((resolve, reject) => {
    setTimeout((randTime % 2 == 0) ? resolve : reject, randTime*1000, randTime);
  });
}

randomDelay()
  .then((result) => {
    console.log(`Successful delay response! Delay time: ${result}secs`);
  })
  .catch((result) => {
    console.log(`Failed to produce a successful delay response! Delay time: ${result}secs`);
  });

// NOTE - Question 10:

// import fetch from "node-fetch";
// globalThis.fetch = fetch;

// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

//   fetchURLData("https://jsonplaceholder.typicode.com/todos/404")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

// async function asyncFetchURLData(url) {
//   let fetchResponse = await fetch(url);
  
//   if (fetchResponse.status === 200) {
//     let responseJson = await fetchResponse.json();
//     return responseJson;
//   } else {
//     throw new Error(`Request failed with status ${fetchResponse.status}`);
//   }
// }

// async function asyncFetchMultipleURLData(urls) { 
//   return Promise.all(urls.map(async (url) => {
//     let response = await fetch(url);
//     return response.json();
//   }));
// }

// try {
//   let responseData1 = await
//   asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(responseData1)

//   let responseData2 = await
//   asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/2']);
//   console.log(responseData2) 

//   let responseData3 = await
//   asyncFetchURLData('https://jsonplaceholder.typicode.com/404');
//   console.log(responseData3) 

// } 
// catch (error) {
//   console.log(error.message);
// }

