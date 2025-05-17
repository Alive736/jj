//返回顶部
$(function() {
	
		//图片懒加载
		if(window.lazyloadimg){
			lazyloadimg();
		}
		
		/*for(var i=0;i<document.links.length;i++){
			if(document.links[i].href&&document.links[i].href.indexOf("javascript")<0){
				if(document.links[i].href.indexOf("csggzy.gov.cn")<0){
					document.links[i].href=encodeURI(document.links[i].href); 
				}
			}
	    }*/
		
		if(document.getElementById("content-box-id")){
			var boxW=parseInt($("#content-box-id").width(),10);
			$.each($("#content-box-id table"),function(i,item){
				var iw=parseInt($(item).width(),10);
				if(iw>boxW){
					$(item).attr("width","100%");
				}
			})
			
			$.each($("#content-box-id img"),function(i,item){
				var src=$(item).attr("src");
				if(src&&src.indexOf("/ueditor")==0){
					$(item).attr("src","/"+src);
				}
				src=src.replace("http://www.sqggzy.com:8080","http://222.138.172.2:5521/");
				if(src&&src.indexOf("http://www.sqggzy.com")==0){
					$(item).attr("src",src.replace("http://www.sqggzy.com",""));
				}
			})
		}
		
		$.each($(".focusBox img"),function(i,item){
			var src=$(item).attr("src");
			src=src.replace("http://www.sqggzy.com:8080","http://222.138.172.2:5521/");
			if(src&&src.indexOf("http://www.sqggzy.com")==0){
				$(item).attr("src",src.replace("http://www.sqggzy.com",""));
			}
		})
		
		
	    $(".btn_top").hide();
		
		$(".btn_top").on("click",null,function(){
			$('html, body').animate({scrollTop: 0},10);return false;
		})
		
		$(window).bind('scroll resize',function(){
			if($(window).scrollTop()<=10){
				$(".btn_top").hide();
			}else{
				$(".btn_top").show();
			}
		})

		/*回车查询事件*/
		bindKeyUp("search-text","toSearchKey");
		bindKeyUp("search-key","toSearch");
		//交易信息
		bindKeyUp("search-Notice","SerchItemListA");
		bindKeyUp("search-NAME","SerchItemListB");
		//主体
		bindKeyUp("ZTMC","InitZtjs");
		bindKeyUp("ZTDM","InitZtjs");
		//新闻列表
		bindKeyUp("search-lxname","InitZxzxList",1);
		bindKeyUp("search-lxmc","InitServiceInteractionList",1);
		//政策法规
		bindKeyUp("rulesTitle","InitServiceInteractionList",1);
		bindKeyUp("docNo","InitServiceInteractionList",1);
		
		
		  	$("#xyzg").hide();
			$("#xinyong").hover(function () {
			$("#xyzg").show();
			}, function () {
			    $("#xyzg").hide();
			})
			$("#xyzg").hover(function () {
			$("#xyzg").show();
			}, function () {
			    $("#xyzg").hide();
			    })

})

function bindKeyUp(obj,fun,para){
	$('#'+obj).bind('keyup', function(event) {
		if (event.keyCode == "13") {
			if(para){
				window[fun](para);
			}else{
				window[fun]();
			}
		}
	});
}
//友情链接
$(function () {
    //行政监管部门连接
    $('#xglj_xzjgbm > li').mousedown(function () {
        if ($('#xglj_xzjgbm > li.seleced a:eq(0)').attr('href') != 'javascript:;')
            window.open($('#xglj_xzjgbm > li.seleced a:eq(0)').attr('href'));
    })
    //市级中心连接
    $('#xglj_sjzx > li').mousedown(function () {
        if ($('#xglj_sjzx > li.seleced a:eq(0)').attr('href') != 'javascript:;')
            window.open($('#xglj_sjzx > li.seleced a:eq(0)').attr('href'));
    })
    //相关链接连接
    $('#xglj_xglj > li').mousedown(function () {
        if ($('#xglj_xglj > li.seleced a:eq(0)').attr('href') != 'javascript:;')
            window.open($('#xglj_xglj > li.seleced a:eq(0)').attr('href'));

    })
});
//全局滚动列表
(function($){
	$.fn.ArtScroll = function(options){
	//默认配置
	var defaults = {
		speed:90,  //滚动速度
		rowHeight:42 //LI的高度
	};
	var opts = $.extend({}, defaults, options),intId = [];
	function marquee(obj, step){
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});
	}
})(jQuery);
//列表滚动配置
$(document).ready(function(){
	$('.jiaoyi-roll ul li:even,.tomorrow-roll ul li:even,.mail-lt-roll ul li:even,.bt-art-roll ul li:even').addClass('lieven');
})
$(function(){
	//.jiaoyi-roll,.tomorrow-roll,.mail-lt-roll,.bt-art-roll
	$(".jiaoyi-roll,.tomorrow-roll").ArtScroll({
		speed:80, //数值越大，速度越慢
		rowHeight:42 //li的高度
	});
	

});

//高级搜索折叠展开
$(function(){
    $(".folding").click(function(){
    	$('.folding').toggleClass('query-arrow');
    	$(this).next().next(".folding-box").toggle();
    })
});
//鼠标经过
$('.er-menu').hover(
    function(){
     $(this).addClass('nav-hover');
    },
    function(){
     $(this).removeClass('nav-hover')
    }
);


/****文件下载公告部分****/

/**
 * 是否为IE浏览器
 * @returns
 */
function isIE(){
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {} 
    else if(isEdge) {} 
    else if(isIE11) {}
    else{
       return false;
    }
    return true;
}

/**
 * 触发按钮
 * @returns
 */
function tofileDownUrl(){
	$("#downFileId").attr("target","_blank");
	document.getElementById("downFileId").click();
}

/**
 * 拦截提示
 * @param url
 * @returns
 */
function tofileDowntips(url){
	layer.confirm('附件页面已被浏览器拦截,请点击窗口右上角的设置,允许弹出! 或点击下方操作。', {
		title: "提示", skin:'zone-css4',
		btn: ['<div onclick="tofileDownUrl();">重新打开</div>', '关闭'] //按钮
	});
}

/**
 * 下载附件
 * @param id
 * @param obj
 * @param msg
 * @param filehzmc
 * @returns
 */
function downClick(id,obj,msg,filehzmc,djzt,bid){
	
	if(djzt&&djzt==1){
		djzt = 1;
	}else{
		djzt = 0;
	}
	
	//写入日志
	var html = $.ajax({
              url: path + "/NoticeFile.do?direct",
	          data: { flag: "1", file: id, projecttype: "GCJS", msg:msg, djzt:djzt,bid:bid},
	          cache: false,
    		  async: false
		}).responseText;
	
	//得到原始连接
	var href1=$(obj).attr("_href");
	var href2=$(obj).attr("_href");
	//如果获取mac
	if(href1.indexOf("flag")<0){
		if(msg){
			href1=href1+"&flag="+(html);
		}
	}
	
	//商丘特殊情况
	/*
	 * 【商丘】公告页面调整一下：
	 * 资格预审公告、招标公告、邀请公告 关联的附件 用【预览/下载】配置项控制预览还是下载，
	 * 其他公告关联的附件不受这个配置控制，始终是下载
	 * */
	var numType=0;
	var tp=$("#Notice_file_DownMethod").val();
	var ntype=$("#NOTICE_TYPE").val();
	numType=parseInt(ntype,10);
	
	//如果是查看
	if(tp=="2"&&numType==1&&filehzmc.toLowerCase().indexOf("gef")>=0||(tp=="0"&&numType==1&&filehzmc.toLowerCase().indexOf("gef")>=0)){
		
	}else{
		//如果是下载
		var num=href2.indexOf("?") 
		href2=href2.substr(num); 
		href1=$("#UploadWebHost").val()+ href2;
		//如果是在线下载并且设置gef文件下载获取机器码
		if(msg && filehzmc.toLowerCase().indexOf("gef")>=0){
			href1=href1+"&flag="+(html);
		}
	}

	$("#downFileId").attr("href",href1);
	
	tofileDownUrl();
	return;
	
	//检测弹窗
//	var retopener = window.open(href1, "_blank");
//    if(retopener==null){
    	//不能弹窗给出提示
//    	tofileDowntips(href1);
//    }
}


//下载日志
function toFileLogs(id,objA,type,filehzmc,djzt,filename,bid) {
		
	//清理下载链接
	$("#downFileId").attr("href","");
	var gcType= $("#NoticeFile_type_GCJS").val();//'${NoticeFile_type_GCJS}';
	var zcType= $("#NoticeFile_type_ZFCG").val();//'${NoticeFile_type_ZFCG}';
	var fileUrl=$("#File_PublicAppExe_Url").val();//'${File_PublicAppExe_Url}'
	var needLogintypeNames=$("#needLogin_FileTypeName").val();//
	var isAllow_UnAccess_DownsRWB=$("#IsAllow_UnAccess_DownsRWB").val();//
	var lgFlag=$("#dlflag").val();//
	var bidCode=$("#bidSectionCode").val();//
	var projecttype=$("#projecttype").val();//
	var downMethod=$("#Notice_file_DownMethod").val();//0查看，1下载
	var downtypeName=(downMethod=="0"?"查看":"下载");
	
	if(needLogintypeNames&&needLogintypeNames.indexOf(type)>=0){
		if(lgFlag!="true"){
			alert("请登录后再"+downtypeName+"");return;
		}
		
		if(isAllow_UnAccess_DownsRWB&&isAllow_UnAccess_DownsRWB!="true"){
			var html = $.ajax({
	              url: path + "/BiderRw.do?direct",
		          data: { flag: "1", bidSectionCode: bidCode , projecttype: projecttype},
		          cache: false,
	    		  async: false
			}).responseText;
			if(html!="1"){
				alert("未入围的企业不允许"+downtypeName+"该附件！");return;
			}
		}
	}

	//判断是否获取码信息
	var obj = document.getElementById("fsDownLoader");
	//如果不记录 或 不是gef文件
	if( obj==null || filehzmc.toLowerCase().indexOf("gef") < 0){
		
		downClick(id,objA,null,filehzmc,djzt,bid);return;
		
	}else{
		//工程特定类型附件
		if(gcType!=""&&gcType.indexOf(type)<0){
			downClick(id,objA,null,filehzmc,djzt,bid);return;
		}
		//政采特定类型附件
		if(zcType!=""&&gcType.indexOf(type)<0){
			downClick(id,objA,null,filehzmc,djzt,bid);return;
		}
		
		if(!isIE()){
	       alert("请使用IE浏览器进行"+downtypeName+"！");return;  
	    }
		
		//不能加载组件
		if(obj.object==null){
				alert("请下载平台组件，再进行招标文件"+downtypeName+"！");
				
				var macUrl="/plugins/tools-mac/平台组件.rar";
				if(path){
					macUrl=path+macUrl;
				}else{
					macUrl="/"+macUrl;
				}
				
				//下载组件
				window.location.href=encodeURI(macUrl);
				return; 
		}
		
	    var msg = obj.GetMachineInfo();
		downClick(id,objA,msg,filehzmc,djzt,bid);
		
	}

}


/**
* 跳转链接
* @param url
* @returns
*/
function LinkUrl(url){
	var tb=document.getElementById("tb_Link");
	if(!tb){
		tb=document.createElement("a");
		tb.id="tb_Link";
		tb.href="";
		tb.target="_blank";
		document.body.appendChild(tb);
	}
	
	document.getElementById("tb_Link").href=url;
	document.getElementById("tb_Link").click();
}


/**
* 打印
* @param divID
* @returns
*/
function printdiv(divID) {
    var vh = document.body.innerHTML;
    document.body.innerHTML ="<div class='wPrint' id="+divID+">"+ document.getElementById(divID).innerHTML+"</div>";
    document.getElementById(divID).style.width="80%";
    window.print();
    document.body.innerHTML = vh;   //将网页还原
    document.getElementById(divID).style.width="";
}

/**
 * 图片懒加载
 * @returns
 */
function lazyloadimg(){
	var lazyImgs=$("img[data-original]");
	$.each(lazyImgs,function(i,item){ 
		if(item.getAttribute("data-original")){
			item.src=item.getAttribute("data-original");
			item.removeAttribute("data-original");//移除属性，下次不再遍历
		}
	})
}
