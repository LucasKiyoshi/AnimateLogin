function acess() {
    // @ts-ignore
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // @ts-ignore
        var username = document.getElementById("username").value;
        // @ts-ignore
        var password = document.getElementById("password").value;

        if (username === "admin" && password === "123") {
            alert("Login realizado com sucesso");
        } else {
            alert("Usuario e/ou senha incorretos. Tente novamente")
        }
    })
}

var isChecked = false;
var image = false;
var imageNameChecked = false

function changeImageName() {
    // @ts-ignore
    image = document.getElementById('animate');
    // @ts-ignore
    if (image.src.match('./img/neutral.png')) {
        // @ts-ignore
        image.src = './img/active.png';
        isChecked = false;
    } else {
        // @ts-ignore
        image.src = './img/neutral.png';
        isChecked = true;
    }
}

function changeImagePassword() {
    // @ts-ignore
    image = document.getElementById('animate');
    // @ts-ignore
    if (image.src.match('./img/neutral.png') || image.src.match('./img/active.png')) {
        // @ts-ignore
        image.src = './img/shy.png';
        isChecked = false;
    } else {
        // @ts-ignore
        image.src = './img/neutral.png';
        isChecked = true;
    }
}