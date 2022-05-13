const repository = require("../db/repository")
const { schema } = require('../models/customers.model');
const { calculateTotalPrice } = require('../services/alcohol.service');
const { login, passwordHashing } = require('../services/customer.service')

module.exports = {
    signUpCustomer: async (req, res) => {
        try {
            const body = req.body;
            await schema.validateAsync(body);
            body.password = await passwordHashing(body.password)
            const message = await repository.customers.insertingIntoCustomer(body)
            res.send(message)
        } catch {
            res.status(500).send();
        }
    },
    loginCustomer: async (req, res) => {
        try{
            const body = req.body;
            const data = await repository.customers.getCustomersByUsername(body.username)
            res.send(await login(body, data))
        } catch {
            res.status(500).send();
        }
        
    },  
    placingOrder: async (req, res) => {
        try{
            const body = req.body;
            var totalPrice = await calculateTotalPrice(body.alcohol_id, body.quantity)
            const message = await repository.customers.placeOrder(body, totalPrice)
            res.send(message)
        } catch {
            res.status(500).send();
        }
    },
    deletingOrderById: async (req, res) => {
        try{
            var message = await repository.customers.deleteOrderById(req.params.id)
            res.send(message)
        } catch {
            res.status(500).send()
        }
        
    },
    updatingOrderById: async (req, res) => {
        try{
            const body = req.body;
            var totalPrice = await calculateTotalPrice(body.alcohol_id, body.quantity)
            var message = await repository.customers.updateOrderById(body, totalPrice, req.params.id)
            res.send(message)
        } catch {
            res.status(500).send()
        }
        
    }
}
