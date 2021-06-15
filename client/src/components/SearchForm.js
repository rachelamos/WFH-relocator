import React from "react";

export function Input(props) {
    return (
        <div className="form-comp">
            <input className="form-control" placeholder="Enter city" {...props} />
        </div>
    );
}

export function SearchBtn(props) {
    return (
        <button className="btn btn-primary btn-md" {...props}>
            Search
        </button>
    )
}