const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  const userReq = req.body;
  if (!userReq) return res.status(400).send("Bad request");

  const hashPassword = await bcrypt.hash(userReq.password, 10);
  try {
    const user = new User({
      username: userReq.username,
      password: hashPassword,
      email: userReq.email,
    });
    const data = await user.save();
    if (data) {
      res.status(200).send("Successfully");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong !");
  }
  res.send("User");
};
const get = (req, res) => {
  const userReq = req.body;
};

const update = (req, res) => {};

const del = (req, res) => {};

module.exports = {
  create,
  get,
  update,
  del,
};
