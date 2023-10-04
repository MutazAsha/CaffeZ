const uForm = document.getElementById("uform");
const uDiv = document.getElementById("udata");

uForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = uForm.elements.username.value;
    const age = uForm.elements.age.value;

    let drinkType = "";
    if (uForm.elements.hot.checked) {
        drinkType = "Hot";
    } else if (uForm.elements.cold.checked) {
        drinkType = "Cold";
    }

    const drinkName = uForm.elements.drinkName.value;

    uDiv.innerHTML = `
        <p>Name: ${username}</p>
        <p>Age: ${age}</p>
        <p>Drink Type & Name: ${drinkType} ${drinkName}</p>`
    ;

    userForm.reset();
});


