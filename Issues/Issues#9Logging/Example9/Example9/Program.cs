using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example9
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .WriteTo.File(@"C:\Users\canes\Desktop\Example9\Example9\Log\logs.txt")
                .CreateLogger();

            try
            {
                Log.Debug("Start debug.");
                Log.Information("Start information.");
                Log.Warning("Start warning.");
                Log.Information(Test());
            }
            catch (Exception)
            {

                throw;
            }

            Log.CloseAndFlush();
        }


        public static  string Test()
        {

            return "end of the test." ;
        }
    }
}
