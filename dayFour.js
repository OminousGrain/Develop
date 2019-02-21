console.log('****************************************************************************************************')
console.log('***********************************    DAY FOUR    *************************************************')
console.log('****************************************************************************************************')
console.log('count down from 20 to 0 in multiples of 2')
twentyLoop=()=>{
let results=[]
    for(let i=20; i>0 ;i-=2){
        results.push(i)
    }
    console.log(results)
}
twentyLoop();
console.log('****************************************************************************************************')
console.log(' CREATE ARRAY OF FAV FILMS THEN LOOP THROUGH THEM ')
console.log('****************************************************************************************************')
favFilms=(adding)=>{
    let films = ['shawshank redemption','Fellowship of the ring','Harry Potter','Sinbad','Dumb and Dumber']
   addFilm=(film)=>{
    films.push(film)
    console.log(`the film ${film} has been added`)
    }
 addFilm(adding);
    console.log(`favorite films are now ${films.slice(0,films.length-2)} and ${films[films.length-1]}`)
}
favFilms('Flubber')
favFilms('Grinch')
console.log('****************************************************************************************************')
console.log('  TALK UNTIL YOU ARE INSULTED ');
console.log('****************************************************************************************************')
insults=()=>{
    let comments=['You are nice','I dont dislike you','I think ur cool','YOU ARE A F*&*$*£ £$%£%£$']
    let comment=comments[0]
    let person = 'A'
    while(comment !=='YOU ARE A F*&*$*£ £$%£%£$'){

        if(person==='A'){

        console.log(`Person ${person} says "${comment}"`);

        person='B';
        }

       else if(person==='B'){

            console.log(`Person ${person} says "${comment}"`);
            person='A';
            }
            

     comment=comments[Math.floor(Math.random()*4)]
        
    }
    
    console.log(`Person ${person} says "${comment}"`)
    console.log(`Person ${person} says "'Um....thats not cool, I\'m leaving'`)
}
insults();
console.log('****************************************************************************************************')
console.log('Ghost Busters')
console.log('****************************************************************************************************')

let films=['GhostBusters 1','GhostBusters 2','GhostBusters 3']
ghostBuster=(films)=>{
    filmCheck=()=>{
        if(films[2]==='GhostBusters 3'){
            console.log(`${films[2]} is not a real GhostBusters film`)
        }
        else if(films[2]===undefined){
            console.log('thank god it doesnt exist')
        }  
    };
    filmCheck()
}
ghostBuster(films)
console.log('****************************************************************************************************')
numberToString=(num)=>{
    return num.toString()
}
console.log( numberToString(1))
console.log(typeof numberToString(1))
console.log('****************************************************************************************************')
increase=(num)=>{
    return ++num
}
console.log(increase(1))
console.log('****************************************************************************************************')
decrease=(n)=>{
return --n
}
console.log(decrease(1))
console.log('****************************************************************************************************')
add=(a,b)=>{
    return a+b
}
console.log(add(1,4))
console.log('****************************************************************************************************')
subtract=(a,b)=>{
    return a-b
}
console.log(subtract(1,4))
console.log('****************************************************************************************************')
multiply=(a,b)=>{
    return a*b
}
console.log(multiply(1,4))
console.log('****************************************************************************************************')
divide=(a,b)=>{
    return a/b
}
console.log(divide(1,4))
console.log('****************************************************************************************************')
square=(a)=>{
    return a**2
}
console.log(square(2))
console.log('****************************************************************************************************')
calculate=(op,a,b)=>{

    if(op==='square'){
        return square(a,b)

    }
    else  if(op==='divide'){
        return divide(a,b)

    }
    else  if(op==='subtract'){
        return subtract(a,b)

    }
    else  if(op==='add'){
        return add(a,b)

    }
    else  if(op==='multiply'){
        return multiply(a,b)

    }

}
console.log(calculate('add',2,3))

console.log(calculate('subtract',2,3))


console.log('****************************************************************************************************')
isGreaterThan=(a, b)=>{
    if(a>b){
        return true
    }
    else{
        return false
    }
}
console.log(isGreaterThan(1,3))

console.log(isGreaterThan(3,1))

console.log('****************************************************************************************************')
isLessThan=(a, b)=>{
    
        if(a<b){
            return true
        }
        else{
            return false
        }  
}
console.log(isLessThan(1,3))
console.log(isLessThan(3,1))
console.log('****************************************************************************************************')
areEqual=(a, b)=>{
    if(a===b){
        return true
    }
    else{
        return false
    }  
}
console.log(areEqual(1,3))
console.log(areEqual(1,1))
console.log('****************************************************************************************************')
 minimum=(a, b)=>{

    if(a<b){
        return a
    }
    else{
        return b
    }  

 }
 console.log(minimum(2,4))

 console.log(minimum(4,2))
 console.log('****************************************************************************************************')
 maximum=(a, b)=>{

    if(a>b){
        return a
    }
    else{
        return b
    }  

 }
 console.log(maximum(2,4))

 console.log(maximum(4,2))

 console.log('****************************************************************************************************')
isEven=(n)=>{
    if(n%2===0){
        return true
    }
    else{
        return false
     }
}
console.log(isEven(2))
console.log(isEven(3))
console.log('****************************************************************************************************')

isOdd=(n)=>{
    if(n%2===0){
        return false
    }
    else{
        return true
     }
}
console.log(isOdd(2))
console.log(isOdd(3))
console.log('****************************************************************************************************')
letterGrade=(score)=>{
    if(score>=90){
        return 'A'
    }
    if(score>=80){
        return 'B'
    }
    if(score>=70){
        return 'C'
    }
    if(score>=60){
        return 'D'
    }
    if(score>=0){
        return 'F'
    }
}
console.log(letterGrade(40))
console.log(letterGrade(90))
console.log(letterGrade(70))
console.log('****************************************************************************************************')
incrementReviews=(restaurant)=>{
    restaurant.reviews++
}
let papaJohns={
    reviews:0
}
console.log(papaJohns.reviews)
incrementReviews(papaJohns)
console.log(papaJohns.reviews)
incrementReviews(papaJohns)
console.log(papaJohns.reviews)
console.log('****************************************************************************************************')
combine=(word1, word2)=>{
    return word1.concat(` ${word2}`)
}
console.log(combine('Liberty','Prime'))
console.log('****************************************************************************************************')
createCircle=(radius)=>{   
    let answer = { 
        radius: radius,
        area:Math.PI*(radius)**2,
        circumference:2*Math.PI*radius
    }
    console.log('our circle properties are... ')
    return answer
}
console.log(createCircle(2))
console.log('****************************************************************************************************')

min=(arr)=>{
    let small=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i]
        }
    }
    console.log(small)
    return small
}
max=(arr)=>{
    let large=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    console.log(large)
    return large
}

max([4,6,2,1,9,63,-134,566]) 
console.log('returns 566')
min([-52, 56, 30, 29, -54, 0, -110])
console.log('returns -110')
max([5])
console.log('returns 566')
min([42, 54, 65, 87, 0]) 
console.log('returns 0')
console.log('****************************************************************************************************')
mphToKpl=(n)=>{
    //m/g=>km/l
    return (n*1.60934)/3.785
}
console.log(mphToKpl(1))
console.log('****************************************************************************************************')
findDigit=(n,nth)=>{
   n=n.toString().split('').reverse()
   console.log(n)
   if(nth<0){
       return -1
   }
 return n[nth-1]  
    
}
console.log('returns 1')
console.log(findDigit(1234,4))
console.log('returns 5')
console.log(findDigit(5673, 4))
console.log('returns -1')
console.log(findDigit(24, -8) )

console.log('****************************************************************************************************')

//isAscOrder(new int[]{1,2,4,7,19}) == true

isAscOrder=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
        }
        if(arr[i]>arr[i+1]){
            console.log('false')
            return false;
        } 
    }
    console.log('true')
        return true;
}
isAscOrder([1,2,3,4,5])
isAscOrder([1,2,4,2,5])
console.log('****************************************************************************************************')
getMiddle=(str)=>{
    if(str.length%2===0){
        console.log('even')
        console.log(str.slice(str.length/2-1,(str.length/2)+1))
    }
    else if(str.length===1){
        console.log('string is only length of one')
        console.log(str)
    }
    else{
        console.log('odd')
        console.log(str.slice(str.length/2-1,(str.length/2)))     
    }
}
getMiddle('1234567')
getMiddle("middle")
getMiddle('1234')
getMiddle("test")
getMiddle("A")
console.log('****************************************************************************************************')
console.log('Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.')
console.log('****************************************************************************************************')

removeSecond=(arr)=>{
    let remove = false;
    let count=0
    let at = 0
    let length=arr.length

    while(count<length){
        count++
        if(remove===false){
            at+=1;
            
            remove=true
        }
        else{
            arr.splice(at,1)
            remove=false
        }
        
    }
    
    

    
    console.log(arr)
    console.log('****************************************************************************************************')

}
removeSecond(['Keep', 'Remove'])
removeSecond(['Keep', 'Remove','Keep'])
removeSecond(['Keep', 'Remove','Keep','Remove'])
removeSecond(['Keep', 'Remove','Keep','Remove','Keep', 'Remove','Keep','Remove'])
removeSecond(['Keep', 'Remove','Keep','Remove','Keep', 'Remove','Keep','Remove','Keep', 'Remove','Keep','Remove','Keep', 'Remove','Keep','Remove'])
console.log('****************************************************************************************************')
console.log('INITIALISE')
//'Jack Ryan'                   => 'Jack Ryan'
//'Lois Mary Lane'              => 'Lois M. Lane'
//'Dimitri'                     => 'Dimitri'
//'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
initialise=(name)=>{
    name=name.split(' ')
    console.log(name)
    let count = 0
    let endIndex = name.length-1
    let answer=[]
 
    name.forEach((name)=>{
        if(count===endIndex || count===0){
           
            answer.push(name)
        }
        
        else{
          
           answer.push(name[0])
        }
        
        count++
    })
    console.log(answer.join(' '))
}
initialise('Jack Ryan' )
initialise('Lois Mary Lane'  )
initialise('Dimitri'  )
initialise('Alice Betty Catherine Davis')
console.log('****************************************************************************************************')

find_needle=(arr)=>{
    let index = 0
    while(arr[index]!=='needle'){

        index++

    }
    console.log(`needle is at index ${index}`)
}
find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk','hay', 'junk', 'hay','needle'])
console.log('****************************************************************************************************')
 /*  string.forEach((character,index)=>{
      if(character === character.toUpperCase()){
            console.log('uppercase');
            string[index].toLowerCase();
        } 
        else if (character === character.toLowerCase()){
            console.log('lowerCase');
             string[index].toUpperCase();
        }

    })
     */


toAlternatingCase=(string)=>{
    string = string.split('');
    console.log(string);
  for(let i=0; i<string.length;i++){
      
    if(string[i] === string[i].toUpperCase()){
        console.log('uppercase');
        string[i]=string[i].toLowerCase();
    } 

    else if (string[i] === string[i].toLowerCase()){
        console.log('lowerCase');
         string[i]=string[i].toUpperCase();
    }
      
  }
    console.log(string);  
}
toAlternatingCase('HELLO');
toAlternatingCase('hello');
console.log('****************************************************************************************************')
toAlternatingForEach=(string)=>{
    console.log(string);
    string = string.split('');
    console.log('becomes');
  
    string.forEach((character,index)=>{

        if(character === character.toUpperCase()){
            string[index]= string[index].toLowerCase();
        } 

        else if (character === character.toLowerCase()){ 
            string[index]= string[index].toUpperCase();
        }
    })
    
    
    console.log(string.join(''))
    console.log('')
}
toAlternatingForEach('HELLO');
toAlternatingForEach('hello');
toAlternatingForEach('hElLo');
console.log('****************************************************************************************************')

//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

powerTwo=(n)=>{
    let powers =[]
    for(let i = 0 ;i<=n;i++){
        
        powers.push(2**i)
    }
    console.log(powers)
}
powerTwo(10);
powerTwo(4);
console.log('****************************************************************************************************')
console.log('Chinese Zodiak');
//elements change every 2 years
//signs change every year 12 cycle
let animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
let elements =['Wood', 'Fire', 'Earth', 'Metal', 'Water']

//1984 wood Rat
zodiakSign=(yearBorn)=>{
    let currentYear = yearBorn-1984
    if(currentYear<0){
        currentYear*=-1;
    }
    let currentElement=elements[currentYear%5]
    let currentAnimal=animals[currentYear%12]

    console.log(`Born in ${yearBorn} means you are a ${currentElement} ${currentAnimal}`)
}
zodiakSign(1984)
zodiakSign(2008)
zodiakSign(1995)
console.log('****************************************************************************************************')
