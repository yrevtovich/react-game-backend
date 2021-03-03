
const Statistics = require('../models/Statistics');

const statisticsDocumentsAmount = 10;

const getStatistics = async (req, res) => {
  try {
    const stats = await Statistics.find({}).sort({ score: -1 });
    return res.status(200).json(stats);
  } catch (e) {
    return res.status(500).json({ message: 'Server error.' });
  }
}

const postStatistics = async (req, res) => {
  try {
    console.log(req.body)
    const stats = await Statistics
      .create(req.body)
      .then(() => ({ message: 'Success.'}))
      .catch((err) => res.status(400).json({ message: 'Incorrect request body.'}));

    const newStatsData = await Statistics.find({}).sort({ score: -1 });

    if (newStatsData.length > statisticsDocumentsAmount) {
      const deletedDocumentId = newStatsData[statisticsDocumentsAmount]._id;
      await Statistics.deleteOne({ _id: deletedDocumentId });
    }

    return res.status(201).json(stats);
  } catch {
    return res.status(500).json({ message: 'Server error.' });
  }
}

module.exports = { getStatistics, postStatistics };
