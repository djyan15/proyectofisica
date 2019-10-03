using FisicaApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace FisicaApi.Controllers
{
    public class CalculatorFisicaController : ApiController
    {
        double k = 9 * Math.Pow(10, 9);

        [Route("calculator/values")]
        [HttpPost]
        public JsonResult<resultadoCalculadora> CalcularFuerza([FromBody] resultadoCalculadora valores )
        {
           
            resultadoCalculadora resultadu = new resultadoCalculadora();
            double[] result = new double[3];
            double[,] r = new double[valores.coordenadas.Count(), valores.coordenadas.Count()];

            double[,] coordenadaDep = new double[valores.coordenadas.Count(), 3]; // Esta variable almacena las coordenas depuradas 
            List<string> value = new List<string>();
            coordenadaDep = GetCoordenadas(valores.coordenadas, valores.coordenadas.Count());
            r = calculoR(coordenadaDep, valores.j2, valores.q.Count());
            double p1 = k // k es la constante de coulomb que vale 9*10^9
            * (valores.q[valores.j2 - 1] * Math.Pow(10, -6)); // segun la formula k se multiplica por el valor de la carga a la que se le aplicará la fuerza
            double p2, p3;
            for (int var = 0; var < 3; var++) // var solo tomara el valor de x,y,z en el plano es decir solo seran 3 posiciones para encontrar los valores en el plano
            {
                double presult = 0;

                for (int i = 0; i < valores.q.Count(); i++)
                {

                    if (i != (valores.j2 - 1))
                    {
                        p2 = (valores.q[i] * Math.Pow(10, -6)) // luego se multiplicará por el resultado de la division de cada carga que influye con la seleccionada entre 
                                / Math.Pow(r[i, valores.j2 - 1], 3); // la distancia al cubo que hay entre estas que es r
                        p3 = (coordenadaDep[var, valores.j2 - 1] // Luego se multiplica por el valor de la cordenadas de cada uno de los ejes (x,y,z) donde se resta el valor ya sea (x,y,z) de la carga que se le aplicara la fuerza
               - coordenadaDep[var, i]); // y cada una de las cargas que influyen en esta

                        presult = presult + (p2 * p3);

                        //var lol = String.Concat("Fq", j2);
                        //value.Add(lol);
                    }
                }
                result[var] = p1 * presult;

            }


            for (int l = 0; l < 3; l++)
            {
      


                switch (l)
                {
                    case 0:
                        resultadu.factorx = result[l];
                        //Console.WriteLine("{0}X = {1}N", value[l], result[l]);
                        break;
                    case 1:
                        resultadu.factory = result[l];

                        //Console.WriteLine("{0}Y = {1}N", value[l], result[l]);
                        break;
                    case 2:
                        resultadu.factorz = result[l];

                        //Console.WriteLine("{0}Z = {1}N", value[l], result[l]);
                        break;
                }
                resultadu.magnitudFuerza = Math.Sqrt((Math.Pow(resultadu.factorx, 2) + Math.Pow(resultadu.factory, 2) + Math.Pow(resultadu.factorz, 2)));


            }
            return Json(resultadu);


        }
        public double[,] GetCoordenadas(List<string> coordenadas, int count)
        {
            double[,] coordenada = new double[3, count];
            for (int i = 0; i < coordenadas.Count(); i++)
            {

                var coor = coordenadas[i].Split(',');
                for (int j = 0; j < coor.Count(); j++)
                {
                    switch (j)
                    {
                        case 0:
                            coordenada[j, i] = Convert.ToDouble(coor[j]);
                            break;
                        case 1:
                            coordenada[j, i] = Convert.ToDouble(coor[j]);
                            break;
                        case 2:
                            coordenada[j, i] = Convert.ToDouble(coor[j]);
                            break;
                    }
                    //coordenada[i, j] = Convert.ToDouble(coor[j]);
                    //Console.WriteLine(coordenada[i, j]);
                    //Console.WriteLine(Convert.ToDouble(coor[j]));
                }



            }
            return coordenada;
        }
        public double[,] calculoR(double[,] coordenadas, int j2, int count)
        {
            double[,] erres = new double[count, count];
            for (int i = 0; i < count; i++)
            {
                double valores = 0;
                if (i != (j2 - 1))
                {

                    for (int j = 0; j < 3; j++)
                    {

                        valores = valores + (Math.Pow(coordenadas[j, i] - coordenadas[j, j2 - 1], 2));
                    }
                }
                erres[i, j2 - 1] = Math.Sqrt(valores);
            }

            return erres;
        }


    }
}
