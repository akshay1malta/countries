"use strict";

const countriesData = require("./countriesData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountriesLanguages = () => {
  return countriesData.map((country) => {
    return country.languages;
  });
};
