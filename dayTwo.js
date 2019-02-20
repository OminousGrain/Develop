
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
console.log('*******************************************')
console.log('Create a cashmachine that dispenses cashif pin number is correct and your balance is equal to more than the amout we withdraw')
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
  dispense(amount,auth){
      console.log(`auth is ${auth}`)
      console.log(`amount is ${amount}`)
      this.displayBalance()
      if(bensAccount.authDispense(auth)===true){
          if(bensAccount.testBalanceDispense(amount,this.balance)){
              console.log('Dispensing')
              this.balance-=amount;
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
