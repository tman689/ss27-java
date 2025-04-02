let students = [];
function nhapDanhSach(){
    let soLuong = parseInt(prompt("Nhap so luong sinh vien:"));
    if (isNaN(soLuong) || soLuong <= 0){
        alert("So luong sinh vien khong hop le.");
        return;
    }
    for (let i = 0; i < soLuong; i++){
        let tenSinhVien = prompt(`Nhap ten sinh vien thu ${i + 1}:`);
        if (tenSinhVien){
            students.push(tenSinhVien);
        }else{
            alert("Ten sinh vien khong hop le.");
            i--;
        }
    }
}
function hienThiDanhSach(){
    if (students.length == 0){
        alert("Danh sach sinh vien rong.");
        return;
    }
    alert("Danh sach sinh vien: \n" + students.join("\n"));
}
function timSinhVien(){
    let tenCanTim = prompt("Nhap ten sinh vien can tim:");
    let ketQua = students.filter(sv => sv.toLowerCase() == tenCanTim.toLowerCase());
    if (ketQua.length > 0) {
        alert("Sinh vien tim thay: " + ketQua[0]);
    } else {
        alert("Sinh vien khong co trong danh sach.");
    }
}
function xoaSinhVien(){
    let tenCanXoa = prompt("Nhap ten sinh vien can xoa:");
    let index = students.findIndex(sv => sv.toLowerCase() == tenCanXoa.toLowerCase());
    if (index !== -1){
        students.splice(index, 1);
        alert("Da xoa sinh vien: " + tenCanXoa);
    } else {
        alert("Sinh vien khong co trong danh sach.");
    }
}
function hienThiMenu(){
    let luaChon;
    do {
        luaChon = parseInt(prompt(`
            MENU QUAN LY SINH VIEN:
            1. Nhap danh sach sinh vien.
            2. Hien thi danh sach sinh vien.
            3. Tim sinh vien theo ten.
            4. Xoa sinh vien khỏi danh sach.
            5. Thoat.
        `));
        switch (luaChon){
            case 1:
                nhapDanhSach();
                break;
            case 2:
                hienThiDanhSach();
                break;
            case 3:
                timSinhVien();
                break;
            case 4:
                xoaSinhVien();
                break;
            case 5:
                alert("Tam biet!");
                break;
            default:
                alert("Lua chon khong hop le. Vui long thu lai.");
                break;
        }
    } while (luaChon !== 5);
}
hienThiMenu();
