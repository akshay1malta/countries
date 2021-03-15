const { getCountryInfo } = require("../src/index");
const {
  getContinentName,
  getCountryCode,
  getCountryTimeZone,
  getAllCountryStateNames,
  getAllCountriesNames,
  getAllCountriesLanguages,
  getAllIsoCodes,
  getAllCountriesFlag,
  getAllCountriesCallingCode,
  getAllCountriesCapitals,
  getCurrencybyCountryCode,
} = require("../src/functions");
const countriesData = require("../src/countriesData.json");
const countriesLanguageData = require("../src/countriesLanguageData.json");
const countryFlag = require("../src/countryFlags.json");
const countryCallingCodes = require("../src/countryCallingCode.json");
const countryStates = require("../src/countriesState.json");
const currencyData = require("../src/currencyData.json");

describe("Common function related tests", () => {
  it("Returns all countries", () => {
    expect(getCountryInfo({ methodType: "COUNTRY_NAMES" })).toEqual(
      getAllCountriesNames()
    );
  });

  it("Returns Continent", () => {
    expect(
      getCountryInfo({ methodType: "CONTINENT_NAME", attributes: "India" })
    ).toBe(getContinentName("India"));
  });

  it("Returns country code", () => {
    expect(
      getCountryInfo({ methodType: "COUNTRY_CODE", attributes: "India" })
    ).toBe(getCountryCode("India"));
  });

  it("Returns Country time zone", () => {
    expect(
      getCountryInfo({ methodType: "COUNTRY_TIME_ZONE", attributes: "India" })
    ).toBe(getCountryTimeZone("India"));
  });

  it("Returns all states", () => {
    expect(getCountryInfo({ methodType: "COUNTRY_STATE_NAMES" })).toEqual(
      getAllCountryStateNames()
    );
  });

  it("Returns currency code", () => {
    expect(getCountryInfo({ methodType: "CURRENCY", attributes: "USD" })).toBe(
      getCurrencybyCountryCode("USD")
    );
  });

  it("Return all countries with their capitals", () => {
    expect(getCountryInfo({ methodType: "COUNTRY_CAPITALS" })).toEqual(
      getAllCountriesCapitals()
    );
  });

  it("Returns all country codes", () => {
    expect(getCountryInfo({ methodType: "CALLING_CODE" })).toEqual(
      getAllCountriesCallingCode()
    );
  });

  it("Returns all countries flag", () => {
    expect(getCountryInfo({ methodType: "FLAG" })).toEqual(
      getAllCountriesFlag()
    );
  });

  it("Returns all countries languages", () => {
    expect(getCountryInfo({ methodType: "LANGUAGES" })).toEqual(
      getAllCountriesLanguages()
    );
  });

  it("Returns iso codes of countries", () => {
    expect(getCountryInfo({ methodType: "ISO_CODES" })).toEqual(
      getAllIsoCodes()
    );
  });
});
