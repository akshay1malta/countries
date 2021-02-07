"use strict";

const countriesData = require("./countriesData.json");
const countriesFlag = require("./countryFlags.json");
const countriesLanguageData = require("./countriesLanguageData.json");

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
exports.getAllCountriesLanguages = () => {
  return countriesLanguageData
}

exports.getAllIsoCodes = () => {
  return countriesData.map((country) => {
    return country.code;
  });
}

