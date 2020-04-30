import Router from 'express';
import passport from 'passport';
import errorHandler from '../helpers/asyncErrorHandler';
import { signInValidator, signUpValidator } from '../middlewares/authValidation';
import tokenValidation from '../middlewares/tokenValidation';
import passwordHasher from '../middlewares/passwordHasher';
import sendSMS from '../middlewares/sendSMS';
import authController from '../controllers/authController';

const router = Router();
router.use(passport.initialize());

router.post('/auth/login', signInValidator, errorHandler(authController.signIn));
router.post('/auth/signup', signUpValidator, passwordHasher, sendSMS, errorHandler(authController.signUp));
router.post('/auth/:username/confirm', errorHandler(authController.confirmation));
router.post('/auth/logout', tokenValidation, errorHandler(authController.logout));

export default router;
