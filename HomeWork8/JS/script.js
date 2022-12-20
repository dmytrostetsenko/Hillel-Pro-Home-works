let obj = {
	a: 'f',
	b: 78,
	c: 'R',
	d: {
	  a: {
		a: null,
		b: 'E',
		c: {
		  a: true,
		  b: 'C',
		  c: 'test'
		},
		d: 'U'
	  },
	  b: {
	   a: 'R',
	   b: ['S', 4, 6, 'I'],
	   c: 0,
	  },
	  c: ['O'],
	  d: null,
	  e: 'N'
	}
}

function findWord (someObject) {
	let lookingWord = '';
	for (let key in someObject) {
		let value = someObject[key];
		if (typeof value === 'string' && value === value.toUpperCase()) {
			lookingWord += value;
		} else if (typeof value === 'object'){
			lookingWord += findWord(value);
		}
	}
	return lookingWord;
}
console.log(findWord(obj));


