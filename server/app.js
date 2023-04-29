// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const testRoutes = require('./routes/test');

require("dotenv").config();
const path = require('path');

//app
const app = express();
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
     app.listen(port, () => console.log(`server is running on port ${port} and DB is Connected`));
})
.catch((err) => console.log('DB CONNECTION ERROR', err));

// middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

//routes
/*
app.use(express.static(path.join(__dirname, '../TheArmoryFrontend/public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../TheArmoryFrontend/public', 'index.html'));
  }); */
app.get('/', (req,res) =>{
    res.json({mssg: 'Welcome guys'})
})

app.use("/api/test", testRoutes);
 



//port
const port = process.env.PORT || 8080;

//listener
//const server = app.listen(port, () => console.log(`server is running on port ${port}`));