const fs = require('fs'); 
const path = require('path'); 

module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '..', 'log', 'userLogs.txt'),  `\n El usuario ingreó a la ruta: ${req.url}\n`);
    next();
};