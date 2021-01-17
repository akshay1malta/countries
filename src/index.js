"use strict";

const countriesData = require("./JSON/countriesData.json");
const continentsData = require("./JSON/continentsData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
}; 

exports.getContinentName=(countryName)=>{
  console.log(countryName,"countryName");
  let continentIndex = continentsData.find(country => {
    // console.log(country.country,"country in map");
    country.country.toLowerCase() === "Ghana"
    //countryName.toLowerCase()
  })
  console.log(continentIndex,"index");
  return continentIndex ? continentsData[continentIndex].continent : undefined;

}