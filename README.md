# validateTarget

[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/yoriiis/validate-target/build.yml?branch=main&style=for-the-badge)](https://github.com/yoriiis/validate-target/actions/workflows/build.yml) [![Coverage Status](https://img.shields.io/coveralls/github/yoriiis/validate-target?style=for-the-badge)](https://coveralls.io/github/yoriiis/validate-target?branch=main)

`validate-target` is a minimalist script to easily validate target of an HTML element especially during event delegation. Event delegation is advised for better performance, read [MDN documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation) for more information.

No needs to check `nodeName` or `className` properties, the function return directly a boolean when the target is correct.

The target can have multiple node name if element shares common code. The function use [Element.matches](https://developer.mozilla.org/fr/docs/Web/API/Element/matches) to ensure `selectorString` match the target.

## Installation

The library is available as the `validate-target` package name on [npm](https://www.npmjs.com/package/validate-target) and [Github](https://github.com/yoriiis/validate-target).

```bash
npm install validate-target --save-dev
```

```bash
yarn add validate-target --dev
```

> **Warning** validate-target@3 is ESM.
>
> **Note** Minimum supported `Node.js` version is `16.20.0`.

## Usage

### Basic usage

The following example returns `true` because the `nodeName` and `selectorString` properties match.

```html
<a href="" class="itemLink">Link</a>
```

```javascript
validateTarget({
  target: document.querySelector('.itemLink'),
  selectorString: '.itemLink',
  nodeName: 'a'
});
```

### Multiple node names

The following example returns `true` because `button` is a matched value for `nodeName` and `selectorString`.

```html
<a href="" class="itemLink">Link</a> <button class="itemButton">Button</button>
```

```javascript
validateTarget({
  target: document.querySelector('.itemLink'),
  selectorString: '.itemLink',
  nodeName: ['button', 'a']
});
```

### Event delegation

The following example creates a click event listener on the `nav` element and intercepts click events on the `itemLink` element.

```html
<nav class="nav">
  <ul>
    <li>
      <a href="" class="itemLink">Link</a>
    </li>
    <li>
      <a href="" class="itemLink">Link</a>
    </li>
    <li>
      <a href="" class="itemLink">Link</a>
    </li>
  </ul>
</nav>
```

```javascript
document.querySelector('.nav').addEventListener('click', (e) => {
  const validateTargetLinkClick = validateTarget({
    target: e.target,
    selectorString: '.itemLink',
    nodeName: 'a'
  });

  if (validateTargetLinkClick) {
    console.log('Link is clicked.');
  }
});
```

## Parameters

### `target`

Type:

```ts
type target = HTMLElement;
```

Tells to the function the target element.

### `selectorString`

Type:

```ts
type target = string;
```

Tells the function the selector string of the target element. Can be any valid CSS selector (class, id, attribute, etc.). The function uses the `Element.matches` function.

### `nodeName`

Type:

```ts
type target = string | string[];
```

Tells the function the node names. The order of the parameters in the array does not matter.

## License

`validate-target` is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
