// dependencies
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// file
import { connection } from "./connections/dbconfig";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.Router());

app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to todo application server");
    } catch (error) {
        console.log("error in app get API: ", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running on port: ${port}`);
    } catch (error) {
        console.log("error while starting the server: ", error);
    }
});