const ids = Array.from({ length: 35 }, (_, i) => `img${i}`);
let score = 0;
let locationsVisited = 0;
let lastLocation = 0;
const silverLocations = [2, 5, 11, 21, 32];
const goldLocation = 15;
const snakeLocation = 20;
let gameOver = false;

function check(position) {
    if (gameOver) return;

    const imgId = ids[position];
    const imgElement = document.getElementById(imgId);

    if (position === goldLocation) {
        imgElement.src = "images/gold.png";
        score += 5;
    } else if (silverLocations.includes(position)) {
        imgElement.src = "images/silver.png";
        score += 3;
    } else if (position === snakeLocation) {
        imgElement.src = "images/snake.png";
        score -= 3;
        gameOver = true;
    } else {
        imgElement.src = "images/pottery.png";
        score += 1;
    }

    locationsVisited++;
    lastLocation = position;

    document.getElementById("locations").innerText = `Number of locations checked is ${locationsVisited}.`;
    document.getElementById("score").innerText = `Score is ${score}.`;
}

function help() {
    const row = Math.floor(lastLocation / 7);
    const col = lastLocation % 7;
    const snakeRow = Math.floor(snakeLocation / 7);
    const snakeCol = snakeLocation % 7;
    const surrounding = [
        lastLocation - 1, lastLocation + 1, lastLocation - 7, lastLocation + 7
    ].filter(pos => pos >= 0 && pos < 35);

    if (surrounding.some(pos => silverLocations.includes(pos))) {
        document.getElementById("help").innerText = "clink";
    } else if (Math.abs(row - snakeRow) <= 1 && Math.abs(col - snakeCol) <= 1) {
        document.getElementById("help").innerText = "rattle";
    } else {
        document.getElementById("help").innerText = "wind";
    }
}
