function BtnOption(data) {
	this.count = data.count;
	this.find = data.find;	
	this.aClass = data.aClass;
	this.divClass = data.divClass;
	this.message = data.message;
	this.showMessage = data.showMessage;
	this.hideMessage = data.hideMessage;
	
	this.action = data.action;
	
	if(this.action) {
		this.controller();
	}
}

BtnOption.prototype.checkInputDatas = function() {
	//count Должен быть числом
	if(typeof(this.count) != "number") {
		console.log("Не правильно введено значение для count, это должно быть число, например: 5");
		return false;
	}
	
	if(typeof(this.find) != "string") {			
		console.log("Не правильно введено значение для find, это должно быть класс написанный строкой, например: newClass");
		return false;
	}
}


	BtnOption.prototype.addClass = function(inputClass, elem) {
		var checkLength = inputClass.length;
		
		//Если массив, то проходимcя по массиву в цикле, если строка то просто добавляем класс к div
		if(checkLength > 0 && typeof(inputClass) != "string") {
			for (var i = 0; i < checkLength; i++) {
				elem.classList.add(inputClass[i]);
			}
		}else if(typeof(inputClass) == "string") {
			elem.classList.add(inputClass);
		}else {
			console.log("Данный формат для divClass не подерживаеться. Введите в виде строки либо массива, 'new class' либо ['new class1', 'new class2']");
			return false;
		}
		
	}

	
	
BtnOption.prototype.createMessage = function(elem) {
	if(this.message == this.hideMessage) {
		this.message = this.showMessage;		
	}else {
		this.message = this.hideMessage;
	}
}

BtnOption.prototype.createElements = function() {
	//Находим элемент с нужным классом
	var find = document.querySelectorAll("." + this.find);

	//Создаем элементы
	for (var i = 0; i < find.length; i++) {
		var div = document.createElement("div");
		var a = document.createElement("a");
		
		a.setAttribute("href", "#");
		
		a.innerHTML = this.message;
		
		this.addClass(this.divClass, div);
		this.addClass(this.aClass, a);
		
		div.appendChild(a);
		find[i].appendChild(div);	
	}	
	
}


BtnOption.prototype.hideElements = function() {
	var find = document.querySelectorAll("." + this.find);
	var count = this.count; 
	

	
	for (var i = 0; i < find.length; i++) {
		
		//Находим все ul с заданными классами которые записываются в this.find
		var findLi = find[i].querySelectorAll("." + this.find + " li");
		//findLi[i].classList.add("toogleChildren");
		
		//Скрываем элементы li в каждом классе
		for (var j = count; j < findLi.length; j++) {
			findLi[j].classList.add("toogleChildren");
		}
		
	}
	
	this.message = this.showMessage;
	
	
}



BtnOption.prototype.toogle = function() {
	var find = document.querySelectorAll("." + this.find);
	
	
	var count = this.count; 

	var hideMessage = this.hideMessage; 
	var showMessage = this.showMessage; 

	
	
	for (var i = 0; i < find.length; i++) {
	
		find[i].onclick =  function(e){
			var target = e.target;	
			if(target.tagName == "A") {
				e.preventDefault();
			}	
			
			//Находим текущий элемент
			var self = this;
			var findAllChildrens = self.querySelectorAll("li");
			var childrensLength = findAllChildrens.length;
			

			
			
			var checkClassA = target.classList.contains("toogle");
			var checkClassDiv = target.parentNode.classList.contains("toogle");
			
			//Если при клике на у элемента или его родителя нету класса toogle, значит это не наш элемент
			if(!checkClassA && !checkClassDiv) {
				return false;
			}
			
			for (var j = count; j < childrensLength; j++) {
				findAllChildrens[j].classList.toggle("toogleChildren");
			}
		
		
			
			var findText = self.querySelector(".toogle a");
			
			if(findText.innerHTML == hideMessage) {
				findText.innerHTML = showMessage;
			}else {
				findText.innerHTML = hideMessage;
			}
			
		};
		
	}	
	
	
}

BtnOption.prototype.controller = function() {
	this.checkInputDatas();
	this.hideElements();
	this.toogle();
	this.createElements();
}



var use = new BtnOption({
	action: true,
	count: 5,
	find: "define5",
	divClass: ["buttons", "directory-button", "toogle"],
	aClass: "yellow-btn",
	showMessage: "Показать весь список",
	hideMessage: "Скрыть весь список"
});	

/*
	action: true --- Запускает скрипт
	action: false --- Удаляет скрипт
	
	count --- Число после которого будет скриваться элементы 
	find  --- Скрипт ищет родителя с этим классом и по нему будет ввести действия, имя класса может быть любим
	divClass  --- Класс для тега div , это может быть как строка с классом, например: divClass: "newClass"  , так и массив с классами, divClass: ["buttons", "directory-button", "toogle"]
	aClass   --- Класс для тега а , это может быть как строка с классом, например: divClass: "newClass"  , так и массив с классами ["btn-yellow", "btn-blue"]
	showMessage  --- Сообющение при скрытом списке
	hideMessage  --- Сообющение при открытом списке
*/

/*
									Многократное использование

	Если нужно чтобы один список исчезал/показывал 10 элементов, а другой 4 нужно просто создать 2 обьекта, например:

	var show10 = new BtnOption({
		action: true,
		count: 10,
		find: "define10",
		divClass: ["buttons", "directory-button", "toogle"],
		aClass: "yellow-btn",
		showMessage: "Показать весь список",
		hideMessage: "Скрыть весь список"
	});
	
	var show4 = new BtnOption({
		action: true,
		count: 10,
		find: "define4",
		divClass: ["buttons", "directory-button", "toogle"],
		aClass: "yellow-btn",
		showMessage: "Показать весь список",
		hideMessage: "Скрыть весь список"
	});	
	
	Разница в названиях переменных(show10, show4), в count (count: 10, count: 4) и в классах по которым будет произведенно действие find(define10, define4)
	
*/






