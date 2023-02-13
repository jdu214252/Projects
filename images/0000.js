import products from "./0000.json" assert{type: "json"};


// for(let i = 0; i < products.length; i++){
//     let user = `<div class = ramka>${products[i].name} </div>`;
// }


// var addAudit = function() {
// 	var elemKod = document.querySelector('.ramka').innerHTML;
// 	var elemOutKod = document.querySelector('.out__kod');

// 	elemOutKod.innerHTML += '<div>' + elemKod + '</div>';
// };

// function out() {
// 	var elem = window.event.EventTarget;
// 	if (elem.className === "btn") {
// 		addAudit();
// 	}
// };

let content = document.querySelector(".content")

for(let i = 0; i < products.length; i++){
    let user = ` 
    <div class = "ramka">
    <div class="imeg1">
        <img src="./images/${products[i].image}" alt="">
    </div>
    <div class="title">
        ${products[i].name}
    </div>
    <div class="price">
        ${products[i].price + "$"}
    </div> 
    <button class="button" onclick="myFunction();">Buy</button>
    </div>`
    
    content.innerHTML += user;

}




function myFunction(){ 
   let out = document.getElementById('OutCod');
    for(let i = 0; i < products.length; i++){
        let user = ` 
        <div class = "ramka">
        <div class="imeg1">
            <img src="./images/${products[i].image}" alt="">
        </div>
        <div class="title">
            ${products[i].name}
        </div>
        <div class="price">
            ${products[i].price + "$"}
        </div> 
        <button class="button" onclick="myFunction();">Buy</button>
        </div>`
        
        out.innerHTML += user;
    
    }
}


let bar= document.querySelector(".out__cod");
for(let i = 0; i < products.length; i++){
    let user = ` 
    <div class="ramkaAll">
    <div class = "ramka1">
    <div class="im"></div>
    <div class="imeg2">
        <img src="./images/${products[i].image}" alt="">
    </div>
    </div>
    <div class = "abouts">
    <div class="title">
        ${products[i].name}
    </div>
    <div class="price">
        ${products[i].price +"$"}
        <button class="buton">xxx</button>
    </div> 
    
    </div>
    </div>`
    
    

    bar.innerHTML += user;
} 
    

