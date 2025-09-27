using System;
using System.Collections.Generic;
using System.IO.Pipes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example18
{
    internal class Program
    {
        static void Main(string[] args)
        {


            int age = 20;
            string nameofstudent = "javier";
            double[] gradeofstudent = { 5.6, 5.9, 10 };
            double result = Math.Round(gradeofstudent.Sum() / 3);
            
            if (result <7)
            {
                Console.WriteLine("You passed");
            }
            else
            {
                Console.WriteLine("Congrats "+ nameofstudent);
            }

                Console.WriteLine(result);


        }
    }
}
