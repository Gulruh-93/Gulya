$(document).ready(function(){
	for(var i =0; i < 10; i++){
		var tr = $('<tr>');
	
		var td = $('<td>');
		var rnaNumVar = getRandomInt(100);
		td.text(rnaNumVar);
		tr.append(td);
		
		var td2 = $('<td>');
		var rnaNumVar = getRandomInt(100);
		td2.text(rnaNumVar);
		tr.append(td2);
		
		var td2 = $('<td>');
		var rnaNumVar = getRandomInt(100);
		td2.text(rnaNumVar);
		tr.append(td2);
		
		var td2 = $('<td>');
		var rnaNumVar = getRandomInt(100);
		td2.text(rnaNumVar);
		tr.append(td2);
		
		var td2 = $('<td>');
		var rnaNumVar = getRandomInt(100);
		td2.text(rnaNumVar);
		tr.append(td2);

		
		$('table').append(tr);
	}
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randElement(items){
	return items[Math.floor(Math.random() * items.length)];
}

function init(){ 
var namesObjMagic = [];
var names = ['Alice', 'Grace', 'Jane'];
var totalAge = 0;

var rowCount = 10;
for(var i = 0; i <rowCount ; i++) {
	var tr = $('<tr>');
	
	var tdName = $('<td>');
	var name = randElement(names);
	tdName.text(name);
	tr.append(tdName);
	AddorGrowUp(namesObjMagic,name);
	
	var tdAge = tdWithRandNumb(15,35);
	tr.append(tdAge);
	var age = tdAge.text()-0;
	totalAge = totalAge + age;
	
	var tdHeight = tdWithRandNumb(150,200);
	tr.append(tdHeight);
	
	var tdWeight = tdWithRandNumb(40, 100);
			tr.append(tdWeight);
			
			var tdIndex  = $('<td>');
			var weight = tdWeight.text() - 0;
			var height = (tdHeight.text() - 0) / 100;
			var index = Math.round(weight / (height * height));
			tdIndex.text(index);
			tr.append(tdIndex);
			
				$('table').append(tr);	
		}
		
		var totalRow = $("<tr>");
		
		namesObjMagic = namesObjMagic.sort(function (a, b){
			return b.count - a.count;
		});
		
		var tdTotalName = $("<td>");
		tdTotalName.text(namesObjMagic[0].name);
		totalRow.append(tdTotalName);
		
		
		var tdTotalAge = $("<td>");
		tdTotalAge.text(totalAge / rowCount);
		totalRow.append(tdTotalAge);
		
		$('table').append(totalRow);	
	}
	
	function AddOrGrowUp(names, someStr){
		var magicNameAndCount = names.find(function (item){
			return item.name == someStr;
		});
		
		if (!magicNameAndCount){
			magicNameAndCount = {
				name: someStr,
				count: 1 
			};
			names.push(magicNameAndCount);
		}else{
			magicNameAndCount.count++;
		}
	}
	
	function tdWithRandNumb(min, max){
		var td  = $('<td>');
		var randomInt = randomInteger(min, max);
		td.text(randomInt);
		return td;
	}
	
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
	
	


	