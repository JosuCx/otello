var tablero = new Array(8);
var contador1 = 0;
var contador2 = 0;

function play() {
    //inicio del juego
    var primer_jugador = prompt("Nombre del primer Jugador", "");
    var segundo_jugador = prompt("Nombre del segundo Jugador", "");
    if (primer_jugador != null) {
        if (segundo_jugador != null) {
            if (primer_jugador == segundo_jugador) {
                alert("los dos nombres pueden ser iguales, volver a intentar");
            } else {
                document.getElementById("nom1").innerHTML = "" + primer_jugador;
                document.getElementById("nom2").innerHTML = "" + segundo_jugador;
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
    document.getElementById("pt_negras").innerHTML = "2" ;
}
function posicion(x) {
    if (x == 1) {
        document.getElementById("a1").style.fill = "black";
    }
    else if (x == 2) {
        document.getElementById("a1").style.fill = "white";
    }
}

function posi(x) {
    switch (x) {
        case 1:
            document.getElementById("a1").style.fill = "black";
            break;
        case 2:
            document.getElementById("a2").style.fill = "white";
            break;
        case 3:
            document.getElementById("a3").style.fill = "yellow";
            break;
        case 4:
            document.getElementById("a4").style.fill = "cyan";
            break;
        case 5:
            document.getElementById("a6").style.fill = "black";
            break;
        case 6:
            document.getElementById("a7").style.fill = "white";
            break;
        case 7:
            document.getElementById("a8").style.fill = "yellow";
            break;
        case 8:
            document.getElementById("b1").style.fill = "cyan";
            break;
        case 10:
            document.getElementById("b2").style.fill = "black";
            break;
        case 11:
            document.getElementById("b3").style.fill = "white";
            break;
        case 12:
            document.getElementById("b4").style.fill = "yellow";
            break;
        case 13:
            document.getElementById("b5").style.fill = "cyan";
            break;
        case 14:
            document.getElementById("b6").style.fill = "black";
            break;
        case 15:
            document.getElementById("b7").style.fill = "white";
            break;
        case 16:
            document.getElementById("b8").style.fill = "yellow";
            break;
        case 17:
            document.getElementById("c1").style.fill = "cyan";
            break;
        case 18:
            document.getElementById("c2").style.fill = "black";
            break;
        case 19:
            document.getElementById("c3").style.fill = "white";
            break;
        case 20:
            document.getElementById("c4").style.fill = "yellow";
            break;
        case 21:
            document.getElementById("c5").style.fill = "cyan";
            break;
        case 22:
            document.getElementById("c6").style.fill = "black";
            break;
        case 23:
            document.getElementById("c7").style.fill = "white";
            break;
        case 24:
            document.getElementById("c8").style.fill = "yellow";
            break;
        case 25:
            document.getElementById("c9").style.fill = "cyan";
            break;

    }
}
function cambioa1() {
    
}