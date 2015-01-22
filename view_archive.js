$(document).ready(function(){

var lessonsData = getLessons();

//logLessonsData(lessonsData);
buildLessons(lessonsData);
buildNavigation(lessonsData);

listenForLesson();

function viewController(lessonID){

    $('.lessonDisplay').not(document.getElementById( lessonID )).hide();
    $('#'+lessonID).show();
}

function getLessons(){
        var lesson = [];

        lessonsObject = $.ajax({ //MIKE ROCKS
            url: "view.php",
            async: false,
            dataType: JSON,            //data: "name=" + user,
            type: "GET",
            success: function(){
                console.log('success');
                },
            error: function(){
                console.log("error");
            }
        });
        return JSON.parse(lessonsObject.responseText);

    }

function logLessonsData(lessonDataForLogging){
    var i = 0;
    while (i<lessonDataForLogging.length){
    console.log(lessonDataForLogging[i]['ID']);
    i++;
    }
}

function buildNavigation(lessonsData){
    var i = 0;
    while (i<lessonsData.length){
        addLink(lessonsData[i]['ID']);
    i++;
    }
}


function addLink(lessonID){
    $('#mainNavDropdown').append("<li><a class='lessonLink' data-navid='"+lessonID+"'>Lesson: "+lessonID+"</a></li>");
}

function buildLessons(lessonsData){
    var i = 0;
    while (i<lessonsData.length){
        buildLesson(lessonsData[i]);
    i++;
    }
}

function buildLesson(lesson){
$('#mainContainer').append("<div class='lessonDisplay' id='"+lesson['ID']+"'><div class='row'><div class='col-md-12'><p><b>ID:</b> "+lesson['ID']+"</p><p><b>Date:</b> "+lesson['date']+"</p><p><b>Hook:</b> "+lesson['hook']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 01:</b> "+lesson['mainpoint01']+"</p><p>"+lesson['content01']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 02:</b> "+lesson['mainpoint02']+"</p><p>"+lesson['content02']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 03:</b> "+lesson['mainpoint03']+"</p><p>"+lesson['content03']+"</p><hr /></div></div></div>");
$('#'+lesson['ID']).hide();
}


function listenForLesson(){
    $("#mainNavDropdown li").on("click", function(){
        viewController($(this).find("a").data('navid'));
    }).preventDefault;
}



});