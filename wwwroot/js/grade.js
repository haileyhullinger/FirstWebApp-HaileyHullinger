//becasue we are using jquery, we use the $ in place of the document.getElementById method

//removed during the adding jquery process 
//var submit = document.getElementById("calcButton");
//submit.addEventListener("click", function () {

$("#calcButton").click(function () {
    //assignemnts are 50 percent of the grade
    var assignments = parseInt($("#assignments").val()) * .50;
    //group projects are 10 percent of the grade
    var group = parseInt($("#group").val()) * .10;
    //quizzes are 10 percent of the grade
    var quizzes = parseInt($("#quizzes").val()) * .10;
    //exams are 20 percent of the grade
    var exams = parseInt($("#exams").val()) * .20;
    //intex is 10 percent of the grade
    var intex = parseInt($("#intex").val()) * .10;

    var finalGrade = assignments + group + quizzes + exams + intex;
    var letterGrade = '';


    //if statment to determine letter grade based off final grade percentage
    if (finalGrade >= 94) {
        letterGrade = "A";
    }

    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }

    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //display the letter grade and percentage points
    alert("Your final grade is " + letterGrade + " with " + finalGrade + "%");


});