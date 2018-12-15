$(document).ready(function() {
  "use strict";
  var tpj = jQuery;

  var revapi8;
  tpj(document).ready(function() {
    if (tpj("#js-slider-home05").revolution == undefined) {
      revslider_showDoubleJqueryError("#js-slider-home05");
    } else {
      revapi8 = tpj("#js-slider-home05")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          autoHeight: "off",
          fullScreenOffsetContainer: ".home05-cta-main",
          delay: 9000,
          spinner:"off",
          navigation: {
            arrows: {
              enable: false,
              hide_onmobile: false,
              hide_onleave: true,
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 10,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1920, 1024, 768, 481],
          gridwidth: [1170, 768, 481, 300],
          gridheight: [700, 700, 700, 700]
        });
    }
  }); /*ready*/
});
