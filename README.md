[![build status](https://secure.travis-ci.org/bebraw/react-pure-button.png)](http://travis-ci.org/bebraw/react-pure-button)
# react-pure-button - React wrapper for Pure buttons

**react-pure-button** provides wrapper for [Pure button elements](http://purecss.io/buttons/) making it easy to use Pure buttons using React.

## Usage

```js
var Button = require('react-pure-button');
```

```html
<Button>Activate</Button>
<Button disabled={true}>Disable</Button>
<Button active={true}>Running</Button>
<Button primary={true}>OK</Button>
<Button><i className='fa fa-shopping-cart fa-lg'></i> Checkout</Button>
```

You can attach attributes to each component as usual. **className** won't override default Pure class so you can customize that. If you want icons, just pass the element referring to it within a Button.

## Development

* Linting - **npm run lint**
* Testing - **npm test** - This will lint too.
* Developing - **npm start** - This will run a server at *localhost:3000* and use Hot Module Reloading.
* Demo deployment - **npm run gh-pages** and **npm run deploy-gh-pages** - Demo will contain *README.md* by default and comes with simple styling based on Pure.

## License

react-pure-button is available under MIT. See LICENSE for more details.

