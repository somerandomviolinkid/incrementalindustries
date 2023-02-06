const startLoading = Date.now();

for (i in data) {
    //inventory square
    let currentInventorySquare = document.createElement("div");
    currentInventorySquare.className = "inventorySquare";
    currentInventorySquare.id = "inventorySquare" + i;
    document.getElementById("inventoryDiv").appendChild(currentInventorySquare);

    let currentInventorySquareID = currentInventorySquare.id;

    //text inside square
    let currentResourceCount = document.createElement("p");
    if (data[i].type == 'countable') {
        currentResourceCount.innerHTML = data[i].title + ": " + data[i].amount;
    } else if (data[i].type == 'uncountable') {
        currentResourceCount.innerHTML = data[i].title + ": " + data[i].amount + " kg";
    } else  if (data[i].type == 'liquid') {
        currentResourceCount.innerHTML = data[i].title + ": " + data[i].amount + " L";
    }
    document.getElementById(currentInventorySquareID).appendChild(currentResourceCount);

    //image
    let currentResourceImage = document.createElement("img");
    currentResourceImage.src = "assets/" + i.toString() + ".png";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceImage);
}

const loadingTime = Date.now() - startLoading;
console.log("Loaded in " + loadingTime + " ms.")