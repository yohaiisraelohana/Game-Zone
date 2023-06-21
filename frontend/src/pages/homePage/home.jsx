// Client-side code (Home.js)
import React, { useEffect, useState } from 'react';
import './home.css';
import GameCollection from '../../components/games/gamesCollection/gameCollection';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3003');

export default function Home() {
    const [message,setMessage] = useState("");
    const [messageReceived,setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_Message", { message: message });
    setMessage("");
  };
  
  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className='home'>
      <input type="text" onChange={(event) => {setMessage(event.target.value)}} />
      <button onClick={sendMessage}>send message</button>
      <h1>Message:</h1>
      {messageReceived}
      <main>
        <GameCollection/>
      </main>
    </div>
  );
}
