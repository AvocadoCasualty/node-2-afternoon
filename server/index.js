const express = require('express');
const ctrl = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
// app.use(express.static)

const messagesBaseUrl = "/api/messages"
app.get(`${messagesBaseUrl}`, ctrl.read)
app.post(`${messagesBaseUrl}`, ctrl.create)
app.put(`${messagesBaseUrl}/:id`, ctrl.update)
app.delete(`${messagesBaseUrl}/:id`, ctrl.delete)


const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});