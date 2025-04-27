const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.post('/collect', (req, res) => {
  console.log('Received event:', JSON.stringify(req.body, null, 2));
  res.status(200).send('Event received!');
});

app.get('/', (req, res) => {
  res.send('Hello from GTM Server Collector!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});