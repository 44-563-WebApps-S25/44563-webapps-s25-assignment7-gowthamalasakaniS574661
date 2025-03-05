let haltTime = undefined;

function recordTime() {
    haltTime = Date.now();
    console.log("Halt time recorded:", haltTime);
}

function beginTime() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            document.getElementById("counter").innerHTML = `Count: ${5 - i}`;
        }, (5 - i) * 1000);
    }

    setTimeout(() => {
        if (haltTime === undefined) {
            document.getElementById("target").innerHTML = "Not soon enough";
        } else {
            let targetTime = Date.now();
            let elapsedTime = targetTime - haltTime;
            document.getElementById("target").innerHTML = `Time was ${elapsedTime} ms`;
        }
    }, 5000);
}
