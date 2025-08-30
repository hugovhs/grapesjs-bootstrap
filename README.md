# hugovhs Grapesjs Bootstrap 5

## Download

* NPM
  * `npm i @hugovhs/grapesjs-bootstrap`
* GIT
  * `git clone https://github.com/hugovhs/grapesjs-bootstrap.git`

## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-bootstrap.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-bootstrap']
      // ...
  });
</script>
```

JavaScript
```js
import grapesjs from 'grapesjs';
import grapesjsBootstrap from '@hugovhs/grapesjs-bootstrap';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [grapesjsBootstrap],
  // ...
});
```

## License

MIT
