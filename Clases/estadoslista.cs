using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace otello.Clases
{
    public class estadoslista
    {
        private string connectionstring = ConfigurationManager.ConnectionStrings["db"].ConnectionString;
        public List<Conexion> getdata() {
            List<Conexion> li = new List<Conexion>();
            try {
                SqlConnection con = new SqlConnection("Data Source = localhost\\SQLEXPRESS; Initial Catalog = othello; Integrated Security = True");
                SqlCommand cmd = new SqlCommand("estado", con);
                con.Open();

            }
            catch (Exception) { 
            
            }
            return li;
        }
    }
}