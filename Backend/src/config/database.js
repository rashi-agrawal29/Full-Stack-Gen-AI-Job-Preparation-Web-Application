const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to MongoDB database")
    }
    catch (err) {
        console.error("Error connecting to MongoDB database", err)
    }
}

module.exports = connectToDB