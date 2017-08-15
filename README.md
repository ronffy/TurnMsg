# turnMsg - 一条接一条的平滑出现信息的过渡动画

### [点我预览](https://wanghairong-i.github.io/turnMsg/)

## 介绍

-   基于jQuery封装的
-   api丰富，使用简单
-   自适应宽度，可方便兼容到你的项目中
-   可配置消息是向上滚动、还是向下滚动
-   可自定义容器、列表等样式

## 使用方法

-   引入 `turnMsg.js` 即可

-   需要一个html容器，如:
    ```javascript

    <div id="idName"></div>

    ```

-   创建实例
    ```javascript

    var t = new turnMsg("idName");

    ```

-   每次传入一条信息
    ```javascrpt

    t.addText('我是一条信息啦');

    ```
      
-   如需关闭信息框时
    ```javascript

    t.empty();

    ```
