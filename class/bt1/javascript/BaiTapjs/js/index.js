//vòng lặp for
// for (var i = 0; i < 10; i++) {
//     document.write(i);
//     document.write("<br>");
// }
// for (var i = 10; i > 0; i--) {
//     document.write(i);
//     document.write("<br>");
// }
//Bài tâp: in ra dãy số từ o đến 100
// -nếu số đó chia hết cho 3 thì in ra là số chia hết cho 3
// -nếu số đó chia hết cho 5 thì in ra là số chia hết cho 5
// -nếu số đó chia hết cho 15 thì in ra là số x chia hết cho 15 mà không in ra số
//= dấu bằng là phép gán
// for (var i = 0; i <= 100; i++) {
//     if (i % 15 == 0) {
//         document.write("Số " + i + " chia hết cho 15 <br>");
//     } else if (i % 5 == 0) {
//         document.write("Số " + i + " chia hết cho 5 <br>");
//     } else if (i % 3 == 0) {
//         document.write("Số " + i + " chia hết cho 3 <br>");
//     } else if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)) {
//         document.write("Số " + i + " không chia hết cho 3 5 15 <br>")
//     }
// }
//vòng lặp while và do while
// var i = 10;
// while (i < 0) {
//     document.write(i + "<br>");
//     i--;
// }
// //vòng lặp do while
// var i = 10;
// do {
//     document.write(i + "<br>");
//     i--;
// }
// while (i > 1);

// Bằng 2 số, kiểm tra số đó nếu là bằng 2 thì in ra  là Monday, ...8 thì ra là sunday nếu không nằm trong 2 và 8 thì in ra no day 
// var sort = 2;
// switch (sort) {
//     case 2:
//         document.write("Monday");
//         break;
//     case 3:
//         document.write("");
//         break;
//     case 4:
//         document.write("");
//         break;
//     case 5:
//         document.write("");
//         break;
//     case 6:
//         document.write("Friday");
//         break;
//     case 7:
//         document.write("Saturday");
//         break;
//     case 8:
//         document.write("Sunday");
//         break;
//     default:
//         document.write("số bạn nhập ko hơp lệ");
//         break;
// }
var moneyBox = document.getElementById('money');
var priceBox = document.getElementById('price');
var changeBox = document.getElementById('change');
var submitBox = document.getElementById('submit');
submitBox.onclick = (l) => {
    l.prevenDefault();
    var money = moneyBox.Value;
    var price = priceBox.Value;
    var change = changeBox.Value;

    var candy = 0;
    var candyShell = 0;
    var money = 2000;
    var candyMoney = 200;
    candy = money / candyMoney;
    candyShell = candy;
    while (candyShell >= 2) {
        candyShell = candyShell - 2;
        candy++;
        candyShell++;
    }
}

// document.write("Số kẹo mua được là ", candy);