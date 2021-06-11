import React from "react";

import API from "../utils/API";
import CityPuller from "./CityPuller"

class CityDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

        componentDidMount() {
            let initialCities = [];
            API.getLocations()
                .then(response => {
                    return response.json();
                }).then(data => {
                    initialCities = data.results.map((city) => {
                        return city
                });
                console.log("initialCities: ", initialCities);
                this.setState({
                    cities: initialCities,
                });
            });
        }

    render() {



        return (

            <div>
                <select>
                    {}
                </select>
            </div>
        )
    }
}

export default CityDropdown;