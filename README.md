## Mithril Chrome Extension

### Installing

Make sure you have NodeJS and NPM installed. Then run:

```bash
npm install
```

Then run the following: _(you must have Gulp installed `npm install -g gulp`)_

```bash
gulp build
```

Then from Chrome, visit [chrome://extensions/](chrome://extensions/) and
"Load unpacked extension..." from the `dist/` build folder.

### Contributing

If you want to develop or contribute, you can run the following:

```bash
gulp watch
```

This will automatically build on changes. Some changes are automatically loaded
into Chrome, and other require clicking the Reload link below the package.
