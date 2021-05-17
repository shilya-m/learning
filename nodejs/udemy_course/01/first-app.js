// const fs = require("fs");
// fs.writeFile('test1.txt', 'my first comment', ()=>{});

const person = { name: 'ilya', age: 30, weight: 80, height: 180}
const copyPerson = {...person};
console.log(copyPerson)