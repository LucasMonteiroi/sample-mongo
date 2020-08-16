const itemSchema = require('../schemas/Item');

class ItemController {
    async bulkInsert(req, res) {
        const bulkData = req.body;
        const createdItens = [];
        bulkData.map(item => {
            itemSchema.create({
                description: item.description, 
                value: item.value, 
                quantity: item.quantity
            }).then(created => {
                createdItens.push(created);
            });
        })
        
        return res.json({createdItens});
    }

    async create(req, res) {
        const { description, value, quantity } = req.body;
        const createdItem = await itemSchema.create({description, value, quantity})
        return res.json({createdItem});
    }

    async update(req, res) {
        const id = req.params.id;
        const { description, value, quantity } = req.body;
        const data = await itemSchema.findById(id);
        const updatedData = await data.updateOne({description, value, quantity});
        return res.json(updatedData);
    }
    
    async getAll(req, res) {
        const data = await itemSchema.find();
        return res.json({data});
    }

    async getById(req, res) {
        const id = req.params.id;
        const data = await itemSchema.findById(id);
        return res.json({data});
    }

    async delete(req, res) {
        const id = req.params.id;
        const data = await itemSchema.findById(id);
        const deleted = data.deleteOne();
        return res.json({deleted})
    }
}

module.exports = new ItemController();