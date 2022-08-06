import { useState, useEffect } from "react";
import { getAllAuthorsService } from "../services/AuthorService";

const ViewAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(
        () => {

        }
        , []);

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

    return (
        <div style={{backgroundColor:"lightblue",backgroundRepeat:"no-repeat", backgroundSize:"contain"
    }}>
        <div className="container">
            <p className="display-4 text-primary py-3">View All Authors</p>
            <hr />
           </div>
            <div className="bg-alert alert-warning shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p className="lead">Get All Authors</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Authors"
                        onMouseDown={submitGetAllAuthors}
                    />
                </div>
                <div>
                    <div> {(allAuthors) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Athors</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Author Name</th>
                                        </tr>
                                    </thead>
                                    {allAuthors.map((a =>
                                        <tbody>
                                            <tr>
                                                <td>{a.authorName}</td>
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

    )
}

export default ViewAuthors;



// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Book from "../models/Book";
// import Author from "../models/Author";
// import { fetchAuthorByName } from "../redux/AuthorSlice";
// import { getAuthorByIdService, getAuthorByNameService, getAllAuthorsService, addAuthorService } from "../services/AuthorService";
// import {getAllBooksService} from "../services/BookService";


// const ViewAuthors = () => {

 
//     const [allAuthors, setAllAuthors] = useState([]);
//     const [allBooks, setAllBooks] = useState([]);


// const authorDataFromStore = useSelector((store) => { return store.author.authorObj; });
// const dispatch = useDispatch();
// useEffect(
//     () => {

//     }
//     , []);

 
// const submitGetAllAuthors = (evt) => {
//         evt.preventDefault();
//         getAllAuthorsService()
//             .then((response) => {
//                 setAllAuthors(response.data);
//                 console.log(response.data);
//                 console.log(allAuthors);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAllAuthors([]);
//             });
//     }
    
//     const submitGetAllBooks= (evt) => {
//         evt.preventDefault();
//         getAllBooksService()
//             .then((response) => {
//                 setAllBooks(response.data);
//                 console.log(response.data);
//                 console.log(allBooks);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAllBooks([]);
//             });
//     }
   
//     return(
//         <div className="container">
//         <p className="display-4 text-primary py-3">View All Authors</p>
//         <hr />

//         <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
//                 <p className="lead">Get All Authors</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-outline-primary form-control mb-3 mt-3"
//                         value="Get All Authors"
//                         onClick={submitGetAllAuthors}
//                     />
//                 </div>
//                 <div>
//                     <div> {(allAuthors) &&
//                         <div>
//                             <p className="text-primary text-center font-weight-bold lead">List of All Athors</p>
//                             {
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Author Id</th>
//                                             <th>Author Name</th>
//                                         </tr>
//                                     </thead>
//                                     {allAuthors.map((a =>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{a.authorId}</td>
//                                                 <td>{a.authorName}</td>
                                              
//                                                 <td>{(a.book && a.book.bookId)}</td>
//                                                 <td>{(a.book && a.book.bookName)}</td>
//                                                 <td>{(a.book && a.book.price)}</td>
//                                                 <td>{(a.book && a.book.rating)}</td>
//                                                 <td>{(a.book && a.book.authorId)}</td>
//                                                 <td>{(a.book && a.book.categoryId)}</td>
//                                             </tr>
//                                         </tbody>
//                                     ))}
//                                 </table>
//                             }
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div >
        
//     )
// }

// export default ViewAuthors;