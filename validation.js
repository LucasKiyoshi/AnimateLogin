function clicabotao() {
    document.getElementById('login-form').addEventListener('submit'),
        function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById('password').value;

            if (username === "amdmin" && password === "1234") {
                alert("Login realizado com sucesso");
            } else {
                alert("Usuario e/ou senhas invalidas. Tente novamente.")
            }

        }
}