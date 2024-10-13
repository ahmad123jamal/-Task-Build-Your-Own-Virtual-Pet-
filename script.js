let myPet = {
    name : prompt("enter pet name"),
    type : prompt("enter what type of pet you have"),
    age : prompt("enter your pet age"),
    happiness : prompt("how much your pet happy"),
    hunger : prompt("how much your pet "),

    feed : function () {
        if (this.hunger > 0) {
        this.hunger -= 20;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        alert(`${this.name} has been fed! Hunger is now ${this.hunger}.`);
    } else {
        alert(`${this.name} is not hungry!`);
    }
    
    },

     play: function () {
    this.happiness += 20;
    if (this.happiness > 100) {
        this.happiness = 100;
        alert(`${this.name} is too happy!`);
    } else {
        alert(`${this.name} is happy! Happiness is now ${this.happiness}.`);
    }
},

    agePet: function () {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        
        // Ensure happiness doesn't go below 0
        if (this.happiness < 0) {
            this.happiness = 0;
        }

        alert(`${this.name} is now ${this.age} years old. Happiness is now ${this.happiness}, and hunger is now ${this.hunger}.`);
    },

    info: function () {
        alert(`Pet Name: ${this.name}\nType: ${this.type}\nAge: ${this.age}\nHappiness: ${this.happiness}\nHunger: ${this.hunger}`);
    }
}

// Function to interact with the pet

function interactWithPet() {
    let action;
    do {
        action = prompt("What would you like to do? (feed, play, age, info, exit)");

        switch (action) {
            case "feed":
                myPet.feed();
                break;
            case "play":
                myPet.play();
                break;
            case "age":
                myPet.agePet();
                break;
            case "info":
                myPet.info();
                break;
            case "exit":
                alert("Goodbye!");
                break;
            default:
                alert("Invalid action! Please choose 'feed', 'play', 'age', 'info', or 'exit'.");
        }
    } while (action !== "exit");
}



// Start the interaction
interactWithPet();
