const name="Taha";
//const bName:String="Hashim";
const bName=new String('Hashim')
const repoCount=50

//console.log(name+repoCount+" Value");

console.log(`Hello my name is ${bName.toUpperCase()} and my repo count is ${repoCount}`);

console.log(bName[0]);

console.log(bName.length);

console.log(bName.charAt(2));
console.log(bName.indexOf('h'));

const newbName=bName.substring(0,4) // cannot have -ve values
console.log(newbName);

const newName=bName.slice(4,6) // can have -ve values
console.log(newName);

const newNameOne="   Cheema  "
console.log(newNameOne.trim());

const fName="Taha Cheema"
console.log(fName.replace(' ', "-"));

console.log(fName.includes('Ch')); // boolean

console.log(fName.split(' '));
