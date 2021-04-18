"use strict";

exports.getFilteredObj = (methodType, filterObj) => {
  let newObj = {};
  for (let item of methodType) {
    newObj[item.toLowerCase()] = filterObj[item.toLowerCase()];
  }
  return newObj;
};