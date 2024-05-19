// Bước 1: Xác địn các phần tử THAM CHIẾU mà chúng ta sẽ tác động
let name = document.getElementById('search');
let animal = ['meo', 'cho']

// Bước 2: Xử lý sự kiện
document.getElementById('btn').addEventListener('click', function() {
    let txt = document.getElementById('search').value;
    if (txt === 'dog')
        document.getElementById('image').src = '/Sample-Code/Learn-JS/Xu-ly-su-kien/dog.jpg'; //
});
// Bước 3: Xử lý logic, hàm xử lý sự kiện