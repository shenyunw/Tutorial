var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var pastWeek = [{ "day": "Sun", "videos": 0, "duration": 0 }, { "day": "Mon", "videos": 0, "duration": 0 }, { "day": "Tue", "videos": 0, "duration": 0 }, { "day": "Wed", "videos": 0, "duration": 0 },
{ "day": "Thu", "videos": 0, "duration": 0 }, { "day": "Fri", "videos": 0, "duration": 0 }, { "day": "Sat", "videos": 0, "duration": 0 }];
var totalVideos = "Total Videos:\n" + (videoData.length).toString();
var pastMonths = [];
var today = new Date();
var nowSunday = new Date();
var lastSunday = new Date();
var sixMonthStart = new Date();
var thisMonth = new Date();
var temp, tempDate, index, lastWeek, yearRange, skillList;
skillList = [];

//set boundry to end of current month
thisMonth.setDate(1);
thisMonth.setMonth(thisMonth.getMonth() + 1);
//set boundry of 6 months
sixMonthStart.setMonth((thisMonth.getMonth()) - 6);
function monthIndex(x) {
    var index = 0;
    for (var i = 0; i < pastMonths.length; i++) {
        if ((pastMonths[i].month) == monthNames[x]) {
            index = i;
        }
    }
    return index;
}
//get date of last week
if (nowSunday.getDay() != 0) {
    while (nowSunday.getDay() != 0) {
        nowSunday.setDate(nowSunday.getDate() - 1);
    }
    lastSunday.setDate(nowSunday.getDate() - 7);
    if (lastSunday.getDay() != 0) {
        lastSunday.setMonth(lastSunday.getMonth() - 1);
    }
}

//week and year range title
lastWeek = monthNames[lastSunday.getMonth()] + " " + lastSunday.getDate() + " - " + monthNames[nowSunday.getMonth()] + " " + (nowSunday.getDate() - 1);
if (sixMonthStart.getFullYear() == thisMonth.getFullYear()) {
    yearRange = (thisMonth.getFullYear()).toString();
}
else {
    yearRange = sixMonthStart.getFullYear() + " - " + thisMonth.getFullYear();
}

//fill months array
var d = new Date(sixMonthStart.getTime());
for (var i = 0; i < 6; i++) {
    temp = { month: monthNames[d.getMonth()] };
    pastMonths.push(temp);
    d.setMonth(d.getMonth() + 1);
}

//fill array data
var skillString = "";
for (var i = 0; i < videoData.length; i++) {
    tempDate = new Date((videoData[i].start).replace(/-/g, '\/'));
    index = monthIndex(tempDate.getMonth());
    skillString = (videoData[i].skill).toLowerCase();
    skillString = skillString.split(",")
    if (tempDate.getTime() >= sixMonthStart.getTime() && tempDate.getTime() <= thisMonth.getTime()) {
        pastMonths[index].duration += videoData[i].duration;
        for (var k = 0; k < skillString.length; k++) {

            if (skillString[k].toString() in pastMonths[index]) {

                pastMonths[index][skillString[k]] = pastMonths[index][skillString[k]] + 1;
            }
            else {
                pastMonths[index][skillString[k]] = 1;
            }
        }
        //fill pastWeek array if date within last week
        if ((tempDate.getTime() >= lastSunday.getTime() && tempDate.getTime() <= nowSunday.getTime()) ||
            (tempDate.toDateString() === lastSunday.toDateString())) {
            for (var j = 0; j < skillString.length; j++) {
                if (skillString[j].toString() in pastWeek[tempDate.getDay()]) {
                    pastWeek[tempDate.getDay()][skillString[j]] = pastWeek[tempDate.getDay()][skillString[j]] + 1;
                }
                else {
                    pastWeek[tempDate.getDay()][skillString[j]] = 1;
                }
            }
        }
    }
}

//fill skillList array
for (var i = 0; i < skillArray.length; i++) {
    temp = {
        balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>", fillAlphas: 1, labelText: "[[value]]", title: skillArray[i].skill,
        type: "column", color: "#000000", lineAlpha: 0.8, lineColor: colorData[i], valueField: (skillArray[i].skill).toLowerCase()
    };
    skillList.push(temp);
}

var chart4 = AmCharts.makeChart("monthlyData", {
    "type": "serial",
    "theme": "light",
    "autoMargins": true,
    "allLabels": [{
        "text": "Last 6 Months",
        "align": "left",
        "bold": true,
        "size": 14,
        "y": 0,
        "x": 18,
    },
    {
        "text": yearRange,
        "align": "left",
        "size": 12,
        "y": 17,
        "x": 20,
    }],
    "dataProvider": pastMonths,
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "gridThickness": 0,
        "labelsEnabled": false
    }],
    "graphs": skillList,
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0.1,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
        "enabled": true
    }
});

var skill2 = [];
for (var i = 0; i < skillArray.length; i++) {
    temp = {
        balloonText: "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        fillAlphas: 0.8, labelText: "[[value]]", title: skillArray[i].skill,
        type: "column", color: "#000000", lineAlpha: 0.3, lineColor: colorData[i], valueField: (skillArray[i].skill).toLowerCase()
    };
    skill2.push(temp);
}

var chart5 = AmCharts.makeChart("weeklyData", {
    "type": "serial",
    "theme": "light",
    "allLabels": [{
        "text": "Last Week",
        "align": "left",
        "bold": true,
        "size": 14,
        "y": 0,
        "x": 18,
    },
    {
        "text": lastWeek,
        "align": "left",
        "size": 12,
        "y": 17,
        "x": 20,
    }],
    "dataProvider": pastWeek,
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": false
    }],
    "graphs": skill2,
    "categoryField": "day",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0.1,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
        "enabled": true
    }
});

//donutgraph
var chart = AmCharts.makeChart("weekly_progress", {
    "type": "pie",
    "theme": "light",
    "allLabels": [{
        "text": totalVideos,
        "align": "center",
        "bold": true,
        "size": 14,
        "y": 120,
    }],
    "dataProvider": skillArray,
    "titleField": "skill",
    "valueField": "number",
    "labelRadius": 5,

    "radius": "37%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "colorField": "color",
    "export": {
        "enabled": true
    }
});
