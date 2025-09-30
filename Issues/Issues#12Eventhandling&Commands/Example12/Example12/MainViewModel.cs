
using System.Windows;
using System.Windows.Input;

namespace Example12
{
    public class MainViewModel
    {
        public ICommand ShowMessageCommand { get; }

        public MainViewModel()
        {
            ShowMessageCommand = new RelayCommand(() =>
            {
                MessageBox.Show("ICOMMAND", "Icommand", MessageBoxButton.OK,MessageBoxImage.Warning);
            });
        }
    }
}
