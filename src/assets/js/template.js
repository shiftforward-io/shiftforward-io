(function(o){"use strict";theme.PluginScrollToTop.initialize=function(){},"undefined"!=typeof LocomotiveScroll?(window.scrollTo(0,0),setTimeout((function(){let i,t=function(){window.scrollTo(0,0),i=new LocomotiveScroll({el:document.querySelector("[data-scroll-container]"),smooth:!0,direction:window.innerWidth>1199?"horizontal":"vertical",mobile:{breakpoint:0,smooth:!0,direction:window.innerWidth>1199?"horizontal":"vertical"},tablet:{breakpoint:0,smooth:!0,direction:window.innerWidth>1199?"horizontal":"vertical"}}),i.on("scroll",(function(){ScrollTrigger.update()}))};t(),o("[data-hash]").off().on("click",(function(t){t.preventDefault(),t.stopPropagation();const e=o(o(this).attr("href")).get(0);i.scrollTo(e)})),o(window).afterResize((function(){i.destroy(),t()}))}),100),window.onbeforeunload=function(){window.scrollTo(0,0)}):theme.fn.showErrorMessage("Failed to Load File","Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)")}).apply(this,[jQuery]);