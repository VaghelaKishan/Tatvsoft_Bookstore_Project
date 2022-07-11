using Microsoft.AspNetCore.Mvc;
using DemoApi.Models;

namespace DemoApi.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private static readonly List<User> users = new List<User>()
        {
            new User()
            {
                Id=1,
                FirstName="kishan",
                LastName="vaghela",
                Email="kishanvaghela59@gmail.com"
            }
        };

        [HttpGet]
        [Route("GetUsers")]
        public List<User> GetUsers()
        {
            return users;
        }

        [HttpPost]
        [Route("CreateUsers")]
        public User CreateUsers(User user)
        {
            user.Id = users.Count + 1;
            users.Add(user);
            return user;
        }
    }
}
