const { getAllCountriesNames, getCountryFlag } = require("../src/index");
var countriesData = require("../src/countriesData.json");
var countryFlag = require("../src/countryFlags.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns country flag", () => {
  const countryName = "India";
  const countryFlag = "🇮🇳";
  expect(getCountryFlag(countryName)).toBe(countryFlag)
})