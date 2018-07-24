
module.exports = function (regNumber,locIndicator){
  var result = regNumber.endsWith(locIndicator)
  return result
};
