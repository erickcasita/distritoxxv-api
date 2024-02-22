import { Town } from '../models/town.model.js'

const getAll = async (req, res) => {
    try {
        const query = await Town.find()

        return query.length != 0
            ? res.status(200).json({ status: 200, response: "success", data: query })
            : res.status(404).json({ status: 404, responseError: "not found" })

    } catch (error) {
        return res.status(500).json({ status: 500, responseError: error })
    }
}

const getByEntity = async (req, res) => {
    try {
        const { entity } = req.params;
        const query = await Town.find({ entity: entity })

        return query.length != 0
            ? res.status(200).json({ status: 200, response: "success", data: query })
            : res.status(404).json({ status: 404, responseError: "not found" })

    } catch (error) {
        return res.status(500).json({ status: 500, responseError: error })
    }
}

export { getAll, getByEntity }