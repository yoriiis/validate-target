/**
 * @param {Object} options
 * @param {HTMLElement} options.target Target element
 * @param {String} options.selectorString Any valid CSS selector string (class, id, attribute) with Element.matches()
 * @param {(String|Array)} options.nodeName List of possible nodes name
 * @returns {Boolean} Is the target valid
 */
export default function validateTarget({ target, selectorString, nodeName }) {
	// If nodeName is a string, transform it in array to reuse the same function
	if (typeof nodeName === 'string') {
		nodeName = [nodeName]
	}

	// Check if at least one of the nodeName is valid
	if (Array.isArray(nodeName) && nodeName.length) {
		return nodeName
			.map((item) => target.nodeName.toLowerCase() === item && target.matches(selectorString))
			.includes(true)
	}
}
