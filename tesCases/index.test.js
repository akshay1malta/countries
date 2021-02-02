const { getAllCountriesNames } = require("../src/index");
const { getAllCountriesCapitals } = require("../src/index");
var countriesData = require("../src/countriesData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});


describe("Return all countries with their capitals", () => {
  it('country with capitals', () => {
    const data = getAllCountriesCapitals();
    expect(data[0].country).toEqual("Afghanistan");
    expect(data[0].capital).toEqual("Kabul");
  })

})
