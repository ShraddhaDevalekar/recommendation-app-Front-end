// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Author from "../models/Author";
// import { fetchAuthorByName } from "../redux/AuthorSlice";
// import { getAuthorByNameService} from "../services/AuthorService";



// const AuthorData = () => {

//     const [name ,setName] = useState('');
//     const [author, setAuthor] = useState(new Author());
    
//     // fetch data from store 
//     const authorDataFromStore = useSelector((store) => { return store.author.authorObj; });
//     // send data to store - steps - 1, 2
//     // step 1
//     const dispatch = useDispatch();

//     useEffect(
//         () => {

//         }
//         , []);

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setName(evt.target.value);
//     }

   
//     const submitGetAuthorByName = (evt) => {
//         console.log(name);
//         evt.preventDefault();
//         getAuthorByNameService(name)
//             .then((response) => {
//                 console.log(response.data);
//                 setAuthor(response.data);
//                 dispatch(fetchAuthorByName(response.data)); // step 2 
//                 setName('');
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAuthor(new Author());
//                 setName('');
//             })
//     }
   
   
   
  
   
//     return (
//         <div style={{backgroundColor:"lightblue",backgroundRepeat:"no-repeat", backgroundSize:"contain"
//     }}>
//         <div className="container">
//             <p className="display-4 text-primary py-3">AuthorData</p>
//             <hr />
           
//             <div className="bg-alert alert-success shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
//                 <p className="lead">Find an Author</p>
//                 <div>
//                     <form className="form form-group">
//                         <input
//                             type="text"
//                             className="form-control mb-3 mt-3"
//                             id="authorName"
//                             value={name}
//                             placeholder="Enter Author name"
//                             onChange={handleChange}
//                             autoFocus />
//                         <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Author" onClick={submitGetAuthorByName} />
//                     </form>
//                 </div>
//                 <div> {(author.authorName) &&
//                     <div>
//                         <p className="lead text-primary">Author Details from State Object</p>
//                         <p>Author Id: {author.authorId} </p>
//                         <p>Author Name: {author.authorName} </p>
//                         <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>BookId</th>
//                                             <th>BookName</th>
//                                             <th>Price</th>
//                                             <th>CategoryId</th>
//                                             <th>Category</th>
//                                             <th>Rating</th>
//                                         </tr>
//                                     </thead>
//                         {author.books.map((b => <tbody>
//                         <tr>
//                         <td>{b.bookId}</td>
//                         <td>{b.bookName}</td>
//                         <td>{b.price}</td>
//                         <td>{b.category.categoryId}</td>
//                         <td>{b.category.category}</td>
//                         <td>{b.rating}</td>
//                         </tr>
//                         </tbody>
//                          ))}
//                        </table> 
//                     </div>
//                 }
//                 </div>
//                 <div> {(authorDataFromStore.authorName) &&
//                     <div>
//                         <p className="lead text-primary">Author Details from Store</p>
//                         <p>Author Id: {authorDataFromStore.authorId} </p>
//                         <p>Author Name: {authorDataFromStore.authorName} </p>
                      
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.bookId)}</p>
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.bookName)}</p>
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.price)}</p>
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.categoryId)}</p>
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.category)}</p>
//                        <p>{(authorDataFromStore.books && authorDataFromStore.books.rating)}</p>
                        
//                     </div>
//                 }
//                 </div>
//             </div>
           
//         </div >
//         </div>
//     );
// }

// export default AuthorData;