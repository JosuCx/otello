using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Timers;
using System.Diagnostics;
using System.Threading;
using System.Dynamic;
using otello.Clases;

namespace otello.Clases
{
    public class funciones_tablero_inverso
    {
        public static int contador1 = 0;
        /*
        public static string cro1(string time) {
            Stopwatch st1 = new Stopwatch();
            st1.Start();
            Thread.Sleep(10000);
            st1.Stop();
            //
            TimeSpan ts = st1.Elapsed;
            //formato 
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}", ts.Hours,ts.Minutes,ts.Seconds);
            Console.WriteLine("Run " + elapsedTime);
            time = elapsedTime;
            return time;
        }
        */
        public static int[,] tablero;
        
        public static void tab1(string color1, string color2) {
            //llenado
            tablero = new int[8,8];
            for (int i=0; i<8;i++) {
                for (int j=0; j<8; j++) {
                    tablero[i, j] = 0;
                }
            }
            //color
            tablero[3, 3] = 1;
            tablero[3, 4] = 2;
            tablero[4, 3] = 2;
            tablero[4, 4] = 1;

        }
    }
}