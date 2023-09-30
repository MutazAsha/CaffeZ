const name = prompt("Please enter your name:");


const gender = prompt("Please enter your gender (male or female):").toLowerCase();


if (gender === "male" || gender === "female") {
    const title = gender === "male" ? "Mr" : "Ms";
        console.log('Welcome, ${title}. ${name}!');

 
    const drinkType = prompt("Do you want a hot or cold drink? (hot/cold):");

    const drinkName = prompt("Please enter the name of your drink:");

    console.log('Your ${drinkType} drink, ${drinkName}, is getting prepared.');

    console.log('${name} ordered a ${drinkType} drink: ${drinkName}');
} else {
    console.log('Welcome, ${name}!');

    const drinkType = prompt("Do you want a hot or cold drink? (hot/cold):");

    const drinkName = prompt("Please enter the name of your drink:");

    console.log('Your ${drinkType} drink, ${drinkName}, is getting prepared.');

    console.log('${name} ordered a ${drinkType} drink: ${drinkName}');
}
