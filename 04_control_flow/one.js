// if

// const isUserLoggenIn=true
// const temperature=40

// if (temperature!==40){
//     console.log("Temp is equal to 41");
// }
// else{
// console.log("Temp is more OR less than 40");
// }

// <, >, <=, >=, ==, !=, ===, !==


// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`User Power: ${power}`);  
// }

const balance=1000

// if(balance>500) console.log(`Blance is greater than 1000`);

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else {
    console.log("less than 1250");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}