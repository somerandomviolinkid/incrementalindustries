//crafting function
function craftItem(item) {
    let allowCraft = false;
    for (let x in craftingRecipes[item].components) {
        if (data[craftingRecipes[item].components[x].title] >= craftingRecipes[item].components[x].amount) {
            allowCraft = true;
            console.log(x + " success")
        } else {
            return "craft failed";
        }
    }

    if (allowCraft == true) {
        for (let x in craftingRecipes[item].components) {
            data[craftingRecipes[item].components[x].title] -= craftingRecipes[item].components[x].amount;
        }
        return "craft succesful";
    }
}