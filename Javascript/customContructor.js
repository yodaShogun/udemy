function User(userLastName, userFirstNme, userMail){

    this.userLastName = userLastName
    this.userFirstNme = userFirstNme
    this.userMail = userMail 

    // this.showItSelf = ()=>{
    //     console.log("Welcome player "+this.userLastName+" the game will start in 10 s")
        
    // }
} 

User.prototype.showItSelf = function(){
    console.log("Welcome player "+this.userLastName+" the game will start in 10 s ")
}

var player = new User("Pierre", "Chris Wesley", "pierrechriswesley@gmail.com");
console.log(player );
player.showItSelf()
