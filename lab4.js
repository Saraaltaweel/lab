
var carType= prompt("what your favorite car?");
var carModel= prompt("what your favorite model?");
var carColor= prompt("what your favorite color?");

var orderDetails;

if(carModel<=2019 && carModel>=2017){
orderDetails="you have 20% discount";
}

else if(carModel<=2010){
    orderDetails="you have 50% discount";
}
 else{
    orderDetails="you have 10% discount";
}

document.write(orderDetails)
document.getElementById("car").innerText=carType


        function bluefunction() {
          document.body.style.backgroundColor="blue";
        }
        function redfunction() {
            document.body.style.backgroundColor="red";
          }
          function blackfunction() {
            document.body.style.backgroundColor="black";
          }
          function greenfunction() {
            document.body.style.backgroundColor="green";
          }
          function yallowfunction() {
            document.body.style.backgroundColor="yallow";
          }
          function whitefunction() {
            document.body.style.backgroundColor="white";
          }
          function grayfunction() {
            document.body.style.backgroundColor="gray";
          }
         