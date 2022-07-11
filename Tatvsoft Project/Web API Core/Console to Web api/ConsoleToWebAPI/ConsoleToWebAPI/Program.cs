// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, kishan vaghela!");

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;

namespace ConsoleToWebAPI
{
    class Program
    {
        public static void Main(string[] args)
        {

        }

        public static IHostBuilder CreateMostBuilder(string[] args) =>

                 Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webhost =>
                {
                    webhost.UseStartup<Startup>();
                });
    }
    
}
