import React, { useState } from 'react'
import Song from "../types/Song"; 

const useQueue = () => {
    // const initialSong:Song = {
    //     id: 'NNsB29EoVzs',
    //     title: 'All Too Well 10 Minutes Version',
    //     artist: 'Taylor Swift',
    //     channel: 'Musisi Karaokee',
    //     thumbnail: 'https://i.ytimg.com/vi/NNsB29EoVzs/default.jpg',
    // }
    const [queue, setQueue] = useState<Song[]>([])
    const [currentSong , setCurrentSong] = useState<Song>()

    const appendToQueue = (song: Song) => {
        if ( !currentSong ) {
            setCurrentSong(song)
            return
        }

        setQueue(oldQueue => {
            const newQueue = [...oldQueue]
            newQueue.push(song)
            return newQueue
        })
    }
    
    const removeFromQueue = (index:number) => {
        setQueue(oldQueue => {
            const newQueue = [...oldQueue]
            newQueue.splice(index, 1)
            return newQueue
            // return oldQueue.filter((song, i) => i !== index)
        })
    }
    
    const nextSong = () => {
        console.log(queue)
        if (queue.length > 0) {
            setCurrentSong(queue[0])
            removeFromQueue(0)
        }
    }


    return { queue, currentSong, appendToQueue, removeFromQueue, nextSong }
}

export default useQueue
