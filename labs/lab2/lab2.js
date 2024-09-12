///   1   //////////////////////////////////////////////////////////////////
const greeter = (myArray, counter) => {
    const greetText = "Hello";
    for (let index = 0; index < myArray.length; index++) {
        console.log(`${greetText} ${myArray[index]}`);
    }
}



///   2   //////////////////////////////////////////////////////////////////
const capitalize = (word) => {
    const capitalizedWord = ({...letters}) => {
        let capitalizedWord = letters[0].toUpperCase();
        for (let letter = 1; letter < word.length; letter++) {
            capitalizedWord+= word[letter].toLowerCase();
        }
        return capitalizedWord;
    }
    return capitalizedWord(word);
}



///   3   //////////////////////////////////////////////////////////////////
const capitalizeMap = (wordArray) => {
    const wordMap = wordArray.map(word => capitalize(word));
    return wordMap;
}



///   4   //////////////////////////////////////////////////////////////////
const filterLessThan20 = (numberArray) => {
    return numberArray.filter(number => number < 20);
}



///   5   //////////////////////////////////////////////////////////////////
const calculateSum = (numArray) => {
    return numArray.reduce((num, total) => total+num);
}

const calculateProduct = (numArray) => {
    return numArray.reduce((num, total) => total*num);
}



///   6   //////////////////////////////////////////////////////////////////
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `${this.model} ${this.year}`
    }

}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance
    }

    info() {
        return `${this.model} has a balance of ${this.balance.toFixed(2)}`
    }
}

const car = new Car("Pontiac Firebird", 1976)
const sedan = new Sedan("Volvo SD", 2018, 30000)


const getResults = () => {
    console.log(`===========================================`);
    console.log(`=========== GREETING ======================`);
    console.log(`===========================================`);
    console.log(`INPUT: ['Randy Savage', 'Ric Flair', 'Hulk Hogan']  \nEXPECTED: \nHello Randy Savage \nHello Ric Flair  \nHello Hulk Hogan  \n\nOUTPUT: `)
    greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== CAPITALIZE ====================`);
    console.log(`===========================================`);
    console.log(`INPUT: fooBar  |   EXPECTED: Foobar  |   OUTPUT: ${capitalize("fooBar")} `);
    console.log(`INPUT: nodeJs  |   EXPECTED: Nodejs  |   OUTPUT: ${capitalize("nodeJs")} `);
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== CAPITALIZED COLORS ============`); // HAD TO MOVE OUTCOMES TO THE NEXT LINE BECAUSE THEY WOULDN'T
    console.log(`===========================================`); // DISPLAY PROPERLY USING STRING CONCATENATION
    console.log(`INPUT: ["red", "blue", "green"]  |  EXPECTED: ['Red', 'Blue', 'Green']  |  OUTPUT:`);
    console.log(capitalizeMap(["red", "blue", "green"]));
    console.log(`INPUT: ["yeLLOw", "oRaNgE", "bLACK"]  |  EXPECTED: ['Yellow, 'Orange', 'Black']  |  OUTPUT:`);
    console.log(capitalizeMap(["yeLLOw", "oRaNgE", "bLACK"]));
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== FILTER LESS THAN 20 ===========`);
    console.log(`===========================================`);
    console.log(`INPUT: [1, 60, 34, 30, 20, 5] |  EXPECTED: [1, 5]  |  OUTPUT:`);
    console.log(filterLessThan20([1, 60, 34, 30, 20, 5]));
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== CALCULATE SUM =================`);
    console.log(`===========================================`);
    console.log(`INPUT: [1, 2, 3, 4]  |  EXPECTED: 10  |  OUTPUT: ${calculateSum([1, 2, 3, 4])}`);
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== CAPITALIZED PRODUCT ===========`);
    console.log(`===========================================`);
    console.log(`INPUT: [1, 2, 3, 4]  |  EXPECTED: 24  |  OUTPUT: ${calculateProduct([1, 2, 3, 4])}`);
    console.log(``);
    console.log(``);
    console.log(`===========================================`);
    console.log(`=========== CLASSES =======================`);
    console.log(`===========================================`);
    console.log(`EXPECTED: Pontiac Firebird 1976  |  OUTPUT: ${car.details()}`);
    console.log(`EXPECTED: Volvo SD has a balance of 30000.00  |  OUTPUT: ${sedan.info()}`);
    console.log(``);
}

getResults()

