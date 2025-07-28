const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors({
  origin: "https://student-frontend-m7y3cf3n6-pramods-projects-85ba1a51.vercel.app"
}));

app.use(bodyParser.json());

// Default root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Mount student routes
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

