function Animal(animalFeetNumber, animalPounds){
    this.animalFeetNumber = animalFeetNumber
    this.animalPounds = animalPounds 
} 

Animal.prototype.intro = function(){

console.log("this animal got "+this.animalFeetNumber+" feet and he mades "+this.animalPounds+". ")

}

function Birds(animalFeetNumber, animalPounds,wingsLength){
    //call => fonction constrcucteur, this: objet en cours, arguments constructeurs
    Animal.call(this, animalFeetNumber, animalPounds)
    this.wingsLength = wingsLength
    
} 


Birds.prototype = Object.create(Animal.prototype)
Birds.prototype.constructor = Birds 

function Mammals(hairType){
    this.hairType = hairType
} 

var chicken = new Birds(2, "4kg", "moyennes")
chicken.intro()
console.log(chicken);
