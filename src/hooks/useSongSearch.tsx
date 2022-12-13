import React, { useState } from "react";
import youtube from "../apis/youtube";
import Song from "../types/Song"; 

const useSongSearch = () => {
  const [songsResult, setSongResults] = useState<Song[]>([]);

  const titleCleaner = (title: string) => {
    const phrasesToRemove = ["Karaoke Songs With Lyrics", "Original Key", "Lyrics", "(", ")"];
    phrasesToRemove.forEach((phrase) => {
      title = title.replace(phrase, "");
    });
    title.replace("&#39",'\'');
    title.replace("&quot;",'\"');    
    return title;
  };

  const getSongResults = async (searchTerm: string) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
        channelId: "UCJw1qyMF4m3ZIBWdhogkcsw", // Karaoke Channel 'Musisi Karaoke'
        type: "video",
      },
    });

    const songsList = response.data.items.map((item: any) => {
      const videoTitle: string[] = titleCleaner(item.snippet.title).split(" - ");
      return {
        id: item.id.videoId,
        title: videoTitle[0],
        artist: videoTitle[1],
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });
    
    setSongResults(songsList);
  };
  return { songsResult, getSongResults };
};

export default useSongSearch;
