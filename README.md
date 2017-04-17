isomorphic webpack dynamic import demo

#### Installation

```sh
$ yarn install
```

#### Plugins

* Server(Node)
  - babel-plugin-dynamic-import-node
* Client(Browser)
  - babel-plugin-syntax-dynamic-import

#### Example `.babelrc` with `BABEL_ENV`

```json
{
  "presets": [ "env" ],
  "env": {
    "server": {
      "plugins": [
        "dynamic-import-node"
      ]
    },
    "client": {
      "plugins": [
        "syntax-dynamic-import"
      ]
    }
  }
}

```

#### Build client

```sh
$ BABEL_ENV=client webpack --config webpack.config.client.js
```

#### Build server

```sh
$ BABEL_ENV=server webpack --config webpack.config.server.js
```
