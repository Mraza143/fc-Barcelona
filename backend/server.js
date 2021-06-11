import express from 'express';
import trophies from './trophies';
import players from './players';
const app = express();

app.get('/api/trophies', (req, res) => {
  res.send(trophies);
});
app.get('/api/players', (req, res) => {
    res.send(players);
  });

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});