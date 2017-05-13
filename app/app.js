$( document ).ready(function() {
    console.log("Still connected");
    test();
    // showShoe();
    setTimeout(function(){ appendShoe(); }, 8000);
});

var test = function() {
  console.log("called");
}

var appendShoe = function() {
  var entity = $("#theentity");
  var shoeModel = "<a-collada-model position='0 0.05 -2.5' scale='.01 .01 .01' src='#shoe' ></a-collada-model>";
  entity.append(shoeModel);

}

var showShoe = function() {
  var shoeModel = $("shoe-model")
  debugger
  shoeModel.setAttribute("visible", true);

}
