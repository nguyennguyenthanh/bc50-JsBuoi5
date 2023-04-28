// Global vairiable
var user = "Nguyen";


/*FUNCTION(HÀM)
-Hàm không có tham số
-Hàm có tham số
-Hàm không có giá trị trả về
-Hàm có giá trị trả về(return)
*/ 



// Khai báo hàm
function xuatThongTin(){
    // thân hàm
    console.log("hello CyberSoft");
    console.log("Nguyen Thanh Nguyen - ohyeah");
}
// gọi hàm, js sẽ thực hiện dòng dưới trc r mới đọc ở trên, gọi trc khai báo cũng đc
xuatThongTin();
xuatThongTin();

// function tinhTong(){
//     // local variable: just active in this function
//     var num_1 = 10;
//     var num_2 = 5;
//     var total = num_1 + num_2;
//     console.log(total);
//     // sử dụng đc biến ngoài hàm
//     // console.log("user: " + user);
// }
// tinhTong();
function tinhTong(a,b) {
    // local variable: just active in this function
    var total = a + b;
    // trả về giá trị, nằm dưới cùng của hàm
    return total;
}
// 2 đối số truyền vô 2 tham số hàm trên
var tonng2so = tinhTong(15, 5);
console.log(tonng2so * 2);

// <----Tính Lương NV ---->
function tinhLuongNV(luongNgay,soNgayLam){
    var luong = luongNgay * soNgayLam;
    return luong;
}
// var luongTong = tinhLuongNV(100000,5);
// console.log(luongTong);

// ----Hàm lồng hàm----
function xuatLuongNVCuli(){
    var tongLuong = tinhLuongNV(100000,5);
    console.log("Luong cua NV Culi: " + tongLuong);
}
xuatLuongNVCuli();

// CÁCH MỚI ĐỂ NHẤN VÀO NÚT(k cần dom tới nút,Cách 2)
function clickBtnTinhLuong(luongNgay,soNgayLam){
    // DOM tới input lấy value
    var luongNgay = document.getElementById("luongNgay").value * 1;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var luongTong = tinhLuongNV(luongNgay,soNgayLam);
    var result = "<div>Tổng Lương Là: " + luongTong + "</div>"
    document.getElementById("footertinhLuong").innerHTML = result;
}
