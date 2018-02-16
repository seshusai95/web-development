$(document).ready(function () {
    $("#button1").click(function () {
        alert("hi");
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("name", $('#name').val());
            localStorage.setItem("email", $('#id').val());
            localStorage.setItem("stid", $('#sid').val());
            localStorage.setItem("term", $('#term').val());
            localStorage.setItem("degree", $('#degree').val());
            localStorage.setItem("dept", $('#dept').val());

        }
    });

});
//setting values into local storage
var course_1 = { 'id': 1001, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_1", JSON.stringify(course_1));

var course_2 = { 'id': 1002, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_2", JSON.stringify(course_2));

var course_3 = { 'id': 1003, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_3", JSON.stringify(course_3));

var course_4 = { 'id': 1004, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_4", JSON.stringify(course_4));

var course_5 = { 'id': 1005, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_5", JSON.stringify(course_5));

var course_6 = { 'id': 1006, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_6", JSON.stringify(course_6));

var course_7 = { 'id': 1007, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_7", JSON.stringify(course_7));

var course_8 = { 'id': 1008, 'total': 60, 'remaining': 60 };
localStorage.setItem("course_8", JSON.stringify(course_8));