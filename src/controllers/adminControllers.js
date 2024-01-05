const adminControllers = {
    admin: (req, res)=>{
        const user = req.query.user;
        res.send(`Hola admin: ${user}`);
    }
}

module.exports = adminControllers