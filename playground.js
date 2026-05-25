let message;
message= 'hello';

console.log(message);

let user ='ram',age=20, messageNew ='hello';
console.log (user +age+ messageNew);

let message1='good';
message1=25;
console.log(message1);

console.log(1/0);
console.log(Infinity);
console.log("not a number"/2);



let str= 'hello';
let pharse = (`can embaded other ${str}`);
console.log (pharse);

let inbox;
console.log(inbox);

let age1 =100;
age = undefined;

console.log(age1);

typeof  10
typeof 20n
typeof null
typeof alert

function showMessage(from,text)
{
    if(text===undefined)
    {
        text = 'empty text';
    }
    from = '*'+from+'*';
    console.log (from+':'+text);
}

let from ='enn';
showMessage(from,'hello');
console.log(from);

let sum1 =(a,b)=> a+b;
console.log(sum1(5,6));

// // single parm arrow function 

let double = a => a*2;
console.log (double(3));

let say = ()=> console.log('hello');

say();

let age2= 15; // prompt() is browser-only; hardcoded for Node.js

let welcome = age2<18?
()=>console.log('hello dear'):
()=> console.log('greetings');

welcome();

let sum2 = (a,b)=>{
    let result = a+b;
    return  result;
}

console.log(sum2(2,3));