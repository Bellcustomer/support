/* Minification failed. Returning unminified contents.
(1408,52-53): run-time error JS1195: Expected expression: )
(1408,55-56): run-time error JS1195: Expected expression: >
(1409,21-22): run-time error JS1195: Expected expression: )
(1409,24-25): run-time error JS1195: Expected expression: >
(1411,10-11): run-time error JS1195: Expected expression: ,
(1412,5-6): run-time error JS1002: Syntax error: }
(1415,17-18): run-time error JS1195: Expected expression: )
(1415,19-20): run-time error JS1004: Expected ';': {
(1895,6-7): run-time error JS1195: Expected expression: )
(652,18-19): run-time error JS1300: Strict-mode does not allow assignment to undefined variables: i
(652,50-51): run-time error JS1294: Strict-mode does not allow ++ or -- on certain objects: i
 */
var BELL = (function(bell, $) {
    'use strict';
   
    $.ajaxMock = function(context) {
        if (context.url === "/ajax/Feedback/SaveRating") {
            console.warn("mock $.ajax!");
            context.success('["ratingId","dfa8d1fe-906a-4c64-bbbd-030cf4b75abb"]');
        } else if (context.url === "/ajax/Feedback/SaveFeedback") {
            console.warn("mock $.ajax!");
            context.success('["succeeFlag","Y"]');
        } else {
            $.ajax(context);
        }
    };
    bell.mteSupportModules = bell.mteSupportModules || {};
    bell.mteSupportModules.feedback = (function() {
        function enCode(input) {
            var i;
            var result = "";
            if (input) {
                for (i = 0; i < input.length; i++) {
                    if (result !== "")
                    { result += ","; }
                    result += input.charCodeAt(i);
                }
            }
            return result;
        }        
        
        function initSaveRating(provV, langV, lobV, prodV, pageNameV, saveRatingUrl, rsQuestionTitleThankYou, rsUserMsgFeedbackFeedbackSent, deviceTypeV) {            
            var feedback = $("#user-feedback");
            var msgFb = $("#user-msg-fb");
            var msgFbText = msgFb.find(".article-footer__submit-confirmation-message");
            var questionTitle = feedback.find("#question-title");
            var feedbackForm = $("#feedback-form");
            feedback.find("a").each(function () {
                var $element = $(this);
                $element.click(function () {

                    $element.addClass("clicked");                    
                    var buttonType = $element.attr("id").indexOf("Yes") > -1 ? "Yes" : "No";                    

                     try { 
                        s_oTrackPage({ 
                            s_oAPT: "178-0-0",
                            s_oFBR : buttonType
					    }); 
                     } catch (e) { }

                    feedback.find("#uf-options").hide();
                    var ratingV = $element.text();
                    var ratingId;
                    //BELL.mteSupportModules.$ajaxLoader.show();
                    console.log("-----------------------------");
                    console.log("prov: " + provV);
                    console.log("langV: " + langV);
                    console.log("lob: " + lobV);
                    console.log("prod: " + enCode(prodV));
                    console.log("pageName: " + pageNameV);
                    console.log("rating: " + enCode(ratingV));
                    console.log("deviceType: " + deviceTypeV);
                    console.log("-----------------------------");

                    $.ajax({
                        type: "POST",
                        url: saveRatingUrl,
                        dataType: 'html',
                        data: {
                            prov: provV, 
                            lang: langV, 
                            lob: lobV, 
                            prod: enCode(prodV), 
                            pageName: pageNameV, 
                            rating: enCode(ratingV), 
                            deviceType: deviceTypeV
                        },
                        success: function (data) {
                            if (data.length > 0) {
                                if (data.indexOf("ratingId") > 1) {
                                    var dataOBJ = JSON.parse(data);
                                    if ((dataOBJ[1]) && (dataOBJ[1] !== "")) {
                                        ratingId = dataOBJ[1];
                                    }
                                }                               
                                $('#rsthankyou').removeClass('d-none');
                                $('#question-title').addClass('pad-l-10');
                                questionTitle.text(rsQuestionTitleThankYou);
                                //$('#feedback-form').removeClass('d-none');
                                //feedbackForm.show();
                                feedbackForm.removeClass('d-none');
                                feedback.addClass('margin-b-15');
                                $('#user-feedback').addClass('d-flex');
                                $('#user-feedback').removeClass('d-sm-flex');
                                $('#question-title').removeClass('margin-b-xs-15');
                                $('#question-title').removeClass('d-block');
                                $('#user-feedback').addClass('align-items-start');
                                $('#user-feedback').removeClass('align-items-center');
                                $("#ratingIdHidden").val(ratingId);
                            }
                            else {
                                msgFb.show();                               
                            }
                            //BELL.mteSupportModules.$ajaxLoader.hide();
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            msgFb.show();
                            //BELL.mteSupportModules.$ajaxLoader.hide();
                            console.log("Feedback error");
                        }
                    });
                    return false;
                });
            });
        }

        function initSaveFeedback(saveFeedbackUrl, rsUserMsgFeedbackFeedbackSent, rsErrorFeedback) {
            var feedback = $("#user-feedback");
            var msgFb = $("#user-msg-fb");
            var msgFbText = msgFb.find(".article-footer__submit-confirmation-message");
            var questionTitle = feedback.find("#question-title");
            var feedbackForm = $("#feedback-form");

			feedbackForm.find("button.btn").each(function () {
                var $element = $(this);
                $element.click(function () {
                    var ratingId = $("#ratingIdHidden").val();
					var buttonClicked = $('.clicked').attr('id');
					var ratingButton = 'no';
					if(buttonClicked !== null && buttonClicked !== '' && buttonClicked.indexOf("Yes") > 1 ) 
                    {
					   ratingButton  = 'yes'
                    }						
                    var feedbackValue = $("#element101").val();  
                    BELL.mteSupportModules.$ajaxLoader.show();
                    $.ajax({
                        type: "POST",
                        url: saveFeedbackUrl,
                        dataType: 'html',
                        data: { ratingId: ratingId, feedback: enCode(feedbackValue) },
                        success: function (data) {
                            if (data.length > 0) {
                                if (data.indexOf("succeeFlag") > 1) {
                                    var dataOBJ = JSON.parse(data);
                                    if ((dataOBJ[1]) && (dataOBJ[1] !== "")) {
                                        feedbackForm.hide();
                                        $('.feedback-acknowledgement').addClass('d-none');
                                        $('.feedback-form').addClass('d-none');
                                        $('.feedback-submitted').removeClass('d-none');
                                        msgFbText.text(rsUserMsgFeedbackFeedbackSent);
                                        msgFb.show();
                                        questionTitle.text("").hide();
                                    }
                                }
                            }
                            BELL.mteSupportModules.$ajaxLoader.hide();
                            try { s_oTrackPage({ s_oAPT: "161-0-0",
                             s_oFBR : ratingButton,
                            s_oFBC : feedbackValue
							}); } catch (e) { }
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            BELL.mteSupportModules.$ajaxLoader.hide();
                            msgFbText.text(rsErrorFeedback);
                            msgFb.show();
                        }
                    });
                    return false;
                });
            });
        }

        function remainCharacters() {

            $("#element101").keyup(function () {
                var feedbackValue = $("#element101").val();
                //alert(feedbackValue);
                var fbLen=feedbackValue.length;
                if (fbLen > 0) {
                    var difLen = 500 - fbLen;
                    $("#sp_remainChar").text(difLen);
                }
                else
                    $("#sp_remainChar").text("500");

            });
        }

     	function remain250Characters() {

            $("#element101").keyup(function () {
                var feedbackValue = $("#element101").val();
                var fbLen=feedbackValue.length;
                if (fbLen > 0) {
                    var difLen = 250 - fbLen;
                    $("#sp_remainChar").text(difLen);
                }
                else
                    $("#sp_remainChar").text("250");

            });
        }

        return {
            initSaveRating : initSaveRating,
            initSaveFeedback: initSaveFeedback,
            remainCharacters:remainCharacters,
			remain250Characters:remain250Characters
        };
    })();

    return bell;
})(BELL || {}, jQuery);
;
var BELL = (function (bell, $) {
    'use strict';
    BELL.SupportModules = BELL.SupportModules || {};
    BELL.SupportModules.articles = {

        // Initialize module
        init: function () {
            var self = this;
            $(".inject-article-component").click(function (event) {
                if (!$(this).parent().hasClass("active")) {
                    $(".accordian-options li").removeClass("active");
                    self.getArticleComponent($(this).data("linkUrl"), this.firstChild.nodeValue.trim());
                    $(this).parent().addClass("active");
                }
            });

            $(document).on("click", ".emulator-header .close-btn", function (event) {
                $(".accordian-options li").removeClass("active");
                $("body").removeClass("lis-article-active");
            });
            this.initFeedbackForm($("#feedback-form").data());
        },



        initFeedbackForm: function (feedbackFormVars) {
            if (typeof feedbackFormVars === "object" && Object.getOwnPropertyNames(feedbackFormVars).length > 0) {
                var uniqueId = feedbackFormVars.page.length !== 0
                    ? feedbackFormVars.page
                    : $("#articlePageMetadata").data().uniqueId.trim();
                var lob = feedbackFormVars.lob.length !== 0
                    ? feedbackFormVars.lob
                    : $("#articlePageMetadata").data().lob.trim();

                bell.mteSupportModules.feedback.initSaveFeedback(feedbackFormVars.urlFeedback,
                    feedbackFormVars.msgSent,
                    feedbackFormVars.msgError);

                bell.mteSupportModules.feedback.initSaveRating(feedbackFormVars.prov,
                    feedbackFormVars.lang,
                    lob,
                    "",
                    uniqueId,
                    feedbackFormVars.urlRating,
                    feedbackFormVars.msgReceived,
                    feedbackFormVars.msgSent,
                    feedbackFormVars.device);

                bell.mteSupportModules.feedback.remain250Characters();
            }
        },



        // Article page popup functionality
        printArticlePagePopup: function (lang, prov) {
            var day = new Date();
            var id = day.getTime();

            var htmlContent = this.getArticleContent(lang, prov);

            var myWindow = window.open(self.location.href + '?printerFriendly=true', id, "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,height=600,left = 240,top = 212");
            myWindow.document.write(htmlContent);
            myWindow.focus();
            return false;
        },




        // Get article content
        getArticleContent: function (language, province) {
            var htmlArticleContent = "";
            var documentType = "<!DOCTYPE HTML PUBLIC \"-\/\/W3C\/\/DTD HTML 4.01\/\/EN\" \"http:\/\/www.w3.org\/TR\/html4\/strict.dtd\">";
            var headContent = '<head>' + $("head").html() + '</head>';
            var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            while (SCRIPT_REGEX.test(headContent)) { headContent = headContent.replace(SCRIPT_REGEX, ""); }

            var htmlOmnitureContent = "";
            var htmlBody = $("body").html();
            var indexOfOmnitureStart = htmlBody.indexOf('<!--Omniture Start-->');

            if (indexOfOmnitureStart !== -1) {
                htmlOmnitureContent = htmlBody.substring(indexOfOmnitureStart);

                var indexOfOmnitureEnd = htmlBody.indexOf('<!--Omniture End-->', indexOfOmnitureStart);
                if (indexOfOmnitureEnd !== -1) {
                    htmlOmnitureContent = htmlOmnitureContent.substring(0, indexOfOmnitureEnd);
                }
            }

            var htmlLogoContent = '<p><a href="http://www.bell.ca" class="mainBranding" title="Home page"><img src="/styles/common/all_languages/all_regions/skin/lg_mainBranding.gif" alt="Bell" width="92" height="55"></a></p></br>';
            var htmlTitleContent = '<H1 class="mte-page-header__title">' + $("h1.title").html() + '</H1>';


            if ($("#ContentForPrint")[0]) {
                htmlArticleContent = "<DIV>" + $("#ContentForPrint").html() + "</DIV>";
            }
            else if ($(".tabContSet")[0]) {
                htmlArticleContent = "<DIV>" + $(".tabContSet").clone().find(".nextPrevious").remove().end().html(); +"</DIV>";
            }
            else if ($(".article") !== null) {
                htmlArticleContent = "";
                $('.emulatorCarousel .item').each(function () {
                    htmlArticleContent += "<DIV class='mte-emulator__step item'>";
                    htmlArticleContent += $(this).html();
                    htmlArticleContent += "</DIV>";
                    htmlArticleContent += "<hr>";
                });

            }

            if ($('.divNetworkCoverageMap').length) {
                if (province.toLowerCase() !== 'mb' && province.toLowerCase() !== 'sk') {
                    $(".divNetworkCoverageMap").clone().html('<iframe width="100%" height="600" frameborder="0" scrolling="no" id="krmframe" name="krmframe" src="http://bellcoverage.mapanswer.com/Coverage/home?language=' + language + '"></iframe>');
                }
                else {
                    $(".divNetworkCoverageMap").clone().html('<iframe width="100%" height="600" frameborder="0" scrolling="no" id="krmframe" name="krmframe" src="http://bellcoverage.mapanswer.com/Coverage/home?site=' + province + '&language=' + language + '"></iframe>');
                }
            }

            if ($('.divRoamingRate').length) {
                $(".divRoamingRate").clone().html('<iframe width="100%" height="775" frameborder="0" scrolling="no" id="bellRoaming" name="bellRoaming" src="http://bellcoverage.mapanswer.com/roaming/roaming.do?countryid=25&lang=' + language + '"></iframe>').closest('.article').removeClass('dc8');
            }

            var clearer = "</br>";
            var htmlContent = documentType + "<html  lang='" + language + "'>" + headContent + "<body>" + "<div class='container'>" + htmlLogoContent + clearer + htmlTitleContent + clearer + htmlArticleContent + "</div>" + htmlOmnitureContent + "</body></html>";

            return htmlContent;
        },
        //tableScroll
        initializeScrollableTable: function () {
            console.log("init")
            $('.scrollableContainer-js').on('scroll', function () {
                console.log("scroll")
                let $this = $(this);
                let scrollPos = $this.scrollLeft();
                let width = $this.width();
                let scrollWidth = $this.get(0).scrollWidth;
                let totalScrollWidth = Math.round(scrollPos + width);
                let container = $this.closest('.scrollableContainerShadow-table');
                if (scrollWidth > $this.get(0).clientWidth + 1) {
                    if (scrollPos === 0) {
                        container.removeClass('left');
                    } else {
                        container.addClass('left');
                    }
                    if (totalScrollWidth === scrollWidth) {
                        container.removeClass('right');
                    } else {
                        container.addClass('right');
                    }
                }
                else {
                    $this.closest('.scrollableContainerShadow-table').removeClass('left').removeClass('right');
                }
            });
            $(window).resize(function () {
                if ($('.custom-emulator-table .scrollableContainer-js').length > 0) { // custom-emulator-table is scrollable in all breakpoints.
                    $('.scrollableContainer-js').trigger('scroll');
                } else if (window.matchMedia('(max-width: 767px)').matches) {// if the table is scrollable in mobile breakpoint only. 
                    $('.scrollableContainer-js').trigger('scroll');
                } else {
                    $(".scrollableContainerShadow-table").removeClass('left').removeClass('right');
                }
            });
        },
        // Save article
        getArticleComponent: function (urlpath, title) {
            var self = this;
            var url = "/ajax/article/getarticlecomponent";
            $.ajax({
                url: url,
                type: 'POST',
                async: true,
                dataType: 'html',
                data: {
                    urlPath: urlpath
                },
                cache: false,
                success: function (data) {
                    $("body").addClass("lis-article-active");
                    $("#article-component-target").html(data);
                    self.initFeedbackForm($("#feedback-form").data());
                    if (data.indexOf("article-emulator") > -1) {
                        initializeEmulators();
                        $(".emulator-carousel").slick();
                        BELL.SupportModules.emulator.init();
                        self.closeNoteLightBox();
                    } else {
                        $('.collapse-trigger').click(function (e) {
                            var trigger = $(this),
                                removeIconClass = trigger.data('icon-expand') || "icon-exapnd-outline-circled",
                                addIconClass = trigger.data('icon-collapse') || "icon-collapse-outline-circled",
                                temp;

                            if (trigger.attr('aria-expanded') === "true") {
                                temp = addIconClass;
                                addIconClass = removeIconClass;
                                removeIconClass = temp;
                            }

                            trigger.find('span.icon, span.icon2, span.icon3, i').first().removeClass(removeIconClass).addClass(addIconClass);
                        });
                        initBRF();
                        self.initializeScrollableTable();
                        $('.collapse-trigger').click(function (e) {
                            setTimeout(function () {
                                $(window).trigger('resize');
                                $(window).scroll();
                            }, 300);
                            /*

                            if ($('.custom-emulator-table .scrollableContainer-js').length > 0) { // custom-emulator-table is scrollable in all breakpoints.
                               
                            }

                            */
                        });
                        var $articleDiv = $(".article_lis");
                        var articleTitle = $articleDiv.data("title");
                        var articleType = $articleDiv.data("type");
                        var articleId = $articleDiv.data("id");
                        var articleDevice = $articleDiv.data("device");

                        if (typeof (articleType) !== "undefined" && articleType.indexOf("article page") > -1) {
                            articleType = articleType.replace("article page", "article");
                        }
                        self.initVideoPlayerWrapper();

                        self.processSubTitle(urlpath);

                        self.processeSim();

                        self.processSteppedArticle(urlpath);

                        s_oTrackPage({
                            s_oARN: articleTitle,
                            s_oARC: articleType,
                            s_oARI: articleId,
                            s_oARD: articleDevice,
                            s_oAJC: "true"
                        });
                    }
                    if (urlpath.indexOf("?step") > -1) {
                        var stepNumber = urlpath.substring(urlpath.lastIndexOf("=") + 1, urlpath.lastIndexOf("#"));
                        $("#accordion-1_step-" + (stepNumber - 1)).click();
                    }

                    articleTitle = $(".article-component-target-wrap .page-header-lis-title").html();
                    $(".emulator-step-title-text").html(title);
                    var urlNav = window.location.origin + urlpath;
                    $(".emulator-step-title-text").attr('href', urlNav);
                    $('.tooltip-static').tooltip();
                    $('html, body').animate({ scrollTop: $("#article-component-target").offset().top - 80 }, 700, 'swing');
                    $(".applicable-to").hide();
                }
            });
            return false;
        },


        // Loads network coverage map
        LoadNetworkCoverageMap: function (language, province) {
            if (province.toLowerCase() != 'mb' && province.toLowerCase() != 'sk') {
                $("#koremContainer").html('<iframe width="900" height="600" frameborder="0" scrolling="no" id="krmframe" name="krmframe" src="http://bellcoverage.mapanswer.com/Coverage/home?language=' + language + '"></iframe>');
            }
            else {
                $("#koremContainer").html('<iframe width="900" height="600" frameborder="0" scrolling="no" id="krmframe" name="krmframe" src="http://bellcoverage.mapanswer.com/Coverage/home?site=' + province + '&language=' + language + '"></iframe>');
            }
        },




        // Load roaming rates
        LoadRoamingRate: function (language) {
            $(".divRoamingRate").html('<iframe width="850" height="775" frameborder="0" scrolling="no" id="bellRoaming" name="bellRoaming" src="http://bellcoverage.mapanswer.com/roaming/roaming.do?countryid=25&lang=' + language + '"></iframe>');
        },

        initVideoPlayerWrapper: function () {
            var self = this;
            self.initVideoPlayer("" + 1);
            self.initVideoPlayer("" + 4);
        },

        initVideoPlayer: function (index) {
            var videoPlaceHolderLinkId = "#videoPlaceHolderLink_" + index;
            var videoPlaceHolderId = "#videoPlaceHolder_" + index;
            var videoPopupIframeId = "video-popup-iframe-" + index;
            var videoPopupId = ".video-popup-" + index;
            var videoPopupHolderId = ".video-popup-" + index + " .video-holder";
            var vodeoCloseId = ".video-close-" + index;

            var element = document.getElementById("videoPlaceHolder_" + index);
            if (element) {
                element.classList.remove("isDisabled");
            }
            // create youtube player
            var player;
            // play video when video is ready
            function onPlayerReady(event) {
                event.target.playVideo();
            }
            function onPlayerStateChange(event) {
                if (event.data === 0) {
                }
            }
            $(videoPlaceHolderLinkId).on('click', function (e) {
                e.preventDefault();
                var currentId = "#" + event.currentTarget.id.replace("Link", "");
                $(currentId).click();
                return false;
            });
            $(videoPlaceHolderId).on('click', function (e) {
                e.preventDefault();
                let videoId = $(this).attr("href");
                if (!player) {
                    player = new YT.Player(videoPopupIframeId, {
                        videoId: videoId,
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                } else {
                    player.playVideo();
                }
                $(videoPopupId).show();
            });
            $(videoPopupId).click(function (e) {
                if ($(e.target).closest(videoPopupHolderId).length === 0) {
                    player.stopVideo();
                    $(this).hide();
                }
            });
            $(vodeoCloseId).click(function () {
                player.stopVideo();
                $(videoPopupId).hide();
            });
        },

        closeNoteLightBox: function () {
            if ($(".modal button[data-dismiss='card_tooltip-modal-1']") && $('#card_tooltip-modal-1')) {
                $(".modal button[data-dismiss='card_tooltip-modal-1']").on('click', function (e) {
                    e.preventDefault();
                    $('#card_tooltip-modal-1').modal('hide');
                    return false;
                });
            }
        },

        processeSim: function () {
            if ($('#divIphone') && $('#divIphone')[0] && $('#divFreeformIphone') && $('#divFreeformIphone')[0]) {
                $('#divIphone')[0].innerHTML = $('#divFreeformIphone')[0].innerHTML;
                $('#article-component-target .mte-article-applicability').hide();
            }
            if ($('#divSamsung') && $('#divSamsung')[0] && $('#divFreeformSamsung') && $('#divFreeformSamsung')[0]) {
                $('#divSamsung')[0].innerHTML = $('#divFreeformSamsung')[0].innerHTML;
                $('#article-component-target .mte-article-applicability').hide();
            }
            if ($('#divGoogle') && $('#divGoogle')[0] && $('#divFreeformgoogle') && $('#divFreeformgoogle')[0]) {
                $('#divGoogle')[0].innerHTML = $('#divFreeformgoogle')[0].innerHTML;
                $('#article-component-target .mte-article-applicability').hide();
            }
        },

        processSubTitle: function (steppedArticleUrl) {
            steppedArticleUrl = steppedArticleUrl.replace(/(step=\d+),\d+#step(\d+)/, '$1#step$2');
            var elementHyperLink = '<a href="#" class="step-subtitle-for-treeview txtUnderline txtDecorationNoneHover txtBlack2 emulator-step-title-text"></a>';
            if ($("h2.subtitle-2:contains('anyType')") && ($("h2.subtitle-2:contains('anyType')").length > 0)) {
                $("h2.subtitle-2:contains('anyType'):first").html(elementHyperLink);
            } else if ($("h2.subtitle-2 a.txtUnderline.txtDecorationNoneHover.txtBlack2.emulator-step-title-text") && ($("h2.subtitle-2 a.txtUnderline.txtDecorationNoneHover.txtBlack2.emulator-step-title-text").length > 0)) {
                $("h2.subtitle-2 a.txtUnderline.txtDecorationNoneHover.txtBlack2.emulator-step-title-text").html(elementHyperLink);
            }
			else{
				$("#article-component-target h2.subtitle-2:first").html(elementHyperLink);
			}
            if ($('a.step-subtitle-for-treeview')
                && $('a.step-subtitle-for-treeview').length > 0
                && $('li.active a.inject-article-component')
                && $('li.active a.inject-article-component').length > 0) {
                // trim SteppedArticleUrl
                $('a.step-subtitle-for-treeview').attr('href', steppedArticleUrl);
                if ($('a.step-subtitle-for-treeview').length > 0) {
                    $('a.step-subtitle-for-treeview')[0].text = $('li.active a.inject-article-component')[0].text;
                }
            }
        },

        processStep: function (step) {
            if ((!step) || isNaN(step)) { return; }
            var stepActual = parseInt(step)-1;
            if (stepActual < 0) { return; }
            $('#accoridan-1 #accordion-1_step-' + stepActual).siblings().toggle();
            $('#accoridan-1 #accordion-1_step-' + stepActual + ' button span.icon').hide();
            $('#accoridan-1 #accordion-1_step-' + stepActual).css("border-bottom", "none");
            $('#accoridan-1 #accordion-1_step-' + stepActual + ' button').click();
        },

        processSteps: function (stepsSplited) {
            var self = this;
            if ((!stepsSplited) || stepsSplited.length <= 1) { return; }
            var step;
            var stepActual;
            for (var j = (stepsSplited.length -1); j >= 0; j--) {
                step = stepsSplited[j];
                if (!step || isNaN(step) || parseInt(step) < 1) { break; }
                stepActual = parseInt(step)-1;
                if (stepActual < 0) { return; }
                if (j == (stepsSplited.length - 1)) {
                    $('#accoridan-1 #accordion-1_step-' + stepActual).siblings().toggle();
                }
                else {
                    $('#accoridan-1 #accordion-1_step-' + stepActual).toggle();
                }
                //$('#accoridan-1 #accordion-1_step-' + stepActual + ' button span.icon').toggle();

                if (j == 0) {
                    $('#accoridan-1 #accordion-1_step-' + stepActual + ' button').click();
                }
            }
        },

        processSteppedArticle: function (steppedArticleUrl) {

            var self = this;
            var urlSegments = steppedArticleUrl.split('?');
            if (!urlSegments || urlSegments.length < 2) { return; }
            if (urlSegments[urlSegments.length - 1] && urlSegments[urlSegments.length - 1].split('#') && urlSegments[urlSegments.length - 1].split('#').length > 0) {
                urlSegments[urlSegments.length - 1] = urlSegments[urlSegments.length - 1].split('#')[0];
            }
            var urlVariables = urlSegments[1].split('&');
            var parameterName;
            var steps;
            var stepsSplited;
            var step;
            var stepActual;
            for (i = 0; i < urlVariables.length; i++) {
                parameterName = urlVariables[i].split('=');
                if (parameterName[0] && (parameterName[0].toLowerCase() === "step")) {
                    steps = parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]);
                    stepsSplited = steps.split(',');
                    if (!stepsSplited || stepsSplited.length < 1) { return; }
                    if (stepsSplited.length == 1) {
                        //1 step selected
                        step = steps;
                        self.processStep(step);
                    }
                    else {
                        //1+ step selected
                        self.processSteps(stepsSplited);
                    }

                }
            }
        },

    };

    return bell;
})(BELL || {}, jQuery);



;
//Init the required modules

jQuery(document).ready(function () {

	BELL.mteSupportModules.$ajaxLoader = $(".mte-ajax-loader");
	BELL.SupportModules.articles.init();
});
;

var PS = (function (bell) {

    bell = bell || {};

    bell.provinceSelector = {
        init: function () {
            var _self = this;

            desktopSelector.init();

            $(document).ready(function () {
                if (desktopSelector.hasCitySelector()) {
					_self.isInitCookie().then(function (data) { 
						if (data) {
							// Show province selector
							setTimeout(function () {
								desktopSelector.show();
                                _self.initCityProvinceSelectorOmniture();
							}, 1000);
						}
					})
                }
                else {
                    if (cookieManager.readProvinceCookieVal() == "") {
                        // Show province selector
                        setTimeout(function () {
                            desktopSelector.show();
                            _self.initProvinceSelectorOmniture();
                        }, 1000);
                        _self.saveCookie();
                    }
                }
            });
        },

        submitRegion: function (event) {
            event.preventDefault();
            var region = "ON";

            var $initialRegion = $("input:checked");
            if ($initialRegion.length > 0) {
                region = $initialRegion.val();
            }

            var language = $("meta[name=language]").attr("content");
            cookieManager.setLanguageRegionCookieValue(language, region, "", true);
            window.location.reload();
            //$('body :focusable').off('focus', this._forceFocusInLangRegion.bind(this));
        },
         // Click outside handlers
        outside: function ($containers, callback) {
            var self = this;
            $(document).off("click", self._outsideClickHandler).on("click", { '$containers': $containers, 'callback': callback }, self._outsideClickHandler);
        },

        _outsideClickHandler: function (e) {
            var outside = [];

            e.data.$containers.each(function () {
                var $container = $(this);
                if (!$container.is(e.target) && $container.find(e.target).length === 0) {
                    outside.push(true);
                } else {
                    outside.push(false);
                }
            });

            if (outside.indexOf(false) == -1) {
                e.data.callback(e);
            }
        },
        
        saveCookie: function () {
            var language = $("meta[name=language]").attr("content");
            var province = $("meta[name=province]").attr("content");
            cookieManager.setLanguageRegionCookieValue(language, province);
        },

        removeInitZoneCookie: function () {
            var zoneCookieValue = cookieManager.getCookie("zone")
            var domain = ".bell.ca";
            var zoneVal = zoneCookieValue.split("&")[0] + "&" + zoneCookieValue.split("&")[1]
            cookieManager.setCookie('zone', zoneVal, 90, domain);
        },

        selectProvince: function (form, newProvince) {
            var _self = this;

            newProvince.prop("checked", true);

            var region = "ON";
            var $initialRegion = $("input:checked");
            if ($initialRegion.length > 0) {
                region = $initialRegion.val();
            }
            _self.changeProvinceSelectorOmniture(region);

            form.submit();
        },
		
		isInitCookie: function () {
			return new $.Deferred(function (defer) {
				$.ajax({
                    url: "/ajax/rsxhome/IsInitZoneCookie",
                    dataType: "json",
                    cache: false,
                    success: function (data) {                      
                        defer.resolve(data);
                    },
                    error: function (e) {
                        console.error("Error loading: ", e);
						defer.reject();
                    }
                });
			});
        },

        initProvinceSelectorOmniture: function () {
            var message = $('.region-confirmation .change-region').text().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ").trim();
            if (typeof s_track !== "undefined") {
				s_track({
					s_oAPT: "104-0-0",
					s_content: "your current region|" + message
				});
			}
        },

        initCityProvinceSelectorOmniture: function () {
            var message = $('.region-confirmation .change-region').text().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ").trim();
            if (typeof s_track !== "undefined") {
				s_track({
					s_oAPT: "104-0-0",
					s_content: "do you live in|" + message.replace(", ", "|")
				});
			}
        },

        changeProvinceSelectorOptionOmniture: function () {
			if (typeof s_track !== "undefined") {
				s_track({
					s_oAPT: "647-0-0",
					s_oBTN: "change region|change current region"
				});
			}
        },

        changeProvinceSelectorOmniture: function (newRegion) {
            if (typeof s_track !== "undefined") {
				s_track({
					s_oAPT: "647-0-0",
					s_oBTN: "change region|" + newRegion
				});
			}
        },

        changeCityProvinceSelectorOptionOmniture: function (option) {
            if (option == "Oui")
                option = "Yes"

            if (option == "Non (modifier)")
                option = "No (change)"

            s_track({
                s_oAPT: "647-0-0",
                s_oBTN: "change city " + option
            });
        },

        changeCityProvinceSelectorOmniture: function (newCity) {
			if (typeof s_track !== "undefined") {
				s_track({
					s_oAPT: "647-0-0",
					s_oBTN: "change city " + newCity
				});
			}
        }
    };

    var desktopSelector = $.extend({}, bell.provinceSelector, {
        init: function () {
         

            var _self = this;

            this.$changeRegion = $(".change-region-popup");
            this.$changeRegionCloseButton = $(".change-region-popup .close-province");
            this.$confirmRegionLink = $(".change-region-popup .confirm-region-link");
            this.$changeRegionSelect = $(".change-region-popup .change-region-link");
            this.$changeRegionInput = $(".change-region-popup .change-region-provinces .province-form-fieldset  li ").not(".disabled");
            this.$changeRegionProvinceLabel = $(".change-region-popup .change-region-provinces .province-label");
            this.$provinceSelectorOption = $(".change-region-popup  .province-form-fieldset  li").not(".disabled");
            this.$provinceForm = $(".change-region-popup .province-form");
            this.$provinceButton = $(".change-region-popup .change-region-provinces-button"); 
            this.$anotherProvince = $(".change-region-popup .change-region-provinces .another-province");
            this.$keepProvince = $(".change-region-popup .change-region-provinces .keep-province");
            this.$changeRegionCity = $(".change-region-popup .change-region-provinces .city-form .city-select");
             // ------------ Desktop/Tablet functions -----------
            // POPUP
            this.$changeRegionCloseButton.on("click", _self.closeBar);
            
            // POPUP
            this.$provinceButton.on('click', function () {
                _self.outside($(this), function () {
                    // Close dropdown form
                    var $provinceSelector = $(".change-region-popup .change-region-provinces");
                    var $changeRegionProvincesButton = $(".change-region-provinces-button");
                    if (!($provinceSelector.hasClass('change-region-hidden'))) {
                        $provinceSelector.addClass('change-region-hidden');
                        $(".change-region-popup .change-region-link").removeClass('change-region-link-selected');
                        $changeRegionProvincesButton.removeClass("change-region-provinces-button-expanded");
                        var $changeRegionText = $('.change-region-text');
                        if ($changeRegionText.hasClass('change-region-text-changed')) {
                            if ($(".change-region-text-changed:visible").length === 0) {
                                $('.change-region-text-to-change, .change-region-container-tooltip').hide();
                                $('.change-region-text-changed').show();
                            } else {
                                $('.change-region-text-to-change').removeClass("hide-change-region-city")
                                $('.change-region-container-tooltip').removeClass("hide-change-region-city-visibility");

                                $('.change-region-text-changed').hide();
                            }
                        }
                    }
                });
            });

            // POPUP
            this.$changeRegionSelect.on("click", function () {
                // Toggle dropdown form
                var $this = $(this);
                var $provinceSelector = $(".change-region-popup .change-region-provinces");
                var $regionLink = $(".change-region-popup .change-region-link");
                var $changeRegionProvincesButton = $(".change-region-provinces-button");

                if (!$provinceSelector.hasClass('change-region-hidden')) {
                    $provinceSelector.addClass('fadeout-transition')
                }
                var $changeRegionText = $('.change-region-text');
                if ($changeRegionText.hasClass('change-region-text-changed')) {
                    var optionMessage = $(".change-region-text-to-change").text().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ").trim();
                    _self.changeCityProvinceSelectorOptionOmniture(optionMessage);
                    if ($(".change-region-text-changed:visible").length === 0) {
                        $('.change-region-text-to-change').addClass("hide-change-region-city");
                        $('.change-region-container-tooltip').addClass("hide-change-region-city-visibility");

                        $('.change-region-text-changed').show();
                    } else {
                        $('.change-region-text-to-change').removeClass("hide-change-region-city")
                        $('.change-region-container-tooltip').removeClass("hide-change-region-city-visibility");

                        $('.change-region-text-changed').hide();
                    }
                } else {
                    _self.changeProvinceSelectorOptionOmniture();
                }

                if (!$provinceSelector.hasClass('change-region-hidden')) {
                    setTimeout(function() {
                        $provinceSelector.addClass('change-region-hidden')
                    }, 225)
                } else {
                    $provinceSelector.removeClass('change-region-hidden');
                    $provinceSelector.removeClass('fadeout-transition')
                }

                $regionLink.toggleClass('change-region-link-selected');
                $changeRegionProvincesButton.toggleClass("change-region-provinces-button-expanded");
            });
            
            // POPUP
            this.$changeRegionInput.on("click", function (e) {
                if (e.clientX != 0 && e.clientY != 0) {
                    var newProvince = $(this).find("input");
                    $("input").prop("checked", false);
                    var form = $(".change-region-popup .province-form");
                    if (newProvince.val() != "") {
                        _self.removeZoneCookie();
                        _self.selectProvince(form, newProvince);
                    }
                }
            });

            this.$changeRegionProvinceLabel.on("click", function () {
                if ($(this).data('cityform')) {
                    var prov = $(this).data('cityform');
                    showCityTab(prov, false);
                }
            });

            function showCityTab(prov, focus) {
                $('.city-form').hide();
                $('.city-selector-' + prov).show();
                $('.change-region-city-mobile .province-form').removeClass('transform-menu-city-province-left');
                $('.change-region-city-mobile .province-form').addClass('transform-menu-city-province-right');
                $('.province-form-fieldset').attr("aria-hidden", "true");
                $('.city-selector-' + prov).attr("aria-hidden", "false");
                $('.province-form-fieldset input').attr("disabled", "disabled");
                $('.city-selector-' + prov + ' .city-select').removeAttr("disabled");
                $('.city-selector-' + prov + ' .label-select-disabled').removeAttr("disabled");
                if (focus) {
                    $('.city-selector-' + prov).find("label:first-of-type").focus();
                }
            }

            this.$anotherProvince.on("click", function () {
                anotherProvince($(this), false);
            }); 

            function anotherProvince(anotherProvince, focus) {
                $('.change-region-city-mobile .province-form').removeClass('transform-menu-city-province-right');
                $('.change-region-city-mobile .province-form').addClass('transform-menu-city-province-left');
                $('.province-form-fieldset').attr("aria-hidden", "false");
                $('.province-form-fieldset input').removeAttr("disabled");
                anotherProvince.parent().attr("aria-hidden", "true");
                anotherProvince.parent().find('input').attr("disabled", "disabled");
                if (focus) {
                    $('.province-form-fieldset').find("label:first-of-type").focus();
                }
            }

            this.$keepProvince.on("click", function () {
                _self.removeZoneCookie();
                _self.closeBar();
                _self.saveCookie();
                window.location.reload();
            }); 

            this.$confirmRegionLink.on("click", function () {
                var changeOption = $(".confirm-region-link").text().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ").trim();
                _self.changeCityProvinceSelectorOptionOmniture(changeOption);
                $('.change-region-container-tooltip').hide();
                $(".change-region-container-question, .change-region-provinces-button, .change-region-close").fadeOut(function () {
                    $('.change-region-container-confirm').fadeIn();
                });
                setTimeout(function () { _self.closeBar(); }, 3000);
            });

            this.$changeRegionCity.on("click", function (e) {
                if (e.clientX != 0 && e.clientY != 0) {
                    var id = $(this).attr('id');
                    var newProvince = $("#province-" + id);
                    var newZone = $("#zone-" + id).val();
                    var newCity = $("#" + id).val();
                    _self.updateZoneCookie(newZone, newCity);
                    $("input").prop("checked", false);
                    var form = $(".change-region-popup .province-form");
                    _self.changeCityProvinceSelectorOmniture(newCity);
                    _self.selectProvince(form, newProvince);
                }
            }); 

            // POPUP
            this.$provinceSelectorOption.on("keyup", function (key) {
                var keyCode = key.which;
                var enterKey = 13;
                if (keyCode == enterKey) {
                    var newProvince = $(this).find("input");
                    if (newProvince.val() != "") {
                        $("input").prop("checked", false);
                        var form = $(".change-region-popup .province-form");
                        _self.removeZoneCookie();
                        _self.selectProvince(form, newProvince);
                    }
                    else {
                        if ($(this).data('cityform')) {
                            var prov = $(key.currentTarget).data('cityform');
                            showCityTab(prov, true);
                        } else {
                            anotherProvince($(key.currentTarget),true);
                        }
                    }
                }
            });

            // POPUP
            this.$changeRegionSelect.on("keyup", function (key) {
                var $provinceSelector = $(".change-region-popup .change-region-provinces");
                var keyCode = key.which;
                var upArrow = 38;
                var downArrow = 40;
                if ((keyCode == upArrow || keyCode == downArrow) && (!($provinceSelector.hasClass('change-region-hidden')) && !($provinceSelector.hasClass('change-region-provinces-city')))) {
                    $provinceSelector.find(".change-region-fieldset label:first-of-type").focus();
                }
                if ((keyCode == upArrow || keyCode == downArrow) && (!($provinceSelector.hasClass('change-region-hidden')) && $provinceSelector.hasClass('change-region-provinces-city'))) {
                    var $selectedTab = $provinceSelector.find("fieldset[aria-hidden=false]");
                    $selectedTab.find("label:first-of-type").focus();
                }
            });

            // POPUP                
            this.$changeRegionCloseButton.on("keyup", function (key) {
                var keyCode = key.which;
                var enterKey = 13;
                if (keyCode == enterKey) {
                    _self.closeBar();
                }
            });

            // if the form is open and up/down arrow key is pressed then it should highlight the very first option but only once.

            // POPUP
            this.$provinceForm.on('submit', _self.submitRegion.bind(this));
        },
        show: function(){
            this.$changeRegion.removeClass('change-region-popup-hidden');
        },
        hasCitySelector: function () {
            return this.$changeRegion.hasClass("change-region-city-popup");
        },
        closeBar: function () {
            // Close province selector
            $(".change-region-popup").addClass('change-region-popup-closed');
            $(".change-region-provinces").addClass('change-region-hidden');
            $(".change-region-link").removeClass('change-region-link-selected');
            setTimeout(function () {
                $(".change-region-popup").addClass('change-region-popup-hidden');
            }, 500);
        },
		
		updateZoneCookie: function (zone, city) {
			return new $.Deferred(function (defer) {
				$.ajax({
                    url: "/ajax/rsxhome/UpdateZoneCookie?zone=" + zone + "&city=" + city,
                    dataType: "json",
                    cache: false,
                    success: function (data) {                      
                        defer.resolve(data);
                    },
                    error: function (e) {
                        console.error("Error loading: ", e);
						defer.reject();
                    }
                });
			});
		},
		
		removeZoneCookie: function () {
			return new $.Deferred(function (defer) {
				$.ajax({
                    url: "/ajax/rsxhome/RemoveZoneCookie",
                    dataType: "json",
                    cache: false,
                    success: function (data) {                      
                        defer.resolve(data);
                    },
                    error: function (e) {
                        console.error("Error loading: ", e);
						defer.reject();
                    }
                });
			});
		}
    });


    var cookieManager = {

        setLanguageRegionCookieValue: function (lang, region, larsegmenttype, bIgnorePreviousCookie) {
            var geminiCookieName = "gemini";
            var cookieVal = bIgnorePreviousCookie == true ? null : this.getCookie(geminiCookieName);
            var geminiCookieVal = this.getFullGeminiString(lang, region, cookieVal, larsegmenttype);
            var hostname = window.location.hostname;
            var domain = ".bell.ca";
            this.setCookie(geminiCookieName, geminiCookieVal, 90, domain);
        },
        
        eraseZoneCookie: function () {
            document.cookie = 'zone=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=.bell.ca';
        },

        updateZoneCookie: function (zone, city) {
            var domain = ".bell.ca";
            var zoneVal = "zone=" + zone + "&city=" + city;
            this.setCookie('zone', zoneVal, 90, domain);
        },

        readProvinceCookieVal: function () {
            var gemini = document.cookie.match(new RegExp('gemini' + '=([^;]+)'));
            if (typeof gemini !== 'undefined' && gemini != null) {
                var pair = gemini[1].split("|").filter(function (x) { return x.indexOf("province=") == 0; });
                return typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1] : "";
            }
            if (typeof gemini === 'undefined' || gemini == null) {
                var showPS = $('#showProvinceSelector');
                if (typeof showPS !== 'undefined') {
                    if (showPS.val() == 'false') {
                        return 'false';
                    }
                }
            }
            return "";
        },

        readZoneInitCookieVal: function () {
            var zone = document.cookie.match(new RegExp('zone' + '=([^;]+)'));
            if (typeof zone !== 'undefined' && zone != null) {
                var pair = zone[1].split("&").filter(function (x) { return x.indexOf("init=") == 0; });
                return typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1] : "";
            }
            return "";
        },
        
        getGeminiString: function (region, cval, larsegmenttype) {
            var retVal = "region=" + region + "|province=" + region + "|LarSegmentType=" + larsegmenttype;
            if (cval != null) {
                var strSpl = cval.split('|');

                if (region != null && region.length != 0) {
                    strSpl[0] = "region=" + region;
                    strSpl[1] = "province=" + region;
                }

                if (larsegmenttype != null && larsegmenttype != undefined && larsegmenttype.length != 0) {
                    strSpl[2] = "LarSegmentType=" + larsegmenttype;
                }

                retVal = strSpl[0] + "|" + strSpl[1] + "|" + strSpl[2];
            }

            return retVal;
        },

        setCookie: function (name, value, days, domain) {
            var expires = "", date = new Date();

            if (!days || isNaN(days)) {
                days = 365;
            }

            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();

            var setCookieVal = name + "=" + value + expires + "; path=/";

            if (domain) {
                setCookieVal += "; domain=" + domain;
            }

            if (document.location.protocol === 'https:') {
                setCookieVal += "; secure";
            }

            document.cookie = setCookieVal;
        },

        getCookie: function (name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        },

        getFullGeminiString: function (lang, region, cval, larsegmenttype) {
            var retVal = "region=" + region + "|language=" + lang + "|province=" + region + "|LarSegmentType=" + larsegmenttype;
            if (cval != null) {
                var strSpl = cval.split('|');

                if (region != null && region.length != 0) {
                    strSpl[0] = "region=" + region;
                    strSpl[2] = "province=" + region;
                }

                if (lang != null && lang.length != 0) {
                    strSpl[1] = "language=" + lang;
                }

                if (larsegmenttype != null && larsegmenttype != undefined && larsegmenttype.length != 0) {
                    strSpl[3] = "LarSegmentType=" + larsegmenttype;
                }

                retVal = strSpl[0] + "|" + strSpl[1] + "|" + strSpl[2] + "|" + strSpl[3];
            }

            return retVal;
        },

        setRegionCookieValue: function (region, larsegmenttype, bIgnorePreviousCookie) {
            var geminiCookieName = "gemini";
            var cookieVal = bIgnorePreviousCookie == true ? null : this.getCookie(geminiCookieName);
            var geminiCookieVal = this.getGeminiString(region, cookieVal, larsegmenttype);
            var hostname = window.location.hostname;
            var domain = ".bell.ca";
            this.setCookie(geminiCookieName, geminiCookieVal, 90, domain);
        },
    }

    return bell;
})(PS || {});
PS.provinceSelector.init();
;
function resetSameHeightElements(pSameHeightElement) {
    if (pSameHeightElement !== undefined) {
        var sameHeightIndex = pSameHeightElement.dataset.sameHeightIndex;
        var sameHeightGroup = pSameHeightElement.closest('.same-height-wrap').querySelectorAll('.same-height[data-same-height-index="' + sameHeightIndex + '"]');

        sameHeightGroup.forEach(function (element) {
            element.style.minHeight = '';
        });
    } else {
        var allSameHeight = document.querySelectorAll('.same-height-wrap .same-height');

        allSameHeight.forEach(function (element) {
            element.style.minHeight = '';
        });
    }
}

function processSameHeightElements(pSameHeightElement) {
    var mobileMax = 767.98;
    var tabletMax = 991.98;
    var initializing = true;
    var wrapEls;
    var specificIndex;

    if (pSameHeightElement !== undefined) {
        initializing = false;
        wrapEls = [pSameHeightElement.closest('.same-height-wrap')];
        specificIndex = pSameHeightElement.dataset.sameHeightIndex;
    } else {
        wrapEls = document.querySelectorAll('.same-height-wrap');
    }

    wrapEls.forEach(function (wrapEl) {
        var skipBreakpoints = wrapEl.dataset.sameHeightSkip;
        var sameHeightElements;
        var indexArr = [];

        if (skipBreakpoints !== undefined) {
            skipBreakpoints = skipBreakpoints.trim().toLowerCase().split(',');

            if (window.matchMedia('(max-width: ' + mobileMax + 'px)').matches) {
                if (skipBreakpoints.includes('m')) {
                    return;
                }
            } else if (window.matchMedia('(max-width: ' + tabletMax + 'px)').matches) {
                if (skipBreakpoints.includes('t')) {
                    return;
                }
            } else if (skipBreakpoints.includes('d')) {
                return;
            }
        }

        sameHeightElements = wrapEl.querySelectorAll('.same-height' + (specificIndex === undefined ? '' : '[data-same-height-index="' + specificIndex + '"]'));

        sameHeightElements.forEach(function (sameHeightEl) {
            var index = sameHeightEl.dataset.sameHeightIndex;

            if (!indexArr.includes(index)) {
                var maxHeight = 0;
                var equalElements = Array.from(sameHeightElements).filter(function (tempEl) {
                    var height = tempEl.offsetHeight;
                    var ret = tempEl.dataset.sameHeightIndex === index;
                    if (ret && height > maxHeight) {
                        maxHeight = height;
                    }

                    return ret;
                });

                equalElements.forEach(function (element) {
                    element.style.minHeight = maxHeight + 'px';
                });

                indexArr.push(index);
            }
        });

        if (initializing) {
            sameHeightElements.forEach(function (triggerEl) {
                triggerEl.removeEventListener('resize', triggerResize);
                triggerEl.addEventListener('resize', triggerResize);
            });
        }
    });

    function triggerResize() {
        var triggerEl = this;
        resetSameHeightElements(triggerEl);
        processSameHeightElements(triggerEl);
    }
}


// Using IIFEE to avoid variable conflicts
(function () {

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

    var resizeTimeoutFn;

    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeoutFn);
        resizeTimeoutFn = setTimeout(function () {
            resetSameHeightElements();
            processSameHeightElements();
        }, 200);
    });

    function triggerResize(element) {
        resetSameHeightElements(element);
        processSameHeightElements(element);
    }

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            processSameHeightElements();
        }, 10);
    });

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

        // Start slick event handler to hide offsreen cards
        (function () {
            $('.personSuppHiddenInactiveSlides').on('init', function () {
                retainFocusOutline($(".slick-arrow"));
                $(this).find('.slick-slide[aria-hidden="true"]').addClass('offscreen');
            });

            function hideInactiveSlides() {
                $('.personSuppHiddenInactiveSlides').on('afterChange', function () {
                    $(this).find('.slick-slide[aria-hidden="true"]').addClass('offscreen');
                    $(this).removeClass('sliding');
                });
                $('.personSuppHiddenInactiveSlides').on('beforeChange', function () {
                    $(this).find('.slick-slide[aria-hidden="true"]').removeClass('offscreen');
                    $(this).addClass('sliding');
                });
                let mousedown = false;
                $('.personSuppHiddenInactiveSlides').on('mousedown', function () {
                    mousedown = true;
                });
                $('.personSuppHiddenInactiveSlides').on('mouseup', function () {
                    mousedown = false;
                });
                $('.personSuppHiddenInactiveSlides').on('mousemove', function () {
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
                $('.personSuppManualSlickAccessibility').on('init breakpoint', function () {
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
                        notActiveSlickDots.attr('tabindex', -1);
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

                $('.personSuppManualSlickAccessibility').on('afterChange', function () {
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

                    // Unslick if slick items is <= the declared minimum value in the data-custom-config
                    "personSuppUnslickMinimumMultipleSlidesPerRow": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        const slideCount = slickInstance.find(".card-container").length;
                        if (slideCount <= value && slick.$slider.hasClass('slick-initialized')) {
                            slick.unslick();
                        }
                    },

                    "personSuppSetSlickDotsMarginTop": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        let slickDots = slickInstance.find('.slick-dots');
                        slickDots.css({
                            'margin-top': value + 'px',
                        });
                    },

                    "personSuppSetColumnSpacing15Visible30": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        if (value.toString() == "desktop") {
                            let slickTrack = slickInstance.find('.slick-track');
                            let slickSlide = slickInstance.find('.slick-slide');
                            let slickList = slickInstance.find('.slick-list');
                            slickSlide.css({ 'margin': '0px 7.5px', 'padding': '0px 7.5px' });
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

                    "personSuppLinkSlide": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
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

                    "personSuppKeyboardArrowFunctionLinkSlide": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
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

                    "personSuppMultiObjectSlides": function (value) {
                        // event types in which the function must proceed
                        const eventTypes = ['init', 'breakpoint'];
                        // proceed only if the unslickMinimum property has positive value and if the current event type is included in the eventTypes variable
                        if (!value || !eventTypes.includes(currentEvent)) return;

                        slick.$slides.each(function () {
                            const wrapper = $(this).find('> div');
                            wrapper.addClass(value);
                        });
                    },

                    "personSuppSlickOverflowVisibleFullScreen": function (value) {
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


            $(document).on("init", ".person-supp-configurable-slider", function (event, slick) {
                initializeSlickConfig(slick, 'init');
            });

            handleWindowResize(function () {
                const slicks = $('.person-supp-configurable-slider');
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

                $('.person-supp-configurable-slider').each(function () {
                    initializeSlickConfig($(this).slick('getSlick'), 'breakpoint');
                });
                //initializeSlickConfig($('.person-supp-configurable-slider').slick('getSlick'), 'breakpoint');

                setTimeout(function () {
                    slicks.slick('setPosition');
                }, 300);
            });

            function addRoleList() {
                setTimeout(function () {
                    $(".person-supp-configurable-slider.role-list-js:not('.slick-initialized')").attr("role", "list")
                }, 100)
            }

            //Initialize add role list
            addRoleList();

            $(".person-supp-configurable-slider").slick();
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
})();;
