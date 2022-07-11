export enum RoutePaths {
    Login = "/login",
    Register = "/register",
    User = "/user",
    Edituser = "/edit-user/:id",
    Category = "/category",
    EditCategory = "/edit-category/:id",
    AddCategory = "/add-category",
    Book = "book",
    EditBook = "/edit-book/:id",
    AddBook = "/add-book",
    BookListing = "/book",
    Cart = "/Cart",
    UpdateProfile = "/update-profile", 
    Home = "/",
}

export enum Role {
    Admin = 1,
    Seller = 2,
    Buyer = 3
 }