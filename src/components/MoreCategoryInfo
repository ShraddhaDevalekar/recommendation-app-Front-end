import { useState, useEffect } from "react";
import { getAllBooksService } from "../services/BookService";

const MoreCategoryInfo = () => {

    const [allBooks, setAllBooks] = useState([]);

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
            backgroundColor: "lightblue", backgroundRepeat: "no-repeat", backgroundSize: "contain"
        }}>
            <div className="bg-alert alert-success shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
                <p className="lead">Get Book By Category</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Category"
                        onClick={submitGetAllBooks}
                    />
                </div>
                <div>
                    <div> {(allBooks) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Category</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Book Name</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <th>Author Name</th>
                                        </tr>
                                    </thead>
                                    {allBooks.map((b =>
                                        <tbody>
                                            <tr>
                                                <td>{(b.category && b.category.categoryName)}</td>
                                                <td>{b.bookName}</td>
                                                <td>{b.price}</td>
                                                <td>{b.rating}</td>
                                                <td>{(b.author && b.author.authorName)}</td>
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

export default MoreCategoryInfo;