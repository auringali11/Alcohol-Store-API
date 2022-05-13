const express = require('express');
const { 
    signUpCustomer, 
    loginCustomer, 
    placingOrder, 
    deletingOrderById, 
    updatingOrderById 
} = require("../controllers/customer.controller")

const { 
    gettingAlcoholMenu, 
    gettingAlcoholById, 
    deletingAlcoholById, 
    insertingAlcohol, 
    updatingAlcoholById 
} = require("../controllers/alcohol.controller")

const { checkToken } = require('../auth/tokern_validation');
const router = express.Router();
router.use(express.json());

//routers
router.post('/customers/registration', signUpCustomer);
router.post('/customers/login', loginCustomer);
router.get('/alcohol', checkToken, gettingAlcoholMenu);
router.get('/alcohol/:id', checkToken, gettingAlcoholById);
router.delete('/alcohol/:id', checkToken, deletingAlcoholById);
router.post('/alcohol', checkToken, insertingAlcohol);
router.put('/alcohol/:id', checkToken, updatingAlcoholById); 
router.post('/customers/ordering', checkToken, placingOrder);
router.delete('/customers/deleteOrder/:id', checkToken, deletingOrderById);
router.put('/customers/updateOrder/:id', checkToken, updatingOrderById);

module.exports = router;