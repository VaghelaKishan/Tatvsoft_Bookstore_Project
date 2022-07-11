using BookStore.Models.DataModels;
using System.Collections.Generic;

namespace BookStore.Models.Models
{
    public class CartModel
    {
        public CartModel() { }

        public CartModel(Cart cart)
        {
            //book = new Book();
            Id = cart.Id;
            UserId = cart.Userid;
            BookId = cart.Bookid;
            Quantity = cart.Quantity;
            //BookName = cart.Book.Name;
            //Price = cart.Book.Price;
            //book.Price = cart.Book.Price;
            book = cart.Book;
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        public Book book { get; set; }
        public string BookName { get; set; }
        public decimal Price { get; set; }
    }
}