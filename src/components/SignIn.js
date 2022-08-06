import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AppUser from '../models/AppUser';
import { signInUser, signOutUser } from '../redux/AppUserSlice';
import { signInService } from '../services/AppUserService';
// signIn page
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
                history.push("/search");
            })
            .catch((error) => {
                dispatch(signOutUser());
                console.log(error.message);
            });
        event.preventDefault();
    }

    return (
        <div style={{backgroundImage:"url(https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-2650.jpg?w=2000)",backgroundSize:"contain",
    }}>
        <div className="container" >
            <hr />
            </div>
            <div class="row justify-content-md-center">
            <div className="bg-alert alert-danger shadow shadow-regular  col-md-3 ">   
            <h1 style={{ textAlign:'center'}}>SignIn</h1>
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
                        &nbsp;
                         <Link to="/signUp" className="form-control btn btn-outline-danger">You can also Sign Up. Click here</Link>
                    </div>
                </form>
                </div>
            </div>
            <div className="py-3 ">
               
            </div>
        </div >
        
    )
}
export default SignIn;