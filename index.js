const express = require('express');
const app = express();

app.use(express.static('public'));

const server = app.listen(4124,()=>{
    console.log(`Server listening at http://localhost:4124`);
});