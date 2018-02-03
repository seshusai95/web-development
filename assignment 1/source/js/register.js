/*var id1 = localStorage.getItem("id1");
if (id1 == "Enroll") {
    alert("hiii");
    $("#mscs1").hide();
}*/


var url = window.location.href.split('?');
var id = url[url.length - 1];
var arr0;
var arr1;

//writing conditions to select the subject and show seats data
//code for c1
if (id == "1001") {
    $('#temp').text("Cloud Computing");
    arr0 = JSON.parse(localStorage.getItem("course_1"));
    arr1 = "course_1";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);
    
   
}

//Decrement remaining seats on enroll button click

    $('#Enroll').click(function () {
        if (arr0.remaining == 0) {
            alert("No seats remaining to enroll");
        }
        else {
            arr0.remaining = arr0.remaining - 1;

            localStorage.setItem(arr1, JSON.stringify(arr0));
            
        }
    });











//code for c2
if (id == "1002") {
    $('#temp').text("Architecture of Database Management Systems");
    arr0 = JSON.parse(localStorage.getItem("course_2"));
    arr1 = "course_2";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}

//code for c3
if (id == "1003") {
    $('#temp').text("Computer Fundamentals and Applications");
    arr0 = JSON.parse(localStorage.getItem("course_3"));
    arr1 = "course_3";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}

//code for c4
if (id == "1004") {
    $('#temp').text("Problem Solving and Programming I ");
    arr0 = JSON.parse(localStorage.getItem("course_4"));
    arr1 = "course_4";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}


//code for c5
if (id == "1005") {
    $('#temp').text("Contracts I");
    arr0 = JSON.parse(localStorage.getItem("course_5"));
    arr1 = "course_5";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}


//code for c6
if (id == "1006") {
    $('#temp').text("Torts");
    arr0 = JSON.parse(localStorage.getItem("course_6"));
    arr1 = "course_6";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}

//code for c7
if (id == "1007") {
    $('#temp').text("Civil Procedure I");
    arr0 = JSON.parse(localStorage.getItem("course_7"));
    arr1 = "course_7";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}



//code for c8
if (id == "1008") {
    $('#temp').text("American Legal Research");
    arr0 = JSON.parse(localStorage.getItem("course_8"));
    arr1 = "course_8";
    $('#Total_seats').text("Total seats available for this course:" + " " + arr0.total);
    $('#Seats_available').text("Total seats available for this course:" + " " + arr0.remaining);



}







