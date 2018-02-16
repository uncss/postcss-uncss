# postcss-uncss
[![npm](https://img.shields.io/npm/v/postcss-uncss.svg?maxAge=2592000)](https://www.npmjs.com/package/postcss-uncss)
[![npm](https://img.shields.io/npm/l/postcss-uncss.svg?maxAge=2592000)](https://github.com/uncss/postcss-uncss/blob/master/LICENSE)

Use [uncss](https://github.com/uncss/uncss) as a [PostCSS](https://github.com/postcss/postcss) plugin.

## About

UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.

### Example:

**html:**
```html
<body>
  <p class="red">Hello World!</p>
</body>
```

**css before:**
```css
.red {
  color: red;
}
.blue {
  color: blue;
}
```

**css after:**
```css
.red {
  color: red;
}
```

### How?

The HTML files are loaded by [jsdom](https://github.com/tmpvar/jsdom) and JavaScript is executed. UnCSS filters out selectors that are not found in the HTML files.

See the [UnCSS](https://github.com/uncss/uncss) docs for more information.

## Installation

postcss-uncss specifies UnCSS as a [peerDependency](https://docs.npmjs.com/files/package.json#peerdependencies), so you will have to install UnCSS as well.

```bash
npm install postcss-uncss uncss
```

postcss-uncss' MAJOR & MINOR version numbers correspond to UnCSS' version numbers; however, the PATCH version number may differ.

## Usage

```js
postcss([ require('postcss-uncss') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Options

- **html** (Array): provide a list of html files to parse for selectors and elements. Usage of [globs](https://github.com/isaacs/node-glob) is allowed.

- **ignore** (Array): provide a list of selectors that should not be removed by UnCSS. For example, styles added by user interaction with the page (hover, click), since those are not detectable by UnCSS yet. Both literal names and regex patterns are recognized. Otherwise, you can add a comment before specific selectors in your css:

  ```css
  /* uncss:ignore */
  .selector1 {
      /* this rule will be ignored */
  }

  .selector2 {
      /* this will NOT be ignored */
  }
  ```

### Example Configuration

```js
{
  html: ['index.html', 'about.html', 'team/*.html'],
  ignore: ['.fade']
}
```
