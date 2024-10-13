let myPet = {
    name : "pesho",
    type : "Cat",
    age : 4,
    happiness : 70,
    hunger : 60,

    feed : function () {
        console.log("your happiness is ${this.hunger}")
        this.hunger = 0;
    },

    play : function() {
        this.happiness = this.happiness +1;
        if (this.happiness > 100) {
            console.log("your are too much happy")
        } else {
            console.log("you are happy")
        }
    }


}