import express, { Application } from "express";
import cors from "cors";
import StudentRouter from "./routers/student.router";

const app: Application = express();
const port = parseInt(process.env.PORT || "4000");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use("/api", StudentRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
