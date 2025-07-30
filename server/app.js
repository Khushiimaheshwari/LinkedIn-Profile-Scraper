const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Profile, sequelize } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/profile', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, async () => {
  await sequelize.sync(); 
  console.log(`Server started on port ${PORT}`);
});
