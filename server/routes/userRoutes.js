import Router from 'express';
import errorHandler from '../helpers/asyncErrorHandler';
import tokenValidation from '../middlewares/tokenValidation';
import authController from '../controllers/authController';

const router = Router();

router.post('/auth/logout', tokenValidation, errorHandler(authController.logout));

export default router;
