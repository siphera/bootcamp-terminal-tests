module.exports = function (mostProfitable){
  //console.log(mostProfitable);
  var salesData = {};
  var data = '';
  var highestSales = 0;
    console.log(mostProfitable);
    for(var i=0; i<mostProfitable.length; i++){
       var store = mostProfitable[i].department;

       if(salesData[store] === undefined){
          salesData[store] = 0;
          }
        salesData[store] += mostProfitable[i].sales;
      console.log(salesData);
    }

  	for(var j in salesData) {
     	if (salesData[j] > highestSales) {
          	highestSales = salesData[j];
            data = j;
        }
    }
  return data;
  }
