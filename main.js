var box = document.querySelectorAll(".boxes");
var result = document.getElementById("result");

var go = "X";
var turnInfo = document.getElementById("turnInfo")

for (let i = 0; i < box.length; i++) {
    turnInfo.textContent = go + " Turn";

    box[i].addEventListener("click", function sign() {

        if (go == "X" && box[i].textContent.length == 0) {

            box[i].textContent = go
            box[i].style.color = "#31c4be";
            go = "O"
            turnInfo.textContent = `${go} Turn`


        } else if (go == "O" && box[i].textContent.length == 0) {

            box[i].textContent = go
            box[i].style.color = "#f0b035";
            go = "X"
            turnInfo.textContent = `${go} Turn`

        }



        {
            const temp = []
            for (let index = 0; index < box.length; index++) {
                if (box[index].textContent.length == 1) {
                    temp.push(box[index].textContent.length);
                }
            }


            // Win Positions for X


            if (box[0].innerHTML == "X" && box[1].innerHTML == "X" && box[2].innerHTML == "X") {
                resultForX()
            } else if (box[3].innerHTML == "X" && box[4].innerHTML == "X" && box[5].innerHTML == "X") {
                resultForX()
            } else if (box[6].innerHTML == "X" && box[7].innerHTML == "X" && box[8].innerHTML == "X") {
                resultForX()
            } else if (box[0].innerHTML == "X" && box[3].innerHTML == "X" && box[6].innerHTML == "X") {
                resultForX()
            } else if (box[1].innerHTML == "X" && box[4].innerHTML == "X" && box[7].innerHTML == "X") {
                resultForX()
            } else if (box[2].innerHTML == "X" && box[5].innerHTML == "X" && box[8].innerHTML == "X") {
                resultForX()
            } else if (box[0].innerHTML == "X" && box[4].innerHTML == "X" && box[8].innerHTML == "X") {
                resultForX()
            } else if (box[2].innerHTML == "X" && box[4].innerHTML == "X" && box[6].innerHTML == "X") {
                resultForX()
            }

            // Win Positions for O

            else if (box[0].innerHTML == "O" && box[1].innerHTML == "O" && box[2].innerHTML == "O") {
                resultForO()
            } else if (box[3].innerHTML == "O" && box[4].innerHTML == "O" && box[5].innerHTML == "O") {
                resultForO()
            } else if (box[6].innerHTML == "O" && box[7].innerHTML == "O" && box[8].innerHTML == "O") {
                resultForO()
            } else if (box[0].innerHTML == "O" && box[3].innerHTML == "O" && box[6].innerHTML == "O") {
                resultForO()
            } else if (box[1].innerHTML == "O" && box[4].innerHTML == "O" && box[7].innerHTML == "O") {
                resultForO()
            } else if (box[2].innerHTML == "O" && box[5].innerHTML == "O" && box[8].innerHTML == "O") {
                resultForO()
            } else if (box[0].innerHTML == "O" && box[4].innerHTML == "O" && box[8].innerHTML == "O") {
                resultForO()
            } else if (box[2].innerHTML == "O" && box[4].innerHTML == "O" && box[6].innerHTML == "O") {
                resultForO()
            }

            // Draw Match Code

            else if (temp.length == box.length) {
                result.textContent = "Match is Draw"
            }
        }

    })
    document.getElementById("resetButton").addEventListener("click", function () {
        box[i].textContent = ""
        result.textContent = ""
    })


}
function reset() {
    for (let j = 0; j < box.length; j++) {
        box[j].textContent = ""
    }
}
function resultForX() {
    result.textContent = "X Won the match"
    setTimeout(reset, 700)
    setTimeout(clearResult, 700)
}

function resultForO() {
    result.textContent = "O Won the match"
    setTimeout(reset, 700)
    setTimeout(clearResult, 700)
}


function clearResult() {
    result.textContent = ""
}
