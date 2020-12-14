const { getAllCountriesNames } = require("../src/index");
var countriesData = require("../src/countriesData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});
