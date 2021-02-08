const { getAllCountriesNames, getAllCountriesLanguages, getAllIsoCodes, getAllCountriesFlag, getAllCountriesCallingCode, getAllCountriesCapitals, getCurrencybyCountryCode } = require("../src/index");
const currencyData = require("../src/currencyData.json");
const countriesData = require("../src/countriesData.json");
const countriesLanguageData = require("../src/countriesLanguageData.json");
const countryFlag = require("../src/countryFlags.json");
const countryCallingCodes = require("../src/countryCallingCode.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

/** Currency Related Test Cases start **/
describe("Currency related tests", () => {
  it('Get Currency Data test', () => {
    const currenCy = 'USD';
    expect(JSON.stringify(getCurrencybyCountryCode(currenCy))).toEqual(JSON.stringify(currencyData[currenCy.toUpperCase()]));
  })

  it('Case insensitive get Currency Test', () => {
    const currenCy = 'uSd';
    expect(JSON.stringify(getCurrencybyCountryCode(currenCy))).toEqual(JSON.stringify(currencyData[currenCy.toUpperCase()]));
  })

  it('Negative Currency Test', () => {
    const falsycurrency = 'ud';
    const actualCurrency = 'USD'
    expect(JSON.stringify(getCurrencybyCountryCode(actualCurrency))).not.toBe(JSON.stringify(currencyData[falsycurrency.toUpperCase()]));
  })
});
/** Currency Related Test Cases end **/


describe("Return all countries with their capitals", () => {
  it('country with capitals', () => {
    const data = getAllCountriesCapitals();
    expect(data[0].country).toEqual("Afghanistan");
    expect(data[0].capital).toEqual("Kabul");
  })

})

test("Returns all country codes", () => {
  expect(getAllCountriesCallingCode()).toEqual(countryCallingCodes.map((country) => {
    return country.dial_code;
  }));
});
test("Returns all countries flag", () => {
  expect(getAllCountriesFlag()).toEqual(countryFlag.map((flag) => {
    return flag.name, flag.code, flag.emoji;
  }));
});
test("Returns all countries languages", () => {
  expect(getAllCountriesLanguages()).toEqual(countriesLanguageData.map((country) => {
    return country;
  }));
});

test("Returns iso codes of countries", () => {
  expect(getAllIsoCodes()).toEqual(countriesData.map((country) => {
    return country.code;
  }));
});
