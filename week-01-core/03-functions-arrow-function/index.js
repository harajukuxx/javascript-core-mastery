// 1. สร้างฟังก์ชัน (ยังไม่ทำงานจนกว่าจะเรียกใช้)
function sayHello() {
  console.log("สวัสดีครับ!");
}

// 2. เรียกใช้งานฟังก์ชัน (Function Calling)
sayHello(); // 💻 ผลลัพธ์: สวัสดีครับ!
sayHello(); // เรียกซ้ำกี่ครั้งก็ได้

//                      ตรงนี้เรียก Parameter
function greetUser(username) {
  console.log(`ยินดีต้อนรับคุณ ${username}`);
}

//         ตรงนี้เรียก Argument
greetUser("Nutthapong"); // 💻 ยินดีต้อนรับคุณ Nutthapong
greetUser("Somsri"); // 💻 ยินดีต้อนรับคุณ Somsri

// return
function add(a, b) {
  return a + b; // ส่งผลรวมกลับออกไป
  console.log("บรรทัดนี้จะไม่ทำงานแน่นอน!"); // อยู่หลัง return
}

const result = add(5, 10);
console.log(result); // 💻 ผลลัพธ์: 15

// Arrow Function (ฟังก์ชันยุคใหม่)
function getArea1(width, height) {
  return width * height;
}

const getArea2 = (width, height) => {
  return width * height;
};

console.log(getArea2(10, 5));

// ถ้าโค้ดมีบรรทัดเดียวและส่งค่ากลับทันที: สามารถ ถอดปีกกา {} และถอดคำว่า return ออกได้เลย (เรียกว่า Implicit Return)
const double = (x) => x * 2;
