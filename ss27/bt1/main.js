function tong(a, b){
    return a + b;
}
function hieu(a, b){
    return a - b;
}
function tich(a, b){
    return a * b;
}
function thuong(a, b){
    return a / b;
}
let choice = 0;
let a = +prompt("Nhập số thứ nhất: ");
let b = +prompt("Nhập số thứ hai: ");
if (isNaN(a) || isNaN(b)){
    alert("Vui lòng nhập số hợp lệ!");
}else{
    do{
        choice = +prompt(`
            MENU
            1. Cộng hai số.
            2. Trừ hai số.
            3. Nhân hai số.
            4. Chia hai số.
            5. Thoát.  
        `);
        switch (choice){
            case 1:
                alert("Tổng hai số là: " + tong(a, b));
                break;
            case 2:
                alert("Hiệu hai số là: " + hieu(a, b));
                break;
            case 3:
                alert("Tích hai số là: " + tich(a, b));
                break;
            case 4:
                if (b == 0){
                    alert("Không thể chia cho 0");
                }else{
                    alert("Thương của hai số là: " + thuong(a, b));
                }
                break;
            case 5:
                alert("Tạm biệt!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice != 5);
}
