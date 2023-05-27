import validateTarget from '../src/index.js'

beforeEach(() => {
	document.body.innerHTML = `
		<nav class="nav">
			<ul class="list">
				<li class="list-item">
					<a href="" class="list-itemLink" id="link" data-link>Link</a>
				</li>
			</ul>
		</nav>
	`
})

describe('validateTarget function', () => {
	it('should init the validateTarget function with string nodeName parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '.list-itemLink',
			nodeName: 'a'
		})
		expect(result).toBe(true)
	})

	it('should init the validateTarget function with wrong HTML element', () => {
		const result = validateTarget({
			target: document.querySelector('.nav'),
			selectorString: '.list-itemLink',
			nodeName: 'a'
		})
		expect(result).toBe(false)
	})

	it('should init the validateTarget function with array nodeName parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '.list-itemLink',
			nodeName: 'a'
		})
		expect(result).toBe(true)
	})

	it('should init the validateTarget function with data attribute element', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '[data-link]',
			nodeName: 'a'
		})
		expect(result).toBe(true)
	})

	it('should init the validateTarget function with id element', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '#link',
			nodeName: 'a'
		})
		expect(result).toBe(true)
	})

	it('should init the validateTarget function with multiple nodeName parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '.list-itemLink',
			nodeName: ['a', 'li']
		})
		expect(result).toBe(true)
	})

	it('should init the validateTarget function with empty nodeName parameter', () => {
		const result = validateTarget({
			target: document.querySelector('.list-itemLink'),
			selectorString: '[data-link]',
			nodeName: []
		})
		expect(result).toBe(false)
	})
})
