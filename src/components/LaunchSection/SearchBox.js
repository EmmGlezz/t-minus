import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className=' near-white pa3 ba b--white w-100' 
            type='search' 
            placeholder='Search Missions'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;