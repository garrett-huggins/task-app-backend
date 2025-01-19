import express, { Application } from "express";
import dotenv from "dotenv";
import testRoutes from "./v1/routes/test.route";
import tasksRoutes from "./v1/routes/tasks.route";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes V1
app.use("/api/v1", testRoutes, tasksRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
