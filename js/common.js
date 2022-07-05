$(document).ready(function(){
    //nav drop
    $('.menu1Dp').mouseover(function(){
        ACT_MENU = $(this);
        ACT_SUB_LIST = ACT_MENU.next('.Menu2DpList');
        ACT_SUB = ACT_SUB_LIST.children().children('.menu2Dp');

        ACT_MENU.addClass('hoverMenu');
        $('.Menu2DpList').addClass('block');
        $('.hnavBg_Container').addClass('bgOn');
        $('main').css('z-index', '-2');
    });
    $('.menu1Dp').mouseout(function(){
        ACT_MENU = $(this);
        ACT_SUB_LIST = ACT_MENU.next('.Menu2DpList');
        ACT_SUB = ACT_SUB_LIST.children().children('.menu2Dp');

        ACT_MENU.removeClass('hoverMenu');
        $('.Menu2DpList').removeClass('block');
        $('.hnavBg_Container').removeClass('bgOn');
        $('main').css('z-index', '0');
        
    });
    $('.menu2Dp').mouseover(function(){
        _ACT_SUB = $(this);
        _ACT_SUB_LIST = _ACT_SUB.closest('.Menu2DpList');
        _ACT_MENU = _ACT_SUB_LIST.prev('.menu1Dp');

        _ACT_MENU.addClass('hoverMenu');
        $('.Menu2DpList').addClass('block');
        $('.hnavBg_Container').addClass('bgOn');
        $('main').css('z-index', '-2');
    });
    $('.menu2Dp').mouseout(function(){
        _ACT_SUB = $(this);
        _ACT_SUB_LIST = _ACT_SUB.closest('.Menu2DpList');
        _ACT_MENU = _ACT_SUB_LIST.prev('.menu1Dp');

        _ACT_MENU.removeClass('hoverMenu');
        $('.Menu2DpList').removeClass('block');
        $('.hnavBg_Container').removeClass('bgOn');
        $('main').css('z-index', '0');
    });
    
    //quick contact btn
    $('.fqContactBtn').on('click', function(){
        ACT_QUICK_CONTACT = $(this);
        if(ACT_QUICK_CONTACT.hasClass('on')){
            ACT_QUICK_CONTACT.text('빠른상담').removeClass('on');
            $('.fqContactBtn_Box').removeClass('move_Box');
            $('.fqContact_Box').removeClass('qContact_blk');
        }else{
            ACT_QUICK_CONTACT.text('').addClass('on');
            $('.fqContactBtn_Box').addClass('move_Box');
            $('.fqContact_Box').addClass('qContact_blk');
        }
    });

    //footer branch info swiper
    var F_BRANCH_SWIPER = new Swiper(".fiBranchinfo_Box", {
        direction: "vertical",
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        loop: true,
    });
});