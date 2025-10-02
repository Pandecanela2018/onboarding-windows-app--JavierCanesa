using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Example10
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                int value = int.Parse(NumberInput.Text);
                int doubled = value * 2;
                ResultText.Text = $"Result: {doubled}";
            }
            catch (Exception exception)
            {

                ResultText.Text = $"Algo salio mal. Detalle:  {exception.Message} ";
            }


            


        }
    }
}