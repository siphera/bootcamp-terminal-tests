module.exports = function (regNum) {

  var paarlRegNum = regNum.split(", ");
  var reglstartsWithCJ = [];
  //console.log(regNum)

  for (var i = 0; i < paarlRegNum.length; i++) {

    if (paarlRegNum[i].startsWith("CJ")) {

      reglstartsWithCJ.push(paarlRegNum[i])

    };
  };
  return reglstartsWithCJ.length;
};
