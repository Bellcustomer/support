
/*!
 * External Scripts Loading Control - Bell Externals Static Defer
 * Clean Script Loading with Deferred Loading
 */

const loadExternalScriptsDeferred = () => {
    const modulePath = '/Styles/assets/js/external_scripts_loading_control.js';
    
    const script = document.createElement('script');
    script.src = modulePath;
    script.async = false;
    script.defer = true;
    
    document.head.appendChild(script);
};

loadExternalScriptsDeferred();
