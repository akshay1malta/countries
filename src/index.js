"use strict";

const countriesData = require("./countriesData.json");
const currencyData = require("./currencyData.json");
const countryStates = require("./countriesState.json");
const countriesCapitals = require("./countriesCapital.json");
const countryCallingCodes = require("./countryCallingCode.json");
const countriesFlag = require("./countryFlags.json");
const countriesLanguageData = require("./countriesLanguageData.json");
const timezoneData=require("./countryTimezone.json")
const continentsData = require("./continentsData.json");

exports.getAllCountriesNames = () => {
  return countriesData.map((country) => {
    return country.name;
  });
}; 

exports.getContinentName=(countryName)=>{
  let continentIndex = continentsData.findIndex(country => { 
   return country.country.toLowerCase() === countryName.toLowerCase()
  })
  return continentIndex ? continentsData[continentIndex].continent : undefined;
};


exports.getCountryCode = (countryName)=>{
  let CountryCodeIndex = countriesFlag.findIndex(country => {
   return country.name.toLowerCase() === countryName.toLowerCase()
  })
  return CountryCodeIndex ? countriesFlag[CountryCodeIndex].code : undefined;
}

exports.getCountryTimeZone = (countryName)=>{
  let timeZoneIndex =timezoneData.findIndex(country=>{
    return country.name.toLowerCase()==countryName.toLowerCase()
  })
  return timeZoneIndex!=null ? timezoneData[timeZoneIndex].timezones[0] : undefined;
}

exports.getAllCountryStateNames = () => {
  return countryStates;
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

exports.getCountryByCode = (number) => {
  let countryCode = String(number)
  let getCountryCode = countryCode.split('-')[0] 
  return countryCallingCodes.filter((country) => country.dial_code === getCountryCode)[0] || {}
}
