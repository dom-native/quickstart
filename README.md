
A minimalistic starter project for modern and native Web Component frontend development. 


> Technology: [Typescript](https://www.typescriptlang.org/) | [postcss](https://postcss.org/) | [rollup](https://rollupjs.org/) | [native web components](https://developers.google.com/web/fundamentals/web-components/) |  [dom-native library (<7kb gzip, < 17 min.js)](https://www.npmjs.com/package/dom-native)

> THE DOM IS THE FRAMEWORK - ZERO IE TAX | ZERO VIRTUAL DOM | ZERO FRAMEWORK

## Install & Run

```sh
# Clone the base code to your folder
git clone git@github.com:dom-native/quickstart.git  my-frontend-project/

cd my-frontend-project/

# make it yours
rm -Rf .git

# install the dependencies
npm install

# build and start REPL development 
npm run watch

# (should open http://localhost:8888/index.html in your default browser)
```

## Start coding

After `npm run watch` edit and of the files below and hit browser refresh: 

- `pcss/main.pcss` get recompiled as `dist/app-bundle.pcss`
- `src/**/*.ts ` get recompiled as `dist/app-bundle.js`

> NOTE: As of now, when adding new .ts requires a restart of 'npm run watch' (changing don't)

