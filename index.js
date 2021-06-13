const express = require('express');
const user = require('./routes/user');
const app = express();
const port = 3000; // Replace with environment variable

app.use(user);

app.get()

// start server
app.listen(port, () =>{
    console.log("Server starting listening on port " + port.toString())
})