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

export default app;
