const express = require('express')
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())



require('./db/Connection')
const angularschema = require('./model/schema')


app.get('/', (req, res) => {
    try {
        res.send('Hello World!')
    }
    catch (err) {
        res.send(err)
    }
})

app.post("/postdata", async (req, res) => {
    try {
        const data = new angularschema(req.body);
        const insertdata = await data.save();
        res.send(insertdata);
        console.log(insertdata);
    }
    catch (error) {
        res.send(error);
    }
})

app.get("/getdata", async (req, res) => {
    try {
        const getd = await angularschema.find({})
        res.send(getd)
    }
    catch (error) {
        res.send(error)
    }
})

app.get("/getdata/:id", async (req, res) => {
    try {
        const id = req.params.id
        const getd = await angularschema.find({ _id: id })
        res.send(getd)
    }
    catch (error) {
        res.send(error)
    }
})
app.put("/updatedata/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedata = await angularschema.findByIdAndUpdate(id, req.body)
        res.send(updatedata);
        console.log(updatedata);
    }
    catch (error) {
        res.send(error)
    }
})

app.delete("/deletedata/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await angularschema.findByIdAndDelete(id)
        res.send(deletedata);
        console.log(deletedata)
    }
    catch (error) {
        console.log(error)
    }
})
app.listen(8000)