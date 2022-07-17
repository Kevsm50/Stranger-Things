import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { submitMessage } from "../utils/api";


const FeaturedPost = ({
    user, token, 
    featuredPost, setFeaturedPost, 
    userData
}) => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const {postId} = useParams();

    const handleClose = (e) => {
        setFeaturedPost(false);
        history.push('/posts')

    }
    
    const handleSubmitMessage = async(e) => {
        e.preventDefault();
        const newMessage = await submitMessage(token, featuredPost._id, content);
        const newArr = ([newMessage, ...featuredPost.messages]);
        const newPost = Object.assign(featuredPost, {messages: newArr});
        setFeaturedPost(newPost);
        setContent('')
    }

    return <div className="featured-post">
        <h1>{featuredPost.title}</h1>
        <p>{featuredPost.description}</p>
        <p><b>Price:</b> {featuredPost.price}</p>
        <p><b>Posted by:</b> {featuredPost.author.username}</p>
        <p><b>Location:</b> {featuredPost.location}</p>
        <p><b>Will deliver:</b>{ featuredPost.willDeliver ? 'yes' : "no"}</p>

        <section>
            <h1>Messages</h1>
            <ul>
                {featuredPost.messages && 
                featuredPost.messages.map(message => {
                    return <li key= { message._id }>
                        <span>{ message.content }</span>
                    </li>
                })}
            </ul>
        </section>

        {user && token && !(featuredPost.author._id == userData._id) && 
            <form className="message-form" onSubmit={handleSubmitMessage}>
                <input
                className="messageInput"
                onChange={ (e) => setContent(e.target.value)}
                type="text" 
                name="message"
                placeholder="message"
                value={content}/>
                <button type="submit">Submit Message</button>
            </form>
        }
        <button onClick={handleClose}>Close</button>
    </div>
}

export default FeaturedPost