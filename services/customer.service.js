const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    passwordHashing: async (password) =>  {
        return await bcrypt.hash(password, 10);
    },
    login: async (body, data) => {
        const result = await bcrypt.compare(body.password, data[0].password)
            if(result) {
                data[0].password = undefined;
                const jsontoken = sign({ result: data }, process.env.KEY, {
                    expiresIn: '1h'
                });
                return {    
                    message: 'logged in',
                    token: jsontoken
                };
            } else return 'Invalid username or password'
    }
}