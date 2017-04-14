(function($) {
    var GalMenu = {
        defaults: {
            click_to_close: true,
            stay_open: false
        },
        init: function(options) {
            var o = options,
            $this = $(this);
            $this.each(function(i) {
                var $this = $(this),
                settings = $.extend({},
                GalMenu.defaults, o),
                $menu = $('.' + settings.menu);
                $this.on('mousedown',
                function(e) {
                    if (e.which !== 3 && $(e.target).parents('.GalMenu').length < 1 && settings.click_to_close) {
                        $this.find('.GalMenu').stop(true, false).animate({
                            opacity: 0
                        },
                        {
                            duration: 100,
                            queue: false,
                            complete: function() {
                                $(this).css('display', 'none').find('.active').removeClass('active').next().stop(true, true).slideUp('normal')
                            }
                        });
                        $(".circle").removeClass("open");
                        $("#overlay").hide();
                        $(".GalMenu").delay(400).hide(0);
                        audio.pause();
                        audio.currentTime = 0
                    }
                });
                $this.on('contextmenu',
                function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    GalMenu.getCoords(e);
                    $('.GalMenu_close_me').stop(true, false).animate({
                        opacity: 0
                    },
                    {
                        duration: 100,
                        queue: false,
                        complete: function() {
                            $(this).css('display', 'none')
                        }
                    });
                    var audio = $("#audio")[0];
                    var add = 150;
                    var top = Coords.clientY - add,
                    left = ($('body')[0] === e.target) ? Coords.clickX - add: Coords.clientX - add;
					//防止菜单超出可见区域，不需要可注释掉
                    var bodyHe= document.documentElement.clientHeight;
                    var bodyWi = document.documentElement.clientWidth;
                    if(top<0) top=0;
                    if(bodyHe-Coords.clientY<150) top=bodyHe-300;
                    if(left<0) left=0;
                    if($('body')[0] === e.target){if(bodyWi-Coords.clickX<150) left=bodyWi-300} else {if(bodyWi-Coords.clientX<150) left=bodyWi-300};
					//防止菜单超出可见区域，不需要可注释掉
                    $menu.css({
                        top: top + 'px',
                        left: left + 'px',
                        display: 'block'
                    }).stop(true, false).animate({
                        opacity: 1
                    },
                    {
                        duration: 100,
                        queue: false
                    });
                    if ($("#gal").hasClass("open")) {
                        $(".circle").removeClass("open");
                        $("#overlay").hide();
                        $(".GalMenu").delay(400).hide(0);
                        audio.pause();
                        audio.currentTime = 0
                    } else {
                        $(".circle").addClass("open");
                        $("#overlay,.GalMenu").show();
                        audio.play()
                    }
                })
            })
        },
        getCoords: function(e) {
            var evt = e ? e: window.event;
            var clickX = 0,
            clickY = 0;
            if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
                clickX = evt.clientX + document.body.scrollLeft;
                clickY = evt.clientY + document.body.scrollTop
            };
            if ((evt.clientX || evt.clientY) && document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.scrollLeft != null) {
                clickX = evt.clientX + document.documentElement.scrollLeft;
                clickY = evt.clientY + document.documentElement.scrollTop
            };
            if (evt.pageX || evt.pageY) {
                clickX = evt.pageX;
                clickY = evt.pageY
            };
            return Coords = {
                clickX: clickX,
                clickY: clickY,
                clientX: evt.clientX,
                clientY: evt.clientY,
                screenX: evt.screenX,
                screenY: evt.screenY
            }
        }
    };
    $.fn.GalMenu = function(method, options) {
        if (GalMenu[method]) {
            return GalMenu[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === 'object' || !method) {
            return GalMenu.init.apply(this, arguments)
        } else {
            $.error('Method ' + method + ' does not exist')
        }
    }
})(jQuery);
String.prototype.removeWS = function() {
    return this.toString().replace(/\s/g, '')
};
String.prototype.pF = function() {
    return parseFloat(this)
};
Number.prototype.pF = function() {
    return parseFloat(this)
};
