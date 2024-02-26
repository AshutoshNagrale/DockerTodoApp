import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./db/db.js";
import router from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connect(app);
console.log(process.env.MONGODB_URI);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);

app.get("/", (req, res) => {
  res.json("working");
});

const PORT = process.env.PORT || 3000;
app.on("ready", () => {
  app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
  });
});

export default app;
