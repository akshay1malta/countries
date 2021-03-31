"use strict";

const countryDetailsMap = require("./map.js");
const countriesData = require("./allCountriesData.json");
const { getFilteredObj } = require("./functions.js");

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
