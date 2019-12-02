import uuidv4 from 'uuid/v4';
import { validationResult } from 'express-validator';
import Game from '../modules/game';
import Player from '../modules/player';

const games = {};
const gameController = {};

// POST /
gameController.startNewGame = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const id = uuidv4();
  games[id] = new Game(id);
  games[id].addPlayer(new Player(req.body.name));
  res.status(200).json({ id });
};

// POST /{id}/join
gameController.joinGame = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const game = games[req.params.id];
  let resp;
  if (game) {
    resp = game.addPlayer(new Player(req.body.name));
  } else {
    res.status(400).send('Game not found');
  }
  res.status(200).json({ Joined: resp });
};

// POST /{id}/move
gameController.makeMove = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const game = games[req.params.id];
  let resp;
  if (game) {
    resp = game.makeMove(req.body);
  } else {
    res.status(400).send('Game not found');
  }
  res.status(200).json({ Move: resp });
};

// GET /{id}
gameController.getStatus = (req, res) => {
  const game = games[req.params.id];
  let status;
  if (game) {
    status = game.getStatus();
  } else {
    res.status(400).send('Game not found');
  }
  res.status(200).json(status);
};

export default gameController;
