const repository = require("../db/repository")

module.exports = {
    calculateTotalPrice: async (id, quantity) => {
        var price = await repository.alcohol.getAlcoholPrice(id)
        return price * quantity
    }
}