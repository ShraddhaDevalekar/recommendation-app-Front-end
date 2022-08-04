import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from './components/Search';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import Footer from './components/Footer';
import About from './components/About';
// import AuthorData from "./components/AuthorData";
import ViewAuthors from "./components/ViewAuthors";
import ViewBooks from "./components/ViewBooks";
import Admin from "./components/Admin";
import MoreAuthorsInfo from "./components/MoreAuthorsInfo";
import MoreBooksInfo from "./components/MoreBooksInfo";
const Routes = () => {

    const signInStatus = useSelector((store) => { return store.appUser.isSignedIn; });

    return (
        <div>
            <div>
                {signInStatus &&
                    <div>
                        <BrowserRouter>
                            <Header />
                            <div style={{ minHeight: "92vh" }} >
                                <Switch>
                                    <Route path='/viewauthors'> <ViewAuthors /> </Route>
                                    <Route path='/viewbooks'> <ViewBooks/> </Route>
                                    <Route path='/moreauthorsinfo'> <MoreAuthorsInfo /> </Route>
                                    <Route path='/morebooksinfo'> <MoreBooksInfo /> </Route>
                                    <Route path='/search'> <Search /> </Route>
                                    {/* <Route path='/authordata'> <AuthorData /> </Route> */}
                                    <Route path='/signout'> <SignOut /> </Route>
                                    <Route path='/profile'> <UserProfile />  </Route>
                                    <Route path='/update'> <UpdateUser />  </Route>
                                    <Route path='/admin'> <Admin /> </Route>
                                    <Route path='/footer'> <Footer /> </Route>
                                    <Route path='/'> <Home />  </Route>
                                </Switch>
                                <Footer />
                            </div>
                        </BrowserRouter>
                    </div>}
            </div>
            <div>
                {!signInStatus &&
                    <div>
                        <BrowserRouter>
                            <Header />
                            <div style={{ minHeight: "92vh" }} >
                                <Switch>
                                    <Route path='/signin'> <SignIn /> </Route>
                                    <Route path='/signup'> <SignUp /> </Route>
                                    <Route path='/about'> <About /> </Route>
                                    <Route path='/'> <Home />  </Route>
                                    <Route path='/footer'> <Footer /> </Route>
                                </Switch>
                                <Footer />
                            </div>
                        </BrowserRouter>
                    </div>}
            </div>
        </div >
    );
}

export default Routes;
