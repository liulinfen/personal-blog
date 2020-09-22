---
title: 读书
---
## reading
<span v-for="i in 3">{{ i }} </span>

{{ 1 + 1 }}

{{ $page.title }}

[[toc]]

[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[baidu](http://192.168.6.114:8081/sass-identity-demo-front/company/verify?type=legal-auth)

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

``` js {4,7,9}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```