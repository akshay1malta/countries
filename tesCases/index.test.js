const { getAllCountriesNames, getAllCountriesLanguages } = require("../src/index");
var countriesData = require("../src/countriesData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns all countries languages", () => {
  expect(getAllCountriesLanguages()).toEqual(countriesData.map((country) => {
    return country.languages;
  }));
});
