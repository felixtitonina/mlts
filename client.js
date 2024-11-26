const https = require('https');
const fs = require('fs');

const options = {
  // hostname: 'localhost',
  // port: 8443,
  // path: '/',
  // method: 'GET',
  // key: fs.readFileSync('client.key'), // Chave privada do cliente
  // cert: fs.readFileSync('client.crt'), // Certificado do cliente
  // ca: fs.readFileSync('ca.crt'), // Certificado da CA
  // rejectUnauthorized: true, // Verificar validade do certificado do servidor
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
