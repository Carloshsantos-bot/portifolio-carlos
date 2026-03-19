// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function(event){

event.preventDefault();

// Captura dos valores
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

// Verifica campos vazios
if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos!");
return;
}

// Validação de e-mail mais completa
let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailValido.test(email)){
alert("Digite um email válido!");
return;
}

// Mensagem de sucesso
alert("Mensagem enviada com sucesso!");

// Limpa o formulário
document.getElementById("formContato").reset();

});
