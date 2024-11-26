==== geradpr de CA
openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt \
-subj "/C=US/ST=State/L=City/O=MyOrg/OU=OrgUnit/CN=MyCA"


==== Certificado do Servidor
openssl genrsa -out server.key 2048


openssl req -new -key server.key -out server.csr \
-subj "/C=US/ST=State/L=City/O=MyOrg/OU=OrgUnit/CN=localhost"


openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256




==== Certificado do Cliente

openssl genrsa -out client.key 2048



openssl req -new -key client.key -out client.csr \
-subj "/C=US/ST=State/L=City/O=MyOrg/OU=OrgUnit/CN=ClientCert"



openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365 -sha256



CA: ca.key e ca.crt
Servidor: server.key e server.crt
Cliente: client.key e client.crt


iniciar server 
node server 

iniciar cliente

node client