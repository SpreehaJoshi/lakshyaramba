const express = require('express'); //OR import express from "express"
const app = express();

const port = 8000;

app.get('/about', (req, res)=>{
    res.status(200).json({
        message: "Message handled unsuccessfully!"
    });
});

app.listen(port, ()=>{
    console.log("Server running!");
});