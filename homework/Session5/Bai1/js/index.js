var n = prompt('Nhâp giá trị n:');
//chuyển kiểu dữ liệu
n = parseInt(n);
for (i = 1; i <= n; i++) {
    //in ra ky tu khoang trang
    for (j = i; j < n - i; j++) {
        document.writeln(' ');
    }
    //in so ngoi sao
    for (j = 1; j <= (2 * i - 1); j++) {
        document.writeln('*');
    }
    document.writeln('<br/>');
}
//bai2:
var h = prompt('Nhập giá trị h:');
//chuyển dữ liệu
h = parseInt(h);
for (i = 1; i <= n; i++) {
    //in ra khoảng trắng 
    for (j = 1; j <= n - i; j++)
        document.writeln('-');
    //in ra ký tự *
    for (j = 1; j <= i; j++) {
        document.writeln('*');
    }
    document.writeln('<br/>');
}
//bài3
//Nhập chiều cao 
var m = prompt('Nhập giá trị m:');
m = parseInt(m);
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++)
        document.writeln(" " + (j));
    document.writeln('<br/>');
}