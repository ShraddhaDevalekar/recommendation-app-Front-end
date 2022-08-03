import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../models/Book";
import Author from "../models/Author";
import { fetchAuthorById } from "../redux/AuthorSlice";
import { getAuthorByIdService, getAuthorByNameService, getAllAuthorsService, addAuthorService } from "../services/AuthorService";
import {getAllBooksService} from "../services/BookService";



const AuthorData = () => {

    const [id, setId] = useState('');
    const [author, setAuthor] = useState(new Author());
    const [authorToBeAdded, setAuthorToBeAdded] = useState(new Author());
    const [book, setBook] = useState(new Book());
    const [allAuthors, setAllAuthors] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    
    // fetch data from store 
    const authorDataFromStore = useSelector((store) => { return store.author.authorObj; });
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
        setId(evt.target.value);
    }

    const handleAddAuthor = (a) => {
        console.log(a.target.name);
        console.log(a.target.value);
        setAuthorToBeAdded({
            ...authorToBeAdded,
            [a.target.name]: a.target.value
        });

        setBook({
            ...book,
            [a.target.name]: a.target.value
        });
    }
   
    const submitGetAuthorById = (evt) => {
        console.log(id);
        evt.preventDefault();
        getAuthorByIdService(id)
            .then((response) => {
                console.log(response.data);
                setAuthor(response.data);
                dispatch(fetchAuthorById(response.data)); // step 2 
                setId('');
            })
            .catch((error) => {
                alert(error);
                setAuthor(new Author());
                setId('');
            })
    }
   
    const submitGetAllAuthors = (evt) => {
        evt.preventDefault();
        getAllAuthorsService()
            .then((response) => {
                setAllAuthors(response.data);
                console.log(response.data);
                console.log(allAuthors);
            })
            .catch((error) => {
                alert(error);
                setAllAuthors([]);
            });
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
   
    const submitAddAuthor = (evt) => {
        evt.preventDefault();
        let authorTemp = { ...authorToBeAdded, book };
        addAuthorService(authorTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Author with author name ${response.data.authorName} with authorId ${response.data.authorId} added successfully.`);
            })
            .catch(() => {
                setAuthorToBeAdded(new Author());
                authorTemp = '';
                alert("Author could not be added.");
            });
    }
   
    return (
        <div className="container">
            <p className="display-4 text-primary py-3">AuthorData</p>
            <hr />
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
                <p className="lead">Add New Author</p>
                <div className="form form-group" >
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        className="form-control mb-3 mt-3"
                        value={authorToBeAdded.authorName}
                        onChange={handleAddAuthor}
                        placeholder="Enter Author Name" />
                                   
                     <input
                        type="submit"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Add Author"
                        onClick={submitAddAuthor}
                    />
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p className="lead">Find an Author</p>
                <div>
                    <form className="form form-group">
                        <input
                            type="number"
                            className="form-control mb-3 mt-3"
                            id="authorId"
                            value={id}
                            placeholder="Enter Author id"
                            onChange={handleChange}
                            autoFocus />
                        <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Author" onClick={submitGetAuthorById} />
                    </form>
                </div>
                <div> {(author.authorId) &&
                    <div>
                        <p className="lead text-primary">Author Details from State Object</p>
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
                        <td>{b.category.category}</td>
                        <td>{b.rating}</td>
                        </tr>
                        </tbody>
                         ))}
                       </table> 
                    </div>
                }
                </div>
                <div> {(authorDataFromStore.authorId) &&
                    <div>
                        <p className="lead text-primary">Author Details from Store</p>
                        <p>Author Id: {authorDataFromStore.authorId} </p>
                        <p>Author Name: {authorDataFromStore.authorName} </p>
                      
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.bookId)}</p>
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.bookName)}</p>
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.price)}</p>
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.categoryId)}</p>
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.category)}</p>
                       <p>{(authorDataFromStore.books && authorDataFromStore.books.rating)}</p>
                        
                    </div>
                }
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
                <p className="lead">Get Book By Authors</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Authors"
                        onClick={submitGetAllBooks}
                    />
                </div>
                <div>
                    <div> {(allBooks) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Athors</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Author Name</th>
                                            <th>Book Name</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <th>Category</th>
                                        </tr>
                                    </thead>
                                    { allBooks.map((b =>
                                        <tbody>
                                            <tr>
                                            <td>{(b.author && b.author.authorName)}</td>
                                                <td>{b.bookName}</td>
                                                <td>{b.price}</td>
                                                <td>{b.rating}</td>                                                
                                                <td>{(b.category && b.category.category)}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            }
                        </div>
                    }
                    </div>
                </div>
                </div>
        </div >
    );
}

export default AuthorData;