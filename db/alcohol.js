const pool = require("./connection")

module.exports = {
    getAlcoholPrice: async (id) => {
        data = await pool.query(`SELECT * FROM alcohol_menu WHERE alcohol_id = ?`, [id])
        return data[0].Price
    },
    getAlcoholMenu: async () => {
        return await pool.query('SELECT * FROM alcohol_menu')
    },
    getAlcoholById: async (id) => {
        return await pool.query('SELECT * FROM alcohol_menu WHERE Alcohol_id = ?', [id])
    },
    deleteAlcohol: async(id) => {
        await pool.query('DELETE FROM alcohol_menu WHERE Alcohol_id = ?', [id])
        return 'Alcohol is deleted.'
    },
    insertAlcohol: async (body) => {
        var sql = `INSERT INTO alcohol_menu(Name, Amount_in_stock, Price)
                        VALUES(?,?,?)`;
        await pool.query(sql, [body.Name, body.Amount_in_stock, body.Price])
        return 'Alcohol is inserted.'
    },
    updateAlcohol: async(body, id) => {
        var sql = `UPDATE alcohol_menu SET Name=?, Amount_in_stock=?, Price=? WHERE Alcohol_id = ?`; 
        await pool.query(sql, [body.Name, body.Amount_in_stock, body.Price, id])
        return 'Alcohol is updated.'
    }
}