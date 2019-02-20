
console.log('*******************************************')
console.log('day three')
console.log('*******************************************')
console.log('Create a function that adds 2 numbers and multiples the result by 2.')
const addandmultiply=(a,b)=>{
    console.log(` add ${a} and ${b} and multiply by 2`);
    let sum=a+b;
    let answer=sum*2;
    console.log(`answer is ${answer}`);
}
addandmultiply(1,2);
addandmultiply(4,2);
console.log('*******************************************')
console.log('convert from declaration to arrow function')
console.log('*******************************************')
console.log('declarative function ')
function factorial (n) {
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return (n * factorial(n-1));
    } 
   }
console.log(factorial(33));
console.log('arrow function') 
 factorial1=(n)=>{
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return (n * factorial1(n-1));
    }
   }
   console.log(factorial1(33));
   console.log('*******************************************')
console.log('find all instances of search term in a  in string ')
const findAllInstances=(string,search)=>{
    console.log('*******************************************')
    console.log(` >>>string is ${string}`)
    console.log(` >>>search term  is ${search}`)
    console.log(` >>>length of search term is ${search.length}`)
    let substringLength=search.length
    console.log(`Check Substrings in sequences of ${substringLength} to see if they match our search term`)
    let storage=[]
    for(let i=0;i<string.length;i++){
        if(string.substring(i,i+substringLength)===search){    
            storage.push(i)
        }   
    }
    console.log(` >>>the search term is located at the following indexes ${storage}`)
}
findAllInstances('ha','a');
findAllInstances('hahahafffffffffhaaaa','a');
console.log('*******************************************')
returnFirstCharacter=(string)=>{
    console.log(`the string is ${string} and the first character of the string is...`)
    return string[0]
}
console.log('>>>>'+returnFirstCharacter('hello'))
console.log('>>>>'+returnFirstCharacter('Goodbye'))
console.log('*******************************************************************************************************************************')
console.log('*******************************************************************************************************************************')
console.log('')
console.log('Create a cashmachine that dispenses cash if pin number is correct and your balance is equal to more than the amout we withdraw')
console.log('')
console.log('*******************************************************************************************************************************')
console.log('*******************************************************************************************************************************')


const cashMachine = (pinNumber,dispense,balance)=>{
    let authPin=2002
    if(pinNumber===authPin && balance>=dispense){
        console.log('Correct Pin')
        console.log(`dispensing ${dispense} pounds remaining balance is ${balance-dispense}`) 
    }
    else if (pinNumber===authPin && balance<dispense){
        console.log('Correct Pin')
        console.log(`Inadequate Funds`) 
    }
    else{
        console.log('Incorrect Pin')
    }
}
cashMachine(2002,10,10)
cashMachine(2002,10,5)
cashMachine(2001,10,10)
 console.log('**********************************')
 //create account with balance
 //create object which contains functions to operate upon the account
 //inside this object we need dispensecash(),checkPin(),check(funds), 
class Account {
  constructor(name,pin, balance){
    this.name = name;
    this.pin = pin;
    this.balance=balance
  }
  displayBalance() {
   console.log(`balance of ${this.name}s account is ${this.balance}`)
  }
  testBalanceDispense(cash,balance){
      if(cash<=balance){
          console.log('sufficient Funds')
          return true
      }
      else{
        console.log('insufficient Funds')
          return false
      }
  }
  authDispense(auth){
   if(auth===this.pin){
       console.log('Authenticated Transfer')
       return true;
   }
   else{
       console.log('authentification Failed')
       return false;
   }
  }
  changeBalance(cash,operator){
      if(operator==='add'){
          console.log(`adding ${cash}`)
          this.balance+=cash

          console.log(this.balance)
      }
      else if(operator==='subtract'){
          console.log(`subtracting ${cash}`)
          this.balance-=cash
          console.log(this.balance)
      }
  }
  dispense(amount,auth){
      console.log(`auth is ${auth}`)
      console.log(`amount is ${amount}`)
      this.displayBalance()
      if(bensAccount.authDispense(auth)===true){
          if(bensAccount.testBalanceDispense(amount,this.balance)){
              console.log('Dispensing')
              bensAccount.changeBalance(amount,'subtract')
              console.log(`Balance remaining is ${this.balance}`)
          }
          else{
              console.log('insufficient funds')
          }
      }   
  }
}
let bensAccount = new Account("Ben",2002,200);
bensAccount.displayBalance()
console.log('**********************************')
console.log('testing authentification')
console.log('**********************************')
bensAccount.authDispense(2002)
bensAccount.authDispense(2001)
console.log('**********************************')
console.log('testing changing balance')
bensAccount.changeBalance(10,'add')
bensAccount.changeBalance(10,'subtract')
console.log('**********************************')
console.log('testing balance')
bensAccount.testBalanceDispense(10,200)
bensAccount.testBalanceDispense(10,5)
bensAccount.testBalanceDispense(10,10)
console.log('**********************************')
console.log('**********************************')
console.log('testing dispensing correct')
console.log('**********************************')
bensAccount.dispense(2002,10)
console.log('**********************************')
console.log('testing dispensing failed auth')
console.log('**********************************')
bensAccount.dispense(10,2001)
console.log('**********************************')
console.log('testing dispensing insufficient funds')
console.log('**********************************')
bensAccount.dispense(300,2002)
console.log('**********************************')
console.log('make own array')
const sam = {
    drinks:['coffee','wine','gin'],
music:['terrible music','terrible music 1','terrible music 3' ],
}
console.log('**********************************')
console.log('select Drink Of Sam')
selectDrink=(obj)=>{
    console.log(obj.drinks[Math.floor(Math.random()*2)])
}
selectDrink(sam)
console.log('**********************************')
console.log('select Music Of Sam')
selectMusic=(obj)=>{
    console.log(obj.music[Math.floor(Math.random()*2)])
}
selectMusic(sam)
console.log('**********************************')
console.log('replacing')
let numbers = ['one','two','three','four','five','six','seven']
changeNumber=(index,replacement,array)=>{
array[index]=replacement
console.log(array)
}
changeNumber(3,'>>>REPLACED<<<',numbers)
console.log('**********************************')
console.log('PUSHING')
let order = ['HOT CHOCOLATE','BANNANA','LINT'];
addItemToArray=(array, item)=>{
    array.push(item)
    console.log(array)
}
addItemToArray(order,'>>>>PUSHED<<<<<')
console.log('**********************************')
console.log('POPPING')
popItemOffArray=(array)=>{
    console.log(`popped off ${array.pop()}`)
    
}
popItemOffArray(order)
popItemOffArray(order)
console.log('**********************************')
console.log('Create a list of your favourite websites (3 of them )and then add another 2 once you’ve created the list')
console.log('**********************************')
let favoriteWebsites=['Facebook','Twitter','Google']
console.log(`original 3 favorite sites are ${favoriteWebsites}`)
console.log('**********************************')
console.log('adding Netflix')
console.log('**********************************')
addItemToArray(favoriteWebsites,'NETFLIX')
console.log('**********************************')
console.log('adding GMAIL')
console.log('**********************************')
addItemToArray(favoriteWebsites,'Gmail')
console.log('**********************************')
console.log('Removing Last Item ')
console.log('**********************************')
popItemOffArray(favoriteWebsites)

console.log('**********************************')
console.log('challenge 1')
let arrayChall1=[1,2,3,4]
challenge1=(array,string)=>{
    array.push(string)
    console.log(array)
return array
}
challenge1(arrayChall1,'ADDED')

console.log('**********************************')
console.log('challenge 2')
let topping1=['tomato','lettuce','beans','sausage','jalepino']
challenge2=(toppings)=>{
if(toppings.length===5){
    console.log(`I would Like ${toppings}`)
}
else{console.log('incorrect number of toppings')}
}
challenge2(topping1)
console.log('**********************************')
console.log('challenge 3')
let array3=[1,2,3]
array3.unshift(0)
console.log(array3)
console.log('**********************************')
console.log('challenge 4')
random6=()=>{
    let array6=[]
    for(let i=0;i<6;i++){
        array6.push(Math.floor((Math.random()*50+1))
        )
    }
    console.log(array6)
}
random6()
console.log('**********************************')
console.log('challenge 5')
count9To0=()=>{
    let countDown=[]
    for(let i=9;i>-1;i--){
        countDown.push(i)
    }
    console.log(countDown)
}
count9To0()
console.log('**********************************')
console.log('What is the index of the first term in the Fibonacci sequence to contain 1000 digits?')
console.log('**********************************')
fibonacciLength=(len)=>{
    let desiredLength=len;
    console.log(`desired length is ${desiredLength}`)
    let currentFibLength = 1
    let answer=2
    let fibonacci=[1,2]
    for(let i=2; currentFibLength<desiredLength;i++){
         answer = fibonacci[i-1]+fibonacci[i-2]
        fibonacci.push(answer)
      currentFibLength=answer.toString().length    
    }
    console.log(`current string length is ${currentFibLength}`)
    console.log(`current fibonnaci number is ${answer}`)
}
fibonacciLength(10)
fibonacciLength(11)
//too large to compute using this current method
fibonacciLength(1000)

