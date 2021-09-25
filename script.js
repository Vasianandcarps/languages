let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понед≥лок", "в≥второк", "середа", "четвер", "п'€тниц€", "субота", "нед≥л€"];
let ru = ["понедельник", "вторник", "среда", "четверг", "п€тница", "суббота", "воскресенье"];
let n=prompt("Input number from 1 to 7")
if (n!=NaN){
	let lang=prompt("Input language en ru ua")
switch (lang) {
  case "en": 
    alert(en [(n-1)])
    break;
  case "ru":
		alert(ru [(n-1)])
		break;
  case "ua":
		alert(ua [(n-1)])
		break;
  default: alert("язык введен не правильльно");
	
}
}