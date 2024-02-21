import { connect } from "mongoose"

const dbConnect = async () => {
    const DB_URI = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PWD}@cluster0.qssqkx6.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`
    await connect(DB_URI)
}

export { dbConnect }