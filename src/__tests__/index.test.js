'use strict';

import validateTarget from '../index';

beforeEach(() => {
	document.body.innerHTML = `
		<nav class="nav">
			<ul class="list">
				<li class="list-item">
					<a href="" class="list-itemLink">Link</a>
				</li>
			</ul>
		</nav>
	`;
});

describe('validateTarget function', () => {
	it('should init the validateTarget function with wrong nodeName parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			className: 'list-itemLink',
			nodeName: 'a'
		});
		expect(result).toBe(false);
	});

	it('should init the validateTarget function with wrong HTML element', () => {
		const result = validateTarget({
			target: document.querySelector('.nav'),
			className: 'list-itemLink',
			nodeName: ['a']
		});
		expect(result).toBe(false);
	});

	it('should init the validateTarget function with correct element', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			className: 'list-itemLink',
			nodeName: ['a']
		});
		expect(result).toBe(true);
	});

	it('should init the validateTarget function with multiple node names parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			className: 'list-itemLink',
			nodeName: ['a', 'li']
		});
		expect(result).toBe(true);
	});
});
