const express = require('express')
const bodyparser = require('body-parser')
const messages_controller = require('./messages_controller')

app = express()

app.use(bodyparser.json())

const port = 3000

app.use(express.static( __dirname + '/public/build' ) );

app.listen(port, () => { console.log('Server listening on port' + port) })

const messagesBaseUrl = '/api/messages'

app.post(messagesBaseUrl, messages_controller.create)
app.get(messagesBaseUrl, messages_controller.read)
app.put(messagesBaseUrl + '/:id', messages_controller.update)
app.del(messagesBaseUrl + '/:id', messages_controller.del)

