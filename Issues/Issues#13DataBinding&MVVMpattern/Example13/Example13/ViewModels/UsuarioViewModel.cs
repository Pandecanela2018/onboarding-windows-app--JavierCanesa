using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example13.ViewModels
{
    internal class UsuarioViewModel : INotifyPropertyChanged
    {
        private string nombre;
        private int edad;

        public string Nombre
        {
            get => nombre;
            set
            {
                if (nombre != value)
                {
                    nombre = value;
                    OnPropertyChanged(nameof(Nombre));
                }
            }
        }

        public int Edad
        {
            get => edad;
            set
            {
                if (edad != value)
                {
                    edad = value;
                    OnPropertyChanged(nameof(Edad));
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;
        protected void OnPropertyChanged(string propiedad) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propiedad));
    }
}
