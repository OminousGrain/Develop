
//count one to ten// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////

console.log('*********************');
console.log('COUNT ONE TO TEN');
console.log('*********************');
let upToTen=['one','two','three','four','five','six','seven','eight','nine','ten']
function countToTen(){
    for(let i=0;i<10;i++){
        console.log(upToTen[i]+'!');  
        console.log('');  
    }
    
}

countToTen();
console.log('*********************');
console.log('COUNT 44 TO 66 ');
console.log('*********************');

//log numbers 44 to 66 ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////

function countTo66(){
    for(let i=44;i<67;i++){
        console.log(i);  
        console.log('');  
    }
}
countTo66();
 ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
console.log('*********************');
console.table(upToTen);
console.log('*********************');

 ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////

 let object1 = { 
     
    upToSix : [1,2,3,4,5,6],
    
    colors : ['blue','yellow'],

    function1: shout=()=>{console.log('AAAAAAAARGH!!!')},

    callout:callout=(input)=>{console.log(input.toUpperCase())},

    opposite:function(bool){
        console.log('Print the boolean');
        console.log(bool);
        if(typeof bool ==='boolean') {
            console.log(!bool)
        }
    },


        howLong:function(word){
            if((typeof word)==='string'){
                console.log(word.length)
            }
        },


        removeWhiteSpace:'      HELLO REMOVE THIS SP A C E    ',


        pattern:"23r3r32r23r32r23r32",

        random: Math.random(),

         nums :[10,11,12,13,14,15,16,17,18,19]

        
       
 }


 console.log(object1.upToSix);

 console.log(object1.function1);

 console.log(object1.function1());

 console.log(object1.callout('help'+'!'));

 object1.opposite(false);

object1.howLong('wordlength');

console.log(object1.colors[1].toUpperCase());

console.log(object1.removeWhiteSpace.trim());

console.log(object1.removeWhiteSpace.replace(/\s+/g,''));

console.log(object1.pattern);

console.log(object1.random);

console.log(object1.random*10);

console.log(Math.floor(object1.random*10));

console.log(Math.floor(object1.random*9)+10);

console.log(object1.nums[Math.floor(Math.random()*9)]);

console.log('0123THIS WORD4321'.substr(4,9))

console.log('AAARGH!'.repeat(27))
console.log('0123456'.charAt(2))
console.log('0123456'.charAt(0))
console.log('Hello World Hello'.indexOf('Hello'))
console.log('Hello World Hello'.indexOf('Hello',5))
console.log('01234WAAAAGHreeee'.slice(5,12))
console.log('DOES IT INCLUDE BLUE'.includes('BLUE'))
console.log('DOES IT INCLUDE BLUE'.includes('RED'))

console.log('Buffalo '.concat('Buffalo '.repeat(22)))

let f = 1234
console.log(f.toString())
console.log(typeof f.toString())



/*STRING   'HELLO STRING IF SOMEONE WANTED TO LOG TO THE CONSOLE EVERYTHING I WAS SAYING NOW'

numbers


BOOLEANS  */
