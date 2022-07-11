using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstProject.Controllers
{
    [Route("api/Math")]
    [ApiController]
    public class MathController : ControllerBase
    {
        [HttpGet]
        [Route("Add")]
        public ActionResult Add(int a,int b)
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

        [HttpPost]
        [Route("Divide")]
        public ActionResult Divide(InputData input)
        {
            if (input.value2 == 0)
                return BadRequest("value 2 cannot be zero");
            int result = input.value1 / input.value2;
            return Ok(result);
        }

        [HttpPut]
        [Route("Update")]

        public ActionResult Update(InputData input)
        {
            int result= (input.value1 - input.value2);
            return Ok(result);
        }
        }

    public class InputData
    {
        public int value1 { get; set; }
        public int value2 { get; set; }
    }
}
