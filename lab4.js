var carType= prompt("what your favorite car?","place your type");

while(carType !=='bmw' && carType !=='mercedes' && carType !=='honda' && carType !=='rang rover' && carType !=='ford'
&& carType !=='shefrolat' && carType !=='toyota'){

  userOrder = prompt('please enter the correct item')
}

var carModel= prompt("what your favorite model?");
// var carColor= prompt("what your favorite color?");

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


var userInputs = prompt('how many cars do you want?')

var image=''; 

for(var i = 0; i < userInputs; i++){
  if(carType =='bmw' || 'mercedes' || 'honda' || 'rang rover'){
    image = image + '<img src="https://saudishift.com/wp-content/uploads/2015/10/maxresdefault-6.jpg">'
    console.log(image)
  }else if(carType == 'ford' || 'shefrolat' || 'toyota'){
    image = image + '<img src="https://saudishift.com/wp-content/uploads/2017/01/0150.jpg">'
    console.log(image)
 }
}
document.write(image)







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
         