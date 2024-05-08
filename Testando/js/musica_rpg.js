document.addEventListener('DOMContentLoaded', function() {
    const clientId = 'seu-client-id';
const clientSecret = 'seu-client-secret';

// Defina a URL do endpoint de token
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

// Construa o corpo da solicitação POST
const requestBody = new URLSearchParams();
requestBody.append('grant_type', 'client_credentials');
requestBody.append('client_id', clientId);
requestBody.append('client_secret', clientSecret);

// Opções da solicitação
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: requestBody,
};

// Faça a solicitação POST para obter o token de acesso
fetch(tokenEndpoint, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Se a solicitação for bem-sucedida, o token de acesso estará em data.access_token
    const accessToken = data.access_token;
    console.log('Token de acesso:', accessToken);

    // Agora você pode usar o token de acesso para fazer outras solicitações à API do Spotify
  })
  .catch(error => {
    console.error('Erro ao obter o token de acesso:', error);
  });

  });// Defina as credenciais do seu aplicativo do Spotify
