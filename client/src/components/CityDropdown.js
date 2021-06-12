import React, {useState, useEffect} from "react";

import API from "../utils/API";

function CityDropdown() {

    const [selectableLocations, setSelectableLocations] = useState([]);
    const [current, setCurrent] = useState("");

    useEffect(() => {
        loadLocations()
    }, [])

    function loadLocations() {
        API.getLocations()
            .then(res =>
                setSelectableLocations(res.data)
                )
                .then(console.log("list:", selectableLocations))
                .catch(err => console.log(err));
    };

    function handleChange(event) {
        setCurrent(event.target.value)
    }

    let optionItems = selectableLocations.map((selectableLocation => <option key={selectableLocation.city}>{selectableLocation.city}</option>))

        return (

            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }


export default CityDropdown;