let arrayCaro = [];

function assimentElementToArray() {
    for (let i = 0; i < 5; i++) {
        arrayCaro[i] = new Array();
        for (let j = 0; j < 5; j++) {
            arrayCaro[i][j] = ". " + "&nbsp; " + "&nbsp; ";
        }
    }
    showResult();
}

window.onload = assimentElementToArray();

function changeValueX() {
    let row = parseInt(document.getElementById("value-row").value);
    console.log(row);
    let col = parseInt(document.getElementById("value-col").value);
    console.log(col);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == row && j == col) {
                arrayCaro[i][j] = "X " + "&nbsp; ";
            }
        }
    }
    console.log(arrayCaro);
    showResult();
    showWinner();
}

function changeValueO() {
    let row = parseInt(document.getElementById("value-row").value);
    console.log(row);
    let col = parseInt(document.getElementById("value-col").value);
    console.log(col);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == row && j == col) {
                arrayCaro[i][j] = "O " + "&nbsp; ";
            }
        }
    }
    console.log(arrayCaro);
    showResult();
    showWinner();
}

function showResult() {
    let textTable = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            textTable += arrayCaro[i][j];
        }
        textTable += "<br>"
    }
    document.getElementById("content").innerHTML = textTable;
}

function showWinner() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ((arrayCaro[i][j] == "O " + "&nbsp; ") &&
                (arrayCaro[i + 1][j] == "O " + "&nbsp; ") &&
                (arrayCaro[i + 2][j] == "O " + "&nbsp; ")) {
                alert("play O is winner");
            }
            if ((arrayCaro[i][j] == "X " + "&nbsp; ") &&
                (arrayCaro[i + 1][j] == "X " + "&nbsp; ") &&
                (arrayCaro[i + 2][j] == "X " + "&nbsp; ")) {
                alert("play X is winner");
            }
            if ((arrayCaro[i][j] == "O " + "&nbsp; ") &&
                (arrayCaro[i][j + 1] == "O " + "&nbsp; ") &&
                (arrayCaro[i][j + 2] == "O " + "&nbsp; ")) {
                alert("play O is winner");
            }
            if ((arrayCaro[i][j] == "X " + "&nbsp; ") &&
                (arrayCaro[i][j + 1] == "X " + "&nbsp; ") &&
                (arrayCaro[i][j + 2] == "X " + "&nbsp; ")) {
                alert("play X is winner");
            }
            if ((arrayCaro[i][j] == "O " + "&nbsp; ") &&
                (arrayCaro[i + 1][j + 1] == "O " + "&nbsp; ") &&
                (arrayCaro[i + 2][j + 2] == "O " + "&nbsp; ")) {
                alert("play O is winner");
            }
            if ((arrayCaro[i][j] == "X " + "&nbsp; ") &&
                (arrayCaro[i + 1][j + 1] == "X " + "&nbsp; ") &&
                (arrayCaro[i + 2][j + 2] == "X " + "&nbsp; ")) {
                alert("play X is winner");
            }
            if ((arrayCaro[i + 2][j] == "O " + "&nbsp; ") &&
                (arrayCaro[i + 1][j + 1] == "O " + "&nbsp; ") &&
                (arrayCaro[i][j + 2] == "O " + "&nbsp; ")) {
                alert("play O is winner");
            }
            if ((arrayCaro[i + 2][j] == "X " + "&nbsp; ") &&
                (arrayCaro[i + 1][j + 1] == "X " + "&nbsp; ") &&
                (arrayCaro[i][j + 2] == "X " + "&nbsp; ")) {
                alert("play X is winner");
            }
        }
    }
}