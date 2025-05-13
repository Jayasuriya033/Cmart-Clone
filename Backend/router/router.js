import express from "express";
import Signup from "../controllers/signup.js";
import Login from "../controllers/login.js";
import verifyOTP from "../controllers/otp.js";
import passwordChange from "../controllers/passwordUpdate.js"
import suggestUserName from "../controllers/userNameVerify.js"
import checkUserName from "../controllers/checkUserName.js"
const router = express.Router();

router.use("/api/login", Login);
router.use("/api/signup", Signup);
router.use("/api/", verifyOTP);
router.use("/api/updatePassword", passwordChange);
router.use("/api/", suggestUserName);
router.use("/api/", checkUserName);

export default router;
