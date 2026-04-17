class Coin {
    constructor(x, y, emoji) {
        this.x = x;
        this.y = y;
        this.emoji = emoji;
        this.value = 0;
        this.DOMelement = document.createElement("span");
    }

    render(game) {

        this.DOMelement.className = "coin";
        this.DOMelement.textContent = this.emoji;
        this.DOMelement.style.left = this.x + "px";
        this.DOMelement.style.top = this.y + "px";

        this.DOMelement.addEventListener("click", () => {
            game.changeScore(this.value);
            this.DOMelement.remove();
        });

        game.gameArea.appendChild(this.DOMelement);

    }
}

class HappyCoin extends Coin {
    constructor(x, y) {
        super(x, y, "😊");
        this.value = 1;
    }
}

class SadCoin extends Coin {
    constructor(x, y) {
        super(x, y, "😢");
        this.value = -1;
    }
}


class Game {
    constructor() {
        this.score = 0;
        this.gameArea = document.getElementById("gameArea");
        this.scoreBoard = document.getElementById("scoreBoard");
    }

    changeScore(value) {
        this.score += value;
        this.scoreBoard.textContent = "Pontszám: " + this.score;
    }

    createRandomCoin() {
        const x = Math.floor(Math.random() * 740);
        const y = Math.floor(Math.random() * 440);
        const isHappy = Math.random() < 0.7;

        if (isHappy) {
            return new HappyCoin(x, y);
        } else {
            return new SadCoin(x, y);
        }
    }

    spawnOneCoin() {
        const coin = this.createRandomCoin();
        coin.render(this);
    }

    start(numberOfCoins) {
        for (let i = 0; i < numberOfCoins; i++) {
            this.spawnOneCoin();
        }
    }
}

const game = new Game();
game.start(20);