const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const sortedArr = arr.filter(num => num !== -1).sort((a, b) => a - b)

	const resArr = []
	let index = 0

	arr.forEach(num => {
		if (num === -1) {
			resArr.push(num)
		} else {
			resArr.push(sortedArr[index])
			index++
		}
	})

	return resArr
}

module.exports = {
	sortByHeight,
}
