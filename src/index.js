const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 5500;
app.use(cors());

let pathArr = __dirname.split(path.sep);
pathArr[pathArr.length - 1] = 'static';

app.use('/files', express.static(pathArr.join(path.sep)))

console.log(pathArr.join(path.sep));

app.get('/', (req, res) => {
  res.send('Test file server is working');
});

app.listen(port, () => {
  console.log(`App is listening at http://127.0.0.1:${port}`)
});
