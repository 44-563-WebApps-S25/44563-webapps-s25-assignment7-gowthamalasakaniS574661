function addEnd() {
    let input = document.getElementById("inputText").value;
    if (input.trim() === "") return;

    let newDiv = document.createElement("div");
    newDiv.innerHTML = input;
    newDiv.className = "divlist";

    document.getElementById("listContainer").appendChild(newDiv);
    document.getElementById("inputText").value = "";
}
