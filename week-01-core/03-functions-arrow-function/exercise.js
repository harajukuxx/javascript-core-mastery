// โจทย์ข้อที่ 1: เขียน Regular Function (ฟังก์ชันแบบดั้งเดิม)
// - สร้างฟังก์ชันชื่อ convertCelsiusToFahrenheit รับพารามิเตอร์ 1 ตัวคือ celsius
// - สูตรคำนวณคือ: (celsius * 9/5) + 32
// - ให้ฟังก์ชันนี้ return ผลลัพธ์กลับออกมา
// - ลองเรียกใช้งานโดยส่งค่า 30 เข้าไป และพิมพ์ผลลัพธ์ออกทางหน้าจอ
// เขียนโค้ดด้านล่างนี้:

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsiusToFahrenheit(30));

// โจทย์ข้อที่ 2: แปลงเป็น Arrow Function แบบย่อขั้นสุด
// - ให้แปลงฟังก์ชันชื่อ square (หาเลขยกกำลังสอง) ด้านล่างนี้ ให้กลายเป็น Arrow Function บรรทัดเดียว (Implicit Return)
// ฟังก์ชันเดิม:
// function square(n) {
//   return n * n;
// }
// แปลงโค้ดของคุณด้านล่างนี้:

const square = (n) => n * n;

console.log(square(2));
