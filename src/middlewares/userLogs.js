const fs = require('fs')

function userLogs (req, res, next) {
    fs.writeFileSync('userLogs.txt', 'El usuario ingresó a la ruta: ', req.url);
    next();
}

module.exports = {userLogs}