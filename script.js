document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  if (nome === "" || email === "" || senha.length < 6) {
    mensagem.textContent = "Preencha corretamente os campos (senha mínimo 6 caracteres)";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
  }
});
