"use strict";
/* let js = 'amazing';
console.log(40 + 8 + 23);
let fName = "fName";
console.log(fName);
 */

/* let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "javascriptIsFun"); */

// Dynamic type
/*
let javascriptIsFun2 = true;
console.log(typeof javascriptIsFun2);
javascriptIsFun2 = "Yes"
console.log(typeof javascriptIsFun2);

// Undefine

let year;
console.log(typeof year);
console.log(typeof null); */

// Reassignment
/* let age = 30;
age = 31;
const YEAR = 2025;

var job = "Programmer";

job = "teacher";
console.log(job);
 */

/* const now = 2027;
const ageJonas = now - 1991;
console.log(ageJonas);

const firstName = "Ashutosh";
const lastName = "DWIVEDI";

console.log(firstName + " " + lastName);
 */

// alert("what is going on")

/* function logger() {
    console.log("My Name is JS")
}
 */
//calling / running / invoking functiojn
/* logger();
logger();
logger();
 */

/* function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}
const appleJuice=fruitProcessor(5,0);

console.log(appleJuice);

console.log(fruitProcessor(2,4));

function calAge(birthYear){
    const age=2037-birthYear;

    return age;
}
console.log('This is function '+calAge(1991));

const calAge2=function (birthYear){
    const age=2037-birthYear;

    return age;
}

console.log('This is expression '+calAge2(1991)); */

/* const calAge2=function (birthYear){
    const age=2037-birthYear;

    return age;
}
//Arrow function

const calAge3 = birthYear => 2037-birthYear;

console.log('This is arrow function ' + calAge3(1991));

console.log('This is expression function '+calAge2(1991));

const yearUntilRetriment=(birthYear,firstName)=>{
    const age=2037-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetriment(1991,'Jonas'));
console.log(yearUntilRetriment(1980,'Bob')); */

/* function cutPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const appelPieces=cutPieces(apples);
    const oranePieces=cutPieces(oranges);
    const juice=`Juice with ${appelPieces} pieces of apples and ${oranePieces} pieces of oranges`;
    return juice
}
const appleJuice=fruitProcessor(5,0);

console.log(fruitProcessor(2,3))

 */

/* function yearUntilRetriment(birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return `${firstName} retires in ${retirement} years`;

    if (retirement > 0) {
        return retirement;
    }
    else {
        return -1;
    }
}
console.log(yearUntilRetriment(1991, 'Jonas'));
console.log(yearUntilRetriment(1770, 'Bob'));  */

// Assignments

/* const calcAverage = (v1, v2, v3) => (v1 + v2 + v3) / 3;



function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {

        console.log(avgKoalas * 2)
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;

    }
    else if (avgKoalas >= avgDolphins * 2) {
        console.log(avgDolphins * 2)
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;

    }
    else {
        return `No team wins...`;

    }

}

let scoreDolphins = calcAverage(44, 23, 71);

let scoreKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(scoreDolphins, scoreKoalas))

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(scoreDolphins, scoreKoalas)); */

// Array
// const friends = ['Michael', 'Steven', 'Peter'];
/* console.log(friends);

const years = new Array(19989, 2001, 2003);
console.log(years);

console.log(friends[0]);
console.log(years[100]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[3] = "Jay";
console.log(friends);

const firtName = "AD";
const jonas = ['AD', friends]
console.log(jonas); */

//Excercise function
/*
const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1900, 1967, 2002, 2010];

// console.log(calAge(years2));


const age1 = [calAge(years2[0]), calAge(years2[1]), calAge(years2[2]), calAge(years2[3])];
console.log(age1);

const friends = ['Michael', 'Steven', 'Peter'];

///Push method
console.log(friends.push("Jay"));

// unshift
console.log(friends.push("John"));

//
console.log(friends);

// remove elements

console.log(friends.pop());
console.log(friends);

// shift

console.log(friends.shift());

// index of

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Ssdfds'));

// includes

console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log("you have a friend");
}
 */

// Array as objects

/* const john = {
    firstname: 'John',
    lastname: 'Dow',
    age: 2037 - 1991,
    birthyear: 1991,
    job: 'teacher',
    friends: ["Michel", 'Peter', 'Steven'],
    calcAge: function (birthyear) {
        return 2037 - birthyear;
    },
    hasDriverLience: false,
    getSummary: function () {

        return `${this.firstname} is a ${this.calcAge()} year old ${this.job} has ${this.hasDriverLience ? 'a' : 'no'} "driver}}`

    }
}

console.log(john);
console.log(john["firstname"]);
console.log(john.friends);
console.log(john);
john.location = "Portugal";
john["twitter"] = "@abc";

console.log(john, john.length);

console.log(john.calcAge(1991));
console.log(john["calcAge(1991)"]);

console.log(john.getSummary());
 */

/* console.log("Looping")
/*
for (let rep = 1; rep <= 11; rep++) {
    console.log(`the counter is ${rep}`)
} */

/*
const john = [
    'John',
    'Dow',
    2037 - 1991,
    1991,
    'teacher',
    ["Michel", 'Peter', 'Steven']
]

for (let i = 0; i < john.length; i++) {

     console.log(i); 
    console.log(john[i]);
} 
*/

/* let arrT1 = [1, 2, 4, "error", "6", 5, 10];

let arrT2 = [11, 12, 15, -1, 4, 100];

const calcTempAmplitue = function (temps1, temps2) {
  let temps = temps1.concat(temps2);
  let max = temps1[0];
  let min = temps1[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);10
  return max - min;
};
console.log(calcTempAmplitue(arrT1, arrT2)); */

/* const measureKelvin = function () {
  let kelvin = 0;
  const measure = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };
  console.table(measure);

  kelvin = Number(measure.value) + 273;10

  return kelvin;
};

console.log(measureKelvin());
 */

// Array transformed to sting
// What is the X days?
/* const printForecast = function (arr) {
  let stringPrint = "";

  for (let i = 0; i < arr.length; i++) {
    stringPrint = stringPrint + `...${arr[i]} in ${i + 1} days`;
  }
  console.log(stringPrint);
};

printForecast([17, 21, 23]);

printForecast([17, 21, 23, 24, 26]); */

const Data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const weeklyInformation = function (arr) {
  let totalHoursWorked = 0;
  let maxDays = arr[0];
  let dayMostHourWorked = 0;
  let fullTimeWeek = false;
  for (let i = 0; i < arr.length; i++) {
    totalHoursWorked = totalHoursWorked + arr[i];
    if (arr[i] > maxDays) {
      maxDays = arr;
      dayMostHourWorked = i + 1;
    }
  }
  const avgDailyHours = totalHoursWorked / arr.length;

  if (totalHoursWorked >= 35) fullTimeWeek = true;

  console.log(totalHoursWorked, avgDailyHours, dayMostHourWorked, fullTimeWeek);
  return { totalHoursWorked, avgDailyHours, dayMostHourWorked, fullTimeWeek };
};

console.log(weeklyInformation(Data1));

console.log("4\n5");

let s = [1, 2, 3];

console.log(s);
