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

1.launch.json 파일을 생성하여 아래와 같이 작성한다.
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
2. vue.config.js 파일을 아래와 같이 수정한다.
아래 <strong>devtool:"source-map"</strong> 부분이 작성이 안되어도 되지만
디버깅이 힘들다.
```
module.exports = {
    configureWebpack: {
        devtool: "source-map",
    },
};
```
3. npm run serve 명령어로 실행한다.
4. F5를 누르거나 디버깅 모드를 실행한다.
5. 크롬 개발 도구에서 소스 탭을 선택한다.
6. debug2(프로젝트)가 트리 형태로 나타나며 코드가 노출되며 디버깅할 vue 파일을 선택한다.
7. 라인 표시 옆을 클릭하면 크롬 자체 내에서 break point가 잡히며
매서드를 호출하면 크롬과 vs code에서 디버깅이 가능하다.
(vs code에서 break point는 의미없고 크롬에서 break point가 의미 있음)
![image](https://user-images.githubusercontent.com/48846460/211013680-5cd4f464-8d88-41f7-b010-e909726e1741.png)

