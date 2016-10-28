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
        url: "https://api.github.com/users/kbedgood/events",
        success: function(result) {
            console.log(result);
            result.forEach(function(repo) {

                if (repo.type === "PushEvent") {

                    $("#publicActivity").append(`
<div class="gitHubPublicActivity">
<div class="octiconActivity">
<span class="octicon octicon-git-commit"></span>
<div class="gitPathway">
<h6 class="publicActivityTime">${repo.created_at}</h6>
<h5 class="gitHubActivity">kbedgood </h5> <h5 class="regText">pushed to</h5> <h5 class="gitBranch"> ${repo.payload.ref}</h5> <h5 class="at"> at </h5> <h5 class="tiy"> TIY-Cincinnati-Front-End</h5>
</div>
<img class="profilePicMedium" src="${repo.actor.avatar_url}" alt="">
<div class="repoInfo">
<img class="profilePicSmall" src="${repo.actor.avatar_url}" alt="">
<h5 class="gitHubTask">${repo.id}</h5> 
<h5 class="gitTaskMessage">${repo.payload.commits[0].message}</h5>
</div>
<div>
</div>
</div>

`)
                }
            })

        }
    });



    // This is the ajax method to get all your repos. This should loop through result and 
    // write each of your repos to $('#repositories'). Use what you did above as reference. 
    $.ajax({
        method: "GET",
        url: "https://api.github.com/users/kbedgood/repos",
        success: function(result) {
            console.log(result);
            result.forEach(function(repo) {


                $("#repositories").append(`
<div class="gitHubRepository">
<div class="left">
<h3 class="repoName">${repo.name}</h3>
<h3 class="repoUpdated">Updated ${repo.updated_at}</h3>


</div>
<div class ="rightTop">
    <ul class="repoTopRight">
        <li class="language">${repo.language}</li>
        <li class="starGazerCount"><span class="octicon octicon-star"></span>${repo.stargazers_count}</li>
        <li class="octBranch"><span class="octicon octicon-git-branch"></span></li>
        <li class="forks">${repo.forks_count}</li>
    </ul>
</div>
`)

            });
        }
    });
});
