const mongoose = require('mongoose');

const FreelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [String],
});

module.exports = mongoose.model('Freelancer', FreelancerSchema);
