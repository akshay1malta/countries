"use strict";

const countryDetailsMap = require("./map.js");

exports.getCountryInfo = (options) => {
  const { methodType, attributes } = options;
  const FunctionFactory = countryDetailsMap.get(methodType);
  return FunctionFactory(attributes);
};
