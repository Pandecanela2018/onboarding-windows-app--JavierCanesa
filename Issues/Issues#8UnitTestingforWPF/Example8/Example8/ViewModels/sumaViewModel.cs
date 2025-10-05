using Example8.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Example8.ViewModels
{

    public class sumaViewModel : INotifyPropertyChanged
    {
        private string _numero1;
        private string _numero2;
        private double _resultado;

        public string Numero1
        {
            get => _numero1;
            set { _numero1 = value; OnPropertyChanged(nameof(Numero1)); }
        }

        public string Numero2
        {
            get => _numero2;
            set { _numero2 = value; OnPropertyChanged(nameof(Numero2)); }
        }

        public double Resultado
        {
            get => _resultado;
            set { _resultado = value; OnPropertyChanged(nameof(Resultado)); }
        }

        public ICommand SumarCommand { get; }

        private readonly sumaModel _modelo;

        public sumaViewModel()
        {
            _modelo = new sumaModel();
            SumarCommand = new RelayCommand(Sumar);
        }

        private void Sumar()
        {
            if (double.TryParse(Numero1, out double a) && double.TryParse(Numero2, out double b))
                Resultado = _modelo.Sumar(a, b);
            else
                Resultado = 0;
        }

        public event PropertyChangedEventHandler PropertyChanged;
        protected void OnPropertyChanged(string nombre) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nombre));
    }
}
