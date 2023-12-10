const result = Math.pow(8, 2);
// console.log(result);

const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
// console.log(gap);

// if(gap < 5) {
//     console.log("you guys can be friend");
// }
// else {
//     console.log('you guys stay apart');
// }

const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5) {
    console.log("you guys can be friend");
}
else {
    console.log('you guys stay apart');
}

//--------------------

const number = 2.4554;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result2 = Math.ceil(2.09343);
const result3 = Math.floor(2.99999);
console.log(result2, result3);

// Create random number

// console.log(Math.random());
// const random = Math.random()*100;
const random = Math.round(Math.random()*100);
// console.log(random);

for(let i = 0; i < 20; i++) {
    const random = Math.round(Math.random()*6);
    console.log(random);
}