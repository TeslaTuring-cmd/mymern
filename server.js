const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('I am Living Bitch'));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Started the shit on port ${PORT}'));

