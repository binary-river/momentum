const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onloadEvent(){
    const savedName = localStorage.getItem(USERNAME_KEY);
    // console.log(savedName). 
    if( savedName != null ) {
        greeting(savedName);
    }
}

function handleSubmit(info){
    info.preventDefault();
    const username = loginInput.value;
    greeting(username);

    localStorage.setItem(USERNAME_KEY, username);
}

function handleLinkClick(arg1){
    console.log(arg1)
    console.dir(arg1)
    arg1.preventDefault();
}

function greeting(username){
    const h1 = document.getElementById("greetingH1");
    h1.innerText = `hello, ${username}`;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    h1.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleSubmit);
// link.addEventListener("click", handleLinkClick)
onloadEvent();
