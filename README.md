# Countries Information
---
This package provides the information related the countries.This following informations are:
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
| Method | Description |
| --- | --- |
| getContinentName() | Return the continents of the coutries |
| getCountryCode() | Return the codes of the coutries |
| getCountryTimeZone() | Return the timezones of the coutries |
| getAllCountryStateNames() | Return the states of the coutries |
| getAllCountriesNames() | Return the names of the coutries |
| getAllCountriesLanguages() | Return the languages of the coutries |
| getAllIsoCodes() | Return the iso code of the coutries |
| getAllCountriesFlag() | Return the flags of coutries |
| getAllCountriesCallingCode() | Return the calling codes of the coutries |
| getAllCountriesCapitals() | Return the capitals of coutries |

