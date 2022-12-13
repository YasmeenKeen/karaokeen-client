import React from "react";
import Song from "../../../types/Song"; 

type Props = {
    index: number;
    song: Song | undefined;
    actionButtons: any;
    // nextQueue: () => void;
};

const SongCard = (props: Props) => {
    return (
        <div className="songCard" key={props.index}>
            <div className="song-info">
                <p>{props.song?.title}</p>
                <p>{props.song?.artist}</p>
            </div>
            {props.actionButtons}
        </div>
    );
};

export default SongCard;
