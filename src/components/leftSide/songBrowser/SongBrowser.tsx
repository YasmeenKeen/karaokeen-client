import React from "react";
import "./SongBrowser.css";
import Search from "./search/Search";
import Song from "../../../types/Song"; 

type Props = {
  appendToQueue: (song: Song) => void;
};

const SongBrowser = (props: Props) => {
  return <Search appendToQueue={props.appendToQueue} />;
};

export default SongBrowser;
