/* global variables */
var matchesNumber = 0;
var allMatches = [];
var allTeams = [];
var allLeagues=[];

/*...colors functions...*/
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
    let color = "";
    if (mode=="dark") {
        color="lightgrey";
        
    }
    else {
        color="#6FB98F";
    }
    document.querySelectorAll('.leagues-link').forEach( (el) => {
        el.style.borderBottom = "solid 1px "+color;
    })
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
/*.....................*/

/*...speed transition functions...*/
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
/*....................*/

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
/*....................*/

/*
function findTeam(team) {
    console.log("looking for team: "+team);
    let index = -1;
    for (i=0; i<allTeams.length; i++) {
        if (allTeams[i][0]==team) {
            console.log("thn brhka");
            index = i;
            break;
        }
    }
    return index;
}

function findLeague(league) {
    console.log("looking for league: "+league);
    let index=-1;
    for (i=0; i<allLeagues.length; i++) {
        if (allLeagues[i][0]==league) {
            console.log("thn brhka");
            index = i;
            break;
        }
    }
    return index;
}

function addTeam(team, matchIndex) {
    console.log("adding: team="+team+", match="+matchIndex);
    let index = findTeam(team);
    if (index!=-1) {    // if team already in list
        allTeams[index].push(matchIndex);   // add this match to the team
    }
    else {
        allTeams.push([team, matchIndex]); // add team and match
    }
}

function addLeague(league, matchIndex) {
    console.log("adding: league="+league+", match="+matchIndex);
    let index = findLeague(league);
    if (index!=-1) {
        allLeagues[index].push(matchIndex);
    }
    else {
        allLeagues.push([league, matchIndex]);
    }
}

function getAllTeamsLeagues() {
    for (i=0; i<matchesNumber; i++) {
        addTeam(allMatches[i].side1.name, i);
        addTeam(allMatches[i].side2.name, i);
        addLeague(allMatches[i].competition.name, i);
    }
      
    console.log(allTeams);
    console.log(allLeagues);
}

*/


function addLeague(league) {
    //console.log("adding: league="+league);
    if (!allLeagues.includes(league)) {
        allLeagues.push(league);
    }
}

function addTeam(team) {
    //console.log("adding: team="+team);
    if (!allTeams.includes(team)) {
        allTeams.push(team);
    }
}

function getAllTeamsLeagues() {
    for (i=0; i<allMatches.length; i++) {
        addTeam(allMatches[i].side1.name);
        addTeam(allMatches[i].side2.name);
        addLeague(allMatches[i].competition.name);
    }
    console.log(allTeams);
    console.log(allLeagues);
}

function insertDOMTeams() {
    let element = document.getElementById("teams-ul");
    for (i=0; i<allTeams.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("class", "teams-link");
        a.setAttribute("href", "#");
        let text = document.createTextNode(allTeams[i]);
        a.appendChild(text);
        li.appendChild(a);
        element.appendChild(li);
    }
}

function insertDOMLeagues() {
    const list = document.getElementById("leagues-content");
    allLeagues.forEach( (league) => {
        let a = document.createElement("a");
        let text = document.createTextNode(league);
        a.appendChild(text);
        a.setAttribute("class", "leagues-link");
        a.setAttribute("href", "#");
        list.appendChild(a);
    })
}

function insertDOMTeamsLeagues() {
    insertDOMTeams();
    insertDOMLeagues();
    updateColors();
    const leagues_links = document.querySelectorAll('.leagues-link');
    // re-establish the event listener for leagues links clicking
    leagues_links.forEach( (link) => {
        link.onclick = () => {
            feedLeagueUpdate(link);
        }
    })
}

/* keep matches with only one highlight video*/
function testMatch(i) {
    let videos2 = allMatches[i].videos;

    let found=false;
    for (j=0; j<videos2.length; j++) {
        if (allMatches[i].videos.length==0) {
            console.log("no videos at "+ i);
            continue;
        }
        let video = videos2[j];
        if (video.title=="Highlights") {
            //console.log("highlight at "+ j+" on match "+ i);
            if (found) {
                videos2.splice(j, 1);
            }
            else {
                found=true; 
                continue;   
            }
        }
        else {
            videos2.splice(j, 1);
            j--;
        }
    }
    if (found==false) {
        //console.log("@@@ no highlights at match "+ i);
    }

    if (videos2.length==0) {
        allMatches.splice(i, 1);
        //console.log("--nothing on match "+ i + " " + allMatches[i].title);
        return;
    }

    delete allMatches[i].embed;
    delete allMatches[i].url;
    delete allMatches[i].thumbnail;
    delete allMatches[i].side1.url;
    delete allMatches[i].side2.url;
    delete allMatches[i].competition.id;
    delete allMatches[i].competition.url;

}

function keepImportandData() {
    for (i=0; i<matchesNumber; i++) {
        if (allMatches[i]==null) {
            console.log("null at "+i);
            continue;
        }
        testMatch(i);
    }
    allMatches.forEach( (match) => {
        if (match.videos.length>1) {
            allMatches.splice(allMatches.indexOf(match), 1);
        }
    })
}

function getAllData() {
    setTimeout(function() {}, 1000);    // wait for them to load
    fetch('https://www.scorebat.com/video-api/v1/')
    .then(response => response.json())
    .then(data => {
        console.log("before:");
        console.log(data);
        allMatches = data;
        matchesNumber = allMatches.length;
        keepImportandData();
        console.log("after:");
        console.log(allMatches);
        getAllTeamsLeagues();
        allTeams.sort();
        allLeagues.sort();
        insertDOMTeamsLeagues();
    })
}

function showFeed() {
    const feeds = document.querySelectorAll('.feed');
    const feed = feeds[0];
    feed.style.display="none";
    setTimeout(function() {}, 2000);
    feed.classList.remove("feed-animation");
    feed.classList.add("feed-animation");
    feed.style.display="table";
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
    const body = document.querySelector('body');
    body.style.backgroundImage='none';
    body.style.rowGap=0;
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
    feedCompute("leagues", link.innerHTML);
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

function clearFeed() {
    console.log("empty previous feed data");
    const feed = document.querySelector(".feed");
    while (feed.firstChild) {
        feed.removeChild(feed.lastChild);
    }
}

function matchInfo(match) {
    let info = document.createElement("div");
    info.classList.add("info");
    let match_name = document.createElement("div");
    match_name.classList.add("match-name");
    match_name.innerHTML = match.title;
    let score = document.createElement("div");
    score.classList.add("score");
    score.innerHTML = "Score: Unknown";
    let league = document.createElement("div");
    league.classList.add("league");
    league.innerHTML = match.competition.name;
    let date = document.createElement("div");
    date.classList.add("date");
    date.innerHTML = match.date.replace('T', ' ').slice(0, -5) ;
    info.appendChild(match_name);
    info.appendChild(score);
    info.appendChild(league);
    info.appendChild(date);
    return info;
}

function matchVideo(match) {
    let container = document.createElement("div");
    container.classList.add("video-container");
    let iframe = document.createElement("iframe");
    let str1 = match.videos[0].embed;
    let start = str1.indexOf("iframe src='")+12;
    let str2 = str1.slice(start, -1);
    let end = str2.indexOf("'");
    let url = str2.slice(0, end);
    iframe.setAttribute("src", url);
    //iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay;fullscreen");
    iframe.classList.add("iframe");
    container.appendChild(iframe);
    return container;
}

function addToFeed(match) {
    console.log("add to feed:");
    console.log(`${match}`);
    const feed = document.querySelector(".feed");
    var row = feed.insertRow(-1);
    var item = row.insertCell(0);
    item.classList.add("feed-item");
    item.appendChild(matchInfo(match));
    item.appendChild(matchVideo(match));
}

function feedCompute(how, param="") {
    clearFeed();
    console.log("feed reload for: " + how + ", " + param);
    if (how=="teams") {
        allMatches.forEach( (match) => {
            if (match.side1.name==param || match.side2.name==param) {
                addToFeed(match);
            }
        })
    }
    else if (how=="leagues") {
        allMatches.forEach( (match) => {
            if (match.competition.name==param) {
                //console.log("match of this league");
                addToFeed(match);
            }
            else {
                //console.log("not match of this league");
            }
        })
    }
}

function homeButtonListener() {
    const home_button = document.querySelector('#home-button');
    home_button.onclick = () => {
        window.location.href="index.html";
    }
}

function leaguesButtonsListeners() {
    const leagues_button = document.querySelector('#leagues-button');
    const leagues_links = document.querySelectorAll('.leagues-link');
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

}

function teamsButtonsListeners() {
    const teams_button = document.querySelector('#teams-button');
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
}

function latestButtonListener() {
    const latest_button = document.querySelector('#latest-button');
    latest_button.onclick = () => {
        feedLatestUpdate();
    }
}

function trendingButtonListener() {
    const trending_button = document.querySelector('#trending-button');
    trending_button.onclick = () => {
        feedTrendingUpdate();
    }
}

function aboutButtonListener() {
    const about_button = document.querySelector('#about-button');
    about_button.onclick = () => {
        hideAll();
        aboutUsPageInit();
    }
}

function recommendedButtonListener() {
    const recommended_button = document.querySelector('#recommended-button');
    recommended_button.onclick = () => {
        feedRecommendedUpdate();
    }
}

function themeSwitchListener() {
    const theme_switch = document.querySelector('#switch-1');
    theme_switch.onchange = () => {
        updateColors();
    }
}

function speedSwitchListener() {
    const fast_switch = document.querySelector('#switch-2');
    fast_switch.onchange = () => {
        updateSpeed();
    }
}

function explorePageListeners() {
    leaguesButtonsListeners();
    homeButtonListener();
    teamsButtonsListeners();
    latestButtonListener();
    trendingButtonListener();
    aboutButtonListener();
    recommendedButtonListener();
    themeSwitchListener();
    speedSwitchListener();
}

function proceedButtonListener() {
    const proceed = document.querySelector('#proceed');
    proceed.onclick = () => {
        console.log("chose explore");
        window.location.href="explore.html"+"?explore";
    }
}

function aboutUsButtonListener() {
    const about_us = document.querySelector('#about-us');
    about_us.onclick = () => {
        console.log("chose about-us");
        window.location.href="explore.html"+"?about-us";
    } 
}

function welcomePageListeners() {
    proceedButtonListener();
    aboutUsButtonListener(); 
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes("explore")) {
        console.log("Explore page");
        updateColors();
        hideAll();
        pageInit();
        getAllData();
        explorePageListeners();
    }
    else {
        console.log("Welcome page");
        welcomePageListeners();
    }

})