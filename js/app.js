$('.navbar-toggle').click(function() {
    $(this).toggleClass('active');
});

$(document).ready(function(){
    /**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     */
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function (elements) {
            this.elements = elements;
        },

        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    myNavBar.init(  [
        "header"
    ]);

    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager(){

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }
    }

    function addClass() {
        var bar = false;
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        $('.collapse').on('show.bs.collapse', function () {
            myNavBar.add();
        })
        .on('hidden.bs.collapse', function () {
            if (yOffset < currYOffSet) {
                myNavBar.add();
            }
            else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }
        });
    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function(e) {
        offSetManager();
        addClass();
    };

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     */
    offSetManager();
    addClass();

    $('.slide').on('init', function(event, slick){
        $('.a-left').css('display', 'none');
             }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (currentSlide == 0 && nextSlide == 1) {
                    $('.a-left').css('display', 'block');
                }
                else if (currentSlide == 1 && nextSlide == 0) {
                    $('.a-left').css('display', 'none');
                }
             });

    $('.slide').slick({
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        rows: 2,
        // slidesPerRow: 1,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='img/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right.png'>",
        responsive: [
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                   {
                       breakpoint: 769,
                       settings: {
                           slidesToShow: 4,
                       }
                   },
                   {
                       breakpoint: 993,
                       settings: {
                           slidesToShow: 4,
                       }
                   },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                        }
                    },
                    {
                        breakpoint: 1370,
                        settings: {
                            slidesToShow: 6,
                        }
                    }
        ]
    });

    window.sr = ScrollReveal();
    sr.reveal('.box', { duration: 1000 }, 50);
    sr.reveal('.foo', {
        duration: 400,
        origin: 'left',
        distance: '30px',
        scale: 1,
        easing: 'linear',
        delay: 10,
        useDelay: 'once'
    });



});