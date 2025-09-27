using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prueba
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Cliente cliente = Cliente.GetInstance("Javier",21,"javier.canesa@gmail.com","M");



            Console.WriteLine("My name is "+ cliente.nombre+" and my  age is "+cliente.edad);
            Console.WriteLine("");
            Console.WriteLine("Whether you want contact with me, I give you my personal email " + cliente.gmail);


            

        }
    }
}
