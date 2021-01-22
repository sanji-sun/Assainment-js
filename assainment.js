
function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}

var result = kilometerToMeter(80);
console.log(result);


function budgetCalculator(watch, mobile, laptop){
    var watchprice = 50*watch;
    var  mobileprice = 100*mobile;
    var laptopprice = 500*laptop;
    var totalbudget = (watchprice+mobileprice+laptopprice);
    return totalbudget;
}

  var numberOfItems = budgetCalculator (2, 6, 3);
  console.log("Total product cost is=",numberOfItems );




  function hotelCost(days){
       let totalCost = 0;
       if (days <= 10 ){
           totalCost = days*100
       } 
       else if (days < 20) {
           var firstTen = 10*100;
           var remaining = days - 10;
           var secendTen = remaining*80;
           totalCost = firstTen+ secendTen;
       }
       else {
           let firstTen = 10*100;
           let secendTen = 10*80;
           let remaining = days - 20;
           let thirdpart = remaining*50;
           totalCost = firstTen+secendTen+thirdpart
       }
       return totalCost;
  }

  var totalHotelCost = hotelCost(18);
  console.log("total Hotelcost is", totalHotelCost);





   // 4. megafriend Find Arrey to Longest word //

   function megaFriend(friendsName) {

    let maxWord = "";
    for (let i=0; i<friendsName.length; i++){
        if (friendsName[i].length> maxWord.length){
            maxWord= friendsName[i];
        }
}
       return maxWord;
   }

   var longestWord = megaFriend(["Lima", "Asha","Aporajita", "Sushmee", "Tasneem", "Miriyam", "pusku","Tushi"])
   console.log(longestWord);