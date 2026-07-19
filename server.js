const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Notes API is Running...");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});