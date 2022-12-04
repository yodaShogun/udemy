var gamdalf = {
    titre: "magicien"
} 

function hello(arme, puissance){
    console.log("hello "+this.titre +" votre arme est un "+ arme +" avec une puissance de "+ puissance);
} 

let myObject = {

    value:" wanna fuck",
    getValue: function(){
        console.log(this.value);
    }
}

// hello.call(gamdalf);
// hello.apply(gamdalf, ["epee", 450])

let myValue = myObject.getValue();
let myValueBind = myObject.getValue.bind(myObject)
myValue
myValueBind()