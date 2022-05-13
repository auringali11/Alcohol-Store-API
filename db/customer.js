const pool = require("./connection")

module.exports = {
    getCustomersByUsername: async ( username ) => {
        return await pool.query('SELECT * FROM customers WHERE username = ?', [username])
    },
    insertingIntoCustomer: async (body) => {
        var sql = `INSERT INTO customers(username, password, block_number, room_number) 
                        VALUES(?,?,?,?)`;
        await pool.query(sql, [body.username, body.password, body.block_number, body.room_number])
        return 'Customer registered'
    },
    placeOrder: async (body, totalPrice) =>{
        var insertOrder = `INSERT INTO orders (customer_id, alcohol_id, quantity, total_price)
                         VALUES(?,?,?,?)`;
        await pool.query(insertOrder, [body.customer_id, body.alcohol_id, body.quantity, totalPrice])
        return 'Order is placed'
    },
    deleteOrderById: async (id) => {
        await pool.query('DELETE FROM orders WHERE order_id = ?', [id])
        return 'Order is deleted'
    },
    updateOrderById: async (body, totalPrice, id) => {
        var updateOrder = `UPDATE orders SET customer_id = ?, alcohol_id = ?, quantity = ?, total_price = ? WHERE order_id = ?`
        await pool.query(updateOrder, [body.customer_id, body.alcohol_id, body.quantity, totalPrice, id])
        return 'Order is updated'
    }
}