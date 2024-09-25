const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

app.get('/Digital_rain_animation_medium_letters_shine.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Digital_rain_animation_medium_letters_shine.gif'));
});

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Hello! Message From Server!!');
});

console.log('WebSocket server is running on ws://localhost:3001');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});