jQuery(function($) {
    var POST_LISTING_LIMIT = 10;
    var CSS_LOADING_CLASS = 'loading';
    var $topPosts = $("#top_posts");
    var trackerID = $topPosts.data('tracker');
    var os = $topPosts.data('offset');
    var itemCount = 0;
    var prevOffset = 0;
    var nextOffset = POST_LISTING_LIMIT + os;
    var ws = $topPosts.data('ws');

    var API_KEY = 'a417ee49d987911d',
        TRACKER = trackerID,
        API_URL = 'http://api.keyhole.co/1.1/get';

    function joinFeeds(data, callback) {
        var $twitterPosts = data.results.twitter;
        var $instagramPosts = data.results.instagram;
        itemCount = $twitterPosts.length + $instagramPosts.length;

        for (var i = 0; i < $twitterPosts.length; i++) {
            var momentDate = moment($twitterPosts[i].created_at, 'ddd MMM DD HH:mm:ss +-HHHH YYYY');
            $twitterPosts[i].sortDate = momentDate.format('X');
            $twitterPosts[i].postType = "twitter";
        }
        for (var x = 0; x < $instagramPosts.length; x++) {
            $instagramPosts[x].sortDate = $instagramPosts[x].created_time;
            $instagramPosts[x].postType = "instagram";
        }

        var $feedPosts = $twitterPosts.concat($instagramPosts);

        function sortByDate(a, b){
            var aDate = a.sortDate;
            var bDate = b.sortDate;
            return ((aDate < bDate) ? -1 : ((aDate > bDate) ? 1 : 0));
        }

        $feedPosts.sort(sortByDate);

        callback($feedPosts, loadComplete);
    }

    var constructPost = function(posts, callback) {
        var $posts = $(posts);
        var $postHtml = $('<div class="post"></div>');
        var $postPicHtml = $('<div class="profile-pic"></div>');
        var $postContentHtml = $('<div class="content"></div>');
        var $userInfoHtml = $('<div class="user-info"></div>');
        var $postInfoHtml = $('<div class="post-info"></div>');
        var $favCountHtml = $('<div class="favorited"></div>');
        var $postDateHtml = $('<div class="date"></div>');

        for (var idx = prevOffset; idx <= nextOffset; idx++) {
            var $post = $posts[idx];
            var $postCon = $postHtml.clone();
            var $postPic = $postPicHtml.clone();
            var $postContentCon = $postContentHtml.clone();
            var $userInfo = $userInfoHtml.clone();
            var $postInfo = $postInfoHtml.clone();
            var $favCount = $favCountHtml.clone();
            var $postDateCon = $postDateHtml.clone();

            function handlePostData() {
                var postContent,
                    postDate;

                if ($post.postType == "twitter") {
                    postContent = $post.text;
                    if (postContent.length > 140) {
                        postContent = postContent.substring(0, 140);
                        postContent = postContent.concat("...");
                    }
                    postDate = moment($post.sortDate, 'X');
                }
                else {
                    postContent = $post.caption.text;
                    if (postContent.length > 140) {
                        postContent = postContent.substring(0, 140);
                        postContent = postContent.concat("...");
                    }
                    postDate = moment($post.sortDate, 'X');
                }
                var favCount = $post.favorite_count ? $post.favorite_count : 0;
                var rtCount = $post.retweet_count ? $post.retweet_count : 0;

                $favCount.append(favCount + rtCount);
                $postDateCon.append(postDate.format('MMM D'));
                $postInfo.append($postDateCon);
                $postContentCon.append(postContent);
                $postCon.append($postContentCon, $favCount);
            }

            function handleUserData() {
                var $user = $post.user;
                if ($user) {
                    var userHandle,
                        userName,
                        userURL,
                        profilePicURL,
                        $linkToPost;

                    if ($post.postType == "twitter") {
                        userHandle = $user.screen_name;
                        userName = $user.name;
                        userURL = "http://twitter.com/" + userHandle;
                        profilePicURL = $user.profile_image_url;
                        $linkToPost = $('<a class="go" target="_blank" href="http://twitter.com/' + userHandle + '/status/' + $post.id_str + '">View Post</a>');
                    }
                    else {
                        userHandle = $user.username;
                        userName = $user.full_name;
                        userURL = "http://instagram.com/" + userHandle;
                        profilePicURL = $user.profile_picture;
                        $linkToPost = $('<a class="go" target="_blank" href="' + $post.link + '">View Post</a>');
                    }

                    var $profilePic = $('<img src="' + profilePicURL + '" alt="' + userHandle + '" />');
                    var $userHandleHtml = $('<a class="handle" href="' + userURL + '" target="_blank">@' + userHandle + '</a>');
                    var $userNameHtml = $('<a class="name" href="' + userURL + '" target="_blank">' + userName + '</a>');

                    $postPic.append($profilePic);
                    $userInfo.append($userNameHtml);
                    $userInfo.append($userHandleHtml);
                    $postCon.prepend($postPic);
                    $postInfo.prepend($userInfo);
                    $postCon.prepend($postInfo);
                    $postCon.append($linkToPost);
                    $postCon.addClass($post.postType);
                }
            }

            function buildPost() {
                $topPosts.append($postCon);
            }

            handlePostData();
            handleUserData();
            buildPost();
        }

        function buildPaging() {
            if (nextOffset < itemCount) {
                var $loadMore = $('<div class="action next"><a class="btn-more" href="#">Load More</a></div>');
                $topPosts.append($loadMore);
            }

            setupPager();
        }
        
        buildPaging();
        callback();
    };

    var loadComplete = function() {
        $topPosts.removeClass(CSS_LOADING_CLASS);
    };

    function setupPager() {
        var $postTrackerCon = $('.top-post-tracker');

        $postTrackerCon.each(function(){
            var $postCon = $(this);
            var $content = $postCon.find('#top_posts');

            if ($postCon.data('init') || !$content.length) {
                return;
            }

            $postCon.data('init', true);

            $postCon.on('click', '.action.next .btn-more', function(evt) {
                var $btn = $(this);

                evt.preventDefault();

                if ($btn.hasClass('loading')) {
                    return;
                }

                $content.addClass(CSS_LOADING_CLASS);
                $btn.addClass('loading').text('');

                $content.find(".action.next").remove();

                prevOffset = nextOffset + 1;
                nextOffset += POST_LISTING_LIMIT;
                getData();
            });

        });
    }


    function parseNum(num)
    {
        num += '';
        x = num.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function getData() {
        $.ajax(API_URL, {
            crossDomain: true,
            dataType: "json",
            data: {
                access_token: API_KEY,
                track: TRACKER,
                type: "posts",
                sort: 'recent',
                range: 30
            },
            success: function(data) {
                joinFeeds(data, constructPost);
            }
        });
    }

    if ($topPosts.length) {
        getData();
    }
});