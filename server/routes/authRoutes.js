import Router from 'express';
import passport from 'passport';
import errorHandler from '../helpers/asyncErrorHandler';
import { signInValidator } from '../middlewares/authValidation';
import authController from '../controllers/authController';

const router = Router();
router.use(passport.initialize());

router.post('/auth/login', signInValidator, errorHandler(authController.signIn));

export default router;
