const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



mongoose
  .connect(
    'mongodb+srv://Lama:10111996@blackstonecluster.2wcbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));