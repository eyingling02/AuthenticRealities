$( document ).ready(function() {
    // appendHouse();
    yearIncrease(70000, 12, 4735208, 31);

});


var yearIncrease = function(baseSalary, canBuyHouse, accumulatedWealthNumber, canRetire) {
  var counter = 0;
  var year = document.getElementById('timekeeper');
  var salary = document.getElementById('salary');
  setInterval(function() {
    if (counter < 31) {
      if (counter === canBuyHouse){
        appendHouse();
      }
      if (counter === canRetire){
        appendRetirementBadge();
      }
      if (counter === 30){
        appendAccumulatedWealth(accumulatedWealthNumber);
      };
    year.setAttribute("text", "color: red; align: center; width: 6; value: Year "+ counter);
    salary.setAttribute("text", "color: red; align: center; width: 6; value: Salary "+ baseSalary);
    counter++;
    baseSalary = Math.floor(baseSalary * 1.05);

    }
  }, 1000);
}

var appendHouse = function() {
  var entity = document.querySelector("a-entity");
  var houseModel =  document.createElement('a-collada-model');
  houseModel.setAttribute("position", '0 0.1 -3.5');
  houseModel.setAttribute("scale", '.005 .005 .005');
  houseModel.setAttribute("src", '#house');
  entity.appendChild(houseModel);
}

var appendAccumulatedWealth = function(accumulatedWealthNumber) {
  console.log("isthis on?")
  var retirementMoney = $("#accumulated-wealth");
  retirementMoney.replaceWith("<a-entity id='accumulated-wealth' position='0 1 0' scale='2 2 2' rotation='-90 180 180' text='color: purple; align: center; value:" + accumulatedWealthNumber + "; width: 1.5'></a-entity>")
}

var appendRetirementBadge = function() {
  console.log("isthis on?")
  var retirementBadge = $("#retirement-year");
  retirementBadge.replaceWith("<a-circle src='#retirement' position='0 0 -4' radius='.75' rotation='-90 180 180'></a-circle>")
}
