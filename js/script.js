

myList= ['patate','zucchine','melenzane','peperoni','latte','pasta','pollo','vitello','maiale', 'pomodori'];


eleList = document.querySelector('#list');
let i = 0;

while (i < myList.length) {
	console.log(myList[i]);
	document.getElementById ('list').innerHTML += (`<li class="color">${myList[i]}</li>`);
    i++;
}


