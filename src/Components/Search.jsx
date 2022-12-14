import React from "react";


const Search = ( props ) => {

    return (
        <div className="flex gap-3 bg-[#e9e9e9] rounded-lg p-2 items-start">
        <i className="fa fa-search" aria-hidden="true"></i>
            <input 
            type="text" 
            placeholder="Type to search ..."
            className="bg-transparent w-full outline-none font-poppins text-sm" 
            onChange={(event) => {
                props.handleSearchNote(event.target.value);  // handleSearchNote is a function that is passed as a prop from App.jsx and setting the value of the search text to the state of the App.jsx
            }}
            />
        </div>
    );
}

export default Search;
