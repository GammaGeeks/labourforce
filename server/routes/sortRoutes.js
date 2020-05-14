import Router from 'express';
import errorHandler from '../helpers/asyncErrorHandler';
import isAdmin from '../middlewares/isAdmin';
import tokenValidation from '../middlewares/tokenValidation';
import { sortValidator } from '../middlewares/categoryValidation';
import paginate from '../middlewares/paginateMiddleware';
import SortController from '../controllers/sortController';

const router = Router();

router.post('/sorts', tokenValidation, isAdmin, sortValidator, errorHandler(SortController.createSort));
router.get('/sorts', tokenValidation, SortController.viewPageSorts, paginate.paginatedRetrievedData);

export default router;
