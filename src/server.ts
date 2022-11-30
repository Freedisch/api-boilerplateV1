import express from "express";
import router from "./route";
import { createUser, signIn } from "./handlers/user";
import { protect } from "./modules/auth";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", protect, router);

app.post("/user", createUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: " unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid Input" });
  } else {
    res.status(500).json({ message: "Opps, that on us" });
  }
});
export default app;
