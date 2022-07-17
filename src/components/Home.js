import React from "react";

const Home = ({ userData, user, token }) => {

    return <>     
    <h1>Welcome to Stranger's Things</h1>
    {user && token && <h2>My sent Messages</h2> }
        {userData.messages?.map((message, idx) => {
            if (message.fromUser._id === userData._id) {
                return (
                    <div className="messages" key={`${message._id} ${idx}` }>
                        <div><b>Sender:</b>{message.fromUser.username}</div>
                        <div><b>Messager:</b>{message.content}</div>
                    </div>
                )
            }
        })}
    
    {user && token && <h2>My recived Messages</h2> }    
        {userData.messages?.map((message, index) => {
                if (message.fromUser._id !== userData._id) {
                    return (
                        <div className="messages" key={index}>
                            <div><b>Sender:</b>{message.fromUser.username}</div>
                            <div><b>Messager:</b>{message.content}</div>
                        </div>
                    )
                }
        })}
    </>
    }

export default Home
