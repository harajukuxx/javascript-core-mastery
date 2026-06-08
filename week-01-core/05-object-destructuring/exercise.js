// โจทย์ข้อที่ 1: การสร้างและอัปเดต Object
// - สร้าง Object ชื่อ car เก็บข้อมูลแบรนด์ (brand: "Toyota") และปีผลิต (year: 2020)
// - จงอัปเดตปีผลิต (year) ให้เป็น 2024
// - จงเพิ่มคุณสมบัติ color: "Black" เข้าไปใน Object
// - พิมพ์ตัวแปร car ออกมาดูผลลัพธ์
// เขียนโค้ดด้านล่างนี้:

const car = {
  brand: "Toyota",
  year: 2020,
};

car.year = 2024;
car.color = "Black";

console.log(car);

// โจทย์ข้อที่ 2: ใช้ Object Destructuring
// - มี Object ของนักเรียนดังนี้:
const student = {
  id: "S001",
  fullName: "Somsri Rakdee",
  score: 85,
};
// - จงใช้ Object Destructuring เพื่อดึงค่า fullName และ score ออกมาเป็นตัวแปรอิสระ
// - จากนั้นให้พิมพ์ข้อความออกมาว่า "[fullName] ได้คะแนน [score] คะแนน" ด้วย Template Literal
// เขียนโค้ดด้านล่างนี้:

const { fullName, score } = student;
console.log(`${fullName} ได้คะแนน ${score} คะแนน`);

// ==========================================
// โจทย์ข้อที่ 3: Nested Object Destructuring
// ==========================================
// มี Object ข้อมูลของบริษัทดังนี้:
const company = {
  companyName: "Tech Innovation",
  detail: {
    ceo: "Mr. David",
    revenue: 10000000,
  },
};

// 🎯 สิ่งที่ต้องทำ:
// จงใช้ Object Destructuring ในการแกะค่า ceo และ revenue ออกมาจากบริษัท (company) ให้กลายเป็นตัวแปรอิสระในบรรทัดเดียว
// จากนั้นพิมพ์คำว่า "CEO คือ [ชื่อ ceo] มีรายได้ [revenue] บาท" ด้วย Template Literal
// เขียนโค้ดของคุณด้านล่างนี้:

const { detail } = company;
console.log(`CEO คือ ${detail.ceo} มีรายได้ ${detail.revenue} บาท`);

// ==========================================
// โจทย์ข้อที่ 4: Destructuring Default Values
// ==========================================
// มี Object ข้อมูลคอร์สเรียนส่งมาจากระบบดังนี้ (สังเกตว่าไม่มีคีย์ price ส่งมา):
const course = {
  title: "JavaScript Backend Intensive",
  duration: "30 Days",
};

// 🎯 สิ่งที่ต้องทำ:
// จงใช้ Object Destructuring แกะค่า title และ price ออกมา
// โดยให้ตั้งค่าเริ่มต้น (Default Value) ให้กับตัวแปร price เท่ากับ 0 เผื่อไว้ในกรณีที่ไม่มีข้อมูลส่งมา
// จากนั้นพิมพ์คำว่า "คอร์ส [title] ราคา [price] บาท"
// เขียนโค้ดของคุณด้านล่างนี้:

const { title, price = 0 } = course;
console.log(`คอร์ส ${title} ราคา ${price} บาท`);

// ==========================================
// โจทย์ข้อที่ 5: Method inside Object & 'this'
// ==========================================
// 🎯 สิ่งที่ต้องทำ:
// จงสร้าง Object ชื่อว่า wallet ที่มีคุณสมบัติดังนี้:
// 1. มีคีย์ชื่อ owner เก็บค่าชื่อของคุณ (เช่น "Nutthapong")
// 2. มีคีย์ชื่อ cash เก็บจำนวนเงินเริ่มต้น (เช่น 1000)
// 3. มี Method ข้างในชื่อว่า spend ซึ่งรับพารามิเตอร์ 1 ตัวคือ amount (จำนวนเงินที่จ่าย)
//    - ข้างใน Method นี้ให้เอาเงินในกระเป๋า (cash) หักออกด้วย amount (ทริค: ใช้ this เข้าช่วย)
//    - และพิมพ์บอกว่า "[owner] จ่ายเงินไป [amount] บาท เหลือเงิน [cash] บาท"
//
// ตัวอย่างการเรียกใช้งานที่ต้องการ:
// wallet.spend(200); -> ผลลัพธ์: Nutthapong จ่ายเงินไป 200 บาท เหลือเงิน 800 บาท
// เขียนโค้ดของคุณด้านล่างนี้:

const wallet = {
  owner: "Nutthapong",
  cash: 1000,
  spend(amount) {
    let total = this.cash - amount;
    console.log(
      `${this.owner} จ่ายเงินไป ${amount} บาท เหลือเงิน ${total} บาท`,
    );
  },
};
wallet.spend(200);

// ==========================================
// โจทย์ข้อที่ 6: Object Methods (Keys & Values)
// ==========================================
// มี Object เก็บคะแนนสอบของแต่ละวิชาดังนี้:
const examScores = {
  math: 90,
  english: 85,
  science: 78,
  // (สมมติว่าในอนาคตอาจจะมีวิชาเพิ่มขึ้นมาอีกเรื่อยๆ)
};

// 🎯 สิ่งที่ต้องทำ:
// 1. จงใช้ Object Method ที่ถูกต้องดึง "รายชื่อวิชาทั้งหมด" ออกมาให้อยู่ในรูปของ Array แล้วเก็บไว้ในตัวแปรชื่อ subjects
// 2. จงใช้ Object Method ที่ถูกต้องดึง "คะแนนทั้งหมด" ออกมาให้อยู่ในรูปของ Array แล้วเก็บไว้ในตัวแปรชื่อ scores
// 3. แสดงผลตัวแปร subjects และ scores ออกมาดูทางหน้าจอ
// เขียนโค้ดของคุณด้านล่างนี้:

const subjects = Object.keys(examScores);
console.log("🚀 ~ subjects:", subjects);
const scores = Object.values(examScores);
console.log("🚀 ~ scores:", scores);
