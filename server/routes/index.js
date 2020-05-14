import Router from 'express';
import authRoutes from './authRoutes';
import taskRoutes from './taskRoutes';
import sortRoutes from './sortRoutes';
import collectionRoutes from './collectionRoutes';

const router = Router();

router.use(authRoutes);
router.use(taskRoutes);
router.use(collectionRoutes);
router.use(sortRoutes);

export default router;
