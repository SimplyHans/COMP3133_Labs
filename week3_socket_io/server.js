// dependencies : npm install express socket.io nodemon
// to run the app : npx nodemon server.js

const express = require('express')
const path = require('path');
const ioSocket = require('socket.io')

const SERVER_PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'socket/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'socket/views/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}/`)
})

const ioServer = ioSocket(appServer)

ioServer.on('connection', (socket) => {
    console.log('New client connected', socket.id)

    socket.on('ping', (data) => {
        console.log('Ping received from client:', data)
        //send pong back to client
        socket.emit('pong-ack', "Hello from the Server")
        // socket.broadcast.emit('pong-ack', "Hello from the Server")
        // ioSocket.emit('pong-ack', "Hello from the Server")
        console.log('Pong sent to client')
    })

    socket.on('chat-from-client', (message) => {
        console.log(`Chat message received from client ${socket.id} : ${message}`)

        //broadcast the chat message to all other clients except sender
        socket.broadcast.emit('chat-from-server', {
            user: socket.id,
            message: message
        })
        
        //optionally, send an acknowledgment back to sender
        socket.emit('chat-ack', 'Message received loud and clear!')
    })

    socket.on('feedback-from-client', (feedback) => {
        console.log(`Feedback received from client ${socket.id} : ${JSON.stringify(feedback)}`)

        // Optionally, send an acknowledgment back to sender
        socket.emit('feedback-ack', 'Feedback received. Thank you!')
    })

    socket.on('join-group', (groupName) => {
        socket.join(groupName)
        const msg = `Client ${socket.id} joined group ${groupName}`
        console.log(msg)

        ioServer.to(groupName).emit('group-ack', msg)
    })

    socket.on('group-message-from-client', (data) => {
        const {group, message} = data
        console.log(`Group message received from client ${socket.id} to group ${group} : ${message}`)
        ioServer.to(group).emit('group-message-from-server', {
            user: socket.id,
            group: group,
            message: message
        })
    })

    socket.on('leave-group', (groupName) => {
        socket.leave(groupName)
        const msg = `Client ${socket.id} left group ${groupName}`
        console.log(msg)

        ioServer.to(groupName).emit('group-ack', msg)
    })
 

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id)
    })

})