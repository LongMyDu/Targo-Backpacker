var SliderEffect = (function() {
    var DOMStrings = {
        slide: 'gallery-slider', 
        slideContainer: 'horizontal-gallery',
        nextArrow: 'right-arrow',
        preArrow: 'left-arrow'
    };

    
    var counter = 0;

    var WebItems = {
        slider: document.querySelector("." + DOMStrings.slide),
        container: document.querySelector("." + DOMStrings.slideContainer),
        next: document.querySelector("." + DOMStrings.nextArrow),
        pre: document.querySelector("." + DOMStrings.preArrow),
        
        imgList: document.querySelectorAll("." + DOMStrings.slide + " > img")
    };

    var setUpEventListener = function() {
        console.log(WebItems.imgList);
        WebItems.next.addEventListener('click', WebEffects.next);
        WebItems.pre.addEventListener('click', WebEffects.pre);
    }

   
    var WebEffects = {
        next: function() {
            counter ++ ;

            if (counter >= WebItems.imgList.length) {
                counter = WebItems.imgList.length - 1;
                return;
            }
            console.log(counter);
            WebItems.slider.style.transform = 'translateX(' + -(counter)*100 + '%)';
        },

        pre: function() {
            counter --;
            if (counter < 0) {
                counter = 0;
                return;
            }
            console.log(counter);
            WebItems.slider.style.transform = 'translateX(' + -(counter)*100  + '%)';
        }
    }

    return {
        init : function() {
            setUpEventListener();
            console.log("Started");
        }
    };
})();

SliderEffect.init();
