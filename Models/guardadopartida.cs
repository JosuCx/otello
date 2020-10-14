using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
namespace otello.Models
{
    public class guardadopartida
    {
        SqlConnection con; //conexion
        public bool Conectar()
        {
            try
            {
                con = new SqlConnection("Data Source=localhost\\SQLEXPRESS;Initial Catalog=diproma; Integrated Security=True");//base de datos a sql
                con.Open();//apertura de la base
                return true;
            }
            catch
            {
                return false;
            }
        }
        public void Desconectar()
        {
            con.Close();
        }
        public DataSet Dset(string sentencia)
        {
            DataSet ds = new DataSet();
            if (Conectar())
            {
                try
                {
                    SqlDataAdapter sda = new SqlDataAdapter(sentencia, con);
                    sda.Fill(ds, "datos");
                }
                catch (SqlException a)
                {
                    int error = Convert.ToInt32(a);
                }
            }
            return ds;
        }
        public int Operacion(string sentencia)
        {
            int res = 1;
            if (Conectar())
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(sentencia, con);
                    cmd.ExecuteNonQuery();
                    res = 0;
                }
                catch (SqlException e)
                {
                    int error = Convert.ToInt32(e);
                }
            }
            return res;
        }
        public DataTable busqueda(string sentencia)
        {
            DataTable dt = new DataTable();
            if (Conectar())
            {
                try
                {
                    SqlDataAdapter sda = new SqlDataAdapter(sentencia, con);
                    //fila de la tabla
                    sda.Fill(dt);

                }
                catch (SqlException a)
                {
                    int error = Convert.ToInt32(a);
                }
            }
            return dt;
        }
    }
}