//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

// let a = Number(prompt('Enter a number:'));
// let b = Number(prompt('Enter b number:'));
// if (a%b===0){
//     console.log(`${a} chia hết cho ${b}`);
// } else {
//     console.log(`${a} KHÔNG chia hết cho ${b}`);
// }


//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10

// let age = Number(prompt('Enter age:'));
// if (age <17){
//     console.log('Bạn chưa đủ tuổi vào lớp 10');
// } else if (age >=17) {
//     console.log('Bạn đã đủ tuổi vào lớp 10');
// } else {
//     console.log('Bạn nhập sai tuổi của mình');
// }


//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

// let n = Number(prompt('Nhap số nguyên n:'));
// if (n>0){
//     console.log(`${n} là số lớn hơn 0`);
// } else if (n<0){
//     console.log(`${n} là số nhỏ hơn 0`);
// } else if (n===0) {
//     console.log(`${n} là số bằng 0`);
// } else {
//     console.log(`Kiểm tra lại n`);
// }


//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

//  let a = Number(prompt('Nhập a'));
//  let b = Number(prompt('Nhập b'));
//  let c = Number(prompt('Nhập c'));
//  let max;
// if(a>=b && a>=c){
//     max=a;
// } else if (b>=a && b>=c){
//     max=b;
// } else if (c>=a && c>=b){
//     max=c;
// }
// console.log(`GTLN của 3 số ${a}, ${b} và ${c} là: ${max}`);


//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

// let dhs = Number(prompt('Nhap diem hoc sinh'));
// if (dhs <5){
//     console.log('Ban hoc luc yeu');
// } else if (dhs >=5){
//     if (dhs <7){
//         console.log('Ban hoc luc trung binh');
//     } else if (dhs >=7 && dhs <=8) {
//         console.log('Ban hoc luc kha');
//     } else if (dhs <=10 && dhs>8){
//         console.log('Ban hoc luc gioi');
//     } else {
//         console.log('Kiem tra lai diem cua HS');
//     }  }


//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng

// let ds = Number(prompt('Nhap danh so ban hang: (VND)'));
// let hh = Number(prompt('Nhap phan tram hoa hong (%)'));
// let thh;
// thh=ds*hh/100;
// console.log(`Tien hoa hong cua ban la: ${thh} (VND)`);


//Bài 7: Tính số cân nặng của cơ thể
// + Nếu dưới 18: “Thiếu cân”
// + Nếu dưới 25: “Bình thường”
// + Nếu dưới 30 cân: “Thừa cân”
// + Còn lại: “Béo quá! Giảm cân đi”

// let cc = Number(prompt('Nhap chieu cao cua ban: (m)'));
// let cn = Number(prompt('Nhap can nang cua ban: (kg)'));
// let bmi = cn/(cc*cc);
// let kq;
// if (bmi<18){
//     kq='Thieu can';
// } else if (bmi<25){
//     kq='Binh thuong';
// } else if (bmi<30){
//     kq='Thua can'
// } else {
//     kq='Beo qua! Giam can di';
// }
// console.log(kq);
