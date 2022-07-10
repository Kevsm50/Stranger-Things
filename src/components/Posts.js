import React, { useEffect, useState } from "react";
import { fetchPosts } from "../utils/api";

const Posts = ({posts, setPosts}) => {
    const [search, setSearch] = useState('');
    const searchMatches = (post) => {
        return `${post.title} ${post.location} ${post.description}`
        .toLowerCase()
        .includes(search.toLowerCase()) 
    }

    useEffect(() => {
        (async () => {
            setPosts(await fetchPosts())
        })()
    }, [])

    return <>
      <h1>Posts</h1>
      <input onChange={(e) => {
        setSearch(e.target.value)
      }}
        type="text" name="search" placeholder="search"
      />

      <ul>
        {
            posts.filter(post => {
                return searchMatches(post)
            }).map(post => {
                return <li className="postInfo" key={post._id}>
                    <h2>{ post.title }</h2>
                    <div>{ post.description }</div>
                    <h3>{ `Price: ${post.price}` }</h3>
                    <h3>{ `Seller: ${post.author.username}`}</h3>
                    <h3>{ `Location: ${post.location}` }</h3>
                </li>
            })
        }
      </ul>
    </>
}

export default Posts