console.log('****************************************************************************************************')
console.log('***********************************    DAY Five    *************************************************')
console.log('****************************************************************************************************')
let person = {
    name:'Ben',
    favoriteFoods:['Pizza','Chinese Food','MacDonalds'],
    favoriteInsults:[' an Idiot',' a tool',' a Pleb',' a div'],
    currentLocation:'Home',
    insult:function(){ 
        console.log('One insult'+this.name+' uses alot is')
       console.log(`"you are${this.favoriteInsults[Math.floor(Math.random()*3)]}"`)
    },
    summary:function(){
    console.log(`${this.name}'s favorite foods are ${this.favoriteFoods.slice(0,this.favoriteFoods.length-1)} and ${this.favoriteFoods[this.favoriteFoods.length-1]}`)
    },
    whereIsBen:function(time){
        if(time<9 || time>7){
            this.currentLocation='Home'    
        }
        else{
            this.currentLocation='Work'
        }
        console.log(`${this.name} is at ${this.currentLocation}`)
    },
    howAreYou:function(mood){
        if(mood==='good'){
            console.log(`im ${mood} thanks`)
        }
        else{
            console.log(`"you are${this.favoriteInsults[Math.floor(Math.random()*3)]}"`)
        }
    }
}
person.summary()
person.insult()
person.whereIsBen(9)
person.howAreYou('good')
person.howAreYou('bad')
console.log('****************************************************************************************************')
let object1 = {
    hello:'Hello',
    favoriteFoods:['Pizza','Chinese Food','MacDonalds'],
}
object1['goodbye']='goodbye'
console.log(object1)
object1.logItems=function(){
let count=0
for(var property in object1)
{
    console.log(count)
    count++
   console.log(property)
}
}
console.log(object1)
console.log(object1.logItems)
object1.favoriteFoods.push('SUSHI')
console.log(object1.favoriteFoods)
console.log('')
console.log('********logging items**********')
console.log('')
object1.logItems()
console.log('')
console.log('****************************************************************************************************')
console.log('Using this incorrectly')
console.log('')
let object2 = {
    name:'Ben',
    sayname(name){
     console.log(name)
    },   
}
object2.sayname()
console.log('Using this correctly')
console.log('')
let object3 = {
    name:'Ben',
    sayname(){
     console.log(`hello my name is ${this.name}`)
    }
}
object3.sayname()
console.log('****************************************************************************************************')
console.log('adding a function')
console.log('')
object3.sayinsult=()=>{
    console.log('UR A TIT')
}
object3.sayinsult()
console.log('****************************************************************************************************')
let rabbit={
    name:'Sherlock',
    color:'black and white',
    ears:'uppy',
    bunHop(){
        console.log(`${this.name} is hopping`)
    },
    bunChew(){
        console.log(`${this.name} is chewing`)
    },
    bunDesc(){
        console.log(`The rabbit ${this.name} has ${this.ears} and is ${this.color}`)
    }

}
console.log(rabbit)
rabbit.bunChew()
rabbit.bunHop()
rabbit.bunDesc()
console.log('****************************************************************************************************')
