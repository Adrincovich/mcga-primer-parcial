const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();


app.use(express.json());

app.listen(process.env.PORT, () => console.log("Server ok"))

// mongoose.connect(`mongodb+srv://adrincovich:adrian@cluster0.evpr3zb.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect(process.env.CONECTION_URL)
    .then(() => {
        console.log("🟢 DB Connected")
    })
    .catch(err => console.log("🔴 Server error: " + err.message));


app.get('/', (req, res) => {
    res.send("Ping")
});

app.use("/", routes);