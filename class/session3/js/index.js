function send() {
    var fullname = document.getElementById("fullname").value;
    var sodauky = document.getElementById("sodauky").value;
    var socuoiky = document.getElementById('socuoiky').value;
    var birthday = document.getElementById("birthday").value;
    var ngaydauky = document.getElementById('ngaydauky').value;
    var ngaycuoiky = document.getElementById('ngaycuoiky').value;
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
    if (ngaydauky == "") {
        document.getElementById('firstDay').innerHTML = "Vui lòng nhâp vào!!!";
    } else {
        document.getElementById('firstDay').innerHTML = "";
    }
    if (ngaycuoiky == "") {
        document.getElementById('endDay').innerHTML = "Vui lòng nhập vào!!!";
    } else {
        document.getElementById('endDay').innerHTML = "";
    }
    if ((sodauky > socuoiky) || (sodauky <= 0) || (ngaydauky > ngaycuoiky)) {
        alert('bạn đã nhập sai,bạn nên nhập lại');
    }
    //Tính tiền điện:50 số dầu giá 1000 vnd/số, 100 số tiếp theo 2000 vnd/số, từ 200 trở lên thì là 3500 vnđ/số
    var money = 0;

}