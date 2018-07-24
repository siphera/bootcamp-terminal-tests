module.exports = function (regNum, sepRegNum) {
  var sepList = regNum.split(",");
  var allTown = [];
  for (var i = 0; i < sepList.length; i++) {
    if (sepList[i].startsWith(sepRegNum)) {
      allTown.push(sepList[i].trim());
    }
  }
  console.log(allTown);
  return allTown.length;
}
