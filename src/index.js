"use strict";

const countriesData = require("./countriesData.json");
const countriesFlag = require("./countriesFlags.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getcountriesFlag = (countryName) => {
  let flagIndex = countriesFlag.find(country => {
    country.name.toLowerCase() === countryName.toLowerCase()
  })
  return flagIndex ? countriesFlag[flagIndex].emoji : undefined;
}