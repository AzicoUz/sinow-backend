const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const submitRoute = require("./api/submit");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST marshrut
app.use("/api/submit", submitRoute);

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlamoqda`);
});