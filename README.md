# validateTarget

![validateTarget](https://img.shields.io/badge/validate--target-v1.0.0-546e7a.svg?style=for-the-badge) [![TravisCI](https://img.shields.io/travis/com/yoriiis/validate-target/master?style=for-the-badge)](https://travis-ci.com/yoriiis/validate-target) [![Coverage Status](https://img.shields.io/coveralls/github/yoriiis/validate-target?style=for-the-badge)](https://coveralls.io/github/yoriiis/validate-target?branch=master) ![Node.js](https://img.shields.io/node/v/validate-target?style=for-the-badge) [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/validate-target?style=for-the-badge)](https://bundlephobia.com/result?p=fela@latest)

validateTarget is a minimalist script to easily validate target of an HTML element especially during event delegation. Event delegation is advised for better performance, read [MDN documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation) for more information.

No needs to check `nodeName` or `className` properties, the function return a boolean when the target is correct. The target can have multiple node name if element shares common code.

## Installation

The plugin is available as the `validate-target` package name on [npm](https://www.npmjs.com/package/validate-target) and [Github](https://github.com/yoriiis/validate-target).

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

The following example return `true` because `nodeName` and `className` properties are corrects.

```html
<a href="" class="itemLink">Link</a>
```

```javascript
validateTarget({
    target: document.querySelector('.itemLink'),
    className: 'itemLink',
    nodeName: ['a']
});
```

### Multiple node names

The following example return `true` because `button` is a granted value for `nodeName` and `className` is correct.

```html
<a href="" class="itemLink">Link</a>
<button class="itemButton">Button</button>
```

```javascript
validateTarget({
    target: document.querySelector('.itemLink'),
    className: 'itemLink',
    nodeName: ['a', 'button']
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
        className: 'itemLink',
        nodeName: ['a']
    });

    if (validateTargetLinkClick) {
        console.log('Button is clicked.');
    }
});
```

## Parameters

### `target`

`HTMLElement`

Tells to the function the target.

### `className`

`string`

Tells to the function the class name of the target element.

### `nodeName`

`array`

Tells to the function the list of possible node names.

## Licence

validateTarget is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
