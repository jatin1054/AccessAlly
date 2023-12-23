function loginpage() {
    document.getElementById("middlepart").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.querySelector(".portfolios").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("background").style.display = "none";
}
function logindone() {
    document.getElementById("middlepart").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.querySelector(".portfolios").style.display = "grid";
    document.getElementById("background").style.display = "none";
}

function InsidehomePage()
{
    document.getElementById("middlepart").style.display = "none";
    document.querySelector(".portfolios").style.display = "grid";
    document.getElementById("background").style.display = "none";
}
function homePage()
{
    document.getElementById("middlepart").style.display = "flex";
    document.getElementById("main").style.display = "none";
    document.querySelector(".portfolios").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("background").style.display = "none";
}
function contactUs()
{
    document.getElementById("middlepart").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.querySelector(".portfolios").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("background").style.display = "flex";
}

function topicDetails()
{
    document.getElementById("middlepart").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.querySelector(".portfolios").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("background").style.display = "none";
}