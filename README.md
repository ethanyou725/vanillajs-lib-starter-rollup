# vanillajs-lib-starter-rollup

## Usage

```bash
git clone https://github.com/Youzhigang/vanillajs-lib-starter-rollup.git your-lib-name
yarn install
```

## devDependencies

- [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)
- [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)
- [@rollup/plugin-buble](https://github.com/rollup/plugins/tree/master/packages/buble)
- [rollup](https://github.com/rollup/rollup)
- [jest](https://github.com/facebook/jest)

[see more rollup plugins](https://github.com/rollup/plugins)

This repo contains a bare-bones example of how to create a library using Rollup

`yarn build` builds the library, generate three files due to [package.json](https://docs.npmjs.com/files/package.json#main), `main`, `module` and `browser`

`yarn dev` builds the library, then keeps rebuilding it whenever the src files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`yarn test` builds the library, then tests it.

## License

[MIT](LICENSE).
