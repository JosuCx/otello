using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using otello.Models;
using otello.Clases;

namespace otello.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        public ActionResult Menu_usuario()
        {
            return View();
        }
        public ActionResult Editar_perfil()
        {
            return View();
        }
        public ActionResult Notificaciones()
        {
            return View();
        }
        public ActionResult Reglas()
        {
            return View();
        }
       

    }
}