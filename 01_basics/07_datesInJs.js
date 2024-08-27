let myDate=new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());

console.log(Date.now()); // In miliseconds

console.log(Math.floor(Date.now()/1000)); // In seconds

let aDate=new Date();
console.log(aDate);

console.log(aDate.getMonth()+1);

console.log(aDate.toLocaleString('default', {
    weekday:"long"
}));
 
