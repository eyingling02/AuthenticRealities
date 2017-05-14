$( document ).ready(function() {
    yearIncrease();
    appendShoe();
});

var yearIncrease = function() {
  var counter = 0;
  var color = document.getElementById('assets');
  setInterval(function() {
    if (counter < 35) {
    color.setAttribute("text", "color: red; align: center; width: 6; value: "+ counter);
    counter++;
    }
  }, 1000);
}

var appendShoe = function() {
  var entity = $("#assets");
  var shoeModel = "<a-collada-model position='0 0.05 -2.5' scale='.01 .01 .01' src='#shoe' ></a-collada-model>";
  entity.append(shoeModel);
}
