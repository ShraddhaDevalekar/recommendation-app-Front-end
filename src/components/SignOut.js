import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signOutUser } from "../redux/AppUserSlice";
import { signOutService } from "../services/AppUserService";

const SignOut = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.appUser.currentUser);

    const submitSignOut = () => {
        signOutService(currentUser);
        dispatch(signOutUser());
        history.push("/");
    }
    return (
        <div className="modal fade" id="signOutModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">SignOut!</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure to Sign Out?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={submitSignOut}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SignOut;