# WFH-Relocator

## Value Add Proposal

With working remotely becoming an increasingly popular and at times necessary aspect of employment, people are likely to reconsider their options on where to live. This application allows users to search cities in the USA and view aggregated stats regarding cost-of-living and broadband internet availability.


## Tech Stack

This application uses a full MERN (Mongo Express React Node) stack. It's deployed via Heroku with a connected MongoDB-Atlas database, with database calls running via Axios. It also employs the NPM package ReCharts for generating onscreen charts as well as Bootstrap for mobile-responsive styling. Broadband data was sourced from broadbandnow.com.

## Roles

* Rachel Amos - React components, cost-of-living data collection, Mongoose setup, Heroku deployment, recharcts implementation

* Daniel Boren - Broadband data collection, search functionality within react components, routing and database functions


## MVP

### Phase 1

Currently the app allows users to search any city currently loaded to the connected database. Upon typing a valid city name and clicking the search button the stats (CityWindow.js) and chart (Rechart/index.js) components will render below the search bar. The following stats are stored and renderable for each city.

- Number of broadband providers
- Number of available broadband plans
- Highest available broadband speed
- Average broadband plan price
- Cost of living index

The Rechart component renders the same numeric data as a bar graph while also rendering the averaged cost-of-living, provider count, and average plan price of all cities in the database so users can compare that to the searched city's stats.

![App rendering a city's info after search](images\WFHRscreencap.JPG)


### Phase 2 (future developement)

Implementing user authentication. This would allow users to create their own account and save searched cities to a personal collection of cities of interest. Recharts would then be used to display multiple cities' charts side-by-side for easier comparison.

![Login page wireframe](images\LoginWireframe.JPG)


![Signup modal wireframe](images\SignupWireframe.JPG)

### Phase 3 (future development)

Implementing onscreen map and searchability by values other than city name. This would include being able to search based on a threshold (such as max COL index or minimum top broadband speed) and view multiple resulting cities.

![Image explaining potential future functionality](images\FutureDevScreencap.JPG)


## Demo

WFH-Relocator is deployed via [Heroku](https://ancient-hollows-66162.herokuapp.com/) and it's repository can be found on [GitHub](https://github.com/rachelamos/WFH-relocator).