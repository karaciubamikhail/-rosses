let players = ['x', 'o'];
let activePlayer = 0;
let xod;
let gamepole=[
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
    ];

function startGame(){
    gamepole=[
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
    ];
  xod=0;
  activePlayer = 0;
  renderBoard(gamepole);
};
function winndered() {
      let winplayers=players[activePlayer]
      if (gamepole[0][0] == winplayers && gamepole[1][0] == winplayers && gamepole[2][0] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[0][1] == winplayers && gamepole[1][1] == winplayers && gamepole[2][1] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[0][2] == winplayers && gamepole[1][2] == winplayers && gamepole[2][2] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[0][0] == winplayers && gamepole[0][1] == winplayers && gamepole[0][2] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[1][0] == winplayers && gamepole[1][1] == winplayers && gamepole[1][2] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[2][0] == winplayers && gamepole[2][1] == winplayers && gamepole[2][2] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[0][0] == winplayers && gamepole[1][1] == winplayers && gamepole[2][2] == winplayers) {
        showWinner(activePlayer);
      }  
      if (gamepole[0][2] == winplayers && gamepole[1][1] == winplayers && gamepole[2][0] == winplayers) {
        showWinner(activePlayer);
      }  
}
function click(row, col){
  console.log(row,col)
  if (xod%2==0){
     activePlayer = 0;
  }
  else{
     activePlayer = 1;
  }
  console.log(xod);
  gamepole[row][col] = players[activePlayer];
  renderBoard(gamepole);
  winndered();
  xod++;
}