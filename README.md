# taiwan-vue-components
台灣行政區 SVG 圖表 組件 Taiwan SVG chart components

## Install

```
$ npm install taiwan-vue-components --save
```

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
    縣市區塊顏色 預設 #FFFFFF

+ stroke
    縣市線段顏色 預設: #B5B5B6

+ width
    SVG 寬 預設: 375

+ height
    SVG 高 預設: 667

+ scale
    台灣投影大小 預設: 7800


### 有任何想法改進或是修改的參數都歡迎幫忙修改or討論



