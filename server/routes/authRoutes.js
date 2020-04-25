import Router from 'express';
import passport from 'passport';
import errorHandler from '../helpers/asyncErrorHandler';
import { signInValidator, signUpValidator } from '../middlewares/authValidation';
import passwordHasher from '../middlewares/passwordHasher';
import authController from '../controllers/authController';

const router = Router();
router.use(passport.initialize());

router.post('/auth/login', signInValidator, errorHandler(authController.signIn));
router.post('/auth/signup', signUpValidator, passwordHasher, errorHandler(authController.signUp));

export default router;
