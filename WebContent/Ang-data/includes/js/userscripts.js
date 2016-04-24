     $(document).ready(function() {
            $("#content-slider").lightSlider({
                 autoWidth:true,
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                 autoWidth:true,
                gallery:false,
                item:1,
                slideMargin: 0,
                speed:2000,
                auto:true,
                loop:true  ,

                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
        });