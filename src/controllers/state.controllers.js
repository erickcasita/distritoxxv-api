import { State } from '../models/state.model.js'

const getAll = async (req, res) => {
    try {
        const query = await State.find()

        return query.length != 0
            ? res.status(200).json({ status: 200, response: "success", data: query })
            : res.status(404).json({ status: 404, responseError: "not found" })

    } catch (error) {
        return res.status(500).json({ status: 500, responseError: error })
    }
}

export { getAll }