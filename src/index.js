"use strict";

const countriesData = require("./countriesData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};


exports.getAllIsoCodes = () => {
  return countriesData.map((country) => {
    return country.code;
  });
};
