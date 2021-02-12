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
| getContinentName(Afghanistan) | Return the continents of the coutries |{ "country": "Afghanistan", "continent":"Asia"}|
| getCountryCode() | Return the codes of the coutries | { "country": "Afghanistan", "continent": "Asia"} |

| getCountryTimeZone() | Return the timezones of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountryStateNames() | Return the states of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountriesNames() | Return the names of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountriesLanguages() | Return the languages of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllIsoCodes() | Return the iso code of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountriesFlag() | Return the flags of coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountriesCallingCode() | Return the calling codes of the coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |

| getAllCountriesCapitals() | Return the capitals of coutries |
    {
        "country": "Afghanistan",
        "continent": "Asia"
    } |


