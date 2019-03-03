// // var pageName = {
// //     resizeFun: function () {
// //         function resizeBody(){
// //             var _width = $(document).width() < $('html').width() ? $(document).width() : $('html').width(),
// //                 _height = $(document).height() < $('html').height() ? $(document).height() : $('html').height(),
// //                 _wScale= _width/1280,
// //                 _hScale = _height/1824,
// //                 _scale = Math.min(_wScale,_hScale);//以宽度为基准缩放
// //
// //             $('body').css({
// //                 "-webkit-transform":"scale("+_wScale+")",
// //                 "-moz-transform":"scale("+_wScale+")",
// //                 "transform":"scale("+_wScale+")"
// //
// //             });
// //         }
// //         resizeBody();
// //         $(window).resize(function() {
// //             resizeBody();
// //         });
// //     },
// //     init: function () {
// //         this.resizeFun();//页面缩放
// //     }
// // }
// // pageName.init();
//
//     $(function() {
//         var r = document.body.offsetWidth / window.screen.availWidth;
//         $(document.body).css("-webkit-transform","scale(" + r + ")");
//     });
// $(window).resize(function() {
//     var r = document.body.offsetWidth / window.screen.availWidth;
//     $(document.body).css("-webkit-transform","scale(" + r + ")");
// });
