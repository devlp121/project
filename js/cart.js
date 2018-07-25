
var lat;
var lon;

function reviewPost(){
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
        if (user) {
          
    
    var nameValue = document.getElementById("cf-name").value;
    var subjectValue = document.getElementById("cf-subject").value;
    var messageValue = document.getElementById("cf-message").value;

    firebase.database().ref().child('reviews/' + nameValue).set({
      Order: nameValue,
      Subject : subjectValue,
      comments : messageValue,
   });
    console.log('the message was sent like a birthday present');
  }
    });  
}
    

window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      lat = startPos.coords.latitude;
      lon= startPos.coords.longitude;
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };


function myFirstPost(){
    


  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
    if (user) {
      var email = user.email;
      var uid = user.uid;
      var x = document.getElementById("carthero").childElementCount;



  
    var node;
  
  
    var myNodelist = document.querySelectorAll(".description");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      node = node + myNodelist[i].innerText;
  }
  
      firebase.database().ref().child('orders/' + uid).set({
        Order: email,
        food_product : node,
        quantity : x,
        comments : "",
        latitude: lat.toString(),
        longitude: lon.toString()
    
      });
      console.log('the message was sent like a birthday present');


    }
      
    
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
  });  
  
    }

function cartRemover(){
    const prod   = document.querySelector('#carthero');

    var x = document.getElementById("carthero").childElementCount;

    if(x >1){
    prod.removeChild(prod.lastChild);

    document.getElementById('shoppingdetail').innerText= x;
    }
    else{
        x = 0;
        document.getElementById('shoppingdetail').innerText= x;
    }
}

function removeNode(){
    const deletProd = document.querySelector(".item").childElementCount;

    deletProd.removeNode();

    
}
function pizzaAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("piz");
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/pizzaicon.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Pizza";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Margherita";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    buttonQuan.setAttribute('onClick', 'removeNode()')
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$12";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}

function tatoAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/tater-tots.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Tato tots";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Potato";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$454";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}

function tacosAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/tacos-icon.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Tacos";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Beef";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$24";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}

function burgerAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/burger-icon.png');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Burger";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Cheese";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$24";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}

function ribsAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/ribs-icon.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Ribs";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Pork";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$24";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}

function fdipAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/fdip.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Famous French Dip";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Fries";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$24";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}
  
function pastaAdder (){
    const cartDom       = document.querySelector('#carthero');

    const itemDiv       = document.createElement('div');
    itemDiv.classList.add("item");

    cartDom.appendChild(itemDiv);

    const buttonerdiv   = document.createElement('div');
    buttonerdiv.classList.add('buttoner');
    itemDiv.appendChild(buttonerdiv);

    const delbut        = document.createElement('span');
    delbut.classList.add("delete-btner");
    const likebut       = document.createElement('span');
    likebut.classList.add("like-btner");

    buttonerdiv.appendChild(delbut);
    buttonerdiv.appendChild(likebut);

    const imgDiv        = document.createElement('div');
    imgDiv.classList.add('image');
    itemDiv.appendChild(imgDiv);

    const imgCont        = document.createElement('img');
    imgCont.setAttribute('src', './assets/pesto.jpg');
    imgDiv.appendChild(imgCont);

    const descDiv        = document.createElement('div');
    descDiv.classList.add('description');
    itemDiv.appendChild(descDiv);

    const firstSpanCon        = document.createElement('span');
    firstSpanCon.textContent  = "Chicken Pasta";
    const secSpanCon        = document.createElement('span');
    secSpanCon.textContent  = "Creamy Pesto";
    const thirdSpanCon        = document.createElement('span');
    thirdSpanCon.textContent  = "";
    descDiv.appendChild(firstSpanCon);
    descDiv.appendChild(secSpanCon);
    descDiv.appendChild(thirdSpanCon);

    const quanDiv        = document.createElement('div');
    quanDiv.classList.add("quantity");
    itemDiv.appendChild(quanDiv);

    const buttonQuan        = document.createElement('button');
    buttonQuan.classList.add("plus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(buttonQuan);

    const btnimgCont        = document.createElement('img');
    btnimgCont.setAttribute('src', './assets/plus.svg');
    buttonQuan.appendChild(btnimgCont);

    const inputQuan        = document.createElement('input');
    inputQuan.setAttribute('type', 'text');
    inputQuan.setAttribute('name', 'name');
    inputQuan.setAttribute('value', '1');
    inputQuan.setAttribute('id', 'counter');
    quanDiv.appendChild(inputQuan);


    const msbuttonQuan        = document.createElement('button');
    msbuttonQuan.classList.add("minus-btner");
    buttonQuan.setAttribute('type', 'button');
    buttonQuan.setAttribute('name', 'button');
    quanDiv.appendChild(msbuttonQuan);

    const msimgCont        = document.createElement('img');
    msimgCont.setAttribute('src', './assets/minus.svg');
    msbuttonQuan.appendChild(msimgCont);

    const priceDiv        = document.createElement('div');
    priceDiv.classList.add("total-price");
    priceDiv.textContent = "$24";
    itemDiv.appendChild(priceDiv);

    var x = document.getElementById("carthero").childElementCount;
    if (x >= 1){
        document.getElementById('shoppingdetail').innerText= x;
    }

}
