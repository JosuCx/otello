﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace otello.Controllers
{
    public class TorneoController : Controller
    {
        // GET: Torneo
        public ActionResult Index()
        {
            return View();
        }
    }
}