function fillActions() {

  var html_click_avail = true;

  function onInit() {

    /* PROGGRESS START */
    // $.mpb("show", {value: [0, 50], speed: 5});
    /* END PROGGRESS START */

    /* MESSAGES LOADING */
    $(".messages .item").each(function (index) {
      var elm = $(this);
      setInterval(function () {
        elm.addClass("item-visible");
      }, index * 300);
    });
    /* END MESSAGES LOADING */

    // XN PANEL DRAGGING
    $(".xn-panel-dragging").draggable({
      containment: ".page-content", handle: ".panel-heading", scroll: false,
      start: function (event, ui) {
        html_click_avail = false;
        $(this).addClass("dragged");
      },
      stop: function (event, ui) {
        $(this).resizable({
          maxHeight: 400,
          maxWidth: 600,
          minHeight: 200,
          minWidth: 200,
          helper: "resizable-helper",
          start: function (event, ui) {
            html_click_avail = false;
          },
          stop: function (event, ui) {
            $(this).find(".panel-body").height(ui.size.height - 82);
            $(this).find(".scroll").mCustomScrollbar("update");

            setTimeout(function () {
              html_click_avail = true;
            }, 1000);

          }
        });

        setTimeout(function () {
          html_click_avail = true;
        }, 1000);
      }
    });
    // END XN PANEL DRAGGING

    x_navigation();
  }

  $(function () {
    onInit();
    onload();

    /* PROGGRESS COMPLETE */
    $.mpb("show", {
      value: 100, speed: 5, complete: function () {
        $(".mpb").fadeOut(200, function () {
          $(this).remove();
        });
      }
    });
    /* END PROGGRESS COMPLETE */
  });

  $(window).resize(function () {
    x_navigation_onresize();
    page_content_onresize();
  });

  function onload() {
    x_navigation_onresize();
    page_content_onresize();
  }

  function page_content_onresize() {
    $(".page-content,.content-frame-body,.content-frame-right,.content-frame-left").css("width", "").css("height", "");

    var content_minus = 0;
    content_minus = ($(".page-container-boxed").length > 0) ? 40 : content_minus;
    content_minus += ($(".page-navigation-top-fixed").length > 0) ? 50 : 0;

    var content = $(".page-content");
    var sidebar = $(".page-sidebar");

    if (content.height() < $(document).height() - content_minus) {
      content.height($(document).height() - content_minus);
    }

    if (sidebar.height() > content.height()) {
      content.height(sidebar.height());
    }

    if ($(window).width() > 1024) {

      if (sidebar.hasClass("scroll")) {
        var doc_height = 0;
        if ($("body").hasClass("page-container-boxed")) {
          doc_height = $(document).height() - 40;
        } else {
          doc_height = $(window).height();
        }
        sidebar.height(doc_height);
      }

      if ($(".content-frame-body").height() < $(document).height() - 162) {
        $(".content-frame-body,.content-frame-right,.content-frame-left").height($(document).height() - 162);
      } else {
        $(".content-frame-right,.content-frame-left").height($(".content-frame-body").height());
      }

      $(".content-frame-left").show();
      $(".content-frame-right").show();
    } else {
      $(".content-frame-body").height($(".content-frame").height() - 80);

      if (sidebar.hasClass("scroll"))
        sidebar.css("height", "");
    }

    if ($(window).width() < 1200) {
      if ($("body").hasClass("page-container-boxed")) {
        $("body").removeClass("page-container-boxed").data("boxed", "1");
      }
    } else {
      if ($("body").data("boxed") === "1") {
        $("body").addClass("page-container-boxed").data("boxed", "");
      }
    }
  }

  /* PANEL FUNCTIONS */
  function panel_fullscreen(panel) {

    if (panel.hasClass("panel-fullscreened")) {
      panel.removeClass("panel-fullscreened").unwrap();
      panel.find(".panel-body,.chart-holder").css("height", "");
      panel.find(".panel-fullscreen .fa").removeClass("fa-compress").addClass("fa-expand");

      $(window).resize();
    } else {
      var head = panel.find(".panel-heading");
      var body = panel.find(".panel-body");
      var footer = panel.find(".panel-footer");
      var hplus = 30;

      if (body.hasClass("panel-body-table") || body.hasClass("padding-0")) {
        hplus = 0;
      }
      if (head.length > 0) {
        hplus += head.height() + 21;
      }
      if (footer.length > 0) {
        hplus += footer.height() + 21;
      }

      panel.find(".panel-body,.chart-holder").height($(window).height() - hplus);


      panel.addClass("panel-fullscreened").wrap('<div class="panel-fullscreen-wrap"></div>');
      panel.find(".panel-fullscreen .fa").removeClass("fa-expand").addClass("fa-compress");

      $(window).resize();
    }
  }

  function panel_collapse(panel, action, callback) {

    if (panel.hasClass("panel-toggled")) {
      panel.removeClass("panel-toggled");

      panel.find(".panel-collapse .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");

      if (action && action === "shown" && typeof callback === "function")
        callback();

      onload();

    } else {
      panel.addClass("panel-toggled");

      panel.find(".panel-collapse .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");

      if (action && action === "hidden" && typeof callback === "function")
        callback();

      onload();

    }
  }

  function panel_refresh(panel, action, callback) {
    if (!panel.hasClass("panel-refreshing")) {
      panel.append('<div class="panel-refresh-layer"><img src="assets/img/loaders/default.gif"/></div>');
      panel.find(".panel-refresh-layer").width(panel.width()).height(panel.height());
      panel.addClass("panel-refreshing");

      if (action && action === "shown" && typeof callback === "function")
        callback();
    } else {
      panel.find(".panel-refresh-layer").remove();
      panel.removeClass("panel-refreshing");

      if (action && action === "hidden" && typeof callback === "function")
        callback();
    }
    onload();
  }

// function panel_remove(panel, action, callback) {
//   if (action && action === "before" && typeof callback === "function")
//     callback();
//
//   panel.animate({'opacity': 0}, 200, function () {
//     panel.parent(".panel-fullscreen-wrap").remove();
//     $(this).remove();
//     if (action && action === "after" && typeof callback === "function")
//       callback();
//
//
//     onload();
//   });
// }

  /* EOF PANEL FUNCTIONS */

  /* X-NAVIGATION CONTROL FUNCTIONS */
  function x_navigation_onresize() {

    var inner_port = window.innerWidth || $(document).width();

    if (inner_port < 1025) {
      $(".page-sidebar .x-navigation").removeClass("x-navigation-minimized");
      $(".page-container").removeClass("page-container-wide");
      $(".page-sidebar .x-navigation li.active").removeClass("active");


      $(".x-navigation-horizontal").each(function () {
        if (!$(this).hasClass("x-navigation-panel")) {
          $(".x-navigation-horizontal").addClass("x-navigation-h-holder").removeClass("x-navigation-horizontal");
        }
      });


    } else {
      if ($(".page-navigation-toggled").length > 0) {
        x_navigation_minimize("close");
      }

      $(".x-navigation-h-holder").addClass("x-navigation-horizontal").removeClass("x-navigation-h-holder");
    }

  }

  function x_navigation_minimize(action) {

    if (action === 'open') {
      $(".page-container").removeClass("page-container-wide");
      $(".page-sidebar .x-navigation").removeClass("x-navigation-minimized");
      if ($(".page-mode-rtl").length > 0) {
        $(".x-navigation-minimize").find(".fa").removeClass("fa-dedent").addClass("fa-indent");
      }else {
        $(".x-navigation-minimize").find(".fa").removeClass("fa-indent").addClass("fa-dedent");
      }

      $(".page-sidebar.scroll").mCustomScrollbar("update");
    }

    if (action === 'close') {
      $(".page-container").addClass("page-container-wide");
      $(".page-sidebar .x-navigation").addClass("x-navigation-minimized");
      if ($(".page-mode-rtl").length > 0) {
        $(".x-navigation-minimize").find(".fa").removeClass("fa-indent").addClass("fa-dedent");
      }else {
        $(".x-navigation-minimize").find(".fa").removeClass("fa-dedent").addClass("fa-indent");
      }

      $(".page-sidebar.scroll").mCustomScrollbar("disable", true);
    }

    $(".x-navigation li.active").removeClass("active");

  }

  // test 1

  $(document).on("click", ".x-navigation-control", function () {
    $(this).parents(".x-navigation").toggleClass("x-navigation-open");

    onresize();

    return false;
  });

  $(document).on("click", ".x-navigation-minimize", function () {
    if ($(".page-sidebar .x-navigation").hasClass("x-navigation-minimized")) {
      $(".page-container").removeClass("page-navigation-toggled");
      x_navigation_minimize("open");
    } else {
      $(".page-container").addClass("page-navigation-toggled");
      x_navigation_minimize("close");
    }

    onresize();

    return false;
  });

  $(document).on("click", ".x-navigation  li > a", function () {
    var li = $(this).parent('li');
    var ul = li.parent("ul");

    ul.find(" > li").not(li).removeClass("active");

  });

  $(document).on("click", ".x-navigation li", function (event) {
    event.stopPropagation();

    var li = $(this);

    if (li.children("ul").length > 0 || li.children(".panel").length > 0 || $(this).hasClass("xn-profile") > 0) {
      if (li.hasClass("active")) {
        li.removeClass("active");
        li.find("li.active").removeClass("active");
      } else
        li.addClass("active");

      onresize();

      return $(this).hasClass("xn-profile") > 0;
    }
  });

  /* XN-SEARCH */
  $(document).on("click", ".xn-search", function () {
    $(this).find("input").focus();
  });

  //end test 1

  function x_navigation() {
    if ($(".page-navigation-toggled").length > 0) {
      x_navigation_minimize("close");
    }
  }

  /* EOF X-NAVIGATION CONTROL FUNCTIONS */

  /* PAGE ON RESIZE WITH TIMEOUT */
  function onresize(timeout) {
    timeout = timeout ? timeout : 200;

    setTimeout(function () {
      page_content_onresize();
    }, timeout);
  }

  /* EOF PAGE ON RESIZE WITH TIMEOUT */

  /* PLAY SOUND FUNCTION */
  function playAudio(file) {
    if (file === 'alert')
      document.getElementById('audio-alert').play();

    if (file === 'fail')
      document.getElementById('audio-fail').play();
  }

  /* END PLAY SOUND FUNCTION */

  /* NEW OBJECT(GET SIZE OF ARRAY) */
  Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  /* EOF NEW OBJECT(GET SIZE OF ARRAY) */


  $(document).on("click", "html", function () {
    if (html_click_avail)
      $(".x-navigation-horizontal li,.x-navigation-minimized li").removeClass('active');
  });

  $(document).on("click", ".x-navigation-horizontal .panel", function (e) {
    e.stopPropagation();
  });

  /* WIDGETS (DEMO)*/
  $(document).on("click", ".widget-remove", function () {
    $(this).parents(".widget").fadeOut(400, function () {
      $(this).remove();
      $("body > .tooltip").remove();
    });
    return false;
  });
  /* END WIDGETS */

  /* Gallery Items */
  $(document).on("click", ".gallery-item .iCheck-helper", function () {
    var wr = $(this).parent("div");
    if (wr.hasClass("checked")) {
      $(this).parents(".gallery-item").addClass("active");
    } else {
      $(this).parents(".gallery-item").removeClass("active");
    }
  });

  $(document).on("click", ".gallery-item-remove", function () {
    $(this).parents(".gallery-item").fadeOut(400, function () {
      $(this).remove();
    });
    return false;
  });

  $(document).on("click", "#gallery-toggle-items", function () {
    $(".gallery-item").each(function () {

      var wr = $(this).find(".iCheck-helper").parent("div");

      if (wr.hasClass("checked")) {
        $(this).removeClass("active");
        wr.removeClass("checked");
        wr.find("input").prop("checked", false);
      } else {
        $(this).addClass("active");
        wr.addClass("checked");
        wr.find("input").prop("checked", true);
      }

    });

  });
  /* END Gallery Items */

  /* DROPDOWN TOGGLE */
  $(document).on("click", ".dropdown-toggle", function () {
    onresize();
  });
  /* DROPDOWN TOGGLE */

  /* MESSAGE BOX */
  $(document).on("click", ".mb-control", function () {
    var box = $($(this).data("box"));
    if (box.length > 0) {
      box.toggleClass("open");

      var sound = box.data("sound");

      if (sound === 'alert')
        playAudio('alert');

      if (sound === 'fail')
        playAudio('fail');

    }
    return false;
  });
  $(document).on("click", ".mb-control-close", function () {
    $(this).parents(".message-box").removeClass("open");
    return false;
  });
  /* END MESSAGE BOX */

  /* CONTENT FRAME */
  $(document).on("click", ".content-frame-left-toggle", function () {
    $(".content-frame-left").is(":visible")
      ? $(".content-frame-left").hide()
      : $(".content-frame-left").show();
    page_content_onresize();
  });

  $(document).on("click", ".content-frame-right-toggle", function () {
    $(".content-frame-right").is(":visible")
      ? $(".content-frame-right").hide()
      : $(".content-frame-right").show();
    page_content_onresize();
  });
  /* END CONTENT FRAME */

  /* MAILBOX */
  $(document).on("click", ".mail .mail-star", function () {
    $(this).toggleClass("starred");
  });

  $(document).on("click", ".mail-checkall .iCheck-helper", function () {
    var prop = $(this).prev("input").prop("checked");

    $(".mail .mail-item").each(function () {
      var cl = $(this).find(".mail-checkbox > div");
      cl.toggleClass("checked", prop).find("input").prop("checked", prop);
    });

  });
  /* END MAILBOX */


  /* PANELS */

  $(document).on("click", ".panel-fullscreen", function () {
    panel_fullscreen($(this).parents(".panel"));
    return false;
  });


  $(document).on("click", ".panel-collapse", function () {
    panel_collapse($(this).parents(".panel"));
    $(this).parents(".dropdown").removeClass("open");
    return false;
  });

// $(document).on("click", ".panel-remove", function () {
//   panel_remove($(this).parents(".panel"));
//   $(this).parents(".dropdown").removeClass("open");
//   return false;
// });

  $(document).on("click", ".panel-refresh", function () {
    var panel = $(this).parents(".panel");
    panel_refresh(panel);

    setTimeout(function () {
      panel_refresh(panel);
    }, 3000);

    $(this).parents(".dropdown").removeClass("open");
    return false;
  });
  /* EOF PANELS */

  /* ACCORDION */
  $(document).on("click", ".accordion .panel-title a", function () {
    var blockOpen = $(this).attr("href");
    var accordion = $(this).parents(".accordion");
    var noCollapse = accordion.hasClass("accordion-dc");


    if ($(blockOpen).length > 0) {

      if ($(blockOpen).hasClass("panel-body-open")) {
        $(blockOpen).slideUp(200, function () {
          $(this).removeClass("panel-body-open");
        });
      } else {
        $(blockOpen).slideDown(200, function () {
          $(this).addClass("panel-body-open");
        });
      }

      if (!noCollapse) {
        accordion.find(".panel-body-open").not(blockOpen).slideUp(200, function () {
          $(this).removeClass("panel-body-open");
        });
      }

      return false;
    }

  });
  /* EOF ACCORDION */

  /* DATATABLES/CONTENT HEIGHT FIX */
  $(document).on("change", ".dataTables_length select", function () {
    onresize();
  });
  /* END DATATABLES/CONTENT HEIGHT FIX */

  /* TOGGLE FUNCTION */
  $(document).on("click", ".toggle", function () {
    var elm = $("#" + $(this).data("toggle"));
    if (elm.is(":visible"))
      elm.addClass("hidden").removeClass("show");
    else
      elm.addClass("show").removeClass("hidden");

    return false;
  });
  /* END TOGGLE FUNCTION */

}
