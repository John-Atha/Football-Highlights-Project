function updateLetterColors(mode="dark") {
    if (mode=="dark") {
        document.querySelector('body').style.color="white";
        document.querySelectorAll('.title').forEach( (element) => {
            element.style.color="color: rgb(39, 12, 57)";
        })
        document.querySelectorAll('a').forEach( (element) => {
            element.style.color="white";
        })
        document.querySelectorAll('.feed-item').forEach( (element) => {
            element.style.backgroundColor ="rgba(126, 128, 127, 0.25)";
        })
        document.querySelector('#teams-page-list').style.backgroundColor="rgba(126, 128, 127, 0.25)";
        document.querySelector('#about-text').style.backgroundColor="rgba(126, 128, 127, 0.25)";
    }
    else {
        document.querySelector('body').style.color="rgb(39, 12, 57)";
        document.querySelectorAll('a').forEach( (element) => {
            element.style.color="rgb(39, 12, 57)";
        })
        document.querySelectorAll('.feed-item').forEach( (element) => {
            element.style.backgroundColor ="lightgrey";
        })
        document.querySelector('#teams-page-list').style.backgroundColor="lightgrey";
        document.querySelector('#about-text').style.backgroundColor="lightgrey";
    }
}

function updateOtherColors(mode="dark") {
    if (mode=="dark") {
        ;
    }
    else {
        ;
    }
}

function updateBackroundColor(mode="dark") {
    if (mode=="dark") {
        document.querySelector('body').style.backgroundColor="rgb(39, 12, 57)";
    }
    else {
        document.querySelector('body').style.backgroundColor="rgb(231, 248, 252)";   
    }
}

function updateNavBarColor(mode="dark") {
    if (mode=="dark") {
        document.querySelector('#navbar').style.backgroundColor="#6FB98F";
        document.querySelector('.drop-down-content').style.backgroundColor="#6FB98F";
    }
    else {
        document.querySelector('#navbar').style.backgroundColor="lightgrey";
        document.querySelector('.drop-down-content').style.backgroundColor="lightgrey";
    }
}

function updateColors() {
    const theme_switch = document.querySelector('#switch-1');
    console.log("change lighting theme");
    if (theme_switch.checked) {
        mode="dark";
    }
    else {
        mode="light";
    }
    updateOtherColors(mode);
    updateBackroundColor(mode);
    updateNavBarColor(mode);
    updateLetterColors(mode);
}

function goSmooth() {
    try {
        document.querySelector('#p1').style.animationDuration="5s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#p2').style.animationDuration="6s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#button-container').style.animationDuration="7s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#navbar').style.animationDuration="2s";
    }
    catch(e) {
        ;
    }
    try {    
        document.querySelectorAll('.drop-down-content').forEach( (el)=> {
        el.style.animationDuration="0.2s";
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelectorAll('.feed').forEach( (el)=> {
        el.style.animationDuration="3s";
        //el.style.animationIterationCount="infinite";
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelectorAll('.title').forEach( (el)=> {
        el.style.animationDuration="3s";
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#teams-page-list').style.animationDuration="3s";
    }
    catch(e) {
        ;
    }
}

function goFast() {
    try {
        document.querySelector('#p1').style.animationDuration="0.5s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#p2').style.animationDuration="0.6s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#button-container').style.animationDuration="0.7s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#navbar').style.animationDuration="0.2s";
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#about-text').style.animationDuration="0.3s";
    }
    catch(e) {
        ;
    }
    try {    
        document.querySelectorAll('.drop-down-content').forEach( (el)=> {
        el.style.animationDuration="0.02s";
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelectorAll('.feed').forEach( (el)=> {
        el.style.animationDuration="0.02s";
        //el.style.animationIterationCount=1;
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelectorAll('.title').forEach( (el)=> {
        el.style.animationDuration="0.3s";
        });
    }
    catch(e) {
        ;
    }
    try {
        document.querySelector('#teams-page-list').style.animationDuration="0.3s";
        //el.style.animationIterationCount=1;
    }
    catch(e) {
        ;
    }
}

function updateSpeed() {
    const fast_switch = document.querySelector('#switch-2');
    console.log("change transition speed");
    if (fast_switch.checked) {
        goFast();
    }
    else {
        goSmooth();
    }
}

function hideAll() {
    const latest = document.querySelector('#latest-title');
    const feed = document.querySelector('.feed');
    const teams = document.querySelector('#teams-list');
    const teams_title = document.querySelector('#teams-page-title');
    const team_title = document.querySelector('#team-title');
    const league_title = document.querySelector('#league-title');
    const trending_title = document.querySelector('#trending-title');
    const about_title = document.querySelector('#about-page-title');
    const recommended_title = document.querySelector('#recommended-title');
    const about_us = document.querySelector('#about-text');
    about_title.style.display="none";
    about_us.style.display="none";
    recommended_title.style.display="none";
    trending_title.style.display="none";
    league_title.style.display="none";
    team_title.style.display="none";
    teams_title.style.display="none";
    teams.style.display="none";
    latest.style.display="none";
    feed.style.display="none";
}

function showFeed() {
    const feeds = document.querySelectorAll('.feed');
    const feed = feeds[0];
    feed.style.display="none";
    setTimeout(function() {}, 2000);
    feed.classList.remove("feed-animation");
    feed.classList.add("feed-animation");
    feed.style.display="table";
    const fast_switch = document.querySelector('#switch-2');
    const mode = document.querySelector('#switch-1');
    let timeout=2980;
    feed.style.zIndex = 0;
}

function explorePageInit() {
    const latest_title = document.querySelector('#latest-title');
    console.log("location: explore");
    history.pushState({page: 1}, "title1", "?page=latest");
    feedCompute("latest");
    latest_title.style.display="block";
    showFeed();
}

function aboutUsPageInit() {
    const about_title = document.querySelector('#about-page-title');
    const about_us = document.querySelector('#about-text');
    history.pushState({page: 4}, "title4", "?page=about-us");
    console.log("location: about-us");
    about_us.style.display="block";
    about_title.style.display="block";
    about_us.style.zIndex = 0;
}

function pageInit() {
    if (window.location.href.includes("?explore")) {
        explorePageInit();
    }

    else {
        aboutUsPageInit();
    }
}

function fixDepths(z) {
    const feeds = document.querySelectorAll('.feed');
    const feed=feeds[0];
    const teams = document.querySelector('#teams-list');
    const about_us = document.querySelector('#about-text');
    feed.style.zIndex = z;
    teams.style.zIndex = z;
    about_us.style.zIndex = z;
}

function showTeams() {
    const teams_title = document.querySelector('#teams-page-title');
    const teams = document.querySelector('#teams-list');
    hideAll();
    teams_title.style.display="block";
    teams.style.display="grid";
    teams.style.zIndex = 0;
    history.pushState({page: 2}, "title2", "?page=teams");
}

function feedTeamUpdate(link) {
    const team_title = document.querySelector('#team-title');
    feedCompute("teams", link.innerHTML);
    hideAll();
    showFeed();
    history.pushState({page: 2}, "title1", "?page="+link.innerHTML);
    team_title.style.display="block";
    team_title.innerHTML=link.innerHTML; 
}

function feedLeagueUpdate(link) {
    const league_title = document.querySelector('#league-title');
    feedCompute("league", link.innerHTML);
    hideAll();
    showFeed();
    history.pushState({page: 2}, "title3", "?page="+link.innerHTML);
    league_title.style.display = "block";
    league_title.innerHTML = link.innerHTML;
}

function feedLatestUpdate() {
    const latest_title = document.querySelector('#latest-title');
    hideAll();
    latest_title.style.display="block";
    feedCompute("latest");
    showFeed();
    history.pushState({page: 1}, "title1", "?page=latest");
}

function feedTrendingUpdate() {
    const trending_title = document.querySelector('#trending-title');
    hideAll();
    trending_title.style.display="block";
    feedCompute("trending");
    showFeed();
    history.pushState({page: 3}, "title3", "?page=trending");
}

function feedRecommendedUpdate() {
    const recommended_title = document.querySelector('#recommended-title');
    hideAll();
    recommended_title.style.display="block";
    feedCompute("recommended");
    showFeed();
    history.pushState({page: 4}, "title4", "?page=recommended");
}

function feedCompute(how, parameter="") {
    console.log("feed reload for: " + how + ", " + parameter);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes("explore")) {
        updateColors();
        console.log("Explore page");
        document.querySelector('body').style.backgroundImage='none';
        document.querySelector('body').style.rowGap=0;
        const home_button = document.querySelector('#home-button');
        const latest_button = document.querySelector('#latest-button');
        const teams_button = document.querySelector('#teams-button');
        const leagues_button = document.querySelector('#leagues-button');
        const trending_button = document.querySelector('#trending-button');
        const recommended_button = document.querySelector('#recommended-button');
        const about_button = document.querySelector('#about-button');
        const leagues_links = document.querySelectorAll('.leagues-link');
        const theme_switch = document.querySelector('#switch-1');
        const fast_switch = document.querySelector('#switch-2');
        hideAll();
        pageInit();
        leagues_button.onmouseover = () => {
            fixDepths(-1);
        } 
        leagues_button.onmouseout = () => {
            fixDepths(0);
        }
        leagues_links.forEach( (link) => {
            link.onclick = () => {
                feedLeagueUpdate(link);
            }
        })
        home_button.onclick = () => {
            window.location.href="index.html";
        }
        teams_button.onclick = () => {
            showTeams();
            const teamLinks = document.querySelectorAll('.teams-link');
            console.log("teams: " + teamLinks);
            teamLinks.forEach( (link) => {
                link.onclick = () => {
                    feedTeamUpdate(link);    
                }
            } )
        }
        latest_button.onclick = () => {
            feedLatestUpdate();
        }
        trending_button.onclick = () => {
            feedTrendingUpdate();
        }
        about_button.onclick = () => {
            hideAll();
            aboutUsPageInit();
        }
        recommended_button.onclick = () => {
            feedRecommendedUpdate();
        }
        theme_switch.onchange = () => {
            updateColors();
        }
        fast_switch.onchange = () => {
            updateSpeed();
        }
    }
    else {
        console.log("Welcome page");
        const proceed = document.querySelector('#proceed');
        const about_us = document.querySelector('#about-us');
        proceed.onclick = () => {
            console.log("chose explore");
            window.location.href="explore.html"+"?explore";
        }
        about_us.onclick = () => {
            console.log("chose about-us");
            window.location.href="explore.html"+"?about-us";
        }   
    }

})