var turn = document.getElementById("turn"),
    // X_or_O => to set X or O into the box
    boxes = document.querySelectorAll("#main div"), X_or_O = 0;
    var player1 = false;
var end = 0;
var step = 0;
var games_played = 0;
var xWins = 0, oWins = 0, noOneWins = 0;
/**
 * <p>Функция выделения строки/столбца/диагонали блоков с победившими значениями
 * @param b1,b2,b3 - переменные, которые и являются блоками
 * <p> После выделения меняет переменную end(конец на значение TRUE для обозначения конца игры
   */
function selectWinnerBoxes(b1,b2,b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    if(b1.innerHTML == "X") {
        turn.innerHTML = "Крестики победили!";
        games_played++;
        xWins++;

        xWin.innerHTML = xWins;
        gameplayed.innerHTML = games_played;
    } else {
        turn.innerHTML = "Нолики победили!"
        games_played++;
        oWins++;
        oWin.innerHTML = oWins;
        gameplayed.innerHTML = games_played;
    }
    end = 1;
}
/**
 * <p>Функция проверки, есть ли победная серия крестиков или ноликов
 * @param Null
 */
function isWin() {

    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    if (box4.innerHTML != "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML) {
        selectWinnerBoxes(box4, box5, box6);
        return 1;
    }
    if (box1.innerHTML != "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box1, box5, box9);
        return 1;
    }
    if (box7.innerHTML != "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box7, box8, box9);
        return 1;
    }
    if (box1.innerHTML != "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) {
        selectWinnerBoxes(box1, box4, box7);
        return 1;
    }
    if (box1.innerHTML != "" && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) {
        selectWinnerBoxes(box1, box2, box3);
        return 1;
    }
    if (box2.innerHTML != "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        selectWinnerBoxes(box2, box5, box8);
        return 1;
    }
    if (box3.innerHTML != "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box3, box6, box9);
        return 1;
    }
    if(box3.innerHTML != "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        selectWinnerBoxes(box3, box5, box7);
        return 1;
    }
    return 0;
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "O" && end != 1){
            step++;
            steps.innerHTML = step;
            if(X_or_O % 2 == 0){
                console.log(X_or_O);
                this.innerHTML = "X";
                if(this.innerHTML == "X") {
                    this.innerHTML = "<img src = 'images/Lev.png'>";
                }
                turn.innerHTML = "Ходят нолики";
                isWin();
                X_or_O++;

            } else{
                console.log(X_or_O);
                this.innerHTML = "O";
                if(this.innerHTML == "O") {
                    this.innerHTML = "<img src = 'images/Danya.png'>";
                }
                turn.innerHTML = "Ходят крестики";
                isWin();
                X_or_O++;
            }
            if (step == 9 && !isWin()) {
                turn.innerHTML = "Ничья!";
                step == 0;
                noOneWins++;
                noOneWin.innerHTML = noOneWins;
                games_played++;
            }
        }

    };
}

function replay(){
    gameplayed.innerHTML = games_played;
    end = 0;
    steps.innerHTML = 0;
    step = 0;
    X_or_O = 0;
    for(var i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Битва началась!";
    }
}