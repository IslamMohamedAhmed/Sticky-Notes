import express from 'express';
import { signin, signup } from './user.controller.js';
import { checkEmailExists } from '../../middleware/checkEmailExists.js';
import { hashPassword } from '../../middleware/hashPassword.js';

const userRouter = express.Router();

userRouter.route('/signup').post(checkEmailExists, hashPassword, signup);
userRouter.route('/signin').post(signin);
export default userRouter;