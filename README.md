# cygni-rock-paper-sissor


## Rules of the Game
Two players compete by sending the word 'rock', 'scissor' or 'paper'. If your word beats the other players word, you win the game. If you send the same word its a tie.
- rock wins over scissor
- scissor wins over paper
- paper wins over rock

## Installations

Rock Scissor Papper requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) to run.

## Tools
  - [Postman](https://www.getpostman.com/downloads/)

## Start the application
Clone the repository:
```sh
$ https://github.com/LoveB/cygni-rock-paper-sissor.git
$ cd cygni-rock-paper-scissor
```
Install dependencies:
```sh
$ npm install
```
Start the application:
```sh
$ npm run start
```

## How to play

### 1. Open Postman and make a new POST request to:
```sh
http://localhost:4000/api/games
```
The request body:
```json
{ 
'name': 'yourName' 
}
```
### 2. In the response body you should receive a game id that looks similar to this:
```sh
345b5a9e-2360-49c2-99a3-898a29c8d7b7
```
### 3. Give the id to a friend and and ask her/him to make a POST request to:
```sh
http://localhost:4000/api/<place-game-id-here>/join
```
The request body:
```json
{ 
'name': 'yourFriendsName' 
}
```
### 4. Now make a move by sending a POST request to:
```sh
http://localhost:4000/api/<place-game-id-here>/move
```
The request body:
```json
{
'name': 'yourName',
'move': 'yourMove'
}
```
### 5. Ask your friend to make a move by sending a POST request to :
```sh
http://localhost:4000/api/<place-game-id-here>/move
```
The request body:
```json
{
'name': 'yourFriendsName',
'move': 'yourFriendsMove'
}
```
### 6. Now the game is finished and you can check who won. This is done by sending a GET request to:
```sh
http://localhost:4000/api/<place-game-id-here>
```
This status check can be done at any point in the game to also check who has made a move.

Good luck!