//display the 9th characxter in uppercase on the console
let test1='All Around the World';

let eightUpper = test1.charAt(7).toUpperCase();
console.log('*******************************************************');
console.log('display the 9th characxter in uppercase on the console');
console.log(`>>>>> ${eightUpper} <<<<<<`);
console.log('*******************************************************');
console.log('WITHDRAW 10 POUNDS FROM 82929201');
let account={
    amount:200,
    withdrawTen:function(name){

        if(name==='Niell'){
            this.amount-10;
            console.log('Ten Pounds Withdrawn')
        }
       else{
           console.log('Permission Denied')
       }
    }
}
account.withdrawTen('Niell');
console.log('*******************************************************');
console.log('Try to steal another accounts money');
let account2={
    amount:200,
    withdrawTen:function(name){
        if(name==='Ben'){
            this.amount-10;
            console.log('Ten Pounds Withdrawn')
        }
       else{
           console.log('Permission Denied')
       }
    }
}
account.withdrawTen('Niell');
console.log('*******************************************************');
const favFood = 'Chinese';
console.log('favorite food is ');
console.log(favFood.concat(' and curry'))
console.log('*******************************************************');
console.log('  Numerical Operators ');
let myAge=23;
console.log('   age in 4 years ');
console.log(myAge+4);
console.log(' age in  1 year ');
myAge++;
console.log(myAge);
console.log('age in two years');
console.log(++myAge);
console.log('   age in  5 year ');
myAge+=5;
console.log(myAge);
myAge-=5;
console.log('age half my age');
myAge*=0.5;
console.log(myAge);
myAge*=2;
myAge/=2;
console.log(myAge);
console.log('*******************************************************');
let myFavDrink='coffee'
console.log('my favorite drink')
console.log(myFavDrink)
console.log(`my favorite drink is ${myFavDrink.toUpperCase()}`)
console.log('*******************************************************');
console.log('store someones name age and favorite color and logs it in complete sentence')

const myName1 = 'Ben'
const myColor1='red'
let myAge1=23
console.log(`my name is ${myName1} my age is ${myAge1} and my fav color is ${myColor1}`)
console.log('*******************************************************');

console.log('lets make an object class constructor then use it to produce a person and then use a contained function ')



class Person {

    constructor(name, color, age) {
        name = this.name;
        age = this.age;
        color = this.color;
    }
  
    speak() {
      console.log(`my name is ${myName1} my age is ${myAge1} and my fav color is ${myColor1}`);
    }
}



const ben = new Person('ben','age','red');
ben.speak();
console.log('*******************************************************');


console.log('Make two variables, one called lowerBound and one called upperBound.');

function randomNum(lowerBound, upperBound){
    let random = Math.floor((Math.random()*(upperBound-lowerBound))+lowerBound);
    console.log(`our random number is ${random}`);
}
randomNum(10,19);
console.log('*******************************************************');

