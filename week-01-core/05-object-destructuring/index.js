const user = {
  firstName: "Nutthapong", // key คือ firstName, value คือ "Nutthapong"
  age: 37,
  isDeveloper: true,
};

// console.log(user.firstName); // 💻 ผลลัพธ์: "Nutthapong"
// console.log(user.age); // 💻 ผลลัพธ์: 37

const keyToFind = "firstName";
console.log(user[keyToFind]); // 💻 ผลลัพธ์: "Nutthapong"

// แก้ไขค่าเดิม
user.age = 38;

// เพิ่ม key ใหม่ที่ไม่มีอยู่ก่อนหน้า
user.country = "Thailand";

// console.log(user);
// 💻 ผลลัพธ์: { firstName: 'Nutthapong', age: 38, isDeveloper: true, country: 'Thailand' }

// Object Destructuring
const product = { name: "Laptop", price: 35000, stock: 10 };

// ดึงเฉพาะ name และ price ออกมาเป็นตัวแปรอิสระ
const { name, price } = product;

console.log(name, price); // 💻 Laptop 35000

// เปลี่ยนชื่อตัวแปร โดยใช้เครื่องหมายโคลอน :
const { name: productName, price: productPrice } = product;
console.log(productName); // 💻 Laptop

// Nested Object
const user2 = {
  name: "Nutthapong",
  address: {
    city: "Bangkok",
    zipcode: 10110,
  },
};

// เวลาเรียกใช้ปกติ: ต้องจุดสองต่อ
console.log(user2.address.city); // 💻 Bangkok

// Destructuring Default Values
const userProfile = { name3: "Tina" }; // ไม่มี key ชื่อ role ส่งมา

// ตั้งค่าเริ่มต้นให้ role = "member" ไว้ก่อนเลย
const { name3, role = "member" } = userProfile;
console.log(role); // 💻 member (เพราะในอ็อบเจกต์ไม่มีค่านี้ มันเลยดึงค่าเริ่มต้นมาใช้)

//Method inside Object
const account = {
  username: "Talks Money",
  balance: 5000,

  // นี่คือ Method
  showBalance() {
    // คีย์เวิร์ด 'this' จะหมายถึงอ็อบเจกต์ตัวมันเอง (account)
    console.log(`ยอดเงินในบัญชีของ ${this.username} คือ ${this.balance} บาท`);
  },
};

// เวลาเรียกใช้งาน
account.showBalance(); // 💻 ยอดเงินในบัญชีของ Talks Money คือ 5000 บาท

// Object Methods
const heros = { name: "Ironman", weapon: "Suit" };

console.log(Object.keys(heros)); // 💻 [ 'name', 'weapon' ] (เอาเฉพาะคีย์ออกมา)
console.log(Object.values(heros)); // 💻 [ 'Ironman', 'Suit' ] (เอาเฉพาะค่าออกมาก)
