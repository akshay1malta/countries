"use strict";

const countriesData = require("./countriesData.json");
const countryCallingCodes = require("./countryCallingCode.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getAllCountriesCallingCode = () => {
  return countryCallingCodes.map((country) => {
    return country.dial_code;
  });
};