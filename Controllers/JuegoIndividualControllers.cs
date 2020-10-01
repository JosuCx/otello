using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace otello.Controllers
{
    public class JuegoIndividualControllers : Controller
    {
        public ActionResult Maquina()
        {
            return View();
        }
        public ActionResult Jugador()
        {
            return View();
        }

    }
}