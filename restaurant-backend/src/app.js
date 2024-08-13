const express = require('express');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/resaurantRoutes');
const dotenv = require("dotenv");
dotenv.config({path : "./.env"});
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', restaurantRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
