require('dotenv').config()
const express = require('express')
const messageCtrl = require('./messagesCtrl')
const session = require('express-session')

let { SERVER_PORT, SESSION_SECRET } = process.env

const app = express()

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.use(express.json())

app.get('/api/messages', messageCtrl.getAllMessages)
app.post('/api/messages', messageCtrl.createMessage)
app.get('/api/messages/history', messageCtrl.history)

app.listen(SERVER_PORT, () => {
    console.log('listening on ', SERVER_PORT)
})