const fs = require('fs');

const userLogs = (req, res, next) => {
    let logMsg = `El usuario ingresó a la ruta: ${req.url}\n`;
    fs.appendFileSync('userLogs.txt', logMsg);
    next();
}

module.exports = userLogs