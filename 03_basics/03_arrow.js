const user={
    username:"Hashim",
    price:"999",
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }   
}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Hashim"
    console.log(this);
}
// chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

const addTwo=(num1, num2)=>(num1+num2)

const retObj=()=>({name:"Hashim"})

console.log(addTwo(4,4));
console.log(retObj());

