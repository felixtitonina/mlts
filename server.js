const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'), // Chave privada do servidor
  cert: fs.readFileSync('server.crt'), // Certificado do servidor
  ca: fs.readFileSync('ca.crt'), // Certificado da CA
  requestCert: true, // Exigir certificado do cliente
  rejectUnauthorized: true, // Rejeitar conexões não autorizadas
};

// Desabilitar Validação do Hostname (Somente para Testes)
// No cliente, adicione a opção checkServerIdentity:
// const options = {
//   hostname: 'localhost',
//   port: 8443,
//   key: fs.readFileSync('client.key'),
//   cert: fs.readFileSync('client.crt'),
//   ca: fs.readFileSync('ca.crt'),
//   rejectUnauthorized: true,
//   checkServerIdentity: () => null, // Ignora validação do hostname
// };

const server = https.createServer(options, (req, res) => {
  if (req.client.authorized) {
    res.writeHead(200);
    res.end('Hello, secure world!');
  } else {
    res.writeHead(401);
    res.end('Unauthorized');
  }
});

server.listen(8443, () => {
  console.log('Server running on https://localhost:8443');
});