## Vitamin

Vue 3 with Vite playground generated with https://github.com/vitejs/create-vite-app

### Modified extras

 * eslint and prettier
 * jest
 * vue-router
 * vuex
 * vue-i18n
 * tailwindcss

### Issues

  * snapshot serializer Vue 3 support
    - [] output includes unwanted vnodes (see `example.spec.js.snap`)
    - [] test run warning (run `yarn test`)
  ```
  [Vue warn]: Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.
  ```

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

4. Run Jest test watcher

```
yarn test
```
