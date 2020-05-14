import Router from 'express';
import errorHandler from '../helpers/asyncErrorHandler';
import isAdmin from '../middlewares/isAdmin';
import tokenValidation from '../middlewares/tokenValidation';
import { collectionValidator } from '../middlewares/categoryValidation';
import paginate from '../middlewares/paginateMiddleware';
import CollectionController from '../controllers/collectionController';

const router = Router();

router.post('/collections/:sortId', tokenValidation, isAdmin, collectionValidator, errorHandler(CollectionController.createCollection));
router.get('/collections', tokenValidation, CollectionController.viewPageCollections, paginate.paginatedRetrievedData);

export default router;
