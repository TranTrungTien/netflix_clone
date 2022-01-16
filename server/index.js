const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Helpers/database");
require("dotenv").config();
const userRouter = require("./router/userRouter");
const moviesRouter = require("./router/moviesRouter");

const app = express();

const PORT = process.env.PORT || 3001;

//connectToDatabase();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use("/users", userRouter);
app.use("/movies/api", moviesRouter);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
