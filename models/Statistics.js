const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const Types = mongoose.Types;

const StatisticsSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
}, {
  versionKey: false,
});

module.exports = model('Statistics', StatisticsSchema);
