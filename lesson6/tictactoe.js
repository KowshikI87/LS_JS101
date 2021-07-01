const readline = require("readline-sync");
const MARKERS = {INITIAL_MARKER : ' ', HUMAN1 : 'X', COMPUTER: 'O'};
const USERS = {COMPUTER : {NAME : 'COMPUTER', currentTurn : false, turn : 2},
  PLAYER1 : {NAME : 'HUMAN1', currentTurn : false, turn : 1}};

//Scores and Strategy
let scores = {HUMAN1 : 0, COMPUTER : 0};
const GAME_TO_WIN = 5;

//Winning Lines and Dangerous Combination
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const DANGEROUS_COMB = {};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getDangerousComb() {
  //create dangerousComb for each winningLine
  //values are 'first element + second', 'second + third', 'first + third'
  //Example: [1,2,3] ---> '123' : ['12', '23', '13']
  //note how numbers are sorted in ascending order in each combination
  let combination = [[0, 1], [0, 2], [1, 2]];
  WINNING_LINES.forEach((line) => {
    DANGEROUS_COMB[line.join('')] = combination.map((comb) => String(line[comb[0]]) + String(line[comb[1]]));
  });
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = MARKERS['INITIAL_MARKER'];
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${MARKERS[USERS.PLAYER1.NAME]}. Computer is ${MARKERS[USERS.COMPUTER.NAME]}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function joinOr(arr, midItemSep = ',', lastItemExtraSep = 'or') {
  //if one elment only in array then return Number(arr)
  //if two item then return arr joined with lastItemExtraSep
  //else
  //array except last element -> join using seperator
  //joined array + midItemSep + " " + lastItemExtraSep + lastItem

  if (arr.length <= 1) {
    return String(String(arr));
  } else if (arr.length === 2) {
    return arr.join(' ' + lastItemExtraSep + ' ');
  } else {
    return (arr.slice(0, arr.length - 1).join(midItemSep + ' ') +
            midItemSep + ' ' + lastItemExtraSep + ' ' + arr[arr.length - 1]);
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(sq => board[sq] === MARKERS.INITIAL_MARKER);
}

function getCurrentPlayer() {
  /*
  //Get the first player whose currentTurn = true
  //if can't find such a player then
    //currentPlayer = player with turn = 1
  */
  return Object.keys(USERS).find(user => USERS[user]['currentTurn'] === true) ||
        Object.keys(USERS).find(user => USERS[user]['turn'] === 1);
}

function setNextPlayerTurn(currentPlayer) {
  /*
  // Get next player
    //next player is the one whose turn is 1 greater than currentPlayer
    //or if that does not exist then whose turn is 1
  //current player's currentTurn = false
  //set the next player currentTurn = on
*/
  let nextTurnPlayer = Object.keys(USERS).find((user) => {
    return USERS[user]['turn'] === (USERS[currentPlayer]['turn'] + 1);
  });

  let playerWithTurn1 = Object.keys(USERS).find((user) => {
    return USERS[user]['turn'] === 1;
  });

  let nextPlayer = nextTurnPlayer || playerWithTurn1;
  USERS[currentPlayer]['currentTurn'] = false;
  USERS[nextPlayer]['currentTurn'] = true;
}

function chooseSquare(board, currentPlayer) {
  if (USERS[currentPlayer] === USERS.PLAYER1) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    //prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = MARKERS[USERS.PLAYER1.NAME];
}

function computerChoosesSquare(board) {
  let playerSquares = getUserMarkers(board, USERS.PLAYER1.NAME);
  let computerSquares = getUserMarkers(board, USERS.COMPUTER.NAME);
  //play offense/defense or play randomly
  let squareToMark = getCriticalSquare(playerSquares, computerSquares) ||
                     getRandOpenSquare(board);
  board[squareToMark] = MARKERS[USERS.COMPUTER.NAME];
}

function getUserMarkers(board, userName) {
  /*
    //get squares representing specified user's marker in
      ascending order as a string. example: 1579
    //get all the keys that has player's marker in an array (use filter method)
    //then sort then numerically and join them without space. Call it playerComb
  */
  let userMarkers = Object.keys(board).filter(squareNum => {
    return board[squareNum] === MARKERS[userName];
  });
  return userMarkers.sort((a, b) => Number(a) - Number(b)).join('');
}

//get the square we need to mark for making computer win or block player
//if no such square exist then return undefined
function getCriticalSquare(playerSquares, computerSquares) {
  let compWinLine = getCompWinLine(playerSquares, computerSquares);
  let playerWinLine = getPlayerWinLine(playerSquares, computerSquares);

  if (compWinLine) {
    return getCompWinSquare(compWinLine, computerSquares);
  } else if (playerWinLine) {
    return getCompDefSquare(playerWinLine, playerSquares);
  } else {
    return undefined;
  }
}

//get the first line in WINNING_LINES in which computer have two markers
//and player have none
function getCompWinLine(playerSquares, computerSquares) {
  let potnWinLine = Object.keys(DANGEROUS_COMB).find((winningLine) => {
    let curntDangCombs = DANGEROUS_COMB[winningLine];
    return !(playerSquares.split('').some((square) => winningLine.includes(square))) &&
             curntDangCombs.some(comb => computerSquares.includes(comb));
  });
  return potnWinLine;
}

//get the first line in WINNING_LINES in which player have two markers
//and computer has none
function getPlayerWinLine(playerSquares, computerSquares) {
  let potnWinLine = Object.keys(DANGEROUS_COMB).find((winningLine) => {
    let curntDangCombs = DANGEROUS_COMB[winningLine];
    return !(computerSquares.split('').some((square) => winningLine.includes(square))) &&
             curntDangCombs.some(comb => playerSquares.includes(comb));
  });
  return potnWinLine;
}

//return the square computer should play to win the game
function getCompWinSquare(winningLine, computerSquares) {
  return winningLine.split('').find((square) => !(computerSquares.includes(square)));
}

function getCompDefSquare(winningLine, playerSquares) {
  return winningLine.split('').find((square) => !(playerSquares.includes(square)));
}

function getRandOpenSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (
      board[sq1] === MARKERS[USERS.PLAYER1.NAME] &&
      board[sq2] === MARKERS[USERS.PLAYER1.NAME] &&
      board[sq3] === MARKERS[USERS.PLAYER1.NAME]
    ) {
      return USERS.PLAYER1.NAME;
    } else if (
      board[sq1] === MARKERS[USERS.COMPUTER.NAME] &&
      board[sq2] === MARKERS[USERS.COMPUTER.NAME] &&
      board[sq3] === MARKERS[USERS.COMPUTER.NAME]
    ) {
      return USERS.COMPUTER.NAME;
    }
  }
  return null;
}

function addScore(player) {
  scores[player] += 1;
}

function displayScores() {
  prompt('Current Score is:');
  Object.keys(scores).forEach((player) => {
    console.log(`${player} score: ${scores[player]}`);
  });
}

function isWonMatch() {
  return Object.keys(scores).some(player => scores[player] === GAME_TO_WIN);
}

function getMatchWinner() {
  return Object.keys(scores).find(player => scores[player] === GAME_TO_WIN);
}

function displayMatchWonMessage(winner) {
  prompt(`${winner} has won 5 games and thus have won the match!`);
  prompt('The game is now exiting');
}

prompt('Welcome to Tic Tac Toe!');

//set dangerous combinations for each winning line
getDangerousComb();

//play multiple game
while (true) {
  let board = initializeBoard();
  let currentPlayer;

  //play single game
  while (true) {
    displayBoard(board);
    currentPlayer = getCurrentPlayer();
    chooseSquare(board, currentPlayer);
    setNextPlayerTurn(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);
  let winner;
  if (someoneWon(board)) {
    winner = detectWinner(board);
    prompt(`${winner} won!`);
    addScore(winner);
  } else {
    prompt("It's a tie!");
  }

  //when someone won match
  displayScores();
  if (isWonMatch()) {
    displayMatchWonMessage(getMatchWinner());
    break;
  }

  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');