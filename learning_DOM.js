const para = document.getElementById('text');
        para.style.color = 'red';
        const ul = document.getElementsByTagName('ul');
        const li = document.createElement('li');

        const para2 = document.getElementById('text');
        console.log(para2.innerText);   //to bring out the html text to console using the inner text code
        console.log(para2.innerHTML);   //to bring out the html text to console using the inner text code
        console.log(para2.textContent);   //to bring out the html text to console using the inner text code
        li.innerText = "madarchod";

        for(i=0;i< ul.length;i++){
            ul[i].style.fontSize = '20px';
        }

function do_it(){
    const li_ = document.getElementById("li1");
    li_.style.color="red";
    var name2 = document.getElementById("name").value;    
    var message = "hello " + name2 + " !";
    
    document.getElementById("bhosda")
    .textContent = message;
}