import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// const apiRoutes = require("./routes/api");
import apiRouter from "./routes/api.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/contactlist");

app.use("/api", apiRouter);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
