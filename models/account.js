const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  status: String,
  date: { type: Date, default: Date.now }
});

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
