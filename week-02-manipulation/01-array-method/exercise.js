// ==========================
// ✅ ข้อ 1: Filter + Map
// ==========================
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

// ภารกิจ: จงหา "รายชื่อ (เฉพาะ string)" ของผู้ใช้งานที่ยังเปิดใช้งานอยู่ (isActive: true)
// ผลลัพธ์ที่ต้องการ: ['Alice', 'Charlie']

const findUsers = users
  .filter((user) => user.isActive) // Clean
  .map((user) => user.name);

// ==========================
// ✅ ข้อ 2: Includes + Spread
// ==========================
const tags = ["javascript", "web", "frontend"];

// ภารกิจ: เขียนฟังก์ชัน addTag(allTags, newTag) โดยมีเงื่อนไขว่า ถ้ามีแท็กนั้นอยู่แล้วไม่ต้องเพิ่ม (คืนค่าเดิม) แต่ถ้ายังไม่มี ให้เพิ่มแท็กใหม่เข้าไปที่ท้าย Array โดยห้ามใช้ push()
// ตัวอย่าง: addTag(tags, 'web') ต้องได้ผลลัพธ์เดิม แต่ addTag(tags, 'react') ต้องได้ ['javascript', 'web', 'frontend', 'react']

function addTag(allTags, newTag) {
  if (allTags.includes(newTag)) {
    return allTags;
  } else {
    return [...allTags, newTag];
  }
}

console.log(addTag(tags, "react"));
// ['javascript', 'web', 'frontend', 'react']

// ==========================
// ✅ ข้อ 3: Reduce
// ==========================
const cart = [
  { name: "Notebook", price: 20, quantity: 3 },
  { name: "Mouse", price: 50, quantity: 1 },
  { name: "Pen", price: 5, quantity: 10 },
];

// TODO: หา total = 160

const totalPrice = cart.reduce(
  (cur, item) => cur + item.price * item.quantity,
  0,
);

// ==========================
// ✅ ข้อ 4: Filter (immutable)
// ==========================
const posts = [
  { id: 101, title: "Hello World" },
  { id: 102, title: "Learn JS Array" },
  { id: 103, title: "CSS is Awesome" },
];

// TODO: ลบ id 102 โดยไม่ใช้ splice

const removePosts = posts.filter((post) => post.id !== 102);

// ==========================
// ✅ ข้อ 5: Find
// ==========================
const tickets = [
  { code: "A1", isWinner: false },
  { code: "B3", isWinner: true },
  { code: "C5", isWinner: true },
];

// ภารกิจ: จงหา Object ของตั๋วใบ แรก ที่เป็นตั๋วชนะรางวัล (isWinner: true)
// ผลลัพธ์ที่ต้องการ: { code: 'B3', isWinner: true } (ต้องไม่ใช่การได้มาเป็น Array)

const firstWinner = tickets.find((item) => item.isWinner);

// ==========================
// ✅ ข้อ 6: Every / Some
// ==========================
const students = [
  { name: "Tom", passedSecurity: true },
  { name: "Tim", passedSecurity: true },
  { name: "Ted", passedSecurity: false },
];

// TODO: check ทุกคนผ่านไหม (false)

const checkPass = students.every((item) => item.passedSecurity);

// ==========================
// ✅ ข้อ 7: Sort (immutable)
// ==========================
const prices = [599, 1200, 45, 300, 89];

// TODO: sort มาก -> น้อย (ห้ามแก้ array เดิม)

const sortPrices = prices.toSorted((a, b) => b - a);

// ==========================
// ✅ ข้อ 8: Map + Set
// ==========================
const products = [
  { name: "Shirt", category: "Fashion" },
  { name: "Lipstick", category: "Beauty" },
  { name: "Pants", category: "Fashion" },
  { name: "Cream", category: "Beauty" },
];

// ภารกิจ: ดึงชื่อหมวดหมู่ (category) ออกมาทั้งหมด แต่มีเงื่อนไขว่า "ต้องไม่มีชื่อหมวดหมู่ซ้ำกัน"
// ผลลัพธ์ที่ต้องการ: ['Fashion', 'Beauty']

const setProducts = [...new Set(products.map((product) => product.category))];

// ==========================
// ✅ ข้อ 9: Method chaining
// ==========================
const menu = [
  { name: "Salad", price: 150, type: "Appetizer" },
  { name: "Steak", price: 600, type: "Main" },
  { name: "Soup", price: 120, type: "Appetizer" },
  { name: "Pasta", price: 350, type: "Main" },
];

// ภารกิจ: จงหาผลรวมราคาทั้งหมด ของอาหารที่เป็นประเภท 'Main' เท่านั้น (ใช้การร้อยเรียง Method ต่อกัน)
// ผลลัพธ์ที่ต้องการ: 950 (มาจาก Steak 600 + Pasta 350)

const finalPrice = menu
  .filter((item) => item.type === "Main")
  .reduce((cur, arr) => cur + arr.price, 0);
console.log("🚀 ~ finalPrice:", finalPrice);

// ==========================
// ✅ ข้อ 10: Object.groupBy
// ==========================
const employees = [
  { name: "John", dept: "IT" },
  { name: "Jane", dept: "HR" },
  { name: "Jack", dept: "IT" },
];

// TODO: group by dept

const groupEmp = Object.groupBy(employees, (d) => d.dept);
