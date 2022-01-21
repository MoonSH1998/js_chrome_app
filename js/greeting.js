const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";
const removeRocal = document.querySelector("#removeRocal");
const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleloginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function removeRocalStor() {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

removeRocal.addEventListener("click", removeRocalStor);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleloginSubmit)
}else {
    paintGreetings(savedUsername);
}
