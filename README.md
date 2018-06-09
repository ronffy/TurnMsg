# TurnMsg - 一条接一条的平滑出现信息的过渡动画

## 介绍

-   基于`jQuery`封装的
-   api丰富，使用非常简单
-   自适应宽度，可方便兼容到你的项目中
-   可配置消息是向上滚动、还是向下滚动
-   可自定义容器、列表等样式

## 使用方法

-   引入 `TurnMsg.js` 即可

-   需要一个html容器，如:
    ```javascript

    <div id="idName"></div>

    ```

-   JS创建实例
    ```javascript

    var t = new TurnMsg("idName");

    ```

-   传入一条信息则滑出一条消息，连续传入消息时则为动画平滑过渡效果
    ```javascrpt

    t.addText('我是一条信息啦');

    ```
      
-   如需关闭信息框时
    ```javascript

    t.empty();

    ```
