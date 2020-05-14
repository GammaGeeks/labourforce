import Router from 'express';
import errorHandler from '../helpers/asyncErrorHandler';
import taskValidation from '../middlewares/taskValidation';
import isEmployer from '../middlewares/isEmployer';
import isAdmin from '../middlewares/isAdmin';
import tokenValidation from '../middlewares/tokenValidation';
import paginate from '../middlewares/paginateMiddleware';
import TaskController from '../controllers/taskController';

const router = Router();

router.post('/tasks', tokenValidation, isEmployer, taskValidation, errorHandler(TaskController.createTask));
router.get('/tasks/:id', tokenValidation, errorHandler(TaskController.viewTask));
router.get('/admin/tasks', tokenValidation, isAdmin, TaskController.viewTasks, paginate.paginatedRetrievedData);
router.get('/employer/tasks', tokenValidation, isEmployer, TaskController.viewEmployerTasks, paginate.paginatedRetrievedData);
router.get('/district/:districtId/tasks', tokenValidation, TaskController.viewDistrictTasks, paginate.paginatedRetrievedData);
router.get('/sector/:sectorId/tasks', tokenValidation, TaskController.viewSectorTasks, paginate.paginatedRetrievedData);
router.get('/province/:provinceId/tasks', tokenValidation, TaskController.viewProvinceTasks, paginate.paginatedRetrievedData);

export default router;
