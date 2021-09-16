function homeOnLoad() {
    alert("Welcome!");
    checkLoggedUser();
}

function formOpen() {
    let form = document.getElementById("loginForm")
    form.style.display = "block";
}

function closeForm() {
    let form = document.getElementById("loginForm")
    form.style.display = "none";
}

//Funzione per salvare username e password nello storage (invocata con onsubmit)
function save() {
    //recupero il valore (.value) inserito dall'utente nel campo che ha id 'username'
    let inseredUsername = document.getElementById("username").value;

    //recupero il valore (.value) inserito dall'utente nel campo che ha id 'password'
    let inseredPassword = document.getElementById("password").value;

    //salvo questi valori nel local storage:
    localStorage.setItem('username', inseredUsername) //key = username, value = inseredUsername (ovvero ciò che ha scritto l'utente)
    localStorage.setItem('password', inseredPassword)
}

function hideForm() {
    //recuperare tramite id e nascondere la form 
    let form = document.getElementById("loginForm");

    form.style.display = "none"; //cambia lo stile della form con display: none => la nasconde

    //recuperare e far scomparire o disabilitare tast 'Effettua login'
    let openFormButton = document.getElementById("openLoginForm");
    openFormButton.disabled = true;

    //recuperare e far comparire il tasto Esci 
    let logoutButton = document.getElementById("logOutButton");

    logoutButton.style.display = "";
}


function checkLoggedUser() {
    //recuperare i dati dal local storage
    //se c'è un oggetto con chiave username e un oggetto con chiave password => utente loggato => vede tasto 'effettua login' disabilitato e tasto esci
    //se non c'è un oggetto con chiave username e un oggetto con chiave password => utente non loggato => vede tasto effettua login abilitato e non vede tasto esci

    let storedUsername = localStorage.getItem('username'); //recupero l'oggetto con getItem passandogli la chiave (key)
    let storedPassword = localStorage.getItem('password');

    let logoutButton = document.getElementById("logOutButton");
    
    if (storedUsername != null && storedPassword != null) //se è loggato => trova qualcosa nel local storage
    {
        hideForm();
        /*logoutButton.disabled = false;*/
    }
    else logOut();
}

function logOut() {

    //ripulire il localstorage
    localStorage.clear();

    //recuperare la form e mostrarla di nuovo 
    let form = document.getElementById("loginForm");
    form.style.display = "";

    //abilitare il tasto 'Effettua login'
    let openFormButton = document.getElementById("openLoginForm");
    openFormButton.disabled = false;

    //recuperare e nascondere tasto logout
    let logoutButton = document.getElementById("logOutButton");
    logoutButton.style.display = "none";

}