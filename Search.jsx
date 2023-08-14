import React from "react";

export default function (props){
    return(
        <div>
             <form className="search-form">
                <input
                    className="search-input"
                    placeholder="Enter Any Word..."
                    onChange={props.onChange}
                    value={props.value}
                 />
                <button
                    className="search-button"
                    onClick={props.onclick}
                    type="submit"
                  >
                 Search
                </button>
                </form>
        </div>
    )
}