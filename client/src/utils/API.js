import axios from "axios";

export default {
    getLocations: function() {
        return axios.get("api/locations/")
    },

    getCity: function(cityName) {
        return axios.get("api/locations/city/" + cityName)
    }
}