### [点我预览](https://wanghairong-i.github.io/turnPrepend/)

# turnPrepend - 一条接一条的出现信息的过渡动画

## 使用方法

-   需要一个html容器，如:
    ```javascript
    <div id="idName"></div>
    ```

-   初始化
    ```javascript
    var t = new TurnPrepend({box:"#idName"});
    ```

-   传入每一条信息
    ```javascrpt
    t.setHtml({html:'<li>text</li>'});
    ```
      
-   如需关闭信息框时
    ```javascript
    t.hideBox();
    ```
