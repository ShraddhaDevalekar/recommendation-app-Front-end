import Author from "./Author";
import Category from "./Category";
class Book {

    bookId;
    bookName;
    price;
    rating;
    authorId;
    categoryId;
    author= new Author();
    category= new Category();
}

export default Book;