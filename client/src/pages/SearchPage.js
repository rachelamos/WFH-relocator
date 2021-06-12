import React, { useState, useEffect } from "react";
import Chart from '../components/Rechart';
import Nav from '../components/Navbar';
import API from "../utils/API";
import CityWindow from "../components/CityWindow";

import { Input, SearchBtn } from "../components/SearchForm";
import CityDropdown from "../components/CityDropdown";

/*
additional components to be imported
*/

function SearchPage() {

    const [formObject, setFormObject] = useState("");
    const [searchResults, setSearchResults] = useState({});
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");

    console.log("Searched yet?", hasSearched);



    function citySearch() {
        console.log("formObject", formObject)
        API.getCity(formObject)
          .then(res => setSearchResults(res.data))
          .then(setHasSearched(true))
          .then(console.log(searchResults))
          .then(console.log(searchResults.costOfLiving))
          .then(console.log("Searched yet?", hasSearched))
          .catch(err => console.log(err));
      };

    function selectCity() {
        console.log("selectedCity: ", selectedCity)
        API.getCity(selectedCity)
            .then(res => setSelectedCity(res.data))
            .then(setHasSearched(true))
            .then(console.log(selectedCity))
            .then(console.log("Selected yet?", hasSearched))
            .catch(err => console.log(err));
    }


    return (
        <div>
            {/* <Nav></Nav> */}
            {/* <Chart></Chart> */}
            {/* <Welcome></Welcome> */}
            <h3>Select a city to view info</h3>
            <div id="dd-div">
                <CityDropdown 
                        onChange={CityDropdown.handleChange && selectCity}
                    />
            </div>
            <h3>Search cities</h3>
            <Input
                onChange={(e) => setFormObject(e.target.value)}
            />
            <SearchBtn
                onClick={citySearch}
            />
            <CityWindow
                city={searchResults.city || selectedCity.city}
                state={searchResults.state}
                providerCount={searchResults.providerCount}
                planCount={searchResults.planCount}
                topSpeed={searchResults.topSpeed}
                avgPrice={searchResults.avgPrice}
                costOfLiving={searchResults.costOfLiving}
                ></CityWindow>
            <h3>Saved Searches</h3>
            {/* <Dropdown></Dropdown> */}
        </div>
    );


}

export default SearchPage;