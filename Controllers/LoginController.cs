using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace otello.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Log_Registrar()
        {
            return View();
        }
        public ActionResult Log_Ingresar(string usuario, string password)
        {
            return View();
        }
    }
}