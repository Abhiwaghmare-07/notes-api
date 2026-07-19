const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");
const userRoutes = require("./routes/userRoutes.js");
dotenv.config();

connectDB();


const app = express();

app.use(express.json());
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Notes API is Running...");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});