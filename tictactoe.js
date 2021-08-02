


var turn = 1;
var win=-1;
var clickCounter=0;
var matrix = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]
function playerAction(elem,row,col) {
    if (elem.innerHTML != ""){
        return;
    }
    if(win != -1){
        return;
    }
    clickCounter++;
    matrix[row][col]=turn;
       if (turn == 1){
           elem.innerHTML="X";
           document.getElementById("message").innerHTML="Player 2 turn."
           turn=2
       }
       else if (turn == 2 ) {
        elem.innerHTML="O";
        document.getElementById("message").innerHTML="Player 1 turn."
        turn=1;
    }
    for (var i=0;i<3;i++){
        if(matrix[i][0]==matrix[i][1] && matrix[i][1]==matrix[i][2]) {
            win=matrix[i][0]
        }
        if(matrix[0][i]==matrix[1][i] && matrix[1][i]==matrix[2][i]) {
            win=matrix[0][i]
        }
        
    }
    if(matrix[0][0]==matrix[1][1]==matrix[2][2]){
        win=matrix[1][1];
    }
    if(matrix[0][2]==matrix[1][1]==matrix[2][0]){
        win=matrix[1][1];
    }
    if (win != -1){
        document.getElementById("message").innerHTML="Player"+ win + " has won the game"
    }
    if (clickCounter==9 && win == -1){
        document.getElementById("message").innerHTML="The game has drawn"
    }
}