const { getAllCountriesNames, getAllCountriesFlag } = require("../src/index");
var countriesData = require("../src/countriesData.json");
var countryFlag = require("../src/countryFlags.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns all countries flag", () => {
  expect(getAllCountriesFlag()).toEqual(countryFlag.map((flag) => {
    return flag.name, flag.code, flag.emoji;
  }));
});