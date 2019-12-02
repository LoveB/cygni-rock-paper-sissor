import express from 'express';
import gameRoutes from './gameRoutes';

const router = express.Router();

// GET request for game status
router.use('/games', gameRoutes);

export default router;
