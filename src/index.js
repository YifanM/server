import express from 'express';
const app = express();

app.get('/api', (req, res) => res.send('helloooo'));

app.listen(3000, () => console.log('Running on localhost:3000'));