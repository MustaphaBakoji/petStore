import mongoose from "mongoose"

export let DB_CONNECTION = () => {
    mongoose.connect(process.env.DB,)
        .then(() => {
            console.log("DB connected successfully")
        })
        .catch((error) => {
            console.log("DB connection failed", error.message)
        })

}