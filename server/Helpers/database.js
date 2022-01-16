const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect to database successfully ...."))
    .catch((err) => console.error(err));
};

module.exports = { connectToDatabase };
