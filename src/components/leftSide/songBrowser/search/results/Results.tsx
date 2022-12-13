import React from 'react'
import SongItem from '../songItem/SongItem'

import Song from "../../../../../types/Song"; 

type Props = {
    results: any[],
    appendToQueue: (song: Song) => void
}

const Results = (props: Props) => {
    const renderResults = props.results.map((result) => {
        return <SongItem key={result.id} song={result} appendToQueue={props.appendToQueue}/>
    })

    return (
        <div className='searchResult'>
            {renderResults}
        </div>
    )
}

export default Results
