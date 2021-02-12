const { getAllCountriesNames,getCountryCode, getAllCountriesLanguages, getAllIsoCodes, getAllCountriesFlag, getAllCountriesCallingCode, getAllCountriesCapitals, getContinentName, getCountryTimeZone ,getcountriesFlag} = require("../src/index");
const countriesData = require("../src/countriesData.json");
const countriesLanguageData = require("../src/countriesLanguageData.json");
const countryFlag = require("../src/countryFlags.json");
const countryCallingCodes = require("../src/countryCallingCode.json");

test("Returns all countries", () => {
  expect(getAllCountriesNames()).toEqual(countriesData.map((country) => {
    return country.name;
  }));
});

test("Returns Continent",()=>{
  expect(getContinentName("India")).toBe("Asia");
})

test("Returns country code", () => {
  const countryName = "India";
  const countrycode = "IN";
  expect(getCountryCode(countryName)).toBe(countrycode)
})

test("Returns Country time zone",()=>{
  const countryName="Aruba";
  const timezone="America/Aruba";
  expect(getCountryTimeZone(countryName)).toBe(timezone)
})

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
