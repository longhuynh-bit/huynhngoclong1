var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn) {
    btn.addEventListener('click', function() {
        //Sử dụng phương thức document.addEventListener () để đính kèm một trình xử lý sự kiện vào tài liệu.
        //Đính kèm sự kiện nhấp chuột vào phần tử <button>. Khi người dùng nhấp vào nút, xuất "Hello World" trong phần tử <p> có id = "demo":
        if (input.innerHTML == '0')
            input.innerHTML = '';
        if (btn.innerHTML == 'AC')
            input.innerHTML = '0';
        // else if (btn.innerHTML == 'DEL') {
        //     var arrtext = Array.from(input.innerHTML);
        //     arrtext.splice(arrtext.length - 1, 1);
        //     if (arrtext.length != 0)
        //         input.innerHTML = arrtext.join('');
        //     else input.innerHTML = '0';
        //}
        else if (btn.innerHTML == '=') {
            //Hàm eval () đánh giá hoặc thực thi một đối số.

            //Nếu đối số là một biểu thức, eval () đánh giá biểu thức. Nếu đối số là một hoặc nhiều câu lệnh JavaScript, eval () thực thi các câu lệnh.
            input.innerHTML = eval(input.innerHTML);
        } else input.innerHTML += btn.innerHTML
    })
})