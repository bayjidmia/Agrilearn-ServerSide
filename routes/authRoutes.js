import express from "express";
import { saveuser } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/", saveuser);

export default router;
