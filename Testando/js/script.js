document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  // Recupera os valores dos campos do formulário
  var nome = document.getElementById("inputNome").value;
  var apelido = document.getElementById("inputApelido").value;
  var telefone = document.getElementById("inputTelefone").value;
  var email = document.getElementById("exampleInputEmail1").value;
  
  // Exibe a mensagem de sucesso em uma janela pop-up
  alert("Dados cadastrados com sucesso!");

  // Insere os dados do formulário na nova div
  var dadosDiv = document.getElementById("dadosCadastrados");
  dadosDiv.innerHTML = "<h3>Dados Cadastrados:</h3><p>Nome: " + nome + "</p><p>Apelido: " + apelido + "</p><p>Telefone: " + telefone + "</p><p>Email: " + email + "</p>";
});
