using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;


namespace ConsoleToWebAPI
{
    public class CustomMiddleware : IMiddleware
    {
        public Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            await context.Response.WriteAsync("hello from new file 1 \n ");

            await next(context);

            await context.Response.WriteAsync("hello from new file 2 \n ");
        }
    }
}
