
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
console.log('else if using minimum age task')
function serveAge(age){
   if(age>=18){
    console.log('Enjoy ur wine');
    }
    else{
    console.log('OI GET OUT OF MY BAR');
    }
}
serveAge(18);
serveAge(12);
console.log('*******************************************************');
console.log('now add a country conditional')
function serveAge(age, country){
    if(age>=18 && country==='UK'){
     console.log('Enjoy ur wine');
     }
     if(age>=21 && country==='USA'){
        console.log('Enjoy ur wine');
        }
     else{
     console.log(`get out you dumb ${country}-person`);
     }
 }
 serveAge(18,'UK');
serveAge(21,'USA');
serveAge(17,'UK');
serveAge(20,'USA');
console.log('*******************************************************');
/*Create a variable called password.
Check how many letters are in the password, if there are less than 8 log to the console that the password is too short. Otherwise log the password to the console.*/
console.log('challenge 1')
console.log('*******************************************************');
let password = 'password'

function checkPassword(password){
    if(password.length<8){
        console.log('password too short')
    }
    else{
        console.log(`${password} is ok`)
    }
}
checkPassword(password);
checkPassword('less');
checkPassword('123456789');
console.log('*******************************************************');
console.log('challenge 2')
/*Challenge 2:
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log  to the console. Otherwise log “This number is not divisible by 3 or 5”.*/
console.log('*******************************************************');
function checkDiv(num){
    if(num%3===0 || num%5===0){
        console.log('Divisible by 3 or 5');
    }
    else{
        console.log('Not divisible by 3 or 5');
    }
}
checkDiv(3)
checkDiv(4)
checkDiv(5)
console.log('*******************************************************');
console.log('challenge 3');
/*sam.basak [2:18 PM]
Challenge 3:
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.*/
function fizzBuzz(num){
    if(num%5===0){
        console.log('fizz')
    }
    else if(num%5) {
        console.log('buzz')
    }
    else if(num%5===0 && num%3===0){
        console.log('fizz buzz')
    }

    else{
        console.log(num)
    }
        
   
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(7)

/*hallenge 4:
Create a variable called num.
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).*/

function palindrome(number){
    let length= number.length;
    
    let firstHalf=number.slice(0,length/2);
  
    let secondHalf=number.slice(length/2)
    
    secondHalf=secondHalf.split('').reverse().join('')
    
    if (secondHalf===firstHalf){
        console.log('is a palindrome')
    }
    else{
        console.log('not a palindrome')
    }
    
}
palindrome('100001')
palindrome('12345')
/* PROJECT EULER*/
console.log('*******************************************************');
function sumOfSquares(start, end){
    orgNum=[];
    orgSquare=[];
    for(let i =0;i<=end;i++){
        orgNum.push(i)
        orgSquare.push(i**2)
    }
    console.log(orgNum)
    console.log(orgSquare)
    let sumSquare = 
    orgSquare.reduce((total,num)=>{
   return total += num;
    } , 0 );
console.log('sum of each squared')
    console.log(sumSquare)
    let sumOfAll= orgNum.reduce((total,num)=>{
        return total+=num
    })**2
    console.log('sum of all squared')
    console.log(sumOfAll)
console.log('difference ')
console.log(sumOfAll-sumSquare)
}
sumOfSquares(0,10)
console.log('*******************************************************');
console.log('challenge 5')
let placeOfWork='CODE CODENATION'
let townOfHome='ROSSENDALE'
function whereAreYou(){
    var today = new Date();
  var h = today.getHours();
console.log(`time is ${h}`)
    if(h<8 || h<5){
        console.log(`at home in ${townOfHome}`)
    }
    if(h===8){
        console.log('commuting')
    }
    if(h>8 ){
        console.log(`at work in ${placeOfWork}`)   
     }
}
whereAreYou()
console.log('*******************************************************');
console.log('problem 2')
function fibonnaciSumEven(){
    let fibonacci=[1,2]
    for(let i=2; (fibonacci[i-1]+fibonacci[i-2])<4000000;i++){
        fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
    }
console.log(fibonacci)
let evenFibs = fibonacci.filter(num=>num%2===0)
console.log(evenFibs)
let sumEvenFib = evenFibs.reduce((total,num)=>{return total+=num},0)
console.log(sumEvenFib)
}
fibonnaciSumEven(3)
//let string1 = “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
//find first and last occurence of hi 
console.log('*******************************************************');
function findHi(str){  
console.log(str.lastIndexOf("hi"))
console.log(str.indexOf('hi'))    
}
findHi('hihi')
function findLastVowel(str){
    console.log(str)
     str=str.split('')
    let lasta = str.lastIndexOf('a');
    let laste = str.lastIndexOf('e');
    let lasti = str.lastIndexOf('i');
    let lasto = str.lastIndexOf('o');
    let lastu = str.lastIndexOf('u');
    let lastVowels=[]
    lastVowels.push(lasta)
    lastVowels.push(laste)
    lastVowels.push(lasti)
    lastVowels.push(lasto)
    lastVowels.push(lastu)
    lastVowels.sort((a,b)=>{return b-a})
    console.log(lastVowels[0])
    }
    findLastVowel('httttedfd')
    console.log('*******************************************************');

    function matcherVowel(string){
        
       
        console.log(string.split('').reverse().join('').search(/[aeiou]/))

    }

    matcherVowel('1e34e');
   
    //Find the sum of the digits in the number 100!

    factorial=(num)=>{
        let nums = []
        for(let i=num;i<0;i--){
            nums.push(i);
        }
        console.log(nums)
    }

    factorial(10)
