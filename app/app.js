$( document ).ready(function() {
    // appendHouse();
    yearIncrease(100000, 12);
    
});


var yearIncrease = function(baseSalary, canBuyHouse) {
  var counter = 0;
  var year = document.getElementById('timekeeper');
  var salary = document.getElementById('salary');
  setInterval(function() {
    if (counter < 31) {
      if (counter === canBuyHouse){
        appendHouse();
      }
      // if (counter === 30){
      //   accumulatedWealth
      // };
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

// var appendAccumulatedWealth = function() {
//   var entity = document.querySelector("a-entity");
//   var retirementMoney =  document.createElement('a-collada-model');
//   houseModel.setAttribute("position", '0 0.1 -3.5');
//   houseModel.setAttribute("scale", '.005 .005 .005');
//   houseModel.setAttribute("src", '#house');
//   entity.appendChild(houseModel);
// }


 // var scene = document.querySelector('a-scene');
 //    var cylinder = document.createElement('a-cylinder');
 //    cylinder.setAttribute('color', '#FF9500');
 //    cylinder.setAttribute('height', '2');
 //    cylinder.setAttribute('radius', '0.75');
 //    cylinder.setAttribute('position', '3 1 0');
 //    scene.appendChild(cylinder);