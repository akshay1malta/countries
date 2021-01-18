const { getAllCountriesNames, getAllCountriesCallingCode } = require("../src/index");
var countriesData = require("../src/countriesData.json");
var countryCallingCodes = require("../src/countryCallingCode.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns all country codes", () => {
  expect(getAllCountriesCallingCode()).toEqual(countryCallingCodes.map((country) => {
    return country.dial_code;
  }));
});