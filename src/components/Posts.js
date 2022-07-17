import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deletePost, submitPost, fetchPosts} from "../utils/api";

const Posts = ({user, token, posts, setPosts, setFeaturedPost}) => {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false)

    const history = useHistory();

    const searchMatches = (post) => {
        return `${post.title} ${post.location} ${post.description}`
        .toLowerCase()
        .includes(search.toLowerCase()) 
    }

    const handlePostClick = (e, post) => {
      if (user && token) {
        history.push(`/posts/${post._id}`)
        setFeaturedPost(post)
      } else {
        alert('Please log in')
      }
    }

    useEffect(() => {
        (async () => {
            const getPosts = await fetchPosts(token);
            setPosts(getPosts)
        })()
    }, [])

    const handleSubmitPost = async (e) => {
      e.preventDefault();
      const newPost = await submitPost(token, title, description, price, location, willDeliver);
      setPosts([...posts , newPost]);
    }

    const handleDeletePost = async (e, postId) => {
      e.stopPropagation();
      const isDeleted = await deletePost(token, postId);
      if (isDeleted){
        const remainingPost = posts.filter(p => p.Id != postId)
        setPosts(remainingPost)
      }
    }

    return <>
      <h1>Posts</h1>
      <input className="searchInput" onChange={(e) => {
        setSearch(e.target.value)
      }}
        type="text" name="search" placeholder="search"
      />

      {user && token && 
        <form onSubmit={handleSubmitPost}>
          <input 
            onChange={(e) => setTitle(e.target.value)}
            type="text" name="title" placeholder="Title" value={title}>
          </input>

          <input 
            onChange={(e) => setDescription(e.target.value)}
            type="text" name="description" placeholder="Description" value={description}>          
          </input>

          <input 
            onChange={(e) => setPrice(e.target.value)}
            type="number" name="price" placeholder="Price" value={price}>          
          </input>

          <input 
            onChange={(e) => setLocation(e.target.value)}
            type="text" name="location" placeholder="Location" value={location}>          
          </input>

          <label htmlFor="checkbox">Will Deliver!</label>
          <div>{willDeliver ? "Checked" : "Not checked"}
          <input
            type="checkbox"
            checked={willDeliver}
            id="checkbox"
            onChange={() => setWillDeliver(!willDeliver)}
            value={willDeliver}
          />          
          </div>
          <button type="submit">Submit Post</button>
        </form>
      }

      <ul>
        {
          posts.filter(post => {
            return searchMatches(post)
          }).map(post => {
            return <li onClick={(e) => {handlePostClick(e, post)}} className="postInfo" key={post._id}>
              <h1>{ post.title }</h1>
              <div>{ post.description }</div>
              <h3>{ `Price: ${post.price}` }</h3>
              <h3>{ `Location: ${post.location}` }</h3>
              {user && token && (post.author.username == user) &&
                <button onClick={(e) => handleDeletePost(e, post._id)}>Delete Post</button>
              }
            </li>
          })
        }
      </ul>
    </>
}

export default Posts