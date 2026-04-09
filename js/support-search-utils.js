var BELL = (function (bell, $) {
    'use strict';
    bell.mteSupportModules = bell.mteSupportModules || {};

   bell.mteSupportModules.utils_support = {

        getJSONP: function (url, callback) {
            var ref = window.document.getElementsByTagName('script')[0];
            var script = window.document.createElement('script');
            script.src = url + (url.indexOf('?') + 1 ? '&' : '?') + 'callback=' + callback;

            ref.parentNode.insertBefore(script, ref);

            script.onload = function () {
                this.remove();
            };
        },

        throttle: function (callback, limit) {

            var waiting = false;

            return function () {
                if (!waiting) {
                    callback.apply(this, arguments);
                    waiting = true;
                    setTimeout(function () {
                        waiting = false;
                    }, limit);
                }
            }
        },

        debounce: function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        },

        getScript: function (source, callback) {
            var script = document.createElement('script');
            var prior = document.getElementsByTagName('script')[0];
            script.async = 1;

            script.onload = script.onreadystatechange = function (_, isAbort) {
                if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                    script.onload = script.onreadystatechange = null;
                    script = undefined;

                    if (!isAbort && callback) setTimeout(callback, 0);
                }
            };

            script.src = source;
            prior.parentNode.insertBefore(script, prior);
        }
    }

    return bell;

})(BELL || {});

