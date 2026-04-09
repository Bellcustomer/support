var BELL = (function (bell, $) {

    'use strict';
    bell.mteSupportModules = bell.mteSupportModules || {};

	var $searchField = $(".search-support-container #searchFieldG")[0];
	var $connectorSearchWrap = $(".search-support-container #connectorSearchWrapG-support");
	var $searchAutocomplete = $(".search-support-container #searchAutocompleteG-support")[0];
	var $currentProvince = (($("meta[name='province']") !== null) && ($("meta[name='province']").length>0)) ? $("meta[name='province']")[0].content : "ON";
    var $currentLanguage = (($("meta[name='language']") !== null) && ($("meta[name='language']").length>0)) ? $("meta[name='language']")[0].content : "en";
	var $searchForm = $('[id*="rsx-connector-search-support"].g-connector-search')[0];
	var $gSearchForm = $('[id*="rsx-connector-search"].g-connector-search')[0]; 
	var $gSearchField = $('[id*="searchFieldG"].g-connector-search-field')[0];
	
    var $searchMktseg = $searchForm.dataset.mktseg;	
	var $autocompleteItems = $(".search-support-container #searchAutocompleteG-support")[0];	

    var $searchButtonHeader = $('[class^="g-"][class$="-bar-search-btn"]')[0];
	var $searchFormHeader = $("#rsx-connector-search")[0];
	var $searchTextHeader = $("#searchFieldG")[0];

    bell.mteSupportModules.search_homepage = {

        // Initialize module
        init: function () {
			
            var self = this;    

            var $searchButton = $(".searchButton_Support")[0];
			
            $searchField.addEventListener("input", debounce(searchFieldChangeHandler, 500));
            $searchField.addEventListener('keyup', searchFieldKeyupHandler);			
			$autocompleteItems.addEventListener("click", searchAutocompleteClickHandler);
			$searchButton.addEventListener('click', searchButtonClickHandler);
			$searchForm.addEventListener('submit', searchFormSubmissionHandler);

        },		
		
		renderSearchAutocomplete_support: function(autocompleteItems) {

			if (autocompleteItems.length > 0) {

				detectOutsideClick([$searchField, $searchAutocomplete], function () {
					$(".search-support-container #searchAutocompleteG-support")[0].classList.remove("g-active");
				});

				var autocompleteList = $searchAutocomplete.querySelectorAll("ul")[0];

				if (typeof autocompleteList !== "undefined") {
					$searchAutocomplete.removeChild(autocompleteList);
				}

				var newAutocompleteList = document.createElement("ul");

				for (var i = 0; i < autocompleteItems.length; i++) {
					var autocompleteListItem = document.createElement("li"),
					autocompleteListButton = document.createElement("button");
					autocompleteListButton.setAttribute("id", "searchAutocompleteBtnG-Support_" + i);
					autocompleteListButton.setAttribute("tabindex", "-1");
					autocompleteListButton.setAttribute("type", "button");
					autocompleteListButton.textContent = autocompleteItems[i];	
					autocompleteListItem.appendChild(autocompleteListButton);
					newAutocompleteList.appendChild(autocompleteListItem);
				}
				
				$searchAutocomplete.appendChild(newAutocompleteList);
				$searchAutocomplete.classList.add("g-active");
				
				for (var j = 0; j < autocompleteItems.length; j++) {
					$("#searchAutocompleteBtnG-Support_"+j).on('focus', function(e) { 
						$searchField.value=e.target.innerHTML;
						//$searchTextHeader.value = $searchField.value;
						//$searchButtonHeader.click();						
						
						//$("#rsx-connector-search-support").submit();
						submitConnectorSearchForm();
					});
				};
				scrollToBottomAutoCompleteDiv();
			} else {
				$searchAutocomplete.classList.remove("g-active");
			}
		}
		
    };
	
	function scrollToBottomAutoCompleteDiv() {
		var windowHeight = $(window).height();
		var windowTop = $(window).scrollTop();
		var windowBottom = windowTop + windowHeight;
		var divTop = $(".search-support-container #searchAutocompleteG-support").offset().top;
		var divHeight = $(".search-support-container #searchAutocompleteG-support").outerHeight();
		var divBottom = divTop + divHeight;

		if (((divBottom + 20) > windowBottom) && (windowHeight>divHeight + 100)) {
		  var scrollTo = divBottom - windowHeight + 20;
		  $('html, body').animate({
			scrollTop: scrollTo
		  }, 500);
		}		
	}
	
	function outsideClickListener(elements, callback) {
		return function(event){
			var isHide = true;
			
			if((event) && (event.target)){
				isHide= !(event.target==$searchField);
			}
			if (isHide) {
				if (typeof callback === "function") {
					callback();
				}
			}
		};
	}

	function removeClickListener(event) {
		//document.removeEventListener('click', outsideClickListener);
		//document.removeEventListener('focusin', outsideClickListener);
	}
		
	function detectOutsideClick(elements, callback) {

		document.addEventListener('click', outsideClickListener(elements,callback));
		document.addEventListener('focusin', outsideClickListener(elements,callback));
	}
	
	function submitConnectorSearchForm() {    
		if((!$searchField) ||(!$searchField.value)){return;}
		$gSearchField.value = $searchField.value;
		$gSearchForm.dispatchEvent(new Event('submit'));
		$gSearchForm.submit();
    }

	function searchAutocompleteClickHandler(e) {
		var selectedOption = e.target;
		var	selectedOptionText = selectedOption.textContent;

		$searchField.value = selectedOptionText;
		//$searchForm.dispatchEvent(new Event('submit'));
		//$searchForm.submit();
		submitConnectorSearchForm();
	}

	function debounce(func, wait, immediate) {
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
	}
		
    function searchFieldChangeHandler(e) {
        if ($searchField.value.length > 0) {
            $connectorSearchWrap.addClass("g-connector-search-field-dirty-support");
        } else {
            $connectorSearchWrap.removeClass("g-connector-search-field-dirty-support");
        }

        if($searchField.value.length > 20) {

            var query = $searchField.value;

            if (query.indexOf(":") > -1) {
                query = query.substring(0, query.indexOf(":"));
            }

            var urlQuery = "?q=" + query + "&prov=" + $currentProvince + "&lang=" + $currentLanguage + "&mktseg=" + $searchMktseg,fullUrl = "https://www.bell.ca/Search/Search/GetAutocomplete" + urlQuery;


            BELL.mteSupportModules.utils_support.getJSONP(fullUrl, "BELL.mteSupportModules.search_homepage.renderSearchAutocomplete_support");

        } else {
            $searchAutocomplete.classList.remove("g-active");
        }
    }
	
	function searchFormSubmissionHandler(e){
		if(($searchField) && ($searchField.value)){
			//$searchTextHeader.value = $searchField.value;
			//$searchFormHeader.submit();					
			submitConnectorSearchForm();
		}
		else{
			var $input = $(".search-support-container .mte-category-header__search-field")[0];
            var targetUrl = window.location.href;						
			if ((!$(".search-support-container #searchFieldG")[0].value) && $input && targetUrl) {
				e.preventDefault();
				if($currentLanguage == 'fr'){
					targetUrl = targetUrl.replace('soutien', 'www');
					if(targetUrl.endsWith('/?')){
						targetUrl = targetUrl.replace('/?', '/recherche/accueil#t=All');
					}
					else{
						targetUrl = targetUrl + '/recherche/accueil#t=All';
					}					
				}
				else{
					targetUrl = targetUrl.replace('support', 'www');
					if(targetUrl.endsWith('/?')){
						targetUrl = targetUrl.replace('/?', '/search/home#t=All');
					}
					else{
						targetUrl = targetUrl + '/search/home#t=All';
					}					
				}
                window.location.href = encodeURI(targetUrl);	//security fix	
				return false;
			}
		}
    }
	
	function searchButtonClickHandler(e) {    
		if((!$searchField) ||(!$searchField.value)){return;}
		//$("#rsx-connector-search-support").submit();
		//$searchTextHeader.value = $searchField.value;
        //$searchButtonHeader.click();	
		submitConnectorSearchForm();
    }

	function autocompleteItemsClickHandler(e){
		var x =e.target; 
	}

    function searchFieldKeyupHandler(e) {

        var autocompleteItemElements = $searchAutocomplete.querySelectorAll("ul > li");

        if ((e.which === 38 || e.which === 40) && autocompleteItemElements.length > 0) {

            e.preventDefault();

            var selectedAutocompleteOption = $searchAutocomplete.querySelector("button.g-active"),
                selectedAutocompleteOptionIndex = selectedAutocompleteOption === null ? -1 : selectedAutocompleteOption.id.split("_")[1];

            selectedAutocompleteOptionIndex = parseInt(selectedAutocompleteOptionIndex);

            if (e.which === 38) {

                if (selectedAutocompleteOptionIndex === 0 || selectedAutocompleteOptionIndex === -1) {
                    selectedAutocompleteOptionIndex = autocompleteItemElements.length - 1;
                } else {
                    selectedAutocompleteOptionIndex -= 1;
                }

            } else if (e.which === 40) {
                if (selectedAutocompleteOptionIndex === autocompleteItemElements.length - 1 || selectedAutocompleteOptionIndex === -1) {
                    selectedAutocompleteOptionIndex = 0;
                } else {
                    selectedAutocompleteOptionIndex += 1;
                }
            }

            $searchAutocomplete.querySelectorAll("button").forEach(function (element) {
                element.classList.remove("g-active");
            });

            var activeAutocompleteButton = document.getElementById("searchAutocompleteBtnG-Support_" + selectedAutocompleteOptionIndex);
            activeAutocompleteButton.classList.add("g-active");

            var autocompleteItemText = activeAutocompleteButton.innerText;

            $searchField.value = "";
            $searchField.value = autocompleteItemText;

			return;
        }
		
		if (e.which === 13) {
			if((!$searchField) ||(!$searchField.value)){return;}
			//$("#rsx-connector-search-support").submit();
			//$searchTextHeader.value = $searchField.value;
			//$searchButtonHeader.click();	
			submitConnectorSearchForm();
		}

		return;
    }

	bell.mteSupportModules.search_homepage.init();
	
    return bell;
})(BELL || {}, jQuery);




