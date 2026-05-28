// object basics 

let user = {
  name: "rahul",
  age:20,
  isFlutterDev:true
}

console.log(user.name);
console.log(user['age']);
console.log(user);

// add and update properties 

user.age=32;
user.city='punjab';

console.log(user);

// delete the property

delete user.isFlutterDev;

console.log(user);

// check if key exist 

console.log('age' in user);
console.log('isFlutterDev' in user);

// nested object

const dev = {

  name :'gurpreet',
  experince:{
    years:7
  },
  contact:{
    email:'gurpreetsidhufzr@gmail.com'
  }

}

console.log(dev);

// shorthand properties 

const name = 'gurpreet';
const age = 31;

const persion1 = {
  name :name,
  age:age
}

const person2 = {name, age};

console.log(persion1);
console.log(person2);

const dynmicKey= 'role';

const employ = {
  name:'gurpreet',
  [dynmicKey]:'senior dev'
}

console.log(employ);

const skills={

  'flutter':'expert',
  'dart':'expert',
  'rect':'junier'
}

for(const key in skills)
{
  console.log(`${key}: ${skills[key]}`);
}

console.log(Object.keys(skills));
console.log(Object.values(skills));
console.log(Object.entries(skills));


// now start array 

console.log('now start array');

const teaches = ['flutter','dart','android '];
console.log(teaches.length);
console.log(teaches[0]);
console.log(teaches.at(-1));

const stack =['react'];
stack.push('node.js');
stack.push('dart','kotlin');

stack.pop();

console.log(stack);
stack.unshift('java');
console.log(stack);

stack.shift();
console.log(stack);

const origna=[1,2,3,4,5];
const slised = origna.slice(1,4);

console.log(origna);
console.log(slised);

console.log(teaches.indexOf('flutter'));
console.log(teaches.indexOf('java'));
console.log(teaches.includes('flutter'));
console.log(teaches.includes('java'));






