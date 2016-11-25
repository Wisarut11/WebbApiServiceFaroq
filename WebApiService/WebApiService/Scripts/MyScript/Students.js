function GetAllstudent() {
    jQuery.support.cors = true;
    $.ajax({
        url: '/api/StudentsAPI/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function Addstudent() {
    jQuery.support.cors = true;
    var student = {
        ID: $('#txtaddStudentid').val(),
        StudentName: $('#txtaddStudentName').val(),
        StudentRollNo: $('#txtaddStudentRollNo').val(),
        StudentDepartment: $('#txtaddStudentDepartement').val()
    };

    $.ajax({
        url: '/api/StudentsAPI/',
        type: 'POST',
        data: JSON.stringify(student),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function Uppdatestudent() {
    jQuery.support.cors = true;
    var student = {
        ID: $('#txtaddStudentid').val(),
        StudentName: $('#txtaddStudentName').val(),
        StudentRollNo: $('#txtaddStudentRollNo').val(),
        StudentDepartment: $('#txtaddStudentDepartement').val()
    };

    $.ajax({
        url: '/api/StudentsAPI/' + student.ID,
        type: 'PUT',
        data: JSON.stringify(student),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function Deletestudent() {
    jQuery.support.cors = true;
    var id = $('#txtdelStudentId').val()

    $.ajax({
        url: '/api/StudentsAPI/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function WriteResponse(student) {
    var strResult = "<table><th>StudentID</th><th>Student Name</th><th>Student RollNo</th><th>Student Department</th>";
    $.each(student, function (index, student) {
        strResult += "<tr><td>" + student.Id + "</td><td> " + student.StudentName + "</td><td>" + student.StudentRollNo + "</td><td>" + student.StudentDepartment + "</td></tr>";
    });
    strResult += "</table>";
    $("#divResult").html(strResult);
}

function Showstudent(student) {
    if (student != null) {
        var strResult = "<table><th>StudentID</th><th>Student Name</th><th>Student RollNo</th><th>Student Department</th>";
        strResult += "<tr><td>" + student.Id + "</td><td> " + student.StudentName + "</td><td>" + student.StudentRollNo + "</td><td>" + student.StudentDepartment + "</td></tr>";
        strResult += "</table>";
        $("#divResult").html(strResult);

        $('#txtaddStudentid').val(student.Id);
        $('#txtaddStudentName').val(student.StudentName);
        $('#txtaddStudentRollNo').val(student.StudentRollNo);
        $('#txtaddStudentDepartement').val(student.StudentDepartment);
    }
    else {
        $("#divResult").html("No Results To Display");
    }
}

function Getstudent() {
    jQuery.support.cors = true;
    var id = $('#txtStudentid').val();
    $.ajax({
        url: '/api/StudentsAPI/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            Showstudent(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}