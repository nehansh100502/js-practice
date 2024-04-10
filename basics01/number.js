const score = 400 ;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.4355
console.log(otherNumber.toPrecision(3)); // please check always be number 3 befor decimal if number increse like 3333.123 then we cought output in hexadecimal ...

const hundreds = 100000

console.log(hundreds.toLocaleString("en-In"));

//**************************************Math*****************************************/

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//also take 5 
console.log(Math.floor(4.9));// this take 4
console.log(Math.min(2,3,13,43,1,0,4));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 5;

console.log(Math.floor(Math.random() * (max-min + 1))+min);

