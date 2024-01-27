const express = require('express');
const database = require('./db');
const cors = require('cors');

// controller
const bookController = require('./controller/book');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Selamat datang di API BookVerse, gunakan endpoint /api/book untuk melanjutkan 💓'
    );
});

app.use('/api/book', bookController);

// connection
database();
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT} ...`);
});
