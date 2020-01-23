/**
 * Validate target utils function
 *
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
