define("question-new:widget/js/comment-accusation/index.es",function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_event=require("common:widget/js/util/event/event"),_event2=_interopRequireDefault(_event),_jquery=require("common:widget/lib/jquery/jquery"),_jquery2=_interopRequireDefault(_jquery),_popTip=require("common:widget/js/ui/pop-tip/pop-tip"),_popTip2=_interopRequireDefault(_popTip),_log=require("common:widget/js/util/log/log"),_log2=_interopRequireDefault(_log),Accusation=function(){function Accusation(option){_classCallCheck(this,Accusation),_jquery2.default("body").append([function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="wgt-comment-accusation">    <div class="comment-accusation-title">举报评论</div>    <div class="comment-accusation-close">×</div>    <p class="comment-accusation-title-item">举报原因</p>    <div class="comment-accusation-types">        <ul class="comment-accusation-types-wrap clearfix">            <li class="comment-accusation-type-item" data-reason="2">垃圾广告</li>            <li class="comment-accusation-type-item" data-reason="3">人身攻击</li>            <li class="comment-accusation-type-item" data-reason="4">政治敏感</li>            <li class="comment-accusation-type-item" data-reason="5">色情低俗</li>            <li class="comment-accusation-type-item" data-reason="6">违法诈骗</li>            <li class="comment-accusation-type-item" data-reason="7">其他</li>        </ul>    </div>    <p class="comment-accusation-desc">我们会通过消息、邮箱等方式尽快将举报结果通知您。</p>    <p class="comment-accusation-title-item">说明<span class="comment-accusation-require">（选填）</span></p>    <div class="comment-accusation-text-container">        <textarea class="comment-accusation-accusation-content" placeholder="详细的说明，有助于我们更快的理解您的反馈。"></textarea>        <p class="comment-accusation-words"><span class="comment-accusation-words-current">0</span>/200</p>    </div>    <div class="comment-accusation-btn-group">        <div class="comment-accusation-btn comment-accusation-btn-cancel">取消</div>        <div class="comment-accusation-btn comment-accusation-btn-submit disabled">提交</div>    </div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0]()),_event2.default.fire("showMask");var $el=_jquery2.default(".wgt-comment-accusation");this.$el=$el,this.$textarea=$el.find(".comment-accusation-accusation-content"),this.$number=$el.find(".comment-accusation-words-current"),this.$submit=$el.find(".comment-accusation-btn-submit"),this.$require=$el.find(".comment-accusation-require"),this.reason=null,this.content="",this.ready=null,this.option=option,this.bindEvent()}return _createClass(Accusation,[{key:"destory",value:function(){_event2.default.fire("hideMask"),this.$el.remove()}},{key:"bindEvent",value:function(){var e=this;this.$el.on("click",".comment-accusation-close, .comment-accusation-btn-cancel",function(){e.destory()}).on("click",".comment-accusation-type-item",function(t){var a=_jquery2.default(t.currentTarget),n=e.$textarea.val().length,c=_jquery2.default.trim(e.$textarea.val()).length;a.siblings().removeClass("selected"),a.addClass("selected"),e.reason=a.data("reason"),e.reason<7?(e.$require.html("（选填）"),e.ready=!0,e.$submit.removeClass("disabled")):7===e.reason&&(e.$require.html("（必填）"),c>0&&200>=n?(e.ready=!0,e.$submit.removeClass("disabled")):(e.ready=!1,e.$submit.addClass("disabled")))}).on("input",".comment-accusation-accusation-content",function(){var t=e.$textarea.val().length,a=_jquery2.default.trim(e.$textarea.val()).length,n=e.$number;t>200?(n.addClass("exceed"),e.$submit.addClass("disabled"),e.ready=!1):(n.removeClass("exceed"),7===e.reason?0===a?(e.$submit.addClass("disabled"),e.ready=!1):(e.$submit.removeClass("disabled"),e.ready=!0):null!==e.reason&&(e.$submit.removeClass("disabled"),e.ready=!0)),n.text(t)}).on("click",".comment-accusation-btn-submit",function(){if(e.ready){_log2.default.send({area:"comment-accusation-submit",action:"click"});var t=e.option,a=t.rid,n=t.threadId,c=t.replyId;_jquery2.default.ajax({url:"/submit/index/report",type:"POST",dataType:"json",data:{type:3,qid:F.context("page").qid,rid:a,uid:F.context("user").uid,content:e.$textarea.val(),reason:e.reason,threadId:n,replyId:c,from:"pc"},cache:!1,success:function(t){e.destory();var a=t.errno,n=t.errmsg;switch(a){case 0:_popTip2.default("感谢您的反馈");break;case 4:_popTip2.default("您的当日举报量已超上限");break;case 5:_popTip2.default("您已经举报了该评论");break;default:_popTip2.default(n)}}})}})}}]),Accusation}();module.exports=Accusation});