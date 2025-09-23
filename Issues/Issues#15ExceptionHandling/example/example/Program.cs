

using System.Reflection.Metadata.Ecma335;

using System;

class Example
{
    static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Ingrese el primer número.");
            int respuestaA = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Ingrese el segundo número");
            int respuestaB = Convert.ToInt32(Console.ReadLine());


            Division division = new Division(respuestaA, respuestaB);
            double resultado = division.Calcular();

            Console.WriteLine("El resultado es: " + resultado);
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("No puedes dividir con 0");
        }
    }
}

class Division
{
    private int _a;
    private int _b;

    public Division(int a, int b)
    {
        _a = a;
        _b = b;
    }

    public double Calcular()
    {
        return _a/_b;
    }
}





