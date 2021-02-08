"use strict";

const countriesData = require("./countriesData.json");
const countryStates = require("./countriesState.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountryStateNames = () => {
  return countryStates.map((country) => {
    return country.states.map((states) => {
      return country.name - states.name;
    })
  });
};