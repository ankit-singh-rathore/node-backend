import express from 'express';
import { registerUser, login, uploadProfile } from '../controllers/authController';
import upload from '../middlewares/upload';
import { validateLogin } from '../middlewares/validateData';

const router = express.Router();

router.post('/register', validateLogin, registerUser);
router.post('/login', validateLogin, login);
router.post('/profile', 
    upload.single('profileImage'),
    uploadProfile
);

export default router;