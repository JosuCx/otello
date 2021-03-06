﻿using System.Web;
using System.Web.Optimization;

namespace otello
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/bootstrapmin.js")
                      );

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/bootstrap-theme.css.map",
                      "~/Content/bootstrap-theme.min.css",
                      "~/Content/bootstrap-theme.min.css.map",
                      "~/Content/bootstrap.css.map",
                      "~/Content/bootstrap.min.css",
                      "~/Content/bootstrap.min.css,map",
                      "~/Content/estiloprin.css",
                      "~/Content/Site.css"));
           
            bundles.Add(new StyleBundle("~/Content/slate").Include(
                "~/Content/bootstrap-slate.css",
                "~/Content/estiloprin.css",
                "~/Content/bootstrap-slate.min.css",
                "~/Content/site.css"
                ));
            bundles.Add(new StyleBundle("~/Icons/icon").Include(
                "~/Icons/font-awesome.css",
                "~/Icons/font-awesome.min.css"
                ));
            bundles.Add(new StyleBundle("~/Content/slate1").Include(
                "~/Content/bootstrap-slate.css",
                "~/Content/bootstrap-slate.min.css"
                ));
            bundles.Add(new StyleBundle("~/Content/usuario").Include(
                "~/Content/estilousuario.css"
                ));
            bundles.Add(new StyleBundle("~/Content/juegoi").Include(
               "~/Content/estilo_juego.css"
               ));
        }
    }
}
