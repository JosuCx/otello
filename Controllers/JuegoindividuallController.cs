using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.OleDb;
namespace otello.Controllers
{
    public class JuegoindividuallController : Controller
    {
        // GET: Juegoindividuall
        public ActionResult JugadorVsMaquina()
        {
            return View();
        }
        public ActionResult Maquina()
        {
            return View();
        }

        public ActionResult Jugador_vs_Jugador() {
            return View();
        }
    }
}