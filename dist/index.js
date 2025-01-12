"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.Router());
app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to todo application server");
    }
    catch (error) {
        console.log("error in app get API: ", error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, async () => {
    try {
        console.log(`Server is running on port: ${port}`);
    }
    catch (error) {
        console.log("error while starting the server: ", error);
    }
});
