class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    jump() {
        console.debug("you jumped");
    }
    
}

function main() {
    var khan = new Player();
    khan.jump();
}