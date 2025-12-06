'use strict'
console.log("Excersice for the Array as object");

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
    /* ,
    bmi: 0 */
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
    /*  ,
     bmi: 0 */
}

/* if john.bmi>mark.bmi
console.log(
    ``
); */

//console.log(john.calcBMI(), john.bmi);

john.calcBMI()
mark.calcBMI()
let s = "";
s = `${john.bmi > mark.bmi ? john.fullName : mark.fullName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is higher than ${john.bmi > mark.bmi ? mark.fullName : john.fullName}(${john.bmi > mark.bmi ? mark.bmi : john.bmi})`;

console.log(s);
