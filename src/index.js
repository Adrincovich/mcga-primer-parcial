const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();


app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        console.log("🟢 DB Connected")
        app.listen(process.env.PORT, () => console.log("Server ok"))
    })
    .catch(err => console.log("🔴 Server error: " + err.message));


app.get('/', (req, res) => {
    res.send("Ping")
});

app.use("/", routes);