const express = require('express');
const { foo } = require('./src');

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(foo);
  console.log(`We are live on ${port}`);
});
