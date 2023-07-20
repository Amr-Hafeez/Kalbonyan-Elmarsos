import express from "express";
import {getCurrentUser, login, logout, register, updateUser} from "../controllers/Auth.js";
import authenticateUser from "../middlewares/auth.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/update-user', authenticateUser, updateUser);
router.get('/getCurrentUser', authenticateUser, getCurrentUser);
router.get('/logout', logout);

export default router;