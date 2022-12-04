class Personnage{

    constructor(pseudo, classe, sante, attaque){
        this.pseudo = pseudo
        this.classe = classe
        this.sante = sante
        this.attaque = attaque
        this.niveau = 1
    } 

    evoluer(){
        this.niveau++
        console.log(this.pseudo+" passe au niveau "+this.niveau+" !");
    } 

    verifierSante(){
        if(this.sante<=0){
            this.sante == 0
            console.log(this.pseudo+" a perdu");
        }
    } 

    get informations(){
        console.log(this.pseudo+" "+this.classe+" a "+this.sante+" points de vie et est au niveau "+this.niveau);
    }

} 

class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90)
    } 

    attaquer(personnage){
        personnage.sante -= this.attaque
        console.log(this.pseudo+" attaque "+personnage.pseudo+" en lacant un sort ("+this.attaque+" degats)");
        this.evoluer()
        personnage.verifierSante()
    } 

    coupSpecial(personnage){
        personnage.sante -= this.attaque*5
        console.log(this.pseudo+" attaque "+personnage.pseudo+" en lacant un sort ("+this.attaque*5+" degats)");
        this.evoluer()
        personnage.verifierSante() 
    }
} 

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50)
    } 

    attaquer(personnage){
        personnage.sante -= this.attaque
        console.log(this.pseudo+" attaque "+personnage.pseudo+" en lacant un sort ("+this.attaque+" degats)");

        this.evoluer()
        personnage.verifierSante()
    } 

    coupSpecial(personnage){
        personnage.sante -= this.attaque*5
        console.log(this.pseudo+" attaque "+personnage.pseudo+" en lacant un sort ("+this.attaque*5+" degats)");

        this.evoluer()
        personnage.verifierSante() 
    }

} 

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');

thor.informations
gandalf.informations
gandalf.attaquer(thor)
thor.informations
thor.attaquer(gandalf);
gandalf.informations
gandalf.coupSpecial(thor);
