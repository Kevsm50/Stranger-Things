export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT'

export const apiCall = async (url, method='GET', token, body) => {
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        if(token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(BASE_URL + url, options);
        const data = await response.json();

        if(data.error){
            throw data.error;
        }

        return data

    } catch (error) {
        console.error('ERROR: ', error)
    }
}

export const fetchPosts = async (token) => {
    const data = await apiCall('/posts', "GET", token)
    //console.log(data)
    if(!data || !data.data){
        return []
    }
    return data.data.posts || []
}

export const loginUser = async(username, password) => {
    const login = await apiCall('/users/login', "POST", null, {
        user: {username, password}
    })
    return login

}

export const registerUser = async(username, password) => {
    const registration = await apiCall('/users/register', "POST", null, {
        user: {username, password}
    })
    return registration
}

export const submitPost = async(token, title, description, price, location, willDeliver) => {
    const data = await apiCall('/posts', "POST", token, {
        post: {title, description, price, location, willDeliver}
    })
    return data.data.post
}

export const deletePost = async(token, postId) => {
    const data = await apiCall(`/posts/${postId}`, "DELETE", token);
    return data.success
}

export const submitMessage = async(token, postId, message) => {
    const data = await apiCall(
        `/posts/${postId}/messages`, 
        "POST", 
        token, 
        {
            message: {content: message}
        })
        return data.data.message
}

export const fetchUser = async(token) => {
    const data = await apiCall(`/users/me`, "GET", token)
    return data
}
