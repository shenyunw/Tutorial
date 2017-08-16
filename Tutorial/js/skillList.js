var listItem, li, itemIndex, videoItem, li_videos;
totalVideos = "Total Videos:\n" + (videoData.length).toString();
itemIndex = 0;

function createListItem(num, name) {
    listItem = '<div class="listViewSkill" ><a class="circle_label" id=' + '"item' + itemIndex.toString() +
        '" onclick="displayVideos(\'' + name + '\')">' + num + '</a><a class="skill_title" onclick="displayVideos(\'' + name + '\')">' + name + '</a></div>';
    li = document.createElement("li");
    document.getElementById("skill_list").appendChild(li);
    li.innerHTML = listItem;
    itemIndex++;
}
function displayList() {
    var label;
    for (var a = 0; a < skillArray.length; a++) {
        createListItem(skillArray[a].number, skillArray[a].skill);
    }
    //set colour for circle
    for (var x = 0; x < skillArray.length; x++) {
        var labelColor = colorData[x];
        label = document.getElementById("item" + x.toString());
        label.style.background = labelColor;
    }
}

function displayVideos(name) {
    var line, num;
    videoItem = "";
    num = 1;
    name = String(name);
    document.getElementById("progress").classList.remove("active");
    document.getElementById("video_List").innerHTML = "";
    document.getElementById("video_List").appendChild(document.createElement("h1")).innerHTML = name;
    name = name.toLowerCase();
    for (var a = 0; a < videoData.length; a++) {
        line = (videoData[a].skill).split(",");
        for (var b = 0; b < line.length; b++) {
            if (name == line[b].toLowerCase()) {
                //parse link and create li item
                videoItem = '<div class = "video"><h2>' + num + '. ' + videoData[a].title + '</h2><img src="' + getThumbnail(videoData[a].link) +
                    '"><button class="watchHere" onclick="watchVideo(\'' + videoData[a].title + '\')">Watch Tutorial</button></div>';
                num++;
                li_videos = document.createElement("li");
                document.getElementById("video_List").appendChild(li_videos);
                li_videos.innerHTML = videoItem;
                break;
            }
        }
    }
}

function getThumbnail(url) {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    var urllink, imagelink;
    if (match && match[1].length == 11) {
        urllink = match[1];
        imagelink = "http:\/\/img.youtube.com\/vi\/" + urllink + "\/0.jpg";
    }
    return imagelink;
}