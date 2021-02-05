"use strict";

const countriesData = require("./countriesData.json");
const countriesLanguageData = require("./countriesLanguageData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountriesLanguages = () => {
  return countriesLanguageData
}

exports.getAllIsoCodes = () => {
  return countriesData.map((country) => {
    return country.code;
  });
}

