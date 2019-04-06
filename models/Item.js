const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
