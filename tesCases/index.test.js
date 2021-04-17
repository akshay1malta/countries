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
  getCountryByCode
} = require("../src/functions");
const testData = require("../src/test.json");

describe("Common function related tests", () => {
  it("Returns paticular country data", () => {
    expect(
      getCountryInfo({
        methodType: ["CURRENCY", "LANGUAGES"],
        attributes: "Palestine",
      })
    ).toEqual({
      currency: "ILS",
      languages: ["ar"],
    });
  });

  it("Returns paticular data for all countries", () => {
    expect(
      getCountryInfo({
        methodType: [
          "COUNTRY_NAME",
          "CAPITAL",
          "CONTINENT_NAME",
          "CURRENCY",
          "LANGUAGES",
        ],
        attributes: "",
      })
    ).toEqual(
      testData.map((data) => {
        return data;
      })
    );
  });

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

/** Country Code Test Cases start **/
describe("country code related tests", () => {
  it('Get country information', () => {
    const countryObj = {
      "name": "India",
      "dial_code": "+91",
      "code": "IN"
    };
    const mobileNumber = "+91-7976411430";
    expect(getCountryByCode(mobileNumber)).toEqual(countryObj)
  })

  it('Negative country information Test', () => {
    const countryObj = {}
    const mobileNumber = "7976411430";
    expect(getCountryByCode(mobileNumber)).toEqual(countryObj)
  })

  it('Negative country information number Test', () => {
    const countryObj = {}
    const mobileNumber = 7976411430;
    expect(getCountryByCode(mobileNumber)).toEqual(countryObj)
  })
});
/** Country Code Test Cases end **/