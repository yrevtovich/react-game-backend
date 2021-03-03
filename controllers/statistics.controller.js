
const Statistics = require('../models/Statistics');

const getStatistics = async (req, res) => {
  try {
    const stats = await Statistics.find();
    return res.status(200).json(stats);
  } catch (e) {
    return res.status(500).json({ message: 'Server error.' });
  }
}

const postStatistics = async (req, res) => {
  try {
    const stats = await Statistics
      .create(req.body)
      .then( async () => ({ message: 'Success.'}))
      .catch((err) => res.status(400).json({ message: 'Incorrect request body.' }));

    return res.status(201).json(stats);
  } catch {
    return res.status(500).json({ message: 'Server error.' });
  }
}

module.exports = { getStatistics, postStatistics };
