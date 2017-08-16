var word_list, exists, index, string, temp, totalVideos;
totalVideos = videoData.length;
word_list = [];

function setWordArray() {
  for (var k = 0; k < skillArray.length; k++) {
    temp = { text: skillArray[k].skill, weight: skillArray[k].number, color: "green" };
    word_list.push(temp);
  }
  //sort list by weight
  word_list.sort(function (a, b) {
    return b.weight - a.weight;
  })
  //set colour of words
  for (var k = 0; k < word_list.length; k++) {
    word_list[k].color = colorData[k];
  }
}

$(function () {
  setWordArray();
  growTree();
  $("#wordList").jQCloud(word_list);
  setTimeout(function () {
    var obj = $("#demo").data("jqcloud");
    var data = obj.word_list;
    for (var i in data) {
      $("#" + data[i]["attr"]["id"]).css("color", data[i]["color"]);
    }
  }, 100);
});

function growTree() {
  if (word_list.length >= 5) {
    document.getElementById("rootTree").src = "images/treeTrunk.png";
    document.getElementById("rootTree").classList.add("tree");
    document.getElementById("wordList").style.bottom = "180px";
  }
  else {
    document.getElementById("rootTree").src = "images/sprout.png";
    document.getElementById("rootTree").classList.add("sprout");
    document.getElementById("wordList").style.bottom = "85px";
  }
}
