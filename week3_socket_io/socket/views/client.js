const clientIO = io();

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`\nPing button clicked`);
 
};

const sendChatMessage = () => {
    logEvent('\nChat button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        //TODO - send message from client
        clientIO.emit('chat-from-client', message)
        logEvent(`\nON CLIENT - CHAT - SENT - with message : ${message}`)
    }else{
        logEvent(`\nON CLIENT - CHAT - ERROR - Message is empty. Can't send.`)
    }
};

clientIO.on('chat-from-server', (data) => {
    logEvent(`\nON CLIENT - CHAT - RECEIVED - from user ${data.user} : ${data.message}`)
});

clientIO.on('chat-ack', (ackMessage) => {
    logEvent(`\nON CLIENT - CHAT-ACK - RECEIVED - with message : ${ackMessage}`)
});

const sendFeedback = () =>{
    logEvent('\nSend feedback button clicked');
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date:  new Date(),
        user: clientIO.id,
        message: userInput
    }

    // TODO - send feedback from client
    clientIO.emit('feedback-from-client', feedback)
    logEvent(`\nON CLIENT - FEEDBACK - SENT : ${JSON.stringify(feedback)}`);
};

    clientIO.on('feedback-ack', (ackMessage) => {
    logEvent(`\nON CLIENT - FEEDBACK-ACK - RECEIVED - with message : ${ackMessage}`)
});

const joinGroup = () => {
    logEvent('\nJoin group button clicked');
    
    // TODO - send group join request
    clientIO.emit('join-group',"gbcoders")
    logEvent(`\nON CLIENT - JOIN-GROUP - SENT - request sent.`)
};


    const sendGroupMessage = () => {
    logEvent('\nSend group message button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        const groupMessage = {
            user: clientIO.id,
            group: "gbcoders",
            message: message
        }
        //send message from client
        clientIO.emit('group-message-from-client', groupMessage);

        logEvent(`\nON CLIENT - GROUP-MESSAGE - SENT - with message : ${JSON.stringify(groupMessage)}`)
    }else{
        logEvent(`\nON CLIENT - GROUP-MESSAGE - ERROR - Message is empty. Can't send.`)
    }
};

clientIO.on('group-message-from-server', (data) => {
    logEvent(`\nON CLIENT - GROUP-MESSAGE-ACK - RECIEVED - with message : ${data}`)
})

clientIO.on('group-ack', (msg)=>{
    logEvent(`\nON CLIENT - GROUP-ACK - RECIEVED - with message : ${msg}`)
})

const leaveGroup = () => {
    logEvent('\Leave group button clicked');

    // TODO - send group leave request
    clientIO('leave-group',"gbcoders")
    logEvent(`\nON CLIENT - LEAVE-GROUP - SENT - request sent.`)
};

const disconnectServer = () => {
    logEvent('\nDisconnect server button clicked');

    // TODO - send disconnect  request

    // logEvent(`\nON CLIENT - DISCONNECT - SENT - request sent.`)
};