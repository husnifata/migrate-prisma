const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Halo dari Railway!");
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
