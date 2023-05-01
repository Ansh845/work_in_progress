// this section aims at executing events over objects of html

// console.log(window);
// window.alert(1);

//single element

// console.log(document.getElementById('myform')); //selects an ID form html file for action execution
// console.log("ab bol na madarchod")
// console.log(document.querySelector('.myform')); //query selector is like a superset that can automatically detect wheter the input function is id or class.




//multiple element
// console.log(document.querySelectorAll('.friends'));
// console.log(document.getElementsByClassName('items'));
// console.log(document.getElementsByTagName('h1'));

//he below two lines are there for text edits
// const ul = document.getElementById('friends');
// ul.firstElementChild.textContent= 'hello';


// ul.remove();

// ul.lastElementChild.remove(); //removes the last element of the list

// ul.children[2].textContent = 'hi there';

// const y5 =document.getElementById('friends');
// y5.children[2].innerHTML= '<h1>HELLO</h1>';

// const pr = document.querySelector('.btn');
// pr.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(e.target);
// });

const myForm = document.getElementById('myform');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
e.preventDefault();

if(emailInput.value ==''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
setTimeout(() => msg.remove(), 3000);
}
}



