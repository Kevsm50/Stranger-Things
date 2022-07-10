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

export const fetchPosts = async () => {
    const data = await apiCall('/posts')
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
    console.log(login)
    return login

}

export const registerUser = async(username, password) => {
    const registration = await apiCall('/users/register', "POST", null, {
        user: {username, password}
    })
    console.log(registration)
    return registration
}