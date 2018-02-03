

var term = localStorage.getItem("term");
var degree = localStorage.getItem("degree");
var dept = localStorage.getItem("dept");

courses(term, degree, dept);

function courses(term, degree, branch) {



    if (term == "Fall") {
        if (degree == "Masters") {
            if (branch == "Computers") {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
            }
            else {
                $("#mscs1").hide();
                $("#mscs2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
            }
        }
        else if (degree == "Bachelors") {
            if (branch == "Computers") {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#mscs1").hide();
                $("#mscs2").hide();
            }
            else {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#mscs1").hide();
                $("#mscs2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
            }
        }
    }

    if (term == "Spring") {
        if (degree == "Masters") {
            if (branch == "Computers") {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
                $("#mscs2").hide();
            }
            else {
                $("#mscs1").hide();
                $("#mscs2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
                $("#msla2").hide();
            }
        }
        else if (degree == "Bachelors") {
            if (branch == "Computers") {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#bala1").hide();
                $("#bala2").hide();
                $("#mscs1").hide();
                $("#mscs2").hide();
                $("#bacs2").hide();
            }
            else {
                $("#msla1").hide();
                $("#msla2").hide();
                $("#mscs1").hide();
                $("#mscs2").hide();
                $("#bacs1").hide();
                $("#bacs2").hide();
                $("#bala2").hide();
            }
        }
    }
}



/*$(document).ready(function () {
    $("#p1").click(function () {
        alert("hi");
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("id1", $('#p1').val("Enroll"));


        }
    });
});*/

