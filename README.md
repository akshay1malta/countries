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
  getAllIsoCodes
} from "get-all-country-info";

console.log(getAllCountriesNames()) // get all countries name

console.log(getAllCountriesCallingCode()) // get all countries calling code

console.log(getAllIsoCodes()) // get all countries iso code

// result will be in array format
```
---
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


