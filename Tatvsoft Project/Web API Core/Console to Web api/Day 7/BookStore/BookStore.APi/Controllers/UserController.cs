using Microsoft.AspNetCore.Mvc;
using BookStore.Repository;

namespace BookStore.APi.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repository = new UserRepository();

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            return Ok(_repository.GetUsers());
        }
    }
}
