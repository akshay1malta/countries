"use strict";

const continentsData = require("./JSON/continentsData.json");
const countriesData = require("./JSON/countriesData.json");
const countriesFlag = require("./JSON/countryFlags.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
}; 

exports.getContinentName=(countryName)=>{
 
  let continentIndex = continentsData.find(country => { 
    country.country.toLowerCase() === countryName.toLowerCase()
  })
  return continentIndex ? continentsData[continentIndex].continent : undefined;

  

};

exports.getcountriesFlag = (countryName) => {
  let flagIndex = countriesFlag.find(country => {
    country.name.toLowerCase() === countryName.toLowerCase()
  })
  return flagIndex ? countriesFlag[flagIndex].emoji : undefined;
}

exports.getCountryCode = (countryName)=>{
  let CountryCodeIndex = countriesFlag.find(country => {
    country.name.toLowerCase() === countryName.toLowerCase()
  })
  return CountryCodeIndex ? countriesFlag[CountryCodeIndex].code : undefined;
}