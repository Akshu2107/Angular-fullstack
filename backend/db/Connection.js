const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/employee")
    .then(() => {
        console.log("Mongodb database connected")
    })
    .catch((e) => {
        console.log("failed to connect")
    }) 