import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookByNameService, getAllBooksService, addBookService } from "../services/BookService";

const ViewBooks = () => {

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

    const submitGetAllBooks = (evt) => {
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
        <div style={{
            backgroundColor: "lightblue", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'right'
        }}>
            <div className="bg-alert alert-danger shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p className="lead">Get All Books</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Books"
                        onClick={submitGetAllBooks}
                    />
                </div>
                <div>
                    <div> {(allBooks) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Books</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>

                                            <th>Books Name</th>
                                        </tr>
                                    </thead>
                                    {allBooks.map((b =>
                                        <tbody>
                                            <tr>
                                                <td>{b.bookName}</td>
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
        </div>
    );
}

export default ViewBooks;