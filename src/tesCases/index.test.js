const { getAllCountriesNames ,getContinentName} = require("../index");
var countriesData = require("../JSON/countriesData.json");
var continentData = require("../JSON/continentsData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns Continent",()=>{
  expect(getContinentName("Ghana")).toBe("Africa");
})
