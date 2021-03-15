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
} = require("./functions.js");

let countryDetailsMap = new Map();

countryDetailsMap.set("COUNTRY_NAMES", getAllCountriesNames);
countryDetailsMap.set("CONTINENT_NAME", getContinentName);
countryDetailsMap.set("COUNTRY_CODE", getCountryCode);
countryDetailsMap.set("COUNTRY_TIME_ZONE", getCountryTimeZone);
countryDetailsMap.set("COUNTRY_STATE_NAMES", getAllCountryStateNames);
countryDetailsMap.set("CURRENCY", getCurrencybyCountryCode);
countryDetailsMap.set("COUNTRY_CAPITALS", getAllCountriesCapitals);
countryDetailsMap.set("CALLING_CODE", getAllCountriesCallingCode);
countryDetailsMap.set("FLAG", getAllCountriesFlag);
countryDetailsMap.set("LANGUAGES", getAllCountriesLanguages);
countryDetailsMap.set("ISO_CODES", getAllIsoCodes);

module.exports = countryDetailsMap;
