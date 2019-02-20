
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
function factorial (n) {

    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return (n * factorial(n-1));
    }
   
   }
   
console.log(factorial(33));

//becomes
   
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
