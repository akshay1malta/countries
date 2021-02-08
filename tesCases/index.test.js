const { getAllCountriesNames, getAllCountryStateNames } = require("../src/index");
var countriesData = require("../src/countriesData.json");
var countryStates = require("../src/countriesState.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns all states", () => {
  expect(getAllCountryStateNames()).toEqual(countryStates.map((country) => {
    return country.states.map(states => {
      return country.name - states.name;
    })
  }));
});