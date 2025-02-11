         function onYouTubeIframeAPIReady() {
            $(document).ready(function() {
             $('.embed-video').embedVideo({
                 enablejsapi: 1,
                 callback: function(iframe) {
                     player = new YT.Player(iframe, {
                         events: {
                             'onReady': function(){
                                 if (!$(iframe).parent().data('autoplay')) {
                                     player.playVideo();
                                    }
                                    $('.video-thumbnail').hide()
                                    $('.play-video').hide()
                             }
                         }
                     });
                 }
             });                
            });
         }
         onYouTubeIframeAPIReady();