import Game from '../modules/game';
import Player from '../modules/player';
import { constants } from '../config';
import uuidv4 from 'uuid/v4';
import { validationResult } from 'express-validator';


var games = {};
const gameController = {};

// POST /
gameController.startNewGame = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const id = uuidv4();
    games[id] = new Game(id);
    const game = games[id];
    game.addPlayer(new Player(req.body.name));
    res.status(200).json({"id": id});
};

// POST /{id}/join
gameController.joinGame = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
        const game = games[req.params.id];
        game.addPlayer(new Player(req.body.name));
        res.status(200).json({"Joined": game.players[constants.PLAYER_TWO].name});
};

//POST /{id}/move
gameController.makeMove = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
        const game = games[req.params.id];
        game.makeMove(req.body);
    
    res.status(200).send('Success')
};

// GET /{id}
gameController.getStatus = (req, res) =>{
    const game = games[req.params.id];
    const status = game.getStatus();
    res.status(200).json(status);
};

module.exports = gameController;


