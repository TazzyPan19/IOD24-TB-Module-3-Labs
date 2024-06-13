// NOTE Question 1: 

function ucFirstLetters(strg) {
    found = strg.charAt(0).toUpperCase() + strg.slice(1, 4);
    found2 = strg.charAt(4).toUpperCase() + strg.slice(5);
    return found + found2;
}

console.log(ucFirstLetters("los angeles"));
console.log('');

// NOTE Question 2: 

function truncate(str, max) {
    if (max == 0) {
        return str;
    }
    let output = str.substring(0, max);
    result = max < str.length ? output + '..' : output;
    return result;
}

console.log(truncate('This text will be truncated if it is too long', 1));
console.log(truncate('This text will be truncated if it is too long', 44));
console.log('');

// NOTE Question 3:

const animals = ['Tiger', 'Giraffe'];
console.log(animals);

const newAnimal1 = animals.push('Lion');
const newAnimal2 = animals.push('Dolphin');
console.log(animals);

const newAnimal3 = animals.unshift('Zebra');
const newAnimal4 = animals.unshift('Bird');
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
    let middleVal = animals.length / 2;
    animals[middleVal] = newValue;
}
replaceMiddleAnimal('Fish');
console.log(animals);

function findMatchingAnimals(beginsWith) {
    const testStr = beginsWith.toLowerCase();
    return animals.filter((a) => a.toLowerCase().startsWith(testStr));
}
console.log(findMatchingAnimals('b'));
console.log('');

// NOTE Question 4:

function camelCase(cssProp) {
    let words = cssProp.split("-");
    let newStrg = '';

    words.forEach(word => {
        if (newStrg.length == 0) {
            newStrg = word;
        }
        else {
            newStrg += word.charAt(0).toUpperCase() + word.substring(1);
        }
        });
        return newStrg;
}

function camelCase2(cssProp){
    let newStrg = '';
    for (let word of cssProp.split('-')) {
        newStrg += (newStrg.length == 0) ? word : word.charAt(0).toUpperCase() +
        word.substring(1);
    }
        return newStrg;
    }

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
console.log('');

// NOTE Question 5:

let twentyCents = 0.20
let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

function currencyAddition(float1, float2) {
    let correctFloat1 = float1 *10;
    let correctFloat2 = float2 *10;
    return `$${(correctFloat1 + correctFloat2) / 100}` ;
}

function currencyOperation(float1, float2, operation) {
    let wholeNum1 = float1 * 10;
    let wholeNum2 = float2 * 10;
    let result = 0;
        switch (operation) {
        case '+':
            result = wholeNum1 + wholeNum2;
            break;
        case '*':
            result = wholeNum1 * wholeNum2;
            break;
        case '-':
            result = wholeNum1 - wholeNum2;
            break;
        case '/':
            result = wholeNum1 / wholeNum2;
            break;
        default:
            console.log(`Sorry, we can't perform operation!`);
    }

    return `$${result / 100}`; 

}

function currencyOperationExt(float1, float2, operation, numDecimals) {
    let deci = 10**numDecimals; 
    let wholeNumber1 = float1 * deci;
    let wholeNumber2 = float2 * deci;
    let result = 0;
        switch (operation) {
        case '+' :
            result = wholeNumber1 + wholeNumber2; 
            break;
        case '*' :
            result = wholeNumber1 * wholeNumber2; 
            break;
        case '-' :
            result = wholeNumber1 - wholeNumber2; 
            break;
        case '/' :
            result = wholeNumber1 / wholeNumber2; 
            break;
        default :
            console.log(`Sorry, we can't perform operation!`);
        }

    //now round off any remaining decimals and divide by the same factor you multiplied by
    return `$${Math.round(result) / deci}`;
}

console.log(currencyAddition(0.2, 0.4));
console.log(currencyOperation(0.5, 0.3, '*'));
console.log(currencyOperationExt(0.5, 0.3, '*', 2));