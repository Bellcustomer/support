// Using IIFEE to avoid variable conflicts
(function () {
    // Start document ready
    $(function () {

        const handleWindowResize = function (callbackFunction) {
            //Start Window resize
            let resizeTimeoutFn = 0;
            $(window).on('resize', function () {
                clearTimeout(resizeTimeoutFn);
                resizeTimeoutFn = setTimeout(callbackFunction, 200);
            });
        }

        //Start Lazyload function
        function lazyLoad(container) {
            var modalEl = container;
            setTimeout(function () {
                var lazyImages;
                if (typeof jQuery.fn.Lazy === 'function') {
                    lazyImages = modalEl.find("img.lazy");
                    lazyImages.Lazy({ effect: "fadeIn" });
                }
            }, 100);
        }
        //End Lazyload function

        (function () {
            // Start Reuseable youtube Iframe API      
            function youTubeIframeApi() {
                var tag = document.createElement('script');
                var firstScriptTag = document.getElementsByTagName('script')[0];
                tag.src = 'https://www.youtube.com/iframe_api';
		tag.async = true;
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                window.onYouTubeIframeAPIReady = function () {
                    videoModal ? modalVideoPlayer.initialize() : '';
                    //add your youtube player here
                }
            }
            // End Reuseable youtube Iframe API    

            //Start modal video player
            //modal for youtube video 
            const videoModal = document.querySelector('#video-modal');

            // this initializes upon loading youtube iframe api
            const modalVideoPlayer = {
                initialize: function () {
                    const modal = $('#video-modal');
                    const iframe = document.querySelector('#video-modal iframe');
                    const videoPlayer = new YT.Player(iframe);
                    const defaultSource = 'https://www.youtube.com/embed/';

                    // set modal accessibility fixes
                    modal.find('[data-dismiss="modal"]').attr('role', 'button').addClass('close');
                    modal.attr('aria-label', 'Video Player');
                    modal.find('.bce-modal-header').prepend('<h2 class="sr-only">Video Player</h2>');

                    // configure iframe
                    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                    iframe.setAttribute('src', defaultSource);

                    // set iframe source and play
                    $(document).on('click', '[data-toggle="video-modal"]', function (e) {
                        e.preventDefault();
                        $("#video-modal").modal('show');
                        const $this = $(this);
                        const videoId = $this.data('video-id');
                        const playerSettings = $this.data('video-settings');
                        iframe.setAttribute('src', defaultSource + videoId + playerSettings);
                        iframe.addEventListener('load', iframeEvent);
                    });
                    //upon closing modal, remove iframe event handler to avoid redundancies and set the source back to default
                    $(document).on('hidden.bs.modal', '#video-modal', function () {
                        iframe.removeEventListener('load', iframeEvent);
                        iframe.setAttribute('src', defaultSource);
                    })
                    //iframe event callback
                    const iframeEvent = function () {
                        try {
                            videoPlayer.playVideo();
                        }
                        catch (error) { }
                    }

                    // add a focusable span that serves as the last focusable element inside the modal. When this receives focus, the close button will quickly and automatically get the focus instead.
                    // The purpose of this is to trap the focus inside the video modal. This is just a remedy because we can't access the focused element inside the youtube iframe.
                    modal.find('.modal-body').append('<span tabindex="0" class="video-modal-focus-trapper"></span>');

                    this.setTabbing();
                },
                // set tabbing inside the modal to trap focus
                setTabbing: function () {
                    const videoModal = $('#video-modal');
                    videoModal.on('keydown', function (e) {
                        const tabPressed = e.key === 'Tab' || e.keyCode === 9;
                        // proceed only to the remaining script if tab key is pressed
                        if (!tabPressed) {
                            return;
                        }
                        // if tab + shift key is pressed, set focus to iframe to prevent focus going outside the page.
                        if (e.shiftKey) {
                            $(this).find('iframe').focus();
                        }
                    });
                    // set focus to close button when it reaches the last focusable element
                    videoModal.on('focus', '.video-modal-focus-trapper', function (e) {
                        videoModal.find('a.close').focus();
                    });
                }
            }

            // Returns focus on modal trigger upon closing modal [SPRINT 14.2 - BTC-8499]
            function modalTriggerReturnFocus() {
                let modalTrigger;
                $(document).on('click', '[data-toggle="modal"], [data-toggle="video-modal"]', function () {
                    modalTrigger = $(this);
                });
                $('body').on('hidden.bs.modal', '.modal ', function () {
                    if (modalTrigger) {
                        modalTrigger.focus();
                        modalTrigger = "";
                    }
                });
            }

            retainFocusOutline($(".video-thumbnail"));
            modalTriggerReturnFocus();
            //End modal video player

            //Initialize youtube iframe api AFTER page fully loads
		window.addEventListener('load', function () {
    		youTubeIframeApi();
		});
        })();

        //Start scroll fix for accordion
        (function () {
            $(document).on('shown.bs.collapse', '.scroll-to-top-js .accordion-wrap', function (e) {

                const expandedAccordion = $(this);
                const expandedAccordionPosition = expandedAccordion.get(0).getBoundingClientRect();

                //if the expanded accordion reached outside of screen / overlapped by the global nav
                if (expandedAccordionPosition.top <= 56) {
                    $('html, body').animate({
                        scrollTop: expandedAccordion.offset().top - 60
                    }, 0);
                }
            });
        })();
        //End scroll fix for accordion

        //Add aria-describedby to video modal video triggers to inform users that the button triggers a video in a dialog
        (function () {
            const videoModalTrigger = $('[data-toggle=video-modal]');
            videoModalTrigger.each(function (index) {
                const describeId = 'video-modal-trigger-description-' + index;
                const language = $('html').attr('lang');
                const describedByText = (language === 'fr') ? 'Ouvre une bo&icirc;te de dialogue modale vid&eacute;o' : 'Opens a video modal dialog';
                const describedBy = '<span class="sr-only" id="' + describeId + '" aria-hidden="true">' + describedByText + '</span>';
                const currentDescribedby = $(this).attr('aria-describedby');
                $(describedBy).insertAfter($(this));
                if (!currentDescribedby) {
                    $(this).attr('aria-describedby', describeId)
                } else {
                    $(this).attr('aria-describedby', currentDescribedby + " " + describeId)
                }
            });
        })();

        // Start slick event handler to hide offsreen cards
        (function () {
            $('.hiddenInactiveSlides').on('init', function () {
                retainFocusOutline($(".slick-arrow"));
                $(this).find('.slick-slide[aria-hidden="true"]').addClass('offscreen');
            });

            function hideInactiveSlides() {
                $('.hiddenInactiveSlides').on('afterChange', function () {
                    $(this).find('.slick-slide[aria-hidden="true"]').addClass('offscreen');
                    $(this).removeClass('sliding');         
                });
                $('.hiddenInactiveSlides').on('beforeChange', function () {
                    $(this).find('.slick-slide[aria-hidden="true"]').removeClass('offscreen');
                    $(this).addClass('sliding');
                });
                let mousedown = false;
                $('.hiddenInactiveSlides').on('mousedown', function () {
                    mousedown = true;
                });
                $('.hiddenInactiveSlides').on('mouseup', function () {
                    mousedown = false;
                });
                $('.hiddenInactiveSlides').on('mousemove', function () {
                    if (mousedown) {
                        $(this).find('.slick-slide[aria-hidden="true"]').removeClass('offscreen');
                    }
                });      
            }

            // initialize hideInactiveSlides
            hideInactiveSlides();
        })();
        // End slick event handler to hide offsreen cards

        // Start Update Slick Accessibility Relations since the settings "accessibility is set to false"
        (function () {
            function getOrdinal(number) {
                let prefix = 'th';

                if (number % 10 == 1 && number % 100 != 11) {
                    prefix = 'st';
                } else if (number % 10 == 2 && number % 100 != 12) {
                    prefix = 'nd';
                } else if (number % 10 == 3 && number % 100 != 13) {
                    prefix = 'rd';
                }
                return prefix;
            }

            function updateSlickRelations() {
                $('.manualSlickAccessibility').on('init breakpoint', function () {
                    const $this = $(this);
                    $this.each(function () {             
                       
                        //Update Dots Accessibility
                        const slickDotsParent = $this.find('.slick-dots');
                        const slickDotsList = $this.find('.slick-dots li');
                        let slickDots = $this.find('.slick-dots button');
                        let notActiveSlickDots = $this.find('.slick-dots li:not(.slick-active) button');
                        let dotsDescription = $this.siblings('.dots-description').attr('id')
                        let componentName = $this.closest('.container').find('.carousel-heading').attr('id');

                        slickDotsParent.attr('role', 'tablist');
                        slickDotsList.attr('role', 'presentation');
                        slickDots.attr({ 'role': 'tab', 'aria-selected': 'false', "tabindex": "0" });
                        notActiveSlickDots.attr( 'tabindex', -1 );
                        slickDotsParent.find('.slick-active button').attr('aria-selected', 'true');

                        slickDots.attr('aria-describedby', dotsDescription);
                        slickDots.each(function (eachCounter) {
                            const currentButtonNumber = eachCounter + 1
                            const order = getOrdinal(currentButtonNumber);
                            $(this).attr('id', componentName + '-slick-slide-control' + currentButtonNumber);
                            $(this).attr('aria-controls', componentName + '-slick-slide' + currentButtonNumber);
                            $(this).attr('aria-label', currentButtonNumber + order);
                        });


                        //Update Slide Accesssibility
                        $this.find('.slick-slide').attr('role', 'tabpanel');
                        let slickSlide = $this.find('.slick-slide')

                        slickSlide.each(function (eachCounter) {
                            const currentButtonNumber = eachCounter + 1
                            $(this).attr("id", componentName + '-slick-slide' + currentButtonNumber);
                            $(this).attr('aria-labelledby', componentName + '-slick-slide-control' + currentButtonNumber);
                        });
                        
                    })
                })

                $('.manualSlickAccessibility').on('afterChange', function () {
                    const $this = $(this);

                    $this.each(function () {
                       
                        //Update Dots Accessibility
                        const slickDotsParent = $this.find('.slick-dots');
                        const slickDots = $this.find('.slick-dots button');
                        let notActiveSlickDots = $this.find('.slick-dots li:not(.slick-active) button');
                        slickDots.attr({ 'aria-selected': 'false', "tabindex": "0" });
                        notActiveSlickDots.attr('tabindex', -1);
                        slickDotsParent.find('.slick-active button').attr('aria-selected', 'true');
                    })
                })
            }
            //Initialize updateSlickRelations
            updateSlickRelations();
        })();
        // End Update Slick Accessibility Relations since the settings "accessibility is set to false"

        // START configurable-slider
        (function () {

            const initializeSlickConfig = function (slick, currentEvent) {
                const slickInstance = slick.$slider;
                retainFocusOutline(slickInstance.find('.slick-arrow'));
                const customConfigData = (slickInstance) ? slickInstance.data("custom-config") : '';
                lazyLoad(slickInstance);
                if (!customConfigData) return;
                let slickCurrentSlide = slick.currentSlide; 
                const customConfigFunctions = {

                    "inactiveItemAriaHidden": function (value) {
                        const eventTypes = ['init'];
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        slickInstance.find('.slick-slide[aria-hidden="true"]').attr("aria-hidden", value);//on init
                        slickInstance.off('afterChange');
                        slickInstance.on("afterChange", function (event, slick) {//when slides changes
                            $(this).find('.slick-slide[aria-hidden="true"]').attr("aria-hidden", value);
                        })
                    },

                    "tabbableHiddenSlides": function (value) {
                        const eventTypes = ['init'];
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        slickInstance.find('a').on("keydown", function (e) {
                            let $this = $(this);
                            const tabPressed = e.key === 'Tab' || e.keyCode === 9;
                            if (tabPressed && !e.shiftKey) {//if pressing tab
                                if ($this.closest(".slick-slide").next().not(".slick-active").length > 0) {//check the next card if active
                                    setTimeout(function () {
                                        slickInstance.slick("slickNext");
                                    })
                                }
                            }
                            else if (tabPressed && e.shiftKey) {// if pressing shift + tab
                                if ($this.closest(".slick-slide").prev().not(".slick-active").length > 0) {//check the previous card if active
                                    setTimeout(function () {
                                        slickInstance.slick("slickPrev");
                                    })
                                }
                            }
                        })
                    },
                    // Unslick if slick items is <= the declared minimum value in the data-custom-config
                    "unslickMinimum": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;
                        if (slick.slideCount <= value && slick.$slider.hasClass('slick-initialized')) {
                            slick.unslick();
                        }
                    },

                    // Unslick if slick items is <= the declared minimum value in the data-custom-config
                    "unslickMinimumMultipleSlidesPerRow": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        const slideCount = slickInstance.find(".card-container").length;
                        if (slideCount <= value && slick.$slider.hasClass('slick-initialized')) {
                            slick.unslick();
                        }
                    },


                    "mobilityNavItemAdjustSpacing": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;
            
                        if (value.toString() == "true") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickTrack.css('margin-left', '-13.5px');
                            slickSlide.css('margin', '0px 3px');
                            slickList.css({
                                'padding': '5px 18px',
                                'margin': '-5px -15px'
                            })
                            

                            slickInstance.off('beforeChange');
                            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                if (nextSlide > 0 && nextSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                                    slickTrack.css("margin-left", "0");
                                } else if (nextSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                                    slickTrack.css("margin-left", '13.5px');                    
                                } else if (nextSlide == 0) { // if next slide is the first slide
                                    slickTrack.css("margin-left", "-13.5px");
                                }
                            });

                            slickInstance.find('.slick-dots').css('margin-top', '5px');

                        }
                    },

                    "adjustSpacing" : function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;
            
                        if (value.toString() == "true") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickTrack.css('margin-left', '-15.5px');
                            slickSlide.css('margin', '0px 7.5px');
                            slickList.css({
                                'padding': '5px 22.5px',
                                'margin': '-5px -15px'
                            })
                            

                            slickInstance.off('beforeChange');
                            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                if (nextSlide > 0 && nextSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                                    slickTrack.css("margin-left", "0");
                                } else if (nextSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                                    slickTrack.css("margin-left", '15.5px');                    
                                } else if (nextSlide == 0) { // if next slide is the first slide
                                    slickTrack.css("margin-left", "-15.5px");
                                }
                            });

                            slickInstance.find('.slick-dots').css('margin-top', '10px');

                        }
                    },

                    "focusableSlides": function (value) {           
                        // event types in which the function must proceed
                        const eventTypes = ['init'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;
                     
                        slickInstance.on('afterChange', function (event, slick, currentSlide) {//when slides changes                    
                            let $this = $(this);               
                            slickCurrent = $this.find('.slick-slide.slick-current');
                            inactiveDot = $this.find(".slick-dots li:not('.slick-active') button");
                            activeDot = $this.find('.slick-dots .slick-active button');

                            //set the focus to current slide after pressing left/right key
                            if ($('body').hasClass('is_tabbing')) {
                                if ($this.find('.slick-dots button').is(':focus')) {
                                    activeDot.focus();
                                }
                                else {
                                    setTimeout(function () {
                                        slickCurrent.focus();
                                    }, 300);
                                }
                            }
                        });
                    },

                    "setSlickDotsMarginTop": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init','breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        let slickDots = slickInstance.find('.slick-dots');
                        slickDots.css({
                            'margin-top': value + 'px',
                        });
                    },

                    "setColumnSpacing15Visible30": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init' , 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        if (value.toString() == "desktop") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickSlide.css({'margin': '0px 7.5px', 'padding': '0px 7.5px'});
                            slickList.css({
                                'padding-left': '22.5px',
                                'padding-right': '22.5px',
                                'margin-left': '-30px',
                                'margin-right': '-30px'
                            })
                        }

                        else if (value.toString() == "tablet") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickSlide.css('margin', '0px 7.5px');
                            slickList.css({
                                'padding': '5px 37.5px 5px 22.5px',
                                'margin': '-5px -15px'
                            });

                            // adjust the margin when window is resized
                            if (slickCurrentSlide == 0) { // if slide is first slide
                                slickTrack.css("margin-left", "0");
                            }
                            else if (slickCurrentSlide > 0 && slickCurrentSlide < (slick.$slides.length - 1)) { // if slide is somewhere in middle
                                slickTrack.css("margin-left", "7.5px");
                            }
                            else if (slickCurrentSlide == (slick.$slides.length - 1)) { // if slide is last slide
                                slickTrack.css("margin-left", '15px');
                            }

                            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {                       
                                if (nextSlide > 0 && nextSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                                    slickTrack.css("margin-left", "7.5px");
                                } else if (nextSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                                    slickTrack.css("margin-left", '15px');
                                } else if (nextSlide == 0) { // if next slide is the first slide
                                    slickTrack.css("margin-left", "0");
                                }        
                            });
                        }

                        else if (value.toString() == "mobile") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickSlide.css('margin', '0px 7.5px');
                            slickList.css({
                                'padding': '5px 22.5px',
                                'margin': '-5px -15px'
                            });

                            // adjust the margin when window is resized
                            if (slickCurrentSlide == 0) { // if slide is first slide
                                slickTrack.css("margin-left", "-15px");
                            }
                            else if (slickCurrentSlide > 0 && slickCurrentSlide < (slick.$slides.length - 1)) { // if slide is somewhere in middle
                                slickTrack.css("margin-left", "0");
                            }
                            else if (slickCurrentSlide == (slick.$slides.length - 1)) { // if slide is last slide
                                slickTrack.css("margin-left", '15px');
                            }

                            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {                       
                                if (nextSlide > 0 && nextSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                                    slickTrack.css("margin-left", "0");
                                } else if (nextSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                                    slickTrack.css("margin-left", '15px');
                                } else if (nextSlide == 0) { // if next slide is the first slide
                                    slickTrack.css("margin-left", "-15px");
                                }        
                            });
                        }
                        
                    },

                    "fixSlideAccessibility": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        if (value.toString() == "true") {
                            let slickCurrent = slickInstance.find('.slick-slide.slick-current');
                            let inactiveDot = slickInstance.find(".slick-dots li:not('.slick-active') button");
                            let activeDot = slickInstance.find('.slick-dots .slick-active button');

                            setTimeout(function () {
                                slickCurrent.removeAttr('aria-describedby');
                                slickCurrent.attr('aria-labelledby', activeDot.attr('id'));
                                activeDot.attr('tabindex', 0);
                                inactiveDot.attr('aria-selected', false);
                                slickCurrent.attr('tabindex', 0);
                            }, 200);

                            slickInstance.on('afterChange', function (event, slick, currentSlide) {//when slides changes     
                                let $this = $(this);
                                lazyLoad($this);
                                slickCurrent = $this.find('.slick-slide.slick-current');
                                inactiveDot = $this.find(".slick-dots li:not('.slick-active') button");
                                activeDot = $this.find('.slick-dots .slick-active button');

                                //update the accessibility of current slide and dot
                                setTimeout(function () {
                                    slickCurrent.attr('tabindex', 0);
                                    slickCurrent.removeAttr('aria-describedby');
                                    slickCurrent.attr('aria-labelledby', activeDot.attr('id'));
                                    activeDot.attr('tabindex', 0);
                                    inactiveDot.attr('aria-selected', false);
                                }, 200);


                            });

                            //make the links focusable again when unslicked.
                            slickInstance.off('destroy');
                            slickInstance.on('destroy', function () {
                                $(".configurable-slider:not('.slick-initialized')").find('a').removeAttr('tabindex');
                            });
                        }
                    },

                    "linkSlide": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init','breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        setTimeout(function () {
                            slickInstance.find('.slick-slide').attr('tabindex', -1);                
                            slickInstance.find(".slick-slide:not('.slick-active') a").attr('tabindex', -1);                   
                        });

                        let slickTrigger;

                        slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                            slickTrigger = $(document.activeElement);
                        });

                        slickInstance.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                            setTimeout(function () {
                                slickInstance.find('.slick-slide').attr('tabindex', -1);
                            });

                            slickInstance.find(".slick-slide a").removeAttr('tabindex');                   
                            slickInstance.find(".slick-slide:not('.slick-active') a").attr('tabindex', -1);
                          
                            if (slickTrigger != undefined) {
                                if (slickTrigger.hasClass('slick-arrow')) {
                                    let firstActiveCard = slickInstance.find('.slick-active').first();
                                    firstActiveCard.find('a').first().focus();
                                }
                            }
                        });
                    },     

                    "videoComponentKeyboardArrowFunctionLinkSlide": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init','breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        slickInstance.find('a').on("keydown", function (e) {
                            let cardLinks = $(this);
                            if (e.keyCode == 39) {                        
                                if (!cardLinks.closest(".card-container").next().closest('.slick-slide').hasClass("slick-active")) {                          
                                    setTimeout(function () {
                                        slickInstance.slick("slickNext");
                                    })
                                    setTimeout(function () {
                                        cardLinks.closest(".slick-slide").next().find("a").first().focus();
                                    }, 500)
                                }
                                else
                                    cardLinks.closest(".card-container").next().find("a").first().focus();
                            }
                            else if (e.keyCode == 37) {
                                if (!cardLinks.closest(".card-container").prev().closest('.slick-slide').hasClass("slick-active")) {
                                    setTimeout(function () {
                                        slickInstance.slick("slickPrev");
                                    })
                                    setTimeout(function () {
                                        cardLinks.closest(".slick-slide").prev().find('.card-container').last().find("a").first().focus();
                                    }, 500)
                                }
                                else
                                    cardLinks.closest(".card-container").prev().find("a").first().focus();
                            }
                        })

                        slickInstance.find('.slick-dots button').on("keydown", function (e) {
                            if (e.keyCode == 39) {
                                slickInstance.slick("slickNext");
                            }
                            else if (e.keyCode == 37) {
                                slickInstance.slick("slickPrev");
                            }
                        })

                        slickInstance.on('afterChange', function (event, slick, currentSlide) {//when slides changes               
                            let $this = $(this);
                            activeDot = $this.find('.slick-dots .slick-active button');

                            //set the focus to current slide after pressing left/right key
                            if ($('body').hasClass('is_tabbing')) {
                                if ($this.find('.slick-dots button').is(':focus')) {
                                    activeDot.focus();
                                }
                            }
                        });
                    },

                    "multiObjectSlides": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init' , 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        slick.$slides.each(function () {
                            const wrapper = $(this).find('> div');
                            wrapper.addClass(value);
                        });
                    },

                    "slickOverflowVisibleFullScreen": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        let slickList = slickInstance.find('.slick-list');
                        // adjust the slick-list spacing to make the overflow visible with hidden sliding overflow.
                        slickList.css({
                            'padding-top': '45px',
                            'padding-bottom': '45px',
                            'margin-top': '-45px',
                            'margin-bottom': '-45px',
                            'padding-left': '17.5px',
                            'padding-right': '17.5px',
                            'margin-left': '-25px',
                            'margin-right': '-25px'
                        });             
                    },

                    "roleButtonItems": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;  
                        slickInstance.on('keypress', "[role=button]", function (e) {
                            if (e.keyCode == 13 || e.keyCode == 32) {
                                e.preventDefault();
                                e.stopPropagation();
                                $(this).trigger('click');
                            }
                        });
                    },
                }

                const configureSlick = function (configurations) {
                    for (const key in configurations) {
                        const runConfig = customConfigFunctions[key];
                        const configValue = configurations[key];
                        runConfig(configValue);
                    }
                }

                if (window.matchMedia("(max-width: 767px)").matches && customConfigData.mobile) {
                    configureSlick(customConfigData.mobile);
                } else if (window.matchMedia("(max-width: 991.98px)").matches && window.matchMedia("(min-width: 768px)").matches && customConfigData.tablet) {
                    configureSlick(customConfigData.tablet);
                } else if (window.matchMedia("(min-width: 992px)").matches && customConfigData.desktop) {
                    configureSlick(customConfigData.desktop);
                }
            }


            $(document).on("init", ".configurable-slider", function (event, slick) {
                initializeSlickConfig(slick, 'init');
            });

            handleWindowResize(function () {
                const slicks = $('.configurable-slider');
                const respondToBreakpoint = function (minimum, maximum) {
                    slicks.each(function () {
                        const slick = $(this);
                        const breakpoints = slick.attr('data-slick') && JSON.parse(slick.attr('data-slick')).responsive;
                        if (!breakpoints) return;
                        breakpoints.forEach(function (breakpoint, index) {
                            if (breakpoint.breakpoint >= minimum && breakpoint.breakpoint <= maximum) {
                                if (breakpoint.settings != 'unslick' && !slick.hasClass('slick-initialized')) {
                                    slick.slick();
                                }
                                else if (breakpoint.settings == 'unslick' && slick.hasClass('slick-initialized')) {
                                    slick.slick('unslick');
                                }
                            }
                        });
                    });
                }
                //mobile
                if (window.matchMedia("(max-width: 767px)").matches) {
                    respondToBreakpoint(0, 766);
                    //tablet
                } else if (window.matchMedia("(max-width: 991.98px)").matches && window.matchMedia("(min-width: 768px)").matches) {
                    respondToBreakpoint(767, 990);
                    //desktop
                } else if (window.matchMedia("(min-width: 992px)").matches) {
                    respondToBreakpoint(991, 10000);
                }

                $('.configurable-slider').each(function(){
                    initializeSlickConfig($(this).slick('getSlick'), 'breakpoint');
                });
                //initializeSlickConfig($('.configurable-slider').slick('getSlick'), 'breakpoint');

                setTimeout(function () {
                    slicks.slick('setPosition');
                }, 300);
            });

            function addRoleList() {
                setTimeout(function () {
                    $(".configurable-slider.role-list-js:not('.slick-initialized')").attr("role", "list")
                }, 100)
            }

            //Initialize add role list
            addRoleList();

            $(".configurable-slider").slick();
            // END configurable-slider
        })();        

        //Fixed accordion focus outline disappearing when using screen reader
        (function () {
            $(document).on('click', '.collapse-trigger[data-toggle="collapse"]', function () {
                $("body").addClass('is_tabbing');
                window.addEventListener('mousedown', focusMouseDownControlOnce);
            });
        })();
    });
    // End document ready
})();

function lazyLoad(container) {
    var modalEl = container;
    setTimeout(function () {
        var lazyImages;
        if (typeof jQuery.fn.Lazy === 'function') {
            lazyImages = modalEl.find("img.lazy");
            lazyImages.Lazy({ effect: "fadeIn" });
        }
    }, 100);
}

(function () {
     setTimeout(function () {
        // using plain JavaScriptconst  lazy loading
        lazyImages = document.querySelectorAll('img[data-src]');       
        lazyImages.forEach(img => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src ?? entry.target.src;
                entry.target.removeAttribute('data-src');
                observer.unobserve(entry.target);
            }
            });
        });
        observer.observe(img);
        });
    }, 900);
})();