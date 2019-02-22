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
