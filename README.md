## Vitamin

Vue 3 with Vite playground generated with https://github.com/vitejs/create-vite-app

### Modified extras

 * eslint and prettier
 * jest
 * naive custom jest snapshot serializer (Vue 3)
 * vue-router
 * vuex
 * vue-i18n
 * tailwindcss
 * miragejs

### Notes

 * Vite only pre-bundles package dependencies in the `dependencies` section of `package.json`.
 If you **import** a dependency in your code it must be under `dependencies` and not `devDependencies` (see `miragejs`).

 * In vite `index.html` is part of your source code. Vite parses / rewrites it during dev and also transforms it in build. Don't put it separate from your source code.

### Issues


## Up and running

1. Install npm packages

```
yarn install
```

2. Run dev server

```
yarn dev
```

3. Production build

```
yarn build
```

4. Run Jest

```
yarn test
yarn test:watch
```
