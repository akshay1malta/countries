const { getAllCountriesNames, getAllCountriesLanguages } = require("../src/index");
const countriesData = require("../src/countriesData.json");
const countriesLanguageData = require("../src/countriesLanguageData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns all countries languages", () => {
  expect(getAllCountriesLanguages()).toEqual(countriesLanguageData.map((country) => {
    return country;
  }));
});
