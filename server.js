const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/your/private_key.pem'),
  cert: fs.readFileSync('path/to/your/server_certificate.pem'),
  ca: fs.readFileSync('path/to/your/ca_bundle.pem'),
  requestCert: true,
  rejectUnauthorized: false,
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end(fs.readFileSync('index.html'));
}).listen(443);

console.log('Server running on https://localhost/');
