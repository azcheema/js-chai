function sayMyName(){
    console.log("Hashim");
    
}
//sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(2, 3)

function addTwoNumbers(num1, num2){
    let result=num1+num2;
    return result
}
const result= addTwoNumbers(4,4)
console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just loggedin`
// }

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}

console.log(loginUserMessage("Taha"));

function calculateCartPrice(...num1){
    return num1
}

function calculateCartPrice2(va1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 500, 600));

const user={
    name:"abc",
    code:123
}

function handleObject(anyObj){
    console.log(`Username is: ${anyObj.name} and code is: ${anyObj.code}`);    
}

console.log(handleObject(user));
console.log(handleObject({name:"xyz", code:987}));

const myArray=[10, 20, 30, 50]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
