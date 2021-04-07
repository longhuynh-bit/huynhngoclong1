var month = 2;
var year = 2024;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("thang ", month, " co 31 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("thang ", month, " co 30 ngay");
        break;
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log("Nam nhuan");
            console.log("thang ", month, " co 29 ngay");
        } else {
            console.log("Khong phai la nam nhuan");
            console.log("thang ", month, " co 28 ngay");
        }
        break;
    default:
        console.log("so thang nhap ko hop le!!!");
        break;
}