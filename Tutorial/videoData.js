var videoData = [{
	title: "3D Pop Out Effect",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=4V8BhXU0bow",
	start: "2017-08-02",
	constraint: 'watchedHere',
	notes: "use the clone tool instead of brush tool at 10:34",
	duration: "10min"
},
{
	title: "Angular2 for beginners in easy and funny way",
	skill: "Angular",
	link: "https://www.youtube.com/watch?v=rOr1r1rSZQ8",
	start: "2017-07-3",
	constraint: 'watchedHere',
	notes: "start at 5:02 for commandline functions",
	duration: "20min"
},
{
	title: "Dispersion Effect",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=4xgOWWfurpU",
	start: "2017-07-29",
	constraint: 'watchedHere',
	notes: "can use for special project.",
	duration: "30min"
},
{
	title: "Github Tutorial For Beginners - Github Basics for Mac or Windows & Source Control Basics",
	skill: "github,source control",
	link: "https://www.youtube.com/watch?v=0fKg7e37bQE",
	start: "2017-07-24",
	constraint: 'watchedHere',
	notes: "",
	duration: "20min"
},
{
	title: "Web Development Tutorial for Beginners (#1) - How to build webpages with HTML, CSS, Javascript",
	skill: "Javascript,HTML, CSS",
	link: "https://www.youtube.com/watch?v=3JluqTojuME",
	start: "2017-06-25",
	constraint: "watchedHere",
	notes: "css position functions: margin, padding, top, bottom, left right. Margin-left/margin-right (same with padding)." +
	"<br> center text: text-alignment:center <br>\'#\' for id css, \'.\' for class css",
	duration: "40min"
},
{
	title: "Javascript Video Tutorial Pt 1",
	skill: "Javascript",
	link: "https://www.youtube.com/watch?v=_cLvpJY2deo&t=1s",
	start: "2017-07-1",
	constraint: 'watchedHere',
	notes: "",
	duration: "50min"
},
{
	title: "Big Bear - Photoshop Manipulation Tutorial",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=b16_WCHFZXs",
	start: "2017-07-08",
	constraint: 'watchedHere',
	notes: "use for project x",
	duration: "80min"
},
{
	title: "Rosie Hardy Inspired Editing Tutorial in Photoshop",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=1p7guQxrOqo",
	start: "2017-06-05",
	constraint: 'watchedHere',
	notes: "use for x part of project x",
	duration: "70min"
},
{
	title: "Photoshop Secrets 17: 5 Ways To Color Correct Beautifully (Remove Any Cast)",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=9BfDEkXhXwg",
	start: "2017-06-05",
	constraint: 'watchedHere',
	notes: "",
	duration: "10min"
},
{
	title: "Photoshop Tutorial | Photo Manipulation | Water Splash in Bulb",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=XnzGFtUevts",
	start: "2017-07-05",
	constraint: 'watchedHere',
	notes: "",
	duration: "15min"

},
{
	title: "Water Dispersion Effect Photoshop Tutorial",
	skill: "Photoshop",
	link: "https://www.youtube.com/watch?v=rwoQIqn4kgY",
	start: "2017-08-06",
	constraint: 'watchedHere',
	notes: "",
	duration: "35min"
},
{
	title: "Change Style Sheet Using Javascript Tutorial CSS Swap Stylesheet",
	skill: "Javascript,CSS",
	link: "https://www.youtube.com/watch?v=_XAQH41rjio",
	start: "2017-08-10",
	constraint: 'watchedHere',
	notes: "",
	duration: "40min"
}];

var colorData = ["#765371", "#995272", "#E06C75", "#B3D43D", "#A18DA3", "#D9DF99", "#E69DA5", "#E6EDD1", "#ECE1E7", "#CCA4BC", "#DECEDE", "#82AC33", "#669900", "#96BA59"]

var skillArray = [];
var temp, check, index;
function skillExists(skillX) {
	check = false;
	index = 0;
	for (i = 0; i < skillArray.length; i++) {
		if ((skillArray[i].skill).toUpperCase() == skillX.toUpperCase()) {
			check = true;
			index = i;
		}
	}
	return check;
}

function setSkillArray() {
	//fill skillArray with unique skills found in videoData and complimentary number of times it shows up
	for (k = 0; k < videoData.length; k++) {
		var string = (videoData[k].skill).split(",");
		var word;
		for (var b = 0; b < string.length; b++) {
			word = string[b].trim();
			if (!skillExists(word)) {
				temp = { skill: (word.charAt(0).toUpperCase()) + word.slice(1), number: 1, color: "black" };
				skillArray.push(temp);
			}
			else {
				skillArray[index].number = skillArray[index].number + 1;
			}
		}
	}
	//sort array by count per skill
	skillArray.sort(function (a, b) {
		return b.number - a.number;
	})
	//set colour of chart
	for (var x = 0; x < skillArray.length; x++) {
		skillArray[x].color = colorData[x];
	}
}
function getColor(skillName) {
	var color = "black";
	for (var i = 0; i < skillArray.length; i++) {
		if (skillName.toLowerCase() === (skillArray[i].skill).toLowerCase()) {
			color = skillArray[i].color;
			return color;
		}
	}
}
setSkillArray();