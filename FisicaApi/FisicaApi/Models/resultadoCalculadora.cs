using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FisicaApi.Models
{
    public class resultadoCalculadora
    {

        public List<double> q { get; set; }
        //public List<double> r { get; set; }
        public int j2 { get; set; }
        public List<string> coordenadas { get; set; }
        public double factorx { get; set; }
        public double factory { get; set; }
        public double factorz { get; set; }
        public double magnitudFuerza { get; set; }


    }
}