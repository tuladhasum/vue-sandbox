# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy to gh-pages
[Source](https://www.taniarascia.com/getting-started-with-vue/)

```
git remote add origin https://github.com/username/vue-app
git add .
git commit -m "initial commit"
git push -u origin master
```

You can commit the build with the following steps:

Create a `gh-pages` branch.

```git
git checkout -b gh-pages
```

Uncomment the `dist` directory from `.gitignore`.

Create `vue.config.js` and add the `publicPath` of your GitHub


`vue.config.js`
```
module.exports = {
  publicPath: 'vue-app',
}
```

Create a build, which will output the `dist` folder.

```
npm run build
# or
yarn build
```

Add the build, commit, and send it to `gh-pages` on GitHub.

```
git add dist
git commit -m "gh-pages commit"
git subtree push --prefix dist origin gh-pages
```