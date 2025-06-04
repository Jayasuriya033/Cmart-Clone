import express from "express";
import Signup from "../controllers/signup.js";
import Login from "../controllers/login.js";
import verifyOTP from "../controllers/otp.js";
import passwordChange from "../controllers/passwordUpdate.js";
import suggestUserName from "../controllers/userNameVerify.js";
import checkUserName from "../controllers/checkUserName.js";
import publicationAndCampign from "../controllers/publicationAndCampaign.js";
import domain from "../controllers/domain.js";
const router = express.Router();

router.use("/login", Login);
router.use("/signup", Signup);
router.use("/", verifyOTP);
router.use("/updatePassword", passwordChange);
router.use("/", suggestUserName);
router.use("/", checkUserName);
router.use("/publicationAndCampign", publicationAndCampign);
router.use("/domain", domain);


export default router;
