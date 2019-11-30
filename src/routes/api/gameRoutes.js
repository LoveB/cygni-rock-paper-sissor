import { gameController } from '../../controllers/index';
import express from 'express';
var router = express.Router();
import { check } from 'express-validator';

// GET request for games
router.post('/', [check('name').isAlpha()], gameController.startNewGame);
router.post('/:id/join', [check('name').isAlpha()], gameController.joinGame);
router.post('/:id/move', [check('name', 'move').isAlpha()],gameController.makeMove);
router.get('/:id', gameController.getStatus);

export default router;