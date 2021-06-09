import React, { useState, useEffect } from "react";
import Chart from '../components/Rechart';
import Nav from '../components/Navbar';
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';
import { Input, SearchBtn } from "../components/SearchForm";
/*
additional components to be imported
*/

function SearchPage() {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();
    const [formObject, setFormObject] = useState("");
    const [searchResults, setSearchResults] = useState({});


    function citySearch() {
        console.log("formObject", formObject)
        API.getCity(formObject)
          .then(res => setSearchResults(res.data))
          .catch(err => console.log(err));
      };

      if (isLoading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Oops... {error.message}</div>;
      }
    
      if (isAuthenticated) {
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
            <h3>Saved Searches</h3>
            {/* <Dropdown></Dropdown> */}
        </div>
    )
      }
      else {
        return <div>Private</div>;
      }



}

export default SearchPage;