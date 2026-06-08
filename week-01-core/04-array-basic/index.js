// Array ว่างเปล่า
let emptyList = [];

// Array ที่มีข้อมูลอยู่ข้างใน
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const luckyNumbers = [7, 13, 24, 99];

console.log(fruits[0]); // 💻 ผลลัพธ์: "Apple"
console.log(fruits[2]); // 💻 ผลลัพธ์: "Orange"
console.log(fruits[5]); // 💻 ผลลัพธ์: undefined (เพราะไม่มีตำแหน่งที่ 5)

fruits[1] = "Watermelon";
console.log(fruits.length);

// push(...): ใช้เพิ่มข้อมูลต่อท้าย Array
// pop(): ใช้ดึงข้อมูลตัวสุดท้ายออกจาก Array (และส่งค่านั้นกลับมาให้เราด้วย)

// unshift(...): ใช้เพิ่มข้อมูลเข้าที่ด้านหน้าสุด (หัวแถว)
// shift(): ใช้ดึงข้อมูลตัวแรกสุดออกจาก Array
