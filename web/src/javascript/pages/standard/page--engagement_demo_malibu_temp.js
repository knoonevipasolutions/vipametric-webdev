jQuery(function($) {

    var $engagementCont = $('.view-engagement'),
        $engagementName = $engagementCont.find('.engagement-name'),
        $postEventSurveyCon = $('.post-event-survey');

    if ($engagementName.text() == 'Malibu Example') {
        var $externalSurveyName = $postEventSurveyCon.find(".survey-item-name");
        var $externalSurveyCount = $postEventSurveyCon.find(".survey-item-data-count");
        var $externalSurveyActions = $postEventSurveyCon.find(".survey-item-actions");

        $externalSurveyName.attr("href", "#");
        $externalSurveyCount.html('487');

        $externalSurveyActions
            .append($('<a class="btn btn-glyph-only btn-xsmall btn-download" href="/demo2/survey/results" title="View Results"><span class="btn-text">View Results</span></a>'))
            .append($('<a class="btn btn-glyph-only btn-xsmall btn-download" href="#" title="Manage Results"><span class="btn-text">Manage Results</span></a>'));
    }

});