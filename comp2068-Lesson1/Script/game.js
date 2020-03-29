var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.jump = function () {
        console.debug("you jumped");
    };
    return Player;
}());
function main() {
    var khan = new Player();
    khan.jump();
}
//# sourceMappingURL=game.js.map