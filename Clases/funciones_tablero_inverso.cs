using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace otello.Clases
{
    public class funciones_tablero_inverso
    {
        public static int[,] tablero;
        public void llenartablero() {
            tablero = new int[8][8];
            for (int i=0; i<8; i++) {
                for (int j=0; j<8; j++) {
                    tablero[i][j] = 1;

                }
            }
        }

    }
}