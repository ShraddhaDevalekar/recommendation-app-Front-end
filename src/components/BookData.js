import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../models/Book";
import Author from "../models/Author";
import Category from "../models/Category";
import { fetchBookByName } from "../redux/BookSlice";
import { getBookByNameService, getAllBooksService, addBookService } from "../services/BookService";

const BookData = () => {

    const [name, setName] = useState('');
    const [book, setBook] = useState(new Book());
    const [bookToBeAdded, setBookToBeAdded] = useState(new Book());
    const [author, setAuthor] = useState(new Author());
    const [category, setCategory] = useState(new Category());
    const [allBooks, setAllBooks] = useState([]);

    // fetch data from store
    const bookDataFromStore = useSelector((store) => { return store.book.bookObj; });

    // send data to store - steps - 1, 2
    // step 1
    const dispatch = useDispatch();

    useEffect(
        () => {

        }
        , []);

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setName(evt.target.value);
    }

    const handleAddBook = (b) => {
        console.log(b.target.name);
        console.log(b.target.value);
        setBookToBeAdded({
            ...bookToBeAdded,
            [b.target.name]: b.target.value
        });

        setAuthor({
            ...author,
            [b.target.name]: b.target.value
        });
    
     
       setCategory({
        ...category,
        [b.target.name]: b.target.value
    });
}
    const submitGetBookByName = (evt) => {
        console.log(name);
        evt.preventDefault();
        getBookByNameService(name)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
                dispatch(fetchBookByName(response.data)); // step 2
                setName('');
            })
            .catch((error) => {
                alert(error);
                setBook(new Book());
                setName('');
            })
    }
  
    const submitGetAllBooks= (evt) => {
        evt.preventDefault();
        getAllBooksService()
            .then((response) => {
                setAllBooks(response.data);
                console.log(response.data);
                console.log(allBooks);
            })
            .catch((error) => {
                alert(error);
                setAllBooks([]);
            });
    }

  

    return (
        <div style={{backgroundColor:"lightblue",backgroundRepeat:"no-repeat", backgroundSize:"contain"
    }}>
        <div className="container">
            <p className="display-4 text-primary py-3">BookData</p>
           
            <div className="bg-alert alert-danger shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
                <p className="lead">Find your favourite book</p>
                <div>
                    <form className="form form-group">
                        <input
                            type="text"
                            className="form-control mb-3 mt-3"
                            id="bookName"
                            value={name}
                            placeholder="Enter Book Name"
                            onChange={handleChange}
                            autoFocus />
                        <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Book" onClick={submitGetBookByName} />
                    </form>
                </div>

                <div> {(book.bookName) &&
                    <div>
                        <p className="lead text-primary">Your book details are here...</p>
                      
                        <p>Book Name: {book.bookName} </p>
                        <p>Price: {book.price}  </p>
                        <p>Rating: {book.rating}  </p>
                        <p>Author Id: {(book.author && book.author.authorId)}</p>
                        <p>Author Name: {(book.author && book.author.authorName)}</p>
                        <p>Category Id: {(book.category && book.category.categoryId)}</p>
                        <p>Category Name: {(book.category && book.category.category)}</p>
                    </div>
                }
                </div>
                <div> {(bookDataFromStore.bookName) &&
                    <div>
                        <p className="lead text-primary">Book Details from Store</p>
                        <p>Book Id: {bookDataFromStore.bookId} </p>
                        <p>Book Name: {bookDataFromStore.bookName} </p>
                        <p>Price: {bookDataFromStore.price} </p>
                        <p>Rating: {bookDataFromStore.rating} </p>
                        <p>{(bookDataFromStore.author && bookDataFromStore.author.authorId)}</p>
                        <p>{(bookDataFromStore.author && bookDataFromStore.author.authorName)}</p>
                        <p>{(bookDataFromStore.category && bookDataFromStore.category.categoryId)}</p>
                        <p>{(bookDataFromStore.category && bookDataFromStore.category.category)}</p>
                    </div>
                }
                </div>
            </div>
          
            {/* <div className="bg-alert alert-warning shadow shadow-regular mb-4 mt-4 px-4 py-4 pb-4 pt-4 col-10">
                <p className="lead">Book store is here..</p> */}
                {/* <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Books"
                        onClick={submitGetAllBooks}
                    />
                </div> */}
                <div>
                    {/* <div> {(allBooks) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Books</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Book Name</th>
                                            <th>Author Name</th>
                                            <th>Category </th>
                                            <th>Rating</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    {allBooks.map((b =>
                                        <tbody>
                                            <tr>
                                                <td>{b.bookName}</td>
                                                <td>{(b.author && b.author.authorName)}</td>
                                                <td>{(b.category && b.category.category)}</td>
                                                <td>{b.rating}</td>
                                                <td>{b.price}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            }
                        </div>
                    }
                    </div> */}
                </div>
           
        </div >
        </div>
    );
}

export default BookData;
