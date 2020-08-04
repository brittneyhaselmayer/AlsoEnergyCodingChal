/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
	{ first: 'Amanda', last: 'Byron', group: 'Sales' },
	{ first: 'Ye', last: 'Xia', group: 'Receiving', nameOrder: 'reverse' },
	{ first: 'Miltiades', last: 'Crescens', group: 'Sales' },
	/*...don't foget to account for other entries of the same form, but with different group names.....*/
];

// Part 2 Answer Here

const func = (arr) => {
	let sorted = {};

	for (let i = 0; i < arr.length; i++) {
		if (!sorted[arr[i].group] && !arr[i].nameOrder) {
			sorted[arr[i].group] = [{ name: arr[i].first + ' ' + arr[i].last }];
		} else if (!sorted[arr[i].group] && arr[i].nameOrder) {
			sorted[arr[i].group] = [{ name: arr[i].last + ' ' + arr[i].first }];
		} else if (sorted[arr[i].group] && arr[i].nameOrder) {
			sorted[arr[i].group].push({
				name: arr[i].last + ' ' + arr[i].first,
			});
		} else {
			sorted[arr[i].group].push({
				name: arr[i].first + ' ' + arr[i].last,
			});
		}
	}
	console.log(sorted);
};

func(employees);
/*****************************************************************************************
 * Bonus
 ****************************************************************************************/

// Bonus Anwser Here
