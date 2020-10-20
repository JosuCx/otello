using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
namespace otello.Clases
{
    public class funciones_inversas
    {
        [Required]
        public string[] colore { get; set; } = new[] { "Rojo", "Amarillo", "Azul", "Anaranjado", "Verde", "Violeta", "Blanco", "Negro", "Celeste", "Gris" };

        public string[] colores = new[] { "Rojo", "Amarillo", "Azul", "Anaranjado", "Verde", "Violeta", "Blanco", "Negro", "Celeste", "Gris" };

       
    }
    
}