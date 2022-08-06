import { useState, useEffect } from "react";
import Book from "../models/Book";
import Author from "../models/Author";
import Category from "../models/Category";
import { addAuthorService } from "../services/AuthorService";
import { addBookService } from "../services/BookService";
import { addCategoryService } from "../services/CategoryService";

const Admin = () => {

    const [author, setAuthor] = useState(new Author());
    const [authorToBeAdded, setAuthorToBeAdded] = useState(new Author());
    const [book, setBook] = useState(new Book());
    const [bookToBeAdded, setBookToBeAdded] = useState(new Book());
    const [category, setCategory] = useState(new Category());
    const [categoryToBeAdded, setCategoryToBeAdded] = useState(new Category());

    useEffect(
        () => {

        }
        , []);

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

    const handleAddCategory = (c) => {
            console.log(c.target.name);
            console.log(c.target.value);
            setCategoryToBeAdded({
                ...categoryToBeAdded,
                [c.target.name]: c.target.value
            });
    
            setBook({
                ...book,
                [c.target.name]: c.target.value
            });
        }

    const submitAddAuthor = (evt) => {
        evt.preventDefault();
        let authorTemp = { ...authorToBeAdded, author };
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
    
    const submitAddBook = (evt) => {
        evt.preventDefault();
        let bookTemp = { ...bookToBeAdded, author, category };
        addBookService(bookTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Book ${response.data.bookName} added successfully.`);
            })
            .catch(() => {
                setBookToBeAdded(new Book());
                bookTemp = '';
                alert("Book could not be added.");
            });
    }

        const submitAddCategory = (evt) => {
        evt.preventDefault();
        let categoryTemp = { ...categoryToBeAdded, book };
        addCategoryService(categoryTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Category with categoryname ${response.data.categoryName} with categoryId ${response.data.categoryId} added successfully.`);
            })
            .catch(() => {
                setCategoryToBeAdded(new Category());
                categoryTemp = '';
                alert("Category could not be added.");
            });
    }

    return (
        <div style={{backgroundColor:"lightblue",backgroundRepeat:"no-repeat", backgroundSize:"contain"
    }}>
        <div className="container">
            <p style={{ textAlign:'center'}} className="display-4 text-primary py-3">Add Book</p>
            <hr />
            <div class="row justify-content-md-center">
            <div className="bg-alert alert-danger shadow shadow-regular  col-md-6 ">               
             <p className="lead">Add New Book</p>
                <div className="form form-group" >
               
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        className="form-control mb-3 mt-3"
                        value={bookToBeAdded.bookName}
                        onChange={handleAddBook}
                        placeholder="Enter Book Name" />

                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="form-control mb-3 mt-3"
                        value={bookToBeAdded.price}
                        onChange={handleAddBook}
                        placeholder="Enter Book Price" />
                  
                    <input
                        type="number"
                        id="authorId"
                        name="authorId"
                        className="form-control mb-3 mt-3"
                        value={author.authorId}
                        onChange={handleAddBook}
                        placeholder="Enter Author Id" />

                   <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        className="form-control mb-3 mt-3"
                        value={author.authorName}
                        onChange={handleAddBook}
                        placeholder="Enter Author Name" />

                    <input
                        type="number"
                        id="categoryId"
                        name="categoryId"
                        className="form-control mb-3 mt-3"
                        value={category.categoryId}
                        onChange={handleAddBook}
                        placeholder="Enter Category Id" />

                  <input
                        type="text"
                        id="category"
                        name="category"
                        className="form-control mb-3 mt-3"
                        value={category.category}
                        onChange={handleAddBook}
                        placeholder="Enter Category" />

                 <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="form-control mb-3 mt-3"
                        value={bookToBeAdded.rating}
                        onChange={handleAddBook}
                        placeholder="Enter Book Rating" />
                    
                    <input
                        type="submit"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Add Book"
                        onClick={submitAddBook}
                    />
                </div>
            </div>
           </div>
            <div className="container">
            <p style={{ textAlign:'center'}} className="display-4 text-primary py-3">Add Author</p>
            <hr />
            <div class="row justify-content-md-center">
            <div className="bg-alert alert-success shadow shadow-regular  col-md-6 ">                
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
        </div>
        </div>
        <div className="container">
            <p style={{ textAlign:'center'}} className="display-4 text-primary py-3">Add Category</p>
            <hr />
            <div class="row justify-content-md-center">
            <div className="bg-alert alert-success shadow shadow-regular  col-md-6 ">                
            <p className="lead">Add New Category</p>
                <div className="form form-group" >
                    
                      <input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="form-control mb-3 mt-3"
                        value={categoryToBeAdded.categoryName}
                        onChange={handleAddCategory}
                        placeholder="Enter Category Name" />
                                   
                     <input
                        type="submit"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Add Category"
                        onClick={submitAddCategory}
                    />
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Admin;