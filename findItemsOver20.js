module.exports = function (threshold){
var list = [];

    for (var i=0; i<threshold.length;i++){
      var over20 = threshold[i];
      //console.log(over20);
      if (over20.qty > 20){
         list.push(over20);
        console.log(list);
      }
    }
    return list;
  };
