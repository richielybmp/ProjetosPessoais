var fs = require('fs');

module.exports = function(filename, sucesso, erro){
    fs.readFile(filename, (err, data) =>{
        if(err){
            erro(err);
        }
        else {
            sucesso(data);
        }
    });
};