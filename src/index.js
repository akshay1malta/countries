"use strict";

const countriesData = require("./countriesData.json");
const countriesCapitals = require("./countriesCapital.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountriesCapitals = () => {
  return countriesCapitals
};