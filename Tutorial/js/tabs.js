//innertabs
function goToSkills() {
    var x = document.getElementById("myTabs").getElementsByTagName("li");
    x[1].classList.add("active");
    x[0].classList.remove("active");
    document.getElementById("skills").classList.add("active");
    document.getElementById("progress").classList.remove("active");
    document.getElementById("video_List").classList.remove("active");
}
function goToProgress() {
    var x = document.getElementById("myTabs").getElementsByTagName("li");
    x[1].classList.remove("active");
    x[0].classList.add("active");
    document.getElementById("skills").classList.remove("active");
    document.getElementById("progress").classList.add("active");
    document.getElementById("video_List").classList.remove("active");
}
function showVideos() {
    document.getElementById("progress").classList.remove("active");
    document.getElementById("skills").classList.remove("active");
    document.getElementById("video_List").classList.add("active");
}
//outer tabs
function showCalendar() {
    document.getElementById("home").style.display = "none";
    document.getElementById("calendarView").style.display = "block";
}
function hideCalendar() {
    document.getElementById("home").style.display = "block";
    document.getElementById("calendarView").style.display = "none";
}
function watchVideo(videoTitle) {
    document.getElementById("containerTabs").getElementsByTagName("a")[1].click();
    localStorage.setItem('title', videoTitle);
}