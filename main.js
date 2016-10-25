$(document).ready(function() {
    // 2016_1021_week4_day21_gitHubRecreation

    // Bootstrap Tabs
    // http://getbootstrap.com/javascript/#tabs

    // Enable tabbable tabs via JavaScript (each tab needs to be activated individually):
    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })


    // GitHub USER
    $.ajax({
        method: "GET",
        url: "https://api.github.com/users/kbedgood",
        success: function(result) {
            console.log(result);

            $("#gitHubProfilePhoto").html(`<img src="${result.avatar_url}">`);
            $("#fullName").html(`${result.name}`);
            $("#userName").html(`${result.login}`);
            $("#gitHubTitle").append(`${result.bio}`);
            $("#gitHubWork").append(`${result.company}`);
            $("#gitHubLocation").append(`${result.location}`);
            $("#gitHubWebSite").append(`${result.company}`);
            $("#gitHubJoined").append(`${result.created_at}`);
            $("#followers").append(`${result.followers}`);
            $("#following").append(`${result.following}`);

        }
    });

    $.ajax({
        method: "GET",
        url: "https://api.github.com/users/kbedgood",
        success: function(result) {
            console.log(result);

            $("#starred").append(`${result.stargazers_count}`);

        }
    });


    //GitHub PUBLIC ACTIVITY

    var publicActivity = document.getElementById('#gitHubActivity');


    $.ajax({
        method: "GET",
        url: "https://api.github.com/users/kbedgood/events",
        success: function(result) {
            console.log(result);
            result.forEach(function(repo) {

                if (repo.type === "PushEvent") {

                    $("#publicActivity").append(`
            	<div class="gitHubPublicActivity">
                                                <div class="octiconActivity">
                                                            <img class="octiconLocation" src="/images/git-commit.svg" alt="">
                                                </div>
                                                <h6 id="publicActivityTime"></h6>
                                                <h5 id="gitHubActivity"></h5>
                                                <img id="profilePicMedium" src="${repo.actor.avatar_url}" alt="">
                                                <img id="profilePicSmall" src="" alt="">
                                                <h5 id="gitHubTask">${repo.id}</h5>
                                                <h5 class="gitTaskMessage">${repo.payload.commits[0].message}</h5>
                                                <div>
                                                </div>
                                    </div>

            	`)
                }
            })

        }
    });


var string = repo.payload.ref;

var array = string.split('/');

var repoName = array[2];

console.log(repoName);

    $.ajax({
        method: "GET",
        url: "https://api.github.com/users/kbedgood/repos",
        success: function(result) {
            console.log(result);
        }



    });

});
