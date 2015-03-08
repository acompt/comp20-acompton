
function parseData() {
	if (request.readystate == 4 && request.status == 200) {
		messagesDiv = document.getElementById(“messages”)
		converted = JSON.parse(request.responseText);
	}
	for (i = 0; i < converted.length; i++) {
		messagesDiv.innerHTML += <p> + converted[i][‘content’]
		if request.readystate == 4 && request.status != 200
			alert(“hacked”)
	}
}

function parse() {
	Request = new XMLHttpRequest();
	Request.open(“GET”, “messages.json”, true);
	Request.onreadystatechenge = parseData();
	Request.send()
}

