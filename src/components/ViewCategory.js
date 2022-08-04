import { useState, useEffect } from "react";
import { getAllCategoryService } from "../services/CategoryService";

const ViewCategory = () => {

    const [allCategory, setAllCategory] = useState([]);

    useEffect(
        () => {

        }
        , []);

    const submitGetAllCategory = (evt) => {
        evt.preventDefault();
        getAllCategoryService()
            .then((response) => {
                setAllCategory(response.data);
                console.log(response.data);
                console.log(allCategory);
            })
            .catch((error) => {
                alert(error);
                setAllCategory([]);
            });
    }

    return (
        <div style={{backgroundColor:"lightblue",backgroundRepeat:"no-repeat", backgroundSize:"contain"
    }}>
        <div className="container">
            <p className="display-4 text-primary py-3">View All Category</p>
            <hr />
           </div>
            <div className="bg-alert alert-warning shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p className="lead">Get All Category</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Category"
                        onClick={submitGetAllCategory}
                    />
                </div>
                <div>
                    <div> {(allCategory) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Category</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Category Name</th>
                                        </tr>
                                    </thead>
                                    {allCategory.map((a =>
                                        <tbody>
                                            <tr>
                                                <td>{a.categoryName}</td>
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

export default ViewCategory;



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