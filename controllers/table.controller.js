const testtable = require('../models/models')

class TableController {
    async getTable(req, res) {
        let {limit,page} = req.query

        // page = page || 1
        // limit = limit || 3
        // let offset = page * limit - limit

        const information = await testtable.findAndCountAll()
        return res.json(information)
    }
    async getByName(req, res) {
        let name = req.query
        const rows = await testtable.findOne({where:name})
        return res.json(rows)
    }
    async Sort(req, res) {
        const rows = (await testtable.findAll())
        const field = req.query.column
        const order = req.query.order

        function byField(field) {
            if (order === 'desc') {
                return (a, b) => a[field] < b[field] ? 1 : -1;
            } else if (order === 'asc') {
                return (a, b) => a[field] > b[field] ? 1 : -1;
            }
        }
        rows.sort(byField(field))
        return res.json(rows)
    }

}

module.exports = new TableController()