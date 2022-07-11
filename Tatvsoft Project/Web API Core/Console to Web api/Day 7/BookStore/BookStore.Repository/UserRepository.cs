using System;
using System.Collections.Generic;
using BookStore.Models.ViewModels;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class UserRepository
    {
        BookStoreContext _context = new BookStoreContext();

        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }
    }
}
