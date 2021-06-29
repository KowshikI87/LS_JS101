const readline = require("readline-sync");

//Markers
const MARKERS = {INITIAL_MARKER : ' ', HUMAN1 : 'X', COMPUTER: 'O'};

//user names
const USER_NAMES = {COMPUTER : 'COMPUTER', PLAYER1 : 'HUMAN1'};

//Scores
let scores = {HUMAN1 : 0, COMPUTER : 0};
const GAME_TO_WIN = 5;

//Winning Lines and Dangerous Combination
let winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const DANGEROUS_COMB = {};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getDangerousComb() {
  /*
  //winning lines keep it as is but move to global
  //then create dangerousComb by using each of those wining lines
    //keys are element.join('')
    //values are 'first + second', 'second + third', 'first + third'
    //Example: [1,2,3] ---> '123' : ['12', '23', '13']
    //note how numbers are sorted in ascending order in each combination
  */
  let combination = [[0, 1], [0, 2], [1, 2]];
  winningLines.forEach((line) => {
    DANGEROUS_COMB[line.join('')] = combination.map((comb) => String(line[comb[0]]) + String(line[comb[1]]));
  });
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${MARKERS[USER_NAMES.PLAYER1]}. Computer is ${MARKERS[USER_NAMES.COMPUTER]}`);

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

function displayScores() {
  prompt('Current Score is:');
  Object.keys(scores).forEach((player) => {
    console.log(`${player} score: ${scores[player]}`);
  });
}

function resetScore() {
  Object.keys(scores).forEach((player) => {
    scores[player] = 0;
  });
}

function addScore(player) {
  scores[player] += 1;
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

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = MARKERS['INITIAL_MARKER'];
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
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

  board[square] = MARKERS[USER_NAMES.PLAYER1];
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

function getRandOpenSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function getCriticalBlock(playersMarkers, computerMarkers, strategy) {
  //return square to mark for computer/or null otherwise
  /*
  //Determine if we need to block user and if yes then which one
  //itereate over each winning lines keycomb using dangerousComb.keys
  //we will use find method of array to return the first key for which
    //at least one dangerousComb.keys is in playerComb
  //if no dangerousComb is in playerComb then use offensive strategy
  //else block the user by marking on the square
    //we have the key containing the winning block
    //we have the dangerous comb. So we just need to determine the
    //not present char
  */
  let positiveMarkers;
  let negativeMarkers;
  if (strategy === 'defense') {
    positiveMarkers = playersMarkers;
    negativeMarkers = computerMarkers;
  } else {
    positiveMarkers = computerMarkers;
    negativeMarkers = playersMarkers;
  }

  //get the potential winning line if any
  let potnWinLine = Object.keys(DANGEROUS_COMB).find((winningLine) => {
    let curntDangCombs = DANGEROUS_COMB[winningLine];
    //only return a potential winning line if
    //computer don't have a marker in that line and
    //user has at least two marker in that line
    return !(negativeMarkers.split('').some((square) => winningLine.includes(square))) &&
             curntDangCombs.some(comb => positiveMarkers.includes(comb));
  });

  //return square to block
  if (potnWinLine) {
    return potnWinLine.split('').find((square) => !(playersMarkers.includes(square)));
  } else {
    return undefined;
  }
}

function computerChoosesSquare(board) {
  //get player's marker
  let playersMarkers = getUserMarkers(board, USER_NAMES.PLAYER1);
  let computerMarkers = getUserMarkers(board, USER_NAMES.COMPUTER);
  //play defense if necessary else try to play offense or just play randomly
  let squareToMark = (getCriticalBlock(playersMarkers, computerMarkers, 'defense') ||
                getCriticalBlock(playersMarkers, computerMarkers, 'offense' ||
                getRandOpenSquare(board)));
  board[squareToMark] = MARKERS[USER_NAMES.COMPUTER];
}

function someoneWon(board) {
  return detectWinner(board);
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
    // eslint-disable-next-line indent
        board[sq1] === MARKERS[USER_NAMES.PLAYER1] &&
        board[sq2] === MARKERS[USER_NAMES.PLAYER1] &&
        board[sq3] === MARKERS[USER_NAMES.PLAYER1]
    ) {
      return USER_NAMES.PLAYER1;
    } else if (
      // eslint-disable-next-line indent
        board[sq1] === MARKERS[USER_NAMES.COMPUTER] &&
        board[sq2] === MARKERS[USER_NAMES.COMPUTER] &&
        board[sq3] === MARKERS[USER_NAMES.COMPUTER]
    ) {
      return USER_NAMES.COMPUTER;
    }
  }

  return null;
}

//set dangerous combination for player
getDangerousComb();

//play multiple game
while (true) {
  let board = initializeBoard();

  //play single game
  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
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