let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter a name');
    if(myName === '' || myName === null) {
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName;
    }
        
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = 'Hello' + localStorage.getItem('name');
}

myButton.onclick = function() {
    setUserName();
}