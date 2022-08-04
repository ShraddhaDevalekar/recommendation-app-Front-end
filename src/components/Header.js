import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

import { getAllAuthorsService } from "../services/AuthorService";
import { getAllBooksService } from "../services/BookService";
import { getAllCategoryService } from "../services/CategoryService";

const Header = () => {

    const signInStatus = useSelector((store) => { return store.appUser.isSignedIn; });

    const [allAuthors, setAllAuthors] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [allCategory, setAllCategory] = useState([]);

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
    const submitGetAllCategory= (evt) => {
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
        <div className=' bg-dark'>
            <div className=' container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to='/'>
                        <img height='30px' src='https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png' alt='App Logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className=" navbar-nav ml-auto">
                             <div> {signInStatus &&
                                <div className="nav-item dropdown navbar-dark">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" onClick={submitGetAllAuthors}>
                                        Author
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-divider"></div>
                                        <div>
                                            <div> {(allAuthors) &&
                                                <div>
                                                    {
                                                        <ul className="table">
                                                            {allAuthors.slice(0,7).map((a =>
                                                                <tbody>
                                                                    <tr>
                                                                        <li >{a.authorName}</li>
                                                                    </tr>
                                                                </tbody>
                                                            ))}
                                                 
                                                        </ul>
                                                        
                                                    }
                                                    <ul>
                                                 
                                                     <div><li>{<Link  to="/viewauthors">Author List</Link>} </li> </div>
                                                     <div><li>{<Link  to="/moreauthorsinfo">Author's Book</Link>} </li></div>
                                                                                                  
                                                    </ul>
                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            </div>
                            
                            <div> {signInStatus &&
                                <div className="nav-item dropdown navbar-dark">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" onClick={submitGetAllBooks}>
                                        Books
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-divider"></div>
                                        <div>
                                            <div> {(allBooks) &&
                                                <div>
                                                    {
                                                        <ul className="table">
                                                            {allBooks.slice(0,7).map((b =>
                                                                <tbody>
                                                                    <tr>
                                                                        <li >{b.bookName}</li>
                                                                    </tr>
                                                                </tbody>
                                                            ))}
                                                        </ul>
                                                    }

                                                    <ul>
                                                     <div><li>{<Link  to="/viewbooks">Book List</Link>}</li> </div>
                                                     <div><li> {<Link  to="/morebooksinfo">Book's Author</Link>} </li></div>
                                                     </ul>
                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            </div>
                            <div> {signInStatus &&
                                <div className="nav-item dropdown navbar-dark">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" onClick={submitGetAllCategory}>
                                    Category
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-divider"></div>
                                        <div>
                                            <div> {(allCategory) &&
                                                <div>
                                                    {
                                                        <ul className="table">
                                                            {allCategory.slice(0,7).map((c =>
                                                                <tbody>
                                                                    <tr>
                                                                        <li >{c.categoryName}</li>
                                                                    </tr>
                                                                </tbody>
                                                            ))}
                                                 
                                                        </ul>
                                                        
                                                    }
                                                     <div> {<Link  to="/viewCategory">All Category</Link>} </div>
                                                     <div> {<Link  to="/moreCategorysinfo">More Category</Link>} </div>
                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            </div>
                            <div> {signInStatus && <Link className="nav-link" to='/search'>Search</Link>} </div>
                            <div> {signInStatus && <Link className="nav-link" to='/admin'>Admin</Link>} </div>
                            <div> {!signInStatus && <Link className="nav-link" to='/signup'>SignUp</Link>} </div>
                            <div> {!signInStatus && <Link className="nav-link" to='/signin'>SignIn</Link>} </div>
                            <div> {!signInStatus && <Link className="nav-link" to='/about'>About</Link>} </div>
                            <div> {signInStatus &&
                                <div className="nav-item dropdown navbar-dark">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                        Profile
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/profile">View</Link>
                                        <Link className="dropdown-item" to="/update">Update</Link>
                                        <div className="dropdown-divider"></div>
                                        <button
                                            type="button"
                                            className="dropdown-item"
                                            data-toggle="modal"
                                            data-target="#signOutModal">
                                            SignOut
                                        </button>
                                    </div>
                                </div>
                            }
                            </div>
                           
                        </div>
                    </div>
                </nav>
            </div>
            <SignOut />
        </div >
    );
}

export default Header;

























// header with bootstrap
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div className=' bg-dark'>
//             <div className=' container-fluid'>
//                 <nav className="navbar navbar-expand-lg navbar-dark">
//                     <Link className="navbar-brand" to='/home'>
//                         <img height='50px' src='https://i.pinimg.com/originals/34/e1/56/34e156f3d3c9a9222c9e725b17abbf13.jpg' alt='App Logo' />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className=" navbar-nav ml-auto">
//                             <Link className="nav-link" to='/home'>HOME</Link>
//                             <Link className="nav-link" to='/signin'>SIGN IN</Link>
//                             <Link className="nav-link" to='/signUp'>SIGN UP</Link>
//                             <Link className="nav-link" to='/logOut'>LOGOUT</Link>

//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div >
//     );
// }

// export default Header;





// // // // header without bootstrap

// import { Link } from 'react-router-dom';

// const Header = () => {

//     return (
//         <div>
//             <div>
//                 <Link to="/" >
//                        <img height='30px' src='https://i.pinimg.com/originals/34/e1/56/34e156f3d3c9a9222c9e725b17abbf13.jpg' alt='App Logo' />
//                 </Link>
//                 <Link to="/home" >Home</Link>
//                 <Link to="/bookdata" >Book Data</Link>
//                 <Link to="/signIn" >Sign In</Link>
//                 <Link to="/signUp" >Sign Up</Link>
//                 <Link to="/about" >About</Link>
//             </div>
//         </div >
//     );
// }

// export default Header;