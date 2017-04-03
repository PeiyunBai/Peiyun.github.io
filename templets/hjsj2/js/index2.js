// JavaScript Document
//sliderCblor
$(function(){
	$('#dowebok').fullpage({
		'navigation': true,
		 anchors: ['hero', 'services', 'cases', 'news','about','contact','think','footer'],
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('#fp-nav ul li a span').css({'background':'#fff'});
				$('.header-pc').animate({'top':'15px'},500);
				$('.header-moblie').animate({'top':'-150%','display':'none'},500);
				$('.nav-moblie a').removeClass('act');  
			}
			if(index == 2){
				$('.header-pc').animate({'top':'-150%'},500);
				$('.header-moblie').animate({'top':'15px'},500);
				$('.nav-moblie a').addClass('act');
				$('.header-moblie .logo .logo2').addClass('log');
				$('#fp-nav ul li a span').css({'background':'#5B5B5B'});
				$('.waper-page2-ban').addClass('act');
				$('.hd-slide').addClass('act');
			}
			if(index == 3){
				$('.nav-moblie a').removeClass('act');
				$('.header-moblie .logo .logo2').removeClass('log');
				$('#fp-nav ul li a span').css({'background':'#fff'});
				$('.section3 .waper-page3-top .sub-left-tit').animate({'left':'0px','opacity':'1'},600);
				$('.section3 .waper-page3-top .sub-recommended').animate({'right':'0px','opacity':'1'},600);
				$('.section3 .sub-news-top-logo .wen').addClass('act');
				$('.section3 .sub-news-top-logo .news').addClass('act');
				$('.section3 .waper-page3-bom ul li.new1').delay(200).animate({'opacity':'1'},600);
				$('.section3 .waper-page3-bom ul li.new2').delay(400).animate({'marginTop':'0','marginLeft':'0','opacity':'1'},600);
				$('.section3 .waper-page3-bom ul li.new3').delay(500).animate({'marginTop':'0','marginLeft':'0','opacity':'1'},600);
				$('.section3 .waper-page3-bom ul li.new4').delay(600).animate({'marginTop':'0','marginLeft':'0','opacity':'1'},600);
				$('.section3 .waper-page3-bom ul li.new5').delay(700).animate({'marginTop':'0','marginLeft':'0','opacity':'1'},600);
			}
			if(index == 4){
			   $('.nav-moblie a').addClass('act');
			   $('.header-moblie .logo .logo2').addClass('log');
			   $('#fp-nav ul li a span').css({'background':'#5B5B5B'});
			   $('.section4 .sub-news-top-logo .wen').addClass('act');
			   $('.section4 .sub-news-top-logo .news').addClass('act');
			   $('.section4 .waper-page4-top .sub-nei-rit .sub-right-tit').animate({'left':'0','opacity':'1'});
			   $('.waper-slide-move .sub-internal-move ul li.lit1').addClass('act');
			   $('.waper-slide-move .sub-internal-move ul li.lit2').addClass('act');
			   $('.waper-slide-move .sub-internal-move ul li.lit3').addClass('act');
			   $('.waper-bom-switch .sub-bom').css({'opacity':'1'});
			}
			if(index == 5){
			  $('.nav-moblie a').addClass('act');
			  $('.header-moblie .logo .logo2').addClass('log');
			  $('#fp-nav ul li a span').css({'background':'#5B5B5B'});
			  $('.section5 .page5 .waper-lft-nb .sub-red').animate({'left':'0%','opacity':'1'},700);
			  $('.section5 .page5 .waper-lft-nb .sub-data').animate({'right':'10%','opacity':'1'},700);
			  $('.section5 .page5 .waper-lft-nb .sub-wen-big').addClass('act');
			  $('.curr1,.curr2,.curr3,.curr4,.curr5,.curr6,.curr7,.curr8,.curr9,.curr10,.curr11').addClass('act2').removeClass('act');
			}
			if(index == 6){
			  $('.nav-moblie a').addClass('act');	
			  $('.header-moblie .logo .logo2').addClass('log');
			  $('#fp-nav ul li a span').css({'background':'#5B5B5B'});
			  $('.waper-page6-top .sub-lft-number .best img').animate({'top':'-1488px'},3000);
			  $('.waper-page6-top .sub-lft-number .digits img').animate({'top':'-2207px'},2000);
			  $('.waper-page6-top .sub-lft-number .bits img').animate({'top':'-2207px'},1000);
			  $('.waper-page6-top .sub-most-lb .wen').addClass('act');
			  $('.waper-page6-top .sub-wen-tit').addClass('act');
			  $('.waper-page6-bottom').addClass('act');
			  $('.waper-page6-top .sub-lft-number').animate({'opacity':'1'},600);
			}
			if(index == 7){
			  $('.nav-moblie a').removeClass('act');
			  $('.header-moblie .logo .logo2').removeClass('log');
			  $('#fp-nav ul li a span').css({'background':'#fff'});
			  $('.section7 .page7 .sub-pl-lft h3').delay(0).animate({'marginLeft':'0px','opacity':'1'},600);
			  $('.section7 .page7 .sub-pl-lft .qq').delay(300).animate({'marginLeft':'0px','opacity':'1'},600);
			  $('.section7 .page7 .sub-pl-lft .tel').delay(600).animate({'marginLeft':'0px','opacity':'1'},600);
			  $('.section7 .page7 .sub-pl-lft .copyright').delay(900).animate({'marginLeft':'0px','opacity':'1'},600);
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){		
			}
			if(index == '2'){
				$('.waper-page2-ban').removeClass('act');
				$('.hd-slide').removeClass('act');
			}
			if(index == '3'){
			 $('.section3 .waper-page3-top .sub-left-tit').animate({'left':'-85px','opacity':'0'},600);
			 $('.section3 .waper-page3-top .sub-recommended').animate({'right':'105px','opacity':'0'},600);
			 $('.section3 .sub-news-top-logo .wen').removeClass('act');
			 $('.section3 .sub-news-top-logo .news').removeClass('act');
			 $('.section3 .waper-page3-bom ul li.new1').delay(200).animate({'opacity':'0'},600);
			 $('.section3 .waper-page3-bom ul li.new2').delay(200).animate({'marginTop':'306px','marginLeft':'80px','opacity':'0'},600);
			 $('.section3 .waper-page3-bom ul li.new3').delay(200).animate({'marginTop':'306px','marginLeft':'80px','opacity':'0'},600);
			 $('.section3 .waper-page3-bom ul li.new4').delay(200).animate({'marginTop':'306px','marginLeft':'80px','opacity':'0'},600);
			 $('.section3 .waper-page3-bom ul li.new5').delay(200).animate({'marginTop':'306px','marginLeft':'80px','opacity':'0'},600);
			}
			if(index == '4'){
			 $('.section4 .sub-news-top-logo .wen').removeClass('act');
			 $('.section4 .sub-news-top-logo .news').removeClass('act');
			 $('.section4 .waper-page4-top .sub-nei-rit .sub-right-tit').animate({'left':'-85px','opacity':'0'},600);
			 $('.waper-slide-move .sub-internal-move ul li.lit1').removeClass('act');
			 $('.waper-slide-move .sub-internal-move ul li.lit2').removeClass('act');
			 $('.waper-slide-move .sub-internal-move ul li.lit3').removeClass('act');
			 $('.waper-bom-switch .sub-bom').css({'opacity':'0'});
			}
			if(index == '5'){
			 $('.section5 .page5 .waper-lft-nb .sub-red').animate({'left':'-25%','opacity':'0'},700);
			 $('.section5 .page5 .waper-lft-nb .sub-data').animate({'right':'-30%','opacity':'0'},700);
			 $('.section5 .page5 .waper-lft-nb .sub-wen-big').removeClass('act');
			 $('.curr1,.curr2,.curr3,.curr4,.curr5,.curr6,.curr7,.curr8,.curr9,.curr10,.curr11').removeClass('act2').addClass('act');
			}
			if(index == '6'){
			 $('.waper-page6-top .sub-lft-number .best img').animate({'top':'-48px'},1000);
			 $('.waper-page6-top .sub-lft-number .digits img').animate({'top':'-48px'},1000);
			 $('.waper-page6-top .sub-lft-number .bits img').animate({'top':'-48px'},1000);
			 $('.waper-page6-top .sub-most-lb .wen').removeClass('act');
			 $('.waper-page6-top .sub-wen-tit').removeClass('act');
			 $('.waper-page6-bottom').removeClass('act');
			 $('.waper-page6-top .sub-lft-number').animate({'opacity':'0'},600);
			}
			if(index == '7'){
			 $('.section7 .page7 .sub-pl-lft h3').delay(0).animate({'marginLeft':'200px','opacity':'0'},100);
			 $('.section7 .page7 .sub-pl-lft .qq').delay(0).animate({'marginLeft':'-200px','opacity':'0'},100);
			 $('.section7 .page7 .sub-pl-lft .tel').delay(0).animate({'marginLeft':'200px','opacity':'0'},100);
			 $('.section7 .page7 .sub-pl-lft .copyright').delay(0).animate({'marginLeft':'-200px','opacity':'0'},100);
			}
		}
	});	
	$('.video-wrap video').get(0).play();
	$('.rit-slide video').get(0).play();
	$('.rit-slide video').get(1).play();
	$('.rit-slide video').get(2).play();	
});
//video-wd-hg
$(function(){
	function getVideoInfo () {
		var video = $('video');
		var videoH = video[0].videoHeight;
		var videoW = video[0].videoWidth;
		console.log("Height: " + video[0].videoHeight + ", Width: " + video[0].videoWidth);
		console.log("Height: " + videoH + ", Width: " + videoW);
		var videoRatio = videoH / videoW;
		console.log(videoRatio);
		window.onresize = function() {
			if (video.height() / video.width() > videoRatio) {
				console.log('Width:' + video.width() + ' Height: ' + (video.width() * videoRatio));
			} else {
				console.log('Width:' + video.height() / videoRatio + ' Height: ' + video.height());
			}
		}
	}		
});
/*//navbar--暂时此移除效果--后期看情况添加
$(function(){	
　;(function($,window,document,undefined){
	var nowLeft = $('.nav-top .item-line').css('left');
	var nowWidth = $('.nav-top .item-line').width();
	var activeIndex = 0;
	//初始化移动条位置
	$('.nav-top .item').each(function(){
	  if($(this).hasClass('active')){
			activeIndex = $(this).index();
			var w = $(this).outerWidth();
			nowWidth = w;
			var left = 0;
			$('.nav-top .item-line').width(w);
			$(this).prevAll().each(function(){
				left += $(this).outerWidth();
			});
			$('.nav-top .item-line').css('left',left + 'px');
			nowLeft = left + 'px';
		}
	});
	//跟随移动
	$('.nav-top .item').hover(function(){
		var w = $(this).outerWidth();
		var left = 0;
		$('.nav-top .item').removeClass('active');
		$(this).addClass('active');
		$('.nav-top .item-line').width(w);
		$(this).prevAll().each(function(){
			left += $(this).outerWidth();
		});
		$('.nav-top .item-line').css('left',left + 'px');
	},function(){
		$('.nav-top .item').removeClass('active');
		$('.nav-top .item').eq(activeIndex).addClass('active');
		$('.nav-top .item-line').width(nowWidth);
		$('.nav-top .item-line').css('left',nowLeft);
	});
　})(jQuery,window,document);	
});*/
