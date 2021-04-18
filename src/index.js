"use strict";

const countryDetailsMap = require("./map");
const countriesData = require("./allCountriesData.json");
const { getFilteredObj } = require("./functions");
const currencyData = require("./currencyData.json");
const countryStates = require("./countriesState.json");
const countriesCapitals = require("./countriesCapital.json");
const countryCallingCodes = require("./countryCallingCode.json");
const countriesFlag = require("./countryFlags.json");
const countriesLanguageData = require("./countriesLanguageData.json");
const timezoneData = require("./countryTimezone.json");
const continentsData = require("./continentsData.json");
const countriesCodeData = require("./countriesData.json");


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
  console.log('FunctionFactory', FunctionFactory(attributes))
  return FunctionFactory(attributes);
};

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
};

exports.getContinentName = (countryName) => {
  let continentIndex = continentsData.findIndex((country) => {
    return country.country.toLowerCase() === countryName.toLowerCase();
  });
  return continentIndex ? continentsData[continentIndex].continent : undefined;
};

exports.getCountryCode = (countryName) => {
  let CountryCodeIndex = countriesFlag.findIndex((country) => {
    return country.name.toLowerCase() === countryName.toLowerCase();
  });
  return CountryCodeIndex ? countriesFlag[CountryCodeIndex].code : undefined;
};

exports.getCountryTimeZone = (countryName) => {
  let timeZoneIndex = timezoneData.findIndex((country) => {
    return country.name.toLowerCase() == countryName.toLowerCase();
  });
  return timeZoneIndex != null
    ? timezoneData[timeZoneIndex].timezones[0]
    : undefined;
};

exports.getAllCountryStateNames = () => {
  return countryStates.map((country) => {
    return country.states.map((states) => {
      return country.name - states.name;
    });
  });
};

exports.getCurrencybyCountryCode = (countryCode, options) => {
  return currencyData[countryCode.toUpperCase()];
};

exports.getAllCountriesCapitals = () => {
  return countriesCapitals;
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
  return countriesLanguageData;
};

exports.getAllIsoCodes = () => {
  return countriesCodeData.map((country) => {
    return country.code;
  });
};

exports.getCountryByCode = (number) => {
  let countryCode = String(number)
  let getCountryCode = countryCode.split('-')[0] 
  return countryCallingCodes.filter((country) => country.dial_code === getCountryCode)[0] || {}
}