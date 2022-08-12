$(document).ready(function () {
  //nav drop
  $(".menu1Dp").mouseover(function () {
    ACT_MENU = $(this);
    ACT_SUB_LIST = ACT_MENU.next(".Menu2DpList");
    ACT_SUB = ACT_SUB_LIST.children().children(".menu2Dp");

    ACT_MENU.addClass("hoverMenu");
    $(".Menu2DpList").addClass("block");
    $(".hnavBg_Container").addClass("bgOn");
    $("main").css("z-index", "-2");
  });
  $(".menu1Dp").mouseout(function () {
    ACT_MENU = $(this);
    ACT_SUB_LIST = ACT_MENU.next(".Menu2DpList");
    ACT_SUB = ACT_SUB_LIST.children().children(".menu2Dp");

    ACT_MENU.removeClass("hoverMenu");
    $(".Menu2DpList").removeClass("block");
    $(".hnavBg_Container").removeClass("bgOn");
    $("main").css("z-index", "0");
  });
  $(".menu2Dp").mouseover(function () {
    _ACT_SUB = $(this);
    _ACT_SUB_LIST = _ACT_SUB.closest(".Menu2DpList");
    _ACT_MENU = _ACT_SUB_LIST.prev(".menu1Dp");

    _ACT_MENU.addClass("hoverMenu");
    $(".Menu2DpList").addClass("block");
    $(".hnavBg_Container").addClass("bgOn");
    $("main").css("z-index", "-2");
  });
  $(".menu2Dp").mouseout(function () {
    _ACT_SUB = $(this);
    _ACT_SUB_LIST = _ACT_SUB.closest(".Menu2DpList");
    _ACT_MENU = _ACT_SUB_LIST.prev(".menu1Dp");

    _ACT_MENU.removeClass("hoverMenu");
    $(".Menu2DpList").removeClass("block");
    $(".hnavBg_Container").removeClass("bgOn");
    $("main").css("z-index", "0");
  });

  //mobile nav
  // $(window).resize(function(){
  //     var D_WIDTH = $(window).width();
  //     console.log(D_WIDTH);

  // });
  var D_WIDTH = $(window).width();
  function headerWidth() {
    $(".ham_Container").css({
      width: D_WIDTH + "px",
      "min-width": D_WIDTH + "px",
    });
  }
  headerWidth();
  $(window).resize(function () {
    headerWidth();
  });
  if (D_WIDTH >= 360 && D_WIDTH <= 1159) {
    console.log("aaaaaa");

    $(".menu1Dp").attr({ href: "javascript:void(0)", class: "M_menu1Dp" });
    $(".Menu2DpList").attr("class", "M_Menu2DpList");
    $(".M_menu1Dp").on("click", function () {
      var M_ACT_MENU = $(this);
      var M_SUB_LIST = M_ACT_MENU.next(".M_Menu2DpList");
      if (M_ACT_MENU.hasClass("actMenu")) {
        M_ACT_MENU.removeClass("actMenu");
        M_SUB_LIST.removeClass("subUlBlock");
      } else {
        $(".actMenu").removeClass("actMenu");
        $(".subUlBlock").removeClass("subUlBlock");
        M_ACT_MENU.addClass("actMenu");
        M_SUB_LIST.addClass("subUlBlock");
      }
    });
    $(".hamBtn").on("click", function () {
      var HAM_BTN = $(this);
      var NAV_SECTION = $(".hnav_Container");
      var SKIP_SECTION = $(".hskipnav_Container");
      var BG_SECTION = $(".hnavBg_Container");
      if (HAM_BTN.hasClass("actHam")) {
        HAM_BTN.removeClass("actHam");
        NAV_SECTION.removeClass("hSecBlock");
        SKIP_SECTION.removeClass("hSecBlock");
        BG_SECTION.removeClass("hSecBlock");
        $("main").css("display", "block ");
        $("footer").css("display", "block");
      } else {
        HAM_BTN.addClass("actHam");
        NAV_SECTION.addClass("hSecBlock");
        SKIP_SECTION.addClass("hSecBlock");
        BG_SECTION.addClass("hSecBlock");
        $("main").css("display", "none");
        $("footer").css("display", "none");
      }
    });
    var M_fKAKAO_SWIPER = new Swiper(".Mfkakao_Box", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 18,
    });
    $('.mfqContactBtn').on('click', function(){   
      var M_Q_CONTACTBTN = $(this);
      var M_Q_BTN_BOX = M_Q_CONTACTBTN.closest('.MfqContactBtn_Box');
      var M_Q_CONTACT_BOX = M_Q_BTN_BOX.next('.fqContact_Box');
      var M_Q_CONTACT_FORM = M_Q_CONTACT_BOX.children('.fqform_Box');

      $('.Mqbtn_active').removeClass('Mqbtn_active');
      $('.fqcontentblock').removeClass('fqcontentblock');
      M_Q_CONTACTBTN.addClass('Mqbtn_active');
      M_Q_BTN_BOX.addClass('MqBtnBox_none');
      M_Q_CONTACT_BOX.addClass('MqContactBox_block');
      M_Q_CONTACT_FORM.addClass('fqcontentblock');
    });
    $('.fqkakaoBtn').on('click', function(){
      var M_Q_KAKAOBTN = $(this);
      var _M_Q_BTN_BOX = M_Q_KAKAOBTN.closest('.MfqContactBtn_Box');
      var _M_Q_CONTACT_BOX = _M_Q_BTN_BOX.next('.fqContact_Box');
      var _M_Q_KAKAO_LIST = _M_Q_CONTACT_BOX.children('.Mfkakao_Box');

      $('.Mqbtn_active').removeClass('Mqbtn_active');
      $('.fqcontentblock').removeClass('fqcontentblock');
      M_Q_KAKAOBTN.addClass('Mqbtn_active');
      _M_Q_BTN_BOX.addClass('MqBtnBox_none');
      _M_Q_CONTACT_BOX.addClass('MqContactBox_block');
      _M_Q_KAKAO_LIST.addClass('fqcontentblock');
    });
    $('.fqCloseBtn').on('click', function(){
      var M_Q_CLOSEBTN = $(this);
      var __M_Q_CONTACT_CONTENT = M_Q_CLOSEBTN.closest('.fqContact_contBox');
      var __M_Q_CONTACT_BOX = __M_Q_CONTACT_CONTENT.closest('.fqContact_Box');
      var __M_Q_BTN_BOX = __M_Q_CONTACT_BOX.prev('.MfqContactBtn_Box');
      
      $('.Mqbtn_active').removeClass('Mqbtn_active');
      $('.fqcontentblock').removeClass('fqcontentblock');
      $('.MqContactBox_block').removeClass('MqContactBox_block');
      __M_Q_BTN_BOX.removeClass('MqBtnBox_none');
    });
  }

  //quick contact btn
  $(".fqContactBtn").on("click", function () {
    ACT_QUICK_CONTACT = $(this);
    if (ACT_QUICK_CONTACT.hasClass("on")) {
      ACT_QUICK_CONTACT.text("빠른상담").removeClass("on");
      $(".fqContactBtn_Box").removeClass("move_Box");
      $(".fqContact_Box").removeClass("qContact_blk");
    } else {
      ACT_QUICK_CONTACT.text("").addClass("on");
      $(".fqContactBtn_Box").addClass("move_Box");
      $(".fqContact_Box").addClass("qContact_blk");
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
  $(".currentTabBtn").css({ "pointer-events": "none" });
  $(".subTabBtn").on("click", function () {
    var ACT_SUBTAB = $(this);
    var subTab_DATA = ACT_SUBTAB.attr("data-tab");
    var subTab_SUBLIST = ACT_SUBTAB.next(".stabSubList");
    var subTAB_SUBBTN = subTab_SUBLIST.find(".stabSubBtn_first");
    var subTabsubbtn_DATA = subTAB_SUBBTN.attr("data-stab");
    var ACT_TABCONT = $("#" + subTab_DATA);
    var ACT_sTABCONT = $("#" + subTabsubbtn_DATA);

    if (ACT_SUBTAB.hasClass("currentTabBtn")) {
      ACT_SUBTAB.removeClass("currentTabBtn").css({ "pointer-events": "auto" });
      ACT_TABCONT.removeClass("currentListCont");
      subTab_SUBLIST.removeClass("currebtTabList");
      subTAB_SUBBTN
        .removeClass("currentsTabBtn")
        .css({ "pointer-events": "auto" });
      ACT_sTABCONT.removeClass("currentListCont");
    } else {
      $(".currentTabBtn")
        .removeClass("currentTabBtn")
        .css({ "pointer-events": "auto" });
      $(".currentListCont").removeClass("currentListCont");
      $(".currebtTabList").removeClass("currebtTabList");
      $(".currentsTabBtn")
        .removeClass("currentsTabBtn")
        .css({ "pointer-events": "auto" });
      ACT_SUBTAB.addClass("currentTabBtn").css({ "pointer-events": "none" });
      ACT_TABCONT.addClass("currentListCont");
      subTab_SUBLIST.addClass("currebtTabList");
      subTAB_SUBBTN
        .addClass("currentsTabBtn")
        .css({ "pointer-events": "none" });
      ACT_sTABCONT.addClass("currentListCont");
    }
  });
  //subtab sublist active
  $(".currentsTabBtn").css({ "pointer-events": "none" });
  $(".stabSubBtn").on("click", function () {
    var ACT_sSUB = $(this);
    var ssTab_DATA = ACT_sSUB.attr("data-stab");
    //var PARENT_TAB = ACT_sSUB.closest('.subTabBtn');
    var ACT_TABCONT = $("#" + ssTab_DATA);
    if (ACT_sSUB.hasClass("currentsTabBtn")) {
      ACT_sSUB.removeClass("currentsTabBtn").css({ "pointer-events": "auto" });
      ACT_TABCONT.removeClass("currentListCont");
    } else {
      $(".currentsTabBtn")
        .removeClass("currentsTabBtn")
        .css({ "pointer-events": "auto" });
      $(".currentListCont").removeClass("currentListCont");
      ACT_sSUB.addClass("currentsTabBtn").css({ "pointer-events": "none" });
      ACT_TABCONT.addClass("currentListCont");
      //PARENT_TAB.addClass('currentTabBtn');
    }
  });
});
