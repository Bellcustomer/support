/*
OnlineOpinion v5.7.7
Released: 11/19/2013. Compiled 11/19/2013 03:08:33 PM -0600
Branch: master Nov
Components: Full
UMD: disabled
The following code is Copyright 1998-2013 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab
*/
/*global OOo*/
var custom_var;
//$.getPageLang() defaults to 'en'
var rp = '://' + $.getPageLang() + '-CA.',
    customVar = (custom_var === undefined) ? '' : custom_var;

// Look for $("#opbupid").val() only when visitor is logged in
if (location.protocal === 'https:') {
    var opbupid = $("#opbupid").val();
    customVar = (opbupid === undefined) ? '' : opbupid;
}

/* Inline configuration */
var oo_feedback = new OOo.Ocode({
    referrerRewrite: {
        searchPattern: /:\/\//g,
        replacePattern: rp
    },
	tealeafCookieName: 'Tealeaf',
    customVariables : {customVariables: customVar}
    /*

    This will pass any optional variables on the page to the comment 
    card to be stored in the Custom Variable fields

    customVariables: {
        Name1: 'foo',
        Name2: 'bar',
        Name3: 'baz'
    }
    */
});