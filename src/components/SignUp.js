import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppUser from '../models/AppUser';

const SignUp = () => {

    const [appUser, setAppUser] = useState(new AppUser());
    const history = useHistory();

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitSignUp = (event) => {
        console.log(appUser);
        axios.post('http://localhost:9999/user/sign-up', appUser)
            .then((response) => {
                alert(`Sign Up successful for ${response.data.userName}! Please Sign In now.`);
                history.push("signIn");
            })
            .catch((error) => {
                alert(`Something is wrong ${error.message}!`);
            });
        event.preventDefault();
    }

    return (
        <div style={{backgroundImage:"url(https://t3.ftcdn.net/jpg/03/15/63/00/240_F_315630073_imLsnbH55tTYicCBXjLC3aT59gggEyVm.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"contain",
    }}>
        <div className="container" >
           
            <hr />
            </div>
            
            <div class="row justify-content-md-center">
            <div className="bg-alert alert-success shadow shadow-regular  col-md-3 ">   
            <h1 style={{ textAlign:'center'}}>SignUp</h1>
                <form className="form form-group form-dark " onSubmit={submitSignUp}>
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
                            <select className="form-control mb-3" name="role" string="role" onChange={handleAppUser}>
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
                            value="SignUp"
                            onClick={submitSignUp}
                        />
                        &nbsp;
                       <Link to="/SignIn" className="form-control btn btn-outline-danger">Have an account? Sign in</Link>
                    </div>
                </form>
                </div>
            </div>
            <div className="py-3 ">
              
            </div>

        </div >
    )
}
export default SignUp;