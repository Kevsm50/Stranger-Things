import React, {useState} from "react";
import { loginUser, registerUser } from "../utils/api";

const Account = ({user, setUser, token, setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isRegistering){
            const registration = await registerUser(username, password)
            setUser(username);
            setToken(registration.data.token);
        } else{
            const login = await loginUser(username, password)
            console.log(login)
            setUser(username);
            setToken(login.data.token)
        }
    }

    const toggleRegistration = () => {
        console.log(isRegistering)
        setIsRegistering(!isRegistering)
    }

    const handleLogout = () => {
        setUser(false);
        setToken('');
    }

    return <>
    {
        (user && token) 
        ? <>
            <h1>User Profile</h1>
            <p>{user} logged in</p>
            <button onClick={handleLogout}>Logout</button>
        </> 
        : <>
            <h1>{isRegistering ? "Registering" : "Login"}</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    name="username"
                    type="text"
                    placeholder="username"
                    value={username}>
                </input>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                ></input>
                <button type="submit">Submit</button>
            </form>
            <button onClick={toggleRegistration}>Register/Login toggle</button>
        </>
    }
    </>
}

export default Account