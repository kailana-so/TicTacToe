## Tic Tac Toe reimagined as an 80s classic

https://pages.git.generalassemb.ly/kailana/tic-tac/

<img width="1236" alt="Screen Shot 2021-03-23 at 9 15 27 pm" src="https://user-images.githubusercontent.com/72859994/112130792-f312ca80-8c1c-11eb-89fa-f087738aaf3d.png">


Discover the ultimate winner (Pacman or Pink Ghost)

To Play:
- select any square on the board to start game
- you cannot move onto a square already taken
- continue playing until you get 3 pacmans or pink ghosts in a row (x, y and diagonaly)
- if 9 moves have been played without a winner - a draw will be called

Building:

    Approach:
    - create a game state to track all moves
    - create player1 and player2 to track each players moves
    - using for loops, iterate over the win positions array and check if Player1 or Player2 match any of the combos
    - increment Player1 or Player2 counter if matchs found
    - if counter reaches 3 for either player call the winner validation function and declare a winner
    - if 3 squares are met but there is no winner, declare a draw
    
