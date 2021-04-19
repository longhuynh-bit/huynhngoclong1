var student = [
    ['nguyễn văn a', 26, 'nguyenvana@gmail', 'Hà Nội'],
    ['nguyễn văn c', 21, 'nguyenvanc@gmail', 'Hồ Chí Minh'],
    ['nguyễn văn d', 22, 'nguyenvand@gmail', 'Đà Nẵng'],
    ['nguyễn văn e', 20, 'nguyenvane@gmail', 'Sài Gòn'],
]
document.writeln('Số học viên của lớp học:');
document.writeln('<br/>');
for (var i = 0; i < student.length; i++) {
    document.writeln(student[i]);
    document.writeln('<br/>');
}



//Bai2
document.writeln('Thêm 2 sinh viên vào lớp:')
document.writeln('<br/>');
var newStudent = [
    ['lich', 18, 'huynhngoclonh@gmail.com', 'Huế'],
    ['li', 20, 'huynhnh@gmail.com', 'Cà Mau'],
];
// for (var i = 0; i < student.length; i++) {
//     student.push(newStudent);
//     document.writeln(student);
// }
// document.writeln('<br/>');


//bai4
for (var i = 0; i < student.length; i++) {
    if (student[i][3] == 'Đà Nẵng') {
        student[i][3] = 'Hải Phòng';
    }
}
console.log(student);
//bai3
for (var i = 0; i < student.length; i++) {
    if (student[i][0] == 'nguyễn văn a') {
        student[i][0] = 'long';
    }
}
console.log(student);

//Bai5
for (var i = 0; i < student.length; i++) {
    if (23 <= student.length[i][1] && student.length[i][1] <= 26) {
        student.splice(i, 1);
    }
    console.log(student);
}