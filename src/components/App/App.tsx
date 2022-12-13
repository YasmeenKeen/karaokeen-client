import React, { useEffect, useState } from 'react'
import './App.css'
import SongBrowser from '../leftSide/songBrowser/SongBrowser'
import Player from '../player/Player'
import Queue from '../queue/Queue'
import useQueue from '../../hooks/useQueue'
import LeftSide from '../leftSide/LeftSide'
import SongFavorites from '../leftSide/songFavorites/SongFavorites'
import SessionRemote from '../leftSide/sessionRemote/SessionRemote'
import { Socket } from 'socket.io-client'
import socketService from '../../services/socketService'

const App = () => {
    const [socket, setSocket] = useState<Socket>();

    // const connectSocket = async () =>{
    //     const socket = await socketService
    //         .connect("http://localhost:9000")
    //         .then((socket) => {
    //         socket.emit("join_game");
    //         return socket;
    //         })
    //         .catch((err) => {
    //         console.log("Error: ", err);
    //         });
    //     return socket;
    // };

    useEffect(()=>{
        socketService.connect("http://localhost:9000")
        .then(socket => {
            setSocket(socket)
            socket.emit("join_session", {name: "test", sessionId: "1234"}) ;
            socket.emit("add_to_queue", {})
            // socket.emit("custom_event", "Hello World");
        })
    },[]);

    const { queue, currentSong, appendToQueue, removeFromQueue, nextSong } = useQueue();



    return (
        <div id='App'>
            <LeftSide
                songBrowser={{ label: "Search", index: 1, Component: <SongBrowser appendToQueue={appendToQueue} />, img:"/assets/search.png"}}
                songFavorites={{ label: "Favorites", index: 2, Component: <SongFavorites />, img:"/assets/favorite.png" }}
                sessionRemote={{ label: "Remote", index: 3, Component: <SessionRemote />, img:"/assets/remote-control.png" }}
            />
            <div id='Karaokee'>
                <button onClick={()=>socket?.emit('join_session')}>Next </button>
                <Player currentSong={currentSong} nextSong={nextSong} />
                <Queue currentSong={currentSong} queue={queue} removeFromQueue={removeFromQueue} nextSong={nextSong} />
            </div>
        </div>
    )
}

export default App