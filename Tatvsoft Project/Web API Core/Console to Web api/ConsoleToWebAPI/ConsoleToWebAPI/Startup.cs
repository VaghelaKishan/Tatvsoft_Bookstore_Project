using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

namespace ConsoleToWebAPI
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddTransient<CustomMiddleware>();

        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("hello from use-1 1 \n ");
                await next();

                await context.Response.WriteAsync("hello from use-1 \n ");
            });

            app.UseMiddleware<CustomMiddleware>();

            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("hello from use-2 \n ");
                await next();

                await context.Response.WriteAsync("hello from use-2 \n ");
            });
            app.Run(async context =>
            {
                await context.Response.WriteAsync("hello from run..");
            });

            
            if (env.IsDevelopment())
            //app.UseEndpoints(endpoints =>
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); ;
            });

            /*{
                // ContextBoundObject.Response.BodyWriter()
                await context.Response.WriteAsync("Hello from new Web API app");
            });
            endpoints.MapGet("/test", async Context =>
            {
                // ContextBoundObject.Response.BodyWriter()
                await context.Response.WriteAsync("Hello from new Web API app test");
            }); */
        }
    }
}
