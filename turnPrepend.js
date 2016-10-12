/* TurnPrepend.js  一条接一条的出现信息的过渡动画
** auth:whr
** time:2016.10.12
** 实例化时传入容器id或类名，如："#idName" ,有两个公共方法：setHtml、hideBox。
*/
;(function($) { 
	var resetLength = 40; //消息达到指定条数时清理一次
	var TurnPrepend = function(opts) {
		var init_opts = {
			box : "#v-turnPrependBox" //显示html的容器box
		};
		var opts = $.extend({},init_opts,opts), 
				$box = $(opts.box);
		$box.addClass("u-turnPrependBox").html("<ul></ul>");
		this.$box = $box;
		this.$box_ul = $box.find("ul");
	};
	TurnPrepend.prototype.setHtml = function(opts){
		var init_opts = {
			html : "" //[String] [必传] 用来渲染的html字符串
		}; 
		var that = this,
				$box = that.$box,
				$box_ul = that.$box_ul,
				opts = $.extend({},init_opts,opts), 
				html = opts.html,
				li_num = $box_ul.find("li").length,
				callback = opts.callback;
		if(!(typeof html === "string" ? html.trim() : html)) return;
		if($box.css("height") !== "30px"){
			$box.animate({
				height : 30
			});
		}
		if(li_num > resetLength) {
			$box_ul.empty().prepend(html).css({
				bottom: 0
			});
		} else if(li_num > 0) {
			$box_ul.prepend(html).css({
				bottom: -li_num * 30 + "px"
			});
		} else {
			$box_ul.prepend(html);
		};
		callback && callback($box,html,li_num);
		return that;
	};
	TurnPrepend.prototype.hideBox = function(callback){
		var that = this,
				$box = that.$box,
				$box_ul = that.$box_ul;
		$box.animate({
			height : 0
		},function() {
			$box_ul.empty().css({
				bottom: 0
			});
			callback && callback(that);
		});
		return that;
	}
	window.TurnPrepend = TurnPrepend;
})(jQuery);
