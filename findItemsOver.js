module.exports = function (items, threshold){
var list = [];
 console.log(list);
    for (var i=0; i<items.length;i++){
      var listItem = items[i];
      //console.log(over20);
      if (listItem.qty > threshold){
         list.push(listItem);
        console.log(list);
      }
    }
    return list;
  };
