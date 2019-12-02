import express from 'express';
import { check } from 'express-validator';
import { gameController } from '../../controllers/index';

const router = express.Router();

// GET request for games
router.post('/', [check('name').isAlpha()], gameController.startNewGame);
router.post('/:id/join', [check('name').isAlpha()], gameController.joinGame);
router.post('/:id/move', [check('name', 'move').isAlpha()], gameController.makeMove);
router.get('/:id', gameController.getStatus);

export default router;
