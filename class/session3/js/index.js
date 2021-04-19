function send() {
    var fullname = document.getElementById("fullname").value;
    var sodauky = document.getElementById("sodauky").value;
    var socuoiky = document.getElementById('socuoiky').value;
    var birthday = document.getElementById("birthday").value;
    if (fullname == "") {
        document.getElementById("errorname").innerHTML = "Vui lòng nhập họ tên!!!";
    } else {
        document.getElementById("errorname").innerHTML = "";
    }
    if (sodauky == "") {
        document.getElementById("Beginning").innerHTML = "Vui lòng nhập vào!!!";
    } else {
        document.getElementById("Beginning").innerHTML = "";
    }
    if (socuoiky == "") {
        document.getElementById('endOfTerm').innerHTML = "Vui lòng nhập vào!!!";
    } else {
        document.getElementById('endOfTerm').innerHTML = "";
    }
    if (birthday == "") {
        document.getElementById("dateOfBirth").innerHTML = "Vui lòng nhập vào ngày tháng năm sinh!!!";
    } else {
        document.getElementById("dateOfBirth").innerHTML = "";
    }
}

function checkNumberAndDate() {
    var sodauky = document.getElementById('sodauky').value;
    var socuoiky = document.getElementById('socuoiky').value;
    if (parseFloat(sodauky) > parseFloat(socuoiky)) {
        alert('số đầu kỳ ko được lớn hơn ngày cuối kỳ');
    }
    var ngaydauky = document.getElementById('ngaydauky').value;
    var ngaycuoiky = document.getElementById('ngaycuoiky').value;
    if (ngaydauky > ngaycuoiky) {
        alert('Ngày đầu kỳ ko được lớn hơn ngày cuối kỳ');
    }
    checkNumberAndDate();
}