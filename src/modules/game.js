import { constants } from "../config";

class Game {
    constructor(id){
        this.id = id;
        this.players = [];
        this.moves = constants.INITIAL_MOVES;
        this.finished = false;
        this.winner = "Not decided yet";
    }
    addPlayer(player){
        if(this.players.length > 1 ){
            console.error("Max 2 players");
            return;
        }
        this.players.push(player);
    }
    makeMove(data){
        if(this.players[constants.PLAYER_ONE].name != data.name && his.players[constants.PLAYER_TWO].name != data.name ){
            console.error("No player with that name");
            return;
        }
        if(this.moves > 1){
            console.error("Max one move per player");
            return;
        }
        if(data.move != constants.PAPER && data.move != constants.ROCK && data.move != constants.SCISSOR){
            console.error("No such move item");
            return;
        }
        this.moves++;
        let i;
        for(i in this.players){
           if(this.players[i].name == data.name){
            this.players[i].move(data.move);
           }
        }
        if(this.moves >= constants.MOVE_MAX_LIMIT){
            this.finished = true;
            this.checkWinner();
       }
    }

    checkWinner(){
        const p1 = this.players[constants.PLAYER_ONE];
        const p2 = this.players[constants.PLAYER_TWO];

        switch (p1.move) {
            case p2.move:
                this.winner == constants.EQUAL;
                break;
            case constants.ROCK:
                if(p2.move == constants.SCISSOR){
                this.winner = p1.name;
                break;
                }
                this.winner = p2.name;
                break;
            case constants.SCISSOR:
                if(p2.move == constants.ROCK){
                this.winner = p2.name;
                    break;
                }
                this.winner = p1.name;
                break;
            case constants.PAPER:
                if(p2.move == constants.ROCK){
                    this.winner = p1.name;
                    break;
                }
                this.winner = p2.name;
                break;
            default:
                break;
        }
    }
    getStatus(){
        let status;
        if(this.finished){
            status = this.populateStatus("done", this.players[constants.PLAYER_ONE].move, this.players[constants.PLAYER_TWO].move);
        } else {
            status = this.populateStatus("Still playing", this.players[constants.PLAYER_ONE].hasMoved, this.players[constants.PLAYER_TWO].hasMoved);
        }
        return status;
    }
    populateStatus(status, movePlayerOne, movePlayerTwo, winner){
        let statusObj = {
            "Id": this.id,
            "Status": status,
            "Player One": 
                {
                "name":this.players[constants.PLAYER_ONE].name,
                "move": movePlayerOne
                },
            "Player Two":
                {
                "name":this.players[constants.PLAYER_TWO].name,
                "move": movePlayerTwo
                },
            "Winner": this.winner
        }
        return statusObj;
    }
}

export default Game;