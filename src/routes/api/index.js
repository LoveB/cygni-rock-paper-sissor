//import gameController from '../../controllers/gameController';
import gameRoutes from './gameRoutes';
import express from 'express';
var router = express.Router();

// GET request for game status
router.use('/games', gameRoutes);

export default router;