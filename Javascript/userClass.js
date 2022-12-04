class Animal{

    constructor(animalFeetNumber, animalPounds){
        this.animalFeetNumber = animalFeetNumber
        this.animalPounds = animalPounds
    } 

    animalPresentation(){
        console.log("this animal got "+this.animalFeetNumber+" feet and he mades "+this.animalPounds);
    }

}  

class Birds extends Animal{

    constructor(animalFeetNumber, animalPounds,wingsLength){
        super(animalFeetNumber, animalPounds)
        this.wingsLength = wingsLength
    } 

    fly(){
        console.log("this birds fly ");
    }

}

var cow = new Birds(2, "4kg", "moyennes")
cow.fly()
console.log(cow);