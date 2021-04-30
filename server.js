const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 4000
mongoose.Promise = global.Promise
mongoose.connect(database.db , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected');
}) , error=>{
    console.log('Cannot Connect to database' + error);
}

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors())


const movieAPI = require('./routes/movie.route')
// เรียกใช้ API 
app.use('/api',movieAPI)



// Create Port 
const server = app.listen(PORT,()=>{
    console.log('Connected to port ' + PORT);
})