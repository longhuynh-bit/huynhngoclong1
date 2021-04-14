function send() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById('email').value;
    var tieude = document.getElementById('tieude').value;
    var noidung = document.getElementById('noidung').value;
    if (fullname == "") {
        document.getElementById("errorname").innerHTML = "Vui lòng nhập họ tên";
    } else {
        document.getElementById("errorname").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("second").innerHTML = "Vui lòng nhập email";
    } else {
        document.getElementById("second").innerHTML = "";
    }
    if (tieude == "") {
        document.getElementById("thist").innerHTML = "Vui lòng nhập tiêu đề";
    } else {
        document.getElementById("thist").innerHTML = "";
    }
    if (noidung == "") {
        document.getElementById("cuoi").innerHTML = "Vui lòng nhập nội dung";
    } else {
        document.getElementById("cuoi").innerHTML = "";
    }

}