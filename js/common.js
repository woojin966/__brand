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

    //sub tab active
    $('.currentTabBtn').css({ 'pointer-events': 'none' });
    $('.subTabBtn').on('click', function(e){
        var ACT_SUBTAB = $(this);
        var subTab_DATA = ACT_SUBTAB.attr('data-tab');
        var subTab_SUBLIST = ACT_SUBTAB.next('.stabSubList');
        var subTAB_SUBBTN = subTab_SUBLIST.find('.stabSubBtn_first');
        var subTabsubbtn_DATA = subTAB_SUBBTN.attr('data-stab');
        var ACT_TABCONT = $('#' + subTab_DATA);
        var ACT_sTABCONT = $('#' + subTabsubbtn_DATA);

        if(ACT_SUBTAB.hasClass('currentTabBtn')){
            ACT_SUBTAB.removeClass('currentTabBtn').css({ 'pointer-events': 'auto' });
            ACT_TABCONT.removeClass('currentListCont');
            subTab_SUBLIST.removeClass('currebtTabList');
            subTAB_SUBBTN.removeClass('currentsTabBtn').css({ 'pointer-events': 'auto' });
            ACT_sTABCONT.removeClass('currentListCont');
        }else{
            $('.currentTabBtn').removeClass('currentTabBtn').css({ 'pointer-events': 'auto' });
            $('.currentListCont').removeClass('currentListCont');
            $('.currebtTabList').removeClass('currebtTabList');
            $('.currentsTabBtn').removeClass('currentsTabBtn').css({ 'pointer-events': 'auto' });
            ACT_SUBTAB.addClass('currentTabBtn').css({ 'pointer-events': 'none' });
            ACT_TABCONT.addClass('currentListCont');
            subTab_SUBLIST.addClass('currebtTabList');
            subTAB_SUBBTN.addClass('currentsTabBtn').css({ 'pointer-events': 'none' });
            ACT_sTABCONT.addClass('currentListCont');
        }
    });
    //subtab sublist active
    $('.currentsTabBtn').css({ 'pointer-events': 'none' });
    $('.stabSubBtn').on('click', function(){
        var ACT_sSUB = $(this);
        var ssTab_DATA = ACT_sSUB.attr('data-stab');
        //var PARENT_TAB = ACT_sSUB.closest('.subTabBtn');
        var ACT_TABCONT = $('#' + ssTab_DATA);
        if(ACT_sSUB.hasClass('currentsTabBtn')){
            ACT_sSUB.removeClass('currentsTabBtn').css({ 'pointer-events': 'auto' });
            ACT_TABCONT.removeClass('currentListCont');
        }else{
            $('.currentsTabBtn').removeClass('currentsTabBtn').css({ 'pointer-events': 'auto' });
            $('.currentListCont').removeClass('currentListCont');
            ACT_sSUB.addClass('currentsTabBtn').css({ 'pointer-events': 'none' });
            ACT_TABCONT.addClass('currentListCont');
            //PARENT_TAB.addClass('currentTabBtn');
        }
    });
    
});