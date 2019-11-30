class Player {
    constructor(name){
        this.name = name;
        this.move;
        this.hasMoved = false;
    }
    move(move){
        this.move = move;
        this.hasMoved = true;
    }
}

export default Player;