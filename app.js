// Tic Tac Toe 80s edition - Pacman


// Game - pseudo code
// user to pick their player (pac or pink) 
// BRANCH assign player to user
// display which players turn it is
// LOOP:
// track users clicks on the grid
// check if move is possible ie. square is empty
// Iterate through win postions to see is positions match
// update grid with user' player icon
// update users position log (is which square - to validate against)
// switch player
// display which players turn it is
// ....repeat
// when user meets the condition of three boxes in a row exit game
// EXIT
// update score board with winner name and winner icon (cherry)
// When player reachs 4 cherry showdown ended
// ALERT ultimate winner 


// player buttons
// var player1Btn = document.querySelector('.player1-btn');
// var player2Btn = document.querySelector('.player2-btn');

// game history
var gameHistory = document.querySelector('.game-history');

// reset button
var resetBtn = document.querySelector('.reset-btn');

// game 
var allDivs = document.querySelectorAll('div');

var player1 = [];
var player2 = [];
var playerAll = [];
var moves = 0;

function handleSelected(event){
    //change clicked boxes
    var clickedSquare = event.target;
    // console.log(clickedSquare);

    var element = document.createElement('section');
    var para = document.createElement('p');
    gameHistory.appendChild(element);

    // grab data value and assign (push) it into the player1 arr
    var clickedNum = event.target.dataset.sqnum;
    
    // player move
    function makeMove() {
    if (clickedSquare.className === '') {
        if(moves % 2 == 0) {
            clickedSquare.className = 'yellow';
            player1.push(Number(clickedNum));
        } else {
            clickedSquare.className = 'pink';
            player2.push(Number(clickedNum));
        }
        moves++;
    }
    // console.log(moves);

    };
    makeMove();
    playerAll.push(Number(clickedNum));


    // game state, p1 and p2 arrays;
    // console.log(playerAll);
    // console.log(player1)
    // console.log(player2)

    // convert player arr into str and then into arr of 3
    var playerStr = playerAll.join('');
    var playerNums =  playerStr.split("");

    var player1Str = player1.join('');
    var player1Nums =  player1Str.split("");
    console.log(player1Nums)

    var player2Str = player2.join('');
    var player2Nums =  player2Str.split("");
    console.log(player2Nums)

    // winning combos
    var winPositions = [
        ["1", "2", "3"], 
        ["4", "5", "6"], 
        ["7", "8", "9"], 
        ["1", "4", "7"], 
        ["2", "5", "8"], 
        ["3", "6", "9"],
        ["1", "5", "9"],

    ];

    var winArr0 = winPositions[0];
    var winArr1 = winPositions[1];
    var winArr2 = winPositions[2];
    var winArr3 = winPositions[3];
    var winArr4 = winPositions[4];
    var winArr5 = winPositions[5];
    var winArr6 = winPositions[6];


    var cellWinPos1 = 0;
    var cellWinPos2 = 0;

    // game validation
    function callWinner(){
      if(cellWinPos1 === 3) {
          alert('PACMAN WON!')
          console.log('PACMAN WON!')
      } else if (cellWinPos2 === 3){
            alert('PINK GHOST WON!')
            console.log('PINK GHOST WON!')
      }
    };
    

   // game play
    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr0[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr0');
        } else if (player2Nums[i] === winArr0[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr0');
        }

        if (player1Nums[i] === winArr0[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + 'p1 for winAr0');
        }  else if (player2Nums[i] === winArr0[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr0');
        }
        
        if (player1Nums[i] === winArr0[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr0');
        } else if (player2Nums[i] === winArr0[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr0');
        }
    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr1[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr1');
        } else if (player2Nums[i] === winArr1[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr1');
        }

        if (player1Nums[i] === winArr1[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + 'p1 for winAr1');
        }  else if (player2Nums[i] === winArr1[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr1');
        }
        
        if (player1Nums[i] === winArr1[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr1');
    
        } else if (player2Nums[i] === winArr1[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr1');
    
        }

    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr2[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr2');
        } else if (player2Nums[i] === winArr2[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr2');
        }

        if (player1Nums[i] === winArr2[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + 'p1 for winAr2');
        }  else if (player2Nums[i] === winArr2[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr2');
        }
        
        if (player1Nums[i] === winArr2[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr2');
    
        } else if (player2Nums[i] === winArr2[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr2');
    
        }

    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr3[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr3');
        } else if (player2Nums[i] === winArr3[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr3');
        }

        if (player1Nums[i] === winArr3[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + 'p1 for winAr3');
        }  else if (player2Nums[i] === winArr3[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr3');
        }
        
        if (player1Nums[i] === winArr3[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr3');
    
        } else if (player2Nums[i] === winArr3[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr3');
    
        }
    };
    callWinner()
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr4[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr4');
        } else if (player2Nums[i] === winArr4[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr4');
        }

        if (player1Nums[i] === winArr4[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr4');
        }  else if (player2Nums[i] === winArr4[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr4');
        }
        
        if (player1Nums[i] === winArr4[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr4');
    
        } else if (player2Nums[i] === winArr4[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr4');
    
        };
    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr5[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr5');
        } else if (player2Nums[i] === winArr5[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr5');
        }

        if (player1Nums[i] === winArr5[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr5');
        }  else if (player2Nums[i] === winArr5[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr5');
        }
        
        if (player1Nums[i] === winArr5[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr5');
            callWinner()
        } else if (player2Nums[i] === winArr5[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr5');
    
        }

    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;

    for(let i = 0; i < playerNums.length; i++){
        if (player1Nums[i] === winArr6[0]) {
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr6');
        } else if (player2Nums[i] === winArr6[0]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr6');
        }

        if (player1Nums[i] === winArr6[1]){
            cellWinPos1++;
            // console.log(cellWinPos1 + 'p1 for winAr6');
        }  else if (player2Nums[i] === winArr6[1]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr6');
        }
        
        if (player1Nums[i] === winArr6[2]){
            cellWinPos1++;
            // console.log(cellWinPos1 + ' p1 for winAr6');
    
        } else if (player2Nums[i] === winArr6[2]) {
            cellWinPos2++;
            // console.log(cellWinPos2 + ' p2 for winAr6');
        }
    };
    callWinner();
    cellWinPos1 = 0;
    cellWinPos2 = 0;
    
    if (moves === 9) {
        alert('DRAW!')
        console.log('DRAW!')
    }
    
};

// event listener for all divs
for(let i = 0; i < allDivs.length; i++){
    allDivs[i].addEventListener('click', handleSelected);
}

// reset function
function resetGame(){
    for(let e = 0; e < allDivs.length; e++){
        allDivs[e].classList.remove('pink');
        allDivs[e].classList.remove('yellow');
        moves = 0;
        player1 = [];
        player2 = [];
    }
}
resetBtn.addEventListener('click', resetGame);

