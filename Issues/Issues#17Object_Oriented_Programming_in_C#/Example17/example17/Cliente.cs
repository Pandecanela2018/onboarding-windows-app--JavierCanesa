using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prueba
{
    internal class Cliente
    {
        public string nombre;
        public int edad;
        public string gmail;
        public string sexo;


        private Cliente(string nombre, int edad, string gmail, string sexo)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.gmail = gmail;
            this.sexo = sexo;

        }
        private static Cliente _instancia;
        public static Cliente GetInstance(string nombre, int edad, string gmail, string sexo)
        {
            if (_instancia == null)
            {
                _instancia = new Cliente(nombre, edad, gmail, sexo);
            }
            return _instancia;
        }

    }
}
