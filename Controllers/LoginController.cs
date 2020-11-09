using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Data.Sql;
using System.ComponentModel.DataAnnotations.Schema;
using otello.Models;

namespace otello.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Log_Registrar()
        {
            return View();
        }
        public ActionResult Log_Ingresar()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Ingreso(otello.Models.usuario userModel) 
        {
            using (othelloEntities4 db = new othelloEntities4())
            {
                var userdet = db.usuarios.Where(x => x.usuario1 == userModel.usuario1 && x.pass == userModel.pass).FirstOrDefault();
                if (userdet == null)
                {
                    userModel.Error = "Error con usuario o password";
                    return View("Log_Ingresar", userModel);
                }
                else 
                {
                    Session["usuario1"] = userdet.usuario1;
                    return RedirectToAction("Menu_usuario", "Usuario");
                }
            }
            
            return View();
        }
        public ActionResult Log_admin() {
            return View();
        }
        [HttpPost]
        public ActionResult Ingreso1(otello.Models.administrador userModel)
        {
            using (othelloEntities1 db = new othelloEntities1())
            {
                var userdet = db.administradors.Where(x => x.id_admin == userModel.id_admin && x.pass == userModel.pass).FirstOrDefault();
                if (userdet == null)
                {
                    userModel.Error = "Error con usuario o password";
                    return View("Log_Ingresar", userModel);
                }
                else
                {
                    Session["id_admin"] = userdet.id_admin;
                    return RedirectToAction("Menu_usuario", "Usuario");
                }
            }

            return View();
        }
    }
}