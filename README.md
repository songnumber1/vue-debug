# debug2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

### launch.json
```
{
    "version": "0.2.0",
        "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vuejs: chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
                "breakOnLoad": true,
                "sourceMapPathOverrides": {
                    "webpack:///src/*": "${webRoot}/\*"
            }
        },
        {
            "type": "firefox",
            "request": "launch",
            "name": "vuejs: firefox",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
                "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
        }
    ]
}

```
