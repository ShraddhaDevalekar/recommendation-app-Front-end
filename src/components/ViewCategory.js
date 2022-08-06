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
        <div style={{
            backgroundColor: "lightblue", backgroundRepeat: "no-repeat", backgroundSize: "contain"
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