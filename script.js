let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];

let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];


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
  default: alert("Язык введен не правильно");
	
}
}
