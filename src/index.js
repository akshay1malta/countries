"use strict";

const countriesData = require("./countriesData.json");
const countriesFlag = require("./countryFlags.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountriesFlag = () => {
  return countriesFlag.map((country) => {
    return country.emoji;
  });
};