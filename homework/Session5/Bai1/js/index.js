var n = prompt('Nhâp giá trị n:');
//chuyển kiểu dữ liệu
n = parseInt(n);
for (i = 1; i <= n; i++) {
    //in ra ky tu khoang trang
    for (j = i; j < n; j++) {
        document.writeln('&ensp;');
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
for (i = 1; i <= h; i++) {
    //in ra khoảng trắng 
    for (j = 1; j <= h - i; j++)
        document.writeln('&ensp;');
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
var count = 0;
for (i = 1; i <= m; i++) {
    for (j = 1; j <= i; j++) {
        count++;
        document.writeln(count);
    }
    document.writeln('<br/>');
}