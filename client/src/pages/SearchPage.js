import React, { useState, useEffect } from "react";
import Chart from '../components/Rechart';
// import Nav from '../components/Navbar';
import API from "../utils/API";
import CityWindow from "../components/CityWindow";

import { Input, SearchBtn } from "../components/SearchForm";
/*
additional components to be imported
*/

function SearchPage() {

    const [formObject, setFormObject] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    function citySearch() {
        console.log("formObject", formObject)
        API.getCity(formObject)
          .then(res => setSearchResults(res.data))
          .then(console.log("searchResults", searchResults))
          .then(console.log("searchResults cost", searchResults.costOfLiving))
          .catch(err => console.log(err));
      };

    //   const cityData = searchResults.map(stats => {
    //       let stat = { name: "name", costOfLiving: parseInt(stats.costOfLiving)}
    //       return stat;
    //   })


    return (
        <div>
            {/* <Nav></Nav> */}
            {/* <Chart></Chart> */}
            {/* <Welcome></Welcome> */}
            <h3>Search cities</h3>
            <Input
                onChange={(e) => setFormObject(e.target.value)}
            />
            <SearchBtn
                onClick={citySearch}
            />
            <CityWindow
                city={searchResults.city}
                state={searchResults.state}
                providerCount={searchResults.providerCount}
                planCount={searchResults.planCount}
                topSpeed={searchResults.topSpeed}
                avgPrice={searchResults.avgPrice}
                costOfLiving={searchResults.costOfLiving}
            ></CityWindow>
            <Chart
                info={searchResults}    
            ></Chart>
            <h3>Saved Searches</h3>
            {/* <Dropdown></Dropdown> */}
        </div>
    );


}

export default SearchPage;