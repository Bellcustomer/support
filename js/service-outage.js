var BELL = (function (bell) {
    'use strict';
    var closeSOnotification, 
        closeOutageMessageNotification,
        serviceOutageNotification;
    function accordionClickHandler(e) {

        var accordionTrigger = e.target.closest("button");

        if (!accordionTrigger) {
            return
        }

        var accordion = accordionTrigger.parentNode.parentNode,
            accordionContent = accordion.querySelectorAll(".bhp-accordion-body")[0];

        if (accordionTrigger.getAttribute("aria-expanded") === "true") {
            accordion.classList.remove("bhp-active");
            accordionTrigger.setAttribute("aria-expanded", false);
            accordionContent.style.maxHeight = null;
            accordionContent.setAttribute('aria-hidden', true);

            setTimeout(function () {
                accordionContent.classList.add("bhp-hide");
            }, 250);

        } else {
            accordionContent.classList.remove("bhp-hide");
            accordion.classList.add("bhp-active");
            accordionTrigger.setAttribute("aria-expanded", true);
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.setAttribute('aria-hidden', false);

        }
    }
    BELL.SupportModules = BELL.SupportModules || {};

    bell.SupportModules.notification = {

        init: function () {

			var self = this;
            closeOutageMessageNotification = document.getElementById("service-outage-notification");
            closeSOnotification = document.getElementById("serviceOutagecloseBtn");
            serviceOutageNotification = document.getElementById("serviceOutageNotificationbtn");
            if (serviceOutageNotification != null) { serviceOutageNotification.setAttribute("aria-expanded", "false"); }
            try {
                if (closeOutageMessageNotification) {
                    if (closeSOnotification != null) {
                        closeSOnotification.addEventListener("click", function () { closeOutageMessageNotification.classList.add("bhp-hide"); });
                    }
                    if (serviceOutageNotification != null) {
                        serviceOutageNotification.addEventListener("click", accordionClickHandler);
                    }
                }
            }
            catch (exe){}
        }
    }
   
	bell.SupportModules.notification.init();
    return bell;
})(BELL || {}, jQuery);
