const validationAdmin = (req, res, next) => {
    const adminUsers = ['Ada', 'Greta', 'Vim', 'Tim'];
    const user = req.query.user

    if(adminUsers.includes(user)){
        next()
    }else{
        res.send('No tienes los privilegios para ingresar')
    }
};

module.exports = validationAdmin