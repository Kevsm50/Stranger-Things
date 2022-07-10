import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import Account from "./Account";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState('');
    const [comments, setComments] = ([]);
    const [newComments, setNewComments] = useState(false);
    const [newPost, setNewPost] = useState(false);
    const [user, setUser] = useState(false);
    const [token, setToken] = useState('');

    return <main>
        <nav>
            <NavLink exact to="/" className="navlink" activeClassName="active">
                Home
            </NavLink>

            <NavLink to="/posts" className="navlink" activeClassName="active">
                Posts
            </NavLink>

            <NavLink to="/login" className="navlink" activeClassName="active">
                Account
            </NavLink>
        </nav>

        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path="/posts">
            <Posts posts={posts} setPosts={setPosts} />
        </Route>
        <Route path="/login">
            <Account 
            user={user} setUser={setUser}
            token={token} setToken={setToken}/>
        </Route>
    </main>
}

export default App