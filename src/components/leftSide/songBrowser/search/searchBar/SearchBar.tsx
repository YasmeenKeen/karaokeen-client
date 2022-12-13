import React, { useRef } from 'react'
type Props = { getResults: (searchTerm: string) => void }

const SearchBar = (props: Props) => {
    const searchTerm = useRef<HTMLInputElement>(null)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log('submitted', searchTerm.current?.value)
        props.getResults(searchTerm.current?.value || '')
    }

    return (
        <div className='searchBar-container'>
            <form className="searchBar" onSubmit={onSubmit}>
                <input ref={searchTerm} type='text' placeholder='Search...' />
                <button className='iconButton' type='submit'>
                    <img src='/assets/close.png' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
