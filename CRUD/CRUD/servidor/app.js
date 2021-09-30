import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';



const app = express();

//conexion base de datos

const mongoose = require ('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => {console.log('Conectado a BD')},
    err => {console.log(err)}

);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.use('/api', require('./routes/nota'));


//app.get('/', function (req, res) {
  //  res.send('hello World!');
//});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));



//puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {console.log('Example app listening on port' + app.get('puerto'));});
