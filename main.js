const result = document.getElementById('result');
const passLength = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const btn = document.querySelector('.btn-result');
const copyBtn = document.getElementById('copy');

passLength.onchange = function (e) {
	if (e.target.value < 4) {
		e.target.value = 4;
	} else if (e.target.value > 25) {
		e.target.value = 25;
	}
}
const getFunc = {
	1: getLower,
	2: getUpper,
	3: getNumber,
	4: getSymbol,
}
function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getSymbol() {
	const symbols = '!@#$%^&*()[]{}'
	return symbols[Math.floor(Math.random() * symbols.length)]
}

function createPassword() {
	const length1 = +passLength.value;
	const uppercase1 = uppercase.checked;
	const numbers1 = numbers.checked;
	const symbols1 = symbols.checked;
	let finalStr = '';
	const arr = [1];

	if (uppercase1) {
		arr.push(2);
	}
	if (numbers1) {
		arr.push(3);
	}
	if (symbols1) {
		arr.push(4);
	}
	for (let i = 0; i < length1; i++) {
		const num = arr[Math.floor(Math.random() * arr.length)]
		finalStr = finalStr + getFunc[num]();
	}
	return finalStr;
}

btn.addEventListener('click', (e) => {
	result.innerHTML = createPassword();
})
copyBtn.addEventListener('click', (e) => {
	const textarea = document.createElement('textarea');
	const pass = result.innerText;

	if (!pass) {
		return
	} else {
		textarea.value = pass;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		alert("Copied!");
	}
})