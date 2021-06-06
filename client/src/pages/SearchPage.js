import React, { useState, useEffect } from "react";
import Chart from '../components/Rechart';
import Nav from '../components/Navbar';

import { Input, SearchBtn } from "../components/SearchForm";
/*
additional components to be imported
*/

function SearchPage() {


    return (
        <div>
            {/* <Nav></Nav> */}
            {/* <Chart></Chart> */}
            {/* <Welcome></Welcome> */}
            <h3>Search cities</h3>
            <Input></Input>
            <SearchBtn></SearchBtn>
            <h3>Saved Searches</h3>
            {/* <Dropdown></Dropdown> */}
        </div>
    );


}

export default SearchPage;