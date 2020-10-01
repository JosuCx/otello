using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace otello.Controllers
{
    public class PrincipalController : Controller
    {
        // GET: Principal
        public ActionResult Principal()
        {
            return View();
        }
        public ActionResult Ranking()
        {
            return View();
        }
        public ActionResult Reglas()
        {
            return View();
        }
        public ActionResult Partidas()
        {
            return View();
        }
    }
}