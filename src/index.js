/**
 * @license MIT
 * @name validateTarget
 * @version 2.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Easily validate target of an HTML element especially during event delegation
 * {@link https://github.com/yoriiis/validate-target}
 * @copyright 2020 Joris DANIEL
 **/

/**
 * @param {HTMLElement} target Target element
 * @param {String} selectorString Any valid CSS selector string (class, id, attribute) with Element.matches()
 * @param {String || Array} nodeName List of possible nodes name
 *
 * @returns {Boolean} Is the target valid
 */
module.exports = function validateTarget ({ target, selectorString, nodeName }) {
	// If nodeName is a string, transform it in array to reuse the same function
	if (typeof nodeName === 'string') {
		nodeName = [nodeName];
	}

	// Check if at least one of the nodeName is valid
	if (Array.isArray(nodeName) && nodeName.length) {
		return nodeName
			.map(item => target.nodeName.toLowerCase() === item && target.matches(selectorString))
			.includes(true);
	}
};
