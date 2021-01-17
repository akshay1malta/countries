const { getAllCountriesNames, getcountriesFlag ,getContinentName} = require("../src/index");
var countriesData = require("../src/JSON/countriesData.json");
var countryFlag = require("../src/JSON/countryFlags.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns country flag", () => {
  const countryName = "India";
  const countryFlag = "🇮🇳";
  expect(getcountriesFlag(countryName)).toBe(countryFlag)
})

test("Returns Continent",()=>{
  expect(getContinentName("India")).toBe("Asia");
})

test("Returns country code", () => {
  const countryName = "India";
  const countrycode = "IN";
  expect(getcountriesFlag(countryName)).toBe(countrycode)
})