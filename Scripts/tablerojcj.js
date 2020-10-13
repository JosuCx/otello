﻿var tablero = new Array(8);
var contador1;
var contador2;
var bl;
var ne;

var check_arriba;
var check_abajo;
var check_d;
var check_i;
var check_d1_x;
var check_d2_x;
var check_d3_x;
var check_d4_x;
var check_d1_y;
var check_d2_y;
var check_d3_y;
var check_d4_y;
var check;
function tableroini() {
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            tablero[i][j] = 0;
        }
    }
    mostrar()
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
                tablero[3][3] = 1;
                tablero[3][4] = 2;
                tablero[4][3] = 1;
                tablero[4][4] = 2;
                contador1 = 0;
                contador2 = 0;
                mostrar()
                document.getElementById("a33").style.fill = "white";
                document.getElementById("a34").style.fill = "black";
                document.getElementById("a43").style.fill = "black";
                document.getElementById("a44").style.fill = "white";
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
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            document.getElementById("a"+i+j).style.fill = "green";       
        }
    }
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
    if (tablero[x][y] == 0) {
        if (contador1 == contador2) {
            tablero[x][y] = 1;
            document.getElementById("a" + x + y).style.fill = "white";
            contador1 = contador1 + 1;
            document.getElementById("partida1").innerHTML = "" + contador1;
            console.log(contador1);
            console.log(contador2);
            fichas();
            mostrar();
        }
        else if (contador1 != contador2) {
            tablero[x][y] = 2;
            document.getElementById("a" + x + y).style.fill = "black";
            contador2 = contador2 + 1;
            console.log("suma");
            document.getElementById("partida2").innerHTML = "" + contador2;
            console.log("reinician");
            fichas();
            mostrar();
        } else {
            console.log("error");
        }
    }
    else if (tablero[x][y] == 1) {
        alert("casilla invalida");
    }
    else if (tablero[x][y] == 2) {
        alert("casilla invalida");
    }
}
function fichas() {
    ne = 0;
    bl = 0;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            console.log("" + i + "," + j);
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

function llenado(x, y) {
    check = false;
    check_arriba = x - 1;
    check_abajo = x + 1;
    check_d = y - 1;
    check_i = y + 1;
    check_d1_x = x - 1;
    check_d1_y = y - 1;
    check_d2_x = x - 1;
    check_d2_y = y + 1;
    check_d3_x = x + 1;
    check_d3_y = y - 1;
    check_d4_x = x + 1;
    check_d4_y = y + 1;
    if (tablero[check_arriba][y] == 2) {
        check = true;
    } else if (tablero[check_abajo][y] == 2) {
        check = true;
    } else if (tablero[check_i][y] == 2) {
        check = true;
    } else if (tablero[check_d][y] == 2) {
        check = true;
    } else {
        console.log("no se puedo")
        alert("casilla invalida");
    }
    if (check == true) {
        prueba(x, y);
    }
}

function pasar(x) {
    switch (x) {
        case 1:
            var dif = contador1 - contador2;
            if (dif == 0) {
                console.log("paso turno 1");
                contador1 = contador1 + 1;
                fichas();
                document.getElementById("partida1").innerHTML = "" + contador1;
                break;
            } else {
                console.log("B no es su turno");
                alert("No puede pasar turno, porque no es su turno");
                break;
            }
        case 2:
            var dif1 = contador2 - contador1;
            if (dif1==1) {
                console.log("paso turno 2");
                contador2 = contador2 + 1;
                fichas();
                document.getElementById("partida1").innerHTML = "" + contador2;
                break;
            } else {
                console.log("N no es su turno");
                alert("No puede pasar turno, porque no es su turno");
                break;
            }
    }
}

function completa(x, y) {
    if (tablero[x][y] == 0) {
        if (contador1 == contador2) {
            check = false;
            check_arriba = x - 1;
            check_abajo = x + 1;
            check_d = y - 1;
            check_i = y + 1;
            //diagonal subida derecha
            check_d1_x = x - 1;
            check_d1_y = y - 1;
            //diagonal subida izquierda
            check_d2_x = x - 1;
            check_d2_y = y + 1;
            //diagonal baja derecha
            check_d3_x = x + 1;
            check_d3_y = y - 1;
            //diagonal baja izquierda
            check_d4_x = x + 1;
            check_d4_y = y + 1;
            //arriba
            if (tablero[check_arriba][y] == 2) {
                check = true;
            }
            //abajo
            else if (tablero[check_abajo][y] == 2) {
                check = true;
            }
            //izquierda
            else if (tablero[check_i][y] == 2) {
                check = true;
            }
            //derecha
            else if (tablero[check_d][y] == 2) {
                check = true;
            }
            //diagonal subida derecha
            else if (tablero[check_d1_x][check_d1_y] == 2) {
                check = true;
            }
            //diagonal subida izquierda
            else if (tablero[check_d2_x][check_d2_y] == 2) {
                check = true;
            }
            //diagonal baja derecha
            else if (tablero[check_d3_x][check_d3_y] == 2) {
                check = true;
            }
            //diagonal baja izquierda
            else if (tablero[check_d4_x][check_d4_y] == 2) {
                check = true;
            }
            //niguno
            else {
                console.log("no se puedo")
                alert("casilla invalida");
            }
            if (check == true) {
                //derecha
                for (i = 1; i < 8;i++) {
                    if (tablero[(x)][(y + i)] == 2) {
                        tablero[x][(y + i)] = 1;
                        tablero[x][y] = 1;
                        document.getElementById("a" + x + (y + i)).style.fill = "white";
                    } else {
                        console.log("B no es derecha "+i);
                        break;
                    }
                }
                //izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y - i)] == 2) {
                        tablero[x][(y - i)] = 1;
                        document.getElementById("a" + x + (y - i)).style.fill = "white";
                    } else {
                        console.log("B no es izquierda " + i);
                        break;
                    }
                }
                //arriba
                for (i = 1; i < 8; i++) {
                    if (tablero[(x+i)][y] == 2) {
                        tablero[(x+i)][y] = 1;
                        document.getElementById("a" + (x+i) + y).style.fill = "white";
                    } else {
                        console.log("B no es arriba " + i);
                        break;
                    }
                }
                //abajo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x-i)][y] == 2) {
                        tablero[(x-i)][y] = 1;
                        document.getElementById("a" + (x-i) + y).style.fill = "white";
                    } else {
                        console.log("B no es abajo "+i);
                        break;
                    }
                }
                //diagonalIzquierdo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x+i)][(y + i)] == 2) {
                        tablero[(x+i)][(y + i)] = 1;
                        document.getElementById("a" + (x+i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("B diagonal bajada Izquierda "+i);
                        break;
                    }
                }
                //diagonal baja derechas
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y - i)] == 2) {
                        tablero[(x + i)][(y - i)] = 1;
                        document.getElementById("a" + (x + i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("B diagonal derecha Izquierda " + i);
                        break;
                    }
                }
                //diagonal subida derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y - i)] == 2) {
                        tablero[(x - i)][(y - i)] = 1;
                        document.getElementById("a" + (x - i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("B diagonal subida Derecha " + i);
                        break;
                    }
                }
                //diagonal subida izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y + i)] == 2) {
                        tablero[(x - i)][(y + i)] = 1;
                        document.getElementById("a" + (x - i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("B Diagonal Subida Izquierda " + i);
                        break;
                    }
                }
                tablero[x][y] = 1;
                document.getElementById("a" +x +y).style.fill = "white";
                contador1 = contador1 + 1;
                document.getElementById("partida1").innerHTML = "" + contador1;
                console.log(contador1);
                console.log(contador2);
                fichas();
                mostrar();
            }
        }
        else if (contador1 != contador2) {
            check = false;
            check_arriba = x - 1;
            check_abajo = x + 1;
            check_d = y - 1;
            check_i = y + 1;
            //diagonal subida derecha
            check_d1_x = x - 1;
            check_d1_y = y - 1;
            //diagonal subida izquierda
            check_d2_x = x - 1;
            check_d2_y = y + 1;
            //diagonal baja derecha
            check_d3_x = x + 1;
            check_d3_y = y - 1;
            //diagonal baja izquierda
            check_d4_x = x + 1;
            check_d4_y = y + 1;
            //arriba
            if (tablero[check_arriba][y] == 1) {
                check = true;
            }
            //abajo
            else if (tablero[check_abajo][y] == 1) {
                check = true;
            }
            //izquierda
            else if (tablero[check_i][y] == 1) {
                check = true;
            }
            //derecha
            else if (tablero[check_d][y] == 1) {
                check = true;
            }
            //diagonal subida derecha
            else if (tablero[check_d1_x][check_d1_y] == 1) {
                check = true;
            }
            //diagonal subida izquierda
            else if (tablero[check_d2_x][check_d2_y] == 1) {
                check = true;
            }
            //diagonal baja derecha
            else if (tablero[check_d3_x][check_d3_y] == 1) {
                check = true;
            }
            //diagonal baja izquierda
            else if (tablero[check_d4_x][check_d4_y] == 1) {
                check = true;
            }
            else {
                console.log("no se puedo")
                alert("casilla invalida");
            }
            if (check == true) {
                //derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y + i)] == 1) {
                        tablero[x][(y + i)] = 2;
                        document.getElementById("a" + x + (y + i)).style.fill = "black";
                    } else {
                        console.log("N no es derecha " + i);
                        break;
                    }
                }
                //izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y - i)] == 1) {
                        tablero[x][(y - i)] = 2;
                        document.getElementById("a" + x + (y - i)).style.fill = "black";
                    } else {
                        console.log("N no es izquierda " + i);
                        break;
                    }
                }
                //arriba
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][y] == 1) {
                        tablero[(x + i)][y] = 2;
                        document.getElementById("a" + (x + i) + y).style.fill = "black";
                    } else {
                        console.log("N no es arriba " + i);
                        break;
                    }
                }
                //abajo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][y] == 1) {
                        tablero[(x - i)][y] = 2;
                        document.getElementById("a" + (x - i) + y).style.fill = "black";
                    } else {
                        console.log("N no es abajo " + i);
                        break;
                    }
                }
                //diagonalIzquierdo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y + i)] == 1) {
                        tablero[(x + i)][(y + i)] = 2;
                        document.getElementById("a" + (x + i) + (y + i)).style.fill = "black";
                    } else {
                        console.log("N diagonal bajada Izquierda " + i);
                        break;
                    }
                }
                //diagonal baja derechas
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y - i)] == 1) {
                        tablero[(x + i)][(y - i)] = 2;
                        document.getElementById("a" + (x + i) + (y - i)).style.fill = "black";
                    } else {
                        console.log("N diagonal derecha Izquierda " + i);
                        break;
                    }
                }
                //diagonal subida derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y - i)] == 1) {
                        tablero[(x - i)][(y - i)] = 2;
                        document.getElementById("a" + (x - i) + (y - i)).style.fill = "black";
                    } else {
                        console.log("N diagonal subida Derecha " + i);
                        break;
                    }
                }
                //diagonal subida izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y + i)] == 1) {
                        tablero[(x - i)][(y + i)] = 2;
                        document.getElementById("a" + (x - i) + (y + i)).style.fill = "black";
                    } else {
                        console.log("N Diagonal Subida Izquierda " + i);
                        break;
                    }
                }
                tablero[x][y] = 2;
                document.getElementById("a" + x  + y).style.fill = "black";
                contador2 = contador2 + 1;
                console.log("suma");
                document.getElementById("partida2").innerHTML = "" + contador2;
                console.log("reinician");
                fichas();
                mostrar();
            }
        } else {
            console.log("error");
        }
    }
    else if (tablero[x][y] == 1) {
        alert("casilla invalida");
    }
    else if (tablero[x][y] == 2) {
        alert("casilla invalida");
    }

}


function completa1(x, y) {
    if (tablero[x][y] == 0) {
        if (contador1 == contador2) {
            check = false;
            check_arriba = x - 1;
            check_abajo = x + 1;
            check_d = y - 1;
            check_i = y + 1;
            check_d1_x = x - 1;
            check_d1_y = y - 1;
            check_d2_x = x - 1;
            check_d2_y = y + 1;
            check_d3_x = x + 1;
            check_d3_y = y - 1;
            check_d4_x = x + 1;
            check_d4_y = y + 1;
            if (tablero[check_arriba][y] == 2) {
                check = true;
            } else if (tablero[check_abajo][y] == 2) {
                check = true;
            } else if (tablero[check_i][y] == 2) {
                check = true;
            } else if (tablero[check_d][y] == 2) {
                check = true;
            } else {
                console.log("no se puedo")
                alert("casilla invalida");
            }
            if (check == true) {
                //derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y + i)] == 2) {
                        tablero[x][(y + i)] = 1;
                        tablero[x][y] = 1;
                        document.getElementById("a" + x + (y + i)).style.fill = "white";
                    } else {
                        console.log("B no es derecha " + i);
                        break;
                    }
                }
                //izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y - i)] == 2) {
                        tablero[x][(y - i)] = 1;
                        document.getElementById("a" + x + (y - i)).style.fill = "white";
                    } else {
                        console.log("B no es izquierda " + i);
                        break;
                    }
                }
                //arriba
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][y] == 2) {
                        tablero[(x + i)][y] = 1;
                        document.getElementById("a" + (x + i) + y).style.fill = "white";
                    } else {
                        console.log("B no es arriba " + i);
                        break;
                    }
                }
                //abajo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][y] == 2) {
                        tablero[(x - i)][y] = 1;
                        document.getElementById("a" + (x - i) + y).style.fill = "white";
                    } else {
                        console.log("B no es abajo " + i);
                        break;
                    }
                }
                //diagonalIzquierdo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y + i)] == 2) {
                        tablero[(x + i)][(y + i)] = 1;
                        document.getElementById("a" + (x + i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("B diagonal bajada Izquierda " + i);
                        break;
                    }
                }
                //diagonal baja derechas
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y - i)] == 2) {
                        tablero[(x + i)][(y - i)] = 1;
                        document.getElementById("a" + (x + i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("B diagonal derecha Izquierda " + i);
                        break;
                    }
                }
                //diagonal subida derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y - i)] == 2) {
                        tablero[(x - i)][(y - i)] = 1;
                        document.getElementById("a" + (x - i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("B diagonal subida Derecha " + i);
                        break;
                    }
                }
                //diagonal subida izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y + i)] == 2) {
                        tablero[(x - i)][(y + i)] = 1;
                        document.getElementById("a" + (x - i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("B Diagonal Subida Izquierda " + i);
                        break;
                    }
                }
                contador1 = contador1 + 1;
                document.getElementById("partida1").innerHTML = "" + contador1;
                console.log(contador1);
                console.log(contador2);
                fichas();
                mostrar();
            }
        }
        else if (contador1 != contador2) {
            check = false;
            check_arriba = x - 1;
            check_abajo = x + 1;
            check_d = y - 1;
            check_i = y + 1;
            check_d1_x = x - 1;
            check_d1_y = y - 1;
            check_d2_x = x - 1;
            check_d2_y = y + 1;
            check_d3_x = x + 1;
            check_d3_y = y - 1;
            check_d4_x = x + 1;
            check_d4_y = y + 1;
            if (tablero[check_arriba][y] == 1) {
                check = true;
            } else if (tablero[check_abajo][y] == 1) {
                check = true;
            } else if (tablero[check_i][y] == 1) {
                check = true;
            } else if (tablero[check_d][y] == 1) {
                check = true;
            } else {
                console.log("no se puedo")
                alert("casilla invalida");
            }
            if (check == true) {
                //derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y + i)] == 1) {
                        tablero[x][(y + i)] = 2;
                        document.getElementById("a" + x + (y + i)).style.fill = "black";
                    } else {
                        console.log("N no es derecha " + i);
                        break;
                    }
                }
                //izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x)][(y - i)] == 1) {
                        tablero[x][(y - i)] = 2;
                        document.getElementById("a" + x + (y - i)).style.fill = "black";
                    } else {
                        console.log("N no es izquierda " + i);
                        break;
                    }
                }
                //arriba
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][y] == 1) {
                        tablero[(x + i)][y] = 2;
                        document.getElementById("a" + (x + i) + y).style.fill = "black";
                    } else {
                        console.log("N no es arriba " + i);
                        break;
                    }
                }
                //abajo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][y] == 1) {
                        tablero[(x - i)][y] = 2;
                        document.getElementById("a" + (x - i) + y).style.fill = "white";
                    } else {
                        console.log("N no es abajo " + i);
                        break;
                    }
                }
                //diagonalIzquierdo
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y + i)] == 1) {
                        tablero[(x + i)][(y + i)] = 2;
                        document.getElementById("a" + (x + i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("N diagonal bajada Izquierda " + i);
                        break;
                    }
                }
                //diagonal baja derechas
                for (i = 1; i < 8; i++) {
                    if (tablero[(x + i)][(y - i)] == 1) {
                        tablero[(x + i)][(y - i)] = 2;
                        document.getElementById("a" + (x + i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("N diagonal derecha Izquierda " + i);
                        break;
                    }
                }
                //diagonal subida derecha
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y - i)] == 1) {
                        tablero[(x - i)][(y - i)] = 2;
                        document.getElementById("a" + (x - i) + (y - i)).style.fill = "white";
                    } else {
                        console.log("N diagonal subida Derecha " + i);
                        break;
                    }
                }
                //diagonal subida izquierda
                for (i = 1; i < 8; i++) {
                    if (tablero[(x - i)][(y + i)] == 1) {
                        tablero[(x - i)][(y + i)] = 2;
                        document.getElementById("a" + (x - i) + (y + i)).style.fill = "white";
                    } else {
                        console.log("N Diagonal Subida Izquierda " + i);
                        break;
                    }
                }
                contador2 = contador2 + 1;
                console.log("suma");
                document.getElementById("partida2").innerHTML = "" + contador2;
                console.log("reinician");
                fichas();
                mostrar();
            }
        } else {
            console.log("error");
        }
    }
    else if (tablero[x][y] == 1) {
        alert("casilla invalida");
    }
    else if (tablero[x][y] == 2) {
        alert("casilla invalida");
    }

}



function mostrar() {
    
    console.log("" + tablero[0][0] + ", " + tablero[0][1] + "," + tablero[0][2] + ", " + tablero[0][3] + "," + tablero[0][4] + "," + tablero[0][5] + "," + tablero[0][6] + ", " + tablero[0][7] )
    console.log("" + tablero[1][0] + ", " + tablero[1][1] + "," + tablero[1][2] + ", " + tablero[1][3] + "," + tablero[1][4] + "," + tablero[1][5] + "," + tablero[1][6] + ", " + tablero[1][7])
    console.log("" + tablero[2][0] + ", " + tablero[2][1] + "," + tablero[2][2] + ", " + tablero[2][3] + "," + tablero[2][4] + "," + tablero[2][5] + "," + tablero[2][6] + ", " + tablero[2][7])
    console.log("" + tablero[3][0] + ", " + tablero[3][1] + "," + tablero[3][2] + ", " + tablero[3][3] + "," + tablero[3][4] + "," + tablero[3][5] + "," + tablero[3][6] + ", " + tablero[3][7])
    console.log("" + tablero[4][0] + ", " + tablero[4][1] + "," + tablero[4][2] + ", " + tablero[4][3] + "," + tablero[4][4] + "," + tablero[4][5] + "," + tablero[4][6] + ", " + tablero[4][7])
    console.log("" + tablero[5][0] + ", " + tablero[5][1] + "," + tablero[5][2] + ", " + tablero[5][3] + "," + tablero[5][4] + "," + tablero[5][5] + "," + tablero[5][6] + ", " + tablero[5][7])
    console.log("" + tablero[6][0] + ", " + tablero[6][1] + "," + tablero[6][2] + ", " + tablero[6][3] + "," + tablero[6][4] + "," + tablero[6][5] + "," + tablero[6][6] + ", " + tablero[6][7])
    console.log("" + tablero[7][0] + ", " + tablero[7][1] + "," + tablero[7][2] + ", " + tablero[7][3] + "," + tablero[7][4] + "," + tablero[7][5] + "," + tablero[7][6] + ", " + tablero[7][7])

}