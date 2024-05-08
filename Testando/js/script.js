document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  
  // Recupera o valor do CEP
  var cep = document.getElementById("inputCEP").value.replace(/\D/g, '');
  
  // Verifica se o CEP foi preenchido
  if (cep.length === 8) {
    // Faz a requisição para a API da ViaCEP
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
      // Verifica se o CEP foi encontrado
      if (!('erro' in data)) {
        // Preenche os campos de rua, bairro, cidade e estado com os dados retornados
        document.getElementById("inputRua").value = data.logradouro;
        document.getElementById("inputBairro").value = data.bairro;
        document.getElementById("inputCidade").value = data.localidade;
        document.getElementById("inputEstado").value = data.uf;
      } else {
        // Exibe uma mensagem de erro para o usuário
        alert('CEP não encontrado.');
      }
    });
  } else {
    // Limpa os campos de rua, bairro, cidade e estado caso o CEP tenha uma quantidade incorreta de caracteres
    document.getElementById("inputRua").value = '';
    document.getElementById("inputBairro").value = '';
    document.getElementById("inputCidade").value = '';
    document.getElementById("inputEstado").value = '';
  }
  
  // Recupera os valores dos campos do formulário
  var nome = document.getElementById("inputNome").value;
  var apelido = document.getElementById("inputApelido").value;
  var telefone = document.getElementById("inputTelefone").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var rua = document.getElementById("inputRua").value;
  var bairro = document.getElementById("inputBairro").value;
  var cidade = document.getElementById("inputCidade").value;
  var estado = document.getElementById("inputEstado").value;
  
  // Exibe os dados cadastrados na div com o id "dadosCadastrados"
  var dadosDiv = document.getElementById("dadosCadastrados");
  dadosDiv.innerHTML = "<h3>Dados Cadastrados:</h3>" +
                      "<p>Nome: " + nome + "</p>" +
                      "<p>Apelido: " + apelido + "</p>" +
                      "<p>Telefone: " + telefone + "</p>" +
                      "<p>Email: " + email + "</p>" +
                      "<p>Rua: " + rua + "</p>" +
                      "<p>Bairro: " + bairro + "</p>" +
                      "<p>Cidade: " + cidade + "</p>" +
                      "<p>Estado: " + estado + "</p>";
});


document.getElementById('formFicha').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  // Obtém os valores dos campos do formulário
  var nome = document.getElementById('nomeInput').value;
  var raca = document.getElementById('racaInput').value;
  var classe = document.getElementById('classeInput').value;
  // Adicione mais campos conforme necessário

  // Cria um novo documento PDF
  var doc = new jsPDF();

  // Adiciona o conteúdo ao PDF
  doc.text('Nome: ' + nome, 10, 10);
  doc.text('Raça: ' + raca, 10, 20);
  doc.text('Classe: ' + classe, 10, 30);
  // Adicione mais campos conforme necessário

  // Salva o PDF e permite o download
  doc.save('ficha_personagem.pdf');
});