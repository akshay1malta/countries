"use strict";

const countriesData = require("./countriesData.json");
const currencyData = require("./currencyData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};


exports.getCurrencybyCountryCode = (countryCode, options) => {
   return currencyData[countryCode.toUpperCase()];
};