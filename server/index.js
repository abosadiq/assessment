import express from "express";
import path from "path";
import { connectToDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRouters from "./routes/uploadRoute.js";
import cors from "cors";
connectToDB();
const app = express();

app.use(cors());
const PORT = 4000;
app.use(express.json());
app.use("/", userRoutes);
app.use("/upload", express.static("uploads"), uploadRouters);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
