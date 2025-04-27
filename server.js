const express = require('express');
const app = express();
app.use(express.json());

app.post('/collect', (req, res) => {
  console.log('[Server] Received:', JSON.stringify(req.body));
  res.status(200).send('OK');
});

app.get('gtm/debug', (req, res) => {
 res.status(200).send('GTM Server Collector is running 🚀');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[Server] Listening on port ${PORT}`);
});
