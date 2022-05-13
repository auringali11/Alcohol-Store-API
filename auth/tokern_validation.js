const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) =>{
        let token = req.get('authorization');
        if(token){
            // remove the bearer
            token = token.slice(7);
            verify(token, process.env.KEY, (err, decoded) =>{
                if(err){
                    res.send('Invalid token')
                }else{
                    next();
                }
            })

        }else{
            res.send('Access denied! Unauthorized customer');
        }
    }
}