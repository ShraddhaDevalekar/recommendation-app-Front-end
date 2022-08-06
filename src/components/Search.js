import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../models/Book";
import { fetchBookByName } from "../redux/BookSlice";
import { getBookByNameService } from "../services/BookService";
import Author from "../models/Author";
import { fetchAuthorByName } from "../redux/AuthorSlice";
import { getAuthorByNameService } from "../services/AuthorService";
import Category from "../models/Category";
import { fetchCategoryByName } from "../redux/CategorySlice";
import { getCategoryByNameService } from "../services/CategoryService";

const Search = () => {

    const [author, setAuthor] = useState(new Author());
    const [authorName, setAuthorName] = useState('');

    const [book, setBook] = useState(new Book());
    const [name, setName] = useState('');
    
    const [category, setCategory] = useState(new Category());
    const [categoryName, setCategoryName] = useState(new Category());



    // fetch data from store
    const bookDataFromStore = useSelector((store) => { return store.book.bookObj; });
    const authorDataFromStore = useSelector((store) => { return store.author.authorObj; });
    const categoryDataFromStore = useSelector((store) => { return store.category.categoryObj; });

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

    const handleChange1 = (evt) => {
        console.log(evt.target.authorName);
        console.log(evt.target.value);
        setAuthorName(evt.target.value);
    }

    const handleChange2 = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setCategoryName(evt.target.value);
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

    const submitGetAuthorByName = (evt) => {
        console.log(authorName);
        evt.preventDefault();
        getAuthorByNameService(authorName)
            .then((response) => {
                console.log(response.data);
                setAuthor(response.data);
                dispatch(fetchAuthorByName(response.data)); // step 2 
                setAuthorName('');
            })
            .catch((error) => {
                alert(error);
                setAuthor(new Author());
                setAuthorName('');
            })
    }

    const submitGetCategoryByName = (evt) => {
        console.log(categoryName);
        evt.preventDefault();
        getCategoryByNameService(categoryName)
            .then((response) => {
                console.log(response.data);
                setCategory(response.data);
                dispatch(fetchCategoryByName(response.data)); // step 2 
                setCategoryName('');
            })
            .catch((error) => {
                alert(error);
                setCategory(new Category());
                setCategoryName('');
            })
    }

    return (
        <div style={{
            backgroundColor: "lightblue", backgroundRepeat: "no-repeat", backgroundSize: "contain"
        }}>
            <div className="container">
                <br></br>
                <div class="row justify-content-md-center">
                    <div className="bg-alert alert-danger shadow shadow-regular  col-md-6 ">
                        <p className="lead">Find Your Favourite Book..</p>
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
                                <p>Category Name: {(book.category && book.category.categoryName)}</p>
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
                                <p>{(bookDataFromStore.category && bookDataFromStore.category.categoryName)}</p>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <br /><br />
                <div class="row justify-content-md-center">
                    <div className="bg-alert alert-success shadow shadow-regular col-md-6">
                        <p className="lead">Find Your Favourite Author Here..</p>
                        <div>
                            <form className="form form-group">
                                <input
                                    type="text"
                                    className="form-control mb-3 mt-3"
                                    id="authorName"
                                    value={authorName}
                                    placeholder="Enter Author name"
                                    onChange={handleChange1}
                                    autoFocus />
                                <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Author" onClick={submitGetAuthorByName} />
                            </form>
                        </div>
                        <div> {(author.authorName) &&
                            <div>
                                <p className="lead text-primary">Your author details are here...</p>
                                <p>Author Id: {author.authorId} </p>
                                <p>Author Name: {author.authorName} </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>BookId</th>
                                            <th>BookName</th>
                                            <th>Price</th>
                                            <th>CategoryId</th>
                                            <th>Category</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    {author.books.map((b => <tbody>
                                        <tr>
                                            <td>{b.bookId}</td>
                                            <td>{b.bookName}</td>
                                            <td>{b.price}</td>
                                            <td>{b.category.categoryId}</td>
                                            <td>{b.category.categoryName}</td>
                                            <td>{b.rating}</td>
                                        </tr>
                                    </tbody>
                                    ))}
                                </table>
                            </div>
                        }
                        </div>
                        <div> {(authorDataFromStore.authorName) &&
                            <div>
                                <p className="lead text-primary">Author Details from Store</p>
                                <p>Author Id: {authorDataFromStore.authorId} </p>
                                <p>Author Name: {authorDataFromStore.authorName} </p>

                                <p>{(authorDataFromStore.books && authorDataFromStore.books.bookId)}</p>
                                <p>{(authorDataFromStore.books && authorDataFromStore.books.bookName)}</p>
                                <p>{(authorDataFromStore.books && authorDataFromStore.books.price)}</p>
                                <p>{(authorDataFromStore.books && authorDataFromStore.books.categoryId)}</p>
                                <p>{(authorDataFromStore.books && authorDataFromStore.books.categoryName)}</p>
                                <p>{(authorDataFromStore.books && authorDataFromStore.books.rating)}</p>

                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div >

            <div className="container">
                <br /><br />
                <div class="row justify-content-md-center">
                    <div className="bg-alert alert-success shadow shadow-regular col-md-6">
                        <p className="lead">Find Your Favourite Category Here..</p>
                        <div>
                            <form className="form form-group">
                                <input
                                    type="text"
                                    className="form-control mb-3 mt-3"
                                    id="categoryName"
                                    value={categoryName}
                                    placeholder="Enter Category name"
                                    onChange={handleChange2}
                                    autoFocus />
                                <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Category" onClick={submitGetCategoryByName} />
                            </form>
                        </div>
                        <div> {(category.categoryName) &&
                            <div>
                                <p className="lead text-primary">Your author details are here...</p>
                                <p>Category Id: {category.categoryId} </p>
                                <p>Category Name: {category.categoryName} </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>BookId</th>
                                            <th>BookName</th>
                                            <th>Price</th>
                                            <th>AuthorId</th>
                                            <th>AuthorName</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    {category.books.map((b => <tbody>
                                        <tr>
                                            <td>{b.bookId}</td>
                                            <td>{b.bookName}</td>
                                            <td>{b.price}</td>
                                            <td>{b.author.authorId}</td>
                                            <td>{b.author.authorName}</td>
                                            <td>{b.rating}</td>
                                        </tr>
                                    </tbody>
                                    ))}
                                </table>
                            </div>
                        }
                        </div>
                        <div> {(categoryDataFromStore.categoryName) &&
                            <div>
                                <p className="lead text-primary">Category Details from Store</p>
                                <p>Category Id: {categoryDataFromStore.categoryId} </p>
                                <p>Category Name: {categoryDataFromStore.categoryName} </p>

                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.bookId)}</p>
                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.bookName)}</p>
                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.price)}</p>
                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.authorId)}</p>
                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.authorName)}</p>
                                <p>{(categoryDataFromStore.books && categoryDataFromStore.books.rating)}</p>

                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Search;