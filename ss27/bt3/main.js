function tinhHinhTron(){
    let banKinh = parseInt(prompt("Nhap ban kinh hinh tron:"));
    if (isNaN(banKinh) || banKinh <= 0){
        alert("Ban kinh khong hop le.");
        return;
    }
    let dienTichHinhTron = Math.PI * banKinh * banKinh;
    let chuViHinhTron = 2 * Math.PI * banKinh;
    alert("Dien tich hinh tron: " + dienTichHinhTron.toFixed(2) + "\nChu vi hinh tron: " + chuViHinhTron.toFixed(2));
}
function tinhHinhChuNhat(){
    let chieuDai = parseInt(prompt("Nhap chieu dai hinh chu nhat:"));
    let chieuRong = parseInt(prompt("Nhap chieu rong hinh chu nhat:"));
    if (isNaN(chieuDai) || chieuDai <= 0 || isNaN(chieuRong) || chieuRong <= 0){
        alert("Kich thuoc khong hop le.");
        return;
    }
    let dienTichHinhChuNhat = chieuDai * chieuRong;
    let chuViHinhChuNhat = 2 * (chieuDai + chieuRong);
    alert("Dien tich hinh chu nhat: " + dienTichHinhChuNhat.toFixed(2) + "\nChu vi hinh chu nhat: " + chuViHinhChuNhat.toFixed(2));
}
function hienThiMenu(){
    let luaChon;
    do{
        luaChon = parseInt(prompt(`
            MENU TINH TOAN HINH HOC:
            1. Tinh dien tich hinh tron.
            2. Tinh chu vi hinh tron.
            3. Tinh dien tich hinh chu nhat.
            4. Tinh chu vi hinh chu nhat.
            5. Thoat.
        `));
        switch (luaChon){
            case 1:
                tinhHinhTron();
                break;
            case 2:
                tinhHinhTron();
                break;
            case 3:
                tinhHinhChuNhat();
                break;
            case 4:
                tinhHinhChuNhat();
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
