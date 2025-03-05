function addEnd() {
    let input = document.getElementById("inputText").value;
    if (input.trim() === "") return;

    let newDiv = document.createElement("div");
    newDiv.innerHTML = input;
    newDiv.className = "divlist";

    document.getElementById("listContainer").appendChild(newDiv);
    document.getElementById("inputText").value = "";
}

function addFront() {
    let input = document.getElementById("inputText").value;
    if (input.trim() === "") return;

    let newDiv = document.createElement("div");
    newDiv.innerHTML = input;
    newDiv.className = "divlist";

    let container = document.getElementById("listContainer");
    container.insertBefore(newDiv, container.firstChild);
    document.getElementById("inputText").value = "";
}

function removeMiddle() {
    let divListItems = document.getElementsByClassName("divlist");
    let length = divListItems.length;

    if (length > 0) {
        let middleIndex = Math.floor(length / 2);
        divListItems[middleIndex].remove();
    }
}
