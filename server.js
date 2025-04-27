const express = require('express');
const app = express();
app.use(express.json());

app.post('/collect', (req, res) => {
  console.log('Received event:', req.body);
  res.status(200).send('Event Received');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
