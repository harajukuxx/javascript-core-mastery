let x = 10;
let y = 3;

console.log(x % y); // 💻 ผลลัพธ์: 1 (เพราะ 10 หาร 3 ได้ 3 เศษ 1)
console.log(y ** 2); // 💻 ผลลัพธ์: 9 (3 ยกกำลัง 2)

const hasTicket = true;
const hasMoney = false;

console.log(hasTicket && hasMoney); // 💻 false (เพราะขาดเงิน)
console.log(hasTicket || hasMoney); // 💻 true (เพราะอย่างน้อยก็มีตั๋ว)

const score = 75;

if (score >= 80) {
  // จะทำงานในปีกกานี้ก็ต่อเมื่อ เงื่อนไขใน ( ) เป็น true เท่านั้น
  console.log("คุณได้เกรด A");
} else if (score >= 70) {
  // ถ้าเงื่อนไขแรกเป็น false มันจะวิ่งมาเช็คเงื่อนไขนี้ต่อ
  console.log("คุณได้เกรด B");
} else {
  // ถ้าเงื่อนไขด้านบนเป็น false ทั้งหมด โค้ดจะตกมาทำงานที่นี่อัตโนมัติ
  console.log("คุณได้เกรด C");
}

const age = 18;
let status1;

if (age >= 20) {
  status1 = "ซื้อได้";
} else {
  status1 = "ห้ามซื้อ";
}

// Ternary: ใช้เมื่อเงื่อนไขง่ายๆ มีแค่ 2 ทางเลือก (ใช่/ไม่ใช่) และต้องการส่งค่ากลับทันที
//          ( เงื่อนไข )   ?   ถ้า true   :  ถ้า false

const status2 = age >= 20 ? "ซื้อได้" : "ห้ามซื้อ";
console.log(status2); // 💻 ผลลัพธ์: "ห้ามซื้อ"
