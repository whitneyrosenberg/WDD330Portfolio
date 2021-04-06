window.onload = function () {
	let list = document.getElementById('table_of_contents');

	const tableOfContents = [
		{
			label: 'Simon Game - Final Project',
			url: '/WDD330Portfolio/simon/'
		},
		{
			label: 'Week 10 Work',
			url: '/WDD330Portfolio/week10/'
		},
		{
			label: 'Week 9 Work',
			url: '/WDD330Portfolio/week9/'
		},
		{
			label: 'Week 8 Work',
			url: '/WDD330Portfolio/week8/'
		},
		{
			label: 'Week 7 Work',
			url: '/WDD330Portfolio/week7/'
		},
		{
			label: 'Week 6 ToDo App',
			url: '/WDD330Portfolio/todo/'
		},
		{
			label: 'Week 5 Work',
			url: '/WDD330Portfolio/week5/'
		},
		{
			label: 'Week 4 Work',
			url: '/WDD330Portfolio/week4/'
		},
		{
			label: 'Week 3 Work',
			url: '/WDD330Portfolio/week3/'
		},
		{
			label: 'Week 2 Work',
			url: '/WDD330Portfolio/week2/'
		},
		{
			label: 'Week 1 Work',
			url: '/WDD330Portfolio/week1/'
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

