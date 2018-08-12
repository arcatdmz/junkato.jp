# junkato.jp

[![Build Status](https://travis-ci.org/arcatdmz/junkato.jp.svg?branch=master)](https://travis-ci.org/arcatdmz/junkato.jp)

All rights on image, video, text, and related resources (e.g., including paper PDF files) reserved.

## Dependencies

- `Gulp v3.9.1`
- `Webpack v3` + `Babel-loader v8` + `Babel v7`
- `TypeScript v2.9`
- `Pug v2` (as part of `gulp-pug` plugin)

## Directory structure

- `src/`: source files
  - `javascripts/`: TypeScript files
  - `stylesheets/`: LESS files
  - `data/`: JSON files
  - `images/`: image files
  - `thumbnails/`: thumbnail image files
  - `ja/`: Japanese pug files
  - `.htaccess`: Apache .htaccess file
  - `junkato.bib`: BibTeX file
- `build/`: intermediate build files
- `dist/`: build results
- `semantic/`: Semantic UI source files

## Production build

```sh
$ npm install -g gulp-cli
$ npm install
$ gulp
```

## Debug build

```sh
$ npm install -g gulp-cli
$ npm install
$ gulp debug
```

## Browser-sync

Run the following command after `gulp` build will launch a new browser window.

```sh
$ gulp sync
```

The following command allows partial rebuilds after each edit, which are significantly lighter than the `gulp sync` that builds all files.

```sh
$ gulp sync:html
```
