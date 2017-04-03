// JavaScript Document
//nav-list and moblie nav-list
$(function(){
	$('.header-pc .nav-pc .item a').hover(function(){
		$(this).find('.n1').animate({'top':'-14px'},300);
		$(this).find('.n2').animate({'top':'0px'},300);
  },function(){
	    $(this).find('.n1').animate({'top':'0px'},300);
		$(this).find('.n2').animate({'top':'13px'},300);
	  })
});
$(function(){
 $('.nav-moblie').click(function(){
	if($(this).hasClass('selected')){
	   $(this).removeClass('selected');
	}
	else{
	   $(this).addClass('selected');
	}
   });
});
$(function(){
	$('.nav-home').each(function(){
	  $(this).find("li").each(function(i){
	  $(this).addClass("sp" + (i+1));
     })
  });
  $('.nav-moblie').click(function(){
	   $('.nav-baring').toggleClass('disk');
	   $('.nav-baring .nav-bg').toggleClass('bgg');
	   $('.nav-home').toggleClass('opt');
	 })
});
//The first screen banner
$(function(){
	var _banner = $('.slide-wrap ul li').length;
	var _banner_i = 0;
	$('.slide-wrap ul li').eq(0).show().siblings('li').hide();
	function set(){
		_banner_i++;
		_banner_i=_banner_i==_banner?0:_banner_i;
		$('.slide-wrap ul li').eq(_banner_i).stop().fadeIn(800).siblings('li').fadeOut(700);
		$('.slide-wrap ul li').eq(_banner_i).addClass('bg').siblings('li').removeClass('bg');
		$('.waper-line .waper-sub-line li').eq(_banner_i).eq(0).addClass('on').siblings('li').removeClass('on');
	}	
	$('.waper-line .waper-sub-line li').click(function(){
			$('.slide-wrap ul').stop();
			this_ = $(this).index();
			_banner_i = this_;
			$('.slide-wrap ul li').eq(_banner_i).stop().fadeIn(800).siblings('li').fadeOut(700);
			$('.slide-wrap ul li').eq(_banner_i).addClass('bg').siblings('li').removeClass('bg');
			$('.waper-line .waper-sub-line li').eq(_banner_i).eq(0).addClass('on').siblings('li').removeClass('on');
		});
   $('.section1').on("mousewheel DOMMouseScroll", function (e) { 
	  var this_index_id = $('.waper-line .waper-sub-line li.on').val();
	  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome && ie
				  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); //firefox
	  if (delta > 0) {
		//up
		$('.slide-wrap ul li').eq(this_index_id - 1).stop().fadeIn(800).siblings('li').fadeOut(700);
		$('.slide-wrap ul li').eq(this_index_id - 1).addClass('bg').siblings('li').removeClass('bg');
		$('.waper-line .waper-sub-line li').eq(this_index_id - 1).eq(0).addClass('on').siblings('li').removeClass('on');			 
	  } else if (delta < 0) {
		// down
		$('.slide-wrap ul li').eq(this_index_id + 1).stop().fadeIn(800).siblings('li').fadeOut(700);
		$('.slide-wrap ul li').eq(this_index_id + 1).addClass('bg').siblings('li').removeClass('bg');
		$('.waper-line .waper-sub-line li').eq(this_index_id + 1).eq(0).addClass('on').siblings('li').removeClass('on');
	 }	
   });
   banner_set = setInterval(set,5000);
	$('.slide-wrap .waper-slmk').mouseover(function(){
		 clearInterval(banner_set);
	})
	$('.slide-wrap .waper-slmk').mouseout(function(){
		banner_set = setInterval(set,5000);
	});
});
//news
$(function(){
  $('.section3 .waper-page3-bom ul li').hover(function(){
	  $(this).find('.kg2').stop().animate({'top':'0'},500);
	},function(){
	  $(this).find('.kg2').stop().animate({'top':'307px'},500);
	})
	$('.waper-page3-bom ul').each(function(){
	   $(this).find("li").each(function(i){
	   $(this).addClass("new" + (i+1));
      });
   })
});
//page4
$(function(){
	$('.waper-slide-move .sub-internal-move ul li').hover(function(){
	  $(this).find('span').stop().animate({'bottom':'0'},800);
	},function(){
	  $(this).find('span').stop().animate({'bottom':'-100%'},800);
	});
	$('.waper-slide-move .sub-internal-move ul li').hover(function(){
	  $(this).find('font').stop().animate({'height':'100%'},600);
	},function(){
	  $(this).find('font').stop().animate({'height':'0%'},600);
	});
	$('.sub-internal-move ul').each(function(){
	   $(this).find("li").each(function(i){
	   $(this).addClass("lit" + (i+1));
      });
   })
});
//page4-banner
$(function(){
	 var num = 0 ;
	 var _legth = $('.waper-slide-move .sub-internal-move ul').length; 
	 var wde =0 ;
		$('.sub-bom .rit').click(function(){
			num++;
			num = num>_legth-1?0:num; 
			$('.waper-slide-move .sub-internal-move').stop().animate({'left':-num*100+'%'});
		  }) 
   	  $('.sub-bom .lft').click(function(){
		    num--;
			num = num<0?0:num; 
			$('.waper-slide-move .sub-internal-move').stop().animate({'left':-num*100+'%'});
	  })
   function set(){
		$(".sub-bom .rit").click();
		wde++;
		if(wde==_legth){
			num =-1 ;
         }
	  } 
	/*automatic_set = setInterval(set,5000);
	    $(".waper-slide-move .sub-internal-move").mouseover(function(){
	 	   clearInterval(automatic_set);
	  })
	    $(".waper-slide-move .sub-internal-move").mouseout(function(){
		  automatic_set = setInterval(set,5000);
	})*/
});
//page5
$(function(){
  $('.waper-rit-nb').each(function(){
	  $(this).find("p").each(function(i){
	  $(this).addClass("curr" + (i+1));
     })
  });
});
//page6
$(function(){
 $('.waper-banner-opit ul li article').hover(function(){
   $(this).find('.hs2').animate({'opacity':'1'},300);
 },function(){
   $(this).find('.hs2').animate({'opacity':'0'},300);
 })
});
$(function(){
    var _banner2 = $('.waper-banner-opit ul li').length;
	var _banner_i2 = 0;
	$('.waper-banner-opit ul li').eq(0).show().siblings('li').hide();
	function set2(){
		_banner_i2++;
		_banner_i2=_banner_i2==_banner2?0:_banner_i2;
		$('.waper-banner-opit ul li').eq(_banner_i2).stop().fadeIn(800).siblings('li').fadeOut(800);
		$('.waper-list-dd span').eq(_banner_i2).eq(0).addClass('on').siblings('span').removeClass('on');
	}	
	$('.waper-list-dd span').click(function(){
			$('.waper-banner-opit ul').stop();
			this2_ = $(this).index();
			_banner_i2 = this2_;
			$('.waper-banner-opit ul li').eq(_banner_i2).stop().fadeIn(800).siblings('li').fadeOut(800);
			$('.waper-list-dd span').eq(_banner_i2).eq(0).addClass('on').siblings('span').removeClass('on');
		});
   /* banner_set2 = setInterval(set2,5000);
	$('.waper-banner-opit ul li').mouseover(function(){
		 clearInterval(banner_set2);
	})
	$('.waper-banner-opit ul li').mouseout(function(){
		banner_set2 = setInterval(set,5000);
	})*/
});
//page2-video-ban
$(function(){
    var _banner3 = $('.waper-page2-ban .sub-page-slide').length;
	var _banner_i3 = 0;
	$('.waper-page2-ban .sub-page-slide').eq(0).show().siblings('.sub-page-slide').hide();
	function set3(){
		_banner_i3++;
		_banner_i3=_banner_i3==_banner3?0:_banner_i3;
		$('.fy-slide span img').css('top',_banner_i3 * -160 + 'px');
		$('.waper-page2-ban .sub-page-slide').eq(_banner_i3).stop().fadeIn(800).siblings('.sub-page-slide').fadeOut(800);
		$('.waper-page2-ban .sub-page-slide').eq(_banner_i3).addClass('on').siblings('.sub-page-slide').removeClass('on');
	}
	function set4(){
		_banner_i3--;
		_banner_i3=_banner_i3<0?2:_banner_i3;
		$('.fy-slide span img').css('top',_banner_i3 * -160 + 'px');
		$('.waper-page2-ban .sub-page-slide').eq(_banner_i3).stop().fadeIn(800).siblings('.sub-page-slide').fadeOut(800);
		$('.waper-page2-ban .sub-page-slide').eq(_banner_i3).addClass('on').siblings('.sub-page-slide').removeClass('on');
	}	
	$('.hd-slide .drit').click(function(){
			set3()
		});
	$('.hd-slide .dlft').click(function(){
			set4()
		});
   /*banner_set3 = setInterval(set3,5000);
	$('.waper-page2-ban .sub-page-slide').mouseover(function(){
		 clearInterval(banner_set3);
	})
	$('.waper-page2-ban .sub-page-slide').mouseout(function(){
		banner_set3 = setInterval(set3,5000);
	})*/
});
$(function(){
	$('.hd-slide .dlft').hover(function(){
	  $(this).siblings().addClass('act');
	},function(){
	   $(this).siblings().removeClass('act');
	})
});