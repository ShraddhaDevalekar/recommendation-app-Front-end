import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AppUser from '../models/AppUser';
import { updateUserService } from '../services/AppUserService';
import { updateUser } from '../redux/AppUserSlice';

const UpdateUser = () => {

    const appUser = useSelector(store => store.appUser.currentUser);
    const [userDataToUpdate, setUserDataToUpdate] = useState(useSelector(store => store.appUser.currentUser));
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setUserDataToUpdate({
            ...userDataToUpdate,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(appUser);
        updateUserService(userDataToUpdate)
            .then((response) => {
                dispatch(updateUser(response.data));
                alert(`User profile updated successfully for ${response.data.userName}!`);
                history.push("/profile");
            })
            .catch((error) => {
                alert(`Something is wrong ${error.message}!`);
            });
        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Update User Profile</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Update</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={userDataToUpdate.userName}
                            onChange={handleAppUser}
                            readOnly
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={userDataToUpdate.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div className="form-group">
                            <select className="form-control mb-3" name="role" string="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Update"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default UpdateUser;



