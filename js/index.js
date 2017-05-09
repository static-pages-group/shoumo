$(document).ready(function(){
	setTimeout(function() {
	                $(".slogan1, .slogan2").addClass("show")
	            }, 0)

	            var i = $("html, body")
	              , t = this
	              , e = $(".section1").position().top + 55
	              , n = $(".section2").position().top + 55
	              , s = $(".section3").position().top + 55
	              , o = $(".section4").position().top + 55
	            $(".right-nav .nav1").on("click", function() {
	                i.animate({
	                    scrollTop: e
	                }, t.scrollTime),
	                $(".nav1").addClass("cur").siblings(".nav").removeClass("cur")
	            }),
	            $(".right-nav .nav2, .arrow-down").on("click", function() {
	                i.animate({
	                    scrollTop: n
	                }, t.scrollTime),
	                $(".nav2").addClass("cur").siblings(".nav").removeClass("cur")
	            }),
	            $(".right-nav .nav3").on("click", function() {
	                i.animate({
	                    scrollTop: s
	                }, t.scrollTime),
	                $(".nav3").addClass("cur").siblings(".nav").removeClass("cur")
	            }),
	            $(".right-nav .nav4").on("click", function() {
	                i.animate({
	                    scrollTop: o
	                }, t.scrollTime),
	                $(".nav4").addClass("cur").siblings(".nav").removeClass("cur")
	            }),
	            $(".right-nav .nav5").on("click", function() {
	                $("html,body").animate({
	                    scrollTop: a
	                }, t.scrollTime),
	                $(".nav5").addClass("cur").siblings(".nav").removeClass("cur")
	            }),
	            $(".right-nav .nav6").on("click", function() {
	                $("html,body").animate({
	                    scrollTop: 0
	                }, t.scrollTime),
	                $(".nav6").addClass("cur").siblings(".nav").removeClass("cur")
	            });
	            var l = null ;
                window.onscroll = function(i) {
                    return l ? !1 : void (l = setTimeout(function() {
                        i = i || window.event;
                        var t = $("html").scrollTop() || $("body").scrollTop();
                        t += 55,
                        n > t ? $(".right-nav .nav1").addClass("cur").siblings("a").removeClass("cur") : t > n && s > t ? $(".right-nav .nav2").addClass("cur").siblings("a").removeClass("cur") : t > s && o > t ? $(".right-nav .nav3").addClass("cur").siblings("a").removeClass("cur") : t > o && a > t ? $(".right-nav .nav4").addClass("cur").siblings("a").removeClass("cur") : t > a && $(".right-nav .nav5").addClass("cur").siblings("a").removeClass("cur"),
                        clearInterval(l),
                        l = null
                    }, 200))
                }
                ,
                setTimeout(function() {
                    window.onscroll()
                }, 100)
})
