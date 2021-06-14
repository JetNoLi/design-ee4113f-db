const express = require('express');
const mongoose = require('mongoose')
const user = require('./routes/user');
const app = express();
const port = 3000; // Replace with environment variable

mongoose.connect(
  "mongodb+srv://designUser:4design@cluster0.fk38z.mongodb.net/design-eee4113f?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
	}
);


app.use(user);



//app.get()

// start server
app.listen(port, () =>{
    console.log("Server starting listening on port " + port.toString())
})