import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const currentUser = useSelector(store => store.appUser.currentUser);
    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">User Profile</p>
            <hr />
            <div>
                {
                    currentUser &&
                    <div>
                        <p className="lead">User Profile</p>
                        <p>UserName: {currentUser.userName}</p>
                        <p>Role: {currentUser.role}</p>
                        <p>Avatar: <i className="bi bi-person-circle lead"></i></p>
                        <p><i className="bi bi-plus-circle-fill"></i></p>
                    </div>
                }
            </div>
            <div className="py-3 ">
                <Link to="/update" className="btn btn-outline-primary col-3">Update your profile</Link>
            </div>

        </div>
    );
}
export default UserProfile;
