/**
 * @license MIT
 * @name validateTarget
 * @version 1.0.1
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Easily validate target of an HTML element especially during event delegation
 * {@link https://github.com/yoriiis/validate-target}
 * @copyright 2020 Joris DANIEL
 **/

/**
 * @param {HTMLElement} target Target element
 * @param {String} className Class name
 * @param {Array} nodeName List of possible nodes name
 *
 * @returns {Boolean} Is the target valid
 */
module.exports = function validateTarget ({ target, className, nodeName }) {
	let checkNodeName = false;

	if (Array.isArray(nodeName) && nodeName.length) {
		nodeName.forEach(nodeNameItem => {
			if (
				target.nodeName.toLowerCase() === nodeNameItem &&
				target.classList.contains(className)
			) {
				checkNodeName = true;
			}
		});
	}

	return target && checkNodeName;
};
