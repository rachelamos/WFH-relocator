import React from "react";

export function Input(props) {
    return (
        <div className="form-comp">
            <input className="form-control" {...props} />
        </div>
    );
}

export function SearchBtn(props) {
    return (
        <button {...props}>
            Search
        </button>
    )
}