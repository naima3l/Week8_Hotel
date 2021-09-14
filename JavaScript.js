function homeOnLoad() {
    alert("Welcome!");
}

function formAppear() {
    let form = document.getElementById("formLogin");
    let button = document.getElementById("login");

    form.style.visibility = "visible";
    button.style.visibility = "";
}