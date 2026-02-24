// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { predictCrowd } = require("./prediction");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", (req, res) => {
    const { avgVisitors, capacity, eventType } = req.body;
    const result = predictCrowd(avgVisitors, capacity, eventType);
    res.json(result);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});