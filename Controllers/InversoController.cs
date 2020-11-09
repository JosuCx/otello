using System;
using System.Collections.Generic;
using System.EnterpriseServices.Internal;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using otello.Clases;
using otello.Models;
using System.Diagnostics;
using System.Threading;
using System.Web.UI.WebControls;
using System.Threading.Tasks;

namespace otello.Controllers
{
    public class InversoController : Controller
    {
        // GET: Inverso
        public ActionResult RetoInverso()
        {
            
            funciones_tablero_inverso.contador1 = 1;
                mostra();
                return View();
        }
        public ActionResult mostra() {
           
            List<colorview> listcolor = null;
            using (sqlcolor db = new sqlcolor())
            {
                listcolor = (from d in db.colors  select new colorview
                             {
                                 Co = d.color1
                             }).ToList();
            }
            return View(listcolor);
        }

        
        [HttpGet]
        public async Task<ActionResult> mostrar1() {

            await Task.Run(() => {
                //cronometro
                var st1 = new Stopwatch();

                if (funciones_tablero_inverso.contador1 == 1)
                {

                    st1.Start();
                    Thread.Sleep(1000);
                    st1.Stop();
                    ViewBag.tt = "paso";
                    TimeSpan ts1 = st1.Elapsed;
                    //formato
                    string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}", ts1.Hours, ts1.Minutes, ts1.Seconds);
                    Console.WriteLine("run " + elapsedTime);
                     ViewBag.tiempo1 = "" + elapsedTime;
                }
                else if (funciones_tablero_inverso.contador1 == 2)
                {
                    st1.Stop();
                }
                return View(ViewBag.tiempo1);
            });
            return RedirectToAction("RetoInverso","Inverso");
        }
    }
}