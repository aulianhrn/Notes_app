const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", noteRoutes);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(3000, () => console.log("Server running on port 3000"));
});