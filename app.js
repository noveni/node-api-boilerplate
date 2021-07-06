
const config = require( "./config" );

const express = require("express");
const morgan = require("morgan");
const restrictOrigin = require('./middlewares/restrictOrigin');
const auth = require('./routes/auth');
const api = require('./routes/api');

const app = express();  //Create new instance

const PORT = config.port; //Declare the port number

app.use(express.json()); //allows us to access request body as req.body

app.use(restrictOrigin);

app.use(morgan("dev"));  //enable incoming request logging in dev mode

//Define the endpoint
app.get("/ping", (req, res) => {  
  return res.send({
    status: "Healthy",
  });
});

app.use("/auth", auth);
app.use("/api", api);

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
