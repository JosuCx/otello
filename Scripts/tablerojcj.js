var tablero = new Array(8);
var contador1;
var contador2;
var filaA = ["01", "02", "03", "04", "05", "06", "07", "08"];
var filaB = ["09", "10", "11", "12", "13", "14", "15", "16"];
var filaC = ["17", "18", "19", "20", "21", "22", "23", "24"];
var filaD = ["25", "26", "27", "28", "29", "30", "31", "32"];
var filaE = ["33", "34", "35", "36", "37", "38", "39", "40"];
var filaF = ["41", "42", "43", "44", "45", "46", "47", "48"];
var filaG = ["49", "50", "51", "52", "53", "54", "55", "56"];
var filaH = ["57", "58", "59", "60", "61", "62", "63", "64"];
var columA = ["01", "09", "17", "25", "33", "41", "49", "57"];
var columB = ["02", "10", "18", "26", "34", "42", "50", "58"];
var columC = ["03", "11", "19", "27", "35", "43", "51", "59"];
var columD = ["04", "12", "20", "28", "36", "44", "52", "60"];
var columE = ["05", "13", "21", "29", "37", "45", "53", "61"];
var columF = ["06", "14", "22", "30", "38", "46", "54", "62"];
var columG = ["07", "15", "23", "31", "39", "47", "55", "63"];
var columH = ["08", "16", "24", "32", "40", "48", "56", "64"];
var digD1 = ["49",  "58"];
var digD2 = ["41",  "50", "59"];
var digD3 = ["33",  "42", "51", "60"];
var digD4 = ["25",  "34", "43", "52", "61"];
var digD5 = ["17",  "26", "35", "44", "53", "62"];
var digD6 = ["09",  "18", "27", "36", "45", "54", "63"];
var digD7 = ["01",  "10", "19", "28", "37", "46", "55", "64"];
var digD8 = ["02",  "11", "20", "29", "38", "47", "56"];
var digD9 = ["03",  "12", "21", "30", "39", "48"];
var digD10 = ["04", "13", "22", "31", "40"];
var digD11 = ["05", "14", "23", "32"];
var digD12 = ["06", "15", "24"];
var digD13 = ["07", "16"];
var digI1 = ["09",  "02"];
var digI2 = ["17",  "10", "03"];
var digI3 = ["25",  "18", "11", "04"];
var digI4 = ["33",  "26", "19", "12", "05"];
var digI5 = ["41",  "34", "27", "20", "13", "06"];
var digI6 = ["49",  "42", "35", "28", "21", "14", "07"];
var digI7 = ["57",  "50", "43", "36", "29", "22", "15", "08"];
var digI8 = ["58",  "51", "44", "37", "30", "23", "16"];
var digI9 = ["59",  "52", "45", "38", "31", "24"];
var digI10 = ["60", "53", "46", "39", "32"];
var digI11 = ["61", "54", "47", "40"];
var digI12 = ["62", "55", "48"];
var digI13 = ["63", "56"];
function tableroini() {
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            tablero[i][j] = 0;
        }
    }
}
function play() {
    //inicio del juego
    var primer_jugador = prompt("Nombre del primer Jugador", "");
    var segundo_jugador = prompt("Nombre del segundo Jugador", "");
    console.log(contador1);
    console.log(contador2);
    if (primer_jugador != null) {
        if (segundo_jugador != null) {
            if (primer_jugador == segundo_jugador) {
                alert("los dos nombres pueden ser iguales, volver a intentar");
            } else {
                
                document.getElementById("nom1").innerHTML = "" + primer_jugador;
                document.getElementById("nom2").innerHTML = "" + segundo_jugador;
                document.getElementById("partida1").innerHTML = "0";
                document.getElementById("partida2").innerHTML = "0";
                document.getElementById("pt_blancas").innerHTML = "2";
                document.getElementById("pt_negras").innerHTML = "2";
                
                for (i = 0; i < 8; i++) tablero[i] = new Array(8);
                tableroini();
                tablero[2][8] = 1;
                tablero[2][9] = 2;
                tablero[3][6] = 1;
                tablero[3][7] = 2;
                contador1 = 0;
                contador2 = 0;
            }
        } else {
            alert("No has ingresado el nombre del segundo jugador, volver a intentar");
        }
    } else {
        alert("No has ingresado el nombre del primer jugador, volver a intentar");
    }
}

function reset() {
    //reinicio de tablero 
    document.getElementById("nom1").innerHTML = "";
    document.getElementById("nom2").innerHTML = "";
    document.getElementById("partida1").innerHTML = "0" ;
    document.getElementById("partida2").innerHTML = "0";
    document.getElementById("pt_blancas").innerHTML = "2";
    document.getElementById("pt_negras").innerHTML = "2";
    console.log(contador1);
    console.log(contador2);
}
function carga() {
    console.log("nom");
}
function descarga() {
    console.log("name");
}
function posicion(x) {
    if (x == 1) {
        document.getElementById("a1").style.fill = "black";
    }
    else if (x == 2) {
        document.getElementById("a1").style.fill = "white";
    }
}

function posi( x) {
    switch (x) {
        case 1:
            document.getElementById("a1").style.fill = "black";
            break;
    }
}



function prueba(x, y) {
  
    if (contador1 == contador2) {
        tablero[x][y] = 1;
        document.getElementById("a" + x + y).style.fill = "black";
        contador1 = contador1 + 1;
        document.getElementById("partida1").innerHTML = "" + contador1;
        console.log(contador1);
        console.log(contador2);
        fichas();
    }
    else if (contador1 != contador2) {
        tablero[x][y] = 2;
        document.getElementById("a" + x + y).style.fill = "white";
        contador2 = contador2 + 1;
        console.log("suma");
        document.getElementById("partida2").innerHTML = "" + contador2;
        console.log("reinician");
        fichas();
    } else {
        console.log("error");
    }
}
function fichas() {
    var bl = 2;
    var ne = 2;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (tablero[i][j] == 1) {
                console.log("blancas"+bl);
                bl = bl + 1;
            } else if (tablero[i][j] == 2) {
                ne = ne + 1;
                console.log("negras" +ne);
            } else {
                console.log("pos i=" + i + " pos j=" + j);
            }
        }
    }
    document.getElementById("pt_blancas").innerHTML = ""+bl;
    document.getElementById("pt_negras").innerHTML = ""+ne;
}
function validarjugada() {

}
function llenado(x, y) {
    var dat = "" + x + "" + y + "";
    console.log(dat); 
        //datos
        for (h = 0; h < filaA.length; h++) {
            if (filaA[h] == dat) {
                //entonces que todos los que estan en esa filas sean diferentes de 1 seran a blancos 
                if (tablero[x][y] == 2) {
                    document.getElementById("a" + dat).style.fill = "white";
                }
            }
            else if (filaB == dat) {

            }
            
        }
           
        
    
}