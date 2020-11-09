using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using otello.Models;
using otello.Clases;
namespace otello.Controllers
{
    public class EstadisticasController : Controller
    {
        // GET: Estadisticas
        public ActionResult index()
        {
            return View();
        }
      
        public ActionResult Perfil()
        {
            mostrar_datos2();
            return View();
            
        }
        public ActionResult mostrar_datos()
        {

            List<usuarioview> lts = null;
            using (othelloEntities4 db = new othelloEntities4()) 
            {
              lts = (from d in db.usuarios select new usuarioview
                   {
                        usu = d.usuario1,
                        nom = d.nombres,
                        ape = d.apellidos,
                        fec = d.fecha,
                        pas = d.pass,
                        pai = d.pais,
                        ema = d.email
                 }).ToList();
            }
            return View(lts);
        }
        public ActionResult mostrar_datos2()
        {
            string vaa = (string)Session["usuario1"];
            List<usuarioview> lts = null;
            using (othelloEntities4 db = new othelloEntities4())
            {
                lts = (from d in db.usuarios where d.usuario1.Equals(vaa)
                       select new usuarioview
                       {
                           usu = d.usuario1,
                           nom = d.nombres,
                           ape = d.apellidos,
                           fec = d.fecha,
                           pas = d.pass,
                           pai = d.pais,
                           ema = d.email
                       }).ToList();
            }
            return View(lts);
        }
    }
}