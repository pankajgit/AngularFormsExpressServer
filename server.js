const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

const users = require('./routes/users');

app.use(bodyParser.json());
app.use(cors());
app.use('/users',users);

app.get('/', function(req, res) {
    res.send('Hello, expess server is running');
});
app.post( '/userEnroll', function(req, res) {
    console.log(req.body);
    res.status(200).send({ "message":"Data recieved to express server."});
});


app.listen(PORT, function(){
    console.log('Server running on port : ' + PORT);
});


