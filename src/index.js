require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {res.send("Hello World! Hello,check"); });

app.listen(port,
    () =>{
        console.log(`Example app listening at http://localhost:${port}`);
    });
// app.listen(post, () => console.log(`Listen on port ${post} ...`));