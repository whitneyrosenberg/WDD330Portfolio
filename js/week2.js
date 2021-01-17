window.onload = function () {
	let list = document.getElementById('week2_reserved_words');

	const reservedWords = ["abstract", "await", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", 'if', 'implements', 'import', 'in instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'volatile', 'void', 'while', 'with', 'yield'];

	for (var i = reservedWords.length - 1; i >= 0; i--) {
		let li = document.createElement('li');
		li.textContent = reservedWords[i];
		list.append(li);
	}
}

