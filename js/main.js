window.onload = function () {
	let list = document.getElementById('table_of_contents');

	const tableOfContents = [
		{
			label: 'Week 1 Work',
			url: 'week1/'
		}
	];

	for (var i = tableOfContents.length - 1; i >= 0; i--) {
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.textContent = tableOfContents[i].label;
		a.setAttribute('href', tableOfContents[i].url);
		li.append(a);
		list.append(li);
		
	}
}

