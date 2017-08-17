/* TurnMsg.js  一条接一条的出现信息的过渡动画
** auth:whr
** time:2016.10.12
** 有两个公共方法：addHtml、empty
*/
;(function($) { 
	/*
	** @param node [必传] <Str || jQuery>   滚动盒子的容器id名，可"#idName"或"idname"或jquery对象$("#idname")
	** @param config [选传] <Obj>
	** 		- boxStyle      <Obj>   //最外层容器样式
	** 		- middleStyle   <Obj>   //包列表项的容器样式
	** 		- middleTag     <Str>   //包列表项的容器标签
	** 		- itemTag       <Str>   //列表项的标签
	** 		- itemHeight    <Num>   //每一项的高度
	** 		- to            <Str>   //滚动方向，'bottom'向下滚动消息，'top'向下滚动消息
	** 		- max           <Num>   //容器最多条数，超过后将自动清空
	** @param callback [选传] <Func> 初始化完成后的回调，两个参数，第一个是盒子容器的jQ对象，第二个是config对象
	*/
	function TurnMsg(node, config, callback) {
		config = config || {};
		var $box = typeof node === 'string' && node.indexOf('#') !== 0 ? $(document.getElementById(node)) : $(node);
		var boxStyle = $.extend({
			position: 'relative',
			width: '100%',
			height: 0,
			overflow: 'hidden',
		}, config.boxStyle);
		var middleStyle = $.extend({
			position: 'absolute',
			left: 0,
			'-webkit-transition': 'all .5s',
			'-moz-transition': 'all .5s',
			'-ms-transition': 'all .5s',
			'-o-transition': 'all .5s',
			transition: 'all .5s',
			zIndex: 20,
		}, config.middleStyle);
		this.config = $.extend({
			middleTag: 'ul', //包列表项的标签
			itemTag: 'li', //列表项的标签
			itemHeight: 30, //每一项的高度
			to: 'bottom', //滚动方向，'bottom'向下滚动消息，'top'向下滚动消息
			max: 50, //容器最多条数，超过后将自动清空
		}, config);
		middleStyle[this.config.to] = 0;
		this.$box_ul = $('<' + this.config.middleTag + '/>').css(middleStyle);
		this.$box = $box.css(boxStyle).html(this.$box_ul);
		callback && callback($box, config);
	};
	TurnMsg.prototype.addText = function(text, callback){
		var config = this.config,
				to = config.to,
				max = config.max,
				method = to === 'bottom' ? 'prepend' : 'append', //根据滚动的方向，使用不同的插入html方法
				$box = this.$box,
				$box_ul = this.$box_ul,
				height = config.itemHeight,
				html = this.getHtml(config.itemTag, text, height),
				li_num = $box_ul.find(config.itemTag).length;
		if(!(typeof html === "string" ? html.trim() : html)) return;
		if($box.css("height") !== height + "px"){
			$box.animate({
				height : height
			});
		}
		if(li_num > max) {
			$box_ul.empty()[method](html).css(to, 0);
		} else if(li_num > 0) {
			$box_ul[method](html).css(to, (-li_num * height) + "px");
		} else {
			$box_ul[method](html);
		};
		callback && callback($box, text, li_num);
		return this;
	};
	TurnMsg.prototype.getHtml = function(tag, text, height){
		return '<' + tag + ' style="height:' + height + 'px; line-height:' + height + 'px;">' + text + '</' + tag + '>';
	}
	TurnMsg.prototype.empty = function(callback){
		var that = this,
				to = this.config.to,
				$box = that.$box,
				$box_ul = that.$box_ul;
		$box.animate({
			height : 0
		},function() {
			$box_ul.empty().css(to, 0);
			callback && callback(that);
		});
		return that;
	}
	window.TurnMsg = TurnMsg;
})(jQuery);
