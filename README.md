Tutorial

Libraries: 
- fullcalendar-3.4.0
    - included as an iframe in tutorial
- graphs (amchart)
- jqcloud

Data:
- Video data
    - array containing objects of videos 
    - skill value must be separated with commas, leading or trailing spaces as well as case are insensitive
    - must set a "constraint" key with value of any string or else when created into calendar event it will be allowed to be dragged into           different date by user
    - "duration" key is required with a value to maintain the colour scale that shows duration (lightest being shortest time spent, and darkest     being longest time spent)
    - "start" refers to the date the video was watched, value must be in format "yyyy-mm-dd"
    - "note" is optional
- Color data
    - array containing colour code for entire tutorial

setSkillArray() - sets skillArray[] with unique skill titles and the number of timems it shows up, 
                    sorts the array, and provides a color code to the skill
                - allows skillArray to be used by graphs 

graphs.js
    - pastWeek: from last sunday to recently passed saturday, used as data for weekly progress bar graph
            - object array, each object containing a key "day" and "videos"
    - pastMonths: includes last 6 months including the current month

    - skillList: array of objects containing skill names that will be recognized as data that appears in pastMonths
    - skill2: array of objects containing skill names that will be recognized as data that appears in pastWeek

skillList.js
    - creates list of skills using skillArray[] from videoData.js
    - displayVideos() is when a skill is clicked on, displaying all videos that contain the skill clicked on

tabs.js
    - contains methods that hides and shows tab content

wordCloud.js
    - word_list[] : array containing all unique skills as objects, data for jQCloud:
        - {text: "skillname", weight: number, color: "someColor"};
        - "weight" determines the size of the word (size value can be changed in jqcloud.css)
        - "color" value is not finalized here so any string value can be written here
            - color value is set by a for loop and applied with setTimeout()

    - growTree() : function changes the tree img from a sprout to a full grown tree if there are more than 4 skills

tutorial.css
    - contains all css for tutorial
