const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend up and running");
});

// Example Node.js/Express route
app.get('/api/mapbox/route', async (req, res) => {
  const response = await fetch(`https://api.mapbox.com/...`, {
    headers: {
      'Authorization': `Bearer ${process.env.MAPBOX_ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
