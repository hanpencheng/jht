$(function(){
	//关于我们切换
	$('.bt').hide();
	$('.bt:first').show();
	var $tab_li = $('.tab-3-ul li');
	$tab_li.click(function(){
		$(this).addClass('checked').siblings().removeClass('checked');
		var index = $tab_li.index(this);
		$('.bt').hide().eq(index).show();

	});
	$('.tab-3-ul li div').hover(function(){
		$(this).css('opacity','.85').children('img').addClass('animated rollIn');
	},function(){
		$(this).css('opacity','1').children('img').removeClass('animated rollIn');
	});
	//右侧导航
	$('.rightshow .wechat').hover(function(){		
		$(this).children('span').stop().animate({left:'-150px'},1000).show();		
		},function(){
			$(this).children('span').stop().animate({left:'150px'},100);			
	});
		
	//底部微信关注
	$('.follow').hover(function(){
		$(this).children('.weixin').stop().slideDown();
	},function(){
		$(this).children('.weixin').stop().slideUp();
	});	
	//返回顶部
	$('.rocket').click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});
	$('.rocket').hover(function(){
		$(this).css('background','#007AFF')
		.children('img').removeClass('fadeInDown').addClass('fadeInUp');
	},function(){				
		$(this).css('background','#333')
		.children('img').removeClass('fadeInUp').addClass('fadeInDown');
	});		
	$('.spck').click(function(){
		$('.boxbg,.show_sp').show();
		});
	//公司简介点击关闭视频
	$('.show_sp span').click(function(){
			$('.boxbg,.show_sp').hide();		
	});
	//券卡营销解决方案
	var mySwiper = new Swiper('.about1',{			
		paginationClickable :true,
		speed:300,		
		prevButton:'.sbt',
		nextButton:'.sbn'			
	});
	//溯源营销解决方案
	var mySwiper1 = new Swiper('.about2',{			
		paginationClickable :true,			
		speed:300,		
		prevButton:'.sbt1',
		nextButton:'.sbn1'			
	});
	//产品与服务点击效果
	$('.card').click(function(){
		$('.text,.card-tg').show();
		$('.text1,.text2,.origin-tg,.gov-tg,.food-tg').hide();		
	});	
	$('.origin').click(function(){
		$('.text,.text2,.card-tg,.gov-tg,.food-tg').hide();
		$('.text1,.origin-tg').show();		
	});
	$('.gov').click(function(){
		$('.text,.text1,.card-tg,.origin-tg,.food-tg').hide();		
		$('.text2,.gov-tg').show();		
	});
	$('.food').click(function(){
		$('.text,.text1,.text2,.card-tg,.origin-tg,.gov-tg').hide();		
		$('.food-tg').show();
	});	
	$('.tpshow >.swiper-container').hide();
	$('.tpshow >.swiper-container:first').show();
	//产品与服务点击效果
	var $menu = $('.tab div');
		$menu.click(function(){
		    $(this).addClass('selected flipInY').siblings().removeClass('selected flipInY');
		    var index = $menu.index(this);
		    $('.tpshow >.swiper-container').eq(index).show().siblings().hide();
		});
	//导航点击效果
	$(".logo li a").click(function(){	     
	     $(this).addClass("navon").parent().siblings().find('a').removeClass('navon');
	});
 	$("#navon0").click(function(){
	   $("html,body").animate({scrollTop:$("#row").offset().top-80+'px'},1000);
	});
	$("#navon1").click(function(){
	   $("html,body").animate({scrollTop:$("#row1").offset().top-80+'px'},1000);
	});
	$("#navon2").click(function(){
	   $("html,body").animate({scrollTop:$("#row2").offset().top-80+'px'},1000);
	});
	//滚动鼠标 导航自动选中效果
	$(window).scroll(function(){
		var sT = $(window).scrollTop();
		var aRow = $(".divb");
		var curInd = 0;
		win_height = $(window).height();
		for(var i=0;i<3;i++){
			if(sT>aRow.eq(i).offset().top-win_height*0.3){
				curInd = i;
			}
		}
		$(".logo ul li a").removeClass("navon").eq(curInd).addClass("navon");
	});
	//产品与服务面板鼠标移入翻转效果
	$('.tab div').hover(function(){
		if(!$(this).hasClass('selected')){
			$(this).children('span').addClass('animated zoomIn');
		}		
	},function(){
		if(!$(this).hasClass('selected')){
			$(this).children('span').removeClass('animated zoomIn');
		}		
	});
	//企业资质
	var swiper = new Swiper('.swiperqy', {
        pagination: '.qypage',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        initialSlide :1,
        loop:true,
        observer:true,
		observeParents:true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    //研发实力
	var swiper = new Swiper('.swiperyf', {
        pagination: '.yfpage',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        initialSlide :1,
        loop:true,
        observer:true,
		observeParents:true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    //banner    
	var mySwiper = new Swiper('.bannerswpr', {
		autoplay: 8000,//可选选项，自动滑动
		autoplayDisableOnInteraction:false,
		loop : true,
		pagination : '.bannerpage',
		paginationClickable :true,
		
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		    
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  }
	});
});

//置顶器	
$(window).scroll(function ()
{
	if ($(this).scrollTop() > 200) {					
		$(".rightshow").fadeIn();
		$('.header').css('boxShadow','0 0 10px #ddd');
	}
	else {
		$(".rightshow").fadeOut();
		$('.header').css('boxShadow','none');
	}
});

//底部波浪
$(function(){
	var marqueeScroll = function (id1, id2, id3, timer) {
		var $parent = $("#" + id1);
		var $goal = $("#" + id2);
		var $closegoal = $("#" + id3);
		$closegoal.html($goal.html());
		function Marquee() {
			if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
				$parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
			}
			else {$parent.scrollLeft($parent.scrollLeft() + 1);}
		}
		setInterval(Marquee, timer);
	}
	var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
	var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
});			

//滑动页面 执行动画
$(window).scroll(function(){					
	var ser1=$('#row1,.tab-2').offset().top;
	if(ser1 >= $(window).scrollTop() && ser1 < ($(window).scrollTop() + $(window).height())){						
		$('.tit1').addClass('zoomIn');
		$('.text,.text1,.text2').addClass('fadeInUp');
		$('.about1,.about2,.about3').addClass('fadeIn andelay1');
		
			
	}else{						
		$('.tit1').removeClass('zoomIn');
		$('.text,.text1,.text2').removeClass('fadeInUp');
		$('.about1,.about2,.about3').removeClass('fadeIn andelay1');
		}
	
	
	
});
//关于我们加载动画
$(window).scroll(function(){	
	if($(this).scrollTop() >=850){		
		$('.tit2').addClass('zoomIn');
		$('.tab-3-ul li').addClass('fadeIn');
		$('.tab-3-ul li:nth-child(2)').addClass('andelay1');
		$('.tab-3-ul li:nth-child(3)').addClass('andelay2');	
	}else{
		
		$('.tit2').removeClass('zoomIn');
		$('.tab-3-ul li').removeClass('fadeIn');
		$('.tab-3-ul li:nth-child(2)').removeClass('andelay1');
		$('.tab-3-ul li:nth-child(3)').removeClass('andelay2');
	}
});

//禁止查看网页源代码
window.onload=function(){
	document.onkeydown=function(){
		var e=window.event||arguments[0];
		if(e.keyCode==123){
		alert("看不到控制台了吧");
		return false;
		}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
		alert("还是看不到控制台");
		return false;
		}
		};
		document.oncontextmenu=function(){
		alert("看不到控制台了吧");
		return false;
	}
}