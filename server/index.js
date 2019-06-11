require('dotenv').config()
const express = require('express')
const messageCtrl = require('./messagesCtrl')

let { SERVER_PORT } = process.env

const app = express()

app.use(express.json())

app.get('/api/messages', messageCtrl.getAllMessages)
app.post('/api/messages', messageCtrl.createMessage)

app.listen(SERVER_PORT, () => {
    console.log('listening on ', SERVER_PORT)
})