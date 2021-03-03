const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/statistics', require('./routes/statistics'));

const PORT = process.env.PORT || 8000;
const mongoURI = 'mongodb+srv://yrevtovich:r8cswpdu@cluster0.aikah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
