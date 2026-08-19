let nome = prompt("Por favor, digite seu nome:");

if (nome === "" || !nome) {
    nome = "Visitante";
}

const titulo = document.getElementById("welcome-message");
titulo.textContent = `Olá ${nome}!`;