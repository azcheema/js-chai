const tinderUser=new Object() // An empty singleton object {}

tinderUser.id="abc123"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"hashim@google.com",
    fullName:{
        userFullName:{
            firstName:"Hashim",
            lastName:"Ali"
        }
    }
}

//console.log(regularUser.fullName?.userFullName.lastName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

const obj3={
    5:"c",
    6:"d"
}

//const obj4={obj1,obj2}
//const obj4=Object.assign({}, obj1, obj2, obj3)

const obj4={...obj1, ...obj2, ...obj3}

console.log(obj4);

const users=[
    {
        id:1,
        email:"a"
    },
    {
        id:2,
        email:"b"
    },
    {
        id:3,
        email:"3"
    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

