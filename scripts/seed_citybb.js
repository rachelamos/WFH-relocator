const mongoose = require("mongoose");
const db = require("../models")
const cityBroadbandData = require("../Location.json");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wfhrdb", {
  useNewUrlParser: true
});

// const cityBroadbandData = [
//   {
//       city: 'Atlanta',
//       state: 'GA',
//       providerCount: 40,
//       planCount: 31,
//       topSpeed: 2000,
//       avgPrice: 80.31,
//       costOfLiving: 76.22,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Austin',
//       state: 'TX',
//       providerCount: 45,
//       planCount: 35,
//       topSpeed: 2000,
//       avgPrice: 56.87,
//       costOfLiving: 63.04,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Baltimore',
//       state: 'MD',
//       providerCount: 23,
//       planCount: 15,
//       topSpeed: 1000,
//       avgPrice: 54.65,
//       costOfLiving: 73.33,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Boston',
//       state: 'MA',
//       providerCount: 36,
//       planCount: 20,
//       topSpeed: 2000,
//       avgPrice: 68.49,
//       costOfLiving: 89.29,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Charlotte',
//       state: 'NC',
//       providerCount: 32,
//       planCount: 28,
//       topSpeed: 2000,
//       avgPrice: 62.67,
//       costOfLiving: 72.66,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Chicago',
//       state: 'IL',
//       providerCount: 46,
//       planCount: 27,
//       topSpeed: 1200,
//       avgPrice: 50.79,
//       costOfLiving: 80.38,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Colorado Springs',
//       state: 'CO',
//       providerCount: 30,
//       planCount: 20,
//       topSpeed: 1000,
//       avgPrice: 59.98,
//       costOfLiving: 73.90,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Columbus',
//       state: 'OH',
//       providerCount: 30,
//       planCount: 20,
//       topSpeed: 1000,
//       avgPrice: 59.98,
//       costOfLiving: 73.13,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Dallas',
//       state: 'TX',
//       providerCount: 46,
//       planCount: 41,
//       topSpeed: 1000,
//       avgPrice: 55.50,
//       costOfLiving: 64.80,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Denver',
//       state: 'CO',
//       providerCount: 41,
//       planCount: 16,
//       topSpeed: 1200,
//       avgPrice: 53.81,
//       costOfLiving: 73.96,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Detroit',
//       state: 'MI',
//       providerCount: 24,
//       planCount: 21,
//       topSpeed: 10000,
//       avgPrice: 58.31,
//       costOfLiving: 69.73,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Huntsville',
//       state: 'AL',
//       providerCount: 21,
//       planCount: 28,
//       topSpeed: 2000,
//       avgPrice: 59.70,
//       costOfLiving: 64.98,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Kansas City',
//       state: 'MO',
//       providerCount: 35,
//       planCount: 37,
//       topSpeed: 2000,
//       avgPrice: 59.18,
//       costOfLiving: 68.86,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Los Angeles',
//       state: 'CA',
//       providerCount: 48,
//       planCount: 32,
//       topSpeed: 1000,
//       avgPrice: 56.17,
//       costOfLiving: 81.92,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Madison',
//       state: 'WI',
//       providerCount: 27,
//       planCount: 22,
//       topSpeed: 1000,
//       avgPrice: 60.33,
//       costOfLiving: 68.69,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Minneapolis',
//       state: 'MN',
//       providerCount: 35,
//       planCount: 28,
//       topSpeed: 10000,
//       avgPrice: 58.60,
//       costOfLiving: 82.47,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Nashville',
//       state: 'TN',
//       providerCount: 23,
//       planCount: 18,
//       topSpeed: 2000,
//       avgPrice: 60.81,
//       costOfLiving: 72.15,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'New York City',
//       state: 'NY',
//       providerCount: 57,
//       planCount: 17,
//       topSpeed: 1000,
//       avgPrice: 55.48,
//       costOfLiving: 100,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Phoenix',
//       state: 'AZ',
//       providerCount: 30,
//       planCount: 15,
//       topSpeed: 1000,
//       avgPrice: 52.19,
//       costOfLiving: 66.73,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Raleigh',
//       state: 'NC',
//       providerCount: 21,
//       planCount: 22,
//       topSpeed: 2000,
//       avgPrice: 62.75,
//       costOfLiving: 71.18,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Salt Lake City',
//       state: 'UT',
//       providerCount: 33,
//       planCount: 20,
//       topSpeed: 1000,
//       avgPrice: 68.23,
//       costOfLiving: 63.89,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'San Francisco',
//       state: 'CA',
//       providerCount: 40,
//       planCount: 31,
//       topSpeed: 10000,
//       avgPrice: 53.21,
//       costOfLiving: 93.35,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'San Jose',
//       state: 'CA',
//       providerCount: 41,
//       planCount: 36,
//       topSpeed: 2000,
//       avgPrice: 55.84,
//       costOfLiving: 78.55,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Seattle',
//       state: 'WA',
//       providerCount: 28,
//       planCount: 21,
//       topSpeed: 1200,
//       avgPrice: 45.22,
//       costOfLiving: 89.48,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'St Louis',
//       state: 'MO',
//       providerCount: 32,
//       planCount: 16,
//       topSpeed: 1000,
//       avgPrice: 63.10,
//       costOfLiving: 68.23,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Tampa',
//       state: 'FL',
//       providerCount: 23,
//       planCount: 26,
//       topSpeed: 1200,
//       avgPrice: 83.37,
//       costOfLiving: 79.53,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     },

//     {
//       city: 'Washington',
//       state: 'DC',
//       providerCount: 38,
//       planCount: 14,
//       topSpeed: 1000,
//       avgPrice: 53.06,
//       costOfLiving: 84.39,
//       avgProviderCount: 34.26,
//       avgAvgPrice: 59.60,
//       avgCostOfLiving: 75.74
//     }

// ]

db.Location.deleteMany({})
  .then(() => db.Location.collection.insertMany(cityBroadbandData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// export default cityBroadbandData;