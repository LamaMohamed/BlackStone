const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const employeeRoutes = require("./routes/employee.route");
const app = express();
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use('/employee', employeeRoutes);

app.use((err, req, res, next) => {
    // any error should return from response
    console.log(err.message);
    res.status(422).send({
        err: err.message,
    });
});

mongoose
  .connect(
    'mongodb+srv://Lama:10111996@blackstonecluster.2wcbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("connected to database")
    )
  .then(result => {
    app.listen(8080);
    console.log("Running server!!");
  })
  .catch(err => console.log(err));