import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AppUser from '../models/AppUser';
import { signInUser, signOutUser } from '../redux/AppUserSlice';
import { signInService } from '../services/AppUserService';

const SignIn = () => {

    const [appUser, setAppUser] = useState(new AppUser());
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAppUser = (event) => {
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(appUser);
        signInService(appUser)
            .then((response) => {
                dispatch(signInUser(response.data));
                alert(`Sign In successful for ${response.data.userName}!`);
                history.push("/");
            })
            .catch((error) => {
                dispatch(signOutUser());
                console.log(error.message);
            });
        event.preventDefault();
    }

    return (
        <div style={{backgroundImage:"url(https://t3.ftcdn.net/jpg/03/15/63/00/240_F_315630073_imLsnbH55tTYicCBXjLC3aT59gggEyVm.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"contain",
    }}>
        <div className="container" >
            <p className="display-4 text-primary py-3">SignIn</p>
            <hr />
            </div>
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">SignIn</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div className="form-group">
                            <select className="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            string="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="SignIn"
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/signUp" className="btn btn-outline-primary col-3">You can also Sign Up. Click here</Link>
            </div>
        </div >
    )
}
export default SignIn;