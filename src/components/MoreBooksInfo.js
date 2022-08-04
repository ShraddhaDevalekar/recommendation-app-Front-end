import { useState, useEffect } from "react";
import { getAllBooksService } from "../services/BookService";

const MoreBooksInfo = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(
        () => {

        }
        , []);

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
            <div className="bg-alert alert-danger shadow shadow-regular mb-4 mt-4 px-4 py-4 pb-4 pt-4 col-10">
                <p className="lead">Book store is here..</p>
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
                    </div>
                </div>
            </div>
         </div>
    );
}

export default MoreBooksInfo;