const { getAllCountriesNames, getCurrencybyCountryCode } = require("../src/index");
var countriesData = require("../src/countriesData.json");
const currencyData = require("./currencyData.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});
/** Currency Related Test Cases start **/
test("Returns all currencies", () => {
  const currenCy = 'USD';
  expect(JSON.stringify(getCurrencybyCountryCode(currenCy))).toEqual(JSON.stringify(currencyData[currenCy.toUpperCase()]));
});

/** Currency Related Test Cases end **/