import { Town } from '../models/town.model.js'

const getAll = async (req, res) => {
    try {
        const query = await Town.find()
        if (query) {
            return query
                ? res.status(200).json({ status: 200, response: "success", data: query })
                : res.status(404).json({ status: 404, responseError: "not found" })
        }
    } catch (error) {
        return res.status(500).json({ status: 500, responseError: error })
    }
}

const getByName = async (req, res) => {
    try {
        const { name } = req.params;
        const query = await Town.findOne({ name: name })
        if (query) {
            return query
                ? res.status(200).json({ status: 200, response: "success", data: query })
                : res.status(404).json({ status: 404, responseError: "not found" })
        }
    } catch (error) {
        return res.status(500).json({ status: 500, responseError: error })
    }
}

export { getAll, getByName }