require('dotenv').config();
const express = require('express');
const path = require('path');
const santaRoutes = require('./routes/santaRoutes');
const app = express();


app.use(express.static(path.join(__dirname, '../public')));

app.use('/',santaRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT} PORT`)
})

