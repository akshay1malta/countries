"use strict";

const countryDetailsMap = require("./map.js");

const getCountryInfo = (options) => {
  const { methodType, attributes } = options;
  const FunctionFactory = countryDetailsMap.get(methodType);
  return FunctionFactory(attributes);
};

console.log(
  "Data:",
  getCountryInfo({ methodType: "COUNTRY_NAMES", attributes: "india" })
);
