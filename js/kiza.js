

  
function myFirstPost(){
  var x = document.getElementById("carthero").childElementCount;

  var node;


  var myNodelist = document.querySelectorAll(".description");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    node = node + myNodelist[i].innerText;
}


  const userId = Math.floor((Math.random() * 10000000000) + 9999999);
  firebase.database().ref().child('orders/' + userId).set({
    time: "exact time",
    food_product : node,
    quantity : x,
    rating : "of course you loved it",
    comments : 'the message was sent like a birthday present'

  });
  console.log('the message was sent like a birthday present');
}