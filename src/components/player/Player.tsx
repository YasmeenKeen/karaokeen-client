import React from 'react'
import './Player.css';
import Song from "../../types/Song"; 
import YouTube from 'react-youtube';

type Props = {
    currentSong: Song | undefined,
    nextSong: () => void
}

const Player = (props: Props) => {
    const opts = {
        height: '450px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            color: 'white',
            iv_load_policy:3,
            modestbranding: 1,
            start: 8,
        },
    };
    const handlePlay = (e: any) => {
        console.log('playing', e)
    }
    return (
        <div id='Player'>
            {/* <YouTube opts={opts} videoId={props.currentSong?.id} onPlay={handlePlay} onEnd={props.nextSong} /> */}
            {/* <button onClick={props.nextSong}>Next </button> */}
        </div>
    )
}

export default Player
