// <--------- BÀI 1 -------->
/*Đầu vào:
    Tạo 6 biến: 3 biến điểm 3 môn, 1 điểm chuẩn, 1 khu vực, 1 đối tượng
*Xử lý:
    -nếu tổng 3 điểm < điểm chuẩn thì rớt, tính tổng điểm
    -nếu tổng 3 điểm thi >= điểm chuẩn thì đậu,tính tổng điểm
    -nếu thuộc khu vực, đối tượng nào thì tính tổng rồi kết luận đậu/rớt
*Đầu ra:
    kết quả: đậu/rớt, tổng điểm?
*/

var diemMon1 = 0;
var diemMon2 = 0;
var diemMon3 = 0;
var diemChuan = 0;
var tongDiem = 0;

// Hàm DOM
function getEle(id) {
  return document.getElementById(id)
}
// Tính điểm chính
function tinhDiem() {
  var khuVuc = getEle("khuVuc").value * 1;
  var doiTuong = getEle("doiTuong").value * 1;
  var diemMon1 = getEle("diemMon1").value * 1;
  var diemMon2 = getEle("diemMon2").value * 1;
  var diemMon3 = getEle("diemMon3").value * 1;
  var diemChuan = getEle("diemChuan").value * 1;
  var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    var ketQua = "Bạn đã rớt, vì có điểm môn là 0."
    getEle("footerDiemThi").innerHTML = ketQua;
  } else if (tongDiem > 0 && tongDiem < diemChuan) {
    var ketQua = "Bạn đã rớt." + " Tổng điểm: " + tongDiem;
    getEle("footerDiemThi").innerHTML = ketQua;
  } else {
    var ketQua = "Bạn đã đậu." + " Tổng điểm: " + tongDiem;
    getEle("footerDiemThi").innerHTML = ketQua;
  }
}


// <--------- BÀI 2 -------->
/*Đầu vào:
    tạo 2 biến, số kw, tiền điện
*Xử lý:
    50kw đầu = số kw * giá 50kw đầu
    50kế = số kw * giá 50kw kế
    100kế = số kw * giá 100kw kế
    150kế = số kw * giá 150kw kế
    còn lại = dùng giá 1300d/1kw
*Đầu ra:
    kết quả: tiền điện là?
*/

const kw1 = 500;
const kw2 = 650;
const kw3 = 850;
const kw4 = 1100;
const kw_conLai = 1300;


var soKw = 0;
// Hàm xuất thông tin tiền điện
function xuatThongTin(total) {
  var hoTen = getEle("hoTen").value;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var tongTienDien = "Họ Tên: " + hoTen + " ; Tiền Điện: " + currentFormat.format(total) + " VND";
  getEle("footerDien").innerHTML = tongTienDien;
}

// Hàm tính tiền điện(chính)
function tinhTienDien() {
  var soKw = getEle("soKw").value * 1;
  if (soKw < 0 || soKw == "") {
    alert("Bạn đã nhập sai số Kw");
  }
  if (soKw > 0 && soKw <= 50) {
    var tienDien1 = soKw * kw1;
    xuatThongTin(tienDien1);
  } else if (soKw > 50 && soKw <= 100) {
    var tienDien2 = 50 * kw1 + ((soKw - 50) * kw2);
    xuatThongTin(tienDien2);
  } else if (soKw > 100 && soKw <= 200) {
    var tienDien3 = 50 * kw1 + 50 * kw2 + ((soKw - 100) * kw3);
    xuatThongTin(tienDien3);
  } else if (soKw > 200 && soKw <= 350) {
    var tienDien4 = (50 * kw1) + (50 * kw2) + (100 * kw3) + ((soKw - 150) * kw4);
    xuatThongTin(tienDien4);
  } else {
    var tienDien5 = (50 * kw1) + (50 * kw2) + (100 * kw3) + (150 * kw4) + ((soKw - 200) * kw_conLai);
    xuatThongTin(tienDien5);
  }
}
// <--------- BÀI 3 -------->
/*Đầu vào:
    tạo 2 biến, số thu nhập năm, số người phụ thuộc
*Xử lý:
    0< thu nhập <=60tr => thuế suất 5%
    60< thu nhập <=120  --> 10%
    120< thu nhập <=210 --> 15%
    210< thu nhập <=384 --> 20%
    384< thu nhập <=624 --> 25%
    624< thu nhập <=960 --> 30%
    thu nhập >960       --> 35%
*Đầu ra:
    kết quả: thu nhập chịu thuế là?
*/
// Hàm xuất kết quả
function xuatKetQua(thue) {
  var nhapHoTen = getEle("nhapHoTen").value;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var tongTienThue = "Họ Tên: " + nhapHoTen + " ; Tiền Thuế: " + currentFormat.format(thue) + " VND";
  getEle("footerThue").innerHTML = tongTienThue;
}

// Hàm tính thuế chính
function tinhTienThue() {  
  var tongThuNhap = getEle("tongThuNhap").value * 1;
  var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value * 1;
  var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;

  if(tongThuNhap < 0 && thuNhapChiuThue < 0){
    alert("Thông tin chưa hợp lệ");
  }
  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e+6) {
    thuNhapChiuThue = thuNhapChiuThue + thuNhapChiuThue * 0.05;
    xuatKetQua(thuNhapChiuThue);
    
  } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
    thuNhapChiuThue = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1 + thuNhapChiuThue * 0.1;
    xuatKetQua(thuNhapChiuThue);

  } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
    thuNhapChiuThue = 60e+6 * 0.05 + 120e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15 + thuNhapChiuThue * 0.15;
    xuatKetQua(thuNhapChiuThue);

  } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
    thuNhapChiuThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2 + thuNhapChiuThue * 0.2;
    xuatKetQua(thuNhapChiuThue);

  } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
    thuNhapChiuThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25 + thuNhapChiuThue * 0.25;
    xuatKetQua(thuNhapChiuThue);

  } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
    thuNhapChiuThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + 624e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3 + thuNhapChiuThue * 0.3;
    xuatKetQua(thuNhapChiuThue);

  } else {
    thuNhapChiuThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + 624e+6 * 0.25 + 960e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35 + thuNhapChiuThue * 0.35;
    xuatKetQua(thuNhapChiuThue);
  }
}
// <--------- BÀI 4 -------->
/*Đầu vào:
    tạo 2 biến, mã khách hàng, số kênh cao cấp
*Xử lý:
    -nếu nhà dân:  tiền cáp = phí hóa đơn + phí dv cơ bản + phi thuê kênh cao cấp (mức giá khác)
    -nếu doanh nghiệp: tiền cáp = phí hóa đơn + phí dv cơ bản + phi thuê kênh cao cấp (mức giá khác)
*Đầu ra:
    kết quả: tiền cáp 2 loại?
*/
// Nhà Dân
const xlHoaDon_1 = 4.5;
const dvCoBan_1 = 20.5;
const kenhCaoCap_1 = 7.5;
// Doanh Nghiệp
const xlHoaDon_2 = 15;
const dvCoBan_2 = 75;
const kenhCaoCap_2 = 7.5;
// Hàm ẩn hiện input
function changeInput(){
  var soKetNoi = getEle("soKetNoi").value * 1;
  var mySelect = getEle("mySelect").value * 1;
  if(mySelect == 0 || mySelect == 1){
    getEle("soKetNoi").style.display = "none";
  } else {
    getEle("soKetNoi").style.display = "block";
  };
}

// Hàm tính tiền cáp chính
function tinhTienCap(){
  var mySelect = getEle("mySelect").value * 1;
  var soKetNoi = getEle("soKetNoi").value * 1;
  var maKH = getEle("maKH").value;
  var soKenhCaoCap = getEle("soKenhCaoCap").value * 1;
  if(mySelect == 0){
    alert("Vui lòng chọn đúng loại khách hàng");
  } else if(mySelect == 1){
    var tienCap = xlHoaDon_1 + dvCoBan_1 + soKenhCaoCap * kenhCaoCap_1;
    var tongTienCap = "Mã khách hàng: " +  maKH + " ; Tiền Cáp: " + tienCap;
    getEle("footerCap").innerHTML = tongTienCap;
  } else if(mySelect == 2){
    var tienCap = xlHoaDon_2 + dvCoBan_2 + kenhCaoCap_2 * soKenhCaoCap;
    if(soKetNoi > 10){
      tienCap = xlHoaDon_2 + kenhCaoCap_2 * soKenhCaoCap + (soKetNoi - 10) * dvCoBan_2;
    }
    var tongTienCap = "Mã khách hàng: " +  maKH + " ; Tiền Cáp: " + tienCap;
    getEle("footerCap").innerHTML = tongTienCap;
  }
}



















