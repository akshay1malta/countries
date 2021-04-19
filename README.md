# Countries Information
---
This package provides the information related the countries.The following informations are:     
* Country name
* Country capital
* Country currency
* Contient
* Language
* Currency
* Flag

---
# Demo
[Demo link](https://stackblitz.com/edit/react-ha9uel)

---

# Installation
`npm i get-all-country-info`

---
# Usage
```javascript
import {
  getAllCountriesNames,
  getAllCountriesCallingCode,
  getAllIsoCodes,
  getCountryInfo
} from "get-all-country-info";

console.log(getAllCountriesNames()) // get all countries name

console.log(getAllCountriesCallingCode()) // get all countries calling code

console.log(getAllIsoCodes()) // get all countries iso code

// To use getCountryInfo pass the following object as parameter

const paramObject = {
  methodType: keyword, // Required Keyword can be found in the Keywords table 
  attributes: empty or country name
}

getCountryInfo(paramObject)

// getCountryInfo function can be implemented in three ways

// 1. Put methodType = Keyword, attributes = empty or country name
// Output = Returns details depending upon the keyword provided in methodType for 
//          a particular country(if attributes value is non-empty) and for all 
//          countries (if attributes value is empty)

const options = {
  methodType: "COUNTRY_NAMES",
  attributes: ""
}
console.log(getCountryInfo(options)) // get all countries name

// 2. Put methodType = array of keywords, attributes = country name
// Output = Returns details depending upon the keyword provided in methodType for a
//          particular country
const options = {
  methodType: ["CONTINENT_NAME", "COUNTRY_CODE"],
  attributes: "India"
}
console.log(getCountryInfo(options)) // get continent and country code of the country

// 3. Put methodType = array of keywords, attributes = empty
// Output = Returns details depending upon the keyword provided in methodType for 
//          a particular country(if attributes value is non-empty) and for all 
//          countries (if attributes value is empty) 
const options = {
  methodType:  ["CONTINENT_NAME", "COUNTRY_CODE"],
  attributes: ""
}
console.log(getCountryInfo(options)) // get all countries code and continent name

// result will be in array format
```

---
<!-- # Keywords
| Keyword | Description | Output
| --- | --- | --- |
| CONTINENT_NAME | Return the continents of the coutries | "Asia" |
| COUNTRY_CODE | Return the codes of the coutries | "IN" |
| COUNTRY_TIME_ZONE | Return the timezones of the coutries | ["America/Aruba"] |
| COUNTRY_NAMES | Return the names of the coutries | ["Andorra", "United Arab Emirates", ...] |
| LANGUAGES | Return the languages of the coutries | [{"name": "Aruba", "languages": [ "Dutch", "English","Papiamento", "Spanish"] }, { "name": "Afghanistan", "languages": [ "Balochi", "Dari", "Pashto", "Turkmenian", "Uzbek"]}] |
| ISO_CODES | Return the iso code of the coutries | ["AD", "AE", ..] |
| FLAG | Return the flags of coutries | ["🇦🇨", "🇦🇩" ..] |
| CALLING_CODE | Return the calling codes of the coutries | ["+93", "+358" ...] |
| COUNTRY_CAPITALS | Return the capitals of coutries |[{ "country": "Afghanistan", "capital": "Kabul" }, { "country": "Albania", "capital": "Tirana" }, ...] |
| CURRENCY | Return the information about currency of particular country | {symbol: '$', name: 'US Dollar', symbol_native: '$', decimal_digits: 2, rounding: 0, code: 'USD', name_plural: 'US dollars'} |
| COUNTRY_STATE_NAMES | Return the states of the coutries | [{"country": "Afghanistan", "states": [ "Badakhshan", "Badghis", "Baghlan", ...]}, {"country": "Albania", "states": ["Berat", "Dibres", "Durres",...]}] |

--- -->
# Methods
| Method | Description | Output
| --- | --- | --- |
| getContinentName("India") | Return the continents of the coutries | "Asia" |
| getCountryCode("India") | Return the codes of the coutries | "IN" |
| getCountryTimeZone("Aruba") | Return the timezones of the coutries | ["America/Aruba"] |
| getAllCountriesNames() | Return the names of the coutries | ["Andorra", "United Arab Emirates", ...] |
| getAllCountriesLanguages() | Return the languages of the coutries | [{"name": "Aruba", "languages": [ "Dutch", "English","Papiamento", "Spanish"] }, { "name": "Afghanistan", "languages": [ "Balochi", "Dari", "Pashto", "Turkmenian", "Uzbek"]}] |
| getAllIsoCodes() | Return the iso code of the coutries | ["AD", "AE", ..] |
| getAllCountriesFlag() | Return the flags of coutries | ["🇦🇨", "🇦🇩" ..] |
| getAllCountriesCallingCode() | Return the calling codes of the coutries | ["+93", "+358" ...] |
| getAllCountriesCapitals() | Return the capitals of coutries |[{ "country": "Afghanistan", "capital": "Kabul" }, { "country": "Albania", "capital": "Tirana" }, ...] |
| getCurrencybyCountryCode("USD") | Return the information about currency of particular country | {symbol: '$', name: 'US Dollar', symbol_native: '$', decimal_digits: 2, rounding: 0, code: 'USD', name_plural: 'US dollars'} |
| getAllCountryStateNames() | Return the states of the coutries | [{"country": "Afghanistan", "states": [ "Badakhshan", "Badghis", "Baghlan", ...]}, {"country": "Albania", "states": ["Berat", "Dibres", "Durres",...]}] |
| getCountryByCode("+91-7976411430") | Pass the mobile number with country code and it returns the country information | {"name": "India", "dial_code": "+91", "code": "IN" } |
| getCountryInfo(paramObject) | const paramObject = {methodType: keyword, (keywords can be string or array, keyword values are: CONTINENT_NAME, COUNTRY_CODE, COUNTRY_TIME_ZONE, COUNTRY_NAMES, LANGUAGES, ISO_CODES, FLAG, CALLING_CODE, COUNTRY_CAPITALS, CURRENCY, COUNTRY_STATE_NAMES) attributes: empty or country name} | returns according to the parameters |
