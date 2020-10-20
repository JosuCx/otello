using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using otello.Clases;
using otello.Models;

namespace otello.Controllers
{
    public class InversoController : Controller
    {
        // GET: Inverso
        public ActionResult RetoInverso()
        {
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
    }
}