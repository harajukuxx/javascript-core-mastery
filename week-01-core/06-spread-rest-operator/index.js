// Spread Operator
const lowScores = [10, 20, 30];
const highScores = [80, 90, 100];

// รวมอาร์เรย์เข้าด้วยกัน และแทรกค่าใหม่ลงไปตรงกลางยังได้!
const allScores = [...lowScores, 50, ...highScores];
console.log(allScores); // 💻 [10, 20, 30, 50, 80, 90, 100]

// Object Shallow Copy
const defaultUser = { role: "guest", theme: "dark", status: "active" };

// ก๊อปปี้ defaultUser มาทั้งหมด แต่ขอ override (เขียนทับ) คีย์ role
const adminUser = { ...defaultUser, role: "admin" };

console.log(adminUser);
// 💻 { role: 'admin', theme: 'dark', status: 'active' }

// Rest Parameter
// ...numbers จะกวาดทุกค่าที่ส่งเข้ามามัดรวมเป็นอาร์เรย์ชื่อ numbers
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // (ได้เรียนลึกวันถัดๆ ไป)
}

console.log(sumAll(1, 2)); // 💻 3
console.log(sumAll(1, 2, 3, 4)); // 💻 10

// กฎเหล็กของ Rest Parameter: มันจะต้องเป็น พารามิเตอร์ตัวสุดท้าย ในวงเล็บเสมอ ห้ามมีตัวอื่นตามหลังมันเด็ดขาด
function setup(theme, ...users) {} // 0K ถูกต้อง
// function setup(...users, theme) { } // ❌ Error! Rest parameter must be last

// Rest + Destructuring
const employee = {
  id: "EMP999",
  name: "Nutthapong",
  salary: 50000,
  department: "IT",
};

// แกะ id และ name ออกมา... ส่วนที่เหลือ (salary, department) ให้รวบไว้ในอ็อบเจกต์ใหม่ชื่อ restInfo
const { id, name, ...restInfo } = employee;

console.log(id); // 💻 "EMP999"
console.log(restInfo); // 💻 { salary: 50000, department: 'IT' }
