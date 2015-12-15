jQuery(function($) {
    var $engagementCont = $('.view-engagement'),
        $engagementName = $engagementCont.find('.engagement-name'),
        $preEventSurveyCon = $('.pre-event-survey'),
        $rsvpSurveyCon = $('.rsvp'),
        $inMarketSurveyCon = $('.in-market-survey'),
        $postEventSurveyCon = $('.post-event-survey'),
        $leadEmailCon = $('.lead-email'),
        $leadPhoneCon = $('.lead-phone'),
        $leadSocialCon = $('.lead-social'),
        $leadAddressCon = $('.lead-address'),
        $mediaManager = $(".section.media");


    if ($engagementName.text() == 'Malibu Example') {

        function editMediaManager() {
            var $videoManager = $mediaManager.find(".video-manager");
            var $videoManagerPreviewer = $videoManager.find("> .media-manager-previewer");
            var pictureData = [
                {
                    src: '/_resources/dyn/files/27471za2b9e4b6/_fn/IMG_3367.JPG'
                },
                {
                    src: '/_resources/dyn/files/27489z2bfa704b/_fn/IMG_3368.JPG'
                }
            ];
            var pictureHtml = $.map(pictureData, function (el, idx) {
                var imageStyle = 'style="background-image: url(' + el.src + ');"';
                return '<div class="media-manager-preview"><div class="media-manager-preview-render" ' + imageStyle + ' /></div>';
            }).join('');



            $videoManager.addClass("malibu");

            $('<div class="circle"></div>').insertBefore($videoManagerPreviewer);
            $videoManagerPreviewer.empty().append(pictureHtml);
        }

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

        function changeSurvey($con, name) {
            var $surveyHeader= $con.find(".survey-item-header"),
                $surveyHeaderName = $('<div class="survey-item-name">' + name + '</div>'),
                $surveyActions = $con.find(".survey-item-actions");

            if (name == "In-Market Survey") {
                $surveyHeader.find("a").attr("href", "/demo2/survey");
            }
            else {
                //Remove Link from post-event survey name
                $surveyHeader.html($surveyHeaderName);
            }
            //Append extra action buttons to post-event survey
            $surveyActions
                .append($('<a class="btn btn-glyph-only btn-xsmall btn-results" href="/demo2/survey/results" title="View Results"><span class="btn-text">View Results</span></a>'))
                .append($('<a class="btn btn-glyph-only btn-xsmall btn-edit" href="#" title="Manage Results"><span class="btn-text">Manage Results</span></a>'));
        }


        resetSurveyCounts();
        resetLeadCounts();
        changeSurvey($preEventSurveyCon, "Pre-Event Survey");
        changeSurvey($rsvpSurveyCon, "RSVP");
        changeSurvey($inMarketSurveyCon, "In-Market Survey");
        changeSurvey($postEventSurveyCon, "Post Event Survey");
        editMediaManager();

    }

});