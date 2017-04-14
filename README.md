isomorphic webpack dynamic import demo

#### Installation

```sh
$ yarn install
```

#### Example `.babelrc`

```json
{
  "presets": [ "env" ],
  "env": {
    "server": {
      "plugins": [
        "dynamic-import-node",
        "transform-runtime"
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
$ yarn run build:client
```

#### Build server

```sh
$ yarn run build:server
```
