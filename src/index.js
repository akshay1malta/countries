"use strict";

const countryDetailsMap = require("./map.js");
const countriesData = require("./allCountriesData.json");
const {
  getContinentName,
  getCountryCode,
  getCountryTimeZone,
  getAllCountryStateNames,
  getAllCountriesNames,
  getAllCountriesLanguages,
  getAllIsoCodes,
  getAllCountriesFlag,
  getAllCountriesCallingCode,
  getAllCountriesCapitals,
  getCurrencybyCountryCode,
  getFilteredObj
} = require("./functions");

exports.getCountryInfo = (options) => {
  const { methodType, attributes } = options;
  if (Array.isArray(methodType)) {
    if (attributes && typeof attributes == "string") {
      let countryObj = countriesData.filter((country) => {
        return country.country_name.toLowerCase() == attributes.toLowerCase();
      })[0];
      let newObj = getFilteredObj(methodType, countryObj);
      return newObj;
    } else {
      let newArr = [];
      countriesData.forEach((data) => {
        newArr.push(getFilteredObj(methodType, data));
      });
      return newArr;
    }
  }
  const FunctionFactory = countryDetailsMap.get(methodType);
  return FunctionFactory(attributes);
};

exports.getAllCountriesNames = () => {
  return getAllCountriesNames()
};

exports.getContinentName = (countryName) => {
  return getContinentName(countryName)
};

exports.getCountryCode = (countryName) => {
  return getCountryCode(countryName)
};

exports.getCountryTimeZone = (countryName) => {
  return getCountryTimeZone(countryName)
};

exports.getAllCountryStateNames = () => {
  return getAllCountryStateNames()
};

exports.getCurrencybyCountryCode = (countryName) => {
  return getCurrencybyCountryCode(countryName)
};

exports.getAllCountriesCapitals = () => {
  return getAllCountriesCapitals()
};

exports.getAllCountriesCallingCode = () => {
  return getAllCountriesCallingCode()
};

exports.getAllCountriesFlag = () => {
  return getAllCountriesFlag()
};

exports.getAllCountriesLanguages = () => {
  return getAllCountriesLanguages()
};


exports.getAllIsoCodes = () => {
  return getAllIsoCodes()
};

exports.getCountryByCode = (number) => {
  return getCountryByCode(number)
};

