using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;





namespace ConsoleToWebAPI.Controllers
{
    [Route("api/MATH")]
    [ApiController]
    public class MATHcontroller : ControllerBase
    {
        [HttpGet]
        [Route("Add")]

        public ActionResult Add(int a, int b)
        {
            int result = a + b;
            return Ok(result);
        }

        [HttpPost]
        [Route("Multiply")]

        public ActionResult Multiply(InputData input)
        {
            int result = input.value1 * input.value2;
            return Ok(result);
        }
    }

        public class InputData
        {
            public int value1 { get; set; }
            public int value2 { get; set; }
        }
}
