// NOTE Question 1: 

function makeCounter(startFrom, incrementBy) {
    let currentCount = 0;

    if (incrementBy == undefined && startFrom) {
        currentCount = startFrom;
        return function() {
            currentCount++;
            console.log(`Output B: ${currentCount}`)
                return currentCount;
            };
    }

    else if (startFrom && incrementBy) {
        currentCount = startFrom;
        return function() {
            currentCount += incrementBy;
            console.log(`Output C: ${currentCount}`)
                return currentCount;
            };
    }

    else {
        return function() {
            currentCount++;
            console.log(`Output A: ${currentCount}`)
                return currentCount;
            };
    }

}

let counter1 = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter(6);
let counter4 = makeCounter(5,5);

// counter1(); // 1
// counter1(); // 2
// counter2(); // 1
// counter2(); // 2
// counter3(); // 7
// counter3(); // 8
// counter4(); // 10
// counter4(); // 15
// console.log('');

// NOTE Question 2: 

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

// setTimeout(delayMsg, 10_000, '#1: Delayed by 1000ms');

// const clearThis = setTimeout(delayMsg, 10000, '#2: Delayed by 100ms');

// setTimeout(delayMsg, 20, '#3: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#4: Delayed by 0ms');
// delayMsg('#5: Not delayed at all')

// clearTimeout(clearThis);

// NOTE Question 3: 

function printMe(msg) {
    console.log(`printing debounced message ${msg}`);
}

function debounce(func, ms) {
    let timeoutCall;
    
    return function(msg) {
        clearTimeout(timeoutCall);
        
        timeoutCall = setTimeout(func, ms, msg);
    };
}

// printMe = debounce(printMe, 1200);

// setTimeout(printMe, 100, 'message #1');
// setTimeout(printMe, 200, 'message #2');
// setTimeout(printMe, 300, 'message #3');

// NOTE Question 4: Fibonacci

function printFibonacci(delay) {
    let firstnum = 0;
    let secondnum = 1;
    let sum = 0;
    
    setInterval(function repeatThis() {
        console.log(`First Number: ${firstnum} \nSecond Number: ${secondnum}`);

        sum = firstnum + secondnum;
        firstnum = secondnum;
        secondnum = sum;
        console.log('Next Number: '+sum+'\n ');
        
    }, delay); 
}

function printFibonacciTimeouts(delay, limit) {
    let firstnum = 0;
    let secondnum = 1;
    let sum = 0;
    let counter = 1;

    setTimeout(function repeatThis(current) {
        console.log(`First Number: ${firstnum} \nSecond Number: ${secondnum}`);
        
        sum = firstnum + secondnum;
        firstnum = secondnum;
        secondnum = sum;
        console.log('Next Number: '+sum+'\n ');

        if (current < limit) setTimeout(repeatThis, delay, current+1);

    }, delay, counter);
}

// printFibonacci(3000);
printFibonacciTimeouts(3000, 10);