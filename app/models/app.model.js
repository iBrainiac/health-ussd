const { Schema, model } = require('mongoose');

const AppSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  tickets: {
    required: true,
    type: Number,
  },
});

module.exports = model('App', AppSchema);
