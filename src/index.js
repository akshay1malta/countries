"use strict";

const countriesData = require("./countriesData.json");
const countriesCapitals = require("./countriesCapital.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    console.log(country.name)
    return country.name;
  });
};

exports.getAllCountriesCapitals = () => {
  return countriesCapitals.map((country) => {
    return [country.country, country.city];
  });
};