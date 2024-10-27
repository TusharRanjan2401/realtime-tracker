const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongodb connected");
    })
    .catch((err) => {
        console.log("Error in connecting db")
    })
    