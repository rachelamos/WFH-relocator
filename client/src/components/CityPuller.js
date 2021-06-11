import React from "react";

import API from "../utils/API";
import CityDropdown from "./CityDropdown";

class CityPuller extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
        };
    }

    // componentDidMount() {
    //     let initialCities = [];
    //     API.getLocations()
    //         .then(response => {
    //             return response.json();
    //         }).then(data => {
    //             initialCities = data.results.map((city) => {
    //                 return city
    //             });
    //             console.log(initialCities);
    //             this.setState({
    //                 cities: initialCities,
    //             });
    //         });
    //     }

    render() {
        return (
                <CityDropdown listed={this.state}/>
        )
    }
}

export default CityPuller;