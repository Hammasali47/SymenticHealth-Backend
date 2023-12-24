// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Simple graph data
const graphData = {
  nodes: [
    { id: 1, label: 'Node 1', x: 50, y: 50 },
    { id: 2, label: 'Node 2', x: 150, y: 150 },
    // Add more nodes as needed
  ],
  edges: [
    { from: 1, to: 2 },
    // Add more edges as needed
  ],
};

app.get('/graph', (req, res) => {
  res.json(graphData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
