const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from EC2 Node.js!');
});

const port = 3000;
const host = '0.0.0.0'; // Required for EC2 to allow external access

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
