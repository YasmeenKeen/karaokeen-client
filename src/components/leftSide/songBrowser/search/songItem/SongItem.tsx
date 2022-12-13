import React from 'react'
import Song from "../../../../../types/Song";
import './SongItem.css'

type Props = {
    song: Song,
    appendToQueue: (song: Song) => void
}

const SongItem = ({ song, appendToQueue }: Props) => {

    const handleClick = () => {
        appendToQueue(song);
    };

    return (
        <div className="song-container">
            <img src={song.thumbnail} />
            <div className="song-content">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
            </div>
            <button className='iconButton medium' onClick={handleClick}>
                <img src='/assets/addtoqueue.png' />
            </button>
        </div>
    );
};

export default SongItem
