const express = require(`express`)
const moongose = require(`mongoose`)

const app = express()

const DB_URL = `localhost`
const DB_PORT = 27017
const DB_NAME = `nodeapi`

moongose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`)

app.listen(3001)

app.get(`/`, (req, res) => {
    return res.send(`Hello world`)
})

