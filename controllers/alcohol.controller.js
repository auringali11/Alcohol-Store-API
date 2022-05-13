const repository = require("../db/repository");

module.exports = {

    gettingAlcoholMenu: async (req, res)=>{
        var data = await repository.alcohol.getAlcoholMenu()
        res.send(data)
    },

    gettingAlcoholById: async (req, res)=>{
        var data = await repository.alcohol.getAlcoholById(req.params.id)
        res.send(data)
    },

    deletingAlcoholById: async (req, res)=>{
        var message = await repository.alcohol.deleteAlcohol(req.params.id)
        res.send(message)
    },

    insertingAlcohol: async (req, res)=>{
        const body = req.body;
        var message = await repository.alcohol.insertAlcohol(body)
        res.send(message)
    },

    updatingAlcoholById: async (req, res)=>{
        let body = req.body;
        var message = await repository.alcohol.updateAlcohol(body, req.params.id) 
        res.send(message)
    }
}