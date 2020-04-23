var player1 =  "x";
var player2 = "o";
var turn = player1;
var playRounds = 0;
var board = [
  ["","",""],
  ["","",""],
  ["","",""]
];
var winner = "";
var namePlayer1 = "";
var namePlayer2 = "";

function setName(id){
  if(id == "player1"){
    namePlayer1 = document.getElementById(id).value;
  } 
  if(id == "player2"){
    namePlayer2 = document.getElementById(id).value;
  }
  document.getElementById("whoPlay").innerHTML = "Jugador " + namePlayer1 +" ("+ turn + ") es su turno de jugar!";
}

function choosePlayers(value){
  player1 = value; 
  if(player1 == "x"){
    player2 = "o";
  } else {
    player2 = "x";
  }
  turn = player1;
  document.getElementById("whoPlay").innerHTML = "Jugador " + namePlayer1 +" ("+ turn + ") es su turno de jugar!";
}

function markXorO(id, row, column){
  if(winner == ""){ //check if there is a winner, if not mark x or o 
    if(document.getElementById(id).innerHTML != "x" && document.getElementById(id).innerHTML != "o"){
      playRounds++; //counter 
      if(turn == player1){
        document.getElementById(id).innerHTML = player1 ;
        board[row][column]= player1; //mark x or o in board
      } else {
        document.getElementById(id).innerHTML = player2 ;
        board[row][column]= player2; //mark x or o in board
      }
      
      if (playRounds > 4) { //first chance to win is at the 5th turn when the first player has played 3 times
        checkWinner();
      }
      changeTurn();
  } else{
      alert("Casillero ocupado, por favor seleccione otro casillero");
  }
} else {
  alert("El juego ha terminado, por favor comience un nuevo juego");
}
}

function changeTurn(){
    if(turn == player1){
    turn = player2;
    document.getElementById("whoPlay").innerHTML = "Jugador " + namePlayer2 +" ("+ turn + ") es su turno de jugar!";
  } else {
    turn = player1; 
    document.getElementById("whoPlay").innerHTML = "Jugador " + namePlayer1 +" ("+ turn + ") es su turno de jugar!";
  }
}

function checkWinner(){
  //check tateti horizontal and vertical
  for(var i=0; i<3; i++){
    if(board[i][0] != "" && board[i][1] != "" && board[i][2] != ""){
      if(board[i][0] == board[i][1] && board[i][1]==board[i][2]){
        printWinner();
      }
    }
 
    if(board[0][i] != "" && board[1][i] != "" && board[2][i] != ""){
      if(board[0][i] == board[1][i] && board[1][i]==board[2][i]){
        printWinner();
      }
    }
  }
  //check tateti diagonal
  if(board[0][0] != "" && board[1][1] != "" && board[2][2] != ""){
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] ){
      printWinner();
    }
  }
  
  if(board[0][2] != "" && board[1][1] != "" && board[2][0] != ""){
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] ){
      printWinner();
    }
  }

  if(playRounds > 8 && winner == "" ){
    document.getElementById("gameResult").innerHTML = "Ha sido empate!";
  }
}
 
function printWinner(){
  if(turn == player1){
    console.log(namePlayer1)
    winner = namePlayer1;
  } else {
    console.log(namePlayer2)
    winner = namePlayer2;
  }
  document.getElementById("gameResult").innerHTML = winner + " ha ganado!";

}

function newGame(){
  board = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];
  for(let j=0; j<9 ;j++){
    document.getElementById(j).innerHTML = "";
  }
  document.getElementById("gameResult").innerHTML = "";
  document.getElementById("whoPlay").innerHTML = "";
  playRounds = 0;
  winner = "";
  turn=player1;
}
//juego no puede empezar si no hay nombres
//no poder seguir poniendo x o o al finalizar 
//PONER NOMBRES
//BLOQUEAR CAMBIAR X O O
//Celdas estáticas que no cambien de tamaño
