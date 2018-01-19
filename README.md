# taiwan-vue-components
Taiwan SVG chart components
台灣行政區 SVG 圖表 組件 

[![github version](https://img.shields.io/github/release/waiting7777/taiwan-vue-components.svg)](https://github.com/waiting7777/taiwan-vue-components/releases/) [![npm version](https://img.shields.io/npm/v/taiwan-vue-components.svg)](https://www.npmjs.com/package/taiwan-vue-components) [![license](https://img.shields.io/github/license/waiting7777/taiwan-vue-components.svg)](https://github.com/waiting7777/taiwan-vue-components/blob/master/LICENSE) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/waiting7777/taiwan-vue-components/pulls) [![code with hearth by Waiting7777](https://img.shields.io/badge/%3C%2F%3E%20code%20with%20%E2%99%A5-Waiting7777-brightgreen.svg)](https://github.com/waiting7777)

## Install

```
$ npm install taiwan-vue-components --save
```

## Live Demo
[Live Demo](https://waiting7777.github.io/taiwan-vue-components/index.html)

## Usage

### Country 台灣縣市圖

#### Html
```html
<html>
<head>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://unpkg.com/topojson-client@3"></script>
    <script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
    <script src="./dist/taiwan-vue-components.min.js"></script>
</head>
<body>
    <div id="app">
        <Country></Country>
    </div>
    <script>
        var app = new Vue({
            el: '#app'
        })
    </script>
</body>
```

#### Node.js
```js
import {Country} from 'taiwan-vue-components'

<Country></Country>
```

+ fill
    縣市區塊顏色 
    預設 #FFFFFF

+ stroke
    縣市線段顏色 
    預設: #000000

+ width
    SVG 寬 
    預設: 375

+ height
    SVG 高 
    預設: 667

+ lon
    投影經度 
    預設: 120.751864

+ lat
    投影緯度 
    預設: 23.400998

+ scale
    台灣投影大小 
    預設: 7800


### Any idea or problem is welcome!



