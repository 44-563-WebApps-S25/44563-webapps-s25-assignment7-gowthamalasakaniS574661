function getRandomPosition(exclude = []) {
    let position;
    do {
        position = Math.floor(Math.random() * 35);
    } while (exclude.includes(position)); 
    return position;
}

// Assign random locations for snake, silver, and gold
let goldLocation = getRandomPosition();
let snakeLocation = getRandomPosition([goldLocation]);
let silverLocations = [
    getRandomPosition([goldLocation, snakeLocation]),
    getRandomPosition([goldLocation, snakeLocation]),
    getRandomPosition([goldLocation, snakeLocation]),
    getRandomPosition([goldLocation, snakeLocation]),
    getRandomPosition([goldLocation, snakeLocation])
];

const ids = Array.from({ length: 35 }, (_, i) => `img${i}`);
let score = 0;
let locationsVisited = 0;
let lastLocation = 0;
let gameOver = false;

function moveSnake() {
    let row = Math.floor(snakeLocation / 7);
    let col = snakeLocation % 7;
    row = (row + 1) % 5; 
    col = (col + 1) % 7;
    snakeLocation = row * 7 + col;

    if (snakeLocation === lastLocation) {
        gameOver = true;
        document.getElementById("help").innerText = "Snake got you!";
    }
}

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
    moveSnake();

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
