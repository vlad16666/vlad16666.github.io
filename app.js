let tg = window.Telegram.WebApp;
tg.extand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


let item = "";
let bnt1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
let bnt3 = document.getElementById("btn3");
let bnt4 = document.getElementById("btn4");
let bnt5 = document.getElementById("btn5");
let bnt6 = document.getElementById("btn6");

btn1.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = 1;
		tg.MainButton.show();
	}
})
btn2.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = 2;
		tg.MainButton.show();
	}
})
btn3.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = 3;
		tg.MainButton.show();
	}
})
btn4.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = 4;
		tg.MainButton.show();
	}
})
btn5.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = 5;
		tg.MainButton.show();
	}
})
btn6.addEventLictener("click", function(){
	if(tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = 6;
		tg.MainButton.show();
	}
})


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

usercard.appendChild(p);
