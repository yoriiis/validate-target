# validateTarget

![validateTarget](https://img.shields.io/badge/validate--target-v2.0.0-546e7a.svg?style=for-the-badge) [![TravisCI](https://img.shields.io/travis/com/yoriiis/validate-target/master?style=for-the-badge)](https://travis-ci.com/yoriiis/validate-target) [![Coverage Status](https://img.shields.io/coveralls/github/yoriiis/validate-target?style=for-the-badge)](https://coveralls.io/github/yoriiis/validate-target?branch=master) ![Node.js](https://img.shields.io/node/v/validate-target?style=for-the-badge) [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/validate-target?style=for-the-badge)](https://bundlephobia.com/result?p=validate-target@latest)

`validateTarget` is a minimalist script to easily validate target of an HTML element especially during event delegation. Event delegation is advised for better performance, read [MDN documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation) for more information.

No needs to check `nodeName` or `className` properties, the function return directly a boolean when the target is correct.

The target can have multiple node name if element shares common code. The function use [Element.matches](https://developer.mozilla.org/fr/docs/Web/API/Element/matches) to ensure `selectorString` match the target.

## Installation

The function is available as the `validate-target` package name on [npm](https://www.npmjs.com/package/validate-target) and [Github](https://github.com/yoriiis/validate-target).

```bash
npm i --save-dev validate-target
```

```bash
yarn add --dev validate-target
```

## Environment

`validateTarget` was built for Node.js `>=8.11.2`.

## Usage

### Basic usage

The following example return `true` because `nodeName` and `selectorString` properties match.

```html
<a href="" class="itemLink">Link</a>
```

```javascript
validateTarget({
    target: document.querySelector('.itemLink'),
    selectorString: '.itemLink',
    nodeName: ['a']
});
```

### Multiple node names

The following example return `true` because `button` is a granted value for `nodeName` and `selectorString` match ().

```html
<a href="" class="itemLink">Link</a>
<button class="itemButton">Button</button>
```

```javascript
validateTarget({
    target: document.querySelector('.itemLink'),
    selectorString: '.itemLink',
    nodeName: ['button', 'a']
});
```

### Event delegation

The following example create a click event listener on the `nav` element and catch click events on `itemLink` element.

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
document.querySelector('.nav').addEventListener('click', e => {
    const validateTargetLinkClick = validateTarget({
        target: e.target,
        selectorString: '.itemLink',
        nodeName: ['a']
    });

    if (validateTargetLinkClick) {
        console.log('Link is clicked.');
    }
});
```

## Parameters

### `target`

`HTMLElement`

Tells to the function the target.

### `selectorString`

`String`

Tells to the function the selector string of the target element. Can be any valid CSS selector (class, id, attribute, etc.). The function uses `Element.matches` function.

### `nodeName`

`String || Array`

Tells to the function the node name in a string or a list of possible node names in an array. The order of the parameters in the array does not matter.

## Licence

`validateTarget` is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
