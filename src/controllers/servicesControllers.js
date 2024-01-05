const servicesControllers = {
    services: (req, res) => {
        res.send('Bienvenido a services')
    },
    desing: (req, res) => {
        res.send('Bienvenido a desing')
    }
}

module.exports = servicesControllers