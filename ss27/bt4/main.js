let numbers = [];
function nhapDanhSach(){
    let soLuong = parseInt(prompt("Nhap so luong so nguyen:"));
    if (isNaN(soLuong) || soLuong <= 0){
        alert("So luong so nguyen khong hop le.");
        return;
    }
    for (let i = 0; i < soLuong; i++){
        let number = parseInt(prompt(`Nhap so nguyen thu ${i + 1}:`));
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("So nguyen khong hop le.");
            i--;
        }
    }
}
function tinhTrungBinh(){
    if (numbers.length == 0){
        alert("Danh sach so nguyen rong.");
        return;
    }
    let tong = 0;
    for (let i = 0; i < numbers.length; i++){
        tong += numbers[i];
    }
    let trungBinh = tong / numbers.length;
    alert("Trung binh cua cac so la: " + trungBinh);
}
function timChanLonNhat(){
    if (numbers.length == 0){
        alert("Danh sach so nguyen rong.");
        return;
    }
    let maxChan = null;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            if (maxChan == null || numbers[i] > maxChan){
                maxChan = numbers[i];
            }
        }
    }
    if (maxChan == null){
        alert("Khong co so chan trong danh sach.");
    } else {
        alert("So chan lon nhat la: " + maxChan);
    }
}
function timLeNhoNhat(){
    if (numbers.length == 0){
        alert("Danh sach so nguyen rong.");
        return;
    }
    let minLe = null;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 !== 0){
            if (minLe === null || numbers[i] < minLe){
                minLe = numbers[i];
            }
        }
    }
    if (minLe === null){
        alert("Khong co so le trong danh sach.");
    }else{
        alert("So le nho nhat la: " + minLe);
    }
}
function hienThiMenu(){
    let luaChon;
    do{
        luaChon = parseInt(prompt(`
            MENU XU LY SO NGUYEN:
            1. Nhap danh sach so nguyen.
            2. Tinh trung binh cac so.
            3. Tim so chan lon nhat.
            4. Tim so le nho nhat.
            5. Thoat.
        `));
        switch (luaChon){
            case 1:
                nhapDanhSach();
                break;
            case 2:
                tinhTrungBinh();
                break;
            case 3:
                timChanLonNhat();
                break;
            case 4:
                timLeNhoNhat();
                break;
            case 5:
                alert("thoát khỏi menu");
                break;
            default:
                alert("Lua chon khong hop le. Vui long thu lai.");
                break;
        }
    } while (luaChon !== 5);
}
hienThiMenu();
