$(document).ready(function(){

var lessonsData = getLessons();

var role = "reviewer";

//logLessonsData(lessonsData);

listenForRoleToggle();

buildView();

function buildView(){
    $('#bob').show();
    buildLessons(lessonsData);
    buildNavigation(lessonsData);
    listenForLesson();
    showRole();
}

function showRole(){
    $('.role').text('');
    $('.role').text(role);
}

function toggleRole(){
    if (role == "reviewer"){
        role = "student";
        console.log("role is now student");
        buildView();
    }
    else{
        role = "reviewer";
        console.log("role is now reviewer");
        buildView();
    }
    
}

function viewController(lessonID){
    console.log("view Controller is firing!");
    $('#bob').hide();
    $('.lessonDisplay').not(document.getElementById( lessonID )).hide();
    $('#'+lessonID).show();
}

function buildLessonConroller(lessonsData){
    if (role === "reviewer"){
        buildLessonReviewer(lessonsData);
    }
    else if (role === "student"){
        buildLessonStudent(lessonsData);
    }
    else {alert('role not found');}
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
    $('.lessonLink').remove();

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

    $('.lessonDisplay').remove();

    var i = 0;
    while (i<lessonsData.length){
        buildLessonConroller(lessonsData[i]);
    i++;
    }
}

function buildLessonReviewer(lesson){

$('#mainContainer').append("<div class='lessonDisplay' id='"+lesson['ID']+"'><div class='row'><div class='col-md-12'><p><b>Version: </b> "+lesson['version_letter']+"</p><p><p><b>ID:</b> "+lesson['ID']+"</p><p><b>Date:</b> "+lesson['date']+"</p><p><b>Hook:</b> "+lesson['hook']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 01:</b> "+lesson['mainpoint01']+"</p><p>"+lesson['content01']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 02:</b> "+lesson['mainpoint02']+"</p><p>"+lesson['content02']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p><b>Main point 03:</b> "+lesson['mainpoint03']+"</p><p>"+lesson['content03']+"</p><hr /></div></div></div>");
$('#'+lesson['ID']).hide();
}

function buildLessonStudent(lesson){

$('#mainContainer').append("<div class='lessonDisplay' id='"+lesson['ID']+"'><div class='row'><div class='col-md-12'><p><b>ID: </b> "+lesson['ID']+"</p><p>"+lesson['hook']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p>"+lesson['mainpoint01']+"</p><p>"+lesson['content01']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p>"+lesson['mainpoint02']+"</p><p>"+lesson['content02']+"</p><hr /></div></div><div class='row'><div class='col-md-12'><p>"+lesson['mainpoint03']+"</p><p>"+lesson['content03']+"</p><hr /></div></div></div>");
$('#'+lesson['ID']).hide();
}

function listenForRoleToggle(){
  $("#roleButton").click(function(){
        console.log("role button clicked");
        toggleRole();
    }).preventDefault;
}

function listenForLesson(){

    $("#mainNavDropdown li").off("click", function(){
        viewController($(this).find("a").data('navid'));
    });

    $("#mainNavDropdown li").on("click", function(){
        viewController($(this).find("a").data('navid'));
    }).preventDefault;
}



});