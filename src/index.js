"use strict";

const countryDetailsMap = require("./map.js");
const countriesData = require("./allCountriesData.json");

exports.getCountryInfo = (options) => {
  const { methodType, attributes } = options;
  if (Array.isArray(methodType)) {
    if (attributes) {
      let countryObj = countriesData.filter((country) => {
        return country.country_name.toLowerCase() == attributes.toLowerCase();
      })[0];
      let newObj = {};
      for (let item of methodType) {
        newObj[item.toLowerCase()] = countryObj[item.toLowerCase()];
      }
      return newObj;
    } else {
      let newArr = [];
      countriesData.forEach((data) => {
        let newObj = {};
        for (let item of methodType) {
          new_obj[item.toLowerCase()] = data[item.toLowerCase()];
        }
        newArr.push(newObj);
      });
      return newArr;
    }
  } else {
    const FunctionFactory = countryDetailsMap.get(methodType);
    return FunctionFactory(attributes);
  }
};
