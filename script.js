// script.js
document.addEventListener("DOMContentLoaded", () => {
	const input = document.getElementById("input");
	const send = document.getElementById("send");
	const chatbody = document.getElementById("chatbody");

	function userMessage(msg) {
		const div = document.createElement("div");
		div.classList.add("user");
		div.innerHTML = msg;
		chatbody.appendChild(div);
	}

	function botMessage(msg) {
		const div = document.createElement("div");
		div.classList.add("bot");
		div.innerHTML = msg;
		chatbody.appendChild(div);
	}

	function getResponse() {
		let user_input = input.value.trim();
		if (user_input) {
			userMessage(user_input);
			input.value = "";
			fetch("/get?msg=" + user_input)
			.then(res => res.text())
			.then(data => botMessage(data));
		}
	}

	send.addEventListener("click", getResponse);
	input.addEventListener("keyup", e => {
		if (e.keyCode === 13) {
			getResponse();
		}
	});