using Example8.ViewModels;

namespace Example.Tests
{
    [TestClass]
    public class sumaModelTests
    {
        [TestMethod]
        public void SumarCommand_ConNumerosValidos_ActualizaResultado()
        {
            var vm = new sumaViewModel
            {
                Numero1 = "10",
                Numero2 = "15"
            };
            vm.SumarCommand.Execute(null);
            Assert.AreEqual(25, vm.Resultado);
        }

        [TestMethod]
        public void SumarCommand_ConEntradaInvalida_ResultadoEsCero()
        {
            var vm = new sumaViewModel
            {
                Numero1 = "abc",
                Numero2 = "5"
            };

            vm.SumarCommand.Execute(null);

            Assert.AreEqual(0, vm.Resultado);
        }
    }
}
