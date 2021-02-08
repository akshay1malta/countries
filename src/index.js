"use strict";

const countriesData = require("./countriesData.json");
const currencyData = require("./currencyData.json");
const countriesCapitals = require("./countriesCapital.json");
const countryCallingCodes = require("./countryCallingCode.json");
const countriesFlag = require("./countryFlags.json");
const countriesLanguageData = require("./countriesLanguageData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};
exports.getCurrencybyCountryCode = (countryCode, options) => {
   return currencyData[countryCode.toUpperCase()];
};
exports.getAllCountriesCapitals = () => {
  return countriesCapitals
};
exports.getAllCountriesCallingCode = () => {
  return countryCallingCodes.map((country) => {
    return country.dial_code;
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

