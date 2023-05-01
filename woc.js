//alerting and prompting

//alert('hello there');
//prompt(' Enter your name');

//using console.log, const, and printing the detected data-type 

console.log("HEllo world");
console.error("That was a brutal error");
const name2 ='Ansh';
const age = 18;
const rating = 9.2;
const isCool = true;
const x= null;
const y = undefined;
let z;

console.log(typeof age); //typeof helps in providing information about the data type associated with name;
console.log(typeof isCool);

//concatenation

console.log("my name is " + name2 + " and my age is "+ age );

//Template String
console.log(`My name is ${name2} and I am ${age} years old`);

//

const s = "hello world"; 
console.log(s.length);  
console.log(s.toUpperCase()); //al; letters uppercased
console.log(s.toLowerCase()); //all letters lowercased
console.log(s.substring(0, 5)); //a part is printed 

console.log(s.split(''));
console.log(s.split(' ')); //a space between the single inverted commas denote that words will be printed out, however, no space denotes that all individual letters will be printed

//ARRAYS

const numbers = new Array(1,2,3,4);
numbers.push(5);
numbers.unshift("this brings me to top");
numbers.pop(); //cuts off the last one
console.log(numbers); 
console.log(numbers.indexOf(2));

const Ansh_details = {
    firstName: 'Ansh',
    lastName: 'Shrivastav',
    interets: ['cricket', 'football', 'public speaking'],
    age : 30
}
console.log(Ansh_details.firstName, Ansh_details.lastName + " is " + Ansh_details.age + " years old")
console.log(Ansh_details.interets);

 Ansh_details.email = '22JE0133@iitism.ac.in';
 console.log(Ansh_details.email);


 //Sending data to server by converting it to JASON

 const Send_Ansh_JASON = JSON.stringify(Ansh_details);
 console.log(Send_Ansh_JASON);

 //Loops
        //for
 for(let i=0; i<numbers[2]; i++){
    console.log(i);
 }

 for(let numb of numbers){
    console.log(numb);
 }

        //while
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//use of ===
// == -> comparison operator without matching of data types
//=== --> data type should also coincide

//switch works exactly the same way as that in cpp

//functions

function addNums(num1, num2){
    console.log(num1+num2);
}

console.log(addNums(4,3));

const addNums22 = (num1, num2) =>{  //fat arrow things; works as a function itself
    console.log(num1+num2);
}

console.log(addNums22(4,3));

//constructor and intantiate objects

//constructor

function Person(firstname, lastname, dob){
this.firstname = firstname
this.lastname = lastname;
this.dob = dob;
}

//instantiate function
const person12 = new Person('Ansh', 'Shrivastav', '13-10-2004');
const person13 = new Person('Shlok', 'Shrivastav', '9-11-1999');

console.log(person12); 

//class

class person5 {
    constructor(firstname, lastname, dob){
        this.firstname = firstname
        this.lastname = lastname;
        this.dob = dob;
    }
}

const person14 = new person5('Shlok', 'Shrivastav', '9-11-1999');

console.log(person14); 