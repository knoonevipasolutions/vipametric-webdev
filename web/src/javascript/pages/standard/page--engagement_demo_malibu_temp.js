jQuery(function($) {
    var $engagementCont = $('.view-engagement'),
        $engagementName = $engagementCont.find('.engagement-name'),
        $preEventSurveyCon = $('.pre-event-survey'),
        $rsvpSurveyCon = $('rsvp'),
        $inMarketSurveyCon = $('.in-market-survey'),
        $postEventSurveyCon = $('.post-event-survey'),
        $leadEmailCon = $('.lead-email'),
        $leadPhoneCon = $('.lead-phone'),
        $leadSocialCon = $('.lead-social'),
        $leadAddressCon = $('.lead-address');


    if ($engagementName.text() == 'Malibu Example') {

        function resetSurveyCounts() {
            var $preEventSurveyCount = $preEventSurveyCon.find(".survey-item-data-count"),
                $rsvpSurveyCount = $rsvpSurveyCon.find(".survey-item-data-count"),
                $inMarketSurveyCount = $inMarketSurveyCon.find(".survey-item-data-count"),
                $externalSurveyCount = $postEventSurveyCon.find(".survey-item-data-count");

            $preEventSurveyCount.html('243');
            $rsvpSurveyCount.html('602');
            $inMarketSurveyCount.html('237');
            $externalSurveyCount.html('487');
        }

        function resetLeadCounts() {
            var $leadEmailCount = $leadEmailCon.find(".lead-count"),
                $leadPhoneCount = $leadPhoneCon.find(".lead-count"),
                $leadSocialCount = $leadSocialCon.find(".lead-count"),
                $leadAddressCount = $leadAddressCon.find(".lead-count");

            $leadEmailCount.html('620');
            $leadPhoneCount.html('503');
            $leadSocialCount.html('254');
            $leadAddressCount.html('487');
        }

        function changePostEventSurvey() {
            var $externalSurveyHeader= $postEventSurveyCon.find(".survey-item-header"),
                $externalSurveyHeaderName = $('<div class="survey-item-name">Post Event Survey</div>'),
                $externalSurveyActions = $postEventSurveyCon.find(".survey-item-actions");

            //Remove Link from post-event survey name
            $externalSurveyHeader.html($externalSurveyHeaderName);

            //Append extra action buttons to post-event survey
            $externalSurveyActions
                .append($('<a class="btn btn-glyph-only btn-xsmall btn-view" href="/demo2/survey/results" title="View Results"><span class="btn-text">View Results</span></a>'))
                .append($('<a class="btn btn-glyph-only btn-xsmall btn-results" href="#" title="Manage Results"><span class="btn-text">Manage Results</span></a>'));
        }


        resetSurveyCounts();
        resetLeadCounts();
        changePostEventSurvey();


    }

});