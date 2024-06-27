const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const { sequelize } = require("./models");
const cors = require("cors"); // Import cors

const app = express();
const port = 3001;
app.use(cors()); // Gunakan cors
app.use(bodyParser.json());

// Route untuk user dan product
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Jalankan server setelah koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
