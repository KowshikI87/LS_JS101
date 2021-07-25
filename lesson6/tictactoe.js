const readline = require("readline-sync");
const MARKERS = { INITIAL_MARKER : ' ', HUMAN1 : 'X', COMPUTER: 'O' };
const USERS = ['HUMAN1', 'COMPUTER'];
let currentPlayer = USERS[0];

//Scores and Strategy
let scores = {HUMAN1 : 0, COMPUTER : 0};
const GAME_TO_WIN = 5;

//Winning Lines and Dangerous Combination
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const DANGEROUS_COMB = { };

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getDangerousComb() {
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
  console.log(`You are ${MARKERS[USERS[0]]}. Computer is ${MARKERS[USERS[1]]}`);

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

function alternatePlayer() {
  let currentPlayerIndex = USERS.indexOf(currentPlayer);
  if (currentPlayerIndex === (USERS.length - 1)) {
    currentPlayer = USERS[0];
  } else {
    currentPlayer = USERS[currentPlayerIndex + 1];
  }
}

function chooseSquare(board) {
  if (currentPlayer === USERS[0]) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = MARKERS[USERS[0]];
}

function computerChoosesSquare(board) {
  let playerSquares = getUserMarkers(board, USERS[0]);
  let computerSquares = getUserMarkers(board, USERS[1]);
  //play offense/defense or play randomly
  let squareToMark = getCriticalSquare(playerSquares, computerSquares) ||
                     getRandOpenSquare(board);
  board[squareToMark] = MARKERS[USERS[1]];
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
    let playerMarkers = playerSquares.split('').some((square) => winningLine.includes(square));
    let twoComputerMarkers = curntDangCombs.some(comb => {
      return computerSquares.includes(comb);
    });
    return !playerMarkers && twoComputerMarkers;
  });
  return potnWinLine;
}

//get the first line in WINNING_LINES in which player have two markers
//and computer has none
function getPlayerWinLine(playerSquares, computerSquares) {
  let potnWinLine = Object.keys(DANGEROUS_COMB).find((winningLine) => {
    let curntDangCombs = DANGEROUS_COMB[winningLine];
    let computerMarkers = (computerSquares.split('').some((square) => winningLine.includes(square)));
    let twoPlayerMarkers = curntDangCombs.some(comb => {
      return playerSquares.includes(comb);
    });
    return !computerMarkers && twoPlayerMarkers;
  });
  return potnWinLine;
}

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
  let hasPlayerWon = WINNING_LINES.some(line => {
    return line.every(sq => board[sq] === MARKERS[USERS[0]]);
  });

  let hasCompWon = WINNING_LINES.some(line => {
    return line.every(sq => board[sq] === MARKERS[USERS[1]]);
  });

  if (hasPlayerWon) {
    return USERS[0];
  } else if (hasCompWon) {
    return USERS[1];
  } else {
    return null;
  }
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

function playAnotherGame() {
  while (true) {
    prompt('Play again? (y/n) ');
    let answer = readline.question().trim().toLowerCase();
    if (answer === 'y') {
      return true;
    } else if (answer === 'n') {
      return false;
    } else {
      console.log('Input is invalid. Enter y/n');
    }
  }
}

prompt('Welcome to Tic Tac Toe!');

//set dangerous combinations for each winning line
getDangerousComb();

//play multiple game
let roundCount = 0;
while (true) {
  roundCount += 1;
  let board = initializeBoard();

  //play single game
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    alternatePlayer();
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

  displayScores();
  console.log(`This is the end of Round ${roundCount}`);
  if (isWonMatch()) {
    displayMatchWonMessage(getMatchWinner());
    break;
  }

  if (!playAnotherGame()) break;
}

prompt('Thanks for playing Tic Tac Toe!');