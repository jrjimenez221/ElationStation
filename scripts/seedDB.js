const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/elationStation"
);

const stationSeed = [
  {
    user: "TheDeadZone",
    password: "shvhfwiue65",
    noteTaker:"Thinking about playing Hades, so close to the final Boss!",
    date: new Date(Date.now())
  },
  {
    user: "bookfiend",
    password: "tw1tt3r456",
    noteTaker:"Really the book Imaginary Friend by Stephen Charbosky ",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(stationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
