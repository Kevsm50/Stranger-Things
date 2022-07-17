import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import Account from "./Account";
import FeaturedPost from "./FeaturedPost";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState('');
    const [message, setMessage] = useState([]);
    const [newPost, setNewPost] = useState(false);
    const [user, setUser] = useState(false);
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(false); 

    return <main>
        <nav>
            <NavLink exact to="/" className="navlink" activeClassName="active">
                Account
            </NavLink>

            <NavLink to="/posts" className="navlink" activeClassName="active">
                Posts
            </NavLink>

            <NavLink to="/login" className="navlink" activeClassName="active">
                Login
            </NavLink>
        </nav>

        <Route exact path='/'>
            <Home 
                user={user} 
                token={token} 
                userData={userData} setUserData={setUserData}
            />
        </Route>
        <Route path="/posts">
            <Route path="/posts/:postId">
                {user && token && 
                    <FeaturedPost 
                        user={user}
                        token={token}
                        userData={userData}
                        setUserData={setUserData}
                        featuredPost={featuredPost}
                        setFeaturedPost={setFeaturedPost}
                    />
                }
            </Route>
            <Posts
                user={user} token={token} 
                posts={posts} setPosts={setPosts} 
                newPost={newPost} setNewPost={setNewPost}
                featuredPost={featuredPost} setFeaturedPost={setFeaturedPost}
            />
        </Route>
        <Route path="/login">
            <Account 
                user={user} setUser={setUser}
                userData={userData} setUserData={setUserData}
                token={token} setToken={setToken}
            />
        </Route>
    </main>
}

export default App