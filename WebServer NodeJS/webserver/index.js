/*
A principal e real função do index.js é funcionar como
uma espécie de container, centralizando a utilização dos
módulos, que serão separados por responsabilidades, ou seja, 
cada módulo será responsável por uma parte do trabalho realizado. 
*/

process.title= 'MeuWebServer'
var args = process.argv,
    port = args[2] || 7070,
    webServer = require('./server');

webServer.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port);
});
