import React from "react";
import "./Queue.css";
import Song from "../../types/Song"; 
import SongCard from "./songCard/songCard";

type Props = {
  currentSong: Song | undefined;
  queue: Song[];
  removeFromQueue: (index: number) => void;
  nextSong: () => void;
};

const Queue = (props: Props) => {
  const renderedQueue = props.queue.map((song, index) => {
    let actionButtons = (
      <button className="iconButton" onClick={() => props.removeFromQueue(index)}>
        <img src="/assets/delete.png"></img>
      </button>);
    return (
      <SongCard index={index} song={song} actionButtons={actionButtons} />
    );
  });
  let actionButtons = (
    <button className="iconButton" onClick={() => props.nextSong()}>
      <img src="/assets/delete.png"></img>
    </button>);
  return (
    <div id="Queue">
        {props.currentSong ? 
        (<React.Fragment>
          <SongCard index={-1} song={props.currentSong} actionButtons={actionButtons} />
          <div className="verticalLine"></div>
        </React.Fragment>)
        : (<div>Add Songs</div>)}
      {renderedQueue}
    </div>
  );
};

export default Queue;
