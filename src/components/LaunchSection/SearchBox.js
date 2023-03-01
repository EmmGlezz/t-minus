import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className='bg-navy near-white pa3 ba b--white' 
            type='search' 
            placeholder='Search Missions'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;