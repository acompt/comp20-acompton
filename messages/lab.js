
function parse() {
	request = new XMLHttpRequest();
	request.open("get", "data.json", true);
	request.onreadystatechange = parseData;
	request.send();

	function parseData() {
		if (request.readyState == 4 && request.status == 200) {
			messagesDiv = document.getElementById("messages");
			converted = JSON.parse(request.responseText);
			for (i = 0; i < converted.length; i++) {
				messagesDiv.innerHTML += "<p>" + converted[i]['content'];
				console.log(messagesDiv.innerHTML);
			}
		}
		if (request.readyState == 4 && request.status != 200) {
			alert("did not load");
		}
	}

}

