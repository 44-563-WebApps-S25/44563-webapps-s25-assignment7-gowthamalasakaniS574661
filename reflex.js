let haltTime = undefined;

function recordTime() {
    haltTime = Date.now();
    console.log("Halt time recorded:", haltTime);
}

function beginTime() {
    let countdownStart = Math.floor(Math.random() * 9) + 2;  // Random number between 2 and 10

    for (let i = 0; i <= countdownStart; i++) {
        setTimeout(() => {
            document.getElementById("counter").innerHTML = `Count: ${countdownStart - i}`;
        }, (countdownStart - i) * 1000);
    }

    setTimeout(() => {
        if (haltTime === undefined) {
            document.getElementById("target").innerHTML = "Not soon enough";
        } else {
            let targetTime = Date.now();
            let elapsedTime = targetTime - haltTime;
            document.getElementById("target").innerHTML = `Time was ${elapsedTime} ms`;
        }
    }, countdownStart * 1000);
}
