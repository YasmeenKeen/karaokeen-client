import React, { useState } from "react";
import useAPI from "../../../../hooks/useSongSearch";
import Results from "./results/Results";
import SearchBar from "./searchBar/SearchBar";
import Song from "../../../../types/Song";

type Props = {
  appendToQueue: (song: Song) => void;
};

const Search = (props: Props) => {
  const { songsResult, getSongResults } = useAPI();
  return (
    <div id="SongBrowser">
      <SearchBar getResults={getSongResults} />
      <Results results={songsResult} appendToQueue={props.appendToQueue} />
    </div>
  );
};

export default Search;
