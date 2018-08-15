function searchIt() {
	var text = document.getElementById('searchWordID').value;

	var system = document.getElementById('systems').value;
	if (text != '') { // проверяет валидность данных (избежание пустых строк)

		if (system == 'google') {
			var url = "https://www.google.com/search?as_oq=";
			document.location.href = url+text;
		} else if (system == 'bing') {
			var url = "https://www.bing.com/search?q=";
			document.location.href = url+text;
		} else {
			var url = "https://uk.ask.com/web?q=";
			document.location.href = url+text;
		}
	} else {
		document.getElementById('error').innerHTML="Ввведите данные для поиска"; 
	}
}

/*

https://www.google.com/search?as_oq=
https://uk.ask.com/web?q=
https://www.bing.com/search?q= 

*/
