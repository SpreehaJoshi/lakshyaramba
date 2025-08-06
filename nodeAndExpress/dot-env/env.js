// require('dotenv').config()
// const express = require('express')


import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express()

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send(`This is home page`);
});

app.get("/about", (req, res) => {
    res.status(200).send(`This is about page`);
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});